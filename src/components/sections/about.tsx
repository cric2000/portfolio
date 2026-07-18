"use client"

import * as React from "react"

import { portfolioConfig } from "@/config/portfolio"
import { Container } from "@/components/shared/container"
import { AnimatedSection } from "@/components/shared/animated-section"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">

          {/* Left: Strong headline */}
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">About</p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
              I like owning the problem,{" "}
              <span className="text-muted-foreground">not just the ticket.</span>
            </h2>
          </AnimatedSection>

          {/* Right: Copy */}
          <div className="flex flex-col gap-5 text-[15px] text-muted-foreground leading-relaxed">
            <AnimatedSection delay={0.1}>
              <p>
                I&apos;m {portfolioConfig.personal.name.split(" ")[0]}, a full-stack software engineer based in {portfolioConfig.personal.location}. I work across frontend, backend, mobile and production systems — building everything from user-facing applications to APIs, AI-powered platforms and business automation.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p>
                That breadth lets me work on one specific part of a product, or take full responsibility for building the entire experience end-to-end — whichever is the best fit for what you&apos;re building.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p>
                I work best with startups, founders and businesses that value clear communication, practical engineering decisions, and software that actually ships to production.
              </p>
            </AnimatedSection>
          </div>

        </div>
      </Container>
    </section>
  )
}
