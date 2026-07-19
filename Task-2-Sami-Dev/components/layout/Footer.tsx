'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowUp, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS, PERSONAL_INFO } from '@/constants/site'
import { GitHubIcon, LinkedInIcon } from '@/components/ui'

// ─── Footer Social data ───────────────────────────────────────────────────────

const FOOTER_SOCIALS = [
  {
    id: 'github',
    icon: GitHubIcon,
    label: 'GitHub',
    href: SOCIAL_LINKS.github,
    hoverClass: 'hover:bg-zinc-800 hover:text-white hover:border-zinc-600',
  },
  {
    id: 'linkedin',
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    hoverClass: 'hover:bg-[#0A66C2]/15 hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    href: `mailto:${SOCIAL_LINKS.email}`,
    hoverClass: 'hover:bg-primary/10 hover:text-primary hover:border-primary/40',
  },
]


// ─── Back to Top ──────────────────────────────────────────────────────────────

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className={cn(
            'fixed bottom-6 right-6 z-50',
            'flex h-11 w-11 items-center justify-center rounded-xl',
            'bg-gradient-to-br from-primary to-secondary text-white',
            'shadow-lg shadow-primary/30',
            'hover:shadow-xl hover:shadow-primary/40 hover:scale-110',
            'transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          )}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <BackToTop />
      <footer
        role="contentinfo"
        className="relative w-full border-t border-border/30 bg-card/30 dark:bg-[#0a0f1c]/60 backdrop-blur-sm"
      >
        {/* Gradient top accent */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <Container className="py-14 md:py-16">

          {/* ── Top Grid ── */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">

            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-5">
              {/* Logo */}
              <Link href="#hero" aria-label="Back to top — Sami Ullah Portfolio">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex items-center gap-3"
                >
                  <div className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-xl',
                    'bg-gradient-to-br from-primary to-secondary',
                    'text-sm font-bold text-white font-heading shadow-md shadow-primary/30'
                  )}>
                    {SITE_CONFIG.logo}
                  </div>
                  <span className="font-heading font-bold text-foreground text-sm tracking-wide">
                    {SITE_CONFIG.name}
                  </span>
                </motion.div>
              </Link>

              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
                {SITE_CONFIG.tagline}
              </p>

              {/* Social icons */}
              <div className="flex gap-2.5 flex-wrap">
                {FOOTER_SOCIALS.map(({ id, icon: Icon, label, href, hoverClass }) => (
                  <motion.a
                    key={id}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.18 }}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-xl',
                      'border border-border/60 text-muted-foreground',
                      'transition-all duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      hoverClass
                    )}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold font-heading uppercase tracking-widest text-muted-foreground/60">
                Navigation
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2.5">
                  {NAV_LINKS.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'group inline-flex items-center gap-1.5 text-sm text-muted-foreground font-body',
                          'transition-colors duration-200 hover:text-primary',
                          'focus-visible:outline-none focus-visible:underline'
                        )}
                      >
                        <span className="h-px w-3 bg-border group-hover:bg-primary group-hover:w-5 transition-all duration-200" aria-hidden="true" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold font-heading uppercase tracking-widest text-muted-foreground/60">
                Contact
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm text-muted-foreground font-body hover:text-primary transition-colors duration-200 break-all"
                    aria-label="Send email to Sami Ullah"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </li>
                <li>
                  <a
                    href={PERSONAL_INFO.phoneHref}
                    className="text-sm text-muted-foreground font-body hover:text-primary transition-colors duration-200"
                    aria-label="Call Sami Ullah"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </li>
                <li className="text-sm text-muted-foreground font-body">{PERSONAL_INFO.location}</li>
              </ul>
            </div>


            {/* Availability + CTA Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold font-heading uppercase tracking-widest text-muted-foreground/60">
                Status
              </h3>
              <div className={cn(
                'rounded-[14px] p-4 border border-emerald-500/20',
                'bg-emerald-500/5 dark:bg-emerald-500/8'
              )}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-bold font-heading text-emerald-500">Open to Work</span>
                </div>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  Available for internships, freelance projects, and exciting collaborations.
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-[12px]',
                  'bg-gradient-to-r from-primary to-secondary text-white',
                  'text-xs font-bold font-heading',
                  'shadow-md shadow-primary/20',
                  'hover:shadow-lg hover:shadow-primary/30',
                  'transition-shadow duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                )}
                aria-label="Get in touch with Sami Ullah"
              >
                <ExternalLink size={13} aria-hidden="true" />
                Get In Touch
              </motion.a>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            {/* Quote */}
            <p className="text-xs text-muted-foreground/50 font-body italic text-center sm:text-left max-w-sm">
              &quot;Building meaningful digital experiences, one project at a time.&quot;
            </p>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground/40 font-body text-center sm:text-right shrink-0">
              © {year} {SITE_CONFIG.name}. All Rights Reserved.
            </p>
          </div>

        </Container>
      </footer>
    </>
  )
}
