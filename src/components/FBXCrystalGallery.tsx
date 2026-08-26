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
    <div className="w-full h-full flex items-center justify-center bg-[#16191c]/50 rounded">
      <div className="text-[#8b959a]">Loading 3D Model...</div>
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
          className="bg-[#16191c]/50 backdrop-blur-sm border border-[#262b2e] rounded overflow-hidden hover:border-[#3a4247] transition-all duration-300"
        >
          <div className="h-80 relative" style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' }}>
            <FBXModel 
              url={crystal.fbxFile} 
              name={crystal.name}
            />
          </div>
          <div className="p-6">
            <h3 
              className="text-xl font-bold text-[#e6e9ea] mb-2"
              dangerouslySetInnerHTML={{ __html: formatChemicalFormula(crystal.formula) }}
            />
            <p className="text-sm text-[#6fc3cf] font-mono mb-2">{crystal.description}</p>
            <p className="text-xs text-[#8b959a]">{crystal.properties}</p>
          </div>
        </div>
      ))}
    </div>
  )
}