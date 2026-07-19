'use client'

import { cn } from '@/lib/utils'
import { SectionProps } from '@/types'

/**
 * SectionWrapper — Consistent section padding + scroll-spy anchor.
 *
 * Usage:
 *   <SectionWrapper id="about" className="bg-muted/30">
 *     <Container>...</Container>
 *   </SectionWrapper>
 */
export function SectionWrapper({ id, className, children, fullHeight = false }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={cn(
        'relative w-full py-20 md:py-32',
        fullHeight && 'min-h-screen',
        className
      )}
    >
      {children}
    </section>
  )
}
