'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import NextLink from 'next/link'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'
import { lithiumCrystals, fluorideCrystals, hydrideCrystals, otherCrystals } from '@/lib/crystalFbxData'

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
      count: lithiumCrystals.length,
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 'fluoride',
      titleKey: 'fluorideIonConductors',
      subtitleKey: 'fluorideIonConductorsEn',
      descKey: 'fluorideIonConductorsDesc',
      count: fluorideCrystals.length,
      gradient: 'from-green-500 to-emerald-400',
    },
    {
      id: 'hydride',
      titleKey: 'hydrideIonConductors',
      subtitleKey: 'hydrideIonConductorsEn',
      descKey: 'hydrideIonConductorsDesc',
      count: hydrideCrystals.length,
      gradient: 'from-purple-500 to-[#76b900]',
    },
    {
      id: 'others',
      titleKey: 'others',
      subtitleKey: 'othersEn',
      descKey: 'othersDesc',
      count: otherCrystals.length,
      gradient: 'from-orange-500 to-[#f08a8a]',
    }
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-[#ffffff]">
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
              <span className="text-[#ffffff]">
                {t('title')}
              </span>
            </h1>
            <p className="text-xl text-[#cfcfcf] font-light">
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
                  <div className="bg-[#111111] rounded p-8 border border-[#262626] hover:border-[#3a3a3a] transition-all duration-300 cursor-pointer h-full">
                    <div className="flex flex-col h-full">
                      <h3 className={`text-xl font-bold mb-2 text-[#ffffff]`}>
                        {t(category.titleKey as keyof typeof t)}
                      </h3>
                      <p className="text-sm text-[#9a9a9a] mb-3">{locale === 'ja' ? t(category.subtitleKey as keyof typeof t) : ''}</p>
                      <p className="text-[#cfcfcf] text-sm mb-4 flex-grow">{t(category.descKey as keyof typeof t)}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-xs text-[#9a9a9a]">{category.count} {t('structures')}</span>
                        <div className="text-[#9a9a9a] group-hover:text-[#ffffff] transition-colors">
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
            className="mt-16 bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#ffffff]">
              {t('aboutViewer')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-[#cfcfcf]">
              <div>
                <h3 className="text-lg font-semibold text-[#76b900] mb-3">{t('controls')}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    {t('controlRotate')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    {t('controlPan')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    {t('controlZoom')}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#76b900] mb-3">{t('techSpecs')}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    Three.js + React Three Fiber {locale === 'ja' ? 'による3Dレンダリング' : 'for 3D rendering'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    WebGL {locale === 'ja' ? 'ベースのGPUアクセラレーション' : 'based GPU acceleration'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
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
            <p className="text-sm text-[#9a9a9a]">
              Built with Next.js, Three.js, React Three Fiber
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-[#ffffff] text-[#050505] px-4 py-2 rounded shadow-lg transition-all duration-300">
          {tc('backToHome')}
        </Link>
      </div>
    </div>
  )
}
