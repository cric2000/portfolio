"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"

import { Container } from "@/components/shared/container"
import { AnimatedSection } from "@/components/shared/animated-section"

const EXPERIENCE_THEMES = [
  {
    title: "Scale & Performance",
    body: "Contributed to a consumer mobile application with 1M+ downloads, worked on systems supporting 5K+ daily active users, and delivered up to 10× performance improvements on data-intensive workflows."
  },
  {
    title: "Domain Breadth",
    body: "Worked and delivered production software across astrology, marketing (Google Ads & Meta Ads), healthcare, and finance — each with their own regulatory, UX, and reliability requirements."
  },
  {
    title: "AI & Intelligent Systems",
    body: "Built AI and RAG-powered platforms, computer vision integrations, and production AI inference pipelines that surface real decisions to real users."
  },
  {
    title: "Business Logic & Monetization",
    body: "Implemented payments, subscription workflows, complex business-rule engines, admin tooling, and WhatsApp Business automation — systems where correctness matters."
  },
]

export function Experience() {
  const lineRef = React.useRef<HTMLDivElement>(null)
  useInView(lineRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">

          {/* Left: Intro */}
          <AnimatedSection className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
              Production Experience
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight mb-6">
              Built in production.{" "}
              <span className="text-muted-foreground">Not just side projects.</span>
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Beyond my independent work, I&apos;ve spent 3+ years building and shipping production software used by real businesses and real users — across diverse domains, at meaningful scale.
            </p>
          </AnimatedSection>

          {/* Right: Themed experience list */}
          <div ref={lineRef} className="flex flex-col divide-y divide-border/50">
            {EXPERIENCE_THEMES.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="py-8 first:pt-0 last:pb-0"
              >
                <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">
                  {theme.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {theme.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
