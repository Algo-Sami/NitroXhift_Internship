'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CounterProps {
  end: number
  duration?: number // duration of animation in ms
  suffix?: string
  className?: string
}

/**
 * Counter — Viewport-triggered animated number counter.
 * Counts up smoothly from 0 to the target number when visible on screen.
 * Automatically displays the target number statically if the user prefers reduced motion.
 */
export function Counter({ end, duration = 1200, suffix = '', className }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const isReducedMotion = useReducedMotion()

  // Immediately show final count when reduced motion is preferred
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { if (isReducedMotion) setCount(end) }, [isReducedMotion, end])

  useEffect(() => {
    if (isReducedMotion) return
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // easeOutQuad transition easing for a smoother end slowdown
      const easeProgress = progress * (2 - progress)

      setCount(Math.floor(easeProgress * (end - startValue) + startValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isInView, isReducedMotion])

  return (
    <span ref={ref} className={className} aria-live="polite">
      {count}
      {suffix}
    </span>
  )
}
