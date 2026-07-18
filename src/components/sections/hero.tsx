"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { buttonVariants } from "@/components/ui/button"
import { portfolioConfig } from "@/config/portfolio"
import { Container } from "@/components/shared/container"
import { cn } from "@/lib/utils"

const WORDS = ["Frontend.", "Backend.", "Mobile."]

function WordCycler() {
  const [displayed, setDisplayed] = React.useState<string[]>([])

  React.useEffect(() => {
    if (displayed.length >= WORDS.length) return

    const timeout = setTimeout(() => {
      setDisplayed((prev) => [...prev, WORDS[prev.length]])
    }, 280)
    return () => clearTimeout(timeout)
  }, [displayed])

  return (
    <span className="flex flex-wrap gap-x-3 gap-y-1">
      {WORDS.map((word) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={
            displayed.includes(word)
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 12, filter: "blur(4px)" }
          }
          transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* ── Light mode: warm amber-rose sweep from left ── */}
      <div className="dark:hidden absolute inset-0 pointer-events-none">
        {/* Left-edge amber glow */}
        <div className="absolute -left-32 top-0 h-full w-[55%] bg-[radial-gradient(ellipse_at_left_center,oklch(0.88_0.12_75)_0%,transparent_65%)] opacity-[0.18]" />
        {/* Rose accent bleeding in from top-left */}
        <div className="absolute -left-16 -top-24 w-[50%] h-[70%] bg-[radial-gradient(ellipse_at_top_left,oklch(0.85_0.10_10)_0%,transparent_60%)] opacity-[0.12]" />
        {/* Very subtle warm tint across the entire bg */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,oklch(0.97_0.03_75)_0%,transparent_45%)] opacity-25" />
      </div>

      {/* ── Dark mode: cool indigo-violet glow from left ── */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none">
        {/* Main indigo bloom from left */}
        <div className="absolute -left-40 top-0 h-full w-[60%] bg-[radial-gradient(ellipse_at_left_center,oklch(0.72_0.15_195)_0%,transparent_65%)] opacity-[0.14]" />
        {/* Violet top-left accent */}
        <div className="absolute -left-20 -top-20 w-[50%] h-[65%] bg-[radial-gradient(ellipse_at_top_left,oklch(0.62_0.19_240)_0%,transparent_60%)] opacity-10" />
        {/* Faint horizontal sweep across top */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,oklch(0.22_0.06_265)_0%,transparent_40%)] opacity-40" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-start max-w-4xl">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-foreground text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for select freelance projects
          </motion.div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.15] mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 }}
              className="block text-muted-foreground/50 font-medium mb-1 md:mb-2 tracking-tight"
            >
              <WordCycler />
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.48, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="block text-foreground font-bold"
            >
              Or the whole product.
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[15px] text-muted-foreground max-w-2xl leading-relaxed mb-8"
          >
            I&apos;m {portfolioConfig.personal.name.split(" ")[0]}, a full-stack software engineer helping startups and businesses design, build and ship production-ready digital products—from polished interfaces and scalable APIs to mobile apps and complete full-stack platforms.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto"
          >
            <Link href="#work" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto rounded-full px-8 h-12 text-base group")}>
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto rounded-full px-8 h-12 text-base border-border/60 hover:bg-secondary/50")}>
              Let&apos;s Work Together
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
