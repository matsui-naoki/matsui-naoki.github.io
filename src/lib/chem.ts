// Splits text written with Unicode sub/superscript characters ('PbSn₁₋ₓInₓF₄₊ₓ', 'F⁻', '10⁻⁴')
// into runs, so they can be set as real <sub>/<sup> in the body font instead of the Unicode glyphs.
// Used by components/Chem.tsx (React) and the build-time Markdown renderer (lib/markdown.ts).

const SUB: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '₊': '+', '₋': '−', 'ₓ': 'x', '₍': '(', '₎': ')', 'ₙ': 'n', '.': '.'
}
const SUP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '−', '⁽': '(', '⁾': ')', 'ⁿ': 'n'
}
/** composition variables, set in italic inside subscripts */
export const CHEM_VARS = new Set(['x', 'y', 'n', 'δ'])

export type ChemRun = { kind: 'text' | 'sub' | 'sup'; text: string }

export function chemRuns(s: string): ChemRun[] {
  const runs: ChemRun[] = []
  const chars = Array.from(s)
  let kind: ChemRun['kind'] = 'text', buf = ''
  const flush = () => { if (buf) runs.push({ kind, text: buf }); buf = '' }
  chars.forEach((c, i) => {
    // a '.' is subscript only between subscript characters (Li₀.₅)
    const sub = c in SUB && (c !== '.' || (kind === 'sub' && (chars[i + 1] ?? '') in SUB && chars[i + 1] !== '.'))
    const k: ChemRun['kind'] = sub ? 'sub' : c in SUP ? 'sup' : 'text'
    if (k !== kind) { flush(); kind = k }
    buf += k === 'sub' ? SUB[c] : k === 'sup' ? SUP[c] : c
  })
  flush()
  return runs
}

export const hasChem = (s: string) => /[₀-₉₊₋ₓₙ₍₎⁰¹²³⁴-⁹⁺⁻ⁿ⁽⁾]/.test(s)
