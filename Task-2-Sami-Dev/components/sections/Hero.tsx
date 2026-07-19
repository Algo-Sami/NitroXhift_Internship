'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container, SectionWrapper, Heading, LinkButton, Badge, Typewriter, GradientText } from '@/components/ui'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/constants/site'

// ─── Social Icon SVGs ─────────────────────────────────────────────────────────

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784-1.764 1.75-1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

// ─── Tech Stack List ──────────────────────────────────────────────────────────

const TECH_BADGES = [
  { label: 'Next.js', variant: 'outline' },
  { label: 'React', variant: 'accent' },
  { label: 'TypeScript', variant: 'primary' },
  { label: 'Tailwind CSS', variant: 'primary' },
  { label: 'Supabase', variant: 'success' },
  { label: 'AI', variant: 'secondary' },
  { label: 'Git', variant: 'error' },
] as const

// ─── Social Links List ────────────────────────────────────────────────────────

const SOCIAL_ITEMS = [
  { href: SOCIAL_LINKS.github, label: 'GitHub', icon: GithubIcon },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  { href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email', icon: EmailIcon },
] as const

export function Hero() {
  const typewriterWords = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Startup Builder',
  ]

  return (
    <SectionWrapper id="hero" className="relative overflow-hidden flex min-h-[calc(100vh-4rem)] items-center">
      {/* ─── Premium Background Decoration ─── */}
      {/* Soft blurred radial light beams */}
      <div className="absolute top-1/4 left-1/10 w-[30rem] h-[30rem] bg-primary/5 dark:bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[35rem] h-[35rem] bg-secondary/5 dark:bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
      
      {/* Elegant Dot grid texture overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-30 pointer-events-none" 
        style={{ maskImage: 'radial-gradient(circle at center, white, transparent 80%)' }}
      />

      <Container className="relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─── Left Side: Branding & Info ─── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            
            {/* Greeting & Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-3"
            >
              <Badge variant="primary" dot className="font-semibold px-3 py-1 text-xs">
                Open to work
              </Badge>
              <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground/80 font-heading">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="space-y-2 w-full"
            >
              <Heading as="h1" size="display" className="tracking-tight leading-none">
                <GradientText>{SITE_CONFIG.name}</GradientText>
              </Heading>
              
              {/* Typewriter Rotator Subheading */}
              <div className="h-8 sm:h-10 flex items-center text-xl sm:text-2xl font-heading font-medium text-foreground/90">
                <span className="text-muted-foreground mr-2">I&apos;m a</span>
                <Typewriter 
                  words={typewriterWords} 
                  className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold"
                />
              </div>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance"
            >
              Software Engineering student passionate about engineering scalable, high-performance web applications, 
              architecting AI-powered solutions, and creating refined digital experiences that merge clean code 
              with modern design.
            </motion.p>

            {/* Tech Badges Container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
              className="flex flex-wrap gap-2 w-full"
              aria-label="Core Technology Badges"
            >
              {TECH_BADGES.map((badge, idx) => (
                <Badge key={idx} variant={badge.variant} className="text-xs">
                  {badge.label}
                </Badge>
              ))}
            </motion.div>

            {/* Action Buttons & Social Connections */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full"
            >
              {/* Call-to-actions */}
              <div className="flex flex-wrap gap-3">
                <LinkButton
                  href="#projects"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                  className="group px-6 rounded-2xl"
                >
                  View My Projects
                </LinkButton>
                <LinkButton
                  href="#contact"
                  variant="outline"
                  size="lg"
                  className="px-6 rounded-2xl"
                >
                  Contact Me
                </LinkButton>
              </div>

              {/* Social icons connection divider / row */}
              <div className="flex items-center gap-3 self-center sm:self-auto border-t sm:border-t-0 sm:border-l border-border pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto justify-center sm:justify-start">
                {SOCIAL_ITEMS.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="group relative">
                      <LinkButton
                        href={item.href}
                        variant="ghost"
                        size="icon"
                        target={item.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        aria-label={`Sami Ullah's ${item.label}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon />
                      </LinkButton>
                      
                      {/* Interactive CSS Tooltip */}
                      <span 
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:inline-block bg-slate-950 dark:bg-slate-900 text-white dark:text-foreground text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-lg border border-border shadow-xl z-50 pointer-events-none transition-all duration-200"
                        role="tooltip"
                      >
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* ─── Right Side: Portrait Image Container ─── */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -12, 0]
              }}
              transition={{
                opacity: { duration: 0.6, ease: 'easeOut' },
                scale: { duration: 0.6, ease: 'easeOut' },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }
              }}
              className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] aspect-[3/4] group select-none"
            >
              {/* Blurred abstract backdrop shapes */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-secondary/15 to-accent/10 rounded-[28px] blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Card Container Frame */}
              <div className="relative w-full h-full rounded-[24px] border border-border/60 bg-card p-2.5 shadow-2xl">
                <div className="relative w-full h-full overflow-hidden rounded-[18px]">
                  <Image
                    src="/profile.jpg"
                    alt="Sami Ullah - Full Stack Developer & AI Enthusiast portrait"
                    fill
                    priority
                    className="object-cover transition-all duration-500 scale-102 group-hover:scale-100 grayscale-[15%] group-hover:grayscale-0"
                    sizes="(max-w-768px) 280px, 320px"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ─── Bottom Scroll Down Indicator ─── */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase font-heading">
              Scroll Down
            </span>
            <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-1 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
