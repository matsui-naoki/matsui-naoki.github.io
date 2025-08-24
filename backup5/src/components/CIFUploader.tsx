'use client'

import { useState, useRef } from 'react'
import { CrystalData } from '@/lib/crystalData'
import { parseCIF } from '@/lib/cifParser'

interface CIFUploaderProps {
  onCIFLoad: (crystal: CrystalData) => void
}

export default function CIFUploader({ onCIFLoad }: CIFUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const handleFile = async (file: File) => {
    if (!file.name.endsWith('.cif')) {
      setError('Please upload a .cif file')
      return
    }
    
    try {
      const text = await file.text()
      const crystalData = parseCIF(text, file.name.replace('.cif', ''))
      onCIFLoad(crystalData)
      setError(null)
    } catch (err) {
      setError('Failed to parse CIF file. Please check the file format.')
      console.error(err)
    }
  }
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }
  
  const handleDragLeave = () => {
    setIsDragging(false)
  }
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }
  
  return (
    <div className="mb-8">
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          isDragging 
            ? 'border-cyan-400 bg-cyan-400/10' 
            : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex flex-col items-center space-y-4">
          <svg
            className={`w-12 h-12 ${isDragging ? 'text-cyan-400' : 'text-gray-500'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          
          <div>
            <p className="text-gray-300 mb-2">
              Drag and drop a CIF file here, or
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Browse Files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".cif"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}