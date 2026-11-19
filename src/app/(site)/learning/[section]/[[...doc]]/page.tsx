// A learning document, rendered from Markdown at build time.
// /learning/<section> shows the section's first document; /learning/<section>/<doc> the others.

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SimpleNavigation from '@/components/SimpleNavigation'
import CopyCode from '@/components/CopyCode'
import { SECTIONS, findSection } from '@/lib/learning'
import { renderLearningDoc } from '@/lib/markdown'

type Params = { section: string; doc?: string[] }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return SECTIONS.flatMap((s) => [{ section: s.slug, doc: [] }, ...s.docs.map((d) => ({ section: s.slug, doc: [d.slug] }))])
}

function resolve({ section, doc }: Params) {
  const s = findSection(section)
  if (!s || (doc && doc.length > 1)) return null
  const d = doc?.length ? s.docs.find((x) => x.slug === doc[0]) : s.docs[0]
  return d ? { s, d } : null
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const r = resolve(await params)
  if (!r) return {}
  return {
    title: { absolute: `${r.d.title}｜${r.s.title} | 松井直喜` },
    description: `${r.s.title}：${r.d.title}（${r.d.sub}）。東京科学大学 松井直喜の学習リソース。`,
    alternates: { canonical: `/learning/${r.s.slug}/${r.d.slug}` }
  }
}

export default async function LearningDocPage({ params }: { params: Promise<Params> }) {
  const r = resolve(await params)
  if (!r) notFound()
  const { s, d } = r
  const { content, toc } = await renderLearningDoc(d.file, { 'code-copy': CopyCode as never })

  const docLink = (x: typeof d) => (
    <Link
      key={x.slug}
      href={`/learning/${s.slug}/${x.slug}`}
      aria-current={x.slug === d.slug ? 'page' : undefined}
      className={`block p-4 rounded border transition-colors ${x.slug === d.slug ? 'bg-[#1a1a1a] border-[#76b900]/50' : 'bg-[#1a1a1a]/70 border-[#3a3a3a]/30 hover:border-[#76b900]/30 hover:bg-[#1a1a1a]'}`}
    >
      <span className="flex items-center gap-3">
        <span className="text-xl font-bold text-[#cfcfcf] w-14 shrink-0">{x.icon}</span>
        <span>
          <span className="block font-semibold text-[#ffffff]">{x.title}</span>
          <span className="block text-xs text-[#9a9a9a] mt-1">{x.sub}</span>
        </span>
      </span>
    </Link>
  )

  return (
    <div id="top" className="min-h-screen bg-[#050505] text-[#ffffff]">
      <SimpleNavigation />

      <section className="pt-24 pb-8 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-black mb-2">{s.title}</h1>
            <p className="text-[#9a9a9a] text-sm lg:text-base">{s.subtitle}</p>
          </div>
          <Link href="/learning" className="shrink-0 px-4 py-2 border border-[#76b900]/30 text-[#76b900] rounded hover:bg-[#76b900]/10 transition-colors">
            <span className="hidden sm:inline">← 学習ページに戻る</span>
            <span className="sm:hidden" aria-label="学習ページに戻る">←</span>
          </Link>
        </div>
      </section>

      {/* Mobile: documents and contents, no script needed */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 pt-4 space-y-2">
        <details className="bg-[#111111] border border-[#262626] rounded">
          <summary className="px-4 py-3 cursor-pointer text-[#76b900] font-bold">教材を選ぶ（{d.title}）</summary>
          <nav className="p-3 pt-0 space-y-2">{s.docs.map(docLink)}</nav>
        </details>
        {toc.length > 0 && (
          <details className="bg-[#111111] border border-[#262626] rounded">
            <summary className="px-4 py-3 cursor-pointer text-[#76b900] font-bold">このページの目次</summary>
            <nav className="px-4 pb-3 space-y-1 text-sm">
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`} className={`block text-[#cfcfcf] hover:text-[#76b900] ${t.depth === 3 ? 'pl-4 text-[#9a9a9a]' : ''}`}>{t.text}</a>
              ))}
            </nav>
          </details>
        )}
      </div>

      <div className="flex min-h-screen">
        <aside className="hidden lg:block w-80 shrink-0 bg-[#111111]/90 border-r border-[#262626]">
          <div className="sticky top-20 p-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4 text-[#76b900]">教材</h2>
            <nav className="space-y-2">{s.docs.map(docLink)}</nav>

            {toc.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-bold text-[#76b900] mb-2">このページの目次</h3>
                <nav className="space-y-1 text-sm">
                  {toc.map((t) => (
                    <a key={t.id} href={`#${t.id}`} className={`block py-0.5 text-[#cfcfcf] hover:text-[#76b900] ${t.depth === 3 ? 'pl-4 text-[#9a9a9a] text-xs' : ''}`}>{t.text}</a>
                  ))}
                </nav>
              </div>
            )}

            <div className="mt-8 p-4 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
              <h3 className="text-sm font-bold text-[#76b900] mb-2">学習のポイント</h3>
              <ul className="text-xs text-[#9a9a9a] space-y-1">{s.points.map((p) => <li key={p}>• {p}</li>)}</ul>
            </div>
            {s.resources && (
              <div className="mt-4 p-4 bg-[#1a1a1a]/70 rounded border border-[#3a3a3a]/30">
                <h3 className="text-sm font-bold text-[#76b900] mb-2">関連リソース</h3>
                <ul className="text-xs text-[#9a9a9a] space-y-1">{s.resources.map((p) => <li key={p}>• <span className="text-[#8fd400]">{p}</span></li>)}</ul>
              </div>
            )}
          </div>
        </aside>

        <main className="flex-1 min-w-0 max-w-4xl mx-auto p-4 lg:p-8">
          <div className="mb-8 pb-6 border-b border-[#262626] flex items-center gap-3">
            <span className="text-2xl font-bold text-[#cfcfcf]">{d.icon}</span>
            <h2 className="text-3xl font-black">{d.title}</h2>
          </div>
          <article className="markdown-content">{content}</article>
        </main>
      </div>

      <a href="#top" aria-label="ページの先頭へ" className="fixed bottom-8 right-8 bg-[#1a1a1a]/90 text-[#76b900] p-3 rounded-full shadow-lg border border-[#76b900]/30 hover:bg-[#262626]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
      </a>
    </div>
  )
}
