'use client'

import dynamic from 'next/dynamic'
import { CrystalFbxData } from '@/lib/crystalFbxData'

// Function to format chemical formulas with subscript numbers
const formatChemicalFormula = (formula: string) => {
  return formula.replace(/(\d+)/g, '<sub>$1</sub>')
}

const FBXModel = dynamic(() => import('./FBXModel'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-900/50 rounded-xl">
      <div className="text-gray-400">Loading 3D Model...</div>
    </div>
  ),
})

interface FBXCrystalGalleryProps {
  crystals: CrystalFbxData[]
}

export default function FBXCrystalGallery({ crystals }: FBXCrystalGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {crystals.map((crystal, index) => (
        <div 
          key={index} 
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="h-80 relative" style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' }}>
            <FBXModel 
              url={crystal.fbxFile} 
              name={crystal.name}
            />
          </div>
          <div className="p-6">
            <h3 
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
              dangerouslySetInnerHTML={{ __html: formatChemicalFormula(crystal.formula) }}
            />
            <p className="text-sm text-cyan-400 font-mono mb-2">{crystal.description}</p>
            <p className="text-xs text-gray-400">{crystal.properties}</p>
          </div>
        </div>
      ))}
    </div>
  )
}