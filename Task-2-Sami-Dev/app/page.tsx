import { PageWrapper } from '@/components/layout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Achievements } from '@/components/sections/Achievements'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </PageWrapper>
  )
}



