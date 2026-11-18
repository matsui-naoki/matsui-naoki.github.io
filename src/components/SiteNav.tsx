'use client'

// Site header shared by LocaleNavigation (ja/en pages) and SimpleNavigation (Japanese-only pages).
// Groups open on hover, on keyboard focus and on tap (focus-within), so they work without a mouse.
// All hrefs are absolute paths that already include the locale where needed.

import NextLink from 'next/link'
import { ReactNode, useState } from 'react'

export type NavLink = { label: string; href: string }
export type NavItem = NavLink | { label: string; children: NavLink[] }

const top = 'text-[#cfcfcf] hover:text-[#76b900] transition-colors px-1.5 xl:px-2 py-1 rounded whitespace-nowrap'

export default function SiteNav({
  homeHref, brand, sub, items, langSwitch
}: {
  homeHref: string
  brand: string
  sub: string
  items: NavItem[]
  langSwitch?: ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <NextLink href={homeHref} className="min-w-0 truncate text-[#ffffff] hover:text-[#76b900] transition-colors whitespace-nowrap">
            <span className="font-serif font-bold text-lg sm:text-xl tracking-[0.06em]">{brand}</span>
            <span className="hidden sm:inline lg:hidden 2xl:inline ml-3 text-sm text-[#9a9a9a]">{sub}</span>
          </NextLink>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-x-0.5 text-sm xl:text-[15px]">
            {items.map((it) =>
              'children' in it ? (
                <div key={it.label} className="relative group">
                  <button type="button" aria-haspopup="true" className={`${top} flex items-center`}>
                    {it.label}
                    <svg className="ml-0.5 w-3 h-3 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* pt-1 bridges the gap so the menu stays open while the pointer moves down */}
                  <div className="absolute left-0 top-full pt-1 hidden group-hover:block group-focus-within:block z-50">
                    <div className="bg-[#111111]/95 backdrop-blur-sm border border-[#262626] rounded shadow-lg overflow-hidden min-w-[9rem] py-1">
                      {it.children.map((c) => (
                        <NextLink key={c.href} href={c.href} className="block px-4 py-2 text-[#cfcfcf] hover:text-[#76b900] hover:bg-[#1a1a1a] focus:bg-[#1a1a1a] focus:text-[#76b900] outline-none transition-colors text-sm whitespace-nowrap">
                          {c.label}
                        </NextLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NextLink key={it.href} href={it.href} className={top}>{it.label}</NextLink>
              )
            )}
            {langSwitch && <span className="ml-2">{langSwitch}</span>}
          </div>

          {/* Mobile button */}
          <div className="lg:hidden flex items-center gap-2">
            {langSwitch}
            <button type="button" onClick={() => setOpen(!open)} className="text-[#cfcfcf] hover:text-[#76b900] p-2" aria-expanded={open} aria-label="メニュー">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-4 border-t border-[#262626] pt-3 max-h-[calc(100vh-80px)] overflow-y-auto">
            {items.map((it) =>
              'children' in it ? (
                <div key={it.label} className="py-1">
                  <p className="px-3 pt-2 pb-1 text-xs text-[#9a9a9a]">{it.label}</p>
                  {it.children.map((c) => (
                    <NextLink key={c.href} href={c.href} onClick={() => setOpen(false)} className="block py-2 pl-6 pr-3 rounded text-[#cfcfcf] hover:text-[#76b900] hover:bg-[#1a1a1a]">
                      {c.label}
                    </NextLink>
                  ))}
                </div>
              ) : (
                <NextLink key={it.href} href={it.href} onClick={() => setOpen(false)} className="block py-2 px-3 rounded text-[#cfcfcf] hover:text-[#76b900] hover:bg-[#1a1a1a]">
                  {it.label}
                </NextLink>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
