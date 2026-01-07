'use client'

import { Link, usePathname } from '@/i18n/navigation'
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
            Matsui@ISCT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex flex-wrap gap-x-0.5 gap-y-1 text-xs xl:text-sm">
              <Link href="/#home" className="text-gray-300 hover:text-cyan-400 transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 whitespace-nowrap">
                {t('home')}
              </Link>
              <Link href="/#research" className="text-gray-300 hover:text-cyan-400 transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 whitespace-nowrap">
                {t('researchOverview')}
              </Link>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 flex items-center whitespace-nowrap"
                >
                  {t('profile')}
                  <svg className="ml-0.5 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showProfileDropdown && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg overflow-hidden min-w-[100px] z-50"
                    onMouseLeave={() => setShowProfileDropdown(false)}
                  >
                    <Link
                      href="/#profile"
                      className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors text-xs"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      {t('profileOverview')}
                    </Link>
                    <Link
                      href="/profile-detail"
                      className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors text-xs"
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
                  className="text-gray-300 hover:text-cyan-400 transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 flex items-center whitespace-nowrap"
                >
                  {t('news')}
                  <svg className="ml-0.5 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showNewsDropdown && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg overflow-hidden min-w-[100px] z-50"
                    onMouseLeave={() => setShowNewsDropdown(false)}
                  >
                    <Link
                      href="/#news"
                      className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors text-xs"
                      onClick={() => setShowNewsDropdown(false)}
                    >
                      {t('latestNews')}
                    </Link>
                    <Link
                      href="/news"
                      className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors text-xs"
                      onClick={() => setShowNewsDropdown(false)}
                    >
                      {t('newsDetail')}
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/publications" className="text-gray-300 hover:text-cyan-400 transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 whitespace-nowrap">
                {t('publications')}
              </Link>
              <Link href="/research-details" className="text-gray-300 hover:text-cyan-400 transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 whitespace-nowrap">
                {t('researchDetails')}
              </Link>
              <Link href="/access" className="text-gray-300 hover:text-cyan-400 transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 whitespace-nowrap">
                {t('access')}
              </Link>
              <Link href="/prospective-students" className="text-gray-300 hover:text-cyan-400 transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 whitespace-nowrap">
                {t('prospectiveStudents')}
              </Link>
              <Link href="/crystal-gallery" className="text-gray-300 hover:text-cyan-400 transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 whitespace-nowrap">
                {t('crystalGallery')}
              </Link>

              {/* Language Switcher */}
              <Link
                href={pathname}
                locale={otherLocale}
                className="ml-2 px-2 py-1 text-xs font-semibold bg-cyan-400/10 text-cyan-400 rounded border border-cyan-400/30 hover:bg-cyan-400/20 transition-colors whitespace-nowrap"
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
              className="px-2 py-1 text-xs font-semibold bg-cyan-400/10 text-cyan-400 rounded border border-cyan-400/30 hover:bg-cyan-400/20 transition-colors"
            >
              {locale === 'ja' ? 'EN' : 'JA'}
            </Link>

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-gray-300 hover:text-cyan-400 p-2"
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
          <div className="lg:hidden mt-4 border-t border-gray-800 pt-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <Link
                href="/#home"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('home')}
              </Link>
              <Link
                href="/#research"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('researchOverview')}
              </Link>
              <Link
                href="/#profile"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('profileOverview')}
              </Link>
              <Link
                href="/profile-detail"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50 pl-8"
                onClick={() => setShowMobileMenu(false)}
              >
                └ {t('profileDetail')}
              </Link>
              <Link
                href="/#news"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('latestNews')}
              </Link>
              <Link
                href="/news"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50 pl-8"
                onClick={() => setShowMobileMenu(false)}
              >
                └ {t('newsDetail')}
              </Link>
              <Link
                href="/publications"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('publications')}
              </Link>
              <Link
                href="/research-details"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('researchDetails')}
              </Link>
              <Link
                href="/access"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('access')}
              </Link>
              <Link
                href="/prospective-students"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('prospectiveStudents')}
              </Link>
              <Link
                href="/crystal-gallery"
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded hover:bg-gray-800/50"
                onClick={() => setShowMobileMenu(false)}
              >
                {t('crystalGallery')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
