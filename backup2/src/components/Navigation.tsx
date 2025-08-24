'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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
        isScrolled 
          ? 'glass-effect border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
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
                    isActive
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
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              )
            })}
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