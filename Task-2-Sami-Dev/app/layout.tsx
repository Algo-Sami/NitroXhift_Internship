import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { spaceGrotesk, inter, jetbrainsMono } from '@/lib/fonts'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { SITE_CONFIG } from '@/constants/site'
import '@/app/globals.css'

// ─── JSON-LD Structured Data (Person schema) ──────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sami Ullah',
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/profile.jpg`,
  jobTitle: 'Full Stack Developer & AI Enthusiast',
  description: SITE_CONFIG.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Attock',
    addressCountry: 'PK',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'COMSATS University Islamabad',
  },
  sameAs: [
    'https://github.com/Algo-Sami',
    'https://www.linkedin.com/in/sami-ullah-58808a356/',
  ],
  knowsAbout: [
    'Web Development',
    'Full Stack Development',
    'React',
    'Next.js',
    'TypeScript',
    'Artificial Intelligence',
    'Supabase',
    'Node.js',
  ],
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.title,
    template: SITE_CONFIG.titleTemplate,
  },

  description: SITE_CONFIG.description,

  keywords: [
    'Sami Ullah',
    'Full Stack Developer Pakistan',
    'AI Developer',
    'Web Developer Portfolio',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Software Engineer Pakistan',
    'COMSATS University',
    'Neuron OS',
    'Portfolio',
    'Freelance Developer',
    'Machine Learning',
  ],

  authors: [{ name: 'Sami Ullah', url: SITE_CONFIG.url }],
  creator: 'Sami Ullah',
  publisher: 'Sami Ullah',

  alternates: {
    canonical: SITE_CONFIG.url,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Full Stack Developer & AI Enthusiast`,
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    // Update when you have a real Twitter/X handle
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },

  manifest: '/site.webmanifest',

  category: 'technology',
}

// ─── Viewport ─────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)',  color: '#0B1120' },
  ],
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning // Required by next-themes
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-body">
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
