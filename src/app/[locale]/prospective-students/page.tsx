'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'

export default function ProspectiveStudentsPage() {
  const t = useTranslations('prospectiveStudents')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  const qaData = locale === 'ja' ? [
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
  ] : [
    {
      q: "What if my background is different?",
      a: "As long as you have enthusiasm, it's no problem. Many students from different backgrounds are thriving. We support you in acquiring necessary knowledge after enrollment. In 2025, we held regular study sessions to help students acquire fundamental knowledge in solid ionics."
    },
    {
      q: "How are research themes selected?",
      a: "We prepare multiple candidates and align them with students' preferences. We consider students' interests and aptitude to find the optimal theme together."
    },
    {
      q: "Is there core time?",
      a: "We don't have strict core time, but roughly 10:00-18:00 is a guideline. We respond flexibly according to research progress and experimental needs."
    },
    {
      q: "Can I work on machine learning research?",
      a: "Machine learning alone is not enough. We add one or two more axes for original research. For example: Machine learning × materials exploration based on predictions, New concept × Machine learning × Ion conduction"
    },
    {
      q: "What about job hunting?",
      a: "Please visit the lab and ask M1-2 students directly about this. We have many joint research projects with companies and strong connections with industry."
    },
    {
      q: "What about doctoral program?",
      a: "We actively support motivated students' advancement to doctoral programs. We also support JSPS Research Fellowship (DC1/DC2) applications."
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
              {t('aboutLab')}
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                {locale === 'ja'
                  ? '菅野・鈴木研では新入生を募集しています。私自身は助教の立場ですので、指導教員になることは当然できませんが、東京科学大学 物質理工学院 応用化学系 菅野・鈴木研の鈴木耕太准教授を指導教員として選んでいただくことで菅野鈴木研として一緒に研究活動を行えます。'
                  : 'Kanno-Suzuki Lab is recruiting new students. As an assistant professor, I cannot be a main supervisor, but by selecting Associate Professor Kota Suzuki as your supervisor at the Department of Chemical Science and Engineering, Institute of Science Tokyo, you can conduct research activities together in Kanno-Suzuki Lab.'}
              </p>
              <p>
                {locale === 'ja'
                  ? '基本的には横・上下の隔たりなく、常に気軽に相談できる環境を心がけています。日々の研究活動において、教員・学生間の垣根を低くし、自由闊達な議論ができる研究室を目指しています。'
                  : 'We maintain an environment where you can freely consult with anyone regardless of position. In daily research activities, we aim for a laboratory where barriers between faculty and students are low, enabling free and open discussions.'}
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
              {t('labFeatures')}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">{t('labFeaturesTitle')}</h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    {locale === 'ja'
                      ? '固体化学をベースに新規な固体電解質・電極の開発と、デバイス性能向上に向けたメカニズム解明に取り組んでいます。特に固体電解質の開発に注力して、より優れた特性を有する新材料の開発に取り組んでいます。'
                      : 'Based on solid-state chemistry, we work on developing novel solid electrolytes and electrodes, and elucidating mechanisms for device performance improvement. We particularly focus on developing solid electrolytes and creating new materials with superior properties.'}
                  </p>
                  <p>
                    {locale === 'ja'
                      ? '新たな固体電解質の開発は、時に一筋縄ではいかない難しい挑戦です。最先端の機械学習やシミュレーション、多様な合成技術を駆使して、効果的な材料探索を展開します。研究室での活動を通じて、皆さんに自身が開発した材料を最低1個、追求してもらいます。世の中の誰もが知らない新しい材料を創成する、わくわくする研究です。'
                      : 'Developing new solid electrolytes is sometimes a challenging task that doesn\'t go smoothly. We deploy effective materials exploration using cutting-edge machine learning, simulation, and diverse synthesis techniques. Through laboratory activities, we expect each student to pursue at least one material they developed themselves. It\'s exciting research creating new materials that no one in the world knows about.'}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">{t('researchCenter')}</h3>
                <p className="text-gray-300">
                  {locale === 'ja'
                    ? '同時に全固体電池研究センターとしての側面もあります。全固体電池研究センターには多数の教員・職員が在籍しており、日々研究に専念しています。その観点で、菅野・鈴木研では様々な共同研究・国プロジェクトに携わる機会があると思います。これらの経験を通じて、多角的な視野・ネットワークを養うことを期待します。'
                    : 'There is also an aspect as the All-Solid-State Battery Research Center. The Research Center has many faculty members and staff dedicated to daily research. From this perspective, there are opportunities to engage in various collaborative research and national projects in Kanno-Suzuki Lab. We expect you to develop a multifaceted perspective and network through these experiences.'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-3">{t('diversity')}</h3>
                <p className="text-gray-300 mb-3">
                  {locale === 'ja'
                    ? '様々なバックグラウンドの方々が一同に集まって日々研究に取り組んでいます：'
                    : 'People from various backgrounds gather together to conduct daily research:'}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>{locale === 'ja' ? '化学系出身者' : 'Chemistry background'}</li>
                  <li>{locale === 'ja' ? '材料系出身者' : 'Materials science background'}</li>
                  <li>{locale === 'ja' ? '生物系出身者（私がまさにそう）' : 'Biology background (like myself)'}</li>
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
              {t('educationPolicy')}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">{t('presentations')}</h3>
                <p className="text-gray-300 mb-4">
                  {locale === 'ja'
                    ? '早くに学会発表、場合によっては国際誌に論文を投稿ができるよう丁寧に指導します。'
                    : 'We carefully guide you to make conference presentations early, and in some cases, submit papers to international journals.'}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>
                    {locale === 'ja'
                      ? 'ゼミでのディスカッション：他者に解りやすく説明するスキルを身につけてもらいます'
                      : 'Seminar discussions: Develop skills to explain clearly to others'}
                  </li>
                  <li>
                    {locale === 'ja'
                      ? '若手の会などでポスター発表'
                      : 'Poster presentations at young researcher meetings'}
                  </li>
                  <li>
                    {locale === 'ja'
                      ? '国内学会での口頭発表にチャレンジ'
                      : 'Challenge oral presentations at domestic conferences'}
                  </li>
                  <li>
                    {locale === 'ja'
                      ? '査読付き論文の執筆・投稿、国際学会での発表'
                      : 'Write and submit peer-reviewed papers, present at international conferences'}
                  </li>
                </ul>

                <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-cyan-400/20">
                  <p className="text-cyan-400 font-semibold mb-3">
                    {locale === 'ja' ? '学会参加の様子 (M1)' : 'Conference Participation (M1)'}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <div className="w-40">
                      <Image
                        src="/student_conference1.jpg"
                        alt={locale === 'ja' ? '学会参加の様子1' : 'Conference scene 1'}
                        width={160}
                        height={120}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="w-40">
                      <Image
                        src="/student_conference2.jpg"
                        alt={locale === 'ja' ? '学会参加の様子2' : 'Conference scene 2'}
                        width={160}
                        height={120}
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-orange-400/20">
                  <div className="mb-2">
                    <Image
                      src="/seminar.jpg"
                      alt={locale === 'ja' ? 'ゼミの様子' : 'Seminar scene'}
                      width={600}
                      height={400}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <p className="text-gray-400 text-sm italic text-center">
                    {locale === 'ja' ? 'ゼミの様子 (2025/7)' : 'Seminar (2025/7)'}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{t('advancedTech')}</h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    {locale === 'ja'
                      ? '研究室は多数の高度な合成・計測設備を備えています。さらに、大型放射光施設SPring-8や中性子実験施設J-PARCでの出張実験で最先端計測技術を扱います。'
                      : 'The laboratory is equipped with numerous advanced synthesis and measurement facilities. Furthermore, we handle cutting-edge measurement technologies through experiments at large synchrotron facilities like SPring-8 and neutron facilities like J-PARC.'}
                  </p>
                  <p>
                    {locale === 'ja'
                      ? '機械学習やニューラルネットワークポテンシャルなど最近ではコモディティ化した手法は素養としつつ、プラスαのオリジナリティを生み出すための着眼点を養います。'
                      : 'While learning recently commoditized methods like machine learning and neural network potentials as basic knowledge, we cultivate perspectives to create plus-alpha originality.'}
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-400/20">
                    <h4 className="font-bold text-cyan-400 mb-2">
                      {locale === 'ja' ? '利用可能な計算資源：' : 'Available Computing Resources:'}
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• {locale === 'ja' ? '東京科学大学のTSUBAMEスーパーコンピュータ' : 'TSUBAME Supercomputer at Institute of Science Tokyo'}</li>
                      <li>• {locale === 'ja' ? 'Preferred Networks の計算クラウド環境 Matlantis' : 'Preferred Networks computing cloud environment Matlantis'}</li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    {locale === 'ja'
                      ? '最先端の手法を常にキャッチアップして（インフォ分野は追いつくのに精一杯ですが・・・）、効率的に材料を開発する手法を模索しています。'
                      : 'We constantly catch up with cutting-edge methods (although it\'s hard to keep up with the informatics field...) and explore ways to develop materials efficiently.'}
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
              {t('labVisit')}
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                {locale === 'ja'
                  ? '研究室見学はいつでも歓迎します。ご希望の場合は、事前にメールで日程候補をご連絡ください。'
                  : 'Lab visits are always welcome. If you wish to visit, please contact us by email in advance with candidate dates.'}
              </p>
              <p>
                {locale === 'ja'
                  ? '遠方の方や、訪問が困難な場合は、Zoom等でのオンライン面談も可能です。お気軽にご相談ください。'
                  : 'For those from afar or if visiting is difficult, online meetings via Zoom are also possible. Please feel free to contact us.'}
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-green-400/20">
                <h4 className="font-bold text-green-400 mb-3">{t('visitFlow')}</h4>
                <ul className="text-sm space-y-1">
                  <li>• {locale === 'ja' ? '研究室のM1-2学生との面談（30分）' : 'Meeting with M1-2 students (30 min)'}</li>
                  <li>• {locale === 'ja' ? 'ラボツアー（実験設備の見学）（30分）' : 'Lab tour (facility visit) (30 min)'}</li>
                  <li>• {locale === 'ja' ? '教員とのディスカッション（30分）' : 'Discussion with faculty (30 min)'}</li>
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
              {t('qAndA')}
            </h2>
            <div className="space-y-6">
              {qaData.map((qa, index) => (
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
              {t('message')}
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                {locale === 'ja'
                  ? '新しい材料の発見は、社会を大きく変える可能性を秘めています。特に、エネルギー問題の解決に向けた蓄電デバイスの開発は、人類の持続可能な発展に不可欠です。'
                  : 'The discovery of new materials has the potential to significantly change society. In particular, the development of energy storage devices for solving energy problems is essential for sustainable human development.'}
              </p>
              <p>
                {locale === 'ja'
                  ? '私たちと一緒に、材料科学の最前線で研究に取り組んでみませんか？熱意ある学生の参加をお待ちしています。'
                  : 'Would you like to work with us on research at the forefront of materials science? We look forward to the participation of enthusiastic students.'}
              </p>
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-4 border border-pink-400/20">
                <p className="text-pink-400 font-semibold">
                  {locale === 'ja' ? '連絡先: ' : 'Contact: '}
                  <Link href="/access" className="hover:text-pink-300 underline">
                    {locale === 'ja' ? 'Contactページ' : 'Contact page'}
                  </Link>
                  {locale === 'ja' ? 'をご覧ください。' : '.'}
                </p>
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
