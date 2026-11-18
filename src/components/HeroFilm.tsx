'use client'

// Full-width opening film (Shure-style hero): an autoplaying, muted loop with the lab headline,
// a caption for the current scene synced to playback, a segmented progress bar that seeks to a
// scene, and a pause button. With reduced motion the film waits for the visitor to press play.

import { useEffect, useRef, useState } from 'react'

export type Chapter = { at: number; label: string; text?: string; tags?: string[] }

export default function HeroFilm({
  src, webm, poster, chapters, children, labels, id = 'home', lazy = false
}: {
  id?: string
  lazy?: boolean
  src: string
  webm?: string
  poster: string
  chapters: Chapter[]
  children: React.ReactNode
  labels: { pause: string; play: string; scene: (i: number, label: string) => string }
}) {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [t, setT] = useState(0)
  const [dur, setDur] = useState(0)

  useEffect(() => {
    const v = video.current
    if (!v) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause(); setPlaying(false)
    }
    const onTime = () => setT(v.currentTime)
    const onMeta = () => setDur(v.duration || 0)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('loadedmetadata', onMeta)
    // pause when scrolled out of view
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) v.pause(); else if (playing) v.play().catch(() => {}) }, { threshold: 0.2 })
    io.observe(v)
    return () => { v.removeEventListener('timeupdate', onTime); v.removeEventListener('loadedmetadata', onMeta); io.disconnect() }
  }, [playing])

  const toggle = () => {
    const v = video.current
    if (!v) return
    if (v.paused) { v.play().catch(() => {}); setPlaying(true) } else { v.pause(); setPlaying(false) }
  }
  let idx = 0
  chapters.forEach((c, i) => { if (t >= c.at) idx = i })
  const ch = chapters[idx]
  const ends = chapters.map((c, i) => (i + 1 < chapters.length ? chapters[i + 1].at : dur || c.at + 5))

  return (
    <section id={id} className="relative h-[100svh] min-h-[560px] max-h-[980px] overflow-hidden bg-black">
      <video
        ref={video}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={!lazy}
        muted
        loop
        playsInline
        preload={lazy ? 'none' : 'metadata'}
        poster={poster}
        aria-hidden="true"
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" aria-hidden="true" />

      {/* scene caption */}
      <div className="absolute top-24 sm:top-28 left-5 sm:left-8 lg:left-[max(2rem,calc((100vw-72rem)/2+2rem))] max-w-[36rem]" aria-live="polite">
        <div key={idx} className="fade-up">
          <div className="text-[13px] font-medium text-[#76b900] mb-1.5 tabular-nums">{String(idx + 1).padStart(2, '0')}</div>
          <p className="text-[17px] sm:text-[20px] text-white leading-[1.5]">{ch.label}</p>
          {ch.text && <p className="mt-2 text-[15px] sm:text-[17px] text-white/85 leading-[1.6]">{ch.text}</p>}
          {ch.tags && (
            <ul className="flex flex-wrap gap-2 mt-3">
              {ch.tags.map((x) => (
                <li key={x} className="text-[13px] text-black bg-[#76b900] rounded-full px-3 py-1 font-medium">{x}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* headline */}
      <div className="absolute inset-x-0 bottom-20 sm:bottom-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">{children}</div>
      </div>

      {/* controls: pause and a segmented progress bar that seeks to a scene */}
      <div className="absolute inset-x-0 bottom-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center gap-4">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? labels.pause : labels.play}
            className="w-10 h-10 shrink-0 rounded-full border border-white/50 grid place-items-center text-white hover:border-[#76b900] hover:text-[#76b900] transition-colors"
          >
            {playing ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="1.5" y="1" width="3" height="10" /><rect x="7.5" y="1" width="3" height="10" /></svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M2 1l9 5-9 5z" /></svg>
            )}
          </button>
          <ol className="flex-1 flex gap-1.5">
            {chapters.map((c, i) => {
              const span = Math.max(0.1, ends[i] - c.at)
              const fill = i < idx ? 1 : i === idx ? Math.min(1, Math.max(0, (t - c.at) / span)) : 0
              return (
                <li key={c.at} className="flex-1" style={{ flexGrow: span }}>
                  <button
                    type="button"
                    onClick={() => { if (video.current) { video.current.currentTime = c.at + 0.01; setT(c.at) } }}
                    aria-label={labels.scene(i + 1, c.label)}
                    className="block w-full py-2 group"
                  >
                    <span className="block h-[3px] bg-white/25 rounded-full overflow-hidden">
                      <span className="block h-full bg-[#76b900] group-hover:bg-white transition-colors" style={{ width: `${fill * 100}%` }} />
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
