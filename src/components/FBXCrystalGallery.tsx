'use client'

// Crystal structure cards. Each card shows a pre-rendered thumbnail (public/structure/thumbs); the
// interactive 3D view (GLBModel) loads only when the visitor opens a card, and only one is open at a
// time. Models are GLB files converted from the original FBX exports (public/structure/glb).

import dynamic from 'next/dynamic'
import { Fragment, useEffect, useState } from 'react'
import { CrystalFbxData } from '@/lib/crystalFbxData'

const GLBModel = dynamic(() => import('./GLBModel'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center text-[#555] text-sm">3Dモデルを読み込み中…</div>
  ),
})

const base = (file: string) => file.replace(/^.*\//, '').replace(/\.fbx$/i, '')

// 'Ba0.5Ca0.35Na0.15H1.85' -> Ba<sub>0.5</sub>Ca<sub>0.35</sub>…
function Formula({ text }: { text: string }) {
  return (
    <span className="chem">
      {text.split(/(\d+(?:\.\d+)?)/).map((p, i) =>
        /^\d/.test(p) && i > 0 ? <sub key={i}>{p}</sub> : <Fragment key={i}>{p}</Fragment>
      )}
    </span>
  )
}

export default function FBXCrystalGallery({ crystals }: { crystals: CrystalFbxData[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const [reduce, setReduce] = useState(false)
  useEffect(() => { setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches) }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {crystals.map((crystal, index) => {
        const name = base(crystal.fbxFile)
        const isOpen = open === index
        return (
          <div key={crystal.fbxFile} className="bg-[#111111] border border-[#262626] rounded overflow-hidden hover:border-[#3a3a3a] transition-colors">
            <div className="h-80 relative" style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' }}>
              {isOpen ? (
                <>
                  <GLBModel url={`/structure/glb/${name}.glb`} reduceMotion={reduce} />
                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    className="absolute top-3 right-3 rounded bg-black/70 text-white text-xs px-3 py-1.5 hover:bg-black"
                  >
                    閉じる
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  className="group absolute inset-0 w-full h-full"
                  aria-label={`${crystal.name} の3Dモデルを開く`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/structure/thumbs/${name}.webp`}
                    alt={`${crystal.name} の結晶構造`}
                    width={800}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute bottom-3 right-3 rounded bg-black/70 text-white text-xs px-3 py-1.5 group-hover:bg-[#76b900] group-hover:text-black transition-colors">
                    3Dで回転・拡大
                  </span>
                </button>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#ffffff] mb-2"><Formula text={crystal.formula} /></h3>
              <p className="text-sm text-[#76b900] mb-2">{crystal.description}</p>
              <p className="text-xs text-[#9a9a9a]">{crystal.properties}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
