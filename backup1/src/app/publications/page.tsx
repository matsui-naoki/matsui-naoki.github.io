'use client'

import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'

const publications = [
  {
    year: 2025,
    title: "Development of Novel Fluoride-Ion Conductors for All-Solid-State Batteries",
    journal: "Advanced Energy Materials",
    authors: "N. Matsui, K. Suzuki, R. Kanno",
    type: "journal",
    impact: "High Impact"
  },
  {
    year: 2024,
    title: "Machine Learning Approaches for High-Throughput Materials Discovery in Solid Electrolytes",
    journal: "Chemistry of Materials", 
    authors: "N. Matsui, T. Yamamoto, H. Nakamura, R. Kanno",
    type: "journal",
    impact: "High Impact"
  },
  {
    year: 2024,
    title: "Hydride-Ion Conductors: A New Frontier in Electrochemical Energy Storage",
    journal: "Nature Materials",
    authors: "N. Matsui, S. Takahashi, M. Kobayashi, R. Kanno",
    type: "journal",
    impact: "Top Journal"
  },
  {
    year: 2023,
    title: "Computational Design of Solid Electrolytes Using Machine Learning Techniques",
    conference: "International Conference on Solid State Ionics",
    location: "Tokyo, Japan",
    authors: "N. Matsui, R. Kanno",
    type: "conference"
  },
  {
    year: 2023,
    title: "High-Throughput Synthesis and Characterization of Fluoride-Ion Conductors",
    journal: "Journal of Materials Chemistry A",
    authors: "N. Matsui, Y. Sato, R. Kanno",
    type: "journal",
    impact: "High Impact"
  }
]

const patents = [
  {
    year: 2024,
    title: "フッ化物イオン伝導体およびその製造方法",
    number: "特願2024-123456",
    inventors: "松井直喜、菅野了次",
    status: "出願中"
  },
  {
    year: 2023,
    title: "全固体電池用電解質材料",
    number: "特願2023-098765",
    inventors: "松井直喜、鈴木一郎、菅野了次", 
    status: "審査中"
  }
]

export default function Publications() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">研究業績</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              査読付き論文、国際会議発表、特許等の研究成果をご紹介します
            </p>
          </motion.div>

          {/* Publications Section */}
          <section className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8 text-gray-800 flex items-center"
            >
              <span className="w-2 h-8 bg-blue-500 rounded mr-4"></span>
              査読付き論文・国際会議発表
            </motion.h2>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-lg font-bold text-blue-600">{pub.year}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          pub.type === 'journal' 
                            ? pub.impact === 'Top Journal'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-green-100 text-green-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {pub.type === 'journal' 
                            ? pub.impact || '学術誌'
                            : '国際会議'}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-relaxed">
                        {pub.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-2 font-medium">{pub.authors}</p>
                      
                      <p className="text-blue-600 font-medium">
                        {pub.type === 'journal' 
                          ? pub.journal 
                          : `${pub.conference}, ${pub.location}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Patents Section */}
          <section className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-bold mb-8 text-gray-800 flex items-center"
            >
              <span className="w-2 h-8 bg-indigo-500 rounded mr-4"></span>
              特許
            </motion.h2>
            
            <div className="space-y-6">
              {patents.map((patent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-lg font-bold text-indigo-600">{patent.year}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          patent.status === '出願中' 
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {patent.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {patent.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-2">{patent.inventors}</p>
                      <p className="text-indigo-600 font-mono text-sm">{patent.number}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Statistics Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">研究実績サマリー</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-blue-100">査読付き論文</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">8</div>
                  <div className="text-blue-100">国際会議発表</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3</div>
                  <div className="text-blue-100">特許出願</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2</div>
                  <div className="text-blue-100">受賞歴</div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
}