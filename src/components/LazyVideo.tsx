'use client'

// A muted, looping background video that downloads nothing until it scrolls near the viewport,
// plays only while visible, and stays on its poster for visitors who prefer reduced motion.

import { useEffect, useRef, useState } from 'react'

export default function LazyVideo({ src, poster, className }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(false)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(([e]) => {
      setVisible(e.isIntersecting)
      if (e.isIntersecting) setLoad(true)
    }, { rootMargin: '200px 0px' })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  // play once the source is attached and the video is on screen; pause when it scrolls away
  useEffect(() => {
    const v = ref.current
    if (!v || !load) return
    if (visible) v.play().catch(() => {})
    else v.pause()
  }, [load, visible])

  return (
    <video
      ref={ref}
      className={className}
      src={load ? src : undefined}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      aria-hidden="true"
    />
  )
}
