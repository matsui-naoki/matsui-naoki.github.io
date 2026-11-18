// Tools: the lab's analysis web apps (Streamlit) and their tutorial videos.

import Link from 'next/link'
import SimpleNavigation from '@/components/SimpleNavigation'
import YouTubeVideo from '@/components/YouTubeVideo'

type App = {
  name: string
  url: string
  tag: string
  desc: string
  features: string[]
  video?: { id: string; title: string; minutes: number }
  beta?: string
}

const APPS: App[] = [
  {
    name: 'EIS Analyzer',
    url: 'https://eis-analyzer.streamlit.app',
    tag: 'インピーダンス',
    desc: '固体電解質を主な対象に開発した、交流インピーダンスの解析アプリです。',
    features: ['インピーダンススペクトルの自動解析', 'アレニウスプロットの作成'],
    video: { id: 'PbDlQzb0xMc', title: '交流インピーダンスの解析アプリの解説', minutes: 31 }
  },
  {
    name: 'XRD Cell Calculator',
    url: 'https://xrd-cell-calculator.streamlit.app',
    tag: 'X線回折',
    desc: 'X線回折パターンのピーク位置から格子定数を計算するアプリです。',
    features: ['XRDパターンからの格子定数の計算'],
    video: { id: 'EydwtWgt6v0', title: 'XRDから格子定数を計算する方法', minutes: 17 }
  },
  {
    name: 'CD Visualizer',
    url: 'https://cd-visualizer.streamlit.app',
    tag: '充放電',
    desc: '充放電試験のデータから充放電曲線を作成するアプリです。',
    features: ['充放電曲線の作成']
  },
  {
    name: 'Ternary',
    url: 'https://ternary.streamlit.app',
    tag: '三元系',
    desc: '三元系の組成図（ternary plot）を作成するアプリです。ヒートマップ表示が便利です。',
    features: ['三角組成図のプロット', '組成に対する物性値のヒートマップ']
  },
  {
    name: 'XRD Mapper',
    url: 'https://xrd-mapper.streamlit.app',
    tag: 'X線回折',
    desc: '多数のXRDパターンをNMF（非負値行列因子分解）などでクラスタリングするアプリです。',
    features: ['XRDパターンのNMFクラスタリング'],
    beta: '開発中のため、未完成の機能や不具合があります。'
  }
]

const link = 'text-[#76b900] hover:text-[#8fd400] underline underline-offset-4'

export default function Tools() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ffffff]">
      <SimpleNavigation />

      <section className="pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-black mb-5">アプリ</h1>
          <p className="text-lg text-[#cfcfcf] max-w-3xl leading-relaxed">
            研究室で作った解析用のWebアプリです。ブラウザから無料で使えます（Streamlit Community Cloud）。
            しばらく使われていないアプリは、起動に数十秒かかることがあります。
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {APPS.map((a) => (
            <article key={a.url} className="bg-[#111111] border border-[#262626] rounded p-6 sm:p-8">
              <div className={a.video ? 'grid lg:grid-cols-2 gap-8 items-start' : ''}>
                <div>
                  <p className="text-sm text-[#76b900] mb-2">{a.tag}</p>
                  <h2 className="text-2xl font-black mb-3">{a.name}</h2>
                  <p className="text-[#cfcfcf] leading-relaxed mb-4">{a.desc}</p>
                  <ul className="mb-5 space-y-1 text-[#cfcfcf]">
                    {a.features.map((f) => (
                      <li key={f} className="flex gap-2"><span className="text-[#76b900]" aria-hidden="true">・</span>{f}</li>
                    ))}
                  </ul>
                  {a.beta && (
                    <p className="mb-5 text-sm text-[#e0c060] border border-[#e0c060]/30 bg-[#e0c060]/5 rounded px-3 py-2">{a.beta}</p>
                  )}
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    <a href={a.url} target="_blank" rel="noopener noreferrer"
                      className="inline-block bg-[#76b900] text-black font-bold px-5 py-2.5 rounded hover:bg-[#8fd400] transition-colors">
                      アプリを開く
                    </a>
                    {a.video && (
                      <a href={`https://youtu.be/${a.video.id}`} target="_blank" rel="noopener noreferrer" className={`${link} self-center`}>
                        YouTubeで見る（約{a.video.minutes}分）
                      </a>
                    )}
                  </div>
                </div>
                {a.video && (
                  <div>
                    <YouTubeVideo id={a.video.id} title={a.video.title} />
                    <p className="text-sm text-[#9a9a9a] mt-2">解説動画：{a.video.title}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-black mb-6">解説動画</h2>
          <div className="bg-[#111111] border border-[#262626] rounded p-6 sm:p-8 grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-sm text-[#76b900] mb-2">結晶構造の描画</p>
              <h3 className="text-xl font-black mb-3">VESTAで結晶構造を綺麗に描画する</h3>
              <p className="text-[#cfcfcf] leading-relaxed mb-4">
                学生向けに、VESTAで結晶構造を見やすく描画するコツを動画にまとめました。
                VESTA：K. Momma and F. Izumi, J. Appl. Crystallogr. 44, 1272–1276 (2011).
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="https://jp-minerals.org/vesta/jp/" target="_blank" rel="noopener noreferrer" className={link}>VESTAのサイト</a>
                <a href="https://youtu.be/kLsu40Plh2U" target="_blank" rel="noopener noreferrer" className={link}>YouTubeで見る（約14分）</a>
              </div>
            </div>
            <YouTubeVideo id="kLsu40Plh2U" title="VESTAで結晶構造を綺麗に描画する" />
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-[#ffffff] text-[#050505] px-4 py-2 rounded shadow-lg">ホームに戻る</Link>
      </div>
    </div>
  )
}
