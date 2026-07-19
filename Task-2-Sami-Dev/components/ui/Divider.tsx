'use client'

import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean  // aria-hidden when purely decorative
  gradient?: boolean    // Fade out on the edges
}

/**
 * Divider — Styled section/content separator.
 *
 * Usage:
 *   <Divider />
 *   <Divider gradient className="my-16" />
 */
export function Divider({
  className,
  orientation = 'horizontal',
  decorative = true,
  gradient = false,
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role={decorative ? 'none' : 'separator'}
        aria-orientation="vertical"
        className={cn('h-full w-px bg-border', className)}
      />
    )
  }

  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation="horizontal"
      className={cn(
        'h-px w-full',
        gradient
          ? 'bg-gradient-to-r from-transparent via-border to-transparent'
          : 'bg-border',
        className
      )}
    />
  )
}
