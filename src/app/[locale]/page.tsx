'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import LocaleNavigation from '@/components/LocaleNavigation'
import HeroFilm from '@/components/HeroFilm'
import CampusFilm from '@/components/CampusFilm'
import Chem from '@/components/Chem'
import { MEDIA } from '@/lib/media'
import { SITE_URL } from '@/lib/seo'
import { useTranslations, useLocale } from 'next-intl'

type T2 = { ja: string; en: string }
// Recent papers as a log (dates are publication months)
const LOG = [
  { date: '2026.11', material: 'β‑PbSn₁₋ₓInₓF₄₊ₓ', ion: 'F⁻', journal: 'Electrochemistry 94, 117004', doi: '10.5796/electrochemistry.26-00082' },
  { date: '2026.09', material: { ja: 'Li⁺ 伝導体のトポロジー探索', en: 'Topology screening of Li⁺ conductors' }, ion: 'Li⁺', journal: 'J. Am. Chem. Soc. 148, 47703', doi: '10.1021/jacs.6c00345' },
  { date: '2026.09', material: 'Na₁₁Sn₂PS₁₂ (Cl, Br)', ion: 'Na⁺', journal: 'ACS Appl. Energy Mater. 9, 12343', doi: '10.1021/acsaem.6c01715' },
  { date: '2026.08', material: { ja: 'Bi 置換 PbSnF₄', en: 'Bi-substituted PbSnF₄' }, ion: 'F⁻', journal: 'Small Struct. 7, e70579', doi: '10.1002/sstr.70579' },
  { date: '2026.03', material: 'Ba₂MgH₆', ion: 'H⁻', journal: 'J. Mater. Chem. A 14, 23180', doi: '10.1039/d5ta09966h' },
  { date: '2025.09', material: { ja: 'H⁻ 伝導固体電解質による水素貯蔵', en: 'Hydrogen storage with an H⁻ conductor' }, ion: 'H⁻', journal: 'Science 389, 1252', doi: '10.1126/science.adw1996' }
]

export default function Home() {
  const t = useTranslations('home')
  const locale = useLocale()
  const ja = locale === 'ja'
  const L = (x: T2 | string) => (typeof x === 'string' ? x : ja ? x.ja : x.en)

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "url": `${SITE_URL}/${ja ? 'ja' : 'en'}`,
    "inLanguage": ja ? "ja" : "en",
    "mainEntity": {
      "@type": "Person",
      "name": ja ? "松井直喜" : "Naoki Matsui",
      "alternateName": ja ? "Naoki Matsui" : "松井直喜",
      "jobTitle": ja ? "准教授" : "Associate Professor",
      "image": `${SITE_URL}/NaokiMatsui2026.jpg`,
      "url": `${SITE_URL}/${ja ? 'ja' : 'en'}`,
      "sameAs": ["https://www.linkedin.com/in/naoki-matsui-ssi", "https://github.com/matsui-naoki", "https://x.com/naoki_matsui_ex"],
      "worksFor": { "@type": "CollegeOrUniversity", "name": ja ? "東京科学大学" : "Institute of Science Tokyo", "url": "https://www.isct.ac.jp/" },
      "memberOf": { "@type": "ResearchOrganization", "name": ja ? "菅野・鈴木・松井研究室" : "Kanno–Suzuki–Matsui Lab" },
      "knowsAbout": ja
        ? ["全固体電池", "リチウムイオン電池", "フッ化物イオン伝導体", "フッ化物電池", "ヒドリドイオン伝導体", "固体イオニクス", "材料インフォマティクス"]
        : ["All-solid-state batteries", "Lithium-ion batteries", "Fluoride-ion conductors", "Fluoride batteries", "Hydride-ion conductors", "Solid-state ionics", "Materials informatics"]
    }
  }


  const newsData = ja ? [
    { date: '2026.11.14-16', title: 'さきがけ「ゆらぎの理解と制御による材料革新」領域会議@東京に参加' },
    { date: '2026.11.10', title: 'NIMS Awardsに参加' },
    { date: '2026.11.06-08', title: 'Battery Forum@ソウル国立大学に参加' },
    { date: '2026.11.06', title: 'M2板倉さんの筆頭論文がElectrochemistryに掲載（Editor\'s Choice）' },
    { date: '2026.11.02-04', title: 'イオン渋滞学 領域会議@福岡に参加' }
  ] : [
    { date: '2026.11.14-16', title: 'Attended JST PRESTO "Materials Innovation through Understanding and Control of Fluctuations" Area Meeting @ Tokyo' },
    { date: '2026.11.10', title: 'Attended NIMS Awards' },
    { date: '2026.11.06-08', title: 'Attended Battery Forum @ Seoul National University' },
    { date: '2026.11.06', title: 'First-author paper by M2 student Itakura published in Electrochemistry (Editor\'s Choice)' },
    { date: '2026.11.02-04', title: 'Attended Ion Jamology Area Meeting @ Fukuoka' }
  ]

  const profileRows = ja ? [
    ['役職', '准教授'],
    ['所属', '東京科学大学 総合研究院 全固体電池研究センター'],
    ['兼務', '物質理工学院 応用化学系 化学システム分野'],
    ['学位', '博士（理学）2020年'],
    ['専門', '固体イオニクス・材料インフォマティクス'],
    ['連絡先', 'matsui.n.ee49[at]m.isct.ac.jp'],
    ['居室', 'すずかけ台キャンパス G1-1020']
  ] : [
    ['Position', 'Associate Professor'],
    ['Affiliation', 'All-Solid-State Battery Research Center, Institute of Science Tokyo'],
    ['Also', 'Dept. of Chemical Science and Engineering'],
    ['Degree', 'Ph.D. in Science (2020)'],
    ['Field', 'Solid-state ionics and materials informatics'],
    ['Email', 'matsui.n.ee49[at]m.isct.ac.jp'],
    ['Office', 'Suzukakedai Campus G1-1020']
  ]

  // Opening film chapters (seconds into public/video/opening.mp4)
  const chapters = ja ? [
    { at: 0, label: '電池' },
    { at: 3, label: '広がる用途' },
    { at: 7, label: '電池の内部' },
    { at: 13, label: '結晶構造中のイオン伝導' },
    { at: 18.5, label: 'キャリアイオン' },
    { at: 25, label: '結晶構造をユニットで解釈' },
    { at: 27.75, label: '結晶構造を設計する' },
    { at: 30.5, label: '実空間と仮想空間が連携した材料探索' },
    { at: 43, label: '国際的な産官学ネットワーク' },
    { at: 47.5, label: 'コミュニティを形成し、人を育てる' }
  ] : [
    { at: 0, label: 'Batteries' },
    { at: 3, label: 'Everywhere' },
    { at: 7, label: 'Inside the battery' },
    { at: 13, label: 'Ion conduction in crystals' },
    { at: 18.5, label: 'Carrier ions' },
    { at: 25, label: 'Reading a crystal as units' },
    { at: 27.75, label: 'Designing crystal structures' },
    { at: 30.5, label: 'Materials search across real and virtual space' },
    { at: 43, label: 'An international network of industry, government and academia' },
    { at: 47.5, label: 'Building a community, growing people' }
  ]

  const tiles = [
    { img: '/Li1.jpg', label: t('lithiumIonConductor') },
    { img: '/F1.jpg', label: t('fluorideIonConductor') },
    { img: '/H1.jpg', label: t('hydrideIonConductor') },
    { img: '/mi.jpg', label: t('machineLearning') },
    { img: '/combinatorial.jpg', label: t('highThroughput') },
    { img: '/SPring8_260131.jpg', label: ja ? '放射光・中性子回折' : 'Synchrotron and neutron diffraction' }
  ]

  // Controls (Shure-like: green pill with black text, ghost pill, green underline links)
  const pill = 'inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-[#76b900] text-black font-semibold hover:bg-[#8fd400] transition-colors'
  const pillLine = 'inline-flex items-center min-h-12 px-6 rounded-full text-white font-semibold shadow-[inset_0_0_0_1.5px_#ffffff80] hover:shadow-[inset_0_0_0_1.5px_#76b900] transition-shadow'
  const greenLink = 'inline-block text-white font-semibold border-b-2 border-[#76b900] pb-0.5 hover:text-[#76b900] transition-colors'
  const h2 = 'text-[1.9rem] sm:text-[2.4rem] leading-[1.15] text-white'
  const lead = 'text-[1.0625rem] leading-[1.75] text-[#cfcfcf]'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
        <LocaleNavigation />

        {/* Campus walk with the lab's statement */}
        <CampusFilm
          src="/video/campus.mp4"
          webm="/video/campus.webm"
          poster="/video/campus.jpg"
          title={ja ? '新物質を探す、その道のり' : 'The road to a new material'}
          lines={ja
            ? ['新しい物質を探す。', '機能性材料から、デバイス応用へ。', 'そして、世界を変えていく。']
            : ['We search for new materials.', 'From functional materials to devices.', 'And so, we change the world.']}
          labels={{ pause: ja ? '動画を一時停止' : 'Pause video', play: ja ? '動画を再生' : 'Play video' }}
        />

        {/* Opening film */}
        <HeroFilm
          id="film"
          lazy
          src="/video/opening.mp4"
          webm="/video/opening.webm"
          poster="/video/opening.jpg"
          chapters={chapters}
          labels={{ pause: ja ? '動画を一時停止' : 'Pause video', play: ja ? '動画を再生' : 'Play video', scene: (i, l) => (ja ? `シーン${i}「${l}」へ移動` : `Go to scene ${i}, ${l}`) }}
        >
          <h1 className="text-[2.2rem] sm:text-[3.2rem] lg:text-[3.6rem] leading-[1.12] max-w-[54rem] mb-6">
            {ja ? <><span className="inline-block">固体イオニクス材料を</span><span className="inline-block">開発し、</span><br /><span className="text-[#76b900]"><span className="inline-block">高性能な</span><span className="inline-block">次世代電池へ</span></span></> : <>Developing solid-state ionic materials <span className="text-[#76b900]">for high-performance, next-generation batteries</span></>}
          </h1>
          <div className="flex flex-wrap gap-3">
            <Link href="/research-details" className={pill}>{t('exploreResearch')}<span aria-hidden="true">›</span></Link>
            <Link href="/prospective-students" className={pillLine}>{ja ? '研究室を希望する方へ' : 'For prospective students'}</Link>
          </div>
        </HeroFilm>

        {/* Research areas as category tiles */}
        <section id="research" className="py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <h2 className={h2}>{t('researchDomains')}</h2>
              <Link href="/research-details" className={greenLink}>{ja ? '研究内容の詳細' : 'Research details'}</Link>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {tiles.map((x) => (
                <li key={x.label}>
                  <Link href="/research-details" className="group block bg-[#1a1a1a] hover:bg-[#262626] rounded-[6px] overflow-hidden transition-colors h-full">
                    <div className="relative aspect-square">
                      <Image src={x.img} alt="" fill sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" className="object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="px-3 py-3 text-[14px] font-semibold leading-snug">{x.label}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Graduate students: video beside text */}
        <section id="recruit" className="py-10 sm:py-14 bg-[#111111]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-0 bg-[#1a1a1a] rounded-[6px] overflow-hidden">
            <video className="w-full h-full min-h-[260px] object-cover" src="/video/crystal-loop.mp4" poster="/video/crystal-loop.jpg" autoPlay muted loop playsInline aria-hidden="true" />
            <div className="p-7 sm:p-10 flex flex-col justify-center">
              <h2 className={`${h2} mb-4`}>{ja ? '大学院生の募集' : 'Graduate students'}</h2>
              <p className={`${lead} mb-7`}>
                {ja
                  ? '無機材料・固体化学・電池に興味のある大学院生を募集しています。異分野からの参加も歓迎します。共同研究や産官学連携のプロジェクト、海外の研究機関との連携、国際学会や国際誌での発表を通じて、研究者として大きく成長できる環境です。'
                  : 'We welcome graduate students interested in inorganic materials, solid-state chemistry or batteries, including those coming from other fields. Joint research, industry–government–academia projects, international collaborations, and presentations at international conferences and in journals give you room to grow fast as a researcher.'}
              </p>
              <div><Link href="/prospective-students" className={pill}>{ja ? '研究室を希望する方へ' : 'For prospective students'}<span aria-hidden="true">›</span></Link></div>
            </div>
          </div>
        </section>

        {/* News */}
        <section id="news" className="py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className={`${h2} mb-5`}>{t('latestNewsTitle')}</h2>
              <Link href="/news" className={greenLink}>{ja ? 'ニュース一覧' : 'All news'}</Link>
            </div>
            <ul className="lg:col-span-8 border-t border-[#262626]">
              {newsData.map((n) => (
                <li key={n.date + n.title} className="grid sm:grid-cols-[8.5rem_1fr] gap-x-6 gap-y-0.5 py-4 border-b border-[#262626]">
                  <time className="tabular-nums text-[0.9rem] text-[#9a9a9a]">{n.date}</time>
                  <span className="text-[#cfcfcf] leading-[1.65]">{n.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recent papers as cards */}
        <section id="log" className="py-10 sm:py-14 bg-[#111111]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <h2 className={h2}>{ja ? '最近の論文' : 'Recent papers'}</h2>
              <Link href="/publications" className={greenLink}>{ja ? '論文リスト' : 'All publications'}</Link>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {LOG.map((r) => (
                <li key={r.doi} className="bg-[#1c1c1c] rounded-[6px] p-5 flex flex-col">
                  <div className="flex items-center gap-3 text-[13px] text-[#9a9a9a] mb-3 tabular-nums">
                    <span>{r.date}</span>
                    <span className="text-black bg-[#76b900] rounded-full px-2 py-0.5 font-semibold"><Chem>{r.ion}</Chem></span>
                  </div>
                  <div className="text-[1.1rem] font-semibold leading-snug mb-2"><Chem>{L(r.material)}</Chem></div>
                  <div className="text-[14px] text-[#9a9a9a] mb-5">{r.journal}</div>
                  <a href={`https://doi.org/${r.doi}`} target="_blank" rel="noopener noreferrer" className={`${greenLink} mt-auto self-start text-[14px]`}>{ja ? '論文を読む' : 'Read the paper'}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Profile */}
        <section id="profile" className="py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <Image src="/NaokiMatsui2026.jpg" alt={ja ? '松井直喜' : 'Naoki Matsui'} width={520} height={690} className="w-full max-w-[17rem] h-auto rounded-[6px]" />
            </div>
            <div className="lg:col-span-8">
              <h2 className={`${h2} mb-2`}>{t('matsuiNaoki')}</h2>
              <p className="text-[#9a9a9a] mb-8">{ja ? 'Naoki Matsui' : '松井 直喜'}</p>
              <dl className="border-t border-[#262626] mb-8">
                {profileRows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-x-6 py-3 border-b border-[#262626]">
                    <dt className="text-[#9a9a9a] text-[0.9375rem]">{k}</dt>
                    <dd className="text-[#cfcfcf]">{v}</dd>
                  </div>
                ))}
              </dl>
              {MEDIA.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[#9a9a9a] text-[0.9375rem] mb-3">{ja ? 'インタビュー' : 'Interviews'}</h3>
                  <ul className="space-y-3">
                    {MEDIA.map((m) => (
                      <li key={m.url}>
                        <a href={m.url} target="_blank" rel="noopener noreferrer" className="group block">
                          <span className="block text-white group-hover:text-[#76b900] transition-colors">{L(m.title)}</span>
                          <span className="block text-[14px] text-[#9a9a9a]">{L(m.source)}　{m.date.slice(0, 7).replace('.', '/')}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                <Link href="/profile-detail" className={greenLink}>{ja ? '経歴・受賞' : 'CV and awards'}</Link>
                <a href="https://www.linkedin.com/in/naoki-matsui-ssi" target="_blank" rel="noopener noreferrer" className={greenLink}>LinkedIn</a>
                <a href="https://github.com/matsui-naoki" target="_blank" rel="noopener noreferrer" className={greenLink}>GitHub</a>
                <a href="https://x.com/naoki_matsui_ex" target="_blank" rel="noopener noreferrer" className={greenLink}>X</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#262626]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between gap-3 text-[13px] text-[#9a9a9a]">
            <div>© 2026 Naoki Matsui　{ja ? '東京科学大学 すずかけ台キャンパス G1-1020' : 'Institute of Science Tokyo, Suzukakedai Campus G1-1020'}</div>
            <Link href="/access" className="hover:text-white transition-colors">{ja ? 'アクセス' : 'Access'}</Link>
          </div>
        </footer>
      </div>
    </>
  )
}
