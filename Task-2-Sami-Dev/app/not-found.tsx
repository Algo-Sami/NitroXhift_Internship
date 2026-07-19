import { PageWrapper } from '@/components/layout/PageWrapper'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { LinkButton } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { AnimateIn } from '@/components/ui/AnimateIn'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <section
        aria-labelledby="not-found-heading"
        className="flex min-h-[calc(100vh-4rem)] items-center justify-center"
      >
        <Container>
          <div className="flex flex-col items-center gap-6 py-20 text-center">
            <AnimateIn direction="up" delay={0.1}>
              <p className="font-heading text-8xl font-bold md:text-9xl">
                <GradientText>404</GradientText>
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.2}>
              <Heading as="h1" size="lg" id="not-found-heading">
                Page not found
              </Heading>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.3}>
              <p className="max-w-sm text-muted-foreground">
                Looks like this page wandered off into the void. Let&apos;s get you back on track.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.4}>
              <LinkButton href="/" variant="primary" size="lg">
                ← Back to Home
              </LinkButton>
            </AnimateIn>
          </div>
        </Container>
      </section>
    </PageWrapper>
  )
}
