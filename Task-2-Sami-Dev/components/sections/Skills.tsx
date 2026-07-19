'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Cpu, Sparkles, Layout, Database, Wrench, Brain } from 'lucide-react'
import { Container, Heading, Badge, AnimateIn, GradientText } from '@/components/ui'
import { cn } from '@/lib/utils'

// ─── Custom Technology Brand SVGs ─────────────────────────────────────────────

interface TechIconProps {
  name: string
  className?: string
}

export function TechIcon({ name, className }: TechIconProps) {
  switch (name.toLowerCase()) {
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0z" fill="#E34F26"/>
          <path d="M12 2.18v19.64l6.732-1.91L20.25 3.82H12z" fill="#EF652A"/>
          <path d="M12 9.61H7.81l-.27-3.03H12V4.39H5.06l.81 9.1h6.13v-3.88zM12 16.59l-3.07-.83-.2-2.22H6.52l.39 4.39L12 19.35v-2.76z" fill="#EBEBEB"/>
          <path d="M12 9.61h4.19l-.39 4.39-3.8 1.03v2.76l5.09-1.41.53-6h-5.62v2.23zm0-5.22v2.19h4.74l-.2-2.19H12z" fill="#FFF"/>
        </svg>
      )
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0z" fill="#1572B6"/>
          <path d="M12 2.18v19.64l6.732-1.91L20.25 3.82H12z" fill="#33A9DC"/>
          <path d="M12 9.61H7.81l-.27-3.03H12V4.39H5.06l.81 9.1h6.13v-3.88zM12 16.59l-3.07-.83-.2-2.22H6.52l.39 4.39L12 19.35v-2.76z" fill="#EBEBEB"/>
          <path d="M12 9.61h4.19l-.39 4.39-3.8 1.03v2.76l5.09-1.41.53-6h-5.62v2.23zm0-5.22v2.19h4.74l-.2-2.19H12z" fill="#FFF"/>
        </svg>
      )
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M18.8 19.2c-.1.7-.5 1.2-1.2 1.6-.7.4-1.5.6-2.5.6-1 0-1.8-.2-2.3-.6-.6-.4-.9-1-1-1.7h2.2c0 .4.1.7.3.9.2.2.6.3 1.1.3.4 0 .7-.1.9-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.2-.2-.6-.3-1.2-.5l-.8-.2c-1.1-.3-1.9-.7-2.3-1.2-.5-.5-.7-1.1-.7-1.9 0-.8.3-1.4.9-1.9.6-.5 1.4-.7 2.4-.7.9 0 1.6.2 2.2.5.6.3.9.9 1 1.6h-2.1c-.1-.3-.2-.5-.4-.7-.2-.1-.5-.2-.8-.2-.3 0-.6.1-.8.2-.2.1-.3.3-.3.5 0 .2.1.3.2.4.1.1.4.2.8.3l.8.2c.9.2 1.6.6 1.9 1 .4.4.6.9.6 1.6zM10.1 9.7v8.2c0 .7-.1 1.2-.4 1.5-.3.3-.7.5-1.4.5-.4 0-.8-.1-1.1-.2-.3-.1-.5-.3-.7-.6-.2-.3-.3-.7-.3-1.3H8.3c0 .4.1.7.2.9.1.1.3.2.6.2.3 0 .5-.1.6-.2.1-.1.2-.4.2-.9V9.7H10.1z" fill="#000000"/>
        </svg>
      )
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#3178C6"/>
          <path d="M20 18.7c-.1.6-.4 1.1-.9 1.4-.5.3-1.2.5-2 .5-.8 0-1.4-.2-1.9-.5-.5-.3-.8-.8-.9-1.5h2c0 .3.1.6.3.8.2.2.5.3.9.3.4 0 .7-.1.9-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.6-.2-.2-.5-.3-1-.4l-.8-.2c-.9-.2-1.5-.6-1.9-1-.4-.4-.6-.9-.6-1.6 0-.7.3-1.2.8-1.6.5-.4 1.2-.6 2-.6.7 0 1.3.1 1.8.4.5.3.8.7.9 1.3h-1.9c0-.3-.1-.4-.3-.6-.2-.1-.4-.2-.7-.2-.3 0-.5.1-.7.2-.2.1-.3.3-.3.5 0 .2.1.3.2.4.1.1.4.2.8.3l.8.2c.9.2 1.6.6 1.9 1 .4.4.6.9.6 1.6zM13.6 9.6H5v1.9h3.3v10.3h2.1V11.5h3.2V9.6z" fill="#FFFFFF"/>
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23 23 20.46" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    case 'next.js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="currentColor" className="text-black dark:text-white"/>
          <path d="M17.2 18.2L10.3 9.4V16.8H8.8V7.2h1.3l6.9 8.8V7.2h1.5v11h-1.3z" fill="url(#nextjs-grad-2)"/>
          <defs>
            <linearGradient id="nextjs-grad-2" x1="12" y1="7" x2="17.2" y2="18.2" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      )
    case 'tailwind css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.4 1.7 1.2 1.2 2.7 2.7 5.8 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.4-1.7-1.2-1.2-2.7-2.7-5.8-2.7zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.4 1.7 1.2 1.2 2.7 2.7 5.8 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.4-1.7-1.2-1.2-2.7-2.7-5.8-2.7z" fill="#38BDF8"/>
        </svg>
      )
    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M19.26 12.39L12.44 20c-.57.65-1.61.21-1.57-.65L11.5 13H5.66c-.66 0-1.07-.72-.73-1.28L11.66 4c.57-.65 1.61-.21 1.57.65L12.5 11h5.84c.66 0 1.07.72.73 1.28z" fill="#3ECF8E"/>
        </svg>
      )
    case 'rest apis':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6M12 4.5l-2 15" />
        </svg>
      )
    case 'authentication':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4M12 14v3"/>
        </svg>
      )
    case 'database design':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
        </svg>
      )
    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L1.4 10.9c-.4.4-.4 1.1 0 1.5l10.2 10.2c.4.4 1.1.4 1.5 0l10.2-10.2c.4-.5.4-1.2 0-1.5z" fill="#F05032"/>
          <path d="M12.5 6.7c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3c0 .5.3.9.7 1.1v4.4c-.4.2-.7.6-.7 1.1 0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3c0-.5-.3-.9-.7-1.1V8.9c.3-.2.5-.5.6-.8l2 2c-.1.2-.2.4-.2.6 0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3-.6-1.3-1.3-1.3c-.5 0-.9.3-1.1.7l-2-2c.1-.2.2-.4.2-.6z" fill="#FFF"/>
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    case 'vs code':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M23.98 6.3L21.06 3.7c-.2-.17-.5-.22-.76-.11l-9.3 4.2-7.2-5.4C3.5 2.15 3.1 2.1 2.8 2.23l-2.3 1C.2 3.35 0 3.65 0 4v16c0 .35.2.65.5.77l2.3 1c.3.13.7.08 1-.17l7.2-5.4 9.3 4.2c.26.11.56.06.76-.11l2.92-2.6c.32-.28.5-.7.5-1.13V7.43c0-.43-.18-.85-.5-1.13z" fill="#007ACC"/>
        </svg>
      )
    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M24 22.5H0L12 1.5L24 22.5Z" />
        </svg>
      )
    case 'responsive design':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2" y="4" width="14" height="11" rx="1.5" />
          <path d="M6 15v3M10 15v3M4 18h8" />
          <rect x="14" y="8" width="8" height="12" rx="1.5" fill="currentColor" className="text-background" />
          <circle cx="18" cy="17" r="0.5" fill="currentColor" />
        </svg>
      )
    case 'prompt engineering':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 17l6-5-6-5" />
          <line x1="12" y1="19" x2="20" y2="19" />
          <path d="M19 3v4M21 5h-4" strokeWidth="1.5" />
          <path d="M15 7v2M16 8h-2" strokeWidth="1.5" />
        </svg>
      )
    case 'ai integration':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6" rx="1"/>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
        </svg>
      )
    case 'openrouter':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <path d="M12 2v7M12 15v7M2 12h7M15 12h7" />
        </svg>
      )
    case 'llm applications':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="3" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
  }
}

// ─── Skills Data Structure ──────────────────────────────────────────────────

interface Skill {
  name: string
  desc: string
  tooltip: string
  category: 'frontend' | 'backend' | 'tools' | 'ai'
}

const SKILL_ITEMS: Skill[] = [
  // Category 1: Frontend Development
  {
    name: 'HTML5',
    desc: 'Semantic elements, SEO optimization, and web standard structures.',
    tooltip: 'Used in all web projects for accessible, well-structured, and compliant layouts.',
    category: 'frontend'
  },
  {
    name: 'CSS3',
    desc: 'Modern layout models, variables, keyframe animations, and custom styling.',
    tooltip: 'Handcrafted responsive layouts, advanced visuals, and smooth transition effects.',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    desc: 'Vanilla JS scripting, asynchronous programming, and client-side web APIs.',
    tooltip: 'Developed dynamic event models, background data fetching, and state triggers.',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    desc: 'Static type checking, interfaces, generics, and compile-time code safety.',
    tooltip: 'Utilized across React/Next.js codebases to enforce structural integrity.',
    category: 'frontend'
  },
  {
    name: 'React',
    desc: 'Declarative component architecture, custom hooks, and state paradigms.',
    tooltip: 'Engineered complex interactive dashboards, state machines, and view states.',
    category: 'frontend'
  },
  {
    name: 'Next.js',
    desc: 'SSR/SSG hybrid pipelines, file-based routing, and backend integrations.',
    tooltip: 'Used for architecting high-performance web apps, including Neuron OS.',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    desc: 'Utility-first layout styling, theme customisation, and fluid grids.',
    tooltip: 'Modern responsive UI development matching consistent design tokens.',
    category: 'frontend'
  },

  // Category 2: Backend & Database
  {
    name: 'Supabase',
    desc: 'Relational database hosting, real-time sync, and microservice integration.',
    tooltip: 'Authentication and database management in full-stack web applications.',
    category: 'backend'
  },
  {
    name: 'REST APIs',
    desc: 'API endpoint schemas, request-response handling, and secure interfaces.',
    tooltip: 'Constructed custom microservices and consumed complex web hooks.',
    category: 'backend'
  },
  {
    name: 'Authentication',
    desc: 'Secure sessions, OAuth bridges, tokens, and authorization scopes.',
    tooltip: 'Implemented safe JWT-based, session, and role-based client routing.',
    category: 'backend'
  },
  {
    name: 'Database Design',
    desc: 'PostgreSQL structures, foreign relations, indexes, and queries.',
    tooltip: 'Modeled database schemas ensuring performance, safety, and relational integrity.',
    category: 'backend'
  },

  // Category 3: Tools & Workflow
  {
    name: 'Git',
    desc: 'Distributed source control, branching trees, and change tracking.',
    tooltip: 'Version control, local staging, and collaboration with pull request systems.',
    category: 'tools'
  },
  {
    name: 'GitHub',
    desc: 'Remote hosting, review cycles, releases, and CI/CD automation.',
    tooltip: 'Collaborated on shared repositories and configured automated builds.',
    category: 'tools'
  },
  {
    name: 'VS Code',
    desc: 'Customized code workspace, debugging, refactoring, and lint tools.',
    tooltip: 'Primary editor configured for optimal speed, error tracking, and formatting.',
    category: 'tools'
  },
  {
    name: 'Vercel',
    desc: 'Serverless cloud hosting, preview branches, and global edge CDNs.',
    tooltip: 'Deployed next-generation React/Next.js frontend applications.',
    category: 'tools'
  },
  {
    name: 'Responsive Design',
    desc: 'Fluid grids, flexbox, adaptive viewports, and custom breakpoints.',
    tooltip: 'Handcrafted responsive pages tested across screens from 320px to 4K resolutions.',
    category: 'tools'
  },

  // Category 4: Artificial Intelligence
  {
    name: 'Prompt Engineering',
    desc: 'Structuring system contexts, parameters, and inputs for LLM reasoning.',
    tooltip: 'Designed detailed prompts for agentic code workflows and chat systems.',
    category: 'ai'
  },
  {
    name: 'AI Integration',
    desc: 'Connecting intelligent language and reasoning models to user interfaces.',
    tooltip: 'Integrated web pipelines with smart content parsing, analytics, and summaries.',
    category: 'ai'
  },
  {
    name: 'OpenRouter',
    desc: 'Unified API gateway for dynamically routing requests to top LLMs.',
    tooltip: 'Configured dynamic fallbacks, cost analysis, and model weights across LLMs.',
    category: 'ai'
  },
  {
    name: 'LLM Applications',
    desc: 'Building intelligent applications with context-aware processing loops.',
    tooltip: 'Developed chatbot tools, automated document flows, and agent interfaces.',
    category: 'ai'
  }
]

// ─── Category Metadata ────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'all', label: 'All Tech', icon: Sparkles, color: 'primary', gradient: 'from-primary to-accent', shadow: 'rgba(37,99,235,0.1)' },
  { id: 'frontend', label: 'Frontend', icon: Layout, color: 'primary', gradient: 'from-primary to-accent', shadow: 'rgba(37,99,235,0.1)' },
  { id: 'backend', label: 'Backend & DB', icon: Database, color: 'success', gradient: 'from-emerald-500 to-accent', shadow: 'rgba(16,185,129,0.1)' },
  { id: 'tools', label: 'Tools & Workflow', icon: Wrench, color: 'secondary', gradient: 'from-secondary to-pink-500', shadow: 'rgba(124,58,237,0.1)' },
  { id: 'ai', label: 'AI & Models', icon: Brain, color: 'warning', gradient: 'from-warning to-orange-500', shadow: 'rgba(245,158,11,0.1)' }
] as const

// Helper to resolve specific color gradient and details for a skill's category
function getCategoryMeta(category: Skill['category']) {
  return CATEGORIES.find(c => c.id === category) || CATEGORIES[1]
}

// ─── Skill Card Component ──────────────────────────────────────────────────────

interface SkillCardProps {
  skill: Skill
}

function SkillCard({ skill }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const showTooltip = isHovered || isFocused

  const meta = getCategoryMeta(skill.category)
  const gradientClass = meta.gradient
  
  // Custom theme shadow color based on category
  const shadowColor = skill.category === 'frontend' ? 'hover:shadow-primary/10' 
                    : skill.category === 'backend' ? 'hover:shadow-emerald-500/10'
                    : skill.category === 'tools' ? 'hover:shadow-secondary/10'
                    : 'hover:shadow-warning/10'

  return (
    <div className="relative h-full !overflow-visible">
      {/* ── Custom Floating Tooltip ── */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-[calc(100%+12px)] left-1/2 z-30 w-52 -translate-x-1/2 pointer-events-none"
            role="tooltip"
            id={`tooltip-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <div className="relative rounded-xl border border-border/80 bg-card p-3 text-center text-xs shadow-2xl backdrop-blur-xl">
              {/* Top gradient accent line */}
              <div className={cn("absolute top-0 left-0 right-0 h-[2.5px] rounded-t-xl bg-gradient-to-r", gradientClass)} />
              <p className="font-heading font-bold text-foreground mb-0.5 leading-tight">{skill.name}</p>
              <p className="font-body text-muted-foreground leading-relaxed text-[11px] font-medium">{skill.tooltip}</p>
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-[5px] rotate-45 border-b border-r border-border/80 bg-card" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Premium Card Outer Wrapper (Border Gradient Container) ── */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        tabIndex={0}
        aria-describedby={`tooltip-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "group relative h-full w-full p-[1.5px] rounded-[20px] overflow-hidden",
          "bg-white/10 dark:bg-white/[0.04]",
          "border border-white/5 dark:border-white/[0.02]",
          "shadow-md shadow-black/5 dark:shadow-black/20 hover:shadow-2xl transition-all duration-300",
          shadowColor,
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        )}
      >
        {/* Animated Accent Border: changes opacity on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
            gradientClass
          )}
        />

        {/* Card Content Base */}
        <div className="relative h-full w-full bg-card/60 dark:bg-[#111827]/40 rounded-[18.5px] p-6 backdrop-blur-md flex flex-col justify-between overflow-hidden">
          {/* Subtle inside gradient background glow on hover */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-4 transition-opacity duration-500 bg-gradient-to-br pointer-events-none -z-10",
              gradientClass
            )}
          />

          <div className="space-y-4">
            {/* Header: Icon + Accent Dot Indicator */}
            <div className="flex items-center justify-between">
              {/* Icon Container */}
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 dark:bg-white/[0.03]",
                  "border border-white/10 dark:border-white/[0.05]",
                  "text-muted-foreground group-hover:text-foreground",
                  "group-hover:scale-105 group-hover:rotate-6 transition-all duration-300"
                )}
              >
                <TechIcon name={skill.name} className="h-6 w-6 object-contain" />
              </div>

              {/* Accent Pill Dot */}
              <Badge variant={meta.color} size="sm" className="font-semibold uppercase tracking-wider text-[9px] px-2 py-0.5">
                {meta.label}
              </Badge>
            </div>

            {/* Tech Name */}
            <h4 className="font-heading text-base font-bold text-foreground leading-tight tracking-tight">
              {skill.name}
            </h4>

            {/* Description */}
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              {skill.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Main Skills Section ──────────────────────────────────────────────────────

export function Skills() {
  const [activeTab, setActiveTab] = useState<typeof CATEGORIES[number]['id']>('all')

  const filteredSkills = activeTab === 'all'
    ? SKILL_ITEMS
    : SKILL_ITEMS.filter((skill) => skill.category === activeTab)

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative w-full py-20 md:py-32 overflow-hidden border-t border-border/20 bg-background"
    >
      {/* Background radial overlays */}
      <div className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] bg-primary/4 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[28rem] h-[28rem] bg-secondary/4 dark:bg-secondary/4 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        
        {/* ── Section Header ── */}
        <AnimateIn direction="up" delay={0} className="text-center mb-12 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase font-heading">
            <Cpu size={14} aria-hidden="true" />
            Technical Expertise
          </div>
          <Heading as="h2" size="xl" id="skills-heading">
            Skills & <GradientText>Technologies</GradientText>
          </Heading>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-body text-balance">
            I specialize in crafting high-performance, responsive web interfaces, designing secure 
            relational databases, and building modular solutions backed by artificial intelligence. 
            I continuously refine my stack to keep up with industry standards and build user-centric applications.
          </p>
        </AnimateIn>

        {/* ── Category Filters (Mobile Swipeable / Desktop Wrapped) ── */}
        <AnimateIn direction="up" delay={0.1} className="mb-12 flex justify-center">
          <div 
            className={cn(
              "flex items-center gap-2 p-1.5 rounded-2xl",
              "bg-muted/50 dark:bg-[#111827]/40",
              "border border-border/40 dark:border-white/[0.04]",
              "w-full sm:w-auto overflow-x-auto scrollbar-none",
              "-mx-4 px-4 sm:mx-0 sm:px-1.5"
            )}
            role="tablist"
            aria-label="Filter skills by category"
          >
            {CATEGORIES.map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="skills-grid"
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 text-xs font-bold font-heading rounded-xl transition-colors shrink-0",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "text-primary dark:text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {/* Slider indicator background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded-xl bg-white dark:bg-card border border-border shadow-sm dark:shadow-black/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <TabIcon size={14} className="relative z-10 shrink-0" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </AnimateIn>

        {/* ── Skills Layout Container ── */}
        <LayoutGroup>
          <motion.div
            layout="position"
            id="skills-grid"
            role="tabpanel"
            aria-label={`${activeTab} Skills`}
            className={cn(
              "grid gap-6 justify-center",
              "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
              "w-full h-auto min-h-[300px]"
            )}
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* ── Footer Link/Notice ── */}
        <AnimateIn direction="up" delay={0.2} className="text-center mt-12 md:mt-16 text-xs text-muted-foreground/60 font-body">
          <p>
            Hover or focus on any skill to see context on where it has been applied.
          </p>
        </AnimateIn>

      </Container>
    </section>
  )
}
