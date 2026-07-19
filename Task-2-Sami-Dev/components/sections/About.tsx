'use client'

import { MapPin, GraduationCap, BookOpen, Rocket, Terminal, Cpu, Sparkles } from 'lucide-react'
import { Container, SectionWrapper, Heading, Card, AnimateIn, GradientText, Counter } from '@/components/ui'

// ─── Stat Cards Data ──────────────────────────────────────────────────────────

const STAT_ITEMS = [
  { end: 2, suffix: '', label: 'Professional Internships' },
  { end: 4, suffix: '+', label: 'Major Projects' },
  { end: 10, suffix: '+', label: 'Technologies' },
  { end: 100, suffix: '%', label: 'Dedication to Learning' },
] as const

// ─── Passion Cards Data ───────────────────────────────────────────────────────

const PASSION_CARDS = [
  {
    icon: Terminal,
    title: 'Problem Solving',
    description: 'Tackling complex algorithmic puzzles and architecting clean, logical structures to solve real-world demands.',
  },
  {
    icon: Cpu,
    title: 'AI Innovation',
    description: 'Integrating smart, data-driven systems and cognitive capabilities to expand software functionality.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Learning',
    description: 'Continuously mastering new technologies, engineering standards, and web development paradigms.',
  },
] as const

export function About() {
  return (
    <SectionWrapper id="about" className="relative overflow-hidden border-t border-border/20">
      {/* Background decoration elements */}
      <div className="absolute top-1/2 right-1/10 w-[25rem] h-[25rem] bg-accent/5 dark:bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-secondary/5 dark:bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Main Grid Structure: Stacks on mobile, splits 5/7 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ─── Left Column: Profile Info Card (Glassmorphism) ─── */}
          <div className="lg:col-span-5 w-full">
            <AnimateIn direction="left" delay={0.1}>
              <Card 
                variant="glass" 
                hoverable 
                animate
                className="w-full border-white/10 dark:border-white/[0.06] bg-white/5 dark:bg-white/[0.02] shadow-2xl p-6 sm:p-8"
              >
                {/* Visual Avatar Monogram */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-lg font-bold text-white shadow-lg shadow-primary/20">
                    SU
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground leading-tight">
                      SAMI ULLAH
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium font-body mt-0.5">
                      Full Stack Developer & AI Enthusiast
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                {/* Info List */}
                <ul className="space-y-5" aria-label="Sami Ullah's Profile Information">
                  
                  {/* Location */}
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <MapPin size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 font-heading">
                        Location
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        Attock, Pakistan
                      </span>
                    </div>
                  </li>

                  {/* Education */}
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
                      <GraduationCap size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 font-heading">
                        Education
                      </span>
                      <span className="text-sm font-medium text-foreground leading-relaxed">
                        BS Software Engineering
                        <span className="block text-xs font-normal text-muted-foreground mt-0.5">
                          COMSATS University Islamabad, Attock Campus
                        </span>
                      </span>
                    </div>
                  </li>

                  {/* Current Status */}
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                      <BookOpen size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 font-heading">
                        Current Status
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        4th Semester Completed
                      </span>
                    </div>
                  </li>

                  {/* Career Goal */}
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      <Rocket size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 font-heading">
                        Career Goal
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        Startup Founder
                      </span>
                    </div>
                  </li>

                </ul>
              </Card>
            </AnimateIn>
          </div>

          {/* ─── Right Column: Biography & Statistics ─── */}
          <div className="lg:col-span-7 flex flex-col space-y-8 md:space-y-12">
            
            {/* Biography Heading & Text */}
            <div className="space-y-4 md:space-y-6">
              <AnimateIn direction="up" delay={0.1}>
                <Heading as="h2" size="xl">
                  About <GradientText>Me</GradientText>
                </Heading>
              </AnimateIn>
              
              <AnimateIn direction="up" delay={0.2}>
                <div className="space-y-4 text-base text-muted-foreground font-body leading-relaxed max-w-2xl text-balance">
                  <p>
                    I am a Software Engineering student at COMSATS University Islamabad, deeply committed to engineering 
                    scalable web applications and exploring the practical frontiers of Artificial Intelligence. 
                    My journey in development is fueled by a relentless desire to solve real-world challenges through 
                    elegant, clean code and user-centered design.
                  </p>
                  <p>
                    I believe that high-quality software is a synthesis of robust engineering and exceptional UI/UX. 
                    This philosophy guides my work, whether I am building modern full-stack platforms, integrating machine 
                    learning pipelines, or optimizing existing architectures. Every project is an opportunity to practice 
                    clean coding standards and deliver digital experiences that feel intuitive and responsive.
                  </p>
                  <p>
                    My academic foundation, combined with hands-on practice, has fostered a continuous learning mindset. 
                    I am constantly diving into new technologies and paradigms, adapting to the fast-moving tech ecosystem. 
                    With a keen interest in startup innovation, my ultimate vision is to create high-impact products that 
                    solve meaningful problems at scale.
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* Quick Statistics Grid */}
            <AnimateIn direction="up" delay={0.3} className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {STAT_ITEMS.map((stat, idx) => (
                <Card 
                  key={idx} 
                  variant="glass" 
                  className="bg-white/[0.02] dark:bg-white/[0.01] border-white/5 p-4 text-center group hover:border-primary/20 transition-all duration-300 rounded-[16px]"
                >
                  <div className="font-heading text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-muted-foreground/80 leading-snug">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </AnimateIn>

          </div>

        </div>

        {/* ─── Bottom Section: Why I Love Development ─── */}
        <div className="mt-16 md:mt-24 space-y-6 md:space-y-8">
          
          <AnimateIn direction="up" delay={0.1} className="text-center space-y-2">
            <Heading as="h3" size="lg">
              Why I Love <GradientText>Development</GradientText>
            </Heading>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              My drive stems from three pillars that define my approach to technology.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PASSION_CARDS.map((card, idx) => {
              const Icon = card.icon
              return (
                <AnimateIn key={idx} direction="up" delay={0.2 + idx * 0.1} className="w-full">
                  <Card 
                    variant="glass" 
                    hoverable 
                    animate
                    className="border-white/10 dark:border-white/[0.05] bg-white/5 dark:bg-white/[0.01] shadow-xl p-6 h-full flex flex-col items-start"
                  >
                    {/* Floating Icon Container */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-primary/10 to-secondary/10 border border-primary/20 text-primary mb-4 shadow-sm">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    
                    <h4 className="font-heading text-base font-bold text-foreground mb-2">
                      {card.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </Card>
                </AnimateIn>
              )
            })}
          </div>

        </div>

      </Container>
    </SectionWrapper>
  )
}
