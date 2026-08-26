'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function SimpleNavigation() {
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#101315]/90 backdrop-blur-xl border-b border-[#262b2e]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-base sm:text-lg font-bold text-[#e6e9ea] whitespace-nowrap">
            松井研(菅野鈴木松井研)@東京科学大学
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex flex-wrap gap-x-0.5 gap-y-1 text-xs xl:text-sm">
              <Link href="/#home" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                ホーム
              </Link>
              <Link href="/#research" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                研究概要
              </Link>
              
              {/* Profile Dropdown */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 flex items-center whitespace-nowrap"
                >
                  プロフィール
                  <svg className="ml-0.5 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showProfileDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-[#16191c]/95 backdrop-blur-sm border border-[#3a4247] rounded shadow-lg overflow-hidden min-w-[100px] z-50"
                    onMouseLeave={() => setShowProfileDropdown(false)}
                  >
                    <Link 
                      href="/#profile" 
                      className="block px-3 py-2 text-[#aab3b6] hover:text-[#6fc3cf] hover:bg-[#1c2124] transition-colors text-xs"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      概要
                    </Link>
                    <Link 
                      href="/profile-detail" 
                      className="block px-3 py-2 text-[#aab3b6] hover:text-[#6fc3cf] hover:bg-[#1c2124] transition-colors text-xs"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      詳細
                    </Link>
                  </div>
                )}
              </div>

              {/* News Dropdown */}
              <div className="relative" ref={newsDropdownRef}>
                <button
                  onMouseEnter={() => setShowNewsDropdown(true)}
                  className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 flex items-center whitespace-nowrap"
                >
                  ニュース
                  <svg className="ml-0.5 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showNewsDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-[#16191c]/95 backdrop-blur-sm border border-[#3a4247] rounded shadow-lg overflow-hidden min-w-[100px] z-50"
                    onMouseLeave={() => setShowNewsDropdown(false)}
                  >
                    <Link 
                      href="/#news" 
                      className="block px-3 py-2 text-[#aab3b6] hover:text-[#6fc3cf] hover:bg-[#1c2124] transition-colors text-xs"
                      onClick={() => setShowNewsDropdown(false)}
                    >
                      最新情報
                    </Link>
                    <Link 
                      href="/news" 
                      className="block px-3 py-2 text-[#aab3b6] hover:text-[#6fc3cf] hover:bg-[#1c2124] transition-colors text-xs"
                      onClick={() => setShowNewsDropdown(false)}
                    >
                      詳細
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/publications" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                研究業績
              </Link>
              <Link href="/research-details" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                研究詳細
              </Link>
              <Link href="/learning" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                学習
              </Link>
              <Link href="/access" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                アクセス
              </Link>
              <Link href="/prospective-students" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                研究室希望者へ
              </Link>
              <Link href="/crystal-gallery" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                結晶構造
              </Link>
              <Link href="/links" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                リンク
              </Link>
              <Link href="/tools" className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors px-1 xl:px-1.5 py-1 rounded border border-transparent hover:border-[#6fc3cf]/30 whitespace-nowrap">
                ツール
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden text-[#aab3b6] hover:text-[#6fc3cf] p-2"
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

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4 border-t border-[#262b2e] pt-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <Link 
                href="/#home" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                ホーム
              </Link>
              <Link 
                href="/#research" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                研究概要
              </Link>
              <Link 
                href="/#profile" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                プロフィール概要
              </Link>
              <Link 
                href="/profile-detail" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124] pl-8"
                onClick={() => setShowMobileMenu(false)}
              >
                └ プロフィール詳細
              </Link>
              <Link 
                href="/#news" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                最新情報
              </Link>
              <Link 
                href="/news" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124] pl-8"
                onClick={() => setShowMobileMenu(false)}
              >
                └ ニュース詳細
              </Link>
              <Link 
                href="/publications" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                研究業績
              </Link>
              <Link 
                href="/research-details" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                研究詳細
              </Link>
              <Link 
                href="/learning" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                学習
              </Link>
              <Link 
                href="/access" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                アクセス
              </Link>
              <Link 
                href="/prospective-students" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                研究室希望者へ
              </Link>
              <Link 
                href="/crystal-gallery" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                結晶構造
              </Link>
              <Link 
                href="/links" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                リンク
              </Link>
              <Link 
                href="/tools" 
                className="text-[#aab3b6] hover:text-[#6fc3cf] transition-colors py-2 px-3 rounded hover:bg-[#1c2124]"
                onClick={() => setShowMobileMenu(false)}
              >
                ツール
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}