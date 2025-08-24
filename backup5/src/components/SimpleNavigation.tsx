'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function SimpleNavigation() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [showNewsDropdown, setShowNewsDropdown] = useState(false)
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MATSUI LAB
            </Link>
            <div className="hidden md:flex space-x-1 text-sm">
              <Link href="/#home" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                ホーム
              </Link>
              <Link href="/#research" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                研究概要
              </Link>
              
              {/* Profile Dropdown */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 flex items-center"
                >
                  プロフィール
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showProfileDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg overflow-hidden min-w-[120px]"
                    onMouseLeave={() => setShowProfileDropdown(false)}
                  >
                    <Link 
                      href="/#profile" 
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors text-sm"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      概要
                    </Link>
                    <Link 
                      href="/profile-detail" 
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors text-sm"
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
                  className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30 flex items-center"
                >
                  ニュース
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showNewsDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg overflow-hidden min-w-[120px]"
                    onMouseLeave={() => setShowNewsDropdown(false)}
                  >
                    <Link 
                      href="/#news" 
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors text-sm"
                      onClick={() => setShowNewsDropdown(false)}
                    >
                      最新情報
                    </Link>
                    <Link 
                      href="/news" 
                      className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors text-sm"
                      onClick={() => setShowNewsDropdown(false)}
                    >
                      詳細
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/publications" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                研究業績
              </Link>
              <Link href="/research-details" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                研究詳細
              </Link>
              <Link href="/learning" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                学習
              </Link>
              <Link href="/access" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                アクセス
              </Link>
              <Link href="/prospective-students" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                研究室希望者へ
              </Link>
              <Link href="/crystal-gallery" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                結晶構造
              </Link>
              <Link href="/links" className="text-gray-300 hover:text-cyan-400 transition-colors px-1.5 py-1 rounded border border-transparent hover:border-cyan-400/30">
                リンク
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}