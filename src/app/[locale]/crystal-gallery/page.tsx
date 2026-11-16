'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import NextLink from 'next/link'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'

export default function CrystalGalleryPage() {
  const t = useTranslations('crystalGallery')
  const tc = useTranslations('common')
  const locale = useLocale()

  const categories = [
    {
      id: 'lithium',
      titleKey: 'lithiumIonConductors',
      subtitleKey: 'lithiumIonConductorsEn',
      descKey: 'lithiumIonConductorsDesc',
      count: 14,
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 'fluoride',
      titleKey: 'fluorideIonConductors',
      subtitleKey: 'fluorideIonConductorsEn',
      descKey: 'fluorideIonConductorsDesc',
      count: 8,
      gradient: 'from-green-500 to-emerald-400',
    },
    {
      id: 'hydride',
      titleKey: 'hydrideIonConductors',
      subtitleKey: 'hydrideIonConductorsEn',
      descKey: 'hydrideIonConductorsDesc',
      count: 4,
      gradient: 'from-purple-500 to-[#d4ad5a]',
    },
    {
      id: 'others',
      titleKey: 'others',
      subtitleKey: 'othersEn',
      descKey: 'othersDesc',
      count: 8,
      gradient: 'from-orange-500 to-[#d98a8a]',
    }
  ]

  return (
    <div className="min-h-screen bg-[#131a2c] text-[#ece7dc]">
      <LocaleNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-black mb-6">
              <span className="text-[#ece7dc]">
                {t('title')}
              </span>
            </h1>
            <p className="text-xl text-[#b4b6c0] font-light">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <NextLink href={`/crystal-gallery/${category.id}`}>
                  <div className="bg-[#1a2236] rounded p-8 border border-[#2a3550] hover:border-[#3d4a68] transition-all duration-300 cursor-pointer h-full">
                    <div className="flex flex-col h-full">
                      <h3 className={`text-xl font-bold mb-2 text-[#ece7dc]`}>
                        {t(category.titleKey as keyof typeof t)}
                      </h3>
                      <p className="text-sm text-[#9a9eae] mb-3">{locale === 'ja' ? t(category.subtitleKey as keyof typeof t) : ''}</p>
                      <p className="text-[#b4b6c0] text-sm mb-4 flex-grow">{t(category.descKey as keyof typeof t)}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-xs text-[#767c90]">{category.count} {t('structures')}</span>
                        <div className="text-[#9a9eae] group-hover:text-white transition-colors">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </NextLink>
              </motion.div>
            ))}
          </div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-[#1a2236] rounded p-8 border border-[#2a3550]"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#ece7dc]">
              {t('aboutViewer')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-[#b4b6c0]">
              <div>
                <h3 className="text-lg font-semibold text-[#d4ad5a] mb-3">{t('controls')}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    {t('controlRotate')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    {t('controlPan')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    {t('controlZoom')}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#d4ad5a] mb-3">{t('techSpecs')}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    Three.js + React Three Fiber {locale === 'ja' ? 'による3Dレンダリング' : 'for 3D rendering'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    WebGL {locale === 'ja' ? 'ベースのGPUアクセラレーション' : 'based GPU acceleration'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4ad5a] mr-2">▸</span>
                    FBX {locale === 'ja' ? 'ローダーによる3Dモデルのインポート機能' : 'loader for 3D model import'}
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-[#767c90]">
              Built with Next.js, Three.js, React Three Fiber
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-[#ece7dc] text-[#131a2c] px-4 py-2 rounded shadow-lg transition-all duration-300">
          {tc('backToHome')}
        </Link>
      </div>
    </div>
  )
}
