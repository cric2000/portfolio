"use client"

import * as React from "react"
import { portfolioConfig } from "@/config/portfolio"
import { Container } from "@/components/shared/container"
import { AnimatedSection } from "@/components/shared/animated-section"

export function Capabilities() {
  const categories = [
    { name: "Frontend", items: portfolioConfig.capabilities.frontend },
    { name: "Backend", items: portfolioConfig.capabilities.backend },
    { name: "Mobile", items: portfolioConfig.capabilities.mobile },
    { name: "Data", items: portfolioConfig.capabilities.data },
    { name: "Engineering", items: portfolioConfig.capabilities.engineering },
  ]

  return (
    <section className="py-24 md:py-32 bg-secondary/20 border-y border-border/40">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <AnimatedSection>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                Tools I use to ship.
              </h2>
            </AnimatedSection>
          </div>

          <div className="md:w-2/3">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {categories.map((category, index) => (
                <AnimatedSection key={category.name} delay={index * 0.1}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6 border-b border-border/50 pb-2">
                    {category.name}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {category.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-center gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
