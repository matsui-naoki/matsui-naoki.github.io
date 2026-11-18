// Figures for the learning pages' small markdown renderers.
//
//   ![alt text](/learning/vasp/figure.webp "Caption, may contain <sub>…</sub>")
//
// A standalone image line becomes a <figure> on a white card (the slide figures have white
// backgrounds) with the caption underneath; clicking opens the full-size image. Must run before the
// renderers' link step, which would otherwise turn "[alt](src)" into a link.

const card =
  'block bg-white rounded p-2 sm:p-3 ring-1 ring-[#262626] hover:ring-[#76b900]/60 transition-shadow'

function figure(alt: string, src: string, caption?: string) {
  const cap = caption
    ? `<figcaption class="mt-2 text-sm text-[#9a9a9a] leading-relaxed">${caption}</figcaption>`
    : ''
  return (
    `<figure class="my-8 max-w-3xl">` +
    `<a href="${src}" target="_blank" rel="noopener" class="${card}" aria-label="${alt}（拡大表示）">` +
    `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" class="w-full h-auto"></a>` +
    cap +
    `</figure>`
  )
}

// caption runs to the closing `")` (it may already contain <sub class="…"> from earlier steps)
const IMG = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"(.*?)")?\)/

export function mdFigures(html: string): string {
  // an image alone in its paragraph: replace the whole <p> so the figure isn't nested in it
  html = html.replace(
    new RegExp(`<p[^>]*>\\s*${IMG.source}\\s*</p>`, 'g'),
    (_m, alt, src, cap) => figure(alt, src, cap)
  )
  // any remaining (inline) image
  return html.replace(new RegExp(IMG.source, 'g'), (_m, alt, src, cap) => figure(alt, src, cap))
}
