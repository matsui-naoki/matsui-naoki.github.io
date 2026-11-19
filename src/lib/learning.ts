// Learning sections and their documents (Markdown in public/content). Each document is rendered
// to static HTML at build time and served at /learning/<section>/<doc>; /learning/<section> shows
// the first document.

export type LearningDoc = { slug: string; title: string; sub: string; icon: string; file: string }
export type LearningSection = {
  slug: string
  title: string
  subtitle: string
  points: string[]
  resources?: string[]
  docs: LearningDoc[]
}

export const SECTIONS: LearningSection[] = [
  {
    slug: 'solid-state-ionics',
    title: '固体イオニクス基礎',
    subtitle: '固体中のイオン伝導現象の基本原理と応用',
    points: ['基礎理論から順番に学習', '数式の導出過程を理解', '実験データとの対応を確認', '関連論文で理解を深める'],
    docs: [
      { slug: 'solid-state-ionics', title: '固体イオニクスの基礎理論', sub: '基礎理論・欠陥化学・拡散機構', icon: 'ION', file: 'solid-state-ionics.md' },
      { slug: 'fluoride-ion-conductor', title: 'フッ化物イオン伝導体', sub: '材料設計・合成・評価手法', icon: 'BAT', file: 'fluoride-ion-conductor.md' },
      { slug: 'battery-performance', title: '電池性能と評価', sub: '電池特性・インピーダンス解析', icon: 'PERF', file: 'battery-performance.md' }
    ]
  },
  {
    slug: 'experimental',
    title: '実験技術',
    subtitle: '電池材料研究に必要な実験技術と測定手法',
    points: ['測定原理の理解', '装置の使い方と注意点', 'データ解析手法の習得', 'トラブルシューティング'],
    docs: [
      { slug: 'structure-analysis', title: '構造解析技術', sub: 'XRD・中性子回折・Rietveld解析', icon: 'STRUCT', file: 'structure-analysis.md' },
      { slug: 'electrochemical-measurement', title: '電気化学測定', sub: 'インピーダンス・CV・充放電測定', icon: 'ELEC', file: 'electrochemical-measurement.md' }
    ]
  },
  {
    slug: 'computational-materials',
    title: '電池材料の材料計算科学',
    subtitle: '第一原理計算と分子動力学による材料設計',
    points: ['理論の理解から始める', '実際にコードを実行', 'パラメータの意味を理解', '計算結果の解釈方法を習得'],
    resources: ['VASP公式マニュアル', 'Materials Project', 'TSUBAME Portal', '計算化学フォーラム'],
    docs: [
      { slug: 'dft-vasp', title: 'DFT計算とVASP', sub: '密度汎関数理論・VASP実践', icon: 'DFT', file: 'dft-vasp.md' },
      { slug: 'molecular-dynamics', title: '分子動力学シミュレーション', sub: 'MD計算の基礎と応用', icon: 'MD', file: 'moleculer-dynamics.md' },
      { slug: 'tsubame4', title: 'TSUBAME4.0の使い方', sub: 'スパコン活用ガイド', icon: 'HPC', file: 'tsubame4.md' }
    ]
  },
  {
    slug: 'materials-informatics',
    title: '電池材料インフォマティクス',
    subtitle: '機械学習とデータサイエンスを活用した材料探索の理論と実践',
    points: ['データ前処理の重要性を理解', '適切な特徴量の選択方法', '過学習を避ける手法の習得', '実データでの検証方法'],
    docs: [
      { slug: 'properties-prediction', title: '物性予測', sub: '回帰・分類・記述子設計', icon: 'PROP', file: 'materials-informatics-properties-prediction.md' },
      { slug: 'synthesizability', title: '合成可能性', sub: '合成可能性の予測と評価', icon: 'SYNTH', file: 'materials-infomatics-synthesizability.md' },
      { slug: 'structure-generation', title: '構造生成', sub: 'AI駆動の新材料探索', icon: 'GEN', file: 'materials-infomatics-structure-generation.md' },
      { slug: 'graph-neural-network', title: 'グラフニューラルネットワーク', sub: 'GNN・CGCNN・材料への応用', icon: 'GNN', file: 'materials-infomatics-graph-neural-netwok.md' }
    ]
  },
  {
    slug: 'research-skills',
    title: '研究スキル向上',
    subtitle: '研究活動に必要な基本スキルと可視化技術の習得',
    points: ['研究計画の立て方', 'スライドと図の作り方', '3D可視化技術の習得', 'プログラミングによる効率化'],
    docs: [
      { slug: 'research-howto', title: '研究の進め方', sub: '効率的な研究の進め方とコツ', icon: 'HOW', file: 'research-howto.md' },
      { slug: 'blender-basic', title: 'Blender基礎', sub: '3Dモデリングの基礎', icon: '3D', file: 'blender-basic.md' },
      { slug: 'blender-python', title: 'Blender Python', sub: 'Pythonスクリプトによる自動化', icon: 'PY', file: 'blender-python.md' }
    ]
  }
]

export const findSection = (slug: string) => SECTIONS.find((s) => s.slug === slug)
