'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'

export default function PublicationsPage() {
  const t = useTranslations('publications')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  const publications = [
    // 2025年
    {
      year: '2025',
      title: 'Tailoring Polyhedral Linkage in K1–xBaxM2F7+x (M = Yb, Lu) for Enhanced Fluoride-Ion Conductivity',
      authors: 'N. Matsui (corresponding author), K. Mori, T. Saito, K. Noi, S. Fujinami, Y. Park, T. Tojigamori, K. Suzuki, T. Abe, R. Kanno',
      journal: 'Chem. Mater., 37(13) (2025) 4798-4806',
      doi: '10.1021/acs.chemmater.5c00772'
    },
    {
      year: '2025',
      title: 'Exploration of Lithium-Ion Conductors Based on Local Coordination Environments Using Crystallographic Site Fingerprints',
      authors: 'S. Kong, N. Matsui (corresponding author), S. Hori, M. Hirayama, K. Mori, T. Saito, R. Kanno, K. Suzuki',
      journal: 'J. Am. Chem. Soc., 147(28) (2025) 24336-24346',
      doi: '10.1021/jacs.5c00856'
    },
    {
      year: '2025',
      title: 'Hydride Ion Conductors with Polyanionic Complex Anions',
      authors: 'T. Kim, T. Kim, T. Lee, Y. Park, J. Kim, K. Kang, H. Kim, S. Hong, N. Matsui, H. Kim, S. Kim',
      journal: 'J. Am. Chem. Soc., 147(17) (2025) 14244-14253',
      doi: '10.1021/jacs.4c17532'
    },
    {
      year: '2025',
      title: 'Self-Closing of Cracks Generated in Microstructure-Controlled 400 µm-Thick Composite Cathodes for All-Solid-State Batteries: Observed by In Situ Scanning Electron Microscopy with Energy-Dispersive X-Ray Spectroscopy',
      authors: 'K. Watanabe, H. Kim, K. Hikima, N. Matsui, K. Suzuki, H. Muto, A. Matsuda, R. Kanno, M. Hirayama',
      journal: 'Batteries & Supercaps, 8(6) (2025) e202500119',
      doi: '10.1002/batt.202500119'
    },
    {
      year: '2025',
      title: 'A trade-off between migration and association energies for hydride-ion conductivity in the SrLiH3–CaLiH3–NaLiH2 system',
      authors: 'T. Hirose, N. Matsui (corresponding author), K. Watanabe, T. Saito, K. Mori, K. Suzuki, M. Hirayama, R. Kanno',
      journal: 'Dalton Transactions, 45 (2025) 4180-4186',
      doi: '10.1039/D4DT03384A'
    },
    {
      year: '2025',
      title: 'Simultaneous Exploration of Candidates for Electrode and Electrolyte Materials for All-Solid-State Batteries Using Predicted Rating from a Recommender System',
      authors: 'T. Nakayama, K. Watanabe, Y. Iwamizu, K. Suzuki, N. Matsui, A. Seko, I. Tanaka, R. Kanno',
      journal: 'ACS Appl. Energy Mater., 8(4) (2025) 2260–2267',
      doi: '10.1021/acsaem.4c02838'
    },
    {
      year: '2025',
      title: 'Sn vs. Ge: Effects of Elastic and Plastic Deformation of LGPS-type Solid Electrolytes on Charge-discharge Properties of Composite Cathodes for All-solid-state Batteries',
      authors: 'K. WATANABE, H. NAKAYAMA, H. KIM, K. Hikima, N. MATSUI, K. SUZUKI, S. OBOKATA, H. MUTO, A. MATSUDA, R. KANNO, M. Hirayama',
      journal: 'Electrochemistry, 93(6) (2025) 063019',
      doi: '10.5796/electrochemistry.25-71020'
    },
    {
      year: '2025',
      title: 'Fluoride-ion conductivity of scheelite-type LiYb1-xMxF4±x (M = Mg, Ca, Sr, Hf)',
      authors: 'K. Onuki, N. Matsui (corresponding author), K. Suzuki, M. Hirayama, R. Kanno',
      journal: 'Solid State Ionics, 424 (2025) 116851',
      doi: '10.1016/j.ssi.2025.116851'
    },
    {
      year: '2025',
      title: 'Chemical Composition-Driven Machine Learning Models for Predicting Ionic Conductivity in Lithium-Containing Oxides',
      authors: 'Y. Iwamizu, K. Suzuki, M. Kamiya, N. Matsui, K. Nomoto, S. Hori, M. Hirayama, R. Kanno',
      journal: 'Electrochemistry, 93(6) (2025) 063006',
      doi: '10.5796/electrochemistry.25-71007'
    },
    {
      year: '2025',
      title: 'Oxygen-Substitution Effects on the Properties of Argyrodite-Type Sulfide Solid Electrolytes (Li5.5PS4.5−xBr1.5Ox, 0 ≦ x ≦ 0.5)',
      authors: 'R. Tsukazaki, N. Matsui, S. Hori, K. Suzuki, R. Kanno',
      journal: 'Electrochemistry, 93(6) (2025) 0630012',
      doi: '10.5796/electrochemistry.25-71033'
    },
    // 2024年
    {
      year: '2024',
      title: 'Mechanical Properties of Li10.35Ge1.35P1.65S12 with Different Particle Sizes',
      authors: 'H. Kim, K. Hikima, K. Watanabe, N. Matsui, K. Suzuki, S. Obokata, H. Muto, A. Matsuda, R. Kanno, M. Hirayama',
      journal: 'MATERIALS TRANSACTIONS, 65(8), (2024) 861-866',
      doi: ''
    },
    {
      year: '2024',
      title: 'Synthesis and Structural Characterization of Lithium Ionic Conductors Li2MS3 (M = Si, Si0.5Ge0.5, Ge) and Li16Ge5S18',
      authors: 'Y. Sasaki, S. Song, S. Hori, N. Matsui, K. Nomoto, K. Suzuki, M. Hirayama, I. Song, Y. Jang, R. Kanno',
      journal: 'Chemistry of Materials, 36(15), (2024) 7176–7185',
      doi: ''
    },
    {
      year: '2024',
      title: 'A composite cathode with a three-dimensional ion/electron-conducting structure for all-solid-state lithium–sulfur batteries',
      authors: 'P. Jiang, H. Zhou, S. Song, K. Suzuki, K. Watanabe, Y. Yamaguchi, N. Matsui, S. Hori, R. Kanno, M. Hirayama',
      journal: 'Communications Materials, 5(105) (2024)',
      doi: ''
    },
    {
      year: '2024',
      title: '硫化物固体電解質Li10.35Ge1.35P1.65S12の微細化による機械的強度の向上',
      authors: 'Hanseul KIM, 引間 和浩, 渡邊 健太, 松井 直喜, 鈴木 耕太, 小保方 聡, 武藤 浩行, 松田 厚範, 菅野 了次, 平山 雅章',
      journal: '粉体および粉末冶金, 71(3) (2024) 92-97',
      doi: ''
    },
    {
      year: '2024',
      title: 'Fabrication and High-temperature Electrochemical Stability of LiFePO4 Cathode/Li3PO4 Electrolyte Interface',
      authors: 'D. Kang, K. Ito, K. Shimizu, K. Watanabe, N. Matsui, K. Suzuki, R. Kanno, M. Hirayama',
      journal: 'Electrochemistry, 92(3) (2024) 037008',
      doi: ''
    },
    {
      year: '2024',
      title: 'Formation Processes of a Solid Electrolyte Interphase at a Silicon/Sulfide Electrolyte Interface in a Model All-Solid-State Li-Ion Battery',
      authors: 'S. Asano, J. Hata, K. Watanabe, K. Shimizu, N. Matsui, N. Yamada, K. Suzuki, R. Kanno, M. Hirayama',
      journal: 'ACS Appl. Mater. Interfaces, 16(6) (2024) 7189-7199',
      doi: ''
    },
    {
      year: '2024',
      title: 'Interfacial structure changes between amorphous silicon anode/liquid electrolyte using a highly dense and flat model electrode',
      authors: 'S. Asano, J. Hata, K. Watanabe, N. Matsui, K. Suzuki, R. Kanno, M. Hirayama',
      journal: 'J. Solid State Electrochem, 28 (2024) 4491–4501',
      doi: ''
    },
    {
      year: '2024',
      title: 'Fluorination/Defluorination Behavior of Y2C in Fluoride-Ion Battery Anodes',
      authors: 'T. Tojigamori, N. Matsui (共同第一著者), K. Suzuki, M. Hirayama, T. Abe, R. Kanno',
      journal: 'ACS Appl. Energy Mater., 7(3) (2024) 1100–1108',
      doi: ''
    },
    {
      year: '2024',
      title: 'Effect of Pb 6s2 lone pair on the potential flattening of fluoride-ion conduction in perovskite-type fluoride',
      authors: 'N. Matsui (corresponding author), M. Murakami, K. Mori, T. Saito, K. Shimizu, K. Suzuki, R. Kanno',
      journal: 'J. Mater. Chem. A, 12 (2024) 3989-3996',
      doi: '10.1039/D3TA06367D'
    },
    // 2023年
    {
      year: '2023',
      title: 'Accelerated Exploration of Fast Fluoride-Ion Conductors Based on Compositional Descriptors',
      authors: 'N. Matsui, T. Seki, K. Suzuki, M. Hirayama, R. Kanno',
      journal: 'ACS Applied Energy Materials, 6(22) (2023) 11663–11671',
      doi: '10.1021/acsaem.3c02107'
    },
    {
      year: '2023',
      title: 'Direct tracking of reaction distribution in an all-solid-state battery using operando scanning electron microscopy with energy dispersive X-ray spectroscopy',
      authors: 'T. Noda, H. Kim, K. Watanabe, K. Suzuki, N. Matsui, R. Kanno, M. Hirayama',
      journal: 'Journal of the Ceramic Society of Japan, 131(10) (2023) 651-658',
      doi: ''
    },
    {
      year: '2023',
      title: 'Electrochemical and mechanical properties and chemical stability of Li10GeP2S12/Al2O3 composite electrolytes',
      authors: 'T. Yabuzaki, M. Sato, H. Kim, K. Watanabe, N. Matsui, K. Suzuki, S. Hori, K. Hikima, S. Obokata, H. Muto, A. Matsuda, R. Kanno, M. Hirayama',
      journal: 'Journal of the Ceramic Society of Japan, 131(10) (2023) 675-684',
      doi: ''
    },
    {
      year: '2023',
      title: 'High H– Conductivities along the ab-Planes of La2LiHO3 Epitaxial Thin Films',
      authors: 'Y. Sasahara, T. Hirose, M. Yoshimoto, N. Matsui, S. Kobayashi, H. Ubukata, T. Fumitaka, K. Suzuki, M. Hirayama, K. Nishio, R. Shimizu, R. Kanno, G. Kobayashi, T. Hitosugi',
      journal: 'Crystal Growth & Design, 23(10) (2023) 7103–7108',
      doi: ''
    },
    {
      year: '2023',
      title: 'Crack Suppression by Downsizing Sulfide-Electrolyte Particles for High-Current-Density Operation of Metal/Alloy Anodes',
      authors: 'H. Kim, K. Watanabe, N. Matsui, K. Suzuki, R. Kanno, M. Hirayama',
      journal: 'Batteries & Supercaps, 6(10), (2023) e202300306',
      doi: ''
    },
    {
      year: '2023',
      title: 'Selective Synthesis of Perovskite Oxyhydrides Using a High-Pressure Flux Method',
      authors: 'J. Suzuki, H. Okochi, N. Matsui, T. Nagase, H. Tochizawa, H. Sahara, T. Nishikubo, Y. Sakai, T. Ohmi, Z. Pan, T. Saito, H. Saitoh, A. Ikezawa, H. Arai, R. Kanno, T. Yamamoto, M. Azuma',
      journal: 'Journal of the American Chemical Society, 145(30) (2023) 16398–16405',
      doi: ''
    },
    {
      year: '2023',
      title: 'A lithium superionic conductor for millimeter-thick battery electrode',
      authors: 'Y. Li, S. Song, H. Kim, K. Nomoto, H. Kim, X. Sun, S. Hori, K. Suzuki, N. Matsui, M. Hirayama, T. Mizoguchi, T. Saito, T. Kamiyama, R. Kanno',
      journal: 'Science, 381 (2023) 50-53',
      doi: ''
    },
    {
      year: '2023',
      title: 'Synthesis and Electrochemical Properties of Quaternary and Quinary γ-Li3PO4-Type Materials: Effects of Compositional Complexity in Lithium Superionic Conductors',
      authors: 'K. Suzuki, M. Kamiya, N. Matsui, S. Hori, M. Hirayama, R. Kanno',
      journal: 'J. Phys. Chem. C, 127, 10947-10952 (2023)',
      doi: ''
    },
    {
      year: '2023',
      title: 'Search for Lithium Ion Conducting Oxides Using the Predicted Ionic Conductivity by Machine Learning',
      authors: 'Y. Iwamizu, K. Suzuki, N. Matsui, M. Hirayama, R. Kanno',
      journal: 'MATERIALS TRANSACTIONS, 64(1), (2023) 287-295',
      doi: ''
    },
    // 2022年
    {
      year: '2022',
      title: 'Material Search for a Li10GeP2S12-Type Solid Electrolyte in the Li–P–S–X (X = Br, I) System via Clarification of the Composition–Structure–Property Relationships',
      authors: 'S. Song, S. Hori, Y. Li, K. Suzuki, N. Matsui, M. Hirayama, T. Saito, T. Kamiyama, R. Kanno',
      journal: 'Chemistry of Materials, 34(18), (2022) 8237–8247',
      doi: ''
    },
    {
      year: '2022',
      title: 'Fast Hydride-Ion Conduction in Perovskite Hydrides AELiH3',
      authors: 'T. Hirose, T. Mishina, N. Matsui, K. Suzuki, T. Saito, T. Kamiyama, M. Hirayama, R. Kanno',
      journal: 'ACS Appl. Energy Mater., 5(3), (2022) 2968-2974',
      doi: ''
    },
    {
      year: '2022',
      title: 'Reversible Charge/Discharge Reaction of a Ternary Metal Fluoride, Pb2CuF6: A Highly Conductive Cathode Material for Fluoride-Ion Batteries',
      authors: 'T. Tojigamori, H. Nakajima, H. Miki, N. Matsui, T. Nakatani, S. Fujinami, K. Noi, H. Tsukasaki, K. Suzuki, M. Hirayama, S. Mori, T. Abe, R. Kanno',
      journal: 'ACS Appl. Energy Mater, 5(1), (2022) 1002-1009',
      doi: ''
    },
    {
      year: '2022',
      title: 'Synthesis, structure, and electrical conductivity of Sr2LiH2N nitride hydride',
      authors: 'G. Jiang, N. Matsui, T. Mezaki, Y. Tota, K. Suzuki, M. Hirayama, T. Saito, T. Kamiyama, R. Kanno',
      journal: 'Journal of Solid State Chem., 310, (2022) 123051',
      doi: ''
    },
    {
      year: '2022',
      title: 'Anomalously High Ionic Conductivity of Li2SiS3-Type Conductors',
      authors: 'W. Huang, N. Matsui, S. Hori, K. Suzuki, M. Hirayama, M. Yonemura, T. Saito, T. Kamiyama, Y. Sasaki, Y. Yoon, S. Kim, R. Kanno',
      journal: 'J. Am. Chem. Soc., 144(11), (2022) 4989-4994',
      doi: ''
    },
    {
      year: '2022',
      title: 'Li10GeP2S12-Type Structured Solid Solution Phases in the Li9+δP3+δ′S12–kOk System: Controlling Crystallinity by Synthesis to Improve the Air Stability',
      authors: 'M. Xu, S. Song, S. Daikuhara, N. Matsui, S. Hori, K. Suzuki, M. Hirayama, S. Shiotani, S. Nakanishi, M. Yonemura, T. Saito, T. Kamiyama, R. Kanno',
      journal: 'Inorg. Chem., 61(1), (2022) 52-61',
      doi: ''
    },
    {
      year: '2022',
      title: '機械学習によるイオン導電率予測を指針としたリチウム導電性酸化物の探索',
      authors: '岩水佑大, 鈴木耕太, 松井直喜, 平山雅章, 菅野了次',
      journal: '粉体および粉末冶金, 69(3), (2022) 108-116',
      doi: ''
    },
    // 2021年
    {
      year: '2021',
      title: 'High-Pressure Synthesis and Lithium-Ion Conduction of Li4OBr2 Derivatives with a Layered Inverse-Perovskite Structure',
      authors: 'S. Wakazaki, Q. Liu, R. Jalem, T. Nishikubo, Y. Sakai, N. Matsui, G. Zhao, K. Suzuki, K. Shigematsu, T. Yamamoto, R. Kanno, H. Das, Y. Tateyama, M. Azuma',
      journal: 'Chem. Mater., 33(23), (2021) 9194-9201',
      doi: ''
    },
    // 2020年
    {
      year: '2020',
      title: 'The effect of cation size on hydride-ion conduction in LnSrLiH2O2 (Ln = La, Pr, Nd, Sm, Gd) oxyhydrides',
      authors: 'N. Matsui, Y. Hinuma, Y. Iwasaki, K. Suzuki, J. Guangzhong, H. Nawaz, Y. Imai, M. Yonemura, N. Hirayama, G. Kobayashi, R. Kanno',
      journal: 'Journal of Materials Chemistry A, 8(46), (2020) 24685-24694',
      doi: ''
    },
    // 2019年
    {
      year: '2019',
      title: 'Conduction mechanism of Li10GeP2S12-type Lithium superionic Conductors in a Li–Sn–Si–P–S System',
      authors: 'M. Inagaki, K. Suzuki, S. Hori, K. Yoshino, N. Matsui, M. Yonemura, M. Hirayama, R. Kanno',
      journal: 'Chemistry of Materials, 31(9), (2019) 3485-3490',
      doi: ''
    },
    {
      year: '2019',
      title: 'Ambient pressure synthesis of La2LiHO3 as a solid electrolyte for a hydrogen electrochemical cell',
      authors: 'N. Matsui, G. Kobayashi, K. Suzuki, A. Watanabe, A. Kubota, Y. Iwasaki, M. Yonemura, M. Hirayama, R. Kanno',
      journal: 'Journal of the American Ceramic Society, 102(6), (2019) 3228-3235',
      doi: ''
    },
    // 2018年
    {
      year: '2018',
      title: 'Synthesis, crystal structure, and ionic conductivity of hydride ion-conducting Ln2LiHO3 (Ln= La, Pr, Nd) oxyhydrides',
      authors: 'Y. Iwasaki, N. Matsui, K. Suzuki, Y. Hinuma, M. Yonemura, G. Kobayashi, M. Hirayama, I. Tanaka, R. Kanno',
      journal: 'Journal of Materials Chemistry A, 6(46), (2018) 23457-23463',
      doi: ''
    },
    {
      year: '2018',
      title: 'Stability of charged phase and cell properties of LiMn2–xAlxO4',
      authors: 'M. Nishijima, N. Matsui, J. Hata, T. Saito, Y. Nitta, K. Suzuki, M. Hirayama, R. Kanno',
      journal: 'Journal of The Electrochemical Society, 165(7), (2018) A1440-1446',
      doi: ''
    },
    // 2017年
    {
      year: '2017',
      title: 'Ambient pressure synthesis and H– conductivity of LaSrLiH2O2',
      authors: 'A. Watanabe, G. Kobayashi, N. Matsui, M. Yonemura, A. Kubota, K. Suzuki, M. Hirayama, R. Kanno',
      journal: 'Electrochemistry, 85(2), (2017) 88-92',
      doi: ''
    },
    {
      year: '2017',
      title: 'Synthesis and structure of novel lithium-ion conductor Li7Ge3PS12',
      authors: 'Y. Inoue, K. Suzuki, N. Matsui, M. Hirayama, R. Kanno',
      journal: 'Journal of Solid State Chemistry, 246, (2017) 334-340',
      doi: ''
    }
  ]

  // Review articles
  const reviews = [
    {
      year: '2022',
      title: 'ヒドリド電気化学デバイスに向けた固体電解質開発',
      authors: '松井直喜, 菅野了次',
      journal: 'Ceramic Data Book, 50号, (2022) 35-38',
      type: 'review'
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
            <p className="text-xl text-gray-300 font-light">{t('subtitle')}</p>
            <div className="mt-4 text-center">
              <div className="inline-flex items-center space-x-4 bg-gray-800/50 rounded-lg px-6 py-3 border border-cyan-400/20">
                <span className="text-cyan-400 font-mono text-sm">{t('totalPapers')} {publications.length}{locale === 'ja' ? '報' : ''}</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-400 font-mono text-sm">{t('reviewArticles')} {reviews.length}{locale === 'ja' ? '報' : ''}</span>
                <span className="text-gray-400">|</span>
                <span className="text-green-400 font-mono text-sm">{t('patents')} 8{locale === 'ja' ? '件' : ''}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('peerReviewed')}
            </span>
          </h2>
          <div className="grid gap-4 mb-16">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.01, 0.3) }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-sm font-mono text-cyan-400">{pub.year}</div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {pub.title}
                </h3>

                <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                  {pub.authors}
                </p>

                <p className="text-gray-400 text-sm italic mb-2">
                  {pub.journal}
                </p>

                {pub.doi && (
                  <div className="text-xs">
                    <span className="text-cyan-400">DOI: </span>
                    {pub.doi.startsWith('10.') ? (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 font-mono hover:text-cyan-400 transition-colors"
                      >
                        {pub.doi}
                      </a>
                    ) : (
                      <span className="text-gray-400 font-mono">{pub.doi}</span>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Review Articles */}
          {reviews.length > 0 && (
            <>
              <h2 className="text-3xl font-black mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {t('reviews')}
                </span>
              </h2>
              <div className="grid gap-4 mb-16">
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-purple-800/30 rounded-xl p-6 hover:border-purple-700/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-sm font-mono text-purple-400">{review.year}</div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                      {review.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                      {review.authors}
                    </p>

                    <p className="text-gray-400 text-sm italic">
                      {review.journal}
                    </p>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t('summary')}
                </span>
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-cyan-400 mb-2">{publications.length}</div>
                  <div className="text-sm text-gray-400">{t('peerReviewed')}</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-purple-400 mb-2">{reviews.length}</div>
                  <div className="text-sm text-gray-400">{t('reviews')}</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-400 mb-2">8</div>
                  <div className="text-sm text-gray-400">{t('patents')}</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-pink-400 mb-2">9</div>
                  <div className="text-sm text-gray-400">{t('researchPeriod')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          {tCommon('backToHome')}
        </Link>
      </div>
    </div>
  )
}
