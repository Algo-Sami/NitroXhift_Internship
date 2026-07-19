'use client'

import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  /** Gradient direction: default is left to right */
  from?: string
  via?: string
  to?: string
}

/**
 * GradientText — Inline gradient text span.
 * Uses brand colors by default: primary → secondary → accent
 *
 * Usage:
 *   <GradientText>SAMI ULLAH</GradientText>
 *   <GradientText from="from-cyan-400" to="to-blue-600">AI Enthusiast</GradientText>
 */
export function GradientText({
  children,
  className,
  from = 'from-primary',
  via = 'via-secondary',
  to = 'to-accent',
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        from,
        via,
        to,
        className
      )}
    >
      {children}
    </span>
  )
}
