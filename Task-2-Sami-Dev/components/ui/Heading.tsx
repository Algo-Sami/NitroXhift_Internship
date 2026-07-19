'use client'

import { cn } from '@/lib/utils'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingSize = 'display' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

interface HeadingProps {
  children: React.ReactNode
  as?: HeadingLevel
  size?: HeadingSize
  gradient?: boolean       // Apply blue→purple gradient
  className?: string
  id?: string              // For aria-labelledby with SectionWrapper
  balance?: boolean        // text-balance for multiline headings
}

const sizeMap: Record<HeadingSize, string> = {
  display: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight',
  xl:      'text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight',
  lg:      'text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight',
  md:      'text-xl sm:text-2xl md:text-3xl font-semibold leading-[1.2]',
  sm:      'text-lg sm:text-xl md:text-2xl font-medium leading-[1.3]',
  xs:      'text-base sm:text-lg font-medium leading-[1.4]',
}

/**
 * Heading — Responsive, accessible heading component.
 *
 * Usage:
 *   <Heading as="h2" size="xl" gradient>About Me</Heading>
 *   <Heading as="h3" size="md" id="about-heading">Background</Heading>
 */
export function Heading({
  children,
  as: Tag = 'h2',
  size = 'xl',
  gradient = false,
  className,
  id,
  balance = true,
}: HeadingProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'font-heading',
        sizeMap[size],
        balance && 'text-balance',
        gradient &&
          'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </Tag>
  )
}
