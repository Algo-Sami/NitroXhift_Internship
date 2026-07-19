// ─── Shared TypeScript Types ─────────────────────────────────────────────────

// Animation directions for AnimateIn component
export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'

// Component size variants
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Component color variants
export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline'

// Navigation link
export interface NavLink {
  label: string
  href: string
  external?: boolean
}

// Social link
export interface SocialLink {
  platform: string
  url: string
  icon?: string
}

// Project type (for future Projects section)
export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

// Experience entry (for future Experience section)
export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string[]
  technologies?: string[]
  logoUrl?: string
}

// Skill (for future Skills section)
export interface Skill {
  name: string
  category: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
}

// Testimonial (for future Testimonials section)
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatarUrl?: string
}

// Achievement / Certification
export interface Achievement {
  id: string
  title: string
  issuer: string
  date: string
  url?: string
  imageUrl?: string
}

// SEO Metadata shape
export interface PageSEO {
  title: string
  description: string
  ogImage?: string
  noIndex?: boolean
}

// Section wrapper props
export interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  fullHeight?: boolean
}
