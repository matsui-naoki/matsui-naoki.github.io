'use client'

import dynamic from 'next/dynamic'
import { CrystalData } from '@/lib/crystalData'

const CrystalStructure = dynamic(() => import('./CrystalStructure'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-900/50 rounded-xl">
      <div className="text-gray-400">Loading 3D Model...</div>
    </div>
  ),
})

const FBXModel = dynamic(() => import('./FBXModel'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-900/50 rounded-xl">
      <div className="text-gray-400">Loading FBX Model...</div>
    </div>
  ),
})

interface CrystalGalleryProps {
  crystals: CrystalData[]
  showFBXModel?: boolean
}

export default function CrystalGallery({ crystals, showFBXModel = true }: CrystalGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showFBXModel && (
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
          <div className="h-80 relative" style={{ background: 'linear-gradient(135deg, #EFF4FF 0%, #eaebee 100%)' }}>
            <FBXModel 
              url="/LaF3.fbx" 
              name="LaF₃"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              LaF₃ (Lanthanum Fluoride)
            </h3>
            <p className="text-sm text-cyan-400 font-mono mb-2">LaF₃</p>
            <p className="text-xs text-gray-400">3D model imported from FBX file</p>
          </div>
        </div>
      )}
      
      {crystals.map((crystal, index) => (
        <div
          key={index}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="h-80" style={{ background: 'linear-gradient(135deg, #EFF4FF 0%, #eaebee 100%)' }}>
            <CrystalStructure
              atoms={crystal.atoms}
              bonds={crystal.bonds}
              name={crystal.name}
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              {crystal.name}
            </h3>
            <p className="text-sm text-cyan-400 font-mono mb-2">{crystal.formula}</p>
            <p className="text-xs text-gray-400">{crystal.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}