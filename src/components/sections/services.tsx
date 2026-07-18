"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { portfolioConfig } from "@/config/portfolio"
import { Container } from "@/components/shared/container"
import { AnimatedSection } from "@/components/shared/animated-section"
import { cn } from "@/lib/utils"

export function Services() {
  const services = portfolioConfig.services

  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900">
      <Container>

        {/* Heading */}
        <AnimatedSection className="mb-16 md:mb-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">What I do</p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
              You don&apos;t need to hire me for everything.{" "}
              <span className="text-muted-foreground/50">But you can.</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* 2×2 editorial capability grid */}
        <div className="grid md:grid-cols-2 gap-0 border border-border/40 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group flex flex-col gap-6 p-8 md:p-10 bg-background dark:bg-background",
                "border-border/40 transition-colors duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50",
                // Internal borders to create grid lines
                index % 2 === 0 && index < services.length - 1 ? "md:border-r" : "",
                index < 2 ? "border-b" : "",
              )}
            >
              {/* Number + title row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground/40 uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mt-1">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Positioning statement */}
              <p className="text-[15px] text-muted-foreground leading-relaxed font-medium">
                {service.headline}
              </p>

              {/* Capability list */}
              <ul className="flex flex-col gap-2">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-3 text-[14px] text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-foreground/25 shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}
