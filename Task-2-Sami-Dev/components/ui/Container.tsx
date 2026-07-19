'use client'

import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  narrow?: boolean // max-w-4xl instead of max-w-7xl
}

/**
 * Container — Responsive max-width wrapper with consistent horizontal padding.
 *
 * Default: max-w-7xl
 * Narrow:  max-w-4xl (for text-heavy sections like About, Blog)
 */
export function Container({ children, className, as: Tag = 'div', narrow = false }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        narrow ? 'max-w-4xl' : 'max-w-7xl',
        className
      )}
    >
      {children}
    </Tag>
  )
}
