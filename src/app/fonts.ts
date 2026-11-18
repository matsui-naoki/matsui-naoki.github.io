// Fonts shared by both root layouts ([locale] and (site)).
// Geologica (with its sharpened-corner axis) for Latin, IBM Plex Sans JP for Japanese.
import { Geist_Mono, Geologica, IBM_Plex_Sans_JP } from 'next/font/google'

export const geologica = Geologica({ variable: '--font-geologica', weight: 'variable', axes: ['SHRP'], subsets: ['latin'], display: 'swap' })
export const plexJP = IBM_Plex_Sans_JP({ variable: '--font-plex-jp', weight: ['300', '400', '500', '700'], subsets: ['latin'], display: 'swap', preload: false })
export const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
export const fontClasses = `${geologica.variable} ${plexJP.variable} ${geistMono.variable}`
