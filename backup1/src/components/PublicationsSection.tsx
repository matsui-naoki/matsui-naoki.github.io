'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const publications = [
  {
    year: 2025,
    title: "Development of Novel Fluoride-Ion Conductors for All-Solid-State Batteries",
    journal: "Advanced Energy Materials",
    authors: "N. Matsui, K. Suzuki, R. Kanno",
    type: "journal"
  },
  {
    year: 2024,
    title: "Machine Learning Approaches for High-Throughput Materials Discovery",
    journal: "Chemistry of Materials", 
    authors: "N. Matsui, T. Yamamoto, R. Kanno",
    type: "journal"
  },
  {
    year: 2024,
    title: "Hydride-Ion Conductors: A New Frontier in Electrochemical Energy Storage",
    journal: "Nature Materials",
    authors: "N. Matsui, S. Takahashi, R. Kanno",
    type: "journal"
  },
  {
    year: 2023,
    title: "Computational Design of Solid Electrolytes Using ML Techniques",
    conference: "International Conference on Solid State Ionics",
    location: "Tokyo, Japan",
    type: "conference"
  }
]

const newsItems = [
  {
    date: "2025-01-15",
    title: "新規フッ化物イオン伝導体の開発に成功",
    description: "従来比10倍の伝導度を持つ新材料を合成し、全固体電池の実現に大きく前進"
  },
  {
    date: "2024-12-20", 
    title: "機械学習による材料探索で国際会議発表",
    description: "AIを活用した材料設計手法がInternational Conference on Materials Scienceで注目を集める"
  },
  {
    date: "2024-11-10",
    title: "研究成果がNature Materials誌に掲載",
    description: "ヒドリドイオン伝導体に関する革新的研究が国際的に高く評価される"
  }
]

export default function PublicationsSection() {
  const [activeTab, setActiveTab] = useState<'publications' | 'news'>('publications')

  return (
    <>
      {/* Publications & News Section */}
      <section id="publications" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            論文発表・ニュース
          </motion.h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass-effect rounded-full p-2 flex">
              {[
                { id: 'publications', label: '論文・発表' },
                { id: 'news', label: 'ニュース' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'publications' | 'news')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'neon-glow bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Publications Tab */}
          {activeTab === 'publications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-2xl hover:neon-glow transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-blue-400">{pub.year}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          pub.type === 'journal' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-purple-500/20 text-purple-400'
                        }`}>
                          {pub.type === 'journal' ? '学術誌' : '学会発表'}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{pub.authors}</p>
                      <p className="text-blue-300 text-sm">
                        {pub.type === 'journal' ? pub.journal : `${pub.conference}, ${pub.location}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* News Tab */}
          {activeTab === 'news' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {newsItems.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-2xl hover:neon-glow transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-sm font-mono text-blue-400 whitespace-nowrap">
                      {new Date(news.date).toLocaleDateString('ja-JP')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{news.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{news.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}