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
      a: "熱意があれば問題ありません。さまざまなバックグラウンドをもつ学生が活躍しています。必要な知識は入学後に習得できるようサポートします。2025年度は定期的に勉強会を開き、固体イオニクスの基礎を学びました。"
    },
    {
      q: "研究テーマの選び方は？",
      a: "複数の候補をこちらで用意し、学生の希望とすり合わせて決めます。興味や適性を考慮しながら、最適なテーマを一緒に見つけていきます。"
    },
    {
      q: "コアタイムは？",
      a: "コアタイムは特に設けていませんが、おおよそ10時〜18時を目安としています。研究の進捗や実験の都合に応じて柔軟に対応しています。"
    },
    {
      q: "機械学習を利用した研究テーマに取り組めますか？",
      a: "機械学習だけのテーマはNGです。もう1〜2本の軸を加えて、オリジナルな研究にします。例：機械学習 × 予測に基づく材料探索、新たなコンセプト（切り口） × 機械学習 × イオン伝導"
    },
    {
      q: "就職活動は？",
      a: "このあたりは、実際に研究室に足を運んでM1・M2の学生に聞いてみてください。企業との共同研究も多く、産業界とのつながりも強いです。"
    },
    {
      q: "博士課程への進学は？",
      a: "意欲のある学生の博士課程進学を積極的に支援します。日本学術振興会特別研究員（DC1/DC2）の申請サポートも行います。"
    }
  ] : [
    {
      q: "What if my background is different?",
      a: "As long as you are motivated, it is no problem. Many students from different backgrounds are thriving here, and we help you pick up the necessary knowledge after you join. In 2025, we held regular study sessions on the fundamentals of solid-state ionics."
    },
    {
      q: "How are research topics chosen?",
      a: "We prepare several candidate topics and decide together with each student, taking their interests and aptitude into account to find the best fit."
    },
    {
      q: "Are there core hours?",
      a: "There are no fixed core hours, but roughly 10:00–18:00 is the guideline. We stay flexible depending on research progress and experimental needs."
    },
    {
      q: "Can I work on machine learning research?",
      a: "Machine learning alone is not enough. We add one or two more axes to make the research original. For example: machine learning × prediction-guided materials exploration, or a new concept (angle) × machine learning × ion conduction."
    },
    {
      q: "What about job hunting?",
      a: "Please visit the lab and ask our M1 and M2 students directly. We have many joint research projects with companies and strong ties with industry."
    },
    {
      q: "What about going on to a doctoral program?",
      a: "We actively support motivated students who want to go on to a doctoral program, including help with JSPS Research Fellowship (DC1/DC2) applications."
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
            <p className="text-xl text-[#cfcfcf] font-light">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. About Lab */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('aboutLab')}
            </h2>
            <div className="space-y-4 text-[#cfcfcf] leading-relaxed">
              <p>
                {locale === 'ja'
                  ? '新入生を募集しています。2026年6月に私が准教授に昇任し、研究室は菅野・鈴木・松井研究室となりました。私を指導教員として選んでいただき、一緒に研究することができます。'
                  : 'We are recruiting new students. I was promoted to Associate Professor in June 2026, and our laboratory is now the Kanno-Suzuki-Matsui Lab. You can choose me as your supervisor and do research with me.'}
              </p>
              <p>
                {locale === 'ja'
                  ? '研究室は全固体電池研究センターの中核として活動しており、教員・研究員・技術支援員・学生を合わせて総勢約109名（2026年時点）の大所帯です。学生はセンター共通の居室や全体報告会・イベントを通じて研究室の枠を越えて交流し、様々な共同研究・国家プロジェクトに携わる機会があります。'
                  : 'The lab operates at the core of the All-Solid-State Battery Research Center — about 109 members in total (as of 2026), including faculty, researchers, technical staff, and students. Students interact beyond lab boundaries through shared offices, center-wide progress meetings, and events, with many opportunities to join collaborative research and national projects.'}
              </p>
              <p>
                {locale === 'ja'
                  ? '学年や立場に関係なく、いつでも気軽に相談できる環境を心がけています。化学系・材料系・生物系（私自身がそうです）など、多様なバックグラウンドのメンバーが垣根なく議論しながら研究に取り組んでいます。'
                  : 'We keep an atmosphere where anyone can ask anyone for advice at any time, regardless of year or position. Members with backgrounds in chemistry, materials science, and biology (my own background) work together and discuss openly across disciplines.'}
              </p>
            </div>
          </motion.div>

          {/* 2. Research Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('labFeatures')}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-3">
                  {locale === 'ja' ? '誰も知らない材料を創る' : 'Creating Materials No One Knows Yet'}
                </h3>
                <div className="space-y-3 text-[#cfcfcf] leading-relaxed">
                  <p>
                    {locale === 'ja'
                      ? '固体化学をベースに、新規な固体電解質・電極の開発と、デバイス性能向上に向けたメカニズム解明に取り組んでいます。研究室での活動を通じて、皆さんには自分で開発した材料を少なくとも1つ、とことん追求してもらいます。世の中の誰もが知らない新しい材料を創成する、わくわくする研究です。'
                      : 'Based on solid-state chemistry, we develop novel solid electrolytes and electrodes and elucidate mechanisms for improving device performance. Through your lab work, you will pursue at least one material of your own creation — exciting research that brings materials no one in the world has seen into existence.'}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-3">
                  {locale === 'ja' ? '自動実験 × AI — コンビナトリアル自動実験ラボ' : 'Automated Experiments × AI — Combinatorial Automated Lab'}
                </h3>
                <div className="space-y-3 text-[#cfcfcf] leading-relaxed">
                  <p>
                    {locale === 'ja'
                      ? '当研究室の大きな強みが、コンビナトリアル自動実験ラボ「CLABAM」です。多元スパッタ成膜により4インチウェハ上に89セルの材料ライブラリを一括作製し、178本のプローブによる自動インピーダンス測定で約200試料をわずか6時間で評価します。粉末合成でも秤量・混合・成型・焼成・計測・データベース化を自動化するロボット実験基盤を構築中で、実験データ約4,500件・文献データ約15,000件・構造データ約5,000件を蓄積し、機械学習やLLMを組み合わせたAI駆動材料開発を展開しています。'
                      : 'A major strength of our lab is CLABAM, our combinatorial automated experiment laboratory. Multi-target sputtering creates a library of 89 cells on a single 4-inch wafer, and automated impedance measurements with 178 probes evaluate about 200 samples in just 6 hours. For powder synthesis, a robotic platform automating weighing, mixing, pressing, firing, measurement, and database registration is under development. With ~4,500 experimental records, ~15,000 literature entries, and ~5,000 structures, we pursue AI-driven materials development combining machine learning and LLMs.'}
                  </p>
                  <p>
                    {locale === 'ja'
                      ? 'こうした最先端の研究基盤を、学生が自分の研究に日常的に使えます。機械学習やニューラルネットワークポテンシャルは標準的な道具として身につけつつ、プラスαのオリジナリティを生み出す着眼点を養います。'
                      : 'Students use this cutting-edge infrastructure in their own daily research — mastering machine learning and neural network potentials as standard tools while cultivating the perspective to create original science beyond them.'}
                  </p>
                  <div className="mt-4 p-4 bg-[#1a1a1a]/70 rounded border border-[#76b900]/20">
                    <div className="mb-2">
                      <Image
                        src="/combinatorial.jpg"
                        alt={locale === 'ja' ? 'コンビナトリアル実験' : 'Combinatorial experiments'}
                        width={600}
                        height={400}
                        className="w-full rounded"
                      />
                    </div>
                    <p className="text-[#9a9a9a] text-sm italic text-center">
                      {locale === 'ja' ? 'コンビナトリアル合成・ハイスループット評価' : 'Combinatorial synthesis and high-throughput evaluation'}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-3">
                  {locale === 'ja' ? '最先端の設備・大型実験施設・計算資源' : 'Advanced Facilities, Beamlines, and Computing'}
                </h3>
                <div className="space-y-3 text-[#cfcfcf] leading-relaxed">
                  <p>
                    {locale === 'ja'
                      ? '研究室は多数の高度な合成・計測設備を備えています。さらに、大型放射光施設SPring-8（兵庫）や中性子実験施設J-PARC（茨城）での出張実験を通して、最先端の計測技術を学生自身が扱います。計算面では、東京科学大学のスーパーコンピュータTSUBAMEやPreferred Networksの計算クラウド環境Matlantisを利用できます。'
                      : 'The lab is equipped with numerous advanced synthesis and measurement facilities. Students themselves handle cutting-edge measurements through beamtime experiments at SPring-8 (synchrotron, Hyogo) and J-PARC (neutron facility, Ibaraki). For computation, the TSUBAME supercomputer at Science Tokyo and the Matlantis cloud environment by Preferred Networks are available.'}
                  </p>
                  <div className="mt-4 p-4 bg-[#1a1a1a]/70 rounded border border-[#76b900]/20">
                    <p className="text-[#76b900] font-semibold mb-3">
                      {locale === 'ja' ? '2026年1月: SPring-8 BL02B2での放射光粉末X線回折実験' : 'January 2026: Synchrotron Powder X-ray Diffraction at SPring-8 BL02B2'}
                    </p>
                    <div className="flex justify-center mb-3">
                      <div className="w-full max-w-md">
                        <Image
                          src="/SPring8_260131.jpg"
                          alt={locale === 'ja' ? 'SPring-8での実験の様子' : 'Experiment at SPring-8'}
                          width={400}
                          height={300}
                          className="w-full rounded"
                        />
                      </div>
                    </div>
                    <p className="text-[#9a9a9a] text-sm italic text-center">
                      {locale === 'ja'
                        ? 'D2・M1の学生が同行し、その場で測定結果について議論しました。出張お疲れ様です!'
                        : 'D2 and M1 students came along and discussed the results on site. Thanks for your hard work on the trip!'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Education Policy = Rapid Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111111] rounded p-8 border border-[#76b900]/40"
          >
            <h2 className="text-3xl font-black mb-2 text-[#ffffff]">
              {t('educationPolicy')}
            </h2>
            <p className="text-[#76b900] font-semibold mb-6">
              {locale === 'ja' ? '— 1年で成果を出す、圧倒的な成長環境' : '— Results in your first year: an environment for rapid growth'}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-3">
                  {locale === 'ja' ? '早期の学会発表・論文投稿' : 'Early Conference Presentations and Publications'}
                </h3>
                <div className="space-y-3 text-[#cfcfcf] leading-relaxed">
                  <p>
                    {locale === 'ja'
                      ? 'テーマ割り当てから1年以内の成果創出を目指し、成果の目処がついたら早期に学会発表・論文投稿に挑戦します。ゼミでのディスカッションで伝わる説明のスキルを磨き、若手の会でのポスター発表、国内学会での口頭発表、そして査読付き論文の執筆・国際学会での発表へとステップアップしていきます。'
                      : 'We aim to produce results within a year of starting a topic, and to present at conferences and submit papers as soon as the results take shape. Students hone clear communication through seminar discussions, then step up from poster sessions at young researcher meetings to oral presentations at domestic conferences, and on to peer-reviewed papers and international conferences.'}
                  </p>
                  <p>
                    {locale === 'ja'
                      ? '実際に、M1・M2の段階で国際誌に筆頭論文を投稿した実績が複数あり、2026年にはM2学生の筆頭論文がSmall Structuresに掲載されました。M1からECS（ハワイ）やSSI（シンガポール）などの国際学会で発表した学生もいます。'
                      : 'In fact, several students have submitted first-author papers to international journals at the M1/M2 stage — in 2026, an M2 student\'s first-author paper was published in Small Structures. Some students have presented at international conferences such as ECS (Hawaii) and SSI (Singapore) from their first year.'}
                  </p>
                  <div className="mt-4 p-4 bg-[#1a1a1a]/70 rounded border border-[#76b900]/20">
                    <p className="text-[#76b900] font-semibold mb-3">
                      {locale === 'ja' ? '学会参加の様子（M1）' : 'At a conference (M1)'}
                    </p>
                    <div className="flex gap-4 justify-center">
                      <div className="w-40">
                        <Image
                          src="/student_conference1.jpg"
                          alt={locale === 'ja' ? '学会参加の様子1' : 'Conference scene 1'}
                          width={160}
                          height={120}
                          className="w-full rounded"
                        />
                      </div>
                      <div className="w-40">
                        <Image
                          src="/student_conference2.jpg"
                          alt={locale === 'ja' ? '学会参加の様子2' : 'Conference scene 2'}
                          width={160}
                          height={120}
                          className="w-full rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-3">
                  {locale === 'ja' ? 'ゼミと研究支援' : 'Seminars and Research Support'}
                </h3>
                <div className="space-y-3 text-[#cfcfcf] leading-relaxed">
                  <p>
                    {locale === 'ja'
                      ? 'ゼミでは年6回の発表機会（輪読ゼミ2回＋研究進捗報告4回）に加えて定期的なミーティングがあり、発表・議論のスキルを集中的に鍛えます。共同研究や国家プロジェクトに参画する機会も多く、リサーチアシスタントとして給与が支給される場合もあります。'
                      : 'Seminars provide six presentation opportunities per year (two paper-reading and four progress reports) plus regular meetings, intensively training presentation and discussion skills. There are also many opportunities to join collaborative research and national projects, in some cases with paid research assistant positions.'}
                  </p>
                  <div className="mt-4 p-4 bg-[#1a1a1a]/70 rounded border border-[#e0c060]/20">
                    <div className="mb-2">
                      <Image
                        src="/seminar.jpg"
                        alt={locale === 'ja' ? 'ゼミの様子' : 'Seminar scene'}
                        width={600}
                        height={400}
                        className="w-full rounded"
                      />
                    </div>
                    <p className="text-[#9a9a9a] text-sm italic text-center">
                      {locale === 'ja' ? 'ゼミの様子（2025年7月）' : 'Seminar (July 2025)'}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-3">
                  {locale === 'ja' ? '分野が違っても大丈夫 — 学習サポート' : 'Different Background? No Problem — Learning Support'}
                </h3>
                <div className="space-y-3 text-[#cfcfcf] leading-relaxed">
                  <p>
                    {locale === 'ja'
                      ? '私自身、生物系出身から固体化学の世界に飛び込みました。だからこそ、異分野出身の学生が基礎から着実にキャッチアップできる体制を大事にしています。「固体化学の基礎」「イオン伝導体の基礎」「シミュレーション応用」「研究の進め方」などをテーマにした勉強会を自主開催しており、夜ご飯を食べながらの気軽なディスカッション形式で開くこともあります。少しでも無機材料・固体化学・電池に興味があれば、遠慮なく飛び込んできてください。'
                      : 'I myself jumped into solid-state chemistry from a biology background — which is exactly why we value a system where students from different fields can catch up steadily from the basics. We hold self-organized study sessions on fundamentals of solid-state chemistry, ion conductors, applied simulation, and how to conduct research, sometimes as casual discussions over dinner. If you have any interest in inorganic materials, solid-state chemistry, or batteries, do not hesitate to jump in.'}
                  </p>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded p-4 border border-[#76b900]/20">
                <h4 className="font-bold text-[#76b900] mb-2">
                  {locale === 'ja' ? '在学中に習得できる技術の例：' : 'Examples of skills you can acquire:'}
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• {locale === 'ja' ? '合成・分析：固相合成 / XRD / SEM / 電気化学測定' : 'Synthesis & analysis: solid-state synthesis / XRD / SEM / electrochemical measurements'}</li>
                  <li>• {locale === 'ja' ? '計算・AI：第一原理計算 / 機械学習ポテンシャル / 機械学習・データ解析' : 'Computation & AI: first-principles calculations / ML potentials / machine learning & data analysis'}</li>
                  <li>• {locale === 'ja' ? '自動化：自動実験制御・ハイスループット評価' : 'Automation: automated experiment control & high-throughput evaluation'}</li>
                  <li>• {locale === 'ja' ? '大型施設：放射光X線回折（SPring-8）/ 中性子回折（J-PARC）の出張実験' : 'Large facilities: synchrotron XRD (SPring-8) / neutron diffraction (J-PARC) beamtime experiments'}</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 4. Careers & Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {locale === 'ja' ? '卒業後の進路・研究室イベント' : 'Career Paths & Lab Events'}
            </h2>
            <div className="space-y-6 text-[#cfcfcf] leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-3">
                  {locale === 'ja' ? '卒業後の進路' : 'Career paths after graduation'}
                </h3>
                <p>
                  {locale === 'ja'
                    ? '直近で松井が指導に関与した卒業生は、自動車メーカー・電池材料メーカー・電機メーカー・鉄鋼メーカー・半導体メーカーなど、エネルギー・材料分野の第一線に進んでいます。博士課程への進学者もおり、経済的な支援制度があります。'
                    : 'Recent graduates supervised by Matsui have joined leading companies in automobiles, battery materials, electronics, steel, and semiconductors. Some have advanced to doctoral programs, for which financial support is available.'}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#76b900] mb-3">
                  {locale === 'ja' ? '研究室イベント' : 'Lab events'}
                </h3>
                <p>
                  {locale === 'ja'
                    ? '年1回のゼミ旅行（2026年は八丈島）のほか、高尾山〜相模湖ハイキングやBBQ、不定期の飲み会など、研究以外の交流も活発です。オンとオフを切り替えながら、気持ちよく研究に打ち込める雰囲気を大事にしています。'
                    : 'Besides the annual lab retreat (Hachijojima in 2026), we enjoy hiking from Mt. Takao to Lake Sagami, BBQs, and casual get-togethers. We value an atmosphere where you can switch between focused research and refreshing downtime.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {locale === 'ja' ? 'フォトギャラリー — 研究室の日常' : 'Photo Gallery — Lab Life'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: '/welcome_party.jpg', ja: '新入生歓迎会', en: 'Welcome party for new members' },
                { src: '/lab_bbq.jpg', ja: '研究室BBQ（2026年6月）', en: 'Lab BBQ (June 2026)' },
                { src: '/labtrip_fishing.jpg', ja: 'ゼミ旅行で釣り（八丈島、2026年6月）', en: 'Fishing on the lab retreat (Hachijojima, June 2026)' },
                { src: '/promotion_party.jpg', ja: '昇任のお祝い会 — 学生の皆さんが開いてくれました', en: 'Promotion party, organized by the students' },
                { src: '/suzuki_birthday.jpg', ja: '鈴木先生のお誕生日会', en: 'Birthday celebration for Prof. Suzuki' },
                { src: '/celebration_pizza.jpg', ja: '2025年度卒業生の送別会', en: 'Farewell party for our 2025 graduates' },
                { src: '/campus_sakura.jpg', ja: '春のキャンパス — 桜（2026年3月）', en: 'Cherry blossoms on campus (March 2026)' },
                { src: '/spring8_deer.jpg', ja: 'SPring-8出張にて — 鹿に遭遇', en: 'A deer encounter during a SPring-8 beamtime trip' }
              ].map((photo, index) => (
                <div key={index} className="bg-[#1a1a1a]/70 rounded overflow-hidden border border-[#262626]">
                  <Image
                    src={photo.src}
                    alt={locale === 'ja' ? photo.ja : photo.en}
                    width={400}
                    height={300}
                    className="w-full h-44 sm:h-52 object-cover"
                  />
                  <p className="text-[#9a9a9a] text-xs sm:text-sm px-3 py-2">
                    {locale === 'ja' ? photo.ja : photo.en}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Lab Visit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('labVisit')}
            </h2>
            <div className="space-y-4 text-[#cfcfcf]">
              <p>
                {locale === 'ja'
                  ? '研究室見学はいつでも歓迎します。ご希望の場合は、事前にメールで候補日をご連絡ください。遠方の方や来訪が難しい方は、Zoomなどでのオンライン面談も可能です。お気軽にご相談ください。'
                  : 'Lab visits are always welcome — please email us in advance with a few possible dates. If you live far away or cannot easily visit, we can also meet online via Zoom or similar. Feel free to get in touch.'}
              </p>
              <div className="bg-[#1a1a1a] rounded p-4 border border-[#76b900]/20">
                <h4 className="font-bold text-[#76b900] mb-3">{t('visitFlow')}</h4>
                <ul className="text-sm space-y-1">
                  <li>• {locale === 'ja' ? '研究室のM1・M2学生との面談（30分）' : 'Talk with M1 and M2 students (30 min)'}</li>
                  <li>• {locale === 'ja' ? 'ラボツアー（実験設備の見学）（30分）' : 'Lab tour of our facilities (30 min)'}</li>
                  <li>• {locale === 'ja' ? '教員とのディスカッション（30分）' : 'Discussion with faculty (30 min)'}</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 6. Q&A */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('qAndA')}
            </h2>
            <div className="space-y-6">
              {qaData.map((qa, index) => (
                <div key={index} className="border border-[#3a3a3a] rounded p-4">
                  <h4 className="font-bold text-[#e0c060] mb-2">Q: {qa.q}</h4>
                  <p className="text-[#cfcfcf] text-sm">A: {qa.a}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 7. Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#111111] rounded p-8 border border-[#262626]"
          >
            <h2 className="text-3xl font-black mb-6 text-[#ffffff]">
              {t('message')}
            </h2>
            <div className="space-y-4 text-[#cfcfcf] leading-relaxed">
              <p>
                {locale === 'ja'
                  ? '新しい材料の発見は、社会を大きく変える可能性を秘めています。特に、エネルギー問題の解決に向けた蓄電デバイスの開発は、人類の持続可能な発展に不可欠です。'
                  : 'Discovering new materials can change society profoundly. In particular, developing energy storage devices that help solve energy problems is essential for the sustainable development of humanity.'}
              </p>
              <p>
                {locale === 'ja'
                  ? '私たちと一緒に、材料科学の最前線で研究に取り組んでみませんか？熱意ある学生の参加をお待ちしています。'
                  : 'Would you like to join us at the forefront of materials science? We look forward to hearing from motivated students.'}
              </p>
              <div className="bg-[#1a1a1a] rounded p-4 border border-[#76b900]/20">
                <p className="text-[#76b900] font-semibold">
                  {locale === 'ja' ? '連絡先は' : 'For contact details, see the '}
                  <Link href="/access" className="hover:text-[#8fd400] underline">
                    {locale === 'ja' ? 'アクセスページ' : 'Access page'}
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
        <Link href="/" className="bg-[#ffffff] text-[#050505] px-4 py-2 rounded shadow-lg transition-all duration-300">
          {tCommon('backToHome')}
        </Link>
      </div>
    </div>
  )
}
