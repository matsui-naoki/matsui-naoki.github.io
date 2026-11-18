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
    { period: '2026年6月 - 現在', position: '東京科学大学 准教授' },
    { period: '2024年10月 - 2026年5月', position: '東京科学大学 助教' },
    { period: '2021年4月 - 2024年9月', position: '東京工業大学 助教' },
    { period: '2020年4月 - 2021年3月', position: '東京工業大学 研究員' },
    { period: '2019年4月 - 2020年3月', position: '日本学術振興会特別研究員（DC2）' }
  ] : [
    { period: 'Jun 2026 - Present', position: 'Associate Professor, Institute of Science Tokyo' },
    { period: 'Oct 2024 - May 2026', position: 'Assistant Professor, Institute of Science Tokyo' },
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
            <p className="text-xl text-[#cfcfcf] font-light">{t('subtitle')}</p>
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
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('basicInfo')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-[#cfcfcf]">
              <div className="space-y-3">
                <div>
                  <span className="text-[#76b900] font-semibold">{t('name')}</span>
                  <p className="text-[#ffffff]">{t('nameValue')}</p>
                </div>
                <div>
                  <span className="text-[#76b900] font-semibold">{t('positionLabel')}</span>
                  <p className="text-[#ffffff]">{t('positionValue')}</p>
                </div>
                <div>
                  <span className="text-[#76b900] font-semibold">{t('affiliation')}</span>
                  <p className="text-[#ffffff]">{t('affiliationValue')}</p>
                </div>
                <div>
                  <span className="text-[#76b900] font-semibold">{t('birthDate')}</span>
                  <p className="text-[#ffffff]">{t('birthDateValue')}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-[#76b900] font-semibold">{t('researchField')}</span>
                  <p className="text-[#ffffff]">{t('researchFieldValue')}</p>
                </div>
                <div>
                  <span className="text-[#76b900] font-semibold">{t('address')}</span>
                  <p className="text-[#ffffff]">{t('addressValue')}</p>
                </div>
                <div>
                  <span className="text-[#76b900] font-semibold">{t('emailLabel')}</span>
                  <p className="text-[#ffffff]">matsui.n.ee49[at]m.isct.ac.jp</p>
                </div>
                <div>
                  <span className="text-[#76b900] font-semibold">{t('telFax')}</span>
                  <p className="text-[#ffffff]">045-924-5570</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('education')}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#76b900] pl-6">
                <div className="text-[#76b900] font-mono text-sm mb-1">
                  {locale === 'ja' ? '2017年4月 - 2020年3月' : 'Apr 2017 - Mar 2020'}
                </div>
                <div className="text-[#ffffff] font-bold text-lg mb-2">{t('phd')}</div>
                <div className="text-[#cfcfcf]" style={{ whiteSpace: 'pre-line' }}>
                  {t('phdDetail')}
                </div>
              </div>
              <div className="border-l-4 border-[#76b900] pl-6">
                <div className="text-[#76b900] font-mono text-sm mb-1">
                  {locale === 'ja' ? '2015年4月 - 2017年3月' : 'Apr 2015 - Mar 2017'}
                </div>
                <div className="text-[#ffffff] font-bold text-lg mb-2">{t('masters')}</div>
                <div className="text-[#cfcfcf]">
                  {t('mastersDetail')}
                </div>
              </div>
              <div className="border-l-4 border-[#76b900] pl-6">
                <div className="text-[#76b900] font-mono text-sm mb-1">
                  {locale === 'ja' ? '2011年4月 - 2015年3月' : 'Apr 2011 - Mar 2015'}
                </div>
                <div className="text-[#ffffff] font-bold text-lg mb-2">{t('bachelors')}</div>
                <div className="text-[#cfcfcf]">
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
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('career')}
            </h2>
            <div className="space-y-4">
              {careerData.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#76b900] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-[#76b900] font-mono text-sm">{item.period}</div>
                    <div className="text-[#ffffff] font-semibold">{item.position}</div>
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
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {locale === 'ja' ? '代表的な研究成果' : 'Representative Research Achievements'}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#e0c060] mb-4">
                  {locale === 'ja'
                    ? '1. 新たなフッ化物イオン伝導体の設計・開発'
                    : '1. Design and Development of Novel Fluoride Ion Conductors'}
                </h3>
                <ul className="space-y-3 text-[#cfcfcf]">
                  <li className="flex items-start">
                    <span className="text-[#e0c060] mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>新たな結晶構造系(KYb<sub>2</sub>F<sub>7</sub>–BaYb<sub>2</sub>F<sub>8</sub>の擬似二成分系)で優れたイオン伝導性と電気化学的安定性を両立した固体電解質候補物質を開発しました（<span className="text-[#76b900] italic">Chem. Mater.</span>, 2025）</>
                        : <>Developed solid electrolyte candidate materials with excellent ionic conductivity and electrochemical stability in a new crystal structure system (KYb<sub>2</sub>F<sub>7</sub>–BaYb<sub>2</sub>F<sub>8</sub> pseudo-binary system) (<span className="text-[#76b900] italic">Chem. Mater.</span>, 2025)</>
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e0c060] mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>CsPb<sub>0.9</sub>K<sub>0.1</sub>F<sub>2.9</sub>において、Pb 6s<sup>2</sup>孤立電子対の動的再配向がイオン輸送を促進することを実験・計算双方のアプローチから世界で初めて実証しました（<span className="text-[#76b900] italic">J. Mater. Chem. A</span>, 2024）</>
                        : <>First demonstration that dynamic reorientation of Pb 6s<sup>2</sup> lone pair electrons promotes ion transport in CsPb<sub>0.9</sub>K<sub>0.1</sub>F<sub>2.9</sub>, using both experimental and computational approaches (<span className="text-[#76b900] italic">J. Mater. Chem. A</span>, 2024)</>
                      }
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-4">
                  {locale === 'ja'
                    ? '2. 機械学習による高効率な材料探索'
                    : '2. High-Efficiency Materials Discovery Using Machine Learning'}
                </h3>
                <ul className="space-y-3 text-[#cfcfcf]">
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>配位多面体に基づくリチウムイオン伝導体の局所配置とイオン伝導率の相関を解析し、分子動力学計算と実験的検証により新たなリチウムイオン伝導体を開発しました（<span className="text-[#76b900] italic">JACS</span>, 2025）</>
                        : <>Analyzed correlation between local configurations and ionic conductivity of lithium ion conductors based on coordination polyhedra, and developed new lithium ion conductors through molecular dynamics calculations and experimental validation (<span className="text-[#76b900] italic">JACS</span>, 2025)</>
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>組成記述子に基づくイオン伝導率予測の機械学習モデルを開発し、フッ化物イオン伝導体の効率的な探索手法を提案し、実際にSn系として初のタイソナイト型フッ化物イオン伝導体Ba<sub>0.2</sub>Sn<sub>0.8</sub>F<sub>2</sub> (σ=10<sup>–4</sup> S cm<sup>–1</sup>) を発見しました（<span className="text-[#76b900] italic">ACS Appl. Energy Mater.</span>, 2023）</>
                        : <>Developed machine learning model for ionic conductivity prediction based on compositional descriptors, proposed efficient search method for fluoride ion conductors, and discovered first tysonite-type fluoride ion conductor in Sn system: Ba<sub>0.2</sub>Sn<sub>0.8</sub>F<sub>2</sub> (σ=10<sup>–4</sup> S cm<sup>–1</sup>) (<span className="text-[#76b900] italic">ACS Appl. Energy Mater.</span>, 2023)</>
                      }
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-4">
                  {locale === 'ja'
                    ? '3. ヒドリドイオン伝導体の開発と水素吸蔵デバイスの創出'
                    : '3. Development of Hydride Ion Conductors and Creation of Hydrogen Storage Devices'}
                </h3>
                <ul className="space-y-3 text-[#cfcfcf]">
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>電気化学的安定性とイオン伝導率を兼ね備えた新たな固体電解質の開発と、それを用いた新規水素吸蔵デバイスを創出しました（<span className="text-[#76b900] italic">Science</span>, 2025）</>
                        : <>Developed a novel solid electrolyte combining electrochemical stability and ionic conductivity, and created a new hydrogen storage device using it (<span className="text-[#76b900] italic">Science</span>, 2025)</>
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>ペロブスカイト型SrLiH<sub>3</sub>系において、カチオンサイズとイオン移動障壁を系統的に解明し、低温で比較的高い特性を示す固体電解質を開発（<span className="text-[#76b900] italic">ACS Appl. Energy Mater.</span>, 2021）</>
                        : <>Systematically elucidated relationship between cation size and ion migration barriers in perovskite-type SrLiH<sub>3</sub> system, developing solid electrolyte with relatively high performance at low temperature (<span className="text-[#76b900] italic">ACS Appl. Energy Mater.</span>, 2021)</>
                      }
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? <>K<sub>2</sub>NiF<sub>4</sub>型LnSrLiH<sub>2</sub>O<sub>2</sub>系において、中性子回折・第一原理計算を駆使して、カチオンサイズがヒドリドイオン伝導に与える影響を系統的に解明しました（<span className="text-[#76b900] italic">J. Mater. Chem. A</span>, 2020）</>
                        : <>Systematically elucidated the effect of cation size on hydride ion conduction in K<sub>2</sub>NiF<sub>4</sub>-type LnSrLiH<sub>2</sub>O<sub>2</sub> system using neutron diffraction and first-principles calculations (<span className="text-[#76b900] italic">J. Mater. Chem. A</span>, 2020)</>
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
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('awards')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {awardsData.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-[#1a1a1a]/70 rounded p-3">
                  <div className="text-[#e0c060] font-mono text-sm flex-shrink-0">{item.year}</div>
                  <div className="text-[#ffffff] text-sm">{item.award}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Funding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('funding')}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-4">{t('fundingPI')}</h3>
                <ul className="space-y-3 text-[#cfcfcf]">
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-[#ffffff]">
                        {locale === 'ja'
                          ? 'JST さきがけ（2025-2028年度）'
                          : 'JST PRESTO (2025-2028)'}
                      </span><br/>
                      <span className="text-sm">
                        {locale === 'ja'
                          ? '「革新的なエネルギー変換を可能とする量子・電子制御」領域'
                          : 'Research Area: "Quantum and Electronic Control for Innovative Energy Conversion"'}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-[#ffffff]">
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
                    <span className="text-[#76b900] mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-[#ffffff]">
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
                    <span className="text-[#76b900] mr-2">▸</span>
                    <span className="font-semibold text-[#ffffff]">
                      {locale === 'ja'
                        ? '東京工業大学 挑戦的研究賞（2023年度）'
                        : 'Tokyo Tech Challenging Research Award (2023)'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    <span className="font-semibold text-[#ffffff]">
                      {locale === 'ja'
                        ? '東京工業大学 基礎研究機構 広域基礎研究塾 新研究挑戦奨励金 (2023年度)'
                        : 'Tokyo Tech IIR Wide-Range Basic Research Academy New Research Challenge Grant (2023)'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-[#ffffff]">
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
                <h3 className="text-xl font-bold text-[#76b900] mb-4">{t('fundingCoI')}</h3>
                <ul className="space-y-3 text-[#cfcfcf]">
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    <span className="font-semibold text-[#ffffff]">
                      {locale === 'ja'
                        ? 'NEDO 電気自動車用革新型蓄電池開発（2021-2025年度）'
                        : 'NEDO Development of Innovative Battery for Electric Vehicles (2021-2025)'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    <div>
                      <span className="font-semibold text-[#ffffff]">
                        {locale === 'ja'
                          ? '科学研究費助成事業 基盤研究(B)（2022-2024年度）'
                          : 'KAKENHI Grant-in-Aid for Scientific Research (B) (2022-2024)'}
                      </span><br/>
                      <span className="text-[#9a9a9a] text-sm ml-4">
                        {locale === 'ja'
                          ? '研究代表者：山本 隆文先生'
                          : 'PI: Prof. Takafumi Yamamoto'}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">▸</span>
                    <span className="font-semibold text-[#ffffff]">
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
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('teaching')}
            </h2>
            <div className="bg-[#1a1a1a]/70 rounded p-4">
              <h3 className="text-lg font-bold text-teal-400 mb-2">
                {locale === 'ja'
                  ? '応化専門実験第4 基礎電気化学と燃料電池'
                  : 'Applied Chemistry Laboratory 4: Basic Electrochemistry and Fuel Cells'}
              </h3>
              <p className="text-[#cfcfcf]">
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
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('academicActivities')}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#76b900] mb-3">{t('peerReview')}</h3>
                <div className="flex flex-wrap gap-2">
                  {peerReviewJournals.map((journal, index) => (
                    <span key={index} className="px-3 py-1 bg-[#1a1a1a] text-[#cfcfcf] rounded-full text-sm border border-[#3a3a3a]">
                      {journal}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#76b900] mb-3">{t('affiliations')}</h3>
                <div className="flex flex-wrap gap-2">
                  {societies.map((society, index) => (
                    <span key={index} className="px-3 py-1 bg-[#1a1a1a] text-[#cfcfcf] rounded-full text-sm border border-[#3a3a3a]">
                      {society}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#76b900] mb-3">{t('seminars')}</h3>
                <ul className="space-y-2 text-[#cfcfcf]">
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? '電気化学会 電気化学セミナーA'
                        : 'Electrochemical Society of Japan - Electrochemistry Seminar A'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">•</span>
                    <span>
                      {locale === 'ja'
                        ? '電気化学会関東支部 基礎セミナー'
                        : 'Electrochemical Society of Japan, Kanto Branch - Basic Seminar'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#76b900] mr-2">•</span>
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
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('philosophy')}
            </h2>
            <div className="text-[#cfcfcf] leading-relaxed space-y-4">
              <p>{t('philosophyText1')}</p>
              <p>{t('philosophyText2')}</p>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('hobbies')}
            </h2>
            <div className="text-[#cfcfcf] leading-relaxed space-y-4">
              <p>{t('hobbiesText1')}</p>
              <p>{t('hobbiesText2')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-[#ffffff] text-[#050505] px-4 py-2 rounded shadow-lg transition-all duration-300">
          {tCommon('backToHome')}
        </Link>
      </div>
    </div>
  )
}
