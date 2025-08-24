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

// FBX model data
const fbxModels = [
  { url: '/structure/LaF3.fbx', name: 'LaF₃', formula: 'LaF₃', description: 'Lanthanum Fluoride - Tysonite Structure' },
  { url: '/structure/Ba0.5Ca0.35Na0.15H1.85.fbx', name: 'Ba₀.₅Ca₀.₃₅Na₀.₁₅H₁.₈₅', formula: 'Ba₀.₅Ca₀.₃₅Na₀.₁₅H₁.₈₅', description: 'Mixed Metal Hydride' },
  { url: '/structure/Ba0.6La0.4F2.4.fbx', name: 'Ba₀.₆La₀.₄F₂.₄', formula: 'Ba₀.₆La₀.₄F₂.₄', description: 'Barium Lanthanum Fluoride Solid Solution' },
  { url: '/structure/Ba2In2O5.fbx', name: 'Ba₂In₂O₅', formula: 'Ba₂In₂O₅', description: 'Barium Indium Oxide - Brownmillerite' },
  { url: '/structure/BaEr2F8.fbx', name: 'BaEr₂F₈', formula: 'BaEr₂F₈', description: 'Barium Erbium Fluoride' },
  { url: '/structure/Graphite.fbx', name: 'Graphite', formula: 'C', description: 'Layered Carbon Structure' },
  { url: '/structure/K1.54Mg0.77Ti7.23O16.fbx', name: 'Hollandite', formula: 'K₁.₅₄Mg₀.₇₇Ti₇.₂₃O₁₆', description: 'Potassium Titanate - Hollandite Type' },
  { url: '/structure/KSn2F5.fbx', name: 'KSn₂F₅', formula: 'KSn₂F₅', description: 'Potassium Tin Fluoride' },
  { url: '/structure/alpha-AgI.fbx', name: 'α-AgI', formula: 'AgI', description: 'Alpha Silver Iodide - Wurtzite Type' },
  { url: '/structure/beta-AgI.fbx', name: 'β-AgI', formula: 'AgI', description: 'Beta Silver Iodide - Zinc Blende Type' },
  { url: '/structure/beta-alumina.fbx', name: 'β-Alumina', formula: 'Na₂O·11Al₂O₃', description: 'Sodium Beta Alumina - Fast Ion Conductor' }
]

interface CrystalGalleryProps {
  crystals: CrystalData[]
  showFBXModel?: boolean
}

export default function CrystalGallery({ crystals, showFBXModel = true }: CrystalGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showFBXModel && fbxModels.map((model, index) => (
        <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
          <div className="h-80 relative" style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' }}>
            <FBXModel 
              url={model.url} 
              name={model.name}
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              {model.name}
            </h3>
            <p className="text-sm text-cyan-400 font-mono mb-2">{model.formula}</p>
            <p className="text-xs text-gray-400">{model.description}</p>
          </div>
        </div>
      ))}
      
      {crystals.map((crystal, index) => (
        <div
          key={index}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="h-80" style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' }}>
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