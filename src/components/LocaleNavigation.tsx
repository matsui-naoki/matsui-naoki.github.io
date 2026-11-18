'use client'

// Header for the bilingual pages under [locale]. Menu structure lives in SiteNav.

import { Link, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import SiteNav, { NavItem } from './SiteNav'

export default function LocaleNavigation() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const pathname = usePathname()
  const ja = locale === 'ja'
  const L = `/${ja ? 'ja' : 'en'}`

  const items: NavItem[] = [
    { label: t('home'), href: `${L}#home` },
    { label: t('research'), children: [
      { label: t('researchMenuOverview'), href: `${L}#research` },
      { label: t('researchMenuDetails'), href: `${L}/research-details` },
      { label: t('researchMenuPublications'), href: `${L}/publications` }
    ] },
    { label: t('profile'), children: [
      { label: t('profileOverview'), href: `${L}#profile` },
      { label: t('profileDetail'), href: `${L}/profile-detail` }
    ] },
    { label: t('news'), children: [
      { label: t('latestNews'), href: `${L}#news` },
      { label: t('newsDetail'), href: `${L}/news` }
    ] },
    { label: t('learning'), children: [
      { label: t('learningResources'), href: '/learning' },
      { label: t('crystalGallery'), href: `${L}/crystal-gallery` }
    ] },
    { label: t('apps'), href: '/tools' },
    { label: t('access'), href: `${L}/access` },
    { label: t('prospectiveStudents'), href: `${L}/prospective-students` },
    { label: t('links'), href: '/links' }
  ]

  return (
    <SiteNav
      homeHref={L}
      brand={ja ? '松井研究室' : 'Matsui Lab'}
      sub={ja ? '菅野・鈴木・松井研｜東京科学大学' : 'Kanno–Suzuki–Matsui Lab, Institute of Science Tokyo'}
      items={items}
      langSwitch={
        <Link href={pathname} locale={ja ? 'en' : 'ja'} className="px-2 py-1 text-xs lg:text-sm font-semibold text-[#76b900] rounded border border-[#3a3a3a] hover:border-[#76b900] transition-colors whitespace-nowrap">
          {ja ? 'EN' : 'JA'}
        </Link>
      }
    />
  )
}
