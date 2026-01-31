'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useState, useEffect, lazy, Suspense } from 'react'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'

const CrystalBackground = lazy(() => import('@/components/CrystalBackground'))

export default function Home() {
  const t = useTranslations('home')
  const locale = useLocale()

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "name": locale === 'ja' ? "松井直喜" : "Naoki Matsui",
    "alternateName": "Matsui Laboratory",
    "url": "https://matsui-naoki.github.io",
    "description": locale === 'ja'
      ? "東京科学大学 菅野鈴木研 松井直喜助教。全固体電池、フッ化物イオン伝導体、ヒドリドイオン伝導体の研究開発"
      : "Dr. Naoki Matsui, Assistant Professor at Kanno-Suzuki Lab, Institute of Science Tokyo. Research on all-solid-state batteries, fluoride-ion conductors, and hydride-ion conductors",
    "member": {
      "@type": "Person",
      "name": locale === 'ja' ? "松井直喜" : "Naoki Matsui",
      "jobTitle": locale === 'ja' ? "助教" : "Assistant Professor",
      "affiliation": {
        "@type": "EducationalOrganization",
        "name": locale === 'ja' ? "東京科学大学" : "Institute of Science Tokyo",
        "alternateName": "Institute of Science Tokyo"
      }
    },
    "researchAreas": locale === 'ja'
      ? ["全固体電池", "リチウムイオン電池", "フッ化物イオン伝導体", "フッ化物電池", "ヒドリドイオン伝導体", "固体イオニクス", "材料インフォマティクス"]
      : ["All-solid-state batteries", "Lithium-ion batteries", "Fluoride ion conductors", "Fluoride batteries", "Hydride ion conductors", "Solid ionics", "Materials informatics"]
  }

  // Slideshow state
  const slides = [
    { src: '/solid-state-battery.jpg', alt: 'Solid State Battery' },
    { src: '/solid-state-battery-experiment.jpg', alt: 'Solid State Battery Experiment' },
    { src: '/BCNH.jpg', alt: 'BCNH Materials' },
    { src: '/virtual-space.jpg', alt: 'Virtual Space' },
    { src: '/elements.png', alt: 'Periodic Elements' },
    { src: '/seminar.jpg', alt: 'Seminar' }
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

  const researchAreas = [
    {
      titleKey: 'fluorideIonConductor',
      descKey: 'fluorideIonConductorDesc',
      image: '/F1.jpg',
      color: 'from-cyan-400 to-blue-500',
      delay: 0
    },
    {
      titleKey: 'lithiumIonConductor',
      descKey: 'lithiumIonConductorDesc',
      image: '/Li1.jpg',
      color: 'from-blue-500 to-purple-500',
      delay: 0.1
    },
    {
      titleKey: 'hydrideIonConductor',
      descKey: 'hydrideIonConductorDesc',
      image: '/H1.jpg',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      titleKey: 'anionIntercalation',
      descKey: 'anionIntercalationDesc',
      image: '/anion_intercalation.jpg',
      color: 'from-green-400 to-cyan-500',
      delay: 0.3
    },
    {
      titleKey: 'machineLearning',
      descKey: 'machineLearningDesc',
      image: '/mi.jpg',
      color: 'from-indigo-400 to-purple-600',
      delay: 0.4
    },
    {
      titleKey: 'highThroughput',
      descKey: 'highThroughputDesc',
      image: '/combinatorial.jpg',
      color: 'from-yellow-400 to-orange-500',
      delay: 0.5
    }
  ]

  // News data with translations
  const newsData = locale === 'ja' ? [
    {
      date: '2026.02.12-13',
      title: '修士学生3名の修論発表会',
      desc: '立派な発表でした! お疲れ様!',
      category: 'SEMINAR'
    },
    {
      date: '2026.02.09',
      title: '立命館大学の鐘先生が来研されて交流・議論',
      desc: '共同研究に向けた活発な議論が行われました。',
      category: 'VISIT'
    },
    {
      date: '2026.02.04-06',
      title: '日独交流会議@仙台に参加',
      desc: '海外研究者と交流・ネットワークを形成しました!',
      category: 'CONFERENCE'
    },
    {
      date: '2026.01.31',
      title: 'SPring-8 BL02B2にて放射光粉末X線回折実験を実施',
      desc: 'D2,M1学生が同行し, その場で測定結果について議論しました.',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.26',
      title: 'J-PARC BL09にて中性子回折実験を実施',
      desc: 'M1学生さんも同行して中性子回折実験の流れを学びました.',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.24',
      title: '菅野先生の古希祝賀会を開催',
      desc: '大勢のOBの皆様に参加いただき盛会でした!',
      category: 'SEMINAR'
    }
  ] : [
    {
      date: '2026.02.12-13',
      title: 'Master\'s Thesis Presentations for 3 Students',
      desc: 'Excellent presentations! Great work!',
      category: 'SEMINAR'
    },
    {
      date: '2026.02.09',
      title: 'Prof. Zhong from Ritsumeikan University Visited for Exchange',
      desc: 'Active discussions were held toward collaborative research.',
      category: 'VISIT'
    },
    {
      date: '2026.02.04-06',
      title: 'Participated in Japan-Germany Exchange Conference @Sendai',
      desc: 'Exchanged and networked with international researchers!',
      category: 'CONFERENCE'
    },
    {
      date: '2026.01.31',
      title: 'Synchrotron Powder X-ray Diffraction at SPring-8 BL02B2',
      desc: 'D2 and M1 students accompanied and discussed results on-site.',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.26',
      title: 'Neutron Diffraction Experiment at J-PARC BL09',
      desc: 'M1 student learned the workflow of neutron diffraction.',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.24',
      title: 'Celebrated Prof. Kanno\'s 70th Birthday',
      desc: 'Many alumni participated and it was a great success!',
      category: 'SEMINAR'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
        <Suspense fallback={null}>
          <CrystalBackground />
        </Suspense>
        <LocaleNavigation />

        {/* Hero Section */}
        <section id="home" className="pt-16 pb-8 min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.02) 1px, transparent 0)`,
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
                    {t('badge')}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-none">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                    {t('heroTitle1')}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {t('heroTitle2')}
                  </span>
                  <br />
                  <span className="text-white">
                    {t('heroTitle3')}
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 font-light leading-relaxed whitespace-pre-line">
                  {t('heroDescription')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/research-details"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    {t('exploreResearch')}
                  </Link>
                  <Link
                    href="/publications"
                    className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-400/10 transition-colors text-center"
                  >
                    {t('viewPublications')}
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

                    <div className="absolute top-4 left-4">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30">
                        <div className="text-xs font-mono text-cyan-400 mb-1">{t('statusActive')}</div>
                        <div className="text-sm font-semibold">{t('solidStateBattery')}</div>
                        <div className="text-xs text-gray-300">{t('nextGenDevice')}</div>
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
              <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t('researchDomains')}
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-light">{t('researchDomainsSubtitle')}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {researchAreas.map((item, index) => (
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
                          alt={t(item.titleKey as keyof typeof t)}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 leading-tight">
                        <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {t(item.titleKey as keyof typeof t)}
                        </span>
                      </h3>

                      <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{t(item.descKey as keyof typeof t)}</p>

                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6">
                  <span className="px-3 py-1 text-xs font-mono bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20">
                    {t('principalInvestigator')}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {t('matsuiNaoki')}
                  </span>
                </h2>
                <div className="mb-4">
                  <span className="text-lg font-semibold text-cyan-400">{t('position')}</span>
                </div>

                <div className="space-y-4 mb-8 text-gray-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="font-mono text-sm">{t('positionLabel')} {t('positionValue')}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="font-mono text-sm">{t('affiliationLabel')} {t('affiliationValue')}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="font-mono text-sm">{t('degreeLabel')} {t('degreeValue')}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="font-mono text-sm">{t('expertiseLabel')} {t('expertiseValue')}</span>
                  </div>
                </div>

                <div className="rounded-2xl p-6 border relative z-20">
                  <h3 className="text-xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {t('getInTouch')}
                    </span>
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <div className="font-mono text-xs text-cyan-400 mb-1">{t('email')}</div>
                      <div className="text-sm font-medium text-white">matsui.n.ee49[at]m.isct.ac.jp</div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-cyan-400 mb-1">{t('location')}</div>
                      <div className="text-sm font-medium text-white">{t('locationValue')}</div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-cyan-400 mb-1">SNS</div>
                      <div className="flex space-x-4 mt-2 relative z-30">
                        <a href="https://www.linkedin.com/in/naoki-matsui-ssi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href="https://github.com/matsui-naoki" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                        <a href="https://x.com/naoki_matsui_ex" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <a href="/ja/profile-detail" className="inline-flex items-center mt-6 text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer relative z-30">
                    <span className="font-semibold">{t('seeMore')}</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
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
                    src="/NaokiMatsui.jpg"
                    alt="Profile Photo"
                    width={300}
                    height={300}
                    className="relative rounded-2xl shadow-2xl border border-gray-800 w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30">
                      <div className="text-xs font-mono text-cyan-400 mb-1">{t('researcher')}</div>
                      <div className="text-sm font-semibold">{t('matsuiNaoki')}</div>
                      <div className="text-xs text-gray-300">{t('position')}</div>
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
              <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t('latestNewsTitle')}
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-light">{t('latestNewsSubtitle')}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {newsData.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-xs font-mono text-cyan-400">{news.date}</div>
                    <div className="px-2 py-1 text-xs font-mono rounded">
                      {news.category}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 leading-tight text-white">
                    {news.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                    {news.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12 relative z-50">
              <Link
                href="/news"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                {t('seeMore')} →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
