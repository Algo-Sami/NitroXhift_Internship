// ─── Site Metadata ────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: 'SAMI ULLAH',
  title: 'SAMI ULLAH • Portfolio',
  titleTemplate: '%s | SAMI ULLAH',
  description:
    'Full Stack Developer & AI Enthusiast. Building elegant, high-performance web applications and exploring the frontier of artificial intelligence.',
  url: 'https://samiullah.dev', // Update when domain is live
  ogImage: '/og-image.png',
  logo: 'SU', // Monogram
  tagline: 'Full Stack Developer & AI Enthusiast',
} as const

// ─── Navigation Links ─────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home',         href: '#hero' },
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
] as const

// ─── Social Links ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  github:   'https://github.com/Algo-Sami',
  linkedin: 'https://www.linkedin.com/in/sami-ullah-58808a356/',
  email:    'su2823251@gmail.com',
} as const

// ─── Open Graph ───────────────────────────────────────────────────────────────

export const OG_CONFIG = {
  type: 'website',
  locale: 'en_US',
  siteName: SITE_CONFIG.name,
} as const

// ─── Personal Contact Info ────────────────────────────────────────────────────

export const PERSONAL_INFO = {
  email:     'su2823251@gmail.com',
  phone:     '+92 318 5005228',
  phoneHref: 'tel:+923185005228',
  location:  'Attock, Pakistan',
  education: {
    degree:  'BS Software Engineering',
    school:  'COMSATS University Islamabad',
    campus:  'Attock Campus',
    status:  '4th Semester',
  },
} as const
