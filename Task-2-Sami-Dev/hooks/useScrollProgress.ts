'use client'

import { useEffect, useState } from 'react'

/**
 * useScrollProgress — Returns a normalized scroll progress value (0–1)
 * where 0 = top of page, 1 = bottom of page.
 *
 * Usage:
 *   const progress = useScrollProgress()
 *   // Use for scroll-based animations, progress bars, etc.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      if (docHeight <= 0) {
        setProgress(0)
        return
      }

      setProgress(Math.min(scrollTop / docHeight, 1))
    }

    // Passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Set initial value

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}
