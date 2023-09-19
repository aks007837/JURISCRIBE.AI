import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden pt-44 pb-24"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-5xl tracking-tightsm:text-4xl">
            Get started today
          </h2>
          <p className="mt-8 text-lg tracking-tight ">
          Transform your legal journey with Scribe's AI-driven document creation, ensuring security and simplicity. Find your perfect document and embark on a worry-free legal path today.
          </p>
          <Button href="/register"  className="mt-10">
            Try Juriscribe now
          </Button>
        </div>
      </Container>
    </section>
  )
}
