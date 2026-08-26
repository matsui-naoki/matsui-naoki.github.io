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
      ? "東京科学大学 松井直喜准教授。全固体電池、フッ化物イオン伝導体、ヒドリドイオン伝導体の研究開発"
      : "Dr. Naoki Matsui, Associate Professor at Institute of Science Tokyo. Research on all-solid-state batteries, fluoride-ion conductors, and hydride-ion conductors",
    "member": {
      "@type": "Person",
      "name": locale === 'ja' ? "松井直喜" : "Naoki Matsui",
      "jobTitle": locale === 'ja' ? "准教授" : "Associate Professor",
      "sameAs": [
        "https://www.linkedin.com/in/naoki-matsui-ssi",
        "https://github.com/matsui-naoki",
        "https://x.com/naoki_matsui_ex"
      ],
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
    { titleKey: 'lithiumIonConductor', descKey: 'lithiumIonConductorDesc', image: '/Li1.jpg' },
    { titleKey: 'fluorideIonConductor', descKey: 'fluorideIonConductorDesc', image: '/F1.jpg' },
    { titleKey: 'hydrideIonConductor', descKey: 'hydrideIonConductorDesc', image: '/H1.jpg' },
    { titleKey: 'anionIntercalation', descKey: 'anionIntercalationDesc', image: '/anion_intercalation.jpg' },
    { titleKey: 'machineLearning', descKey: 'machineLearningDesc', image: '/mi.jpg' },
    { titleKey: 'highThroughput', descKey: 'highThroughputDesc', image: '/combinatorial.jpg' }
  ]

  // News data with translations
  const newsData = locale === 'ja' ? [
    {
      date: '2026.08.12',
      title: 'M2板倉さんの筆頭論文がSmall Structuresに掲載',
      desc: 'Bi置換PbSnF4の秩序-無秩序転移の制御による高フッ化物イオン伝導の実現。おめでとう!!'
    },
    {
      date: '2026.03.25',
      title: 'OBのAyuさんとの共著論文がJ. Mater. Chem. Aに掲載',
      desc: '複合水素化物Ba2MgH6の高速ヒドリドイオン伝導を報告。'
    },
    {
      date: '2026.08.28',
      title: 'プロジェクトの会議@京都に参加',
      desc: ''
    },
    {
      date: '2026.08.20',
      title: '京大陰山研の吉田特定准教授・大阪公立大学林研の本橋助教を訪問',
      desc: '有意義な材料設計の議論をおこないました。'
    },
    {
      date: '2026.08.06',
      title: '信州大学の手嶋研究室を見学',
      desc: ''
    },
    {
      date: '2026.07.30-08.04',
      title: 'OBのAyuさんが共同研究のため来校',
      desc: '現インドネシア大学講師としてご活躍中。お元気そうで良かったです.'
    }
  ] : [
    {
      date: '2026.08.12',
      title: 'M2 Student Itakura\'s First-Author Paper Published in Small Structures',
      desc: 'Unlocking high fluoride-ion conductivity in Bi-substituted PbSnF4. Congratulations!!'
    },
    {
      date: '2026.03.25',
      title: 'Paper with Alumnus Ayu Published in J. Mater. Chem. A',
      desc: 'Fast hydride-ion conduction in the complex hydride Ba2MgH6.'
    },
    {
      date: '2026.08.28',
      title: 'Project Meeting @ Kyoto',
      desc: ''
    },
    {
      date: '2026.08.20',
      title: 'Visited Dr. Yoshida (Kyoto Univ.) and Dr. Motohashi (Osaka Metropolitan Univ.)',
      desc: 'Fruitful discussions on materials design.'
    },
    {
      date: '2026.08.06',
      title: 'Visited the Teshima Laboratory at Shinshu University',
      desc: ''
    },
    {
      date: '2026.07.30-08.04',
      title: 'Alumnus Ayu Visited for Collaboration',
      desc: 'Now Lecturer at Universitas Indonesia. Glad to see they are doing well.'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#101315] text-[#e6e9ea] relative">
        <Suspense fallback={null}>
          <CrystalBackground />
        </Suspense>
        <LocaleNavigation />

        {/* Hero Section */}
        <section id="home" className="pt-16 pb-8 min-h-screen flex items-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="font-mono text-sm sm:text-base text-[#6fc3cf] tracking-wide mb-7">
                  {t('badge')}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-snug text-[#e6e9ea]">
                  {t('heroTitle1')}
                  <br />
                  {t('heroTitle2')}
                </h1>

                <p className="text-base sm:text-lg text-[#9aa4a8] mb-8 sm:mb-10 leading-loose max-w-xl">
                  {t('heroDescription')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/research-details"
                    className="bg-[#e6e9ea] text-[#101315] px-8 py-3.5 rounded font-medium hover:bg-white transition-colors text-center text-base"
                  >
                    {t('exploreResearch')}
                  </Link>
                  <Link
                    href="/publications"
                    className="border border-[#3a4247] text-[#e6e9ea] px-8 py-3.5 rounded font-medium hover:border-[#6fc3cf] hover:text-[#6fc3cf] transition-colors text-center text-base"
                  >
                    {t('viewPublications')}
                  </Link>
                </div>

                <div className="flex items-baseline gap-5 mt-12">
                  <div className="font-mono text-xs text-[#566065] tracking-wider">KEYWORDS</div>
                  <div className="text-sm sm:text-base text-[#8b959a]">{t('keywords')}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                <div className="relative group">
                  <div className="relative overflow-hidden rounded border border-[#262b2e]">
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
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#101315]/70 backdrop-blur-sm rounded-full p-3 border border-[#3a4247] opacity-0 group-hover:opacity-100 transition-opacity hover:border-[#6fc3cf]"
                    >
                      <svg className="w-5 h-5 text-[#e6e9ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#101315]/70 backdrop-blur-sm rounded-full p-3 border border-[#3a4247] opacity-0 group-hover:opacity-100 transition-opacity hover:border-[#6fc3cf]"
                    >
                      <svg className="w-5 h-5 text-[#e6e9ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${index === currentSlide ? 'bg-[#e6e9ea]' : 'bg-[#e6e9ea]/30'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recruiting Banner */}
        <section className="pb-4">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-30 bg-[#16191c] border border-[#6fc3cf]/40 rounded p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            >
              <div>
                <div className="font-mono text-xs text-[#6fc3cf] tracking-widest mb-2">JOIN US</div>
                <div className="text-xl sm:text-2xl font-bold text-[#e6e9ea] mb-1.5">
                  {locale === 'ja' ? '大学院生 募集中!' : 'Graduate Students Wanted!'}
                </div>
                <p className="text-sm sm:text-base text-[#9aa4a8]">
                  {locale === 'ja'
                    ? '無機材料・固体化学・電池に少しでも興味があれば大歓迎。分野の違いは勉強会でフォローします。M1から国際学会・国際誌デビューを狙える環境です。'
                    : 'If you have any interest in inorganic materials, solid-state chemistry, or batteries, you are welcome. Study sessions support students from different backgrounds — aim for international conferences and journals from your first year.'}
                </p>
              </div>
              <Link
                href="/prospective-students"
                className="flex-shrink-0 bg-[#6fc3cf] text-[#101315] px-7 py-3.5 rounded font-bold text-base hover:bg-[#9adae4] transition-colors"
              >
                {locale === 'ja' ? '研究室希望者へ →' : 'For Prospective Students →'}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section id="research" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-baseline gap-4 mb-10"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#e6e9ea]">
                {t('researchDomains')}
              </h2>
              <div className="h-px bg-[#262b2e] flex-grow"></div>
              <div className="font-mono text-xs text-[#566065] tracking-widest">RESEARCH</div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {researchAreas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative"
                >
                  <Link href="/research-details" className="block h-full">
                    <div className="bg-[#16191c]/90 border border-[#262b2e] rounded p-5 h-full hover:border-[#3a4247] transition-colors">
                      <div className="relative mb-5 overflow-hidden rounded">
                        <Image
                          src={item.image}
                          alt={t(item.titleKey as keyof typeof t)}
                          width={300}
                          height={200}
                          className="w-full h-44 object-cover"
                        />
                      </div>

                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-bold leading-tight text-[#e6e9ea]">
                          {t(item.titleKey as keyof typeof t)}
                        </h3>
                        <span className="font-mono text-xs text-[#6fc3cf] ml-3 flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <p className="text-[#8b959a] leading-relaxed text-sm sm:text-base">{t(item.descKey as keyof typeof t)}</p>
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
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="font-mono text-xs text-[#566065] tracking-widest mb-5">
                  PRINCIPAL INVESTIGATOR
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#e6e9ea]">
                  {t('matsuiNaoki')}
                </h2>
                <div className="mb-8">
                  <span className="text-lg text-[#6fc3cf]">{t('position')}</span>
                </div>

                <div className="space-y-3 mb-10 text-base text-[#9aa4a8]">
                  <div className="flex gap-4">
                    <span className="text-[#566065] w-20 flex-shrink-0">{t('positionLabel')}</span>
                    <span>{t('positionValue')}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#566065] w-20 flex-shrink-0">{t('affiliationLabel')}</span>
                    <span>{t('affiliationValue')}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#566065] w-20 flex-shrink-0">{t('degreeLabel')}</span>
                    <span>{t('degreeValue')}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#566065] w-20 flex-shrink-0">{t('expertiseLabel')}</span>
                    <span>{t('expertiseValue')}</span>
                  </div>
                </div>

                <div className="bg-[#16191c]/90 border border-[#262b2e] rounded p-6 relative z-20">
                  <h3 className="text-lg font-bold mb-5 text-[#e6e9ea]">
                    {t('getInTouch')}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="font-mono text-xs text-[#566065] tracking-wider mb-1">{t('email')}</div>
                      <div className="text-base text-[#e6e9ea]">matsui.n.ee49[at]m.isct.ac.jp</div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-[#566065] tracking-wider mb-1">{t('location')}</div>
                      <div className="text-base text-[#e6e9ea]">{t('locationValue')}</div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-[#566065] tracking-wider mb-1">SNS</div>
                      <div className="flex space-x-4 mt-2 relative z-30">
                        <a href="https://www.linkedin.com/in/naoki-matsui-ssi" target="_blank" rel="noopener noreferrer" className="text-[#8b959a] hover:text-[#6fc3cf] transition-colors cursor-pointer">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href="https://github.com/matsui-naoki" target="_blank" rel="noopener noreferrer" className="text-[#8b959a] hover:text-[#6fc3cf] transition-colors cursor-pointer">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                        <a href="https://x.com/naoki_matsui_ex" target="_blank" rel="noopener noreferrer" className="text-[#8b959a] hover:text-[#6fc3cf] transition-colors cursor-pointer">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link href="/profile-detail" className="inline-flex items-center mt-6 text-[#6fc3cf] hover:text-[#9adae4] transition-colors group cursor-pointer relative z-30 text-base">
                    <span className="font-medium">{t('seeMore')}</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src="/NaokiMatsui.jpg"
                    alt="Profile Photo"
                    width={300}
                    height={300}
                    className="relative rounded border border-[#262b2e] w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-baseline gap-4 mb-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#e6e9ea]">
                {t('latestNewsTitle')}
              </h2>
              <div className="h-px bg-[#262b2e] flex-grow"></div>
              <Link href="/news" className="text-base text-[#6fc3cf] hover:text-[#9adae4] transition-colors relative z-30">
                {t('viewAllNews')} →
              </Link>
            </motion.div>

            <div className="flex flex-col">
              {newsData.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-9 py-4 border-b border-[#1c2124]"
                >
                  <div className="font-mono text-sm text-[#6a7378] w-32 flex-shrink-0">{news.date}</div>
                  <div>
                    <div className="text-base sm:text-lg text-[#ccd3d6] font-medium">{news.title}</div>
                    <div className="text-sm sm:text-base text-[#8b959a] mt-0.5">{news.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#262b2e] mt-8">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-3 text-sm text-[#566065]">
            <div className="font-mono">© 2026 Naoki Matsui — {locale === 'ja' ? '東京科学大学 すずかけ台キャンパス G1-914' : 'Institute of Science Tokyo, Suzukakedai Campus G1-914'}</div>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/naoki-matsui-ssi" target="_blank" rel="noopener noreferrer" className="hover:text-[#6fc3cf] transition-colors">LinkedIn</a>
              <a href="https://github.com/matsui-naoki" target="_blank" rel="noopener noreferrer" className="hover:text-[#6fc3cf] transition-colors">GitHub</a>
              <a href="https://x.com/naoki_matsui_ex" target="_blank" rel="noopener noreferrer" className="hover:text-[#6fc3cf] transition-colors">X</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
