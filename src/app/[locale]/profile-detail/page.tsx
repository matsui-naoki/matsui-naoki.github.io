'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'

export default function ProfileDetailPage() {
  const t = useTranslations('profile')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  // Career data
  const careerData = locale === 'ja' ? [
    { period: '2024年10月 - 現在', position: '東京科学大学 助教' },
    { period: '2021年4月 - 2024年9月', position: '東京工業大学 助教' },
    { period: '2020年4月 - 2021年3月', position: '東京工業大学 研究員' },
    { period: '2019年4月 - 2020年3月', position: '日本学術振興会特別研究員（DC2）' }
  ] : [
    { period: 'Oct 2024 - Present', position: 'Assistant Professor, Institute of Science Tokyo' },
    { period: 'Apr 2021 - Sep 2024', position: 'Assistant Professor, Tokyo Institute of Technology' },
    { period: 'Apr 2020 - Mar 2021', position: 'Postdoctoral Researcher, Tokyo Institute of Technology' },
    { period: 'Apr 2019 - Mar 2020', position: 'JSPS Research Fellow (DC2)' }
  ]

  // Awards data
  const awardsData = locale === 'ja' ? [
    { year: '2024年', award: 'オープンイノベータ功労賞（東京工業大学）' },
    { year: '2022年', award: '東工大挑戦的研究賞（東京工業大学）' },
    { year: '2019年', award: 'WILEY TOP DOWNLOADED PAPER 2018-2019' },
    { year: '2017年', award: 'Poster Award, The 6th Toyota RIKEN International Workshop' },
    { year: '2017年', award: '学生賞（分離技術会年会）' },
    { year: '2016年', award: '増本賞（新学術領域「ナノ構造情報」）' }
  ] : [
    { year: '2024', award: 'Open Innovator Award (Tokyo Institute of Technology)' },
    { year: '2022', award: 'Tokyo Tech Challenging Research Award (Tokyo Institute of Technology)' },
    { year: '2019', award: 'WILEY TOP DOWNLOADED PAPER 2018-2019' },
    { year: '2017', award: 'Poster Award, The 6th Toyota RIKEN International Workshop' },
    { year: '2017', award: 'Student Award (Separation Technology Association Annual Meeting)' },
    { year: '2016', award: 'Masumoto Award (Priority Area "Nanostructure Information")' }
  ]

  // Peer review journals
  const peerReviewJournals = [
    'Journal of Materials Chemistry A',
    'Inorganic Chemistry',
    'Solid State Ionics',
    'Electrochemistry',
    'European Journal of Inorganic Chemistry',
    'Ceramics International'
  ]

  // Societies
  const societies = locale === 'ja' ? [
    '電気化学会',
    '固体イオニクス学会',
    '応用物理学会',
    '日本セラミックス協会',
    '電池技術委員会'
  ] : [
    'The Electrochemical Society of Japan',
    'Solid State Ionics Society of Japan',
    'Japan Society of Applied Physics',
    'The Ceramic Society of Japan',
    'Battery Technology Committee'
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
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* Basic Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('basicInfo')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400 font-semibold">{t('name')}</span>
                  <p className="text-white">{t('nameValue')}</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">{t('positionLabel')}</span>
                  <p className="text-white">{t('positionValue')}</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">{t('affiliation')}</span>
                  <p className="text-white">{t('affiliationValue')}</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">{t('birthDate')}</span>
                  <p className="text-white">{t('birthDateValue')}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400 font-semibold">{t('researchField')}</span>
                  <p className="text-white">{t('researchFieldValue')}</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">{t('address')}</span>
                  <p className="text-white">{t('addressValue')}</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">{t('emailLabel')}</span>
                  <p className="text-white">matsui.n.ee49[at]m.isct.ac.jp</p>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">{t('telFax')}</span>
                  <p className="text-white">045-924-5561</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t('education')}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="text-purple-400 font-mono text-sm mb-1">
                  {locale === 'ja' ? '2017年4月 - 2020年3月' : 'Apr 2017 - Mar 2020'}
                </div>
                <div className="text-white font-bold text-lg mb-2">{t('phd')}</div>
                <div className="text-gray-300" style={{ whiteSpace: 'pre-line' }}>
                  {t('phdDetail')}
                </div>
              </div>
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="text-purple-400 font-mono text-sm mb-1">
                  {locale === 'ja' ? '2015年4月 - 2017年3月' : 'Apr 2015 - Mar 2017'}
                </div>
                <div className="text-white font-bold text-lg mb-2">{t('masters')}</div>
                <div className="text-gray-300">
                  {t('mastersDetail')}
                </div>
              </div>
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="text-purple-400 font-mono text-sm mb-1">
                  {locale === 'ja' ? '2011年4月 - 2015年3月' : 'Apr 2011 - Mar 2015'}
                </div>
                <div className="text-white font-bold text-lg mb-2">{t('bachelors')}</div>
                <div className="text-gray-300">
                  {t('bachelorsDetail')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {t('career')}
            </h2>
            <div className="space-y-4">
              {careerData.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-green-400 font-mono text-sm">{item.period}</div>
                    <div className="text-white font-semibold">{item.position}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Research Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              {locale === 'ja' ? '代表的な研究成果' : 'Representative Research Achievements'}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-4">
                  {locale === 'ja'
                    ? '1. 新たなフッ化物イオン伝導体の設計・開発'
                    : '1. Design and Development of Novel Fluoride Ion Conductors'}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>新たな結晶構造系(KYb<sub>2</sub>F<sub>7</sub>–BaYb<sub>2</sub>F<sub>8</sub>の擬似二成分系)で優れたイオン伝導性と電気化学的安定性を両立した固体電解質候補物質を開発しました（<span className="text-cyan-400 italic">Chem. Mater.</span>, 2025）</>
                        : <>Developed solid electrolyte candidate materials with excellent ionic conductivity and electrochemical stability in a new crystal structure system (KYb<sub>2</sub>F<sub>7</sub>–BaYb<sub>2</sub>F<sub>8</sub> pseudo-binary system) (<span className="text-cyan-400 italic">Chem. Mater.</span>, 2025)</>
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>CsPb<sub>0.9</sub>K<sub>0.1</sub>F<sub>2.9</sub>において、Pb 6s<sup>2</sup>孤立電子対の動的再配向がイオン輸送を促進することを実験・計算双方のアプローチから世界で初めて実証しました（<span className="text-cyan-400 italic">J. Mater. Chem. A</span>, 2024）</>
                        : <>First demonstration that dynamic reorientation of Pb 6s<sup>2</sup> lone pair electrons promotes ion transport in CsPb<sub>0.9</sub>K<sub>0.1</sub>F<sub>2.9</sub>, using both experimental and computational approaches (<span className="text-cyan-400 italic">J. Mater. Chem. A</span>, 2024)</>
                      }
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  {locale === 'ja'
                    ? '2. 機械学習による高効率な材料探索'
                    : '2. High-Efficiency Materials Discovery Using Machine Learning'}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>配位多面体に基づくリチウムイオン伝導体の局所配置とイオン伝導率の相関を解析し、分子動力学計算と実験的検証により新たなリチウムイオン伝導体を開発しました（<span className="text-cyan-400 italic">JACS</span>, 2025）</>
                        : <>Analyzed correlation between local configurations and ionic conductivity of lithium ion conductors based on coordination polyhedra, and developed new lithium ion conductors through molecular dynamics calculations and experimental validation (<span className="text-cyan-400 italic">JACS</span>, 2025)</>
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>組成記述子に基づくイオン伝導率予測の機械学習モデルを開発し、フッ化物イオン伝導体の効率的な探索手法を提案し、実際にSn系として初のタイソナイト型フッ化物イオン伝導体Ba<sub>0.2</sub>Sn<sub>0.8</sub>F<sub>2</sub> (σ=10<sup>–4</sup> S cm<sup>–1</sup>) を発見しました（<span className="text-cyan-400 italic">ACS Appl. Energy Mater.</span>, 2023）</>
                        : <>Developed machine learning model for ionic conductivity prediction based on compositional descriptors, proposed efficient search method for fluoride ion conductors, and discovered first tysonite-type fluoride ion conductor in Sn system: Ba<sub>0.2</sub>Sn<sub>0.8</sub>F<sub>2</sub> (σ=10<sup>–4</sup> S cm<sup>–1</sup>) (<span className="text-cyan-400 italic">ACS Appl. Energy Mater.</span>, 2023)</>
                      }
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">
                  {locale === 'ja'
                    ? '3. ヒドリドイオン伝導体の設計指針の確立'
                    : '3. Establishment of Design Guidelines for Hydride Ion Conductors'}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>ペロブスカイト型SrLiH<sub>3</sub>系において、カチオンサイズとイオン移動障壁を系統的に解明し、低温で比較的高い特性を示す固体電解質を開発（<span className="text-cyan-400 italic">ACS Appl. Energy Mater.</span>, 2021）</>
                        : <>Systematically elucidated relationship between cation size and ion migration barriers in perovskite-type SrLiH<sub>3</sub> system, developing solid electrolyte with relatively high performance at low temperature (<span className="text-cyan-400 italic">ACS Appl. Energy Mater.</span>, 2021)</>
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>K<sub>2</sub>NiF<sub>4</sub>型LnSrLiH<sub>2</sub>O<sub>2</sub>系において、中性子回折・第一原理計算を駆使して、カチオンサイズがヒドリドイオン伝導に与える影響を系統的に解明しました（<span className="text-cyan-400 italic">J. Mater. Chem. A</span>, 2020）</>
                        : <>Systematically elucidated the effect of cation size on hydride ion conduction in K<sub>2</sub>NiF<sub>4</sub>-type LnSrLiH<sub>2</sub>O<sub>2</sub> system using neutron diffraction and first-principles calculations (<span className="text-cyan-400 italic">J. Mater. Chem. A</span>, 2020)</>
                      }
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {t('awards')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {awardsData.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-800/30 rounded-lg p-3">
                  <div className="text-yellow-400 font-mono text-sm flex-shrink-0">{item.year}</div>
                  <div className="text-white text-sm">{item.award}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Funding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {t('funding')}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-4">{t('fundingPI')}</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-white">
                        {locale === 'ja'
                          ? '科研費 学術変革領域研究(A) 公募（2025-2026年度）'
                          : 'KAKENHI Grant-in-Aid for Transformative Research Areas (A), Public Offering (2025-2026)'}
                      </span><br/>
                      <span className="text-sm">
                        {locale === 'ja'
                          ? '「イオン輸送を阻害/促進する孤立電子対の制御と超イオン導電体の探索」'
                          : '"Control of Lone Pairs that Inhibit/Promote Ion Transport and Exploration of Superionic Conductors"'}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-white">
                        {locale === 'ja'
                          ? '科研費 若手研究（2022-2024年度）'
                          : 'KAKENHI Grant-in-Aid for Early-Career Scientists (2022-2024)'}
                      </span><br/>
                      <span className="text-sm">
                        {locale === 'ja'
                          ? '「構造類似性に基づくヒドリドイオン導電体の創製」'
                          : '"Creation of Hydride Ion Conductors Based on Structural Similarity"'}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <span className="font-semibold text-white">
                      {locale === 'ja'
                        ? '東京工業大学 挑戦的研究賞（2023年度）'
                        : 'Tokyo Tech Challenging Research Award (2023)'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <span className="font-semibold text-white">
                      {locale === 'ja'
                        ? '東京工業大学 基礎研究機構 広域基礎研究塾 新研究挑戦奨励金 (2023年度)'
                        : 'Tokyo Tech IIR Wide-Range Basic Research Academy New Research Challenge Grant (2023)'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-white">
                        {locale === 'ja'
                          ? '科研費 特別研究員奨励費（2019-2020年度）'
                          : 'KAKENHI Grant-in-Aid for JSPS Fellows (2019-2020)'}
                      </span><br/>
                      <span className="text-sm">
                        {locale === 'ja'
                          ? '「高酸素欠損を基軸とした酸化物イオン伝導体の開発」'
                          : '"Development of Oxide Ion Conductors Based on High Oxygen Deficiency"'}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">{t('fundingCoI')}</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    <span className="font-semibold text-white">
                      {locale === 'ja'
                        ? 'NEDO 電気自動車用革新型蓄電池開発（2021-2025年度）'
                        : 'NEDO Development of Innovative Battery for Electric Vehicles (2021-2025)'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-white">
                        {locale === 'ja'
                          ? '科学研究費助成事業 基盤研究(B)（2022-2024年度）'
                          : 'KAKENHI Grant-in-Aid for Scientific Research (B) (2022-2024)'}
                      </span><br/>
                      <span className="text-gray-400 text-sm ml-4">
                        {locale === 'ja'
                          ? '研究代表者：山本 隆文先生'
                          : 'PI: Prof. Takafumi Yamamoto'}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">▸</span>
                    <span className="font-semibold text-white">
                      {locale === 'ja'
                        ? 'NEDO 革新型蓄電池実用化促進基盤技術開発（2019-2020年度）'
                        : 'NEDO Development of Fundamental Technology for Commercialization of Innovative Batteries (2019-2020)'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Teaching */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              {t('teaching')}
            </h2>
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-teal-400 mb-2">
                {locale === 'ja'
                  ? '応化専門実験第4 基礎電気化学と燃料電池'
                  : 'Applied Chemistry Laboratory 4: Basic Electrochemistry and Fuel Cells'}
              </h3>
              <p className="text-gray-300">
                {locale === 'ja'
                  ? '電気化学の基礎理論から燃料電池の実践的な応用まで、実験を通じて学生に指導しています。'
                  : 'Guiding students from basic electrochemistry theory to practical applications of fuel cells through experiments.'}
              </p>
            </div>
          </motion.div>

          {/* Academic Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              {t('academicActivities')}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-pink-400 mb-3">{t('peerReview')}</h3>
                <div className="flex flex-wrap gap-2">
                  {peerReviewJournals.map((journal, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700">
                      {journal}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-3">{t('affiliations')}</h3>
                <div className="flex flex-wrap gap-2">
                  {societies.map((society, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700">
                      {society}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">{t('seminars')}</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? '電気化学会 電気化学セミナーA'
                        : 'Electrochemical Society of Japan - Electrochemistry Seminar A'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? '電気化学会関東支部 基礎セミナー'
                        : 'Electrochemical Society of Japan, Kanto Branch - Basic Seminar'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? '東陽テクニカ 技術セミナー'
                        : 'Toyo Corporation Technical Seminar'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Research Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              {t('philosophy')}
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>{t('philosophyText1')}</p>
              <p>{t('philosophyText2')}</p>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
              {t('hobbies')}
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>{t('hobbiesText1')}</p>
              <p>{t('hobbiesText2')}</p>
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
