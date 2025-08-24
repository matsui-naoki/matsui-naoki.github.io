'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* HERO SECTION - ULTRA TECH */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="mb-8">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-4 py-2 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30 inline-block"
                >
                  [ ADVANCED MATERIALS LABORATORY ]
                </motion.span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl lg:text-8xl font-black mb-8 leading-none"
              >
                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent block">
                  MATSUI
                </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent block">
                  RESEARCH
                </span>
                <span className="text-white block text-6xl lg:text-7xl">
                  LAB
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-300 mb-8 font-light leading-relaxed"
              >
                固体イオニクス × AI × 量子計算<br/>
                <span className="text-cyan-400">次世代エネルギーシステムの創造</span>
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold overflow-hidden">
                  <span className="relative z-10">EXPLORE RESEARCH →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="border border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm">
                  VIEW PUBLICATIONS
                </button>
              </motion.div>
              
              {/* Tech Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                {[
                  { number: '15+', label: 'PAPERS' },
                  { number: '3', label: 'PATENTS' },
                  { number: '∞', label: 'INNOVATION' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs font-mono text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
              style={{ y }}
            >
              <div className="relative">
                {/* Holographic Frame */}
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <div className="absolute -inset-2 border border-cyan-400/30 rounded-2xl"></div>
                
                <Image
                  src="/solid-state-battery.jpg"
                  alt="Solid State Battery"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl border border-gray-800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Tech HUD Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-green-400">ACTIVE</span>
                    </div>
                    <div className="text-sm font-bold">全固体電池システム</div>
                    <div className="text-xs text-cyan-400 font-mono">Ver. 2025.1</div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-blue-400/50">
                    <div className="text-xs font-mono text-blue-400">POWER: 99.9%</div>
                    <div className="text-xs font-mono text-gray-300">EFFICIENCY: MAX</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESEARCH DOMAINS - ULTRA TECH */}
      <section id="research" className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="px-4 py-2 text-xs font-mono bg-purple-500/10 text-purple-400 rounded-full border border-purple-400/30">
                [ RESEARCH MATRIX ]
              </span>
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                ADVANCED DOMAINS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light">
              量子レベルから材料システム全体まで、マルチスケールアプローチによる革新的研究
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl"></div>
                <div className="absolute -inset-1 border border-purple-400/30 rounded-2xl"></div>
                <Image
                  src="/potential_migration.jpg"
                  alt="Ion Migration Simulation"
                  width={500}
                  height={350}
                  className="relative rounded-2xl shadow-2xl border border-gray-800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Tech Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-purple-400/50">
                    <div className="text-xs font-mono text-purple-400 mb-1">QUANTUM SIM</div>
                    <div className="text-sm font-bold">イオン移動解析</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                QUANTUM MECHANICS
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                固体電解質中でのイオン移動を量子力学レベルで解析。
                第一原理計算とAI学習により、従来では不可能だった
                <span className="text-cyan-400"> 原子レベルでの設計</span>を実現。
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'QUANTUM SIMULATION', value: '99.7%', color: 'cyan' },
                  { label: 'AI PREDICTION', value: '98.5%', color: 'blue' },
                  { label: 'MATERIAL DESIGN', value: '97.2%', color: 'purple' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-${item.color}-400 font-mono text-sm`}>{item.label}</span>
                      <span className={`text-${item.color}-400 font-mono text-sm`}>{item.value}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className={`bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 h-2 rounded-full transition-all duration-1000`} style={{width: item.value}}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Research Cards - Ultra Tech */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "FLUORIDE ION\nCONDUCTORS",
                description: "全固体フッ化物電池のための革新的イオン伝導体材料システムの構築",
                icon: "⚛️",
                color: "from-cyan-400 to-blue-500",
                stats: { power: "15.7 TW", efficiency: "99.3%" },
                delay: 0
              },
              {
                title: "AI MATERIAL\nDESIGN",
                description: "量子機械学習とニューラルネットワークによる次世代材料探索エンジン",
                icon: "🧠",
                color: "from-blue-500 to-purple-500",
                stats: { power: "2.3 EX", efficiency: "98.7%" },
                delay: 0.2
              },
              {
                title: "HYDRIDE ION\nSYSTEMS",
                description: "革新的電気化学デバイスのためのヒドリドイオン伝導マトリックス",
                icon: "🔬",
                color: "from-purple-500 to-pink-500",
                stats: { power: "8.9 PW", efficiency: "97.4%" },
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                className="group relative perspective-1000"
              >
                <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-400/25`}>
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-6 leading-tight">
                    {item.title.split('\n').map((line, i) => (
                      <span key={i} className={`block bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {line}
                      </span>
                    ))}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">{item.description}</p>
                  
                  {/* Tech Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/60 rounded-lg p-3 border border-gray-700">
                      <div className="text-xs font-mono text-gray-400">POWER</div>
                      <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.stats.power}
                      </div>
                    </div>
                    <div className="bg-gray-900/60 rounded-lg p-3 border border-gray-700">
                      <div className="text-xs font-mono text-gray-400">EFFICIENCY</div>
                      <div className="text-lg font-bold text-green-400">{item.stats.efficiency}</div>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Tech Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
      </section>

      {/* DATA VISUALIZATION SECTION - ULTRA TECH */}
      <section id="data" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="px-4 py-2 text-xs font-mono bg-green-500/10 text-green-400 rounded-full border border-green-400/30">
                [ REAL-TIME ANALYTICS ]
              </span>
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                DATA MATRIX
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light">
              リアルタイム研究データと AI 分析結果の可視化システム
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {[
              { 
                title: 'CONDUCTIVITY',
                value: '15.7',
                unit: 'mS/cm',
                change: '+12.3%',
                color: 'from-green-400 to-cyan-400',
                trend: [65, 78, 82, 95, 88, 92, 97]
              },
              {
                title: 'AI ACCURACY',
                value: '98.5',
                unit: '%',
                change: '+0.3%',
                color: 'from-cyan-400 to-blue-500',
                trend: [92, 94, 96, 95, 97, 98, 98.5]
              },
              {
                title: 'SYNTHESIS RATE',
                value: '47.2',
                unit: 'samples/day',
                change: '+8.7%',
                color: 'from-blue-500 to-purple-500',
                trend: [35, 38, 42, 45, 44, 46, 47]
              },
              {
                title: 'POWER DENSITY',
                value: '2.34',
                unit: 'kW/kg',
                change: '+15.6%',
                color: 'from-purple-500 to-pink-500',
                trend: [1.8, 1.9, 2.1, 2.2, 2.1, 2.3, 2.34]
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-mono text-gray-400">{metric.title}</div>
                  <div className={`text-xs font-mono px-2 py-1 rounded ${
                    metric.change.includes('+') ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                  }`}>
                    {metric.change}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className={`text-3xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400 font-mono">{metric.unit}</div>
                </div>
                
                {/* Mini Chart */}
                <div className="h-12 flex items-end space-x-1">
                  {metric.trend.map((value, i) => (
                    <div
                      key={i}
                      className={`flex-1 bg-gradient-to-t ${metric.color} rounded-sm transition-all duration-300 hover:opacity-80`}
                      style={{ height: `${(value / Math.max(...metric.trend)) * 100}%` }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Research Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              RESEARCH TIMELINE 2025
            </h3>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
              
              <div className="space-y-8">
                {[
                  {
                    date: '2025.01.15',
                    title: 'Nature Materials 掲載',
                    desc: '革新的フッ化物イオン伝導体の開発成果を発表',
                    status: 'completed',
                    color: 'green'
                  },
                  {
                    date: '2025.03.20',
                    title: 'AI材料設計システム Ver.3.0',
                    desc: '量子機械学習アルゴリズムの実装完了予定',
                    status: 'in-progress',
                    color: 'cyan'
                  },
                  {
                    date: '2025.06.10',
                    title: '国際シンポジウム基調講演',
                    desc: 'Advanced Energy Materials Conference 2025',
                    status: 'upcoming',
                    color: 'purple'
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-start"
                  >
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-2 border-${event.color}-400 bg-black flex items-center justify-center`}>
                      <div className={`w-2 h-2 rounded-full bg-${event.color}-400 ${event.status === 'in-progress' ? 'animate-pulse' : ''}`}></div>
                    </div>
                    
                    <div className="ml-16 bg-gray-800/60 rounded-lg p-4 flex-1 border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-mono text-gray-400">{event.date}</div>
                        <div className={`px-2 py-1 rounded text-xs font-mono ${
                          event.status === 'completed' ? 'bg-green-400/10 text-green-400' :
                          event.status === 'in-progress' ? 'bg-cyan-400/10 text-cyan-400' :
                          'bg-purple-400/10 text-purple-400'
                        }`}>
                          {event.status.toUpperCase()}
                        </div>
                      </div>
                      <h4 className="font-bold text-white mb-2">{event.title}</h4>
                      <p className="text-gray-300 text-sm">{event.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION - ULTRA TECH */}
      <section id="team" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="px-4 py-2 text-xs font-mono bg-orange-500/10 text-orange-400 rounded-full border border-orange-400/30">
                [ RESEARCH TEAM ]
              </span>
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                PRINCIPAL INVESTIGATOR
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 relative overflow-hidden">
              {/* Holographic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 rounded-3xl"></div>
              
              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto relative">
                    {/* Holographic Frame */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -inset-2 border-2 border-cyan-400/50 rounded-full"></div>
                    
                    {/* Profile Avatar */}
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full flex items-center justify-center text-8xl relative overflow-hidden">
                      <span className="relative z-10">👨‍🔬</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    
                    {/* Floating Tech Elements */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-2 border border-green-400/50">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-mono text-green-400">ONLINE</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      松井 直喜
                    </h3>
                    <div className="text-xl text-cyan-400 font-mono mb-6">
                      [ NAOKI MATSUI ]
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: 'POSITION', value: '助教 (Assistant Professor)' },
                      { label: 'AFFILIATION', value: '東京科学大学 全固体電池研究センター' },
                      { label: 'EXPERTISE', value: '固体イオニクス × AI × 量子計算' },
                      { label: 'DEGREE', value: 'Ph.D. Engineering (2020, Tokyo Tech)' }
                    ].map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-gray-900/60 rounded-lg p-4 border border-gray-700"
                      >
                        <div className="text-xs font-mono text-gray-400 mb-2">{info.label}</div>
                        <div className="text-white font-medium text-sm">{info.value}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Bio Stats */}
                  <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl p-6 border border-gray-700">
                    <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      RESEARCH METRICS
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-black text-cyan-400">15+</div>
                        <div className="text-xs text-gray-400 font-mono">PUBLICATIONS</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-blue-400">847</div>
                        <div className="text-xs text-gray-400 font-mono">CITATIONS</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-purple-400">28</div>
                        <div className="text-xs text-gray-400 font-mono">H-INDEX</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION - ULTRA TECH */}
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <span className="px-4 py-2 text-xs font-mono bg-red-500/10 text-red-400 rounded-full border border-red-400/30">
                [ COMMUNICATION CHANNEL ]
              </span>
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                ESTABLISH CONNECTION
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light">
              共同研究・学生募集・技術相談はこちらから
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  CONTACT MATRIX
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      type: 'EMAIL',
                      value: 'matsui.n.ee49[at]m.isct.ac.jp',
                      status: 'ACTIVE',
                      color: 'cyan'
                    },
                    {
                      type: 'PHONE',
                      value: '+81-45-924-5561',
                      status: 'STANDBY',
                      color: 'blue'
                    },
                    {
                      type: 'LOCATION',
                      value: '東京科学大学 すずかけ台キャンパス G1-914',
                      status: 'SECURE',
                      color: 'purple'
                    }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-black/40 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-mono text-gray-400">{contact.type}</div>
                        <div className={`px-2 py-1 rounded text-xs font-mono bg-${contact.color}-400/10 text-${contact.color}-400 flex items-center gap-2`}>
                          <div className={`w-2 h-2 bg-${contact.color}-400 rounded-full animate-pulse`}></div>
                          {contact.status}
                        </div>
                      </div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {contact.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Research Collaboration */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  COLLABORATION PROTOCOL
                </h4>
                <div className="space-y-4">
                  {[
                    '共同研究プロジェクト',
                    '修士・博士課程学生募集',
                    '産学連携技術相談',
                    '国際研究交流',
                    'AI材料設計コンサルティング'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-4"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Interactive Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                SEND TRANSMISSION
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">NAME</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your.email@domain.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">SUBJECT</label>
                  <select className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors">
                    <option>共同研究について</option>
                    <option>学生募集について</option>
                    <option>技術相談</option>
                    <option>その他</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">MESSAGE</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  INITIATE TRANSMISSION →
                </button>
              </form>
            </motion.div>
          </div>

          {/* Tech Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-20 pt-12 border-t border-gray-800"
          >
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-sm font-mono text-gray-500">
                © 2025 MATSUI RESEARCH LABORATORY
              </div>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="text-sm font-mono text-gray-500">
                TOKYO INSTITUTE OF SCIENCE
              </div>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="text-sm font-mono text-green-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                SYSTEM OPERATIONAL
              </div>
            </div>
            <div className="text-xs font-mono text-gray-600">
              [ POWERED BY QUANTUM COMPUTING × AI × NEXT.JS ]
            </div>
          </motion.div>
        </div>

        {/* Background Tech Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </section>
    </div>
  )
}
