'use client'

// Top of the home page: a sped-up walk from the campus gate to building G1, full width, with a short
// poem that appears line by line. A pause button stops the loop; with reduced motion the poster is
// shown, the video waits for play, and the poem appears without animation.

import { useEffect, useRef, useState } from 'react'

export default function CampusFilm({
  src, webm, poster, title, lines, labels
}: {
  src: string
  webm?: string
  poster: string
  title: string
  lines: string[]
  labels: { pause: string; play: string }
}) {
  const video = useRef<HTMLVideoElement>(null)
  const [shown, setShown] = useState(false)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const v = video.current
    if (!v) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause(); setPlaying(false)
    }
    const id = requestAnimationFrame(() => setShown(true))
    // pause when scrolled out of view, resume when back (unless the visitor paused it)
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) v.pause()
      else if (playing) v.play().catch(() => {})
    }, { threshold: 0.2 })
    io.observe(v)
    return () => { cancelAnimationFrame(id); io.disconnect() }
  }, [playing])

  const toggle = () => {
    const v = video.current
    if (!v) return
    if (v.paused) { v.play().catch(() => {}); setPlaying(true) } else { v.pause(); setPlaying(false) }
  }

  return (
    <section id="home" className="relative h-[100svh] min-h-[560px] max-h-[980px] overflow-hidden bg-black">
      <video
        ref={video}
        className="absolute inset-0 w-full h-full object-cover"
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/35 sm:to-black/10" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-20 sm:bottom-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-[#76b900] text-[15px] font-semibold mb-5">{title}</p>
          <p className="text-white text-[1.6rem] sm:text-[2.3rem] lg:text-[2.8rem] leading-[1.4] max-w-[44rem] [word-break:keep-all] [overflow-wrap:anywhere]">
            {lines.map((l, i) => (
              <span
                key={l}
                className={`block motion-safe:transition-all motion-safe:duration-[1400ms] ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 motion-safe:translate-y-3'}`}
                style={{ transitionDelay: shown ? `${300 + i * 1300}ms` : '0ms' }}
              >
                {l}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? labels.pause : labels.play}
            className="w-10 h-10 rounded-full border border-white/50 grid place-items-center text-white hover:border-[#76b900] hover:text-[#76b900] transition-colors"
          >
            {playing ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="1.5" y="1" width="3" height="10" /><rect x="7.5" y="1" width="3" height="10" /></svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M2 1l9 5-9 5z" /></svg>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
