'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CalendarDays, Globe, Briefcase } from 'lucide-react'
import { Container, Heading, Badge, AnimateIn, GradientText } from '@/components/ui'
import { cn } from '@/lib/utils'

// ─── Experience Data ──────────────────────────────────────────────────────────

const EXPERIENCES = [
  {
    id: 'decodelabs',
    company: 'DecodeLabs',
    monogram: 'DL',
    role: 'Web Development Intern',
    duration: 'May 2026 – July 2026',
    mode: 'Remote',
    accentFrom: 'from-primary',
    accentTo: 'to-accent',
    accentBg: 'bg-primary/10',
    accentBorder: 'border-primary/20',
    accentText: 'text-primary',
    description: [
      'Contributed to building responsive, cross-browser-compatible web interfaces as part of an agile remote team, translating design mockups into pixel-perfect, production-ready frontend implementations.',
      'Applied modern JavaScript and React patterns to deliver interactive UI components, improved accessibility, and optimized rendering performance across multiple client projects.',
      'Maintained clean, version-controlled codebases with Git, participated in code reviews, and followed best practices for scalable component architecture and semantic HTML structure.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
  },
  {
    id: 'nitroshift',
    company: 'NitroShift Studios',
    monogram: 'NS',
    role: 'Web Development Intern',
    duration: 'July 2026 – August 2026',
    mode: 'Remote',
    accentFrom: 'from-secondary',
    accentTo: 'to-primary',
    accentBg: 'bg-secondary/10',
    accentBorder: 'border-secondary/20',
    accentText: 'text-secondary',
    description: [
      'Built modern, high-performance web interfaces using Next.js and Tailwind CSS, focusing on delivering consistent UI/UX experiences that align with brand guidelines and product vision.',
      'Implemented responsive, mobile-first layouts and interactive components, ensuring flawless rendering across all major devices and screen sizes through meticulous cross-platform testing.',
      'Collaborated closely with designers and senior engineers to optimize frontend performance, reduce load times, and maintain a high-quality, component-driven codebase in a fast-paced studio environment.',
    ],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Git', 'JavaScript'],
  },
] as const

// ─── Individual Timeline Card ──────────────────────────────────────────────────

interface ExperienceCardProps {
  experience: (typeof EXPERIENCES)[number]
  index: number
}

function ExperienceCard({ experience: exp, index }: ExperienceCardProps) {
  const isEven = index % 2 === 0

  return (
    // On mobile: all cards right-of-line (pl-8)
    // On desktop: odd left, even right using grid columns
    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start gap-0 lg:gap-8">

      {/* ── Left slot (desktop only): empty for even, card for odd ── */}
      <div className={cn('hidden lg:flex lg:justify-end', isEven ? 'lg:block' : 'lg:block')}>
        {isEven && (
          <AnimateIn direction="right" delay={0.1 + index * 0.05} className="w-full max-w-lg ml-auto">
            <CardContent exp={exp} />
          </AnimateIn>
        )}
      </div>

      {/* ── Centre: dot + vertical connector handled by parent line ── */}
      <div className="hidden lg:flex flex-col items-center">
        {/* Timeline dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 + index * 0.05 }}
          className={cn(
            'relative z-10 flex h-5 w-5 items-center justify-center rounded-full',
            'border-2 border-background',
            `bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo}`,
            'shadow-lg'
          )}
        >
          {/* Pulse ring */}
          <span
            className={cn(
              'absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping',
              `bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo}`
            )}
            style={{ animationDuration: '2.5s' }}
          />
        </motion.div>
      </div>

      {/* ── Right slot (desktop only): card for even, empty for odd ── */}
      <div className="hidden lg:block">
        {!isEven && (
          <AnimateIn direction="left" delay={0.1 + index * 0.05} className="w-full max-w-lg">
            <CardContent exp={exp} />
          </AnimateIn>
        )}
      </div>

      {/* ── Mobile: card (always visible, left-of-dot stripped) ── */}
      <div className="lg:hidden col-span-full pl-8 relative">
        {/* Mobile dot on the left */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={cn(
            'absolute -left-[7px] top-6 z-10 h-4 w-4 rounded-full',
            'border-2 border-background',
            `bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo}`,
            'shadow-md'
          )}
        />
        <AnimateIn direction="up" delay={0.1 + index * 0.05} className="w-full">
          <CardContent exp={exp} />
        </AnimateIn>
      </div>
    </div>
  )
}

// ─── Card Content ─────────────────────────────────────────────────────────────

function CardContent({ exp }: { exp: (typeof EXPERIENCES)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'group relative w-full rounded-[20px] overflow-hidden',
        'border border-border/60 bg-card/60',
        'backdrop-blur-md',
        'shadow-lg shadow-black/5 dark:shadow-black/20',
        'transition-all duration-300',
        'hover:border-primary/20'
      )}
    >
      {/* Subtle top gradient accent bar */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-[2px]',
          `bg-gradient-to-r ${exp.accentFrom} ${exp.accentTo}`
        )}
      />

      <div className="p-5 sm:p-6 md:p-8 space-y-5">

        {/* Header: Monogram + Company + Role */}
        <div className="flex items-start gap-4">
          {/* Company Monogram */}
          <div
            className={cn(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
              `bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo}`,
              'text-white text-sm font-bold font-heading shadow-md'
            )}
          >
            {exp.monogram}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-base sm:text-lg font-bold text-foreground leading-tight">
              {exp.role}
            </h3>
            <p className={cn('text-sm font-semibold font-body mt-0.5', exp.accentText)}>
              {exp.company}
            </p>
          </div>
        </div>

        {/* Meta row: duration + remote */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-body">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} aria-hidden="true" className="shrink-0" />
            {exp.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Globe size={13} aria-hidden="true" className="shrink-0" />
            {exp.mode}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Description paragraphs */}
        <ul className="space-y-2.5" role="list">
          {exp.description.map((line, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed font-body">
              <span
                className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', `bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo}`)}
                aria-hidden="true"
              />
              {line}
            </li>
          ))}
        </ul>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-1" aria-label={`Technologies used at ${exp.company}`}>
          {exp.tags.map((tag) => (
            <Badge key={tag} variant="outline" size="sm" className="text-[10px] font-semibold">
              {tag}
            </Badge>
          ))}
        </div>

      </div>
    </motion.div>
  )
}

// ─── Main Experience Section ──────────────────────────────────────────────────

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-linked timeline line growth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
      className="relative w-full py-20 md:py-32 overflow-hidden border-t border-border/20"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-[32rem] h-[32rem] bg-primary/4 dark:bg-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[26rem] h-[26rem] bg-secondary/4 dark:bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">

        {/* ── Section Header ── */}
        <AnimateIn direction="up" delay={0} className="text-center mb-16 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase font-heading">
            <Briefcase size={14} aria-hidden="true" />
            Professional Journey
          </div>
          <Heading as="h2" size="xl" id="experience-heading">
            My <GradientText>Experience</GradientText>
          </Heading>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-body text-balance">
            Each internship has sharpened my skills, deepened my collaboration instincts, and reinforced
            my commitment to building software that is both functional and beautifully crafted.
          </p>
        </AnimateIn>

        {/* ── Timeline Container ── */}
        <div className="relative">

          {/* ── Vertical Timeline Line (desktop) ── */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border/50">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            />
          </div>

          {/* ── Vertical Timeline Line (mobile) ── */}
          <div className="lg:hidden absolute left-[2px] top-0 bottom-0 w-px bg-border/50">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            />
          </div>

          {/* ── Timeline Items ── */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>

        </div>

        {/* ── Bottom End-of-timeline marker ── */}
        <AnimateIn direction="up" delay={0.3} className="flex flex-col items-center mt-12 md:mt-16 gap-3">
          <div className="h-4 w-4 rounded-full border-2 border-border bg-background shadow-md" />
          <p className="text-xs text-muted-foreground/50 font-body font-medium tracking-wider uppercase">
            More to come
          </p>
        </AnimateIn>

      </Container>
    </section>
  )
}
