// Interviews and other articles about Naoki Matsui, picked one by one. Shown on the profile page
// (profile-detail) and the top page's profile section; each item also has its own entry in the news
// list. Newest first. Add a new article here, then a matching news entry with category 'MEDIA'.

export type MediaItem = {
  date: string // YYYY.MM.DD
  url: string
  source: { ja: string; en: string }
  title: { ja: string; en: string }
  summary: { ja: string; en: string }
}

export const MEDIA: MediaItem[] = [
  {
    date: '2026.09.15',
    url: 'https://ion-jamology.jp/news/202408096/',
    source: { ja: '学術変革領域「イオン渋滞学」若手のハイライト', en: 'Ion Jamology (MEXT Transformative Research Area), Young Researcher Highlights' },
    title: { ja: 'インタビュー「異常なくらい没頭していた」', en: 'Interview: "I was absorbed to an unusual degree"' },
    summary: {
      ja: '生物系の研究室から電池研究に転じた経緯、修士1年での2週間の合成修行、博士進学を決めたきっかけ、自分で見つけた材料を持ちたいという思いと、学生へのメッセージについて話しました。',
      en: 'On moving from a biology lab into battery research, a two-week synthesis apprenticeship in the first year of the master\'s course, deciding to go on to a PhD, wanting a material of my own, and a message to students (in Japanese).'
    }
  }
]
