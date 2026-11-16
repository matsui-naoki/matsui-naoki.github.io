'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'

export default function ResearchDetails() {
  const t = useTranslations('researchDetails')
  const tc = useTranslations('common')
  const locale = useLocale()

  const fluorideAchievements = locale === 'ja' ? [
    'CsPb₀.₉K₀.₁F₂.₉における極小活性化エネルギー（7.9 kJ/mol）の達成',
    '孤立電子対の動的再配向によるイオン輸送促進の初実証',
    '室温で10⁻⁴ S/cmを超える新たなSn系タイソナイト材料の開発',
    'Y₂C↔Y₂CF₂のF⁻可逆インターカレーション負極活物質の開発'
  ] : [
    'Achievement of minimal activation energy (7.9 kJ/mol) in CsPb₀.₉K₀.₁F₂.₉',
    'First demonstration of ion transport promotion by dynamic reorientation of lone pair electrons',
    'Development of new Sn-based tysonite materials exceeding 10⁻⁴ S/cm at room temperature',
    'Development of F⁻ reversible intercalation anode material Y₂C↔Y₂CF₂'
  ]

  const lithiumAchievements = locale === 'ja' ? [
    '配位多面体モチーフを特徴量とした機械学習モデルによる新規Li導電体の発見（JACS掲載）',
    '硫化物系、酸化物系など多様な材料系での探索'
  ] : [
    'Discovery of new Li conductors using machine learning models with coordination polyhedra motifs as features (published in JACS)',
    'Exploration in diverse material systems including sulfides and oxides'
  ]

  const hydrideContents = locale === 'ja' ? [
    'ペロブスカイト型ヒドリド伝導体：SrLiH₃をベースとした新規組成の開発',
    'Sr₂LiH₂Nのヒドリドイオン導電性の報告',
    'K₂NiF₄型酸水素化物：La₂LiHO₃の常圧合成法の確立'
  ] : [
    'Perovskite-type hydride conductors: Development of new compositions based on SrLiH₃',
    'Report on hydride ion conductivity of Sr₂LiH₂N',
    'K₂NiF₄-type oxyhydrides: Establishment of ambient pressure synthesis of La₂LiHO₃'
  ]

  const anionAchievements = locale === 'ja' ? [
    'Y₂C↔Y₂CF₂のフッ化物可逆インターカレーション反応の実証',
    '新規負極活物質としてのカーバイド系材料の開発',
    'フッ化物電池への応用展開'
  ] : [
    'Demonstration of reversible fluoride intercalation reaction of Y₂C↔Y₂CF₂',
    'Development of carbide-based materials as new anode active materials',
    'Application to fluoride batteries'
  ]

  const mlApproaches = locale === 'ja' ? [
    '配位多面体モチーフを特徴量とした機械学習モデル構築',
    '第一原理計算による伝導メカニズム解析',
    'ニューラルネットワークポテンシャルを用いた分子動力学シミュレーション'
  ] : [
    'Building machine learning models using coordination polyhedra motifs as features',
    'Conduction mechanism analysis by first-principles calculations',
    'Molecular dynamics simulation using neural network potentials'
  ]

  const htsMethods = locale === 'ja' ? [
    '組成傾斜薄膜による迅速な組成最適化',
    '自動化された合成・評価システム',
    'インピーダンス測定による高速スクリーニング'
  ] : [
    'Rapid composition optimization using composition gradient thin films',
    'Automated synthesis and evaluation systems',
    'High-speed screening by impedance measurement'
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
            <p className="text-xl text-[#b4b6c0] font-light">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Elements Image Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-16"
          >
            <div className="relative">
              <Image
                src="/elements.png"
                alt="Carrier Ions Elements"
                width={1200}
                height={400}
                className="w-full rounded shadow-2xl border border-[#2a3550]"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded px-4 py-2">
                <h3 className="text-lg font-bold text-white">{t('carrierIons')}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">

            {/* Lithium Ion Conductors */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#1a2236] rounded p-8 border border-[#2a3550]"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <Image src="/Li1.jpg" alt="Lithium Ion Conductor" width={500} height={350} className="relative rounded shadow-2xl border border-[#2a3550]" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-[#d4ad5a]/10 text-[#d4ad5a] rounded-full border border-[#d4ad5a]/20">
                      LITHIUM ION CONDUCTORS
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-[#ece7dc]">
                    {t('lithiumTitle')}
                  </h2>
                  <div className="space-y-4 text-[#b4b6c0]">
                    <p>{t('lithiumDesc')}</p>
                    <div className="bg-[#202a40] rounded p-4 border border-[#d4ad5a]/20">
                      <h4 className="font-bold text-[#d4ad5a] mb-2">{t('achievements')}</h4>
                      <ul className="text-sm space-y-1">
                        {lithiumAchievements.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fluoride Ion Conductors */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#1a2236] rounded p-8 border border-[#2a3550]"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-[#d4ad5a]/10 text-[#d4ad5a] rounded-full border border-[#d4ad5a]/20">
                      FLUORIDE ION CONDUCTORS
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-[#ece7dc]">
                    {t('fluorideTitle')}
                  </h2>
                  <div className="space-y-4 text-[#b4b6c0]">
                    <p>{t('fluorideDesc1')}</p>
                    <p>{t('fluorideDesc2')}</p>
                    <div className="bg-[#202a40] rounded p-4 border border-[#d4ad5a]/20">
                      <h4 className="font-bold text-[#d4ad5a] mb-2">{t('mainAchievements')}</h4>
                      <ul className="text-sm space-y-1">
                        {fluorideAchievements.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative grid grid-cols-2 gap-4 p-4 bg-[#1a2236]/90 rounded border border-[#2a3550]">
                    <Image src="/F1.jpg" alt="Fluoride Ion Conductor 1" width={250} height={175} className="rounded shadow-lg border border-[#3d4a68]" />
                    <Image src="/F2.jpg" alt="Fluoride Ion Conductor 2" width={250} height={175} className="rounded shadow-lg border border-[#3d4a68]" />
                    <Image src="/F3.jpg" alt="Fluoride Ion Conductor 3" width={250} height={175} className="rounded shadow-lg border border-[#3d4a68]" />
                    <Image src="/F5.jpg" alt="Fluoride Ion Conductor 5" width={250} height={175} className="rounded shadow-lg border border-[#3d4a68]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hydride Ion Conductors */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#1a2236] rounded p-8 border border-[#2a3550]"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-[#d4ad5a]/10 text-[#d4ad5a] rounded-full border border-[#d4ad5a]/20">
                      HYDRIDE ION CONDUCTORS
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-[#ece7dc]">
                    {t('hydrideTitle')}
                  </h2>
                  <div className="space-y-4 text-[#b4b6c0]">
                    <p>{t('hydrideDesc')}</p>
                    <div className="bg-[#202a40] rounded p-4 border border-[#d4ad5a]/20">
                      <h4 className="font-bold text-[#d4ad5a] mb-2">{t('researchContents')}</h4>
                      <ul className="text-sm space-y-1">
                        {hydrideContents.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative grid grid-cols-2 gap-4 p-4 bg-[#1a2236]/90 rounded border border-[#2a3550]">
                    <Image src="/H1.jpg" alt="Hydride Ion Conductor 1" width={250} height={175} className="rounded shadow-lg border border-[#3d4a68]" />
                    <Image src="/H2.jpg" alt="Hydride Ion Conductor 2" width={250} height={175} className="rounded shadow-lg border border-[#3d4a68]" />
                    <Image src="/H3.jpg" alt="Hydride Ion Conductor 3" width={250} height={175} className="rounded shadow-lg border border-[#3d4a68]" />
                    <Image src="/H4.jpg" alt="Hydride Ion Conductor 4" width={250} height={175} className="rounded shadow-lg border border-[#3d4a68]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Anion Intercalation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#1a2236] rounded p-8 border border-[#2a3550]"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <Image src="/anion_intercalation.jpg" alt="Anion Intercalation Electrode" width={500} height={350} className="relative rounded shadow-2xl border border-[#2a3550]" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-[#d4ad5a]/10 text-[#d4ad5a] rounded-full border border-[#d4ad5a]/20">
                      ANION INTERCALATION
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-[#ece7dc]">
                    {t('anionTitle')}
                  </h2>
                  <div className="space-y-4 text-[#b4b6c0]">
                    <p>{t('anionDesc')}</p>
                    <div className="bg-[#202a40] rounded p-4 border border-[#d4ad5a]/20">
                      <h4 className="font-bold text-[#d4ad5a] mb-2">{t('achievements')}</h4>
                      <ul className="text-sm space-y-1">
                        {anionAchievements.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Machine Learning */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-[#1a2236] rounded p-8 border border-[#2a3550]"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-[#d4ad5a]/10 text-[#d4ad5a] rounded-full border border-[#d4ad5a]/20">
                      MACHINE LEARNING
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-[#ece7dc]">
                    {t('mlTitle')}
                  </h2>
                  <div className="space-y-4 text-[#b4b6c0]">
                    <p>{t('mlDesc')}</p>
                    <div className="bg-[#202a40] rounded p-4 border border-[#d4ad5a]/20">
                      <h4 className="font-bold text-[#d4ad5a] mb-2">{t('approach')}</h4>
                      <ul className="text-sm space-y-1">
                        {mlApproaches.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image src="/virtual-space.jpg" alt="Machine Learning Research" width={500} height={350} className="relative rounded shadow-2xl border border-[#2a3550]" />
                </div>
              </div>
            </motion.div>

            {/* High-Throughput Synthesis */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-[#1a2236] rounded p-8 border border-[#2a3550]"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <Image src="/combinatorial.jpg" alt="High-Throughput Synthesis" width={500} height={350} className="relative rounded shadow-2xl border border-[#2a3550]" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="mb-6">
                    <span className="px-3 py-1 text-xs font-mono bg-[#d9b83f]/10 text-[#d9b83f] rounded-full border border-[#d9b83f]/20">
                      HIGH-THROUGHPUT SYNTHESIS
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-[#ece7dc]">
                    {t('htsTitle')}
                  </h2>
                  <div className="space-y-4 text-[#b4b6c0]">
                    <p>{t('htsDesc')}</p>
                    <div className="bg-[#202a40] rounded p-4 border border-[#d9b83f]/20">
                      <h4 className="font-bold text-[#d9b83f] mb-2">{t('method')}</h4>
                      <ul className="text-sm space-y-1">
                        {htsMethods.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
