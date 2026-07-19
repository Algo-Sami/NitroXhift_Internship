'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/hooks/useTheme'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { NAV_LINKS, SITE_CONFIG } from '@/constants/site'

/**
 * Navbar — Sticky responsive navigation.
 *
 * Features:
 * - Transparent → frosted glass on scroll
 * - Mobile hamburger → full-screen overlay
 * - Dark/light mode toggle
 * - Keyboard accessible
 * - Active link detection
 */
export function Navbar() {
  const pathname = usePathname()
  const { toggleTheme, mounted, isDark } = useTheme()
  const scrollProgress = useScrollProgress()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Derive scrolled state directly — no effect needed
  const scrolled = useMemo(() => scrollProgress > 0.02, [scrollProgress])

  // Close mobile menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300',
          scrolled
            ? 'border-b border-border/50 bg-background/80 backdrop-blur-xl'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label={`${SITE_CONFIG.name} — Home`}
            className="group flex items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-xl',
                'bg-gradient-to-br from-primary to-secondary',
                'text-sm font-bold text-white',
                'font-heading tracking-tight',
                'shadow-md shadow-primary/20'
              )}
            >
              {SITE_CONFIG.logo}
            </motion.div>
            <span className="font-heading text-sm font-semibold tracking-wide text-foreground/90 transition-colors group-hover:text-foreground">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium',
                  'rounded-xl transition-colors duration-200',
                  'hover:bg-muted/60 hover:text-foreground',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-xl',
                  'text-muted-foreground transition-colors',
                  'hover:bg-muted/60 hover:text-foreground',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                )}
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </motion.button>
            )}

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-xl md:hidden',
                'text-muted-foreground transition-colors',
                'hover:bg-muted/60 hover:text-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
              )}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={cn(
              'fixed inset-0 z-40 flex flex-col md:hidden',
              'bg-background/95 backdrop-blur-2xl',
              'pt-16' // Clear the navbar height
            )}
          >
            <nav
              role="navigation"
              aria-label="Mobile navigation"
              className="flex flex-1 flex-col items-center justify-center gap-2 px-6"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: 'easeOut' }}
                  className="w-full max-w-xs"
                >
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className={cn(
                      'block w-full px-6 py-4 text-center',
                      'text-xl font-semibold font-heading',
                      'rounded-2xl transition-colors duration-200',
                      'hover:bg-muted/60',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
