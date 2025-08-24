'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'

export default function ProspectiveStudentsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SimpleNavigation />

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
                研究室希望の学生へ
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">菅野・鈴木研究室での研究生活と募集要項</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* About Lab */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              菅野・鈴木研究室について
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                菅野・鈴木研では新入生を募集しています。私自身は助教の立場ですので、指導教員になることは当然できませんが、東京科学大学 物質理工学院 応用化学系 菅野・鈴木研の鈴木耕太准教授を指導教員として選んでいただくことで菅野鈴木研として一緒に研究活動を行えます。
              </p>
              <p>
                基本的には横・上下の隔たりなく、常に気軽に相談できる環境を心がけています。日々の研究活動において、教員・学生間の垣根を低くし、自由闊達な議論ができる研究室を目指しています。
              </p>
            </div>
          </motion.div>

          {/* Research Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              研究室の特色
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">菅野・鈴木研としての特色</h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    固体化学をベースに新規な固体電解質・電極の開発と、デバイス性能向上に向けたメカニズム解明に取り組んでいます。特に固体電解質の開発に注力して、より優れた特性を有する新材料の開発に取り組んでいます。
                  </p>
                  <p>
                    新たな固体電解質の開発は、時に一筋縄ではいかない難しい挑戦です。最先端の機械学習やシミュレーション、多様な合成技術を駆使して、効果的な材料探索を展開します。研究室での活動を通じて、皆さんに自身が開発した材料を最低1個、追求してもらいます。世の中の誰もが知らない新しい材料を創成する、わくわくする研究です。
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">研究センターとしての側面</h3>
                <p className="text-gray-300">
                  同時に全固体電池研究センターとしての側面もあります。全固体電池研究センターには多数の教員・職員が在籍しており、日々研究に専念しています。その観点で、菅野・鈴木研では様々な共同研究・国プロジェクトに携わる機会があると思います。これらの経験を通じて、多角的な視野・ネットワークを養うことを期待します。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-3">多様性のある研究環境</h3>
                <p className="text-gray-300 mb-3">様々なバックグラウンドの方々が一同に集まって日々研究に取り組んでいます：</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>化学系出身者</li>
                  <li>材料系出身者</li>
                  <li>生物系出身者（私がまさにそう）</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              教育方針
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">学会発表・論文投稿</h3>
                <p className="text-gray-300 mb-4">早くに学会発表、場合によっては国際誌に論文を投稿ができるよう丁寧に指導します。</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>ゼミでのディスカッション：他者に解りやすく説明するスキルを身につけてもらいます</li>
                  <li>若手の会などでポスター発表</li>
                  <li>国内学会での口頭発表にチャレンジ</li>
                  <li>査読付き論文の執筆・投稿、国際学会での発表</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-orange-400/20">
                  <p className="text-gray-400 text-sm italic">📷 seminar ゼミの様子 (2025/7)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">最先端技術の活用</h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    研究室は多数の高度な合成・計測設備を備えています。さらに、大型放射光施設SPring-8や中性子実験施設J-PARCでの出張実験で最先端計測技術を扱います。
                  </p>
                  <p>
                    機械学習やニューラルネットワークポテンシャルなど最近ではコモディティ化した手法は素養としつつ、プラスαのオリジナリティを生み出すための着眼点を養います。
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-400/20">
                    <h4 className="font-bold text-cyan-400 mb-2">利用可能な計算資源：</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 東京科学大学のTSUBAMEスーパーコンピュータ</li>
                      <li>• Preferred Networks の計算クラウド環境 Matlantis</li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    最先端の手法を常にキャッチアップして（インフォ分野は追いつくのに精一杯ですが・・・）、効率的に材料を開発する手法を模索しています。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lab Visit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              研究室見学について
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                研究室見学はいつでも歓迎します。ご希望の場合は、事前にメールで日程候補をご連絡ください。
              </p>
              <p>
                遠方の方や、訪問が困難な場合は、Zoom等でのオンライン面談も可能です。お気軽にご相談ください。
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-green-400/20">
                <h4 className="font-bold text-green-400 mb-3">見学の流れ（約1.5時間）：</h4>
                <ul className="text-sm space-y-1">
                  <li>• 研究室のM1-2学生との面談（30分）</li>
                  <li>• ラボツアー（実験設備の見学）（30分）</li>
                  <li>• 教員とのディスカッション（30分）</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Q&A */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              よくあるQ&A
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "分野が違うが、問題ない？",
                  a: "熱意があれば問題ないです。異なるバックグラウンドの学生が多く活躍しています。必要な知識は入学後に習得できるようサポートします。2025年度は定期勉強会を開催して、固体イオニクスの基礎知識の習得を図りました。"
                },
                {
                  q: "研究テーマの選び方は？",
                  a: "複数の候補をこちらで準備して、学生の希望とすりあわせて決定します。学生の興味・適性を考慮して、最適なテーマを一緒に見つけていきます。"
                },
                {
                  q: "コアタイムは？",
                  a: "コアタイムは特段設けていませんが、おおよそ10時-18時を目安としています。研究の進捗や実験の都合に応じて、フレキシブルに対応しています。"
                },
                {
                  q: "機械学習を利用した研究テーマに取り組むことは可能か？",
                  a: "機械学習だけではNGです。もう一つ二つ軸を加えてオリジナルな研究を行います。例えば：機械学習 × 予測に基づく材料探索、新たなコンセプト(切り口) × 機械学習 × イオン伝導"
                },
                {
                  q: "就職活動は？",
                  a: "このあたりは実際に研究室に足を運んでM1,2学生に聞いてみてください。企業との共同研究も多く、産業界とのつながりも強いです。"
                },
                {
                  q: "博士課程への進学は？",
                  a: "意欲のある学生の博士課程進学を積極的に支援します。日本学術振興会特別研究員（DC1/DC2）の申請サポートも行います。"
                }
              ].map((qa, index) => (
                <div key={index} className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-400 mb-2">Q: {qa.q}</h4>
                  <p className="text-gray-300 text-sm">A: {qa.a}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              メッセージ
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                新しい材料の発見は、社会を大きく変える可能性を秘めています。特に、エネルギー問題の解決に向けた蓄電デバイスの開発は、人類の持続可能な発展に不可欠です。
              </p>
              <p>
                私たちと一緒に、材料科学の最前線で研究に取り組んでみませんか？熱意ある学生の参加をお待ちしています。
              </p>
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-4 border border-pink-400/20">
                <p className="text-pink-400 font-semibold">連絡先: <Link href="/access" className="hover:text-pink-300 underline">Contactページ</Link>をご覧ください。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}