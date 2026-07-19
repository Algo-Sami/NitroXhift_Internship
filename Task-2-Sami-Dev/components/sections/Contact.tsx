'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Send,
  Download,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Sparkles,
} from 'lucide-react'
import { Container, Heading, AnimateIn, GradientText, GitHubIcon, LinkedInIcon } from '@/components/ui'
import { cn } from '@/lib/utils'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/constants/site'

// ─── Contact Info Data ────────────────────────────────────────────────────────

interface ContactInfo {
  id: string
  icon: React.ElementType
  label: string
  value: string
  href?: string
  sub?: string
  iconBg: string
  iconColor: string
}

const CONTACT_INFO: ContactInfo[] = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Phone',
    value: PERSONAL_INFO.phone,
    href: PERSONAL_INFO.phoneHref,
    iconBg: 'bg-secondary/15',
    iconColor: 'text-secondary',
  },
  {
    id: 'location',
    icon: MapPin,
    label: 'Location',
    value: PERSONAL_INFO.location,
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
  },
  {
    id: 'education',
    icon: GraduationCap,
    label: 'Education',
    value: PERSONAL_INFO.education.school,
    sub: PERSONAL_INFO.education.campus,
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-500',
  },
]

const SOCIAL_LINKS_DATA = [
  {
    id: 'github',
    icon: GitHubIcon,
    label: 'GitHub',
    href: SOCIAL_LINKS.github,
    tooltip: 'View GitHub profile',
    from: 'from-zinc-700',
    to: 'to-zinc-900',
    hoverBorder: 'hover:border-zinc-500/50',
    hoverBg: 'hover:bg-zinc-800/50',
    hoverText: 'hover:text-white',
  },
  {
    id: 'linkedin',
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    tooltip: 'Connect on LinkedIn',
    from: 'from-[#0A66C2]/20',
    to: 'to-[#0A66C2]/5',
    hoverBorder: 'hover:border-[#0A66C2]/50',
    hoverBg: 'hover:bg-[#0A66C2]/10',
    hoverText: 'hover:text-[#0A66C2]',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    href: `mailto:${SOCIAL_LINKS.email}`,
    tooltip: 'Send an email',
    from: 'from-primary/20',
    to: 'to-primary/5',
    hoverBorder: 'hover:border-primary/50',
    hoverBg: 'hover:bg-primary/10',
    hoverText: 'hover:text-primary',
  },
]

const AVAILABILITY_ITEMS = [
  'Internships',
  'Freelance Projects',
  'Collaborations',
  'Startup Opportunities',
]


// ─── Social Button ────────────────────────────────────────────────────────────

function SocialButton({ link }: { link: typeof SOCIAL_LINKS_DATA[0] }) {
  const [showTooltip, setShowTooltip] = useState(false)
  const Icon = link.icon

  return (
    <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <motion.a
        href={link.href}
        target={link.href.startsWith('mailto') ? undefined : '_blank'}
        rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
        aria-label={link.label}
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'flex items-center gap-2.5 px-4 py-2.5 rounded-xl',
          'border border-border/60 text-muted-foreground',
          'bg-card/60 dark:bg-[#111827]/60 backdrop-blur-sm',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          link.hoverBorder, link.hoverBg, link.hoverText
        )}
      >
        <Icon size={16} />
        <span className="text-xs font-bold font-heading">{link.label}</span>
      </motion.a>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg bg-foreground text-background text-[11px] font-body font-medium whitespace-nowrap pointer-events-none z-50"
          >
            {link.tooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Contact Info Card ────────────────────────────────────────────────────────

function ContactCard({ info }: { info: ContactInfo }) {
  const Icon = info.icon
  const content = (
    <motion.div
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'flex items-center gap-4 p-4 rounded-[16px]',
        'border border-border/50 bg-card/50 dark:bg-[#111827]/50 backdrop-blur-sm',
        'transition-colors duration-200',
        info.href ? 'hover:border-border cursor-pointer' : ''
      )}
    >
      <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10', info.iconBg)}>
        <Icon size={18} className={info.iconColor} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold font-heading uppercase tracking-widest text-muted-foreground/60 mb-0.5">{info.label}</p>
        <p className="text-sm font-body font-medium text-foreground truncate">{info.value}</p>
        {info.sub && <p className="text-xs font-body text-muted-foreground mt-0.5">{info.sub}</p>}
      </div>
    </motion.div>
  )

  if (info.href) {
    return (
      <a href={info.href} aria-label={`${info.label}: ${info.value}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[16px]">
        {content}
      </a>
    )
  }
  return content
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = useCallback((): boolean => {
    const errs: Partial<FormState> = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.email.trim()) errs.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email.'
    if (!form.subject.trim()) errs.subject = 'Subject is required.'
    if (!form.message.trim()) errs.message = 'Message cannot be empty.'
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }, [form])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }, [errors])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')

    try {
      // Simulated send — replace with real API call (e.g. EmailJS, Resend, Formspree)
      await new Promise(res => setTimeout(res, 1800))
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
    }
  }, [validate])

  const inputClass = (field: keyof FormState) => cn(
    'w-full rounded-[12px] px-4 py-3',
    'bg-muted/40 dark:bg-white/[0.04] border transition-all duration-200',
    'font-body text-sm text-foreground placeholder:text-muted-foreground/50',
    'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50',
    errors[field]
      ? 'border-red-500/60 bg-red-500/5'
      : 'border-border/60 hover:border-border'
  )


  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-4">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold font-heading text-foreground mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputClass('name')}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 flex items-center gap-1 text-[11px] text-red-500">
              <AlertCircle size={11} aria-hidden="true" />{errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold font-heading text-foreground mb-1.5">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass('email')}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 flex items-center gap-1 text-[11px] text-red-500">
              <AlertCircle size={11} aria-hidden="true" />{errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-bold font-heading text-foreground mb-1.5">
          Subject <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          autoComplete="off"
          spellCheck="true"
          placeholder="Project discussion, internship inquiry, collaboration..."
          value={form.subject}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={inputClass('subject')}
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className="mt-1 flex items-center gap-1 text-[11px] text-red-500">
            <AlertCircle size={11} aria-hidden="true" />{errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold font-heading text-foreground mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          autoComplete="off"
          spellCheck="true"
          placeholder="Tell me about your project, opportunity, or idea..."
          value={form.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(inputClass('message'), 'resize-none leading-relaxed')}
        />

        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 flex items-center gap-1 text-[11px] text-red-500">
            <AlertCircle size={11} aria-hidden="true" />{errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        whileHover={status === 'idle' ? { scale: 1.02 } : {}}
        whileTap={status === 'idle' ? { scale: 0.97 } : {}}
        className={cn(
          'w-full flex items-center justify-center gap-2.5 py-3.5 rounded-[12px]',
          'font-bold font-heading text-sm',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          status === 'success'
            ? 'bg-emerald-500 text-white cursor-default'
            : status === 'loading'
            ? 'bg-primary/80 text-white cursor-wait'
            : 'bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-60'
        )}
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          {status === 'loading' && (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending...
            </motion.span>
          )}
          {status === 'success' && (
            <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <CheckCircle2 size={16} aria-hidden="true" />
              Message Sent!
            </motion.span>
          )}
          {(status === 'idle' || status === 'error') && (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Send size={16} aria-hidden="true" />
              Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {status === 'error' && (
        <p role="alert" className="text-center text-xs text-red-500 flex items-center justify-center gap-1.5">
          <AlertCircle size={12} aria-hidden="true" />
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  )
}

// ─── Main Contact Section ─────────────────────────────────────────────────────

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full py-20 md:py-32 overflow-hidden border-t border-border/20"
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-primary/4 dark:bg-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-secondary/4 dark:bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">

        {/* ── Section Header ── */}
        <AnimateIn direction="up" delay={0} className="text-center mb-16 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase font-heading">
            <MessageSquare size={14} aria-hidden="true" />
            Let&apos;s Connect
          </div>
          <Heading as="h2" size="xl" id="contact-heading">
            Let&apos;s Build Something <GradientText>Amazing Together</GradientText>
          </Heading>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body text-balance">
            Whether you&apos;re looking for a developer for an internship, a freelance project, a startup
            idea, or an open-source collaboration — I&apos;m always open to meaningful conversations about
            innovative software and the problems worth solving.
          </p>
        </AnimateIn>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-14 items-start">

          {/* ════ LEFT COLUMN ════ */}
          <div className="space-y-6">

            {/* Contact Info Cards */}
            <AnimateIn direction="left" delay={0.05}>
              <div className="space-y-3">
                {CONTACT_INFO.map((info) => (
                  <ContactCard key={info.id} info={info} />
                ))}
              </div>
            </AnimateIn>

            {/* Availability Card */}
            <AnimateIn direction="left" delay={0.12}>
              <div className={cn(
                'rounded-[20px] p-5 border border-border/50',
                'bg-card/60 dark:bg-[#111827]/70 backdrop-blur-md',
                'shadow-sm dark:shadow-black/20'
              )}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <p className="text-xs font-bold font-heading text-emerald-500 uppercase tracking-widest">Available for</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {AVAILABILITY_ITEMS.map(item => (
                    <span key={item} className={cn(
                      'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-heading',
                      'border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    )}>
                      <Briefcase size={11} aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Social Links */}
            <AnimateIn direction="left" delay={0.18}>
              <div>
                <p className="text-xs font-bold font-heading text-muted-foreground/60 uppercase tracking-widest mb-3">Find me on</p>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS_DATA.map(link => (
                    <SocialButton key={link.id} link={link} />
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Download Resume */}
            <AnimateIn direction="left" delay={0.22}>
              <motion.a
                href="/resume.pdf"
                download="Sami-Ullah-Resume.pdf"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'w-full flex items-center justify-center gap-2.5 py-3.5 rounded-[14px]',
                  'border border-border/60 bg-card/60 dark:bg-[#111827]/60 backdrop-blur-sm',
                  'text-sm font-bold font-heading text-foreground',
                  'hover:border-primary/50 hover:bg-primary/5 hover:text-primary',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                )}
                aria-label="Download Sami Ullah's resume as PDF"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </motion.a>
            </AnimateIn>

          </div>

          {/* ════ RIGHT COLUMN ════ */}
          <AnimateIn direction="right" delay={0.08} className="space-y-5">

            {/* CTA Card above form */}
            <div className={cn(
              'relative overflow-hidden rounded-[20px] p-6',
              'border border-border/50 bg-card/60 dark:bg-[#111827]/70 backdrop-blur-md',
            )}>
              {/* Gradient bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent" />
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 border border-primary/20">
                  <Sparkles size={20} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground leading-tight mb-1">
                    Have an exciting project in mind?
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    Looking for a developer? Want to collaborate on a startup idea? Let&apos;s talk — I respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className={cn(
              'rounded-[22px] p-6 sm:p-8',
              'border border-border/50 bg-card/70 dark:bg-[#111827]/80 backdrop-blur-xl',
              'shadow-xl shadow-black/5 dark:shadow-black/25'
            )}>
              <ContactForm />
            </div>

          </AnimateIn>

        </div>
      </Container>
    </section>
  )
}
