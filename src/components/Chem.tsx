// Renders a formula written with Unicode sub/superscript characters (e.g. 'PbSn₁₋ₓInₓF₄₊ₓ', 'F⁻')
// as real <sub>/<sup> markup in the body font, so indices and charges sit at the right size and
// height. Composition variables (x, y, n, δ) are set in italic; minus signs become U+2212.

import { Fragment } from 'react'
import { chemRuns, CHEM_VARS } from '@/lib/chem'

export default function Chem({ children }: { children: string }) {
  return (
    <span className="chem">
      {chemRuns(children).map((r, k) => {
        if (r.kind === 'text') return <Fragment key={k}>{r.text}</Fragment>
        if (r.kind === 'sup') return <sup key={k}>{r.text}</sup>
        return <sub key={k}>{Array.from(r.text).map((c, i) => (CHEM_VARS.has(c) ? <i key={i}>{c}</i> : <Fragment key={i}>{c}</Fragment>))}</sub>
      })}
    </span>
  )
}
