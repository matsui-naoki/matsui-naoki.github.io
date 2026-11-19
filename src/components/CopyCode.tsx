'use client'

// Copy button in the header of a code block on the learning pages.

import { useState } from 'react'

export default function CopyCode(props: { 'data-code'?: string }) {
  const [done, setDone] = useState(false)
  const code = props['data-code'] ?? ''
  return (
    <button
      type="button"
      className="code-copy"
      onClick={async () => {
        try { await navigator.clipboard.writeText(code); setDone(true); setTimeout(() => setDone(false), 2000) } catch { /* clipboard unavailable */ }
      }}
    >
      {done ? 'コピーしました' : 'コピー'}
    </button>
  )
}
