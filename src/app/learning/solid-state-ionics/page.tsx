'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'

// Define the markdown file mappings
const markdownFiles = [
  {
    id: 'solid-state-ionics',
    title: '固体イオニクスの基礎理論',
    file: '/content/solid-state-ionics.md',
    icon: '⚛️',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'fluoride-ion-conductor',
    title: 'フッ化物イオン伝導体',
    file: '/content/fluoride-ion-conductor.md',
    icon: '🔋',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'battery-performance',
    title: '電池性能と評価',
    file: '/content/battery-performance.md',
    icon: '📊',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function SolidStateIonics() {
  const [selectedContent, setSelectedContent] = useState(markdownFiles[0])
  const [markdownContent, setMarkdownContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadMarkdown = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(selectedContent.file)
        const text = await response.text()
        setMarkdownContent(text)
      } catch (error) {
        console.error('Error loading markdown:', error)
        setMarkdownContent('# エラー\nコンテンツの読み込みに失敗しました。')
      } finally {
        setIsLoading(false)
      }
    }
    loadMarkdown()
  }, [selectedContent])

  // Convert markdown to HTML (basic conversion)
  const renderMarkdown = (content: string) => {
    // This is a simple markdown parser - you might want to use a library like marked or react-markdown
    let html = content
    
    // Process tables FIRST (before other replacements)
    const tableRegex = /\|(.+)\|\n\|[\s\-:|]+\|\n((?:\|.+\|\n?)+)/gm
    html = html.replace(tableRegex, (match, header, body) => {
      // Parse header
      const headers = header.split('|').filter((h: string) => h.trim())
      const headerCells = headers.map((h: string) => 
        `<th class="border border-gray-700 px-4 py-2 bg-gray-800 text-cyan-400 font-semibold">${h.trim()}</th>`
      ).join('')
      
      // Parse body rows
      const rows = body.trim().split('\n').map((row: string) => {
        const cells = row.split('|').filter((c: string) => c.trim())
        const cellsHtml = cells.map((c: string) => 
          `<td class="border border-gray-700 px-4 py-2 text-gray-300">${c.trim()}</td>`
        ).join('')
        return `<tr class="hover:bg-gray-800/50">${cellsHtml}</tr>`
      }).join('')
      
      return `<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border border-gray-700 rounded-lg overflow-hidden">
        <thead><tr>${headerCells}</tr></thead>
        <tbody>${rows}</tbody>
      </table></div>`
    })
    
    // Headers
    html = html.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mt-4 mb-2 text-blue-400">$1</h4>')
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3 text-cyan-400">$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-white">$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-black mt-8 mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">$1</h1>')
    
    // Bold and italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="font-bold text-cyan-300"><em>$1</em></strong>')
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-cyan-300">$1</strong>')
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    
    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2 text-gray-300 list-disc">$1</li>')
    html = html.replace(/^- (.*$)/gim, '<li class="ml-6 mb-2 text-gray-300 list-disc">$1</li>')
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 text-gray-300 list-decimal">$1</li>')
    
    // Code blocks
    html = html.replace(/```([^`]+)```/g, '<pre class="bg-gray-900 border border-gray-700 rounded-lg p-4 my-4 overflow-x-auto"><code class="text-cyan-300 font-mono text-sm">$1</code></pre>')
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-cyan-300 px-1 py-0.5 rounded font-mono text-sm">$1</code>')
    
    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr class="border-gray-700 my-8">')
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-cyan-400 pl-4 my-4 text-gray-400 italic">$1</blockquote>')
    
    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p class="mb-4 text-gray-300 leading-relaxed">')
    html = '<p class="mb-4 text-gray-300 leading-relaxed">' + html + '</p>'
    
    // Fix list wrapping
    html = html.replace(/(<li[^>]*>.*<\/li>\s*)+/g, function(match) {
      if (match.includes('list-decimal')) {
        return '<ol class="my-4">' + match + '</ol>'
      }
      return '<ul class="my-4">' + match + '</ul>'
    })
    
    // Superscript and subscript
    html = html.replace(/<sup>(.*?)<\/sup>/g, '<sup class="text-xs">$1</sup>')
    html = html.replace(/<sub>(.*?)<\/sub>/g, '<sub class="text-xs">$1</sub>')
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyan-400 hover:text-cyan-300 underline">$1</a>')
    
    // Images (markdown style)
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg my-4 mx-auto">')
    
    // Process HTML img tags that are already in the markdown
    html = html.replace(/<img\s+src="([^"]+)"\s+alt="([^"]+)"[^>]*>/g, '<img src="$1" alt="$2" class="max-w-full h-auto rounded-lg my-4 mx-auto">')
    
    // Style div containers for images
    html = html.replace(/<div\s+class="large-photo-container">/g, '<div class="flex justify-center my-8">')
    html = html.replace(/<div\s+class="large-photo-panel">/g, '<div class="text-center">')
    
    return html
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-4xl font-black mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  固体イオニクス基礎
                </span>
              </h1>
              <p className="text-gray-400">固体中のイオン伝導現象の基本原理と応用</p>
            </div>
            <Link
              href="/learning"
              className="px-4 py-2 border border-cyan-400/30 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors"
            >
              ← 学習ページに戻る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-80 bg-gray-900/50 border-r border-gray-800">
          <div className="sticky top-20 p-6">
            <h2 className="text-lg font-bold mb-4 text-cyan-400">目次</h2>
            <nav className="space-y-2">
              {markdownFiles.map((file, index) => (
                <motion.button
                  key={file.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedContent(file)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    selectedContent.id === file.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400/50'
                      : 'bg-gray-800/30 border-gray-700/30 hover:border-cyan-400/30 hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{file.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{file.title}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {file.id === 'solid-state-ionics' && '基礎理論・欠陥化学・拡散機構'}
                        {file.id === 'fluoride-ion-conductor' && '材料設計・合成・評価手法'}
                        {file.id === 'battery-performance' && '電池特性・インピーダンス解析'}
                      </div>
                    </div>
                  </div>
                  {selectedContent.id === file.id && (
                    <div className="mt-2 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <h3 className="text-sm font-bold text-cyan-400 mb-2">学習のポイント</h3>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• 基礎理論から順番に学習</li>
                <li>• 数式の導出過程を理解</li>
                <li>• 実験データとの対応を確認</li>
                <li>• 関連論文で理解を深める</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 max-w-4xl mx-auto p-8">
          <motion.div
            key={selectedContent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Content Header */}
            <div className="mb-8 pb-6 border-b border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{selectedContent.icon}</span>
                <h1 className="text-3xl font-black">
                  <span className={`bg-gradient-to-r ${selectedContent.color} bg-clip-text text-transparent`}>
                    {selectedContent.title}
                  </span>
                </h1>
              </div>
            </div>

            {/* Markdown Content */}
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                  <p className="text-gray-400">コンテンツを読み込んでいます...</p>
                </div>
              </div>
            ) : (
              <div 
                className="prose prose-invert max-w-none markdown-content"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownContent) }}
              />
            )}
          </motion.div>
        </main>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 space-y-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-800/90 backdrop-blur-sm text-cyan-400 p-3 rounded-full shadow-lg hover:bg-gray-700/90 transition-colors border border-cyan-400/30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        .markdown-content h1,
        .markdown-content h2,
        .markdown-content h3 {
          scroll-margin-top: 5rem;
        }
        
        .markdown-content ul,
        .markdown-content ol {
          list-style-position: inside;
        }
        
        .markdown-content ul {
          list-style-type: disc;
        }
        
        .markdown-content ol {
          list-style-type: decimal;
        }
        
        .markdown-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        
        .markdown-content th,
        .markdown-content td {
          border: 1px solid #374151;
          padding: 0.5rem;
        }
        
        .markdown-content th {
          background: #1f2937;
          font-weight: bold;
        }
        
        .markdown-content blockquote {
          border-left: 4px solid #06b6d4;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #9ca3af;
        }
        
        .markdown-content hr {
          border: none;
          border-top: 1px solid #374151;
          margin: 2rem 0;
        }
        
        .markdown-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  )
}