'use client'

import { Link, usePathname } from '@/i18n/navigation'
import NextLink from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useRef, useEffect } from 'react'

export default function LocaleNavigation() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const pathname = usePathname()

  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [showNewsDropdown, setShowNewsDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const profileDropdownRef = useRef<HTMLDivElement>(null)
  const newsDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false)
      }
      if (newsDropdownRef.current && !newsDropdownRef.current.contains(event.target as Node)) {
        setShowNewsDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const otherLocale = locale === 'ja' ? 'en' : 'ja'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#131a2c]/90 backdrop-blur-xl border-b border-[#2a3550]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="min-w-0 truncate text-[#ece7dc] hover:text-[#d4ad5a] transition-colors whitespace-nowrap">
            <span className="font-serif font-bold text-lg sm:text-xl tracking-[0.06em]">{locale === 'ja' ? '松井研究室' : 'Matsui Lab'}</span>
            <span className="hidden sm:inline lg:hidden 2xl:inline ml-3 text-sm text-[#9a9eae]">
              {locale === 'ja' ? '菅野・鈴木・松井研｜東京科学大学' : 'Kanno–Suzuki–Matsui Lab, Institute of Science Tokyo'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex flex-wrap gap-x-1 gap-y-1 text-sm xl:text-[15px]">
              <Link href="/#home" className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent whitespace-nowrap">
                {t('home')}
              </Link>
              <Link href="/#research" className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent whitespace-nowrap">
                {t('researchOverview')}
              </Link>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent flex items-center whitespace-nowrap"
                >
                  {t('profile')}
                  <svg className="ml-0.5 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showProfileDropdown && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-[#1a2236]/95 backdrop-blur-sm border border-[#2a3550] rounded shadow-lg overflow-hidden min-w-[100px] z-50"
                    onMouseLeave={() => setShowProfileDropdown(false)}
                  >
                    <Link
                      href="/#profile"
                      className="block px-3 py-2 text-[#b4b6c0] hover:text-[#d4ad5a] hover:bg-[#202a40] transition-colors text-sm"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      {t('profileOverview')}
                    </Link>
                    <Link
                      href="/profile-detail"
                      className="block px-3 py-2 text-[#b4b6c0] hover:text-[#d4ad5a] hover:bg-[#202a40] transition-colors text-sm"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      {t('profileDetail')}
                    </Link>
                  </div>
                )}
              </div>

              {/* News Dropdown */}
              <div className="relative" ref={newsDropdownRef}>
                <button
                  onMouseEnter={() => setShowNewsDropdown(true)}
                  className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent flex items-center whitespace-nowrap"
                >
                  {t('news')}
                  <svg className="ml-0.5 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showNewsDropdown && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-[#1a2236]/95 backdrop-blur-sm border border-[#2a3550] rounded shadow-lg overflow-hidden min-w-[100px] z-50"
                    onMouseLeave={() => setShowNewsDropdown(false)}
                  >
                    <Link
                      href="/#news"
                      className="block px-3 py-2 text-[#b4b6c0] hover:text-[#d4ad5a] hover:bg-[#202a40] transition-colors text-sm"
                      onClick={() => setShowNewsDropdown(false)}
                    >
                      {t('latestNews')}
                    </Link>
                    <Link
                      href="/news"
                      className="block px-3 py-2 text-[#b4b6c0] hover:text-[#d4ad5a] hover:bg-[#202a40] transition-colors text-sm"
                      onClick={() => setShowNewsDropdown(false)}
                    >
                      {t('newsDetail')}
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/publications" className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent whitespace-nowrap">
                {t('publications')}
              </Link>
              <Link href="/research-details" className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent whitespace-nowrap">
                {t('researchDetails')}
              </Link>
              <Link href="/access" className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent whitespace-nowrap">
                {t('access')}
              </Link>
              <Link href="/prospective-students" className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent whitespace-nowrap">
                {t('prospectiveStudents')}
              </Link>
              <Link href="/crystal-gallery" className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent whitespace-nowrap">
                {t('crystalGallery')}
              </Link>
              <NextLink href="/learning" className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent whitespace-nowrap">
                {t('learning')}
              </NextLink>
              <NextLink href="/links" className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-transparent whitespace-nowrap">
                {t('links')}
              </NextLink>

              {/* Language Switcher */}
              <Link
                href={pathname}
                locale={otherLocale}
                className="ml-2 px-2 py-1 text-sm font-semibold text-[#d4ad5a] rounded border border-[#3d4a68] hover:border-[#d4ad5a] transition-colors whitespace-nowrap"
              >
                {locale === 'ja' ? 'EN' : 'JA'}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Language Switcher (Mobile) */}
            <Link
              href={pathname}
              locale={otherLocale}
              className="px-2 py-1 text-xs font-semibold text-[#d4ad5a] rounded border border-[#3d4a68] hover:border-[#d4ad5a] transition-colors"
            >
              {locale === 'ja' ? 'EN' : 'JA'}
            </Link>

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-[#b4b6c0] hover:text-[#d4ad5a] p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showMobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4 border-t border-[#2a3550] pt-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <Link
                href="/#home"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('home')}
              </Link>
              <Link
                href="/#research"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('researchOverview')}
              </Link>
              <Link
                href="/#profile"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('profileOverview')}
              </Link>
              <Link
                href="/profile-detail"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40] pl-8"
                onClick={() => setShowMobileMenu(false)}
              >
                └ {t('profileDetail')}
              </Link>
              <Link
                href="/#news"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('latestNews')}
              </Link>
              <Link
                href="/news"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40] pl-8"
                onClick={() => setShowMobileMenu(false)}
              >
                └ {t('newsDetail')}
              </Link>
              <Link
                href="/publications"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('publications')}
              </Link>
              <Link
                href="/research-details"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('researchDetails')}
              </Link>
              <Link
                href="/access"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('access')}
              </Link>
              <Link
                href="/prospective-students"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('prospectiveStudents')}
              </Link>
              <Link
                href="/crystal-gallery"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('crystalGallery')}
              </Link>
              <NextLink
                href="/learning"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('learning')}
              </NextLink>
              <NextLink
                href="/links"
                className="text-[#b4b6c0] hover:text-[#d4ad5a] transition-colors py-2 px-3 rounded hover:bg-[#202a40]"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('links')}
              </NextLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
