import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'

/**
 * Space Grotesk — Headings
 * Modern, geometric sans-serif. Exceptional for AI/tech branding.
 */
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
})

/**
 * Inter — Body & UI text
 * Industry-standard legibility. Optimized for screens.
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
})

/**
 * JetBrains Mono — Code snippets
 * Premium monospace font built for developers.
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})
