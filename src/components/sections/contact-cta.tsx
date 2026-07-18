"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { buttonVariants } from "@/components/ui/button"
import { portfolioConfig } from "@/config/portfolio"
import { Container } from "@/components/shared/container"
import { AnimatedSection } from "@/components/shared/animated-section"
import { cn } from "@/lib/utils"

export function ContactCTA() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-foreground text-background">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-6">
              Let&apos;s build something
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Have a product that needs building?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-base text-background/60 leading-relaxed mb-10 max-w-md">
              Whether you need help with the frontend, backend, mobile app, or the entire product — tell me what you&apos;re working on.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.a
              href={`mailto:${portfolioConfig.personal.email}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-background text-foreground hover:bg-background/95 px-10 h-14 text-base font-semibold group inline-flex items-center"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Email Me
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
