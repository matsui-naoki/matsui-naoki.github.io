'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'

export default function NewsPage() {
  const t = useTranslations('news')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  const allNews = locale === 'ja' ? [
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
      desc: 'D2,M1学生が同行し, その場で測定結果について議論しました. 出張お疲れ様です!',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.26',
      title: 'J-PARC BL09にて中性子回折実験を実施',
      desc: 'M1学生さんも同行して中性子回折実験の一連の流れや装置の特徴を学びました.',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.24',
      title: '菅野先生の古希祝賀会を開催',
      desc: '大勢のOBの皆様に参加いただき盛会でした!',
      category: 'SEMINAR'
    },
    {
      date: '2026.01.16',
      title: '近畿化学協会電池セミナーにて招待講演',
      desc: '固体電解質開発について講演しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2026.01.06',
      title: '博士学生の公聴会',
      desc: 'お疲れ様でした. 残り僅かですが頑張ってください!',
      category: 'SEMINAR'
    },
    {
      date: '2025.12.15',
      title: 'Pacifichem @ Hawaiiにてフッ化物イオン伝導体について招待講演',
      desc: '国際会議で最新の研究成果を報告しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2025.12.11-12',
      title: '渋滞学シンポジウム@MRMに参加・発表',
      desc: 'イオン渋滞学に関する発表を行いました。',
      category: 'CONFERENCE'
    },
    {
      date: '2025.12.09',
      title: 'John Irvine教授(St Andrews)らとディスカッション',
      desc: '固体イオニクスのトレンドについて議論しました。',
      category: 'VISIT'
    },
    {
      date: '2025.12.08',
      title: '日本化学会電池部会にてフッ化物伝導体について招待講演',
      desc: 'フッ化物イオン伝導体の最新研究について発表しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.25-27',
      title: '固体イオニクス討論会@船堀に参加',
      desc: 'コンビナトリアル実験について報告しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.18-19',
      title: '電池討論会@名古屋に参加',
      desc: 'グラフニューラルネットワークポテンシャルを用いたイオン伝導体スクリーニングについて報告しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.14-15',
      title: '学術変革領域会議@筑波山に参加',
      desc: '泊まり込みで発表・議論しました. 学生さんの実験結果についても報告しました.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.10',
      title: 'さきがけのキックオフ会議に参加・発表',
      desc: 'JSTさきがけのキックオフ会議で研究計画を発表しました。',
      category: 'RESEARCH'
    },
    {
      date: '2025.11.07-10',
      title: 'SPring-8 BL28XUにて薄膜X線回折測定を実施',
      desc: '学生も同行しました.',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.11.01-03',
      title: 'SPring-8 BL02B2にて粉末X線回折測定を実施',
      desc: 'M1学生さん2名が同行して、各自のサンプル(なんと計100試料超え！)を測定しました.',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.10.21-22',
      title: '三重大学今西森研に訪問',
      desc: '森先生らとフッ化物イオン伝導体について議論しました. M1, M2学生も同行して学生間で活発に議論しました.',
      category: 'VISIT'
    },
    {
      date: '2025.09.18',
      title: 'ヒドリドイオン伝導体を用いた水素吸蔵デバイスの論文がScienceに掲載!',
      desc: (
        <span>
          新たな固体電解質と、Mg-H2水素吸蔵デバイスを開発しました. 東京科学大学 平山研博士学生廣瀬さんら(現同大学 荒井研助教)との共同の成果です.
          <a href="https://www.science.org/doi/10.1126/science.adw1996" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2025.09.18',
      title: 'ISE/ELLIPSE会議@Germanyで発表, OliverClemensLab@Stuttgart訪問',
      desc: 'フッ化物イオン伝導体開発を報告・議論しました',
      category: 'CONFERENCE'
    },
    {
      date: '2025.09.17',
      title: 'JSTさきがけプログラムに研究課題が採択',
      desc: (
        <span>
          JSTさきがけに採択されました!
          <a href="https://www.jst.go.jp/kisoken/presto/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline ml-1">
            詳細はこちら
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2025.08.05',
      title: '菅野・鈴木研のM1学生2名が固体イオニクスセミナー@宮崎に参加',
      desc: '板倉さん、亀若さんが新規固体電解質材料の探索について発表します。頑張ってください!',
      category: 'CONFERENCE'
    },
    {
      date: '2025.07.24',
      title: '菅野・鈴木研究室の前期の研究報告ゼミが終了',
      desc: '皆さんお疲れ様でした!',
      category: 'SEMINAR',
      hasImage: true
    },
    {
      date: '2025.07.10',
      title: 'SPring-8で高エネルギーX線散乱実験を実施',
      desc: 'SPring-8で高エネルギーX線散乱実験を行いました。学生も同行しました。お疲れ様。',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.06.20',
      title: '新規フッ化物イオン伝導体の論文がChem. Mater.にアクセプト',
      desc: '珍しい結晶構造で結構高いフッ化物イオン伝導率を示す新たな材料系として期待。多面体の連結性が変わりながら(頂点↔稜共有)過剰フッ素を構造内に取り込む、珍しい物質です。',
      category: 'RESEARCH'
    },
    {
      date: '2025.06.19',
      title: 'D3学生 Kongさん (Science Tokyo, 鈴木研) の論文がJACSにアクセプト',
      desc: '配位多面体モチーフを特徴量としてイオン伝導率を予測し、NNポテンシャルで分子動力学計算を行いイオン伝導率を検証し、最終的に実験的に新たなLiイオン伝導体を創出しました。',
      category: 'RESEARCH'
    },
    {
      date: '2025.06.19',
      title: '菅野・鈴木研究室の前期の論文輪読ゼミが終了',
      desc: '皆さんお疲れ様でした!',
      category: 'SEMINAR'
    },
    {
      date: '2025.05.26',
      title: 'John Irvine先生の研究室 (St. Andrews) のMariaanaとMichkelが菅野鈴木研を訪問',
      desc: '研究室の学生とともに双方の研究トピックについて議論しました。',
      category: 'VISIT'
    },
    {
      date: '2025.05.20',
      title: 'Kim Sangryun教授 (GIST, Korea) との共著の論文がJACSにアクセプト',
      desc: 'ペロブスカイト型ヒドリドイオン伝導体に錯イオン(BH4-)を組み込んだ新たな材料系の報告です。',
      category: 'RESEARCH'
    },
    {
      date: '2025.04.01',
      title: '学術変革領域(A) イオン渋滞学 に公募メンバーとして参画',
      desc: '横断的な共同研究・材料開発に取り組みます!',
      category: 'COLLABORATION'
    },
    {
      date: '2025.04.01',
      title: '菅野鈴木研に新M1として3名が加入',
      desc: 'おめでとうございます。',
      category: 'MEMBER'
    },
    {
      date: '2025.03.11',
      title: 'M2学生の小貫さんの論文がSolid State Ionicsにアクセプト',
      desc: '新規フッ化物イオン伝導体としてScheelite構造に着目し、その伝導率最適化と伝導メカニズム解明を報告しました。',
      category: 'RESEARCH'
    },
    {
      date: '2025.02.20',
      title: 'D3学生 廣瀬さん (Science Tokyo, 応化系 平山研)との共著の論文がDalton Transactionsで公開',
      desc: 'ペロブスカイト型ヒドリドイオン伝導体の組成最適化に関する報告です。',
      category: 'RESEARCH'
    },
    {
      date: '2024.11.10',
      title: 'D2学生 Kongさん (Science Tokyo, 鈴木研) が国内学会 第14回CSJ化学フェスタで優秀ポスター賞を受賞',
      desc: 'Congratulations!',
      category: 'AWARD'
    },
    {
      date: '2024.07.25',
      title: 'D2学生の廣瀬さん (Science Tokyo, 応化系 平山研)が国際学会 Solid State Ionics 2024@LondonでPoster awardを受賞',
      desc: '国際的な場での受賞、おめでとうございます！',
      category: 'AWARD'
    },
    {
      date: '2023.11.20',
      title: 'M1学生の小貫さんが国内学会 第13回CSJ化学フェスタで優秀ポスター賞を受賞',
      desc: '素晴らしい成果です！',
      category: 'AWARD'
    }
  ] : [
    {
      date: '2026.02.12-13',
      title: 'Master\'s thesis presentations for 3 students',
      desc: 'Excellent presentations! Great work!',
      category: 'SEMINAR'
    },
    {
      date: '2026.02.09',
      title: 'Prof. Zhong from Ritsumeikan University visited for exchange and discussion',
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
      title: 'Synchrotron powder X-ray diffraction experiment at SPring-8 BL02B2',
      desc: 'D2 and M1 students accompanied and discussed measurement results on-site. Great work on the trip!',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.26',
      title: 'Neutron diffraction experiment at J-PARC BL09',
      desc: 'M1 student accompanied and learned the workflow and characteristics of neutron diffraction instruments.',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.24',
      title: 'Celebrated Prof. Kanno\'s 70th birthday',
      desc: 'Many alumni participated and it was a great success!',
      category: 'SEMINAR'
    },
    {
      date: '2026.01.16',
      title: 'Invited lecture at Kinki Chemical Society Battery Seminar',
      desc: 'Gave a lecture on solid electrolyte development.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.01.06',
      title: 'Doctoral student\'s public hearing',
      desc: 'Great work. Keep up the effort for the remaining time!',
      category: 'SEMINAR'
    },
    {
      date: '2025.12.15',
      title: 'Invited lecture on fluoride ion conductors at Pacifichem @ Hawaii',
      desc: 'Reported latest research results at the international conference.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.12.11-12',
      title: 'Participated and presented at Ion Traffic Jam Symposium @MRM',
      desc: 'Presented on ion traffic jam science.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.12.09',
      title: 'Discussion with Prof. John Irvine (St Andrews) and colleagues',
      desc: 'Discussed trends in solid-state ionics.',
      category: 'VISIT'
    },
    {
      date: '2025.12.08',
      title: 'Invited lecture on fluoride conductors at CSJ Battery Division',
      desc: 'Presented on the latest research in fluoride ion conductors.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.25-27',
      title: 'Participated in Solid State Ionics Symposium @Funabori',
      desc: 'Reported on combinatorial experiments.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.18-19',
      title: 'Participated in Battery Discussion Meeting @Nagoya',
      desc: 'Reported on ion conductor screening using graph neural network potentials.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.14-15',
      title: 'Participated in Transformative Research Area Meeting @Mt. Tsukuba',
      desc: 'Presented and discussed during overnight stay. Also reported on students\' experimental results.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.10',
      title: 'Participated and presented at PRESTO kickoff meeting',
      desc: 'Presented research plan at JST PRESTO kickoff meeting.',
      category: 'RESEARCH'
    },
    {
      date: '2025.11.07-10',
      title: 'Thin film X-ray diffraction measurement at SPring-8 BL28XU',
      desc: 'Students also accompanied.',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.11.01-03',
      title: 'Powder X-ray diffraction measurement at SPring-8 BL02B2',
      desc: 'Two M1 students accompanied and measured their samples (over 100 samples in total!).',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.10.21-22',
      title: 'Visited Imanishi-Mori Lab at Mie University',
      desc: 'Discussed fluoride ion conductors with Prof. Mori. M1 and M2 students also accompanied and actively discussed with each other.',
      category: 'VISIT'
    },
    {
      date: '2025.09.18',
      title: 'Paper on hydrogen storage device using hydride ion conductors published in Science!',
      desc: (
        <span>
          Developed a new solid electrolyte and Mg-H2 hydrogen storage device. Joint achievement with Dr. Hirose (now Assistant Professor at Arai Lab), doctoral student at Hirayama Lab, Institute of Science Tokyo.
          <a href="https://www.science.org/doi/10.1126/science.adw1996" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline ml-1">
            Paper link
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2025.09.18',
      title: 'Presentation at ISE/ELLIPSE Conference @Germany, Visit to Oliver Clemens Lab @Stuttgart',
      desc: 'Reported and discussed fluoride ion conductor development',
      category: 'CONFERENCE'
    },
    {
      date: '2025.09.17',
      title: 'Research project selected for JST PRESTO program',
      desc: (
        <span>
          Selected for JST PRESTO!
          <a href="https://www.jst.go.jp/kisoken/presto/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline ml-1">
            Details here
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2025.08.05',
      title: 'Two M1 students from Kanno-Suzuki Lab participate in Solid Ionics Seminar @Miyazaki',
      desc: 'Itakura-san and Kamewaka-san will present on novel solid electrolyte materials exploration. Good luck!',
      category: 'CONFERENCE'
    },
    {
      date: '2025.07.24',
      title: 'Kanno-Suzuki Lab first semester research report seminar completed',
      desc: 'Great work everyone!',
      category: 'SEMINAR',
      hasImage: true
    },
    {
      date: '2025.07.10',
      title: 'High-energy X-ray scattering experiment conducted at SPring-8',
      desc: 'High-energy X-ray scattering experiments were performed at SPring-8. Students also participated. Great work.',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.06.20',
      title: 'Novel fluoride ion conductor paper accepted in Chem. Mater.',
      desc: 'Expected as a new material system showing quite high fluoride ion conductivity with a rare crystal structure. A rare material that incorporates excess fluorine into the structure while changing polyhedral connectivity (vertex↔edge sharing).',
      category: 'RESEARCH'
    },
    {
      date: '2025.06.19',
      title: 'D3 student Kong-san (Science Tokyo, Suzuki Lab) paper accepted in JACS',
      desc: 'Predicted ionic conductivity using coordination polyhedra motifs as features, verified ionic conductivity through molecular dynamics calculations with NN potential, and finally experimentally created a new Li-ion conductor.',
      category: 'RESEARCH'
    },
    {
      date: '2025.06.19',
      title: 'Kanno-Suzuki Lab first semester paper reading seminar completed',
      desc: 'Great work everyone!',
      category: 'SEMINAR'
    },
    {
      date: '2025.05.26',
      title: 'Mariaana and Michkel from Prof. John Irvine\'s lab (St. Andrews) visit Kanno-Suzuki Lab',
      desc: 'Discussed research topics from both sides with lab students.',
      category: 'VISIT'
    },
    {
      date: '2025.05.20',
      title: 'Co-authored paper with Prof. Kim Sangryun (GIST, Korea) accepted in JACS',
      desc: 'Report on new material system incorporating complex ions (BH4-) into perovskite-type hydride ion conductors.',
      category: 'RESEARCH'
    },
    {
      date: '2025.04.01',
      title: 'Joined Transformative Research Area (A) "Ion Traffic Jam Science" as a public offering member',
      desc: 'Will engage in cross-disciplinary collaborative research and materials development!',
      category: 'COLLABORATION'
    },
    {
      date: '2025.04.01',
      title: 'Three new M1 students joined Kanno-Suzuki Lab',
      desc: 'Congratulations.',
      category: 'MEMBER'
    },
    {
      date: '2025.03.11',
      title: 'M2 student Onuki-san\'s paper accepted in Solid State Ionics',
      desc: 'Reported on conductivity optimization and conduction mechanism elucidation focusing on Scheelite structure as a novel fluoride ion conductor.',
      category: 'RESEARCH'
    },
    {
      date: '2025.02.20',
      title: 'Co-authored paper with D3 student Hirose-san (Science Tokyo, Hirayama Lab) published in Dalton Transactions',
      desc: 'Report on composition optimization of perovskite-type hydride ion conductors.',
      category: 'RESEARCH'
    },
    {
      date: '2024.11.10',
      title: 'D2 student Kong-san (Science Tokyo, Suzuki Lab) received Outstanding Poster Award at 14th CSJ Chemistry Festa',
      desc: 'Congratulations!',
      category: 'AWARD'
    },
    {
      date: '2024.07.25',
      title: 'D2 student Hirose-san (Science Tokyo, Hirayama Lab) received Poster Award at Solid State Ionics 2024 @London',
      desc: 'Congratulations on the international award!',
      category: 'AWARD'
    },
    {
      date: '2023.11.20',
      title: 'M1 student Onuki-san received Outstanding Poster Award at 13th CSJ Chemistry Festa',
      desc: 'Excellent achievement!',
      category: 'AWARD'
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
          </motion.div>
        </div>
      </section>

      {/* News Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {allNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== allNews.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {news.date.split('.')[1]}
                  </div>

                  {/* News Content */}
                  <div className="flex-1 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-sm font-mono text-cyan-400">{news.date}</div>
                      <div className={`px-3 py-1 text-xs font-mono rounded border ${
                        news.category === 'RESEARCH' ? 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20' :
                        news.category === 'CONFERENCE' ? 'bg-purple-400/10 text-purple-400 border-purple-400/20' :
                        news.category === 'SEMINAR' ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' :
                        news.category === 'EXPERIMENT' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                        news.category === 'VISIT' ? 'bg-orange-400/10 text-orange-400 border-orange-400/20' :
                        news.category === 'AWARD' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                        news.category === 'COLLABORATION' ? 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20' :
                        news.category === 'MEMBER' ? 'bg-pink-400/10 text-pink-400 border-pink-400/20' :
                        'bg-gray-400/10 text-gray-400 border-gray-400/20'
                      }`}>
                        {news.category}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white leading-tight">
                      {news.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {news.desc}
                    </p>

                    {news.hasImage && (
                      <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                        <p className="text-gray-400 text-sm italic">
                          {locale === 'ja' ? '[Photo] 写真付きニュース' : '[Photo] News with image'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('activitySummary')}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '8', label: t('publications'), color: 'cyan', desc: t('publicationsDesc') },
              { number: '3', label: t('awards'), color: 'yellow', desc: t('awardsDesc') },
              { number: '2', label: t('collaborations'), color: 'purple', desc: t('collaborationsDesc') },
              { number: '15+', label: t('totalNews'), color: 'blue', desc: t('totalNewsDesc') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
              >
                <div className={`text-4xl font-black bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm font-mono text-gray-400 tracking-wider mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
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
