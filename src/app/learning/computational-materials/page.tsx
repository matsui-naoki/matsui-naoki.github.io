'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Define the markdown file mappings
const markdownFiles = [
  {
    id: 'dft-vasp',
    title: 'DFT計算とVASP',
    file: '/content/dft-vasp.md',
    icon: 'DFT',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'molecular-dynamics',
    title: '分子動力学シミュレーション',
    file: '/content/moleculer-dynamics.md',
    icon: 'MD',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'tsubame4',
    title: 'TSUBAME4.0の使い方',
    file: '/content/tsubame4.md',
    icon: 'HPC',
    color: 'from-indigo-500 to-blue-500'
  }
]

// Collapsible Code Block Component
const CollapsibleCodeBlock = ({ language, code, title }: { language: string; code: string; title?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [copied, setCopied] = useState(false)
  const lines = code.split('\n')
  const isLong = lines.length > 10
  const displayCode = isExpanded || !isLong ? code : lines.slice(0, 10).join('\n') + '\n...'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-700 bg-gray-900">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-400">Language:</span>
          <span className="text-xs font-mono text-blue-400">{language}</span>
          {title && <span className="text-xs text-gray-400 ml-4">{title}</span>}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className={`text-xs px-3 py-1 rounded transition-all duration-200 ${
              copied 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
            }`}
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
            >
              <span>{isExpanded ? '折りたたむ' : '展開する'}</span>
              <svg 
                className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.875rem'
          }}
          showLineNumbers={true}
          lineNumberStyle={{ color: '#4a5568', minWidth: '2.5em' }}
        >
          {displayCode}
        </SyntaxHighlighter>
      </div>
      {isLong && !isExpanded && (
        <div className="px-4 py-2 bg-gray-800/50 border-t border-gray-700 text-center">
          <span className="text-xs text-gray-400">
            {lines.length - 10} 行が省略されています
          </span>
        </div>
      )}
    </div>
  )
}

export default function ComputationalMaterials() {
  const [selectedContent, setSelectedContent] = useState(markdownFiles[0])
  const [markdownContent, setMarkdownContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showTOC, setShowTOC] = useState(false)

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

  // Convert markdown to React elements with proper syntax highlighting
  const renderMarkdown = (content: string) => {
    const elements: React.ReactElement[] = []
    const lines = content.split('\n')
    let currentBlock: string[] = []
    let inCodeBlock = false
    let codeLanguage = ''
    let blockIndex = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      // Check for code block start/end
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          // Start of code block
          if (currentBlock.length > 0) {
            elements.push(
              <div key={`text-${blockIndex++}`} 
                dangerouslySetInnerHTML={{ __html: processTextBlock(currentBlock.join('\n')) }} 
              />
            )
            currentBlock = []
          }
          inCodeBlock = true
          codeLanguage = line.slice(3).trim() || 'text'
        } else {
          // End of code block
          elements.push(
            <CollapsibleCodeBlock 
              key={`code-${blockIndex++}`}
              language={codeLanguage}
              code={currentBlock.join('\n')}
            />
          )
          currentBlock = []
          inCodeBlock = false
          codeLanguage = ''
        }
      } else {
        currentBlock.push(line)
      }
    }
    
    // Handle remaining content
    if (currentBlock.length > 0) {
      if (inCodeBlock) {
        elements.push(
          <CollapsibleCodeBlock 
            key={`code-${blockIndex++}`}
            language={codeLanguage}
            code={currentBlock.join('\n')}
          />
        )
      } else {
        elements.push(
          <div key={`text-${blockIndex++}`} 
            dangerouslySetInnerHTML={{ __html: processTextBlock(currentBlock.join('\n')) }} 
          />
        )
      }
    }
    
    return <>{elements}</>
  }

  // Process non-code markdown text
  const processTextBlock = (text: string) => {
    let html = text
    
    // Process tables
    const tableRegex = /\|(.+)\|\n\|[\s\-:|]+\|\n((?:\|.+\|\n?)+)/gm
    html = html.replace(tableRegex, (match, header, body) => {
      const headers = header.split('|').filter((h: string) => h.trim())
      const headerCells = headers.map((h: string) => 
        `<th class="border border-gray-700 px-4 py-2 bg-gray-800 text-blue-400 font-semibold">${h.trim()}</th>`
      ).join('')
      
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
    html = html.replace(/^##### (.*$)/gim, '<h5 class="text-base font-semibold mt-3 mb-2 text-purple-400">$1</h5>')
    html = html.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mt-4 mb-2 text-blue-400">$1</h4>')
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3 text-blue-500">$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-white">$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-black mt-8 mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">$1</h1>')
    
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-green-400 px-1.5 py-0.5 rounded font-mono text-sm">$1</code>')
    
    // Bold and italic
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="font-bold text-blue-300"><em>$1</em></strong>')
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-blue-300">$1</strong>')
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    
    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2 text-gray-300 list-disc">$1</li>')
    html = html.replace(/^- (.*$)/gim, '<li class="ml-6 mb-2 text-gray-300 list-disc">$1</li>')
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 text-gray-300 list-decimal">$1</li>')
    
    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr class="border-gray-700 my-8">')
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-400 pl-4 my-4 text-gray-400 italic">$1</blockquote>')
    
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
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>')
    
    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg my-4 mx-auto">')
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
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-black mb-2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    電池材料の材料計算科学
                  </span>
                </h1>
                <p className="text-gray-400 text-sm lg:text-base">第一原理計算と分子動力学による材料設計</p>
              </div>
              {/* Mobile TOC Toggle */}
              <button
                onClick={() => setShowTOC(!showTOC)}
                className="lg:hidden bg-gray-800/50 p-2 rounded-lg border border-blue-400/30 text-blue-400 hover:bg-blue-400/10 transition-colors"
                aria-label="目次を開く"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <Link
              href="/learning"
              className="hidden sm:flex px-4 py-2 border border-blue-400/30 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors"
            >
              ← 学習ページに戻る
            </Link>
            <Link
              href="/learning"
              className="sm:hidden p-2 border border-blue-400/30 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mobile TOC */}
      {showTOC && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <h2 className="text-lg font-bold mb-3 text-blue-400">目次</h2>
            <nav className="space-y-2">
              {markdownFiles.map((file) => (
                <button
                  key={file.id}
                  onClick={() => {
                    setSelectedContent(file)
                    setShowTOC(false)
                  }}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${selectedContent.id === file.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-blue-400/50'
                      : 'bg-gray-800/30 border-gray-700/30 hover:border-blue-400/30 hover:bg-gray-800/50'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{file.icon}</span>
                    <div>
                      <div className="font-semibold text-white text-sm">{file.title}</div>
                      <div className="text-xs text-gray-400">
                        {file.id === 'dft-vasp' && '密度汎関数理論・VASP実践'}
                        {file.id === 'molecular-dynamics' && 'MD計算の基礎と応用'}
                        {file.id === 'tsubame4' && 'スパコン活用ガイド'}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-80 bg-gray-900/50 border-r border-gray-800">
          <div className="sticky top-20 p-6">
            <h2 className="text-lg font-bold mb-4 text-blue-400">目次</h2>
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
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-blue-400/50'
                      : 'bg-gray-800/30 border-gray-700/30 hover:border-blue-400/30 hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{file.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{file.title}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {file.id === 'dft-vasp' && '密度汎関数理論・VASP実践'}
                        {file.id === 'molecular-dynamics' && 'MD計算の基礎と応用'}
                        {file.id === 'tsubame4' && 'スパコン活用ガイド'}
                      </div>
                    </div>
                  </div>
                  {selectedContent.id === file.id && (
                    <div className="mt-2 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <h3 className="text-sm font-bold text-blue-400 mb-2">学習のポイント</h3>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• 理論の理解から始める</li>
                <li>• 実際にコードを実行</li>
                <li>• パラメータの意味を理解</li>
                <li>• 計算結果の解釈方法を習得</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <h3 className="text-sm font-bold text-purple-400 mb-2">関連リソース</h3>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• <span className="text-blue-300">VASP公式マニュアル</span></li>
                <li>• <span className="text-blue-300">Materials Project</span></li>
                <li>• <span className="text-blue-300">TSUBAME Portal</span></li>
                <li>• <span className="text-blue-300">計算化学フォーラム</span></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 max-w-4xl mx-auto p-4 lg:p-8">
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
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                  <p className="text-gray-400">コンテンツを読み込んでいます...</p>
                </div>
              </div>
            ) : (
              <div className="prose prose-invert max-w-none markdown-content">
                {renderMarkdown(markdownContent)}
              </div>
            )}
          </motion.div>
        </main>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 space-y-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-800/90 backdrop-blur-sm text-blue-400 p-3 rounded-full shadow-lg hover:bg-gray-700/90 transition-colors border border-blue-400/30"
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
        
        .markdown-content blockquote {
          border-left: 4px solid #3b82f6;
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