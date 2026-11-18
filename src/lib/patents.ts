// Published patents only (公開公報・特許公報が出ているもの). Unpublished applications must not be listed.
// Checked against Google Patents on 2026-11-18. Newest first by Japanese publication date.

export type Patent = {
  title: { ja: string; en: string }
  inventors: { ja: string; en: string }
  applicants: { ja: string; en: string }
  jp: string // Japanese publication / patent number as printed
  jpUrl: string
  date: string // Japanese publication date (YYYY.MM.DD)
  granted?: { ja: string; en: string; url: string }
  family?: { label: string; url: string }[] // published foreign counterparts
}

const gp = (n: string) => `https://patents.google.com/patent/${n}`

export const PATENTS: Patent[] = [
  {
    title: { ja: 'フッ化物イオン伝導体、及びフッ化物イオン電池', en: 'Fluoride ion conductor and fluoride ion battery' },
    inventors: { ja: '當寺ヶ盛健志、松井直喜、菅野了次', en: 'T. Tojigamori, N. Matsui, R. Kanno' },
    applicants: { ja: 'トヨタ自動車、東京科学大学', en: 'Toyota Motor Corp., Institute of Science Tokyo' },
    jp: '特開2026-056438', jpUrl: gp('JP2026056438A'), date: '2026.04.01',
    family: [{ label: 'US 2026/0081213 A1', url: gp('US20260081213A1') }, { label: 'CN 121709700 A', url: gp('CN121709700A') }]
  },
  {
    title: { ja: 'フッ化物イオン伝導体、負極合材、及びフッ化物イオン電池', en: 'Fluoride ion conductor, negative electrode mixture and fluoride ion battery' },
    inventors: { ja: '當寺ヶ盛健志、松井直喜、菅野了次', en: 'T. Tojigamori, N. Matsui, R. Kanno' },
    applicants: { ja: 'トヨタ自動車、東京科学大学', en: 'Toyota Motor Corp., Institute of Science Tokyo' },
    jp: '特開2025-183782', jpUrl: gp('JP2025183782A'), date: '2025.12.17',
    family: [{ label: 'US 2025/0379235 A1', url: gp('US20250379235A1') }, { label: 'CN 121076120 A', url: gp('CN121076120A') }]
  },
  {
    title: { ja: 'フッ化物イオン電池', en: 'Fluoride ion battery' },
    inventors: { ja: '志茂祐輔、松井直喜、菅野了次', en: 'Y. Shimo, N. Matsui, R. Kanno' },
    applicants: { ja: 'トヨタ自動車、東京科学大学', en: 'Toyota Motor Corp., Institute of Science Tokyo' },
    jp: '特開2025-144819', jpUrl: gp('JP2025144819A'), date: '2025.10.03'
  },
  {
    title: { ja: '金属水素化物、並びにこれを含むヒドリドイオン伝導体及び電池', en: 'Metal hydride, and hydride ion conductor and battery containing the same' },
    inventors: { ja: '菅野了次、松井直喜、廣瀬隆、伊藤昂史', en: 'R. Kanno, N. Matsui, T. Hirose, T. Ito' },
    applicants: { ja: '東京工業大学（現 東京科学大学）', en: 'Tokyo Institute of Technology (now Institute of Science Tokyo)' },
    jp: '特開2024-127026', jpUrl: gp('JP2024127026A'), date: '2024.09.20'
  },
  {
    title: { ja: 'システム（水素極・金属極とヒドリドイオン伝導体からなる燃料電池・水素貯蔵デバイス）', en: 'System (fuel cell / hydrogen storage device with a solid hydride ion conductor)' },
    inventors: { ja: '菅野了次、松井直喜、廣瀬隆', en: 'R. Kanno, N. Matsui, T. Hirose' },
    applicants: { ja: '東京工業大学（現 東京科学大学）', en: 'Tokyo Institute of Technology (now Institute of Science Tokyo)' },
    jp: '特開2024-127038', jpUrl: gp('JP2024127038A'), date: '2024.09.20'
  },
  {
    title: {
      ja: 'フッ化物イオン電池用負極活物質、フッ化物イオン電池用負極活物質層、フッ化物イオン電池、及びフッ化物イオン電池用負極活物質の製造方法',
      en: 'Anode active material for fluoride ion battery, anode active material layer, fluoride ion battery, and method for producing the anode active material'
    },
    inventors: { ja: '當寺ヶ盛健志、松井直喜', en: 'T. Tojigamori, N. Matsui' },
    applicants: { ja: 'トヨタ自動車、東京工業大学（現 東京科学大学）', en: 'Toyota Motor Corp., Tokyo Institute of Technology (now Institute of Science Tokyo)' },
    jp: '特開2024-099360', jpUrl: gp('JP2024099360A'), date: '2024.07.25',
    granted: { ja: '特許第7736725号（2025年9月登録）', en: 'JP Patent No. 7736725 (granted Sep. 2025)', url: gp('JP7736725B2') },
    family: [
      { label: 'US 2024/0243283 A1', url: gp('US20240243283A1') },
      { label: 'EP 4401171 A1', url: gp('EP4401171A1') },
      { label: 'CN 118335974 A', url: gp('CN118335974A') },
      { label: 'KR 10-2024-0112747 A', url: gp('KR20240112747A') }
    ]
  }
]
