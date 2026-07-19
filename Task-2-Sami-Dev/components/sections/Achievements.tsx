'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap,
  Briefcase,
  Brain,
  Globe,
  Trophy,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Rocket,
  TrendingUp,
  Layers,
  Zap,
  Lightbulb,
  Code,
  Monitor,
  Compass,
  Building2,
  Flame,
  Target,
} from 'lucide-react'
import { Container, Heading, AnimateIn, GradientText } from '@/components/ui'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Achievement {
  id: string
  icon: React.ElementType
  title: string
  description: string
  tag: string
  gradient: string
  iconBg: string
  iconColor: string
  borderHover: string
}

interface TimelineMilestone {
  id: string
  icon: React.ElementType
  title: string
  description: string
  phase: 'foundation' | 'intermediate' | 'advanced' | 'expert'
}

interface LearningCard {
  id: string
  icon: React.ElementType
  title: string
  description: string
  gradient: string
  iconColor: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'bs-swe',
    icon: GraduationCap,
    title: 'BS Software Engineering',
    description:
      'Currently completing the 4th Semester of a BS in Software Engineering, building a strong theoretical and practical foundation across algorithms, databases, and systems design.',
    tag: 'Academic',
    gradient: 'from-blue-500/10 to-violet-500/10',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-500',
    borderHover: 'hover:border-blue-500/40',
  },
  {
    id: 'decodelabs',
    icon: Briefcase,
    title: 'Web Dev Internship — DecodeLabs',
    description:
      'Gained real-world experience contributing to production-grade web applications, collaborating within a professional engineering team, and refining industry-standard development practices.',
    tag: 'Experience',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-500',
    borderHover: 'hover:border-emerald-500/40',
  },
  {
    id: 'nitroshiftstudios',
    icon: Building2,
    title: 'Web Dev Internship — NitroShift',
    description:
      'Contributed to client-facing projects at NitroShift Studios, delivering responsive interfaces, collaborating with designers, and practising agile delivery workflows.',
    tag: 'Experience',
    gradient: 'from-orange-500/10 to-amber-500/10',
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-500',
    borderHover: 'hover:border-orange-500/40',
  },
  {
    id: 'neuronos',
    icon: Brain,
    title: 'Built Neuron OS — AI Platform',
    description:
      'Independently designed and shipped Neuron OS, an AI-powered academic productivity platform integrating LLMs, gamification, smart notes, and quiz generation for students.',
    tag: 'Project',
    gradient: 'from-primary/10 to-secondary/10',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    borderHover: 'hover:border-primary/40',
  },
  {
    id: 'responsive-apps',
    icon: Globe,
    title: 'Multiple Responsive Web Apps',
    description:
      'Designed and built several full-featured web applications — a real estate platform, e-commerce clone, and browser game — each shipped to production with clean, responsive UIs.',
    tag: 'Project',
    gradient: 'from-accent/10 to-cyan-500/10',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    borderHover: 'hover:border-accent/40',
  },
]

const TIMELINE: TimelineMilestone[] = [
  {
    id: 'html-css',
    icon: Code,
    title: 'HTML & CSS',
    description: 'Learnt the building blocks of the web — semantic markup, the box model, layouts with Flexbox and Grid, and pixel-perfect responsive design.',
    phase: 'foundation',
  },
  {
    id: 'javascript',
    icon: Zap,
    title: 'JavaScript',
    description: 'Mastered core JS — DOM manipulation, event handling, async/await, Promises, ES6+ syntax, and vanilla SPA patterns.',
    phase: 'foundation',
  },
  {
    id: 'react',
    icon: Layers,
    title: 'React',
    description: 'Built component-driven UIs using hooks, context, state management patterns, and reusable component architectures.',
    phase: 'intermediate',
  },
  {
    id: 'nextjs',
    icon: Rocket,
    title: 'Next.js',
    description: 'Adopted Next.js for full-stack development — SSR, SSG, the App Router, server components, and route-based data fetching.',
    phase: 'intermediate',
  },
  {
    id: 'fullstack',
    icon: Monitor,
    title: 'Full-Stack Development',
    description: 'Combined frontend skills with Supabase (Postgres, Auth, Storage), REST APIs, and serverless functions to deliver complete production applications.',
    phase: 'advanced',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Integrated LLMs via OpenRouter API into real products — implementing AI chat, content generation, and quiz creation workflows.',
    phase: 'advanced',
  },
  {
    id: 'startup',
    icon: Target,
    title: 'Building Startup-Level Products',
    description: 'Bringing together product thinking, UI/UX design, and engineering to build end-to-end solutions with real users in mind.',
    phase: 'expert',
  },
]

const CURRENTLY_LEARNING: LearningCard[] = [
  {
    id: 'advanced-next',
    icon: Rocket,
    title: 'Advanced Next.js',
    description: 'Deep-diving into Server Actions, streaming, partial prerendering, and edge runtime patterns.',
    gradient: 'from-primary/10 to-secondary/10',
    iconColor: 'text-primary',
  },
  {
    id: 'ai-integration',
    icon: Sparkles,
    title: 'AI Integration',
    description: 'Exploring advanced LLM orchestration, RAG pipelines, and embedding-based search for real products.',
    gradient: 'from-secondary/10 to-violet-500/10',
    iconColor: 'text-secondary',
  },
  {
    id: 'system-design',
    icon: Compass,
    title: 'System Design',
    description: 'Studying scalable architecture — caching, message queues, load balancing, and distributed systems.',
    gradient: 'from-accent/10 to-teal-500/10',
    iconColor: 'text-accent',
  },
  {
    id: 'performance',
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Focusing on Core Web Vitals, bundle splitting, image optimisation, and runtime rendering performance.',
    gradient: 'from-emerald-500/10 to-green-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    id: 'ui-ux',
    icon: Lightbulb,
    title: 'Modern UI/UX',
    description: 'Levelling up product design skills — design tokens, component systems, accessibility, and motion design.',
    gradient: 'from-orange-500/10 to-amber-500/10',
    iconColor: 'text-orange-400',
  },
]

// ─── Phase Colour Helpers ──────────────────────────────────────────────────────

const PHASE_STYLES: Record<TimelineMilestone['phase'], { dot: string; label: string; labelBg: string; labelText: string; line: string }> = {
  foundation:   { dot: 'bg-blue-500',    label: 'Foundation',   labelBg: 'bg-blue-500/10',    labelText: 'text-blue-500',    line: 'from-blue-500/40' },
  intermediate: { dot: 'bg-violet-500',  label: 'Intermediate', labelBg: 'bg-violet-500/10',  labelText: 'text-violet-500',  line: 'from-violet-500/40' },
  advanced:     { dot: 'bg-accent',      label: 'Advanced',     labelBg: 'bg-accent/10',       labelText: 'text-accent',      line: 'from-accent/40' },
  expert:       { dot: 'bg-primary',     label: 'Expert',       labelBg: 'bg-primary/10',      labelText: 'text-primary',     line: 'from-primary/40' },
}

// ─── Achievement Card ─────────────────────────────────────────────────────────

function AchievementCard({ achievement: a, index }: { achievement: Achievement; index: number }) {
  const Icon = a.icon
  return (
    <AnimateIn direction="up" delay={0.06 * index}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className={cn(
          'group relative flex flex-col gap-4 rounded-[22px] p-6',
          'border border-border/60 bg-card/60 dark:bg-[#111827]/70 backdrop-blur-md',
          'shadow-sm shadow-black/4 dark:shadow-black/20',
          'hover:shadow-xl hover:shadow-black/8 dark:hover:shadow-black/35',
          'transition-all duration-300',
          a.borderHover
        )}
        aria-label={a.title}
      >
        {/* Background gradient on hover */}
        <div className={cn('absolute inset-0 rounded-[22px] bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300', a.gradient)} />

        {/* Header row */}
        <div className="relative flex items-start justify-between gap-3">
          <div className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10', a.iconBg)}>
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon size={20} className={a.iconColor} aria-hidden="true" />
            </motion.div>
          </div>
          <span className={cn('text-[10px] font-bold font-heading uppercase tracking-widest px-2.5 py-1 rounded-full border', a.iconBg, a.iconColor, 'border-current/20')}>
            {a.tag}
          </span>
        </div>

        {/* Content */}
        <div className="relative space-y-2">
          <h3 className="font-heading text-base font-bold text-foreground leading-tight">
            {a.title}
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {a.description}
          </p>
        </div>

        {/* Bottom tick */}
        <div className="relative flex items-center gap-1.5 mt-auto pt-1">
          <CheckCircle2 size={13} className="text-emerald-500 shrink-0" aria-hidden="true" />
          <span className="text-[11px] font-body text-muted-foreground/70">Verified achievement</span>
        </div>
      </motion.div>
    </AnimateIn>
  )
}

// ─── Timeline Item ────────────────────────────────────────────────────────────

function TimelineItem({
  milestone,
  index,
  isLast,
}: {
  milestone: TimelineMilestone
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const phase = PHASE_STYLES[milestone.phase]
  const Icon = milestone.icon

  return (
    <div ref={ref} className="relative flex gap-3 sm:gap-6">
      {/* Left: dot + line */}
      <div className="relative flex flex-col items-center">
        {/* Animated dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.05 * index + 0.1, duration: 0.35, type: 'spring', stiffness: 300, damping: 20 }}
          className={cn(
            'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-white/10',
            phase.dot,
            'shadow-md'
          )}
          aria-hidden="true"
        >
          <Icon size={16} className="text-white" />
        </motion.div>

        {/* Animated connector line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.05 * index + 0.25, duration: 0.5, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className={cn(
              'mt-2 w-[2px] flex-1 min-h-[3rem] rounded-full bg-gradient-to-b to-transparent',
              phase.line
            )}
          />
        )}
      </div>

      {/* Right: content card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.05 * index + 0.15, duration: 0.4, ease: 'easeOut' }}
        className={cn(
          'flex-1 mb-8 rounded-[18px] p-5',
          'border border-border/50 bg-card/50 dark:bg-[#111827]/50 backdrop-blur-sm',
          'shadow-sm shadow-black/4 dark:shadow-black/15',
          'hover:border-border transition-colors duration-200'
        )}
      >
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="font-heading text-sm font-bold text-foreground leading-tight">
            {milestone.title}
          </h3>
          <span className={cn('text-[10px] font-bold font-heading uppercase tracking-widest px-2 py-0.5 rounded-full', phase.labelBg, phase.labelText)}>
            {phase.label}
          </span>
        </div>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {milestone.description}
        </p>
      </motion.div>
    </div>
  )
}

// ─── Currently Learning Card ──────────────────────────────────────────────────

function LearningCard({ card, index }: { card: LearningCard; index: number }) {
  const Icon = card.icon
  return (
    <AnimateIn direction="up" delay={0.07 * index}>
      <motion.div
        whileHover={{ y: -4, scale: 1.015 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={cn(
          'group relative flex flex-col gap-3 rounded-[20px] p-5',
          'border border-border/60 bg-card/60 dark:bg-[#111827]/70 backdrop-blur-md',
          'shadow-sm dark:shadow-black/20',
          'hover:shadow-lg hover:border-border',
          'transition-all duration-300'
        )}
        aria-label={card.title}
      >
        {/* Bg gradient */}
        <div className={cn('absolute inset-0 rounded-[20px] bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300', card.gradient)} />

        {/* Icon */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 dark:bg-white/[0.06] border border-border/40">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'inline-flex' }}
            aria-hidden="true"
          >
            <Icon size={18} className={card.iconColor} />
          </motion.div>
        </div>

        {/* Text */}
        <div className="relative space-y-1">
          <h3 className="font-heading text-sm font-bold text-foreground leading-tight">{card.title}</h3>
          <p className="text-xs text-muted-foreground font-body leading-relaxed">{card.description}</p>
        </div>

        {/* "In Progress" indicator */}
        <div className="relative flex items-center gap-1.5 mt-auto">
          <span className="flex h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
          <span className="text-[11px] font-body text-muted-foreground/60 font-medium">In Progress</span>
        </div>
      </motion.div>
    </AnimateIn>
  )
}

// ─── Section Label ─────────────────────────────────────────────────────────────

function SectionLabel({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
        <Icon size={13} className="text-primary" aria-hidden="true" />
      </div>
      <h3 className="text-xs font-bold font-heading text-primary uppercase tracking-widest">{text}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative w-full py-20 md:py-32 overflow-hidden border-t border-border/20"
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-secondary/4 dark:bg-secondary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[28rem] h-[28rem] bg-primary/4 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[22rem] h-[22rem] bg-accent/3 dark:bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">

        {/* ── Section Header ── */}
        <AnimateIn direction="up" delay={0} className="text-center mb-16 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase font-heading">
            <Trophy size={14} aria-hidden="true" />
            Growth & Recognition
          </div>
          <Heading as="h2" size="xl" id="achievements-heading">
            Achievements & <GradientText>Learning Journey</GradientText>
          </Heading>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body text-balance">
            My journey as a software engineer is defined by consistent growth, hands-on experience, and an
            unwavering commitment to building real products. Every milestone below represents a deliberate
            step toward becoming a well-rounded, production-ready developer.
          </p>
        </AnimateIn>

        {/* ══════════════════════════════════════════
            1. ACHIEVEMENTS GRID
        ══════════════════════════════════════════ */}
        <div className="mb-20 md:mb-24">
          <SectionLabel icon={Trophy} text="Achievements" />
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.map((a, i) => (
              <AchievementCard key={a.id} achievement={a} index={i} />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            2. LEARNING TIMELINE (Two Column)
        ══════════════════════════════════════════ */}
        <div className="mb-20 md:mb-24">
          <SectionLabel icon={BookOpen} text="Learning Journey" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
            {/* Left: Timeline */}
            <div
              className="relative"
              role="list"
              aria-label="Learning journey milestones"
            >
              {TIMELINE.map((milestone, i) => (
                <div key={milestone.id} role="listitem">
                  <TimelineItem
                    milestone={milestone}
                    index={i}
                    isLast={i === TIMELINE.length - 1}
                  />
                </div>
              ))}
            </div>

            {/* Right: Summary card (desktop only) */}
            <div className="hidden lg:flex items-start pt-4">
              <AnimateIn direction="right" delay={0.2} className="sticky top-28 w-full">
                <div className={cn(
                  'rounded-[24px] p-7 border border-border/50',
                  'bg-card/60 dark:bg-[#111827]/70 backdrop-blur-md',
                  'shadow-xl shadow-black/5 dark:shadow-black/20'
                )}>
                  {/* Gradient accent bar */}
                  <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent mb-6" />

                  <div className="space-y-5">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                        The Developer&apos;s Path
                      </h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        Every milestone in my learning journey was chosen deliberately — starting from the
                        fundamentals of the web and progressing systematically toward full-stack development
                        and artificial intelligence.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { phase: 'Foundation',   color: 'bg-blue-500',   desc: 'HTML, CSS & JavaScript' },
                        { phase: 'Intermediate', color: 'bg-violet-500', desc: 'React & Next.js' },
                        { phase: 'Advanced',     color: 'bg-accent',     desc: 'Full-Stack & AI Integration' },
                        { phase: 'Expert',       color: 'bg-primary',    desc: 'Product Engineering' },
                      ].map(({ phase, color, desc }) => (
                        <div key={phase} className="flex items-center gap-3">
                          <span className={cn('h-2.5 w-2.5 rounded-full shrink-0', color)} aria-hidden="true" />
                          <div>
                            <span className="text-xs font-bold font-heading text-foreground">{phase}</span>
                            <span className="text-xs text-muted-foreground font-body ml-2">{desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border/40">
                      {[
                        { label: 'Technologies', value: '10+' },
                        { label: 'Projects',     value: '4+' },
                        { label: 'Internships',  value: '2' },
                      ].map(({ label, value }) => (
                        <div key={label} className="text-center">
                          <p className="font-heading text-lg font-bold text-foreground">{value}</p>
                          <p className="text-[10px] text-muted-foreground font-body mt-0.5">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            3. CURRENTLY LEARNING
        ══════════════════════════════════════════ */}
        <div>
          <SectionLabel icon={Flame} text="Currently Learning" />

          {/* Intro blurb */}
          <AnimateIn direction="fade" delay={0.05} className="mb-8">
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-2xl">
              Growth doesn&apos;t stop at shipping. These are the areas I&apos;m actively deepening to become
              a more capable, well-rounded engineer — practised through side projects, open-source
              exploration, and structured study.
            </p>
          </AnimateIn>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {CURRENTLY_LEARNING.map((card, i) => (
              <LearningCard key={card.id} card={card} index={i} />
            ))}
          </div>

          {/* Bottom progress note */}
          <AnimateIn direction="up" delay={0.3} className="mt-10 text-center">
            <div className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-full',
              'bg-muted/50 dark:bg-white/[0.04] border border-border/40',
              'text-xs font-body text-muted-foreground'
            )}>
              <Sparkles size={12} className="text-primary" aria-hidden="true" />
              Continuously learning · Building in public · Shipping real products
            </div>
          </AnimateIn>
        </div>

      </Container>
    </section>
  )
}
