'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'
import Chem from '@/components/Chem'

export default function NewsPage() {
  const t = useTranslations('news')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  const allNews = locale === 'ja' ? [
    {
      date: '2026.11.19',
      title: 'D3 Zhuさんの筆頭論文がElectrochemistryにアクセプト',
      desc: (
        <span>
          「Synthesis and Ionic Conductivity of a New Polymorph of <Chem>LiBS₂</Chem>」おめでとう!!
          <a href="https://doi.org/10.5796/electrochemistry.26-74098" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.11.14-16',
      title: 'さきがけ「ゆらぎの理解と制御による材料革新」領域会議@東京に参加',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.11.10',
      title: 'NIMS Awardsに参加',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.11.06-08',
      title: 'Battery Forum@ソウル国立大学に参加',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.11.06',
      title: 'M2板倉さんの筆頭論文がElectrochemistryに掲載',
      desc: (
        <span>
          「Enhanced Room-Temperature Fluoride-Ion Conductivity of <Chem>β‑PbSn₁₋ₓInₓF₄₊ₓ</Chem>」がEditor&apos;s Choiceに選ばれました。おめでとう!!
          <a href="https://doi.org/10.5796/electrochemistry.26-00082" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.11.02-04',
      title: 'イオン渋滞学 領域会議@福岡に参加',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.10.28-30',
      title: 'SPring-8で回折実験を実施',
      desc: '',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.10.08',
      title: '新入生歓迎会を開催',
      desc: '',
      category: 'LAB'
    },
    {
      date: '2026.09.18',
      title: 'Kongさんの筆頭論文がJ. Am. Chem. Soc.に掲載',
      desc: (
        <span>
          「Screening Lithium-Ion Conductors Based on Local and Global Topology」
          <a href="https://doi.org/10.1021/jacs.6c00345" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.09.16',
      title: 'Poeppelmeier先生（Northwestern大学）が研究室を訪問',
      desc: '',
      category: 'VISIT'
    },
    {
      date: '2026.09.15',
      title: '学術変革領域「イオン渋滞学」の「若手のハイライト」にインタビュー記事が掲載',
      desc: (
        <span>
          電池研究に進んだ経緯や博士進学のきっかけ、学生へのメッセージについてお話ししました。
          <a href="https://ion-jamology.jp/news/202408096/" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            記事を読む
          </a>
        </span>
      ),
      category: 'MEDIA'
    },
    {
      date: '2026.09.15',
      title: '亀若さんの筆頭論文がACS Appl. Energy Mater.に掲載',
      desc: (
        <span>
          「Halogen-Dependent Ionic Conductivity in <Chem>Na₁₁Sn₂PS₁₂</Chem>: Reduction by Cl and Enhancement by Br Substitution」
          <a href="https://doi.org/10.1021/acsaem.6c01715" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.09.03',
      title: 'Poeppelmeier先生（Northwestern大学）の講演を聴講',
      desc: '',
      category: 'SEMINAR'
    },
    {
      date: '2026.08.28',
      title: 'プロジェクトの会議@京都に参加',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.08.20',
      title: '京大陰山研の吉田特定准教授・大阪公立大学林研の本橋助教を訪問',
      desc: '材料設計について有意義な議論ができました。',
      category: 'VISIT'
    },
    {
      date: '2026.08.12',
      title: 'M2板倉さんの筆頭論文がSmall Structuresに掲載',
      desc: (
        <span>
          「Unlocking High Fluoride-Ion Conductivity by Regulating the Order–Disorder Transition in Bi-substituted <Chem>PbSnF₄</Chem>」おめでとう!!
          <a href="https://doi.org/10.1002/sstr.70579" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.08.08-16',
      title: 'お盆休み',
      desc: '',
      category: 'LAB'
    },
    {
      date: '2026.08.06',
      title: '信州大学の手嶋研究室を見学',
      desc: '',
      category: 'VISIT'
    },
    {
      date: '2026.07.31',
      title: 'Laboratory Automation研究会にオンライン参加',
      desc: '分野の急成長にはいつも驚かされます。',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.30-08.04',
      title: 'OBのAyuさんが共同研究のため来校',
      desc: '現在はインドネシア大学の講師としてご活躍中です。お元気そうで良かったです。',
      category: 'VISIT'
    },
    {
      date: '2026.07.24',
      title: 'イオン渋滞学の公開シンポジウムに参加',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.17-20',
      title: 'SPring-8 BL02B2で回折実験を実施',
      desc: '高温スイープ測定のデータを大量に取得しました。',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.07.16',
      title: '前期の研究進捗報告ゼミが開始',
      desc: '後半戦も頑張りましょう!',
      category: 'SEMINAR'
    },
    {
      date: '2026.07.05-10',
      title: 'SSI-25th@シンガポールに参加',
      desc: 'Young Scientist Awardのコンペで発表しました。とても良い経験でした。',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.05-10',
      title: 'M2学生がSSI-25thでポスター発表',
      desc: '国際学会で研究成果を発信しました!',
      category: 'CONFERENCE'
    },
    {
      date: '2026.06.20-21',
      title: 'ゼミ旅行@八丈島',
      desc: '私だけ悪天候でフライトが欠航し不参加…。学生さんは楽しめたようで良かったです。',
      category: 'LAB'
    },
    {
      date: '2026.06.14',
      title: '研究室メンバーでBBQを開催',
      desc: '学生さん、お疲れ様でした!',
      category: 'LAB'
    },
    {
      date: '2026.06.12-13',
      title: 'イオン渋滞学 領域会議@名古屋に参加',
      desc: '進捗を報告しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2026.06.11',
      title: '水素研究会@仙台に参加',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.06.01-04',
      title: 'サンフランシスコの共同研究先を訪問',
      desc: '有意義なディスカッションでした。',
      category: 'COLLABORATION'
    },
    {
      date: '2026.06.01',
      title: '准教授に昇任しました',
      desc: '東京科学大学 物質理工学院 応用化学系 化学システム分野の准教授として、引き続き次世代電池材料の研究を推進します。',
      category: 'LAB'
    },
    {
      date: '2026.05.23-29',
      title: 'ECS Meeting@シアトルに参加',
      desc: 'コンビナトリアル実験について報告しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.18-21',
      title: 'International Forum of Solid State Batteries@仙台に参加',
      desc: '最近の取り組みについて講演しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.13',
      title: 'NIMSでアニオン伝導性材料の開発について講演',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.08-09',
      title: 'さきがけ領域会議@仙台に参加',
      desc: 'もっと精進します!',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.01',
      title: '硫化物固体電解質について勉強会を開催',
      desc: '夜ご飯を食べながら気軽にディスカッションしました。',
      category: 'SEMINAR'
    },
    {
      date: '2026.04.24-27',
      title: 'SPring-8 BL28XUで薄膜XRD測定を実施',
      desc: '',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.04.20',
      title: '新入生がゼミで自己紹介',
      desc: '鈴木研には新しくM1が3名加わりました!',
      category: 'MEMBER'
    },
    {
      date: '2026.04.18',
      title: '研究室の有志メンバーで高尾山〜相模湖をハイキング',
      desc: '良いリフレッシュになりました!',
      category: 'LAB'
    },
    {
      date: '2026.04.06',
      title: 'イオン渋滞学WG@つくば国際会議場に参加',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.03.25',
      title: 'OBのAyuさんとの共著論文がJ. Mater. Chem. Aに掲載',
      desc: (
        <span>
          「Fast hydride-ion conduction in complex hydride <Chem>Ba₂MgH₆</Chem>」複合水素化物<Chem>Ba₂MgH₆</Chem>における高速ヒドリドイオン伝導を報告しました。
          <a href="https://doi.org/10.1039/d5ta09966h" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.03.17-19',
      title: '電気化学会@理科大に実行委員として参加',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.02.12-13',
      title: '修士学生3名の修論発表会',
      desc: '立派な発表でした! お疲れ様!',
      category: 'SEMINAR'
    },
    {
      date: '2026.02.09',
      title: '立命館大学の鐘先生が来研し、交流・議論',
      desc: '共同研究に向けて活発に議論しました。',
      category: 'VISIT'
    },
    {
      date: '2026.02.04-06',
      title: '日独交流会議@仙台に参加',
      desc: '海外の研究者と交流し、ネットワークを広げました!',
      category: 'CONFERENCE'
    },
    {
      date: '2026.01.31',
      title: 'SPring-8 BL02B2にて放射光粉末X線回折実験を実施',
      desc: 'D2・M1の学生が同行し、その場で測定結果について議論しました。出張お疲れ様です!',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.26',
      title: 'J-PARC BL09にて中性子回折実験を実施',
      desc: 'M1の学生さんも同行し、中性子回折実験の一連の流れや装置の特徴を学びました。',
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
      desc: 'お疲れ様でした。残りわずかですが、頑張ってください!',
      category: 'SEMINAR'
    },
    {
      date: '2025.12.15',
      title: 'Pacifichem@Hawaiiでフッ化物イオン伝導体について招待講演',
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
      title: 'John Irvine教授（St Andrews）らとディスカッション',
      desc: '固体イオニクスのトレンドについて議論しました。',
      category: 'VISIT'
    },
    {
      date: '2025.12.08',
      title: '日本化学会電池部会でフッ化物イオン伝導体について招待講演',
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
      desc: '泊まり込みで発表・議論しました。学生さんの実験結果についても報告しました。',
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
      desc: '学生も同行しました。',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.11.01-03',
      title: 'SPring-8 BL02B2にて粉末X線回折測定を実施',
      desc: 'M1の学生さん2名が同行し、各自のサンプル（なんと計100試料超え!）を測定しました。',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.10.21-22',
      title: '三重大学 今西・森研を訪問',
      desc: '森先生らとフッ化物イオン伝導体について議論しました。M1・M2の学生も同行し、学生同士でも活発に議論しました。',
      category: 'VISIT'
    },
    {
      date: '2025.09.18',
      title: 'ヒドリドイオン伝導体を用いた水素吸蔵デバイスの論文がScienceに掲載!',
      desc: (
        <span>
          新たな固体電解質と、<Chem>Mg-H₂</Chem>水素吸蔵デバイスを開発しました。東京科学大学 平山研の博士学生だった廣瀬さん（現 同大学 荒井研 助教）らとの共同研究の成果です。
          <a href="https://www.science.org/doi/10.1126/science.adw1996" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2025.09.18',
      title: 'ISE/ELLIPSE会議@Germanyで発表、Oliver Clemens研@Stuttgartを訪問',
      desc: 'フッ化物イオン伝導体の開発について報告・議論しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2025.09.17',
      title: 'JSTさきがけプログラムに研究課題が採択',
      desc: (
        <span>
          JSTさきがけに採択されました!
          <a href="https://www.jst.go.jp/kisoken/presto/" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
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
      desc: '珍しい結晶構造をもち、かなり高いフッ化物イオン伝導率を示す新たな材料系として期待されます。多面体の連結様式が変わりながら（頂点共有↔稜共有）過剰なフッ素を構造内に取り込む、珍しい物質です。',
      category: 'RESEARCH'
    },
    {
      date: '2025.06.19',
      title: 'D3学生 Kongさん（Science Tokyo 鈴木研）の論文がJACSにアクセプト',
      desc: '配位多面体モチーフを特徴量としてイオン伝導率を予測し、ニューラルネットワークポテンシャルを用いた分子動力学計算で検証したうえで、最終的に新たなLiイオン伝導体を実験的に創出しました。',
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
      title: 'John Irvine先生の研究室（St Andrews）のMariaanaさんとMichkelさんが菅野・鈴木研を訪問',
      desc: '研究室の学生とともに双方の研究トピックについて議論しました。',
      category: 'VISIT'
    },
    {
      date: '2025.05.20',
      title: 'Kim Sangryun教授（GIST、韓国）との共著論文がJACSにアクセプト',
      desc: <>ペロブスカイト型ヒドリドイオン伝導体に錯イオン（<Chem>BH₄⁻</Chem>）を組み込んだ新たな材料系の報告です。</>,
      category: 'RESEARCH'
    },
    {
      date: '2025.04.01',
      title: '学術変革領域研究(A)「イオン渋滞学」に公募研究のメンバーとして参画',
      desc: '横断的な共同研究・材料開発に取り組みます!',
      category: 'COLLABORATION'
    },
    {
      date: '2025.04.01',
      title: '菅野・鈴木研に新M1として3名が加入',
      desc: 'おめでとうございます。',
      category: 'MEMBER'
    },
    {
      date: '2025.03.11',
      title: 'M2学生の小貫さんの論文がSolid State Ionicsにアクセプト',
      desc: '新規フッ化物イオン伝導体としてシーライト型構造に着目し、伝導率の最適化と伝導メカニズムの解明について報告しました。',
      category: 'RESEARCH'
    },
    {
      date: '2025.02.20',
      title: 'D3学生 廣瀬さん（Science Tokyo 応用化学系 平山研）との共著論文がDalton Transactionsで公開',
      desc: 'ペロブスカイト型ヒドリドイオン伝導体の組成最適化に関する報告です。',
      category: 'RESEARCH'
    },
    {
      date: '2024.11.10',
      title: 'D2学生 Kongさん（Science Tokyo 鈴木研）が第14回CSJ化学フェスタで優秀ポスター賞を受賞',
      desc: 'Congratulations!',
      category: 'AWARD'
    },
    {
      date: '2024.07.25',
      title: 'D2学生 廣瀬さん（Science Tokyo 応用化学系 平山研）が国際学会 Solid State Ionics 2024@LondonでPoster Awardを受賞',
      desc: '国際的な場での受賞、おめでとうございます！',
      category: 'AWARD'
    },
    {
      date: '2023.11.20',
      title: 'M1学生 小貫さんが第13回CSJ化学フェスタで優秀ポスター賞を受賞',
      desc: '素晴らしい成果です！',
      category: 'AWARD'
    }
  ] : [
    {
      date: '2026.11.19',
      title: "Zhu's First-Author Paper Accepted in Electrochemistry",
      desc: (
        <span>
          &quot;Synthesis and Ionic Conductivity of a New Polymorph of <Chem>LiBS₂</Chem>&quot; Congratulations!
          <a href="https://doi.org/10.5796/electrochemistry.26-74098" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.11.14-16',
      title: 'Attended JST PRESTO "Materials Innovation through Understanding and Control of Fluctuations" Area Meeting @ Tokyo',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.11.10',
      title: 'Attended NIMS Awards',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.11.06-08',
      title: 'Attended Battery Forum @ Seoul National University',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.11.06',
      title: 'First-author paper by M2 student Itakura published in Electrochemistry',
      desc: (
        <span>
          &quot;Enhanced Room-Temperature Fluoride-Ion Conductivity of <Chem>β‑PbSn₁₋ₓInₓF₄₊ₓ</Chem>&quot; was selected as an Editor&apos;s Choice. Congratulations!!
          <a href="https://doi.org/10.5796/electrochemistry.26-00082" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.11.02-04',
      title: 'Attended Ion Jamology Area Meeting @ Fukuoka',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.10.28-30',
      title: 'Diffraction experiments at SPring-8',
      desc: '',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.10.08',
      title: 'Welcome party for new members',
      desc: '',
      category: 'LAB'
    },
    {
      date: '2026.09.18',
      title: 'First-author paper by Kong published in J. Am. Chem. Soc.',
      desc: (
        <span>
          &quot;Screening Lithium-Ion Conductors Based on Local and Global Topology&quot;
          <a href="https://doi.org/10.1021/jacs.6c00345" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.09.16',
      title: 'Prof. Poeppelmeier (Northwestern University) visited our lab',
      desc: '',
      category: 'VISIT'
    },
    {
      date: '2026.09.15',
      title: 'Interview Featured in "Young Researcher Highlights" of the Ion Jamology Project',
      desc: (
        <span>
          I talked about how I came to battery research, why I chose to do a PhD, and a message to students (in Japanese).
          <a href="https://ion-jamology.jp/news/202408096/" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            Read the article
          </a>
        </span>
      ),
      category: 'MEDIA'
    },
    {
      date: '2026.09.15',
      title: 'First-author paper by Kamewaka published in ACS Appl. Energy Mater.',
      desc: (
        <span>
          &quot;Halogen-Dependent Ionic Conductivity in <Chem>Na₁₁Sn₂PS₁₂</Chem>: Reduction by Cl and Enhancement by Br Substitution&quot;
          <a href="https://doi.org/10.1021/acsaem.6c01715" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.09.03',
      title: 'Attended a lecture by Prof. Poeppelmeier (Northwestern University)',
      desc: '',
      category: 'SEMINAR'
    },
    {
      date: '2026.08.28',
      title: 'Attended a project meeting @ Kyoto',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.08.20',
      title: 'Visited Dr. Yoshida (Kageyama Lab, Kyoto Univ.) and Dr. Motohashi (Hayashi Lab, Osaka Metropolitan Univ.)',
      desc: 'Fruitful discussions on materials design.',
      category: 'VISIT'
    },
    {
      date: '2026.08.12',
      title: 'First-author paper by M2 student Itakura published in Small Structures',
      desc: (
        <span>
          &quot;Unlocking High Fluoride-Ion Conductivity by Regulating the Order–Disorder Transition in Bi-substituted <Chem>PbSnF₄</Chem>&quot; Congratulations!!
          <a href="https://doi.org/10.1002/sstr.70579" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.08.08-16',
      title: 'Obon holidays',
      desc: '',
      category: 'LAB'
    },
    {
      date: '2026.08.06',
      title: 'Visited the Teshima Lab at Shinshu University',
      desc: '',
      category: 'VISIT'
    },
    {
      date: '2026.07.31',
      title: 'Joined a Laboratory Automation workshop online',
      desc: 'The rapid growth of this field never stops amazing me.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.30-08.04',
      title: 'Former member Ayu visited for joint research',
      desc: 'Ayu is now a lecturer at Universitas Indonesia. It was great to see Ayu doing well.',
      category: 'VISIT'
    },
    {
      date: '2026.07.24',
      title: 'Attended the Ion Jamology public symposium',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.17-20',
      title: 'Diffraction experiments at SPring-8 BL02B2',
      desc: 'Collected a large amount of high-temperature sweep data.',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.07.16',
      title: 'First-semester research progress seminars began',
      desc: 'Let\'s keep it up through the second half!',
      category: 'SEMINAR'
    },
    {
      date: '2026.07.05-10',
      title: 'Attended SSI-25th @ Singapore',
      desc: 'Presented in the Young Scientist Award competition. It was a great experience.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.05-10',
      title: 'M2 students presented posters at SSI-25th',
      desc: 'Shared their results at an international conference!',
      category: 'CONFERENCE'
    },
    {
      date: '2026.06.20-21',
      title: 'Lab retreat @ Hachijojima',
      desc: 'My flight alone was cancelled due to bad weather, so I missed it… but I\'m glad the students enjoyed it!',
      category: 'LAB'
    },
    {
      date: '2026.06.14',
      title: 'Lab BBQ',
      desc: 'Great job, everyone!',
      category: 'LAB'
    },
    {
      date: '2026.06.12-13',
      title: 'Attended Ion Jamology Area Meeting @ Nagoya',
      desc: 'Reported our progress.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.06.11',
      title: 'Attended a hydrogen research meeting @ Sendai',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.06.01-04',
      title: 'Visited collaborators in San Francisco',
      desc: 'Fruitful discussions.',
      category: 'COLLABORATION'
    },
    {
      date: '2026.06.01',
      title: 'Promoted to Associate Professor',
      desc: 'Continuing research on next-generation battery materials at the Dept. of Chemical Science and Engineering, Institute of Science Tokyo.',
      category: 'LAB'
    },
    {
      date: '2026.05.23-29',
      title: 'Attended the ECS Meeting @ Seattle',
      desc: 'Reported on combinatorial experiments.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.18-21',
      title: 'Attended the International Forum of Solid State Batteries @ Sendai',
      desc: 'Gave a talk on our recent work.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.13',
      title: 'Talk at NIMS on the development of anion-conducting materials',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.08-09',
      title: 'Attended PRESTO Area Meeting @ Sendai',
      desc: 'I\'ll keep pushing myself!',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.01',
      title: 'Study session on sulfide solid electrolytes',
      desc: 'A relaxed discussion over dinner.',
      category: 'SEMINAR'
    },
    {
      date: '2026.04.24-27',
      title: 'Thin-film XRD measurements at SPring-8 BL28XU',
      desc: '',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.04.20',
      title: 'New students introduced themselves at the seminar',
      desc: 'Three new M1 students joined the Suzuki Lab!',
      category: 'MEMBER'
    },
    {
      date: '2026.04.18',
      title: 'Lab hike from Mt. Takao to Lake Sagami',
      desc: 'A refreshing day out!',
      category: 'LAB'
    },
    {
      date: '2026.04.06',
      title: 'Attended Ion Jamology WG @ Tsukuba International Congress Center',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.03.25',
      title: 'Co-authored paper with former member Ayu published in J. Mater. Chem. A',
      desc: (
        <span>
          &quot;Fast hydride-ion conduction in complex hydride <Chem>Ba₂MgH₆</Chem>&quot; — reporting fast hydride-ion conduction in the complex hydride <Chem>Ba₂MgH₆</Chem>.
          <a href="https://doi.org/10.1039/d5ta09966h" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.03.17-19',
      title: 'ECSJ Meeting @ Tokyo Univ. of Science',
      desc: 'Took part as a member of the organizing committee.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.02.12-13',
      title: 'Master\'s thesis presentations by three students',
      desc: 'Excellent presentations! Great work!',
      category: 'SEMINAR'
    },
    {
      date: '2026.02.09',
      title: 'Prof. Zhong (Ritsumeikan University) visited the lab for discussions',
      desc: 'We had lively discussions toward joint research.',
      category: 'VISIT'
    },
    {
      date: '2026.02.04-06',
      title: 'Attended a Japan–Germany exchange meeting @ Sendai',
      desc: 'Met researchers from abroad and expanded our network!',
      category: 'CONFERENCE'
    },
    {
      date: '2026.01.31',
      title: 'Synchrotron powder X-ray diffraction experiment at SPring-8 BL02B2',
      desc: 'D2 and M1 students came along and discussed the results on site. Thanks for your hard work on the trip!',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.26',
      title: 'Neutron diffraction experiment at J-PARC BL09',
      desc: 'An M1 student came along and learned the whole workflow of a neutron diffraction experiment and the features of the instrument.',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.01.24',
      title: 'Celebration of Prof. Kanno\'s 70th birthday',
      desc: 'Many alumni attended, and it was a great success!',
      category: 'SEMINAR'
    },
    {
      date: '2026.01.16',
      title: 'Invited talk at the Kinki Chemical Society battery seminar',
      desc: 'Spoke on solid electrolyte development.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.01.06',
      title: 'Doctoral student\'s public defense',
      desc: 'Great work! Only a little time left, so keep it up!',
      category: 'SEMINAR'
    },
    {
      date: '2025.12.15',
      title: 'Invited talk on fluoride ion conductors at Pacifichem @ Hawaii',
      desc: 'Presented our latest results at the international conference.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.12.11-12',
      title: 'Attended and presented at the Jamology Symposium @ MRM',
      desc: 'Gave a presentation on Ion Jamology.',
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
      title: 'Invited talk on fluoride ion conductors at the CSJ Battery Division',
      desc: 'Presented our latest research on fluoride ion conductors.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.25-27',
      title: 'Attended the Solid State Ionics Symposium @ Funabori',
      desc: 'Reported on combinatorial experiments.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.18-19',
      title: 'Attended the Battery Symposium in Japan @ Nagoya',
      desc: 'Reported on ion conductor screening using graph neural network potentials.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.14-15',
      title: 'Attended the Transformative Research Area meeting @ Mt. Tsukuba',
      desc: 'Presented and discussed over an overnight stay, and also reported on our students\' experimental results.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.11.10',
      title: 'Presented at the PRESTO kickoff meeting',
      desc: 'Presented my research plan at the JST PRESTO kickoff meeting.',
      category: 'RESEARCH'
    },
    {
      date: '2025.11.07-10',
      title: 'Thin-film X-ray diffraction measurements at SPring-8 BL28XU',
      desc: 'Students came along too.',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.11.01-03',
      title: 'Powder X-ray diffraction measurements at SPring-8 BL02B2',
      desc: 'Two M1 students came along and measured their own samples (over 100 in total!).',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.10.21-22',
      title: 'Visited the Imanishi–Mori Lab at Mie University',
      desc: 'Discussed fluoride ion conductors with Prof. Mori and colleagues. M1 and M2 students also came along and had lively discussions with the students there.',
      category: 'VISIT'
    },
    {
      date: '2025.09.18',
      title: 'Paper on a hydrogen storage device using a hydride ion conductor published in Science!',
      desc: (
        <span>
          We developed a new solid electrolyte and an <Chem>Mg-H₂</Chem> hydrogen storage device. This is joint work with Hirose (then a doctoral student in the Hirayama Lab, Institute of Science Tokyo; now an assistant professor in the Arai Lab at the same university) and colleagues.
          <a href="https://www.science.org/doi/10.1126/science.adw1996" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2025.09.18',
      title: 'Presented at the ISE/ELLIPSE conference @ Germany and visited the Oliver Clemens Lab @ Stuttgart',
      desc: 'Reported on and discussed our fluoride ion conductor development.',
      category: 'CONFERENCE'
    },
    {
      date: '2025.09.17',
      title: 'Research project selected for JST PRESTO',
      desc: (
        <span>
          Selected for JST PRESTO!
          <a href="https://www.jst.go.jp/kisoken/presto/" target="_blank" rel="noopener noreferrer" className="text-[#76b900] hover:text-[#8fd400] underline ml-1">
            Details here
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2025.08.05',
      title: 'Two M1 students from the Kanno-Suzuki Lab to attend the Solid State Ionics Seminar @ Miyazaki',
      desc: 'Itakura and Kamewaka will present their search for new solid electrolyte materials. Good luck!',
      category: 'CONFERENCE'
    },
    {
      date: '2025.07.24',
      title: 'First-semester research report seminars of the Kanno-Suzuki Lab completed',
      desc: 'Great work, everyone!',
      category: 'SEMINAR',
      hasImage: true
    },
    {
      date: '2025.07.10',
      title: 'High-energy X-ray scattering experiments at SPring-8',
      desc: 'Carried out high-energy X-ray scattering experiments at SPring-8. Students came along too. Great work!',
      category: 'EXPERIMENT'
    },
    {
      date: '2025.06.20',
      title: 'Paper on a new fluoride ion conductor accepted in Chem. Mater.',
      desc: 'A promising new material family with a rare crystal structure and fairly high fluoride ion conductivity. It is an unusual compound that takes excess fluorine into its structure while its polyhedral connectivity changes (corner-sharing ↔ edge-sharing).',
      category: 'RESEARCH'
    },
    {
      date: '2025.06.19',
      title: 'Paper by D3 student Kong (Science Tokyo, Suzuki Lab) accepted in JACS',
      desc: 'Predicted ionic conductivity using coordination-polyhedron motifs as features, verified it by molecular dynamics with a neural network potential, and finally created a new Li-ion conductor experimentally.',
      category: 'RESEARCH'
    },
    {
      date: '2025.06.19',
      title: 'First-semester paper-reading seminars of the Kanno-Suzuki Lab completed',
      desc: 'Great work, everyone!',
      category: 'SEMINAR'
    },
    {
      date: '2025.05.26',
      title: 'Mariaana and Michkel from Prof. John Irvine\'s lab (St Andrews) visited the Kanno-Suzuki Lab',
      desc: 'Together with our students, we discussed each other\'s research topics.',
      category: 'VISIT'
    },
    {
      date: '2025.05.20',
      title: 'Co-authored paper with Prof. Kim Sangryun (GIST, Korea) accepted in JACS',
      desc: <>A report on a new material family that incorporates complex ions (<Chem>BH₄⁻</Chem>) into perovskite-type hydride ion conductors.</>,
      category: 'RESEARCH'
    },
    {
      date: '2025.04.01',
      title: 'Joined the Transformative Research Area (A) "Ion Jamology" as a member of the publicly offered research',
      desc: 'We will work on cross-disciplinary joint research and materials development!',
      category: 'COLLABORATION'
    },
    {
      date: '2025.04.01',
      title: 'Three new M1 students joined the Kanno-Suzuki Lab',
      desc: 'Congratulations.',
      category: 'MEMBER'
    },
    {
      date: '2025.03.11',
      title: 'Paper by M2 student Onuki accepted in Solid State Ionics',
      desc: 'Focusing on the scheelite-type structure for new fluoride ion conductors, the paper reports conductivity optimization and clarifies the conduction mechanism.',
      category: 'RESEARCH'
    },
    {
      date: '2025.02.20',
      title: 'Co-authored paper with D3 student Hirose (Science Tokyo, Hirayama Lab) published in Dalton Transactions',
      desc: 'A report on composition optimization of perovskite-type hydride ion conductors.',
      category: 'RESEARCH'
    },
    {
      date: '2024.11.10',
      title: 'D2 student Kong (Science Tokyo, Suzuki Lab) received the Outstanding Poster Award at the 14th CSJ Chemistry Festa',
      desc: 'Congratulations!',
      category: 'AWARD'
    },
    {
      date: '2024.07.25',
      title: 'D2 student Hirose (Science Tokyo, Hirayama Lab) received a Poster Award at Solid State Ionics 2024 @ London',
      desc: 'Congratulations on the international award!',
      category: 'AWARD'
    },
    {
      date: '2023.11.20',
      title: 'M1 student Onuki received the Outstanding Poster Award at the 13th CSJ Chemistry Festa',
      desc: 'Excellent achievement!',
      category: 'AWARD'
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

      {/* News Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {allNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.05 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== allNews.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="w-12 h-12 rounded-full bg-[#76b900] flex items-center justify-center text-[#000000] font-bold text-sm flex-shrink-0">
                    {news.date.split('.')[1]}
                  </div>

                  {/* News Content */}
                  <div className="flex-1 bg-[#111111] rounded p-6 border border-[#262626] hover:border-[#3a3a3a] transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-sm font-mono text-[#76b900]">{news.date}</div>
                      <div className={`px-3 py-1 text-xs font-mono rounded border ${
                        news.category === 'RESEARCH' ? 'bg-[#76b900]/10 text-[#76b900] border-[#76b900]/20' :
                        news.category === 'CONFERENCE' ? 'bg-purple-400/10 text-purple-400 border-purple-400/20' :
                        news.category === 'SEMINAR' ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' :
                        news.category === 'EXPERIMENT' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                        news.category === 'VISIT' ? 'bg-orange-400/10 text-orange-400 border-orange-400/20' :
                        news.category === 'AWARD' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                        news.category === 'COLLABORATION' ? 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20' :
                        news.category === 'MEMBER' ? 'bg-pink-400/10 text-pink-400 border-pink-400/20' :
                        news.category === 'MEDIA' ? 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20' :
                        'bg-gray-400/10 text-[#9a9a9a] border-gray-400/20'
                      }`}>
                        {news.category}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-[#ffffff] leading-tight">
                      {news.title}
                    </h3>

                    <p className="text-[#cfcfcf] leading-relaxed">
                      {news.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black mb-6">
              <span className="text-[#ffffff]">
                {t('activitySummary')}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: String(allNews.filter((n) => /論文|paper/i.test(n.title)).length), label: t('publications'), color: 'cyan', desc: t('publicationsDesc') },
              { number: String(allNews.filter((n) => n.category === 'AWARD').length), label: t('awards'), color: 'yellow', desc: t('awardsDesc') },
              { number: String(allNews.filter((n) => n.category === 'COLLABORATION').length), label: t('collaborations'), color: 'purple', desc: t('collaborationsDesc') },
              { number: String(allNews.length), label: t('totalNews'), color: 'blue', desc: t('totalNewsDesc') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111111]/90 backdrop-blur-sm border border-[#262626] rounded p-6"
              >
                <div className={`text-4xl font-black text-[#ffffff] mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm font-mono text-[#9a9a9a] tracking-wider mb-1">{stat.label}</div>
                <div className="text-xs text-[#9a9a9a]">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
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
