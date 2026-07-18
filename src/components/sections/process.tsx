"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { portfolioConfig } from "@/config/portfolio"
import { Container } from "@/components/shared/container"
import { AnimatedSection } from "@/components/shared/animated-section"

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900">
      <Container>
        <AnimatedSection className="mb-16 md:mb-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">How I Work</p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
              A simple, reliable process.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border/40 rounded-2xl overflow-hidden">
          {portfolioConfig.process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={[
                "flex flex-col gap-4 p-8 bg-background dark:bg-background",
                "hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-300",
                // Grid border lines
                index < portfolioConfig.process.length - 1 ? "sm:border-r border-border/40" : "",
                index < 2 ? "border-b sm:border-b-0 border-border/40" : "",
              ].join(" ")}
            >
              <span className="text-3xl font-bold tracking-tighter text-muted-foreground/20 leading-none">
                {step.step}
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
