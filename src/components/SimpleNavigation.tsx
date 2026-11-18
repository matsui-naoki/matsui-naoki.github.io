'use client'

// Header for the Japanese-only pages outside [locale] (learning, apps, links, crystal categories).
// Same menu as LocaleNavigation, with Japanese labels and links into /ja/....

import SiteNav, { NavItem } from './SiteNav'

const ITEMS: NavItem[] = [
  { label: 'ホーム', href: '/ja#home' },
  { label: '研究', children: [
    { label: '研究概要', href: '/ja#research' },
    { label: '研究詳細', href: '/ja/research-details' },
    { label: '研究業績', href: '/ja/publications' }
  ] },
  { label: 'プロフィール', children: [
    { label: '概要', href: '/ja#profile' },
    { label: '詳細', href: '/ja/profile-detail' }
  ] },
  { label: 'ニュース', children: [
    { label: '最新情報', href: '/ja#news' },
    { label: '一覧', href: '/ja/news' }
  ] },
  { label: '学習', children: [
    { label: '学習リソース', href: '/learning' },
    { label: '結晶構造', href: '/ja/crystal-gallery' }
  ] },
  { label: 'アプリ', href: '/tools' },
  { label: 'アクセス', href: '/ja/access' },
  { label: '研究室希望者へ', href: '/ja/prospective-students' },
  { label: 'リンク', href: '/links' }
]

export default function SimpleNavigation() {
  return <SiteNav homeHref="/ja" brand="松井研究室" sub="菅野・鈴木・松井研｜東京科学大学" items={ITEMS} />
}
