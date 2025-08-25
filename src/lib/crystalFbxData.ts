export interface CrystalFbxData {
  name: string
  formula: string
  description: string
  properties: string
  fbxFile: string
  category: 'lithium' | 'fluoride' | 'hydride' | 'others'
}

export const lithiumCrystals: CrystalFbxData[] = [
  {
    name: 'Li10GeP2S12',
    formula: 'Li10GeP2S12',
    description: '最高のイオン伝導率を示すLGPS構造系',
    properties: '10 mS/cm以上の高伝導率',
    fbxFile: '/structure/Li10GeP2S12.fbx',
    category: 'lithium'
  },
  {
    name: 'Li6PS5Cl',
    formula: 'Li6PS5Cl',
    description: 'アルジロダイト型構造',
    properties: 'ベンチマーク',
    fbxFile: '/structure/Li6PS5Cl.fbx',
    category: 'lithium'
  },
  {
    name: 'Li7La3Zr2O12 (LLZO)',
    formula: 'Li7La3Zr2O12',
    description: 'ガーネット型構造',
    properties: '金属リチウムに対して安定',
    fbxFile: '/structure/Li7La3Zr2O12.fbx',
    category: 'lithium'
  },
  {
    name: 'Li7P3S11',
    formula: 'Li7P3S11',
    description: 'ガラスセラミック電解質',
    properties: '室温で17 mS/cmの超高伝導率',
    fbxFile: '/structure/Li7P3S11.fbx',
    category: 'lithium'
  },
  {
    name: 'Li3YCl6',
    formula: 'Li3YCl6',
    description: 'ハライド系固体電解質',
    properties: '高電圧正極に対して安定',
    fbxFile: '/structure/Li3YCl6.fbx',
    category: 'lithium'
  },
  {
    name: 'LiNbOCl4',
    formula: 'LiNbOCl4',
    description: '新規酸塩化物系',
    properties: '高電圧安定性と柔軟性',
    fbxFile: '/structure/LiNbOCl4.fbx',
    category: 'lithium'
  },
  {
    name: 'Li1.25La0.58Nb2O6F',
    formula: 'Li1.25La0.58Nb2O6F',
    description: 'パイロクロア',
    properties: 'パイロクロア',
    fbxFile: '/structure/Li1.25La0.58Nb2O6F.fbx',
    category: 'lithium'
  },
  {
    name: 'Li2FeCl4',
    formula: 'Li2FeCl4',
    description: '塩化物系電解質',
    properties: 'Spinel関連',
    fbxFile: '/structure/Li2FeCl4.fbx',
    category: 'lithium'
  },
  {
    name: 'Li0.33La0.56TiO3 (LLTO)',
    formula: 'Li0.33La0.56TiO3',
    description: 'ペロブスカイト型構造',
    properties: 'バルクで高伝導率',
    fbxFile: '/structure/LLTO.fbx',
    category: 'lithium'
  },
  {
    name: 'LiCoO2',
    formula: 'LiCoO2',
    description: '層状酸化物正極',
    properties: '商用リチウムイオン電池の標準正極',
    fbxFile: '/structure/LiCoO2_2.fbx',
    category: 'lithium'
  },
  {
    name: 'LiFePO4',
    formula: 'LiFePO4',
    description: 'オリビン型正極',
    properties: '安全性と長寿命を実現',
    fbxFile: '/structure/LiFePO4.fbx',
    category: 'lithium'
  },
  {
    name: 'Li2MnO3',
    formula: 'Li2MnO3',
    description: '高容量正極材料',
    properties: 'リチウム過剰系正極の基本構造',
    fbxFile: '/structure/Li2MnO3.fbx',
    category: 'lithium'
  },
  {
    name: 'Li4Ti5O12',
    formula: 'Li4Ti5O12',
    description: 'スピネル型負極',
    properties: 'ゼロストレイン材料',
    fbxFile: '/structure/Li4Ti5O12_spinel.fbx',
    category: 'lithium'
  },
  {
    name: 'Na3Zr2Si2PO12 (NASICON)',
    formula: 'Na3Zr2Si2PO12',
    description: 'NASICON型構造',
    properties: '3次元イオン伝導パス',
    fbxFile: '/structure/NASICON.fbx',
    category: 'lithium'
  }
]

export const fluorideCrystals: CrystalFbxData[] = [
  {
    name: 'LaF3',
    formula: 'LaF3',
    description: 'タイソナイト型構造',
    properties: '高温でフッ化物イオン伝導',
    fbxFile: '/structure/LaF3.fbx',
    category: 'fluoride'
  },
  {
    name: 'Ba0.6La0.4F2.4',
    formula: 'Ba0.6La0.4F2.4',
    description: 'フッ化物固溶体',
    properties: '中程度の伝導率',
    fbxFile: '/structure/Ba0.6La0.4F2.4.fbx',
    category: 'fluoride'
  },
  {
    name: 'BaLiF3',
    formula: 'BaLiF3',
    description: '逆ペロブスカイト型',
    properties: 'フッ化物イオン伝導体',
    fbxFile: '/structure/BaLiF3.fbx',
    category: 'fluoride'
  },
  {
    name: 'KSn2F5',
    formula: 'KSn2F5',
    description: '層状フッ化物',
    properties: '2次元フッ化物イオン伝導',
    fbxFile: '/structure/KSn2F5.fbx',
    category: 'fluoride'
  },
  {
    name: 'β-PbSnF4',
    formula: 'PbSnF4',
    description: 'フッ化物超イオン伝導体',
    properties: '室温で高伝導率',
    fbxFile: '/structure/t-PbSnF4.fbx',
    category: 'fluoride'
  },
  {
    name: 'BaEr2F8',
    formula: 'BaEr2F8',
    description: '希土類フッ化物',
    properties: '複雑な結晶構造',
    fbxFile: '/structure/BaEr2F8.fbx',
    category: 'fluoride'
  },
  {
    name: 'KYb2F7',
    formula: 'KYb2F7',
    description: '希土類複合フッ化物',
    properties: '特異な配位環境',
    fbxFile: '/structure/KYb2F7.fbx',
    category: 'fluoride'
  },
  {
    name: 'Y2CF2',
    formula: 'Y2CF2',
    description: '酸フッ化物系',
    properties: 'アニオン複合材料',
    fbxFile: '/structure/Y2CF2.fbx',
    category: 'fluoride'
  }
]

export const hydrideCrystals: CrystalFbxData[] = [
  {
    name: 'Ba0.5Ca0.35Na0.15H1.85',
    formula: 'Ba0.5Ca0.35Na0.15H1.85',
    description: '複合カチオン系ヒドリド',
    properties: '室温でヒドリドイオン伝導',
    fbxFile: '/structure/Ba0.5Ca0.35Na0.15H1.85.fbx',
    category: 'hydride'
  },
  {
    name: 'Ba-Ca-Na-H系',
    formula: 'BaCaNaH',
    description: '三元系ヒドリド',
    properties: '新規ヒドリドイオン伝導体',
    fbxFile: '/structure/BaCaNaH.fbx',
    category: 'hydride'
  },
  {
    name: 'SrLiH3',
    formula: 'SrLiH3',
    description: 'ペロブスカイト型ヒドリド',
    properties: '高温でイオン伝導',
    fbxFile: '/structure/SrLiH3.fbx',
    category: 'hydride'
  },
  {
    name: 'La-Sr-Li-H-O系',
    formula: 'La1.136Sr0.864LiH1.872O2.128',
    description: '酸水素化物',
    properties: 'アニオン複合伝導体',
    fbxFile: '/structure/La1.136Sr0.864LiH1.872O2.128.fbx',
    category: 'hydride'
  }
]

export const otherCrystals: CrystalFbxData[] = [
  {
    name: 'α-AgI',
    formula: 'AgI',
    description: '銀イオン伝導体',
    properties: '室温相',
    fbxFile: '/structure/alpha-AgI.fbx',
    category: 'others'
  },
  {
    name: 'β-AgI',
    formula: 'AgI',
    description: '超イオン伝導体',
    properties: '高温で異常に高い伝導率',
    fbxFile: '/structure/beta-AgI.fbx',
    category: 'others'
  },
  {
    name: 'β-Al2O3',
    formula: 'β-Al2O3',
    description: 'ナトリウムイオン伝導体',
    properties: '2次元イオン伝導層',
    fbxFile: '/structure/beta-alumina.fbx',
    category: 'others'
  },
  {
    name: 'グラファイト',
    formula: 'C',
    description: '層状炭素材料',
    properties: 'リチウムイオン電池負極',
    fbxFile: '/structure/Graphite.fbx',
    category: 'others'
  },
  {
    name: 'ホランダイト型',
    formula: 'K1.54Mg0.77Ti7.23O16',
    description: 'カリウムイオン伝導体',
    properties: '1次元トンネル構造',
    fbxFile: '/structure/K1.54Mg0.77Ti7.23O16.fbx',
    category: 'others'
  },
  {
    name: 'Rb4Cu16I7Cl13',
    formula: 'Rb4Cu16I7Cl13',
    description: '銅ハライド系',
    properties: '混合アニオン超イオン伝導体',
    fbxFile: '/structure/Rb4Cu16I7Cl13.fbx',
    category: 'others'
  },
  {
    name: 'ReO3',
    formula: 'ReO3',
    description: 'レニウム酸化物',
    properties: '基本構造ユニット',
    fbxFile: '/structure/ReO3-unit.fbx',
    category: 'others'
  },
  {
    name: 'Ba2In2O5',
    formula: 'Ba2In2O5',
    description: 'ブラウンミラライト型',
    properties: 'プロトン伝導体前駆体',
    fbxFile: '/structure/Ba2In2O5.fbx',
    category: 'others'
  }
]

export const allCrystals: CrystalFbxData[] = [
  ...lithiumCrystals,
  ...fluorideCrystals,
  ...hydrideCrystals,
  ...otherCrystals
]

export const getCrystalsByCategory = (category: 'lithium' | 'fluoride' | 'hydride' | 'others') => {
  switch (category) {
    case 'lithium':
      return lithiumCrystals
    case 'fluoride':
      return fluorideCrystals
    case 'hydride':
      return hydrideCrystals
    case 'others':
      return otherCrystals
    default:
      return []
  }
}