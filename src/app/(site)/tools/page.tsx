'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'

// 元素の原子量データ（4桁精度）
const atomicWeights: { [key: string]: number } = {
  'H': 1.0080, 'He': 4.0026, 'Li': 6.9400, 'Be': 9.0122, 'B': 10.8110, 'C': 12.0110,
  'N': 14.0070, 'O': 15.9990, 'F': 18.9984, 'Ne': 20.1797, 'Na': 22.9898, 'Mg': 24.3050,
  'Al': 26.9815, 'Si': 28.0850, 'P': 30.9738, 'S': 32.0650, 'Cl': 35.4530, 'Ar': 39.9480,
  'K': 39.0983, 'Ca': 40.0780, 'Sc': 44.9559, 'Ti': 47.8670, 'V': 50.9415, 'Cr': 51.9961,
  'Mn': 54.9380, 'Fe': 55.8450, 'Co': 58.9332, 'Ni': 58.6934, 'Cu': 63.5460, 'Zn': 65.3800,
  'Ga': 69.7230, 'Ge': 72.6300, 'As': 74.9216, 'Se': 78.9710, 'Br': 79.9040, 'Kr': 83.7980,
  'Rb': 85.4678, 'Sr': 87.6200, 'Y': 88.9058, 'Zr': 91.2240, 'Nb': 92.9064, 'Mo': 95.9500,
  'Tc': 98.0000, 'Ru': 101.0700, 'Rh': 102.9055, 'Pd': 106.4200, 'Ag': 107.8682, 'Cd': 112.4110,
  'In': 114.8180, 'Sn': 118.7100, 'Sb': 121.7600, 'Te': 127.6000, 'I': 126.9045, 'Xe': 131.2930,
  'Cs': 132.9055, 'Ba': 137.3270, 'La': 138.9055, 'Ce': 140.1160, 'Pr': 140.9077, 'Nd': 144.2420,
  'Pm': 145.0000, 'Sm': 150.3600, 'Eu': 151.9640, 'Gd': 157.2500, 'Tb': 158.9253, 'Dy': 162.5000,
  'Ho': 164.9303, 'Er': 167.2590, 'Tm': 168.9342, 'Yb': 173.0540, 'Lu': 174.9668, 'Hf': 178.4900,
  'Ta': 180.9479, 'W': 183.8400, 'Re': 186.2070, 'Os': 190.2300, 'Ir': 192.2170, 'Pt': 195.0840,
  'Au': 196.9667, 'Hg': 200.5920, 'Tl': 204.3830, 'Pb': 207.2000, 'Bi': 208.9804, 'Po': 209.0000,
  'At': 210.0000, 'Rn': 222.0000, 'Fr': 223.0000, 'Ra': 226.0000, 'Ac': 227.0000, 'Th': 232.0377,
  'Pa': 231.0359, 'U': 238.0289, 'Np': 237.0000, 'Pu': 244.0000, 'Am': 243.0000, 'Cm': 247.0000
}

export default function Tools() {
  // 分子量計算機の状態
  const [formula, setFormula] = useState('')
  const [molecularWeight, setMolecularWeight] = useState<number | null>(null)
  const [formulaError, setFormulaError] = useState('')

  // 比容量計算機の状態
  const [mw, setMw] = useState('')
  const [electrons, setElectrons] = useState('')
  const [specificCapacity, setSpecificCapacity] = useState<number | null>(null)

  // Cレート計算機の状態
  const [capacity, setCapacity] = useState('')
  const [activeMass, setActiveMass] = useState('')
  const [current, setCurrent] = useState('')
  const [cRate, setCRate] = useState('')
  const [calculationMode, setCalculationMode] = useState<'crate' | 'current'>('crate')

  // 実効圧力計算機の状態
  const [pressureMode, setPressureMode] = useState<'effective-to-display' | 'display-to-effective'>('effective-to-display')
  const [pressArea, setPressArea] = useState('14.52') // デフォルト値
  const [pressAreaType, setPressAreaType] = useState('ms1')
  const [sampleRadius, setSampleRadius] = useState('')
  const [sampleArea, setSampleArea] = useState('')
  const [sampleAreaType, setSampleAreaType] = useState('radius')
  const [inputPressure, setInputPressure] = useState('')
  const [outputPressure, setOutputPressure] = useState<number | null>(null)

  // 組成式をパースして分子量を計算
  const calculateMolecularWeight = () => {
    try {
      setFormulaError('')
      const cleanFormula = formula.replace(/\s/g, '')
      if (!cleanFormula) {
        setFormulaError('組成式を入力してください')
        return
      }

      let totalWeight = 0
      const regex = /([A-Z][a-z]?)(\d*\.?\d*)/g
      let match

      while ((match = regex.exec(cleanFormula)) !== null) {
        const element = match[1]
        const count = match[2] ? parseFloat(match[2]) : 1

        if (atomicWeights[element]) {
          totalWeight += atomicWeights[element] * count
        } else {
          setFormulaError(`未知の元素: ${element}`)
          return
        }
      }

      if (totalWeight === 0) {
        setFormulaError('有効な組成式を入力してください')
        return
      }

      setMolecularWeight(Math.round(totalWeight * 1000) / 1000)
    } catch {
      setFormulaError('計算エラーが発生しました')
    }
  }

  // 実効圧力計算
  const calculatePressure = () => {
    const pressAreaNum = parseFloat(pressArea)
    const inputPressureNum = parseFloat(inputPressure)
    let sampleAreaNum = 0

    if (sampleAreaType === 'radius') {
      const radiusNum = parseFloat(sampleRadius)
      if (radiusNum > 0) {
        sampleAreaNum = Math.PI * Math.pow(radiusNum / 10, 2) // mm -> cm に変換
      }
    } else {
      sampleAreaNum = parseFloat(sampleArea)
    }

    if (pressAreaNum > 0 && inputPressureNum > 0 && sampleAreaNum > 0) {
      let result = 0
      if (pressureMode === 'effective-to-display') {
        // 実効圧力 -> 表示圧: 表示圧 = 実効圧力 × 試料断面積 / プレス器受圧面積
        result = (inputPressureNum * sampleAreaNum) / pressAreaNum
      } else {
        // 表示圧 -> 実効圧力: 実効圧力 = 表示圧 × プレス器受圧面積 / 試料断面積
        result = (inputPressureNum * pressAreaNum) / sampleAreaNum
      }
      setOutputPressure(Math.round(result * 1000) / 1000)
    }
  }

  // プレス器面積の変更処理
  const handlePressAreaChange = (type: string) => {
    setPressAreaType(type)
    if (type === 'ms1') {
      setPressArea('14.52')
    } else if (type === 'ms05') {
      setPressArea('7.16')
    }
  }

  // 比容量を計算（mAh/g）
  const calculateSpecificCapacity = () => {
    const molecularWeightNum = parseFloat(mw)
    const electronsNum = parseFloat(electrons)

    if (molecularWeightNum > 0 && electronsNum > 0) {
      // ファラデー定数: 96485 C/mol = 26.801 Ah/mol
      const faraday = 26.801 // Ah/mol
      const capacity = (electronsNum * faraday * 1000) / molecularWeightNum // mAh/g
      setSpecificCapacity(Math.round(capacity * 100) / 100)
    }
  }

  // Cレート計算
  const calculateCRate = () => {
    const capacityNum = parseFloat(capacity)
    const massNum = parseFloat(activeMass)

    if (calculationMode === 'crate') {
      const currentNum = parseFloat(current)
      if (capacityNum > 0 && massNum > 0 && currentNum > 0) {
        const totalCapacity = capacityNum * massNum / 1000 // mAh
        const rate = currentNum / totalCapacity
        setCRate((Math.round(rate * 100) / 100).toString())
      }
    } else {
      const cRateNum = parseFloat(cRate)
      if (capacityNum > 0 && massNum > 0 && cRateNum > 0) {
        const totalCapacity = capacityNum * massNum / 1000 // mAh
        const currentValue = totalCapacity * cRateNum
        setCurrent((Math.round(currentValue * 100) / 100).toString())
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#ffffff]">
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-black mb-6">
              <span className="text-[#ffffff]">
                CALCULATION TOOLS
              </span>
            </h1>
            <p className="text-xl text-[#cfcfcf] font-light">電池材料研究用計算ツール</p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            
            {/* 分子量計算機 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#111111] rounded p-8 border border-[#262626]"
            >
              <div className="mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  MOLECULAR WEIGHT
                </span>
              </div>
              
              <h2 className="text-2xl font-black mb-6">
                <span className="text-[#ffffff]">
                  分子量計算機
                </span>
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    組成式
                  </label>
                  <input
                    type="text"
                    value={formula}
                    onChange={(e) => setFormula(e.target.value)}
                    placeholder="例: LiFePO4, Ca0.5Sr0.5TiO3"
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                  />
                  {formulaError && (
                    <p className="text-[#f08a8a] text-sm mt-1">{formulaError}</p>
                  )}
                </div>
                
                <button
                  onClick={calculateMolecularWeight}
                  className="w-full bg-[#ffffff] text-[#050505] px-4 py-2 rounded font-bold transition-all duration-300"
                >
                  計算
                </button>
                
                {molecularWeight !== null && (
                  <div className="mt-4 p-4 bg-[#76b900]/10 border border-[#76b900]/30 rounded">
                    <p className="text-sm text-[#cfcfcf]">分子量:</p>
                    <p className="text-2xl font-bold text-[#76b900]">
                      {molecularWeight} g/mol
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* 比容量計算機 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#111111] rounded p-8 border border-[#262626]"
            >
              <div className="mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  SPECIFIC CAPACITY
                </span>
              </div>
              
              <h2 className="text-2xl font-black mb-6">
                <span className="text-[#ffffff]">
                  比容量計算機
                </span>
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    分子量 (g/mol)
                  </label>
                  <input
                    type="number"
                    value={mw}
                    onChange={(e) => setMw(e.target.value)}
                    placeholder="例: 157.757"
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    反応電子数
                  </label>
                  <input
                    type="number"
                    value={electrons}
                    onChange={(e) => setElectrons(e.target.value)}
                    placeholder="例: 1"
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                  />
                </div>
                
                <button
                  onClick={calculateSpecificCapacity}
                  className="w-full bg-[#ffffff] text-[#050505] px-4 py-2 rounded font-bold transition-all duration-300"
                >
                  計算
                </button>
                
                {specificCapacity !== null && (
                  <div className="mt-4 p-4 bg-[#76b900]/10 border border-[#76b900]/30 rounded">
                    <p className="text-sm text-[#cfcfcf]">理論比容量:</p>
                    <p className="text-2xl font-bold text-[#76b900]">
                      {specificCapacity} mAh/g
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Cレート計算機 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#111111] rounded p-8 border border-[#262626]"
            >
              <div className="mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  C-RATE
                </span>
              </div>
              
              <h2 className="text-2xl font-black mb-6">
                <span className="text-[#ffffff]">
                  Cレート計算機
                </span>
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    計算モード
                  </label>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCalculationMode('crate')}
                      className={`flex-1 px-3 py-2 rounded font-medium transition-all ${
                        calculationMode === 'crate'
                          ? 'bg-[#76b900]/20 text-[#76b900] border border-[#76b900]/30'
                          : 'bg-[#1a1a1a] text-[#9a9a9a] border border-[#3a3a3a]'
                      }`}
                    >
                      Cレート算出
                    </button>
                    <button
                      onClick={() => setCalculationMode('current')}
                      className={`flex-1 px-3 py-2 rounded font-medium transition-all ${
                        calculationMode === 'current'
                          ? 'bg-[#76b900]/20 text-[#76b900] border border-[#76b900]/30'
                          : 'bg-[#1a1a1a] text-[#9a9a9a] border border-[#3a3a3a]'
                      }`}
                    >
                      電流値算出
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    比容量 (mAh/g)
                  </label>
                  <input
                    type="number"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    placeholder="例: 170"
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    活物質重量 (mg)
                  </label>
                  <input
                    type="number"
                    value={activeMass}
                    onChange={(e) => setActiveMass(e.target.value)}
                    placeholder="例: 10"
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                  />
                </div>
                
                {calculationMode === 'crate' ? (
                  <div>
                    <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                      電流値 (mA)
                    </label>
                    <input
                      type="number"
                      value={current}
                      onChange={(e) => setCurrent(e.target.value)}
                      placeholder="例: 0.17"
                      className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                      Cレート
                    </label>
                    <input
                      type="number"
                      value={cRate}
                      onChange={(e) => setCRate(e.target.value)}
                      placeholder="例: 0.1"
                      className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                    />
                  </div>
                )}
                
                <button
                  onClick={calculateCRate}
                  className="w-full bg-[#ffffff] text-[#050505] px-4 py-2 rounded font-bold transition-all duration-300"
                >
                  計算
                </button>
                
                {calculationMode === 'crate' && cRate && (
                  <div className="mt-4 p-4 bg-[#76b900]/10 border border-[#76b900]/30 rounded">
                    <p className="text-sm text-[#cfcfcf]">Cレート:</p>
                    <p className="text-2xl font-bold text-[#76b900]">
                      {cRate} C
                    </p>
                  </div>
                )}
                
                {calculationMode === 'current' && current && (
                  <div className="mt-4 p-4 bg-[#76b900]/10 border border-[#76b900]/30 rounded">
                    <p className="text-sm text-[#cfcfcf]">電流値:</p>
                    <p className="text-2xl font-bold text-[#76b900]">
                      {current} mA
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* 実効圧力計算機 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#111111] rounded p-8 border border-[#262626]"
            >
              <div className="mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-[#76b900]/10 text-[#76b900] rounded-full border border-[#76b900]/20">
                  EFFECTIVE PRESSURE
                </span>
              </div>
              
              <h2 className="text-2xl font-black mb-6">
                <span className="text-[#ffffff]">
                  実効圧力計算機
                </span>
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    計算モード
                  </label>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setPressureMode('effective-to-display')}
                      className={`flex-1 px-3 py-2 rounded font-medium transition-all text-xs ${
                        pressureMode === 'effective-to-display'
                          ? 'bg-[#76b900]/20 text-[#76b900] border border-[#76b900]/30'
                          : 'bg-[#1a1a1a] text-[#9a9a9a] border border-[#3a3a3a]'
                      }`}
                    >
                      実効圧力→表示圧
                    </button>
                    <button
                      onClick={() => setPressureMode('display-to-effective')}
                      className={`flex-1 px-3 py-2 rounded font-medium transition-all text-xs ${
                        pressureMode === 'display-to-effective'
                          ? 'bg-[#76b900]/20 text-[#76b900] border border-[#76b900]/30'
                          : 'bg-[#1a1a1a] text-[#9a9a9a] border border-[#3a3a3a]'
                      }`}
                    >
                      表示圧→実効圧力
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    プレス器受圧面積
                  </label>
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handlePressAreaChange('ms1')}
                        className={`flex-1 px-3 py-2 rounded font-medium transition-all text-xs ${
                          pressAreaType === 'ms1'
                            ? 'bg-[#76b900]/20 text-[#76b900] border border-[#76b900]/30'
                            : 'bg-[#1a1a1a] text-[#9a9a9a] border border-[#3a3a3a]'
                        }`}
                      >
                        MS1-*
                      </button>
                      <button
                        onClick={() => handlePressAreaChange('ms05')}
                        className={`flex-1 px-3 py-2 rounded font-medium transition-all text-xs ${
                          pressAreaType === 'ms05'
                            ? 'bg-[#76b900]/20 text-[#76b900] border border-[#76b900]/30'
                            : 'bg-[#1a1a1a] text-[#9a9a9a] border border-[#3a3a3a]'
                        }`}
                      >
                        MS05-*
                      </button>
                      <button
                        onClick={() => handlePressAreaChange('custom')}
                        className={`flex-1 px-3 py-2 rounded font-medium transition-all text-xs ${
                          pressAreaType === 'custom'
                            ? 'bg-[#76b900]/20 text-[#76b900] border border-[#76b900]/30'
                            : 'bg-[#1a1a1a] text-[#9a9a9a] border border-[#3a3a3a]'
                        }`}
                      >
                        カスタム
                      </button>
                    </div>
                    <input
                      type="number"
                      value={pressArea}
                      onChange={(e) => setPressArea(e.target.value)}
                      placeholder="プレス器面積 (cm²)"
                      disabled={pressAreaType !== 'custom'}
                      className={`w-full px-4 py-2 border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none ${
                        pressAreaType === 'custom' ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a]/70 text-[#9a9a9a]'
                      }`}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    試料断面積
                  </label>
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSampleAreaType('radius')}
                        className={`flex-1 px-3 py-2 rounded font-medium transition-all text-xs ${
                          sampleAreaType === 'radius'
                            ? 'bg-[#76b900]/20 text-[#76b900] border border-[#76b900]/30'
                            : 'bg-[#1a1a1a] text-[#9a9a9a] border border-[#3a3a3a]'
                        }`}
                      >
                        半径から計算
                      </button>
                      <button
                        onClick={() => setSampleAreaType('area')}
                        className={`flex-1 px-3 py-2 rounded font-medium transition-all text-xs ${
                          sampleAreaType === 'area'
                            ? 'bg-[#76b900]/20 text-[#76b900] border border-[#76b900]/30'
                            : 'bg-[#1a1a1a] text-[#9a9a9a] border border-[#3a3a3a]'
                        }`}
                      >
                        面積直接入力
                      </button>
                    </div>
                    {sampleAreaType === 'radius' ? (
                      <input
                        type="number"
                        value={sampleRadius}
                        onChange={(e) => setSampleRadius(e.target.value)}
                        placeholder="試料半径 (mm)"
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                      />
                    ) : (
                      <input
                        type="number"
                        value={sampleArea}
                        onChange={(e) => setSampleArea(e.target.value)}
                        placeholder="試料断面積 (cm²)"
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                      />
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#cfcfcf] mb-2">
                    {pressureMode === 'effective-to-display' ? '実効圧力 (GPa)' : '表示圧 (GPa)'}
                  </label>
                  <input
                    type="number"
                    value={inputPressure}
                    onChange={(e) => setInputPressure(e.target.value)}
                    placeholder="圧力値"
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-[#ffffff] placeholder-gray-500 focus:border-[#76b900] focus:outline-none"
                  />
                </div>
                
                <button
                  onClick={calculatePressure}
                  className="w-full bg-[#ffffff] text-[#050505] px-4 py-2 rounded font-bold transition-all duration-300"
                >
                  計算
                </button>
                
                {outputPressure !== null && (
                  <div className="mt-4 p-4 bg-[#76b900]/10 border border-[#76b900]/30 rounded">
                    <p className="text-sm text-[#cfcfcf]">
                      {pressureMode === 'effective-to-display' ? '表示圧:' : '実効圧力:'}
                    </p>
                    <p className="text-2xl font-bold text-[#76b900]">
                      {outputPressure} GPa
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-[#ffffff] text-[#050505] px-4 py-2 rounded shadow-lg transition-all duration-300">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}