'use client'

import { useEffect, useState } from 'react'

/**
 * useReducedMotion — Returns true if the user has requested reduced motion
 * via their OS/browser accessibility settings.
 *
 * Use this to conditionally disable or simplify animations.
 *
 * Usage:
 *   const reduced = useReducedMotion()
 *   const variants = reduced ? staticVariants : animatedVariants
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return reducedMotion
}
