"use client"

import * as React from "react"
import Image from "next/image"
import { ExternalLink, Maximize2, X } from "lucide-react"
import { motion } from "framer-motion"

import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { portfolioConfig } from "@/config/portfolio"
import { AnimatedSection } from "@/components/shared/animated-section"
import { cn } from "@/lib/utils"

function ExpandableImage({ src, alt, className, sizes, loading }: { src: string; alt: string; className?: string; sizes?: string; loading?: "lazy" | "eager" }) {
  return (
    <Dialog>
      <DialogTrigger 
        render={
          <button type="button" className={cn("relative w-full block text-left p-0 border-none outline-none focus:outline-none ring-0 focus:ring-0 shadow-none bg-transparent group cursor-zoom-in overflow-hidden rounded-xl", className)}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              sizes={sizes || "(max-width: 768px) 100vw, 1200px"}
              quality={95}
              loading={loading}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-background/90 text-foreground p-2.5 rounded-full backdrop-blur-md shadow-xl scale-90 group-hover:scale-100 transition-all duration-300">
                <Maximize2 className="h-4 w-4" />
              </div>
            </div>
          </button>
        }
      />
      <DialogContent 
        showCloseButton={false} 
        className="fixed inset-0 top-0 left-0 translate-x-0 translate-y-0 max-w-none w-screen h-screen p-0 border-none outline-none ring-0 focus:ring-0 bg-black/90 backdrop-blur-md shadow-none flex items-center justify-center [&>button]:hidden sm:max-w-none sm:w-screen sm:h-screen sm:translate-x-0 sm:translate-y-0 sm:top-0 sm:left-0 rounded-none sm:rounded-none"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogClose render={<button type="button" className="absolute inset-0 w-full h-full bg-transparent border-none outline-none cursor-zoom-out z-0" />} />
        <div className="relative w-full h-full z-10 pointer-events-none flex items-center justify-center p-4 md:p-8">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            quality={100}
            unoptimized
          />
          <DialogClose render={
            <button 
              type="button" 
              className="absolute top-4 right-4 z-20 pointer-events-auto p-2.5 rounded-full bg-background/80 hover:bg-background text-foreground border border-border/40 backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          } />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function SelectedWork() {
  const sa = portfolioConfig.projects.spendAlarm
  const id = portfolioConfig.projects.intellident

  return (
    <section id="work" className="py-20 md:py-36 bg-background overflow-hidden">
      {/* Wider container for this section */}
      <div className="mx-auto w-full max-w-[1350px] px-6 md:px-10 lg:px-16">

        {/* ── SPEND ALARM ─────────────────────────────────────── */}
        <div className="mb-28 md:mb-44">

          {/* Project label row */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="text-xs font-medium px-3 py-0.5 tracking-wide">{sa.tag}</Badge>
              <span className="text-xs text-muted-foreground/50 tracking-widest uppercase font-medium">01</span>
            </div>
          </AnimatedSection>

          {/* Main project grid: 38% info / 62% visual */}
          <div className="grid grid-cols-1 lg:grid-cols-[30fr_70fr] gap-10 lg:gap-16 items-start">

            {/* Left: Info */}
            <AnimatedSection delay={0.05} className="flex flex-col gap-5 lg:pt-4">
              <h2 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-foreground leading-tight">
                {sa.title}
              </h2>
              <p className="text-lg font-medium text-foreground/80 leading-snug">
                {sa.positioning}
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed">
                {sa.description}
              </p>
              <div className="pt-3">
                <motion.a
                  href={sa.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "rounded-full px-7 h-11 text-sm font-semibold group inline-flex items-center")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Live Product
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>
              </div>
            </AnimatedSection>

            {/* Right: Visual */}
            <AnimatedSection delay={0.1}>
              <div className="relative">
                {/* Subtle ambient glow behind screenshot in dark mode */}
                <div className="absolute bg-gradient-to-br from-foreground/3 to-transparent rounded-2xl pointer-events-none" />
                {sa.image && (
                  <ExpandableImage
                    src={sa.image}
                    alt="Spend Alarm — Advertising Monitoring Dashboard"
                    className="w-full aspect-[16/10] rounded-xl shadow-2xl ring-1 ring-border/30"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 65vw"
                    loading="eager"
                  />
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ── INTELLIDENT ─────────────────────────────────────── */}
        <div>

          {/* Project label row */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <span className="text-xs text-muted-foreground/50 tracking-widest uppercase font-medium">02</span>
              <Badge variant="outline" className="text-xs font-medium px-3 py-0.5 tracking-wide">{id.tag}</Badge>
            </div>
          </AnimatedSection>

          {/* Main project grid: reversed — visuals left / info right */}
          <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] gap-8 lg:gap-12 items-center">

            {/* Left: Phone visuals */}
            <AnimatedSection delay={0.05}>
              <div className="flex justify-center lg:justify-start gap-5 sm:gap-8 relative">
                {/* Phone 1 — slightly lower */}
                <div className="w-[46%] sm:w-[44%] max-w-[270px] z-10 translate-y-8">
                  {id.images?.[0] && (
                    <ExpandableImage
                      src={id.images[0]}
                      alt="IntelliDent — Dental Analysis Screen"
                      className="w-full aspect-[9/19.5] rounded-[1.75rem] ring-1 ring-border/20 bg-black shadow-2xl"
                      sizes="(max-width: 768px) 48vw, (max-width: 1024px) 32vw, 25vw"
                    />
                  )}
                </div>
                {/* Phone 2 — slightly higher, behind */}
                <div className="w-[46%] sm:w-[44%] max-w-[270px]">
                  {id.images?.[1] && (
                    <ExpandableImage
                      src={id.images[1]}
                      alt="IntelliDent — Dental Report Screen"
                      className="w-full aspect-[9/19.5] rounded-[1.75rem] ring-1 ring-border/20 bg-black shadow-xl"
                      sizes="(max-width: 768px) 48vw, (max-width: 1024px) 32vw, 25vw"
                      loading="eager"
                    />
                  )}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Info */}
            <AnimatedSection delay={0.15} className="flex flex-col gap-5">
              <h2 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-foreground leading-tight mt-8 lg:mt-0">
                {id.title}
              </h2>
              <p className="text-lg font-medium text-foreground/80 leading-snug">
                {id.positioning}
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed">
                {id.description}
              </p>
              <div className="pt-3">
                <motion.a
                  href={id.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "rounded-full px-7 h-11 text-sm font-semibold border border-border/40 group inline-flex items-center")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View on Play Store
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>

      </div>
    </section>
  )
}
