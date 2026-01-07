'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
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
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      id: 'others',
      titleKey: 'others',
      subtitleKey: 'othersEn',
      descKey: 'othersDesc',
      count: 8,
      gradient: 'from-orange-500 to-red-400',
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
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
                <Link href={`/crystal-gallery/${category.id}` as '/crystal-gallery/lithium' | '/crystal-gallery/fluoride' | '/crystal-gallery/hydride' | '/crystal-gallery/others'}>
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl cursor-pointer h-full">
                    <div className="flex flex-col h-full">
                      <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                        {t(category.titleKey as keyof typeof t)}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">{locale === 'ja' ? t(category.subtitleKey as keyof typeof t) : ''}</p>
                      <p className="text-gray-300 text-sm mb-4 flex-grow">{t(category.descKey as keyof typeof t)}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-xs text-gray-500">{category.count} {t('structures')}</span>
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t('aboutViewer')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">{t('controls')}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    {t('controlRotate')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    {t('controlPan')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    {t('controlZoom')}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">{t('techSpecs')}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    Three.js + React Three Fiber {locale === 'ja' ? 'による3Dレンダリング' : 'for 3D rendering'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    WebGL {locale === 'ja' ? 'ベースのGPUアクセラレーション' : 'based GPU acceleration'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
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
            <p className="text-sm text-gray-500">
              Built with Next.js, Three.js, React Three Fiber
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          {tc('backToHome')}
        </Link>
      </div>
    </div>
  )
}
