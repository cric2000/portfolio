"use client"

import * as React from "react"
import { ArrowRight, Layout, Database, Smartphone, Layers } from "lucide-react"

import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { AnimatedSection } from "@/components/shared/animated-section"

export function Engagement() {
  const pathways = [
    {
      title: "Frontend",
      description: "Need someone to turn designs or requirements into a polished, production-ready interface?",
      icon: Layout,
    },
    {
      title: "Backend & APIs",
      description: "Need APIs, integrations, database architecture or complex business logic?",
      icon: Database,
    },
    {
      title: "Mobile",
      description: "Need a production-ready iOS and Android application?",
      icon: Smartphone,
    },
    {
      title: "Full Product",
      description: "Have an idea and need someone who can build the complete product?",
      icon: Layers,
    }
  ]

  return (
    <section className="py-24 md:py-32 border-t border-border/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <Container className="relative z-10">
        <AnimatedSection className="mb-16">
          <SectionHeading
            eyebrow="What I Do"
            title={
              <>
                You don&apos;t need to hire me for everything.
                <br />
                <span className="text-muted-foreground">But you can.</span>
              </>
            }
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-6">
          {pathways.map((pathway, index) => (
            <AnimatedSection key={pathway.title} delay={index * 0.1}>
              <a 
                href="#contact" 
                className="group flex flex-col h-full p-8 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/40 hover:border-border transition-all duration-300"
              >

                <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3">
                  {pathway.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {pathway.description}
                </p>
                <div className="mt-auto flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Discuss project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
