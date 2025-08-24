'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/contexts/ThemeContext'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { id: 'home', label: 'ホーム', href: '/' },
    { id: 'research-overview', label: '研究概要', href: '#research-overview' },
    { id: 'profile', label: 'プロフィール', href: '#profile' },
    { id: 'news', label: 'ニュース', href: '#news' },
    { id: 'publications', label: '研究業績', href: '/publications' },
    { id: 'research-details', label: '研究詳細', href: '/research-details' },
    { id: 'study', label: '学習', href: '/study' },
    { id: 'access', label: 'アクセス', href: '/access' },
    { id: 'links', label: 'リンク', href: '/links' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        theme === 'dark' 
          ? isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' 
            : 'bg-black/70 backdrop-blur-sm'
          : isScrolled 
            ? 'glass-effect border-b border-gray-200' 
            : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold cursor-pointer ${
                theme === 'dark' ? 'gradient-text' : 'text-gray-900'
              }`}
            >
              松井直喜 研究室
            </motion.div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = item.href.startsWith('/') 
                ? pathname === item.href 
                : pathname === '/' && item.href.startsWith('#')
              
              return item.href.startsWith('#') ? (
                <motion.a
                  key={item.id}
                  href={item.href}
                  whileHover={{ y: -1 }}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    theme === 'dark'
                      ? isActive
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                      : isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </motion.a>
              ) : (
                <Link key={item.id} href={item.href}>
                  <motion.div
                    whileHover={{ y: -1 }}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg cursor-pointer ${
                      theme === 'dark'
                        ? isActive
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                        : isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              )
            })}
            
            {/* Theme Toggle Switch */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                theme === 'dark' ? 'bg-cyan-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform ${
                  theme === 'dark' ? 'translate-x-9' : 'translate-x-1'
                }`}
              >
                {theme === 'dark' ? (
                  <svg className="h-6 w-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                )}
              </span>
              <span className={`absolute left-1 text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                {theme === 'light' && 'LIGHT'}
              </span>
              <span className={`absolute right-1.5 text-xs font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-400'}`}>
                {theme === 'dark' && 'DARK'}
              </span>
            </motion.button>
          </div>
          
          {/* Mobile menu - simplified */}
          <div className="lg:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}