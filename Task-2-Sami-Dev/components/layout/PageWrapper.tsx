'use client'

import { motion } from 'framer-motion'
import { pageTransition } from '@/styles/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface PageWrapperProps {
  children: React.ReactNode
}

/**
 * PageWrapper — Root page layout with Navbar, Footer, and page transition.
 * Wrap every page with this component inside the root layout.
 *
 * Usage:
 *   <PageWrapper>
 *     <main>...</main>
 *   </PageWrapper>
 */
export function PageWrapper({ children }: PageWrapperProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <Navbar />

      <motion.main
        id="main-content"
        role="main"
        tabIndex={-1}
        variants={reducedMotion ? undefined : pageTransition}
        initial="hidden"
        animate="visible"
        className="flex-1 pt-16" // pt-16 clears the fixed navbar
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  )
}
