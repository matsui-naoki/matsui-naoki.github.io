'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  
  // Slideshow state
  const slides = [
    { src: '/solid-state-battery.jpg', alt: 'Solid State Battery' },
    { src: '/elements.png', alt: 'Periodic Elements' },
    { src: '/hdyride_ion_conductor.png', alt: 'Hydride Ion Conductor' },
    { src: '/energy_densities.jpg', alt: 'Energy Densities' },
    { src: '/combinatorial.jpg', alt: 'Combinatorial Synthesis' }
  ]
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])
  
  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  
  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Tech Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MATSUI LAB
              </div>
              <div className="hidden md:flex space-x-6 text-sm">
                <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  ホーム
                </a>
                <a href="#research" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究概要
                </a>
                <a href="#profile" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  プロフィール
                </a>
                <a href="#news" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  ニュース
                </a>
                <a href="/publications" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究業績
                </a>
                <a href="/research-details" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究詳細
                </a>
                <a href="/learning" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  学習
                </a>
                <a href="/access" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  アクセス
                </a>
                <a href="/prospective-students" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究室希望者へ
                </a>
                <a href="/links" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  リンク
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Tech Style */}
      <section id="home" className="pt-16 pb-8 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20">
                  ADVANCED MATERIALS RESEARCH
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-none">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                  NEXT-GEN
                </span>
                <br/>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  BATTERY
                </span>
                <br/>
                <span className="text-white">
                  TECH
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                固体イオニクス × 機械学習<br/>
                革新的エネルギー貯蔵システムの創造
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/research-details"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  EXPLORE RESEARCH →
                </Link>
                <Link
                  href="/publications"
                  className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-400/10 transition-colors text-center"
                >
                  VIEW PUBLICATIONS
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                
                {/* Slideshow Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm rounded-full p-3 border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-400/20"
                  >
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm rounded-full p-3 border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-400/20"
                  >
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsAutoPlaying(false)
                          setCurrentSlide(index)
                        }}
                        className="w-2 h-2 rounded-full transition-colors "
                      />
                    ))}
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl pointer-events-none"></div>
                  
                  {/* Tech Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30">
                      <div className="text-xs font-mono text-cyan-400 mb-1">STATUS: ACTIVE</div>
                      <div className="text-sm font-semibold">全固体電池</div>
                      <div className="text-xs text-gray-300">次世代エネルギーデバイス</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Research Areas */}
      <section id="research" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                RESEARCH DOMAINS
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">最先端技術で未来を創る</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'フッ化物イオン伝導体',
                desc: '全固体フッ化物電池のための革新的イオン伝導体材料の設計と合成',
                image: '/F1.jpg',
                color: 'from-cyan-400 to-blue-500',
                delay: 0
              },
              {
                title: 'リチウムイオン伝導体',
                desc: '全固体リチウムイオン電池の実用化に向けた新規固体電解質の開発',
                image: '/Li1.jpg',
                color: 'from-blue-500 to-purple-500',
                delay: 0.1
              },
              {
                title: 'ヒドリドイオン伝導体',
                desc: '次世代電気化学デバイスのためのヒドリドイオン伝導材料の創製',
                image: '/H1.jpg',
                color: 'from-purple-500 to-pink-500',
                delay: 0.2
              },
              {
                title: 'アニオンインターカレーション',
                desc: 'アニオンのインターカレーション反応を活用した新しい電極材料の開発',
                image: '/F4.jpg',
                color: 'from-green-400 to-cyan-500',
                delay: 0.3
              },
              {
                title: '機械学習・仮想空間',
                desc: '機械学習とAIを活用した効率的な材料探索システムの構築',
                image: '/mi.jpg',
                color: 'from-indigo-400 to-purple-600',
                delay: 0.4
              },
              {
                title: 'ハイスループット合成',
                desc: '自動合成・評価システムによる従来の10倍以上の速度での材料スクリーニング',
                image: '/combinatorial.jpg',
                color: 'from-yellow-400 to-orange-500',
                delay: 0.5
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                className="group relative"
              >
                <Link href="/research-details" className="block">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    <h3 className="text-xl font-black mb-3 leading-tight">
                      <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.title}
                      </span>
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 ">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="px-3 py-1 text-xs font-mono bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20">
                  PRINCIPAL INVESTIGATOR
                </span>
              </div>
              
              <h2 className="text-4xl font-black mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  松井 直喜
                </span>
              </h2>
              
              <div className="space-y-4 mb-8 text-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="font-mono text-sm">POSITION: 助教 (Assistant Professor)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-mono text-sm">AFFILIATION: 総合研究院 全固体電池研究センター/物質理工学院 応用化学系</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-mono text-sm">DEGREE: Ph.D. in Engineering (2020)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="font-mono text-sm">EXPERTISE: Solid Ionics × Machine Learning</span>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="rounded-2xl p-6 border ">
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    GET IN TOUCH
                  </span>
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <div className="font-mono text-xs text-cyan-400 mb-1">EMAIL</div>
                    <div className="text-sm font-medium text-white">matsui.n.ee49[at]m.isct.ac.jp</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-cyan-400 mb-1">LOCATION</div>
                    <div className="text-sm font-medium text-white">東京科学大学 すずかけ台キャンパス G1-914</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/profile_photo.jpg"
                  alt="Profile Photo"
                  width={500}
                  height={500}
                  className="relative rounded-2xl shadow-2xl border border-gray-800 w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30">
                    <div className="text-xs font-mono text-cyan-400 mb-1">RESEARCHER</div>
                    <div className="text-sm font-semibold">松井 直喜</div>
                    <div className="text-xs text-gray-300">固体イオニクス研究者</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                LATEST NEWS
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">研究の最新情報と成果</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                date: '2025.08.05',
                title: '菅野・鈴木研のM1学生が固体イオニクスセミナーに参加',
                desc: 'M1学生2名（板倉さん、亀若さん）が固体イオニクスセミナー@宮崎に参加し、新規固体電解質材料の探索について発表します。',
                category: 'CONFERENCE'
              },
              {
                date: '2025.07.24',
                title: '前期の研究報告ゼミが終了',
                desc: '菅野・鈴木研究室の前期の研究報告ゼミが終わりました。皆さんお疲れ様でした！',
                category: 'SEMINAR'
              },
              {
                date: '2025.07.10',
                title: 'SPring-8で高エネルギーX線散乱実験を実施',
                desc: 'SPring-8で高エネルギーX線散乱実験を行いました。学生も同行しました。お疲れ様でした。',
                category: 'EXPERIMENT'
              },
              {
                date: '2025.06.20',
                title: '新規フッ化物イオン伝導体の論文がChem. Mater.にアクセプト',
                desc: '珍しい結晶構造で高いフッ化物イオン伝導率を示す新材料系として期待。多面体の連結性が変わりながら過剰フッ素を構造内に取り込む、珍しい物質です。',
                category: 'RESEARCH'
              },
              {
                date: '2025.06.19',
                title: 'D3学生 Kongさんの論文がJACSにアクセプト',
                desc: '配位多面体モチーフを特徴量としてイオン伝導率を予測し、NNポテンシャルで分子動力学計算を行い、新たなLiイオン伝導体を創出しました。',
                category: 'RESEARCH'
              },
              {
                date: '2025.06.19',
                title: '前期の論文輪読ゼミが終了',
                desc: '菅野・鈴木研究室の前期の論文輪読ゼミが終わりました。皆さんお疲れ様でした！',
                category: 'SEMINAR'
              },
              {
                date: '2025.05.26',
                title: 'St. Andrews大学の研究者が研究室を訪問',
                desc: 'John Irvine先生の研究室のMariaanaとMichkelが菅野鈴木研を訪問し、双方の研究トピックについて議論しました。',
                category: 'VISIT'
              },
              {
                date: '2025.05.20',
                title: 'Kim Sangryun教授との共著論文がJACSにアクセプト',
                desc: 'ペロブスカイト型ヒドリドイオン伝導体に錯イオン(BH4-)を組み込んだ新たな材料系の報告です。',
                category: 'RESEARCH'
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 "
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-xs font-mono text-cyan-400">{news.date}</div>
                  <div className="px-2 py-1 text-xs font-mono rounded ">
                    {news.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-tight text-white">
                  {news.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-gray-300">
                  {news.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/news"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              SEE MORE →
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  )
}