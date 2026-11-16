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
          「Enhanced Room-Temperature Fluoride-Ion Conductivity of β-PbSn1−xInxF4+x」Editor&apos;s Choiceに選ばれました。おめでとう!!
          <a href="https://doi.org/10.5796/electrochemistry.26-00082" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
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
          <a href="https://doi.org/10.1021/jacs.6c00345" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.09.16',
      title: 'Poeppelmeier先生(Northwestern大学)が研究室を訪問',
      desc: '',
      category: 'VISIT'
    },
    {
      date: '2026.09.15',
      title: '亀若さんの筆頭論文がACS Appl. Energy Mater.に掲載',
      desc: (
        <span>
          「Halogen-Dependent Ionic Conductivity in Na11Sn2PS12: Reduction by Cl and Enhancement by Br Substitution」
          <a href="https://doi.org/10.1021/acsaem.6c01715" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
            論文ページ
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.09.03',
      title: 'Poeppelmeier先生(Northwestern大学)の講演を聴講',
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
      desc: '有意義な材料設計の議論をおこないました。',
      category: 'VISIT'
    },
    {
      date: '2026.08.12',
      title: 'M2板倉さんの筆頭論文がSmall Structuresに掲載',
      desc: (
        <span>
          「Unlocking High Fluoride-Ion Conductivity by Regulating the Order-Disorder Transition in Bi-substituted PbSnF4」おめでとう!!
          <a href="https://doi.org/10.1002/sstr.70579" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
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
      desc: '分野の急成長にいつも驚かされます.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.30-08.04',
      title: 'OBのAyuさんが共同研究のため来校',
      desc: '現インドネシア大学講師としてご活躍中。お元気そうで良かったです.',
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
      desc: '大量の高温sweep測定データを獲得しました。',
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
      desc: '私だけフライトが悪天候で飛ばず不参加… 学生さんは楽しめたようで良かったです.',
      category: 'LAB'
    },
    {
      date: '2026.06.14',
      title: '研究室メンバーでBBQを開催',
      desc: '学生さんはお疲れ様でした!',
      category: 'LAB'
    },
    {
      date: '2026.06.12-13',
      title: '渋滞学領域会議@名古屋に参加',
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
      title: '共同研究先@サンフランシスコを訪問',
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
      desc: '最近の取り組みを講演しました。',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.13',
      title: 'NIMSにてアニオン導電性材料の開発を講演',
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
      title: '研究室有志メンバーで高尾山~相模湖までハイキング',
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
          「Fast hydride-ion conduction in complex hydride Ba2MgH6」複合水素化物Ba2MgH6の高速ヒドリドイオン伝導を報告しました。
          <a href="https://doi.org/10.1039/d5ta09966h" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
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
          <a href="https://www.science.org/doi/10.1126/science.adw1996" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
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
          <a href="https://www.jst.go.jp/kisoken/presto/" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
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
      date: '2026.11.14-16',
      title: 'JST PRESTO "Materials Innovation through Understanding and Control of Fluctuations" Area Meeting @ Tokyo',
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
      title: 'Battery Forum @ Seoul National University',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.11.06',
      title: "M2 Student Itakura's First-Author Paper Published in Electrochemistry",
      desc: (
        <span>
          &quot;Enhanced Room-Temperature Fluoride-Ion Conductivity of β-PbSn1−xInxF4+x&quot; Selected as Editor&apos;s Choice. Congratulations!!
          <a href="https://doi.org/10.5796/electrochemistry.26-00082" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.11.02-04',
      title: 'Ion Traffic Jam Area Meeting @ Fukuoka',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.10.28-30',
      title: 'Diffraction Experiments at SPring-8',
      desc: '',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.10.08',
      title: 'Welcome Party for New Members',
      desc: '',
      category: 'LAB'
    },
    {
      date: '2026.09.18',
      title: "Kong's First-Author Paper Published in J. Am. Chem. Soc.",
      desc: (
        <span>
          &quot;Screening Lithium-Ion Conductors Based on Local and Global Topology&quot;
          <a href="https://doi.org/10.1021/jacs.6c00345" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.09.16',
      title: 'Prof. Poeppelmeier (Northwestern University) Visited Our Lab',
      desc: '',
      category: 'VISIT'
    },
    {
      date: '2026.09.15',
      title: "Kamewaka's First-Author Paper Published in ACS Appl. Energy Mater.",
      desc: (
        <span>
          &quot;Halogen-Dependent Ionic Conductivity in Na11Sn2PS12: Reduction by Cl and Enhancement by Br Substitution&quot;
          <a href="https://doi.org/10.1021/acsaem.6c01715" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.09.03',
      title: 'Attended a Lecture by Prof. Poeppelmeier (Northwestern University)',
      desc: '',
      category: 'SEMINAR'
    },
    {
      date: '2026.08.28',
      title: 'Project Meeting @ Kyoto',
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
      title: 'M2 Student Itakura\'s First-Author Paper Published in Small Structures',
      desc: (
        <span>
          &quot;Unlocking High Fluoride-Ion Conductivity by Regulating the Order-Disorder Transition in Bi-substituted PbSnF4&quot; Congratulations!!
          <a href="https://doi.org/10.1002/sstr.70579" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.08.08-16',
      title: 'Obon Holiday',
      desc: '',
      category: 'LAB'
    },
    {
      date: '2026.08.06',
      title: 'Visited the Teshima Laboratory at Shinshu University',
      desc: '',
      category: 'VISIT'
    },
    {
      date: '2026.07.31',
      title: 'Joined a Laboratory Automation Workshop Online',
      desc: 'Always amazed by the rapid growth of this field.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.30-08.04',
      title: 'Alumnus Ayu (now Lecturer at Universitas Indonesia) Visited for Collaboration',
      desc: 'Glad to see they are doing well.',
      category: 'VISIT'
    },
    {
      date: '2026.07.24',
      title: 'Public Symposium on Ion Jamology',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.17-20',
      title: 'Diffraction Experiments at SPring-8 BL02B2',
      desc: 'Acquired a large set of high-temperature sweep measurement data.',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.07.16',
      title: 'First-Semester Research Progress Seminars Began',
      desc: 'Keep up the good work!',
      category: 'SEMINAR'
    },
    {
      date: '2026.07.05-10',
      title: 'Participated in SSI-25th @ Singapore',
      desc: 'Presented in the Young Scientist Award competition. A great experience.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.07.05-10',
      title: 'M2 Students Presented Posters at SSI-25th',
      desc: 'Presented research results at the international conference!',
      category: 'CONFERENCE'
    },
    {
      date: '2026.06.20-21',
      title: 'Lab Retreat @ Hachijojima',
      desc: 'My flight was cancelled due to bad weather... glad the students enjoyed it!',
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
      title: 'Jamology Area Meeting @ Nagoya',
      desc: 'Reported our progress.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.06.11',
      title: 'Hydrogen Research Meeting @ Sendai',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.06.01-04',
      title: 'Visited Collaborators in San Francisco',
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
      title: 'Participated in ECS Meeting @ Seattle',
      desc: 'Reported on combinatorial experiments.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.18-21',
      title: 'International Forum of Solid State Batteries @ Sendai',
      desc: 'Gave a talk on our recent work.',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.13',
      title: 'Lecture at NIMS on Anion-Conducting Materials',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.08-09',
      title: 'PRESTO Area Meeting @ Sendai',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.05.01',
      title: 'Study Session on Sulfide Solid Electrolytes',
      desc: 'Casual discussion over dinner.',
      category: 'SEMINAR'
    },
    {
      date: '2026.04.24-27',
      title: 'Thin-Film XRD Measurements at SPring-8 BL28XU',
      desc: '',
      category: 'EXPERIMENT'
    },
    {
      date: '2026.04.20',
      title: 'New Students Introduced Themselves at the Seminar',
      desc: 'Three new M1 students joined the Suzuki Lab!',
      category: 'MEMBER'
    },
    {
      date: '2026.04.18',
      title: 'Hiking from Mt. Takao to Lake Sagami',
      desc: 'A great refresh with lab members!',
      category: 'LAB'
    },
    {
      date: '2026.04.06',
      title: 'Ion Jamology WG @ Tsukuba International Congress Center',
      desc: '',
      category: 'CONFERENCE'
    },
    {
      date: '2026.03.25',
      title: 'Paper with Alumnus Ayu Published in J. Mater. Chem. A',
      desc: (
        <span>
          &quot;Fast hydride-ion conduction in complex hydride Ba2MgH6&quot; — reporting fast hydride-ion conduction in the complex hydride Ba2MgH6.
          <a href="https://doi.org/10.1039/d5ta09966h" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
            Article
          </a>
        </span>
      ),
      category: 'RESEARCH'
    },
    {
      date: '2026.03.17-19',
      title: 'ECSJ Meeting @ Tokyo Univ. of Science',
      desc: 'Participated as an organizing committee member.',
      category: 'CONFERENCE'
    },
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
          <a href="https://www.science.org/doi/10.1126/science.adw1996" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
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
          <a href="https://www.jst.go.jp/kisoken/presto/" target="_blank" rel="noopener noreferrer" className="text-[#d4ad5a] hover:text-[#e7c97f] underline ml-1">
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
    <div className="min-h-screen bg-[#131a2c] text-[#ece7dc]">
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
              <span className="text-[#ece7dc]">
                {t('title')}
              </span>
            </h1>
            <p className="text-xl text-[#b4b6c0] font-light">{t('subtitle')}</p>
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
                  <div className="w-12 h-12 rounded-full bg-[#d4ad5a] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {news.date.split('.')[1]}
                  </div>

                  {/* News Content */}
                  <div className="flex-1 bg-[#1a2236] rounded p-6 border border-[#2a3550] hover:border-[#3d4a68] transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-sm font-mono text-[#d4ad5a]">{news.date}</div>
                      <div className={`px-3 py-1 text-xs font-mono rounded border ${
                        news.category === 'RESEARCH' ? 'bg-[#d4ad5a]/10 text-[#d4ad5a] border-[#d4ad5a]/20' :
                        news.category === 'CONFERENCE' ? 'bg-purple-400/10 text-purple-400 border-purple-400/20' :
                        news.category === 'SEMINAR' ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' :
                        news.category === 'EXPERIMENT' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                        news.category === 'VISIT' ? 'bg-orange-400/10 text-orange-400 border-orange-400/20' :
                        news.category === 'AWARD' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                        news.category === 'COLLABORATION' ? 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20' :
                        news.category === 'MEMBER' ? 'bg-pink-400/10 text-pink-400 border-pink-400/20' :
                        'bg-gray-400/10 text-[#9a9eae] border-gray-400/20'
                      }`}>
                        {news.category}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white leading-tight">
                      {news.title}
                    </h3>

                    <p className="text-[#b4b6c0] leading-relaxed">
                      {news.desc}
                    </p>

                    {news.hasImage && (
                      <div className="mt-4 p-4 bg-[#202a40]/70 rounded border border-[#3d4a68]/30">
                        <p className="text-[#9a9eae] text-sm italic">
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
      <section className="py-16 bg-[#1a2236]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black mb-6">
              <span className="text-[#ece7dc]">
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
                className="bg-[#1a2236]/90 backdrop-blur-sm border border-[#2a3550] rounded p-6"
              >
                <div className={`text-4xl font-black text-[#ece7dc] mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm font-mono text-[#9a9eae] tracking-wider mb-1">{stat.label}</div>
                <div className="text-xs text-[#767c90]">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-[#ece7dc] text-[#131a2c] px-4 py-2 rounded shadow-lg transition-all duration-300">
          {tCommon('backToHome')}
        </Link>
      </div>
    </div>
  )
}
