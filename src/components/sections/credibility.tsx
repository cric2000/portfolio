"use client"

import * as React from "react"
import { portfolioConfig } from "@/config/portfolio"
import { Container } from "@/components/shared/container"
import { AnimatedSection } from "@/components/shared/animated-section"

export function Credibility() {
  return (
    <section className="py-12 md:py-16 border-y border-border/40 bg-zinc-50 dark:bg-zinc-900/80">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-0 md:divide-x divide-border/40">
          {portfolioConfig.metrics.map((metric, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.08}
              className="flex flex-col gap-1.5 md:px-8 first:md:pl-0 last:md:pr-0"
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                {metric.value}
              </span>
              <span className="text-[13px] text-muted-foreground leading-snug">
                {metric.label}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
