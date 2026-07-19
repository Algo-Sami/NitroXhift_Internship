'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  Star,
  Zap,
  Globe,
  Shield,
  Brain,
  FileText,
  Trophy,
  LayoutDashboard,
  ChevronRight,
  FolderOpen,
  CheckCircle2,
  Code2,
} from 'lucide-react'
import { Container, Heading, AnimateIn, GradientText, LinkButton, GitHubIcon } from '@/components/ui'
import { cn } from '@/lib/utils'

// ——— Tech Badge Component ————————————————————————————————————————————————————————

const TECH_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Next.js':      { bg: 'bg-zinc-900',     text: 'text-white',      border: 'border-zinc-700' },
  'React':        { bg: 'bg-[#61DAFB]/10', text: 'text-[#61DAFB]',  border: 'border-[#61DAFB]/30' },
  'TypeScript':   { bg: 'bg-[#3178C6]/10', text: 'text-[#3178C6]',  border: 'border-[#3178C6]/30' },
  'JavaScript':   { bg: 'bg-[#F7DF1E]/10', text: 'text-[#c9b500]',  border: 'border-[#F7DF1E]/30' },
  'Tailwind CSS': { bg: 'bg-[#38BDF8]/10', text: 'text-[#38BDF8]',  border: 'border-[#38BDF8]/30' },
  'Supabase':     { bg: 'bg-[#3ECF8E]/10', text: 'text-[#3ECF8E]',  border: 'border-[#3ECF8E]/30' },
  'OpenRouter AI':{ bg: 'bg-primary/10',   text: 'text-primary',    border: 'border-primary/30' },
  'Vercel':       { bg: 'bg-zinc-800',     text: 'text-zinc-200',   border: 'border-zinc-700' },
  'GitHub':       { bg: 'bg-zinc-800',     text: 'text-zinc-200',   border: 'border-zinc-700' },
  'HTML5':        { bg: 'bg-[#E34F26]/10', text: 'text-[#E34F26]',  border: 'border-[#E34F26]/30' },
  'CSS3':         { bg: 'bg-[#1572B6]/10', text: 'text-[#1572B6]',  border: 'border-[#1572B6]/30' },
  'Git':          { bg: 'bg-[#F05032]/10', text: 'text-[#F05032]',  border: 'border-[#F05032]/30' },
}

function TechBadge({ name }: { name: string }) {
  const style = TECH_COLORS[name] ?? { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border' }
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold font-heading',
        'border transition-colors duration-200',
        style.bg, style.text, style.border
      )}
    >
      {name}
    </motion.span>
  )
}

// â”€â”€â”€ Feature List Item â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface FeatureItem {
  icon: React.ElementType
  label: string
  desc: string
}

function FeatureRow({ icon: Icon, label, desc }: FeatureItem) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 mt-0.5">
        <Icon size={14} />
      </div>
      <div>
        <p className="text-sm font-semibold font-heading text-foreground leading-tight">{label}</p>
        <p className="text-xs text-muted-foreground font-body mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

// â”€â”€â”€ Laptop Mockup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      {/* Screen glow */}
      <div className="absolute inset-x-[8%] top-[4%] bottom-[12%] rounded-lg bg-primary/20 blur-2xl opacity-60 pointer-events-none" />

      {/* Laptop shell */}
      <div className="relative">
        {/* Lid / screen bezel */}
        <div className="relative mx-auto w-full rounded-t-2xl bg-gradient-to-b from-zinc-700 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900 p-[3px] shadow-2xl">
          {/* Inner screen area */}
          <div className="relative overflow-hidden rounded-t-xl bg-zinc-950 aspect-[16/10]">
            {/* Camera dot */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-zinc-700 z-10" />
            {/* Screenshot */}
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
            {/* Screen glare overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Base / hinge strip */}
        <div className="mx-[3%] h-2 rounded-b-sm bg-gradient-to-b from-zinc-600 to-zinc-700 dark:from-zinc-700 dark:to-zinc-800" />
        {/* Bottom stand */}
        <div className="mx-[8%] h-1.5 rounded-b-xl bg-gradient-to-b from-zinc-500 to-zinc-600 dark:from-zinc-600 dark:to-zinc-700 shadow-lg" />
      </div>
    </div>
  )
}

// â”€â”€â”€ Featured Project (Neuron OS) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const NEURON_OS_FEATURES: FeatureItem[] = [
  { icon: Brain,          label: 'AI Study Coach',         desc: 'Context-aware AI tutor powered by OpenRouter for adaptive learning.' },
  { icon: FileText,       label: 'AI Smart Notes',         desc: 'Intelligent note-taking with AI summarization and auto-organization.' },
  { icon: FolderOpen,     label: 'Smart File Organization',desc: 'Automated academic material categorization by subject and priority.' },
  { icon: Zap,            label: 'Quiz Generation',        desc: 'AI-generated quizzes from study materials with instant feedback.' },
  { icon: Shield,         label: 'Authentication',         desc: 'Secure session management via Supabase Auth with OAuth providers.' },
  { icon: Trophy,         label: 'Gamification',           desc: 'XP points, streaks, badges, and leaderboards to sustain motivation.' },
  { icon: Globe,          label: 'Responsive Dashboard',   desc: 'Fluid, pixel-perfect UI adapting seamlessly from mobile to 4K.' },
  { icon: LayoutDashboard,label: 'Task Management',        desc: 'Academic to-do system with deadlines, priorities, and reminders.' },
]

const NEURON_OS_STACK = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenRouter AI', 'Vercel', 'GitHub']

function FeaturedProjectCard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'stack'>('overview')

  return (
    <AnimateIn direction="up" delay={0.1}>
      <div
        className={cn(
          'relative w-full rounded-[28px] overflow-hidden',
          'border border-border/50',
          'bg-card/40 dark:bg-[#0d1526]/60 backdrop-blur-xl',
          'shadow-2xl shadow-black/10 dark:shadow-black/40',
          // Gradient border wrapper
          'p-[1px]'
        )}
      >
        {/* Animated gradient border ring */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/40 via-secondary/20 to-accent/30 opacity-60" />

        <div className="relative rounded-[27px] overflow-hidden bg-card/80 dark:bg-[#0d1526]/95 backdrop-blur-xl">

          {/* Top accent bar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-primary via-secondary to-accent" />

          <div className="p-6 sm:p-8 lg:p-10">

            {/* â”€â”€ Header Row â”€â”€ */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div className="space-y-2">
                {/* Featured badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary text-xs font-bold font-heading tracking-wide">
                  <Star size={11} className="fill-current" />
                  Featured Project
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  Neuron <GradientText>OS</GradientText>
                </h3>
                <p className="text-sm text-muted-foreground font-body font-medium">
                  AI-Powered Student Productivity Platform
                </p>
              </div>

              {/* Status + Live badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-bold font-heading">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold font-heading">
                  <Code2 size={11} />
                  Full-Stack
                </span>
              </div>
            </div>

            {/* â”€â”€ Two Column Layout â”€â”€ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

              {/* LEFT â€” Laptop mockup */}
              <div className="relative">
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative"
                >
                  <LaptopMockup
                    src="/projects/neuron-os.png"
                    alt="Neuron OS dashboard â€” AI-powered student productivity platform showing study coach, notes, and quiz generator"
                  />
                </motion.div>

                {/* Floating stat pills below mockup */}
                <div className="mt-5 flex flex-wrap gap-2 justify-center">
                  {[
                    { label: '8+ Features', color: 'from-primary to-secondary' },
                    { label: 'Full-Stack', color: 'from-secondary to-accent' },
                    { label: 'AI Powered', color: 'from-accent to-primary' },
                  ].map(({ label, color }) => (
                    <span
                      key={label}
                      className={cn(
                        'px-3 py-1 rounded-full text-xs font-bold font-heading text-white',
                        `bg-gradient-to-r ${color}`
                      )}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT â€” Info panel */}
              <div className="space-y-6">

                {/* Tab selector */}
                <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-muted/50 dark:bg-white/[0.04] border border-border/40 w-fit max-w-full">
                  {(['overview', 'features', 'stack'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        'px-4 py-1.5 rounded-lg text-xs font-bold font-heading capitalize transition-all duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                        activeTab === tab
                          ? 'bg-white dark:bg-card shadow-sm text-foreground border border-border'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="text-sm font-bold font-heading text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-primary" />
                          Project Overview
                        </h4>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">
                          Neuron OS is a comprehensive, AI-powered academic productivity platform engineered to transform
                          how students manage their learning. Built as a full-stack Next.js application, it consolidates
                          study materials, intelligent note-taking, AI-driven tutoring, and academic task management into
                          a unified, gamified dashboard experience.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-heading text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-secondary" />
                          Problem Solved
                        </h4>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">
                          Students juggle fragmented tools â€” separate note apps, flashcard decks, assignment trackers,
                          and AI tools. Neuron OS eliminates this friction by delivering a single intelligent workspace
                          that understands academic context and automates repetitive study workflows.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'features' && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {NEURON_OS_FEATURES.map((f) => (
                        <FeatureRow key={f.label} {...f} />
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'stack' && (
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        Neuron OS is built on a modern, production-grade stack selected for performance,
                        scalability, and developer experience.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {NEURON_OS_STACK.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                      <div className="pt-2 space-y-2 text-xs text-muted-foreground font-body">
                        <p className="flex items-start gap-2"><ChevronRight size={12} className="text-primary mt-0.5 shrink-0" /> Next.js 15 App Router for hybrid SSR/SSG rendering</p>
                        <p className="flex items-start gap-2"><ChevronRight size={12} className="text-secondary mt-0.5 shrink-0" /> Supabase for real-time Postgres, Auth, and Storage</p>
                        <p className="flex items-start gap-2"><ChevronRight size={12} className="text-accent mt-0.5 shrink-0" /> OpenRouter API routing to GPT-4o, Claude, and Gemini</p>
                        <p className="flex items-start gap-2"><ChevronRight size={12} className="text-primary mt-0.5 shrink-0" /> Deployed on Vercel Edge Network for global performance</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* â”€â”€ CTA Buttons â”€â”€ */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <LinkButton
                    href="https://neuron-os-theta.vercel.app/"
                    variant="primary"
                    size="md"
                    leftIcon={<ExternalLink size={15} />}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Neuron OS live demo"
                  >
                    Live Demo
                  </LinkButton>
                  <LinkButton
                    href="https://github.com/Algo-Sami/Neuron-OS"
                    variant="outline"
                    size="md"
                    leftIcon={<GitHubIcon size={15} />}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Neuron OS source code on GitHub"
                  >
                    Source Code
                  </LinkButton>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  )
}

// â”€â”€â”€ Secondary Projects Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface SecondaryProject {
  id: string
  title: string
  category: string
  description: string
  problem: string
  stack: string[]
  image: string
  liveUrl: string
  githubUrl: string
  accentFrom: string
  accentTo: string
  accentText: string
  accentBg: string
  accentBorder: string
  statusColor: string
}

const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: 'prime-estates',
    title: 'Prime Estates',
    category: 'Real Estate Platform',
    description:
      'A modern full-featured real estate listing platform enabling users to browse, filter, and discover premium properties. Built with a clean, property-first UI emphasizing photography and detail.',
    problem: 'Simplified the complex property search process with powerful filters, map integration, and rich listing pages.',
    stack: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git'],
    image: '/projects/prime-estates.png',
    liveUrl: 'https://algo-sami.github.io/prime-estates-website/',
    githubUrl: 'https://github.com/Algo-Sami/prime-estates-website',
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-400',
    accentText: 'text-emerald-500',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/30',
    statusColor: 'text-emerald-500',
  },
  {
    id: 'amazon-clone',
    title: 'Amazon Clone',
    category: 'E-Commerce Application',
    description:
      'A pixel-faithful Amazon front-end clone replicating core shopping flows — product browsing, filtering by category, real-time cart management, and a checkout experience — built entirely from scratch.',
    problem: 'Demonstrated deep understanding of complex UI state management, responsive layout, and multi-page navigation architecture.',
    stack: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git'],
    image: '/projects/amazon-clone.png',
    liveUrl: 'https://algo-sami.github.io/Amazon-clone/',
    githubUrl: 'https://github.com/Algo-Sami/Amazon-clone',
    accentFrom: 'from-orange-500',
    accentTo: 'to-amber-400',
    accentText: 'text-orange-500',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/30',
    statusColor: 'text-orange-500',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    category: 'Interactive Browser Game',
    description:
      'A visually polished, neon-themed Tic Tac Toe game with complete game logic, two-player mode, win detection, draw handling, animated score tracking, and instant replay — all without a single library.',
    problem: 'Exercised core JavaScript logic, DOM manipulation, event handling, and animation — proving mastery of vanilla fundamentals.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Git'],
    image: '/projects/tic-tac-toe.png',
    liveUrl: 'https://algo-sami.github.io/Tic-Tac-Toe-Game/',
    githubUrl: 'https://github.com/Algo-Sami/Tic-Tac-Toe-Game',
    accentFrom: 'from-violet-500',
    accentTo: 'to-pink-500',
    accentText: 'text-violet-500',
    accentBg: 'bg-violet-500/10',
    accentBorder: 'border-violet-500/30',
    statusColor: 'text-violet-500',
  },
]

// â”€â”€â”€ Secondary Project Card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function SecondaryProjectCard({ project: p, index }: { project: SecondaryProject; index: number }) {
  const [imgError, setImgError] = useState(false)

  return (
    <AnimateIn direction="up" delay={0.1 + index * 0.08}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'group relative flex flex-col h-full rounded-[22px] overflow-hidden',
          'border border-border/60 bg-card/60 dark:bg-[#111827]/60 backdrop-blur-md',
          'shadow-lg shadow-black/5 dark:shadow-black/25',
          'hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40',
          'hover:border-border transition-all duration-300'
        )}
      >
        {/* Top gradient accent line */}
        <div className={cn('h-[2.5px] w-full bg-gradient-to-r shrink-0', p.accentFrom, p.accentTo)} />

        {/* Screenshot */}
        <div className="relative overflow-hidden aspect-[16/9] bg-muted/40 shrink-0">
          {!imgError ? (
            <Image
              src={p.image}
              alt={`${p.title} â€” ${p.category} project screenshot`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            // Fallback gradient placeholder
            <div className={cn('w-full h-full bg-gradient-to-br flex items-center justify-center', p.accentFrom, p.accentTo)}>
              <span className="text-white/30 text-xs font-heading font-bold tracking-widest uppercase">
                {p.title}
              </span>
            </div>
          )}
          {/* Overlay gradient at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card/80 dark:from-[#111827]/80 to-transparent pointer-events-none" />

          {/* Category pill on image */}
          <div className="absolute top-3 left-3">
            <span className={cn('px-2.5 py-1 rounded-full text-[10px] font-bold font-heading border backdrop-blur-sm', p.accentBg, p.accentText, p.accentBorder)}>
              {p.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-4">

          <div>
            <h4 className="font-heading text-lg font-bold text-foreground leading-tight mb-2">
              {p.title}
            </h4>
            <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
              {p.description}
            </p>
          </div>

          {/* Problem solved */}
          <div className={cn('rounded-xl p-3 border', p.accentBg, p.accentBorder)}>
            <p className={cn('text-[10px] font-bold font-heading uppercase tracking-widest mb-1', p.accentText)}>
              Problem Solved
            </p>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              {p.problem}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 mt-auto">
            <LinkButton
              href={p.liveUrl}
              variant="primary"
              size="sm"
              leftIcon={<ExternalLink size={13} />}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${p.title} live demo`}
              className="flex-1 justify-center"
            >
              Live Demo
            </LinkButton>
            <LinkButton
              href={p.githubUrl}
              variant="outline"
              size="sm"
              leftIcon={<GitHubIcon size={13} />}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${p.title} source code on GitHub`}
              className="flex-1 justify-center"
            >
              GitHub
            </LinkButton>
          </div>
        </div>
      </motion.article>
    </AnimateIn>
  )
}

// â”€â”€â”€ Main Projects Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full py-20 md:py-32 overflow-hidden border-t border-border/20"
    >
      {/* Background ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/4 dark:bg-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[32rem] h-[32rem] bg-secondary/4 dark:bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[24rem] h-[24rem] bg-accent/3 dark:bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">

        {/* â”€â”€ Section Header â”€â”€ */}
        <AnimateIn direction="up" delay={0} className="text-center mb-16 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase font-heading">
            <Code2 size={14} aria-hidden="true" />
            My Work
          </div>
          <Heading as="h2" size="xl" id="projects-heading">
            Featured <GradientText>Projects</GradientText>
          </Heading>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body text-balance">
            These projects are proof of my commitment to solving real-world problems through modern web
            technologies and artificial intelligence â€” each one built from scratch, shipped to production,
            and engineered for scalability.
          </p>
        </AnimateIn>

        {/* â”€â”€ Featured Project: Neuron OS â”€â”€ */}
        <div className="mb-12 md:mb-16">
          <FeaturedProjectCard />
        </div>

        {/* â”€â”€ Divider with label â”€â”€ */}
        <AnimateIn direction="fade" delay={0.1} className="flex items-center gap-4 mb-10 md:mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/50" />
          <span className="text-xs font-bold font-heading text-muted-foreground/60 uppercase tracking-widest px-3">
            More Projects
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/50" />
        </AnimateIn>

        {/* â”€â”€ Secondary Projects Grid â”€â”€ */}
        <div
          className={cn(
            'grid gap-6',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          )}
          aria-label="Secondary projects grid"
        >
          {SECONDARY_PROJECTS.map((project, i) => (
            <SecondaryProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* â”€â”€ Bottom note â”€â”€ */}
        <AnimateIn direction="up" delay={0.3} className="text-center mt-12 md:mt-16">
          <p className="text-xs text-muted-foreground/50 font-body">
            More projects available on{' '}
            <LinkButton
              href="#"
              variant="ghost"
              size="sm"
              leftIcon={<GitHubIcon size={13} />}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-auto px-2 py-0.5 text-xs text-muted-foreground hover:text-foreground"
              aria-label="View all projects on GitHub"
            >
              GitHub
            </LinkButton>
          </p>
        </AnimateIn>

      </Container>
    </section>
  )
}

