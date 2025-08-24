'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NewsPage() {
  const allNews = [
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
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/layout-options/tech" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MATSUI LAB
              </Link>
              <div className="hidden md:flex space-x-6 text-sm">
                <Link href="/layout-options/tech#home" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  ホーム
                </Link>
                <Link href="/layout-options/tech#research" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究概要
                </Link>
                <Link href="/layout-options/tech#profile" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  プロフィール
                </Link>
                <Link href="/layout-options/tech#news" className="text-cyan-400 px-3 py-1 rounded border border-cyan-400/30">
                  ニュース
                </Link>
                <Link href="/research-details" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究業績
                </Link>
                <Link href="/research-details" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  研究詳細
                </Link>
                <Link href="/learning" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  学習
                </Link>
                <Link href="/access" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  アクセス
                </Link>
                <Link href="/links" className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-1 rounded border border-transparent hover:border-cyan-400/30">
                  リンク
                </Link>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-mono">v2025.1</div>
          </div>
        </div>
      </nav>

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
                ALL NEWS
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">研究室の最新情報とこれまでの活動記録</p>
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
                        <p className="text-gray-400 text-sm italic">📷 写真付きニュース</p>
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
                ACTIVITY SUMMARY
              </span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '8', label: 'PUBLICATIONS', color: 'cyan', desc: '論文発表' },
              { number: '3', label: 'AWARDS', color: 'yellow', desc: '受賞実績' },
              { number: '2', label: 'COLLABORATIONS', color: 'purple', desc: '国際共同研究' },
              { number: '15+', label: 'TOTAL NEWS', color: 'blue', desc: '総ニュース数' }
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
        <Link href="/layout-options/tech" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}