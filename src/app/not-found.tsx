import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/shared/container"
import { AnimatedSection } from "@/components/shared/animated-section"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center min-h-[70vh] py-24">
        <Container>
          <AnimatedSection className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-muted-foreground/20 mb-8">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
              Page not found
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Sorry, I couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or perhaps it never existed in the first place.
            </p>
            <Link 
              href="/" 
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </AnimatedSection>
        </Container>
      </main>
      <Footer />
    </>
  )
}
