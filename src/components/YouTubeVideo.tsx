'use client'

// A YouTube video that loads only when played: until then it is a local thumbnail
// (public/video/yt/<id>.jpg) with a play button, so the page makes no requests to YouTube.
// On play it swaps in the privacy-enhanced youtube-nocookie.com player.

import { useState } from 'react'

export default function YouTubeVideo({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="relative w-full aspect-video bg-black rounded overflow-hidden border border-[#262626]">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 w-full h-full" aria-label={`動画を再生：${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/video/yt/${id}.jpg`} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="w-16 h-16 rounded-full bg-black/70 group-hover:bg-[#76b900] grid place-items-center transition-colors">
              <svg width="22" height="22" viewBox="0 0 12 12" fill="white" aria-hidden="true"><path d="M3 1.5l7.5 4.5L3 10.5z" /></svg>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
