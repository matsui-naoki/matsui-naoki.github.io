// Build-time Markdown → React for the learning pages (server only; nothing runs in the browser).
//
// Pipeline: GFM Markdown (with the raw HTML the content uses, e.g. <sub>, <img>) → hast →
// figures from `![alt](src "caption")` → sanitize (allow-list) → heading ids → chemical
// formulas (Unicode sub/superscripts → <sub>/<sup>) → code highlighting (Shiki) → React elements.
// Sanitizing happens before the trusted transforms, so only our own markup can add styles.

import fs from 'node:fs/promises'
import path from 'node:path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkCjkFriendly from 'remark-cjk-friendly'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import { visit, SKIP } from 'unist-util-visit'
import { fromHtml } from 'hast-util-from-html'
import { toString } from 'hast-util-to-string'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki'
import type { Root, Element, ElementContent, Text } from 'hast'
import type { ComponentType, ReactNode } from 'react'
import { chemRuns, CHEM_VARS } from './chem'

export type TocItem = { id: string; text: string; depth: number }

const el = (tagName: string, properties: Element['properties'], children: ElementContent[] = []): Element =>
  ({ type: 'element', tagName, properties, children })
const txt = (value: string): Text => ({ type: 'text', value })

// p > img[title] (alone) → <figure><a><img></a><figcaption>…</figcaption></figure>; caption may hold <sub>/<sup>
function rehypeFigures() {
  return (tree: Root) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'p' || !parent || index === undefined) return
      const kids = node.children.filter((c) => !(c.type === 'text' && !c.value.trim()))
      const img = kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'img' ? kids[0] : null
      if (!img) return
      const { src, alt, title } = img.properties as { src?: string; alt?: string; title?: string }
      if (!src) return
      const image = el('img', { src, alt: alt ?? '', loading: 'lazy', decoding: 'async' })
      const children: ElementContent[] = [el('a', { href: src, target: '_blank', rel: ['noopener'], className: ['figure-link'], ariaLabel: `${alt ?? ''}（拡大表示）` }, [image])]
      if (title) children.push(el('figcaption', {}, fromHtml(title, { fragment: true }).children as ElementContent[]))
      parent.children[index] = el('figure', {}, children)
      return SKIP
    })
  }
}

const schema = {
  ...defaultSchema,
  clobberPrefix: '',
  tagNames: [...(defaultSchema.tagNames ?? []), 'figure', 'figcaption', 'sub', 'sup', 'details', 'summary'],
  attributes: {
    ...defaultSchema.attributes,
    '*': [...(defaultSchema.attributes?.['*'] ?? []), 'className'],
    a: [...(defaultSchema.attributes?.a ?? []), 'target', 'rel', 'ariaLabel'],
    img: [...(defaultSchema.attributes?.img ?? []), 'loading', 'decoding', 'width', 'height']
  }
}

// open external links in a new tab
function rehypeLinks() {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      const href = node.tagName === 'a' ? String(node.properties.href ?? '') : ''
      if (/^https?:\/\//.test(href)) { node.properties.target = '_blank'; node.properties.rel = ['noopener', 'noreferrer'] }
    })
  }
}

// Unicode sub/superscripts in text → <sub>/<sup> (variables italic), outside code
function rehypeChem() {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre' || node.tagName === 'code') return SKIP
      node.children = node.children.flatMap((c): ElementContent[] => {
        if (c.type !== 'text' || !/[₀-₉₊₋ₓₙ₍₎⁰¹²³⁴-⁹⁺⁻ⁿ⁽⁾]/.test(c.value)) return [c]
        return chemRuns(c.value).map((r): ElementContent => {
          if (r.kind === 'text') return txt(r.text)
          if (r.kind === 'sup') return el('sup', {}, [txt(r.text)])
          return el('sub', {}, Array.from(r.text).map((ch) => (CHEM_VARS.has(ch) ? el('i', {}, [txt(ch)]) : txt(ch))))
        })
      })
    })
  }
}

// ```lang blocks → Shiki-highlighted <pre>, with a header (language, copy button); long blocks fold
function rehypeCode() {
  return async (tree: Root) => {
    const jobs: Promise<void>[] = []
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre' || !parent || index === undefined) return
      const code = node.children.find((c): c is Element => c.type === 'element' && c.tagName === 'code')
      if (!code) return
      const cls = (code.properties.className as string[] | undefined) ?? []
      const lang = (cls.find((c) => c.startsWith('language-')) ?? 'language-text').slice(9)
      const source = toString(code).replace(/\n$/, '')
      const lines = source.split('\n').length
      jobs.push((async () => {
        let pre: Element
        try {
          // very long listings stay plain: per-token colours would make the page several MB
          if (lines > 150) throw new Error('plain')
          const h = await codeToHast(source, { lang, theme: 'dark-plus' })
          pre = h.children[0] as Element
        } catch {
          pre = el('pre', { className: ['plain'] }, [el('code', {}, [txt(source)])])
        }
        const head = el('div', { className: ['code-head'] }, [
          el('span', { className: ['code-lang'] }, [txt(lang)]),
          el('code-copy', { dataCode: source })
        ])
        const block = el('div', { className: ['code-block'] }, [head, pre])
        parent.children[index] = lines > 14
          ? el('details', { className: ['code-fold'] }, [el('summary', {}, [txt(`コードを表示（${lang}、${lines}行）`)]), block])
          : block
      })())
      return SKIP
    })
    await Promise.all(jobs)
  }
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkCjkFriendly)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeFigures)
  .use(rehypeSanitize, schema)
  .use(rehypeSlug)
  .use(rehypeLinks)
  .use(rehypeChem)
  .use(rehypeCode)

export async function renderLearningDoc(file: string, components: Record<string, ComponentType<never>>) {
  const md = await fs.readFile(path.join(process.cwd(), 'public', 'content', file), 'utf8')
  const tree = (await processor.run(processor.parse(md))) as Root
  const toc: TocItem[] = []
  visit(tree, 'element', (node) => {
    if ((node.tagName === 'h2' || node.tagName === 'h3') && node.properties.id) {
      toc.push({ id: String(node.properties.id), text: toString(node), depth: node.tagName === 'h2' ? 2 : 3 })
    }
  })
  const content = toJsxRuntime(tree, { Fragment, jsx, jsxs, components: components as never }) as ReactNode
  return { content, toc }
}
