'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  fadeIn,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
} from '@/styles/animations'
import type { AnimationDirection } from '@/types'

interface AnimateInProps {
  children: React.ReactNode
  direction?: AnimationDirection
  delay?: number         // seconds
  duration?: number      // seconds
  className?: string
  once?: boolean         // only animate on first view (default: true)
  threshold?: number     // 0–1, how much must be visible to trigger
}

const variantMap = {
  up:    fadeUp,
  down:  fadeDown,
  left:  fadeLeft,
  right: fadeRight,
  fade:  fadeIn,
  scale: scaleIn,
}

/**
 * AnimateIn — Viewport-triggered entrance animation wrapper.
 * Automatically disables animations when prefers-reduced-motion is set.
 *
 * Usage:
 *   <AnimateIn direction="up" delay={0.1}>
 *     <YourComponent />
 *   </AnimateIn>
 */
export function AnimateIn({
  children,
  direction = 'up',
  delay = 0,
  duration,
  className,
  once = true,
  threshold = 0.2,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const reducedMotion = useReducedMotion()

  const variants = variantMap[direction]

  // Merge custom delay/duration into variants
  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(typeof variants.visible === 'object' &&
        'transition' in variants.visible
          ? (variants.visible as { transition?: object }).transition
          : {}),
        delay,
        ...(duration !== undefined && { duration }),
      },
    },
  }

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
