'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'
import { lazy, Suspense } from 'react'

const CrystalBackground = lazy(() => import('@/components/CrystalBackground'))

export default function Home() {
  const t = useTranslations('home')
  const locale = useLocale()
  const ja = locale === 'ja'

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "name": ja ? "松井直喜" : "Naoki Matsui",
    "alternateName": "Matsui Laboratory",
    "url": "https://matsui-naoki.github.io",
    "description": ja
      ? "東京科学大学の電池研究室(菅野・鈴木・松井研)。松井直喜准教授。全固体電池、フッ化物イオン伝導体、ヒドリドイオン伝導体など次世代電池の研究開発"
      : "Battery research laboratory at Institute of Science Tokyo led by Dr. Naoki Matsui. Research on all-solid-state batteries, fluoride-ion conductors, and hydride-ion conductors",
    "member": {
      "@type": "Person",
      "name": ja ? "松井直喜" : "Naoki Matsui",
      "jobTitle": ja ? "准教授" : "Associate Professor",
      "sameAs": [
        "https://www.linkedin.com/in/naoki-matsui-ssi",
        "https://github.com/matsui-naoki",
        "https://x.com/naoki_matsui_ex"
      ],
      "affiliation": {
        "@type": "EducationalOrganization",
        "name": ja ? "東京科学大学" : "Institute of Science Tokyo",
        "alternateName": "Institute of Science Tokyo"
      }
    },
    "researchAreas": ja
      ? ["全固体電池", "リチウムイオン電池", "フッ化物イオン伝導体", "フッ化物電池", "ヒドリドイオン伝導体", "固体イオニクス", "材料インフォマティクス"]
      : ["All-solid-state batteries", "Lithium-ion batteries", "Fluoride ion conductors", "Fluoride batteries", "Hydride ion conductors", "Solid ionics", "Materials informatics"]
  }

  // From idea to picture: the actual order of work in the lab
  const process = ja ? [
    {
      verb: '設計',
      text: '機械学習やグラフニューラルネットワークポテンシャルを使い、多数の候補物質からイオン伝導度の高そうな組成・構造を選びます。',
      image: '/virtual-space.jpg',
      caption: '計算で絞り込んだ候補物質のイメージ（Blender）'
    },
    {
      verb: '合成',
      text: '固相反応やメカノケミカル法で試料を合成します。ハイスループット合成では一度に数十試料を作製・評価します。',
      image: '/combinatorial.jpg',
      caption: 'ハイスループット合成のるつぼ（Blender）'
    },
    {
      verb: '構造解析',
      text: 'SPring-8 や J-PARC で放射光X線・中性子回折を測定し、Rietveld 解析などで結晶構造とイオンの伝導経路を決定します。学生も実験に参加します。',
      image: '/SPring8_260131.jpg',
      caption: 'SPring-8 BL02B2 での測定（2026年1月）'
    },
    {
      verb: '可視化',
      text: '解析した結晶構造、ポテンシャル分布、イオンの軌跡を Blender で図にします。Python スクリプトでデータから直接シーンを作るため、論文の図や表紙にも使っています。',
      image: '/BCNH.jpg',
      caption: '結晶の中を移動するイオンの軌跡（Blender）'
    }
  ] : [
    {
      verb: 'Design',
      text: 'Machine learning and graph-neural-network potentials are used to select compositions and structures likely to show high ionic conductivity.',
      image: '/virtual-space.jpg',
      caption: 'Candidate materials screened by computation (Blender)'
    },
    {
      verb: 'Synthesis',
      text: 'Samples are made by solid-state reaction or mechanochemical synthesis. High-throughput synthesis prepares and evaluates dozens of samples at once.',
      image: '/combinatorial.jpg',
      caption: 'Crucibles for high-throughput synthesis (Blender)'
    },
    {
      verb: 'Structure analysis',
      text: 'Synchrotron X-ray and neutron diffraction at SPring-8 and J-PARC, followed by Rietveld analysis, determine the crystal structure and the ion-conduction pathways. Students take part in the experiments.',
      image: '/SPring8_260131.jpg',
      caption: 'Measurement at SPring-8 BL02B2 (January 2026)'
    },
    {
      verb: 'Visualization',
      text: 'Crystal structures, potential maps and ion trajectories are rendered in Blender. Scenes are built from the data with Python scripts and are used for paper figures and journal covers.',
      image: '/BCNH.jpg',
      caption: 'Trajectory of an ion moving through the crystal (Blender)'
    }
  ]

  // Research grouped by the ion that carries the charge
  const ions = [
    { symbol: 'Li', charge: '+', color: '#8fa3ff', titleKey: 'lithiumIonConductor', descKey: 'lithiumIonConductorDesc', image: '/Li1.jpg' },
    { symbol: 'F', charge: '−', color: '#a6d982', titleKey: 'fluorideIonConductor', descKey: 'fluorideIonConductorDesc', image: '/F1.jpg' },
    { symbol: 'H', charge: '−', color: '#e8ecf4', titleKey: 'hydrideIonConductor', descKey: 'hydrideIonConductorDesc', image: '/H1.jpg' }
  ]

  const methods = [
    { titleKey: 'anionIntercalation', descKey: 'anionIntercalationDesc' },
    { titleKey: 'machineLearning', descKey: 'machineLearningDesc' },
    { titleKey: 'highThroughput', descKey: 'highThroughputDesc' }
  ]

  // News data with translations
  const newsData = ja ? [
    { date: '2026.11.14-16', title: 'さきがけ「ゆらぎの理解と制御による材料革新」領域会議@東京に参加', desc: '' },
    { date: '2026.11.10', title: 'NIMS Awardsに参加', desc: '' },
    { date: '2026.11.06-08', title: 'Battery Forum@ソウル国立大学に参加', desc: '' },
    { date: '2026.11.06', title: 'M2板倉さんの筆頭論文がElectrochemistryに掲載', desc: 'In置換β-PbSnF4の室温フッ化物イオン伝導。Editor\'s Choiceに選ばれました。おめでとう!!' },
    { date: '2026.11.02-04', title: 'イオン渋滞学 領域会議@福岡に参加', desc: '' },
    { date: '2026.10.28-30', title: 'SPring-8で回折実験を実施', desc: '' }
  ] : [
    { date: '2026.11.14-16', title: 'JST PRESTO "Materials Innovation through Understanding and Control of Fluctuations" Area Meeting @ Tokyo', desc: '' },
    { date: '2026.11.10', title: 'Attended NIMS Awards', desc: '' },
    { date: '2026.11.06-08', title: 'Battery Forum @ Seoul National University', desc: '' },
    { date: '2026.11.06', title: 'M2 Student Itakura\'s First-Author Paper Published in Electrochemistry', desc: 'Room-temperature fluoride-ion conduction in In-substituted β-PbSnF4. Selected as Editor\'s Choice. Congratulations!!' },
    { date: '2026.11.02-04', title: 'Ion Traffic Jam Area Meeting @ Fukuoka', desc: '' },
    { date: '2026.10.28-30', title: 'Diffraction Experiments at SPring-8', desc: '' }
  ]

  const profileRows = ja ? [
    ['役職', '准教授'],
    ['所属', '東京科学大学 物質理工学院 応用化学系 化学システム分野'],
    ['学位', '博士（工学）2020年'],
    ['専門', '固体イオニクス・材料インフォマティクス']
  ] : [
    ['Position', 'Associate Professor'],
    ['Affiliation', 'Dept. of Chemical Science and Engineering, Institute of Science Tokyo'],
    ['Degree', 'Ph.D. in Engineering (2020)'],
    ['Field', 'Solid-state ionics and materials informatics']
  ]

  const textLink = 'text-[#d4ad5a] underline decoration-[#d4ad5a]/40 underline-offset-[6px] hover:decoration-[#d4ad5a] transition-colors'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#131a2c] text-[#ece7dc]">
        <Suspense fallback={null}>
          <CrystalBackground />
        </Suspense>
        <LocaleNavigation />

        <div className="relative z-10">
        {/* Hero */}
        <section id="home" className="min-h-[100svh] flex items-center pt-24 pb-16">
          <div className="max-w-6xl w-full mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 hero-rise">
              <p className="text-sm sm:text-base text-[#c9c4b8] mb-5">
                {ja ? '東京科学大学 菅野・鈴木・松井研究室' : 'Kanno–Suzuki–Matsui Laboratory, Institute of Science Tokyo'}
              </p>
              <h1 className="font-serif font-bold text-[2.1rem] leading-[1.35] sm:text-5xl sm:leading-[1.3] tracking-[0.04em] mb-7">
                {ja ? <>全固体電池のための<br />イオン伝導体の研究</> : <>Ion conductors for<br />all-solid-state batteries</>}
              </h1>
              <p className="text-base sm:text-lg text-[#d8d3c8] leading-[1.95] max-w-[34rem] mb-9">
                {ja
                  ? 'リチウム・フッ化物・ヒドリドイオンが固体中を速く動く物質を探索しています。機械学習による候補選定、合成、放射光・中性子回折による構造解析を組み合わせて研究を進めています。'
                  : 'We search for solids in which lithium, fluoride and hydride ions move fast, combining machine-learning screening, synthesis, and structure analysis by synchrotron X-ray and neutron diffraction.'}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-base">
                <Link href="/research-details" className={textLink}>{t('exploreResearch')}</Link>
                <Link href="/publications" className={textLink}>{t('viewPublications')}</Link>
                <Link href="/prospective-students" className={textLink}>{ja ? '研究室を希望する方へ' : 'For prospective students'}</Link>
              </div>
            </div>

            <figure className="lg:col-span-6">
              <div className="relative aspect-[4096/2400] overflow-hidden rounded-sm">
                <Image
                  src="/blender/solid-state-battery.jpg"
                  alt={ja ? '全固体電池の模式図。固体電解質の結晶の中をリチウムイオンが移動している' : 'Schematic of an all-solid-state battery, with lithium ions moving through the solid electrolyte crystal'}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="figure-caption mt-3">
                {ja ? '全固体電池の模式図（Blender で作成）' : 'Schematic of an all-solid-state battery (made in Blender)'}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* From idea to picture */}
        <section id="making" className="py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-[40rem] mb-16 sm:mb-24">
              <h2 className="font-serif font-bold text-3xl sm:text-[2.6rem] leading-[1.45] tracking-[0.04em] mb-8">
                {ja ? '研究の進め方' : 'How we work'}
              </h2>
              <p className="text-base sm:text-[1.0625rem] text-[#d8d3c8] leading-[2]">
                {ja
                  ? '新しい電池材料の開発は、候補となる結晶構造を考えるところから始まります。計算で候補を選び、合成し、回折実験で構造とイオンの伝導経路を調べ、結果を Blender で図にまとめます。一人の学生がこの流れを一通り経験できるようにしています。'
                  : 'Developing a new battery material starts with candidate crystal structures. We select candidates by computation, synthesize them, determine the structure and conduction pathways by diffraction, and summarize the results as figures made in Blender. Each student can experience the whole sequence.'}
              </p>
            </div>

            <ol className="space-y-20 sm:space-y-28">
              {process.map((step, i) => (
                <li key={step.verb} className="grid md:grid-cols-12 gap-7 md:gap-12 items-center">
                  <figure className={`md:col-span-7 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-[#1a2236]">
                      <Image src={step.image} alt={step.caption} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
                    </div>
                    <figcaption className="figure-caption mt-3">{step.caption}</figcaption>
                  </figure>
                  <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="font-serif font-bold text-2xl sm:text-[1.75rem] tracking-[0.06em] mb-4">{step.verb}</h3>
                    <p className="text-base text-[#c9c4b8] leading-[2]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Research grouped by mobile ion */}
        <section id="research" className="py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl tracking-[0.04em]">{t('researchDomains')}</h2>
              <Link href="/research-details" className={textLink}>{ja ? '研究内容の詳細' : 'Research details'}</Link>
            </div>

            <p className="text-base text-[#c9c4b8] leading-[2] max-w-[40rem] mb-12">
              {ja
                ? '伝導するイオンの種類で分けると、主に三つの物質群を扱っています。'
                : 'Grouped by the conducting ion, we work on three families of materials.'}
            </p>

            <div className="grid md:grid-cols-3 gap-x-8 gap-y-14 mb-20">
              {ions.map((ion) => (
                <Link key={ion.symbol} href="/research-details" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1a2236] mb-5">
                    <Image src={ion.image} alt={t(ion.titleKey as keyof typeof t)} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-serif font-bold text-4xl leading-none" style={{ color: ion.color }}>
                      {ion.symbol}<sup className="text-xl ml-0.5">{ion.charge}</sup>
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#ece7dc] group-hover:text-[#d4ad5a] transition-colors">
                      {t(ion.titleKey as keyof typeof t)}
                    </h3>
                  </div>
                  <p className="text-[#aeb1bc] leading-[1.9] text-[0.9375rem]">{t(ion.descKey as keyof typeof t)}</p>
                </Link>
              ))}
            </div>

            <h3 className="font-serif font-bold text-xl sm:text-2xl tracking-[0.04em] mb-6">
              {ja ? '手法' : 'Methods'}
            </h3>
            <dl className="grid md:grid-cols-3 gap-x-8 gap-y-6 border-t border-[#2a3550] pt-6">
              {methods.map((m) => (
                <div key={m.titleKey}>
                  <dt className="font-bold text-[#ece7dc] mb-1.5">{t(m.titleKey as keyof typeof t)}</dt>
                  <dd className="text-[#aeb1bc] leading-[1.9] text-[0.9375rem]">{t(m.descKey as keyof typeof t)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Recruiting */}
        <section className="pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="border-y border-[#d4ad5a]/50 py-10 sm:py-12 grid md:grid-cols-12 gap-6 items-center">
              <h2 className="md:col-span-5 font-serif font-bold text-2xl sm:text-3xl leading-[1.5] tracking-[0.04em]">
                {ja ? '大学院生の募集' : 'Graduate students'}
              </h2>
              <div className="md:col-span-7">
                <p className="text-base text-[#c9c4b8] leading-[2] mb-5">
                  {ja
                    ? '無機材料・固体化学・電池に興味のある大学院生を募集しています。他分野からの進学者向けに勉強会を行っています。M1から放射光実験に参加し、国際学会や国際誌での発表を目指します。'
                    : 'We welcome graduate students interested in inorganic materials, solid-state chemistry or batteries. Study sessions support students from other fields. Students join synchrotron experiments from their first year and aim to present at international conferences and in journals.'}
                </p>
                <Link href="/prospective-students" className={textLink}>
                  {ja ? '研究室を希望する方へ' : 'For prospective students'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* News */}
        <section id="news" className="pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl tracking-[0.04em]">{t('latestNewsTitle')}</h2>
              <Link href="/news" className={textLink}>{ja ? 'ニュース一覧' : 'All news'}</Link>
            </div>

            <ul className="border-t border-[#2a3550]">
              {newsData.map((news) => (
                <li key={news.date + news.title} className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-8 py-5 border-b border-[#2a3550]">
                  <time className="text-sm text-[#9a9eae] tabular-nums pt-0.5">{news.date}</time>
                  <div>
                    <div className="text-base sm:text-[1.0625rem] text-[#ece7dc] leading-[1.8]">{news.title}</div>
                    {news.desc && <div className="text-[0.9375rem] text-[#aeb1bc] leading-[1.8] mt-1">{news.desc}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Profile */}
        <section id="profile" className="pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-4">
              <Image
                src="/NaokiMatsui.jpg"
                alt={ja ? '松井直喜' : 'Naoki Matsui'}
                width={559}
                height={641}
                className="w-full max-w-[18rem] h-auto rounded-sm"
              />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl tracking-[0.08em] mb-2">{t('matsuiNaoki')}</h2>
              <p className="text-[#aeb1bc] mb-8">{ja ? 'Naoki Matsui' : '松井 直喜'}</p>

              <dl className="grid grid-cols-[5.5rem_1fr] gap-x-6 gap-y-3 text-base mb-10">
                {profileRows.map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="text-[#9a9eae]">{k}</dt>
                    <dd className="text-[#d8d3c8]">{v}</dd>
                  </div>
                ))}
                <dt className="text-[#9a9eae]">{ja ? '連絡先' : 'Email'}</dt>
                <dd className="text-[#d8d3c8]">matsui.n.ee49[at]m.isct.ac.jp</dd>
                <dt className="text-[#9a9eae]">{ja ? '居室' : 'Office'}</dt>
                <dd className="text-[#d8d3c8]">{t('locationValue')}</dd>
              </dl>

              <div className="flex flex-wrap gap-x-7 gap-y-3 text-base">
                <Link href="/profile-detail" className={textLink}>{ja ? '経歴・受賞' : 'CV and awards'}</Link>
                <a href="https://www.linkedin.com/in/naoki-matsui-ssi" target="_blank" rel="noopener noreferrer" className={textLink}>LinkedIn</a>
                <a href="https://github.com/matsui-naoki" target="_blank" rel="noopener noreferrer" className={textLink}>GitHub</a>
                <a href="https://x.com/naoki_matsui_ex" target="_blank" rel="noopener noreferrer" className={textLink}>X</a>
              </div>
            </div>
          </div>
        </section>

        </div>

        {/* Footer */}
        <footer className="relative z-10 border-t border-[#2a3550]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between gap-3 text-sm text-[#9a9eae]">
            <div>© 2026 Naoki Matsui　{ja ? '東京科学大学 すずかけ台キャンパス G1-914' : 'Institute of Science Tokyo, Suzukakedai Campus G1-914'}</div>
            <Link href="/access" className="hover:text-[#d4ad5a] transition-colors">{ja ? 'アクセス' : 'Access'}</Link>
          </div>
        </footer>
      </div>
    </>
  )
}
