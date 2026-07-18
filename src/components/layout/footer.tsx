import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"
import { Container } from "@/components/shared/container"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] py-14 md:py-16">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-base font-semibold tracking-tight text-foreground hover:opacity-70 transition-opacity">
              {portfolioConfig.personal.name}
            </Link>
            <p className="text-[13px] text-muted-foreground leading-relaxed max-w-xs">
              Full-stack software engineer building production-ready web applications, APIs, mobile apps and AI-powered experiences.
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground/70">
              Connect
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${portfolioConfig.personal.email}`}
                  className="inline-flex items-center gap-1 text-[14px] text-muted-foreground hover:text-foreground transition-colors group"
                >
                  Email
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground/70">
              Explore
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/#work", label: "Work" },
                { href: "/#services", label: "Services" },
                { href: "/#experience", label: "Experience" },
                { href: "/#process", label: "Process" },
                { href: "/#about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground/70">
              Products
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={portfolioConfig.projects.spendAlarm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[14px] text-muted-foreground hover:text-foreground transition-colors group"
                >
                  Spend Alarm
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={portfolioConfig.projects.intellident.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[14px] text-muted-foreground hover:text-foreground transition-colors group"
                >
                  IntelliDent
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-border/40">
          <p className="text-[12px] text-muted-foreground">
            &copy; {currentYear} {portfolioConfig.personal.name}. All rights reserved.
          </p>
          <p className="text-[12px] text-muted-foreground">
            {portfolioConfig.personal.location}
          </p>
        </div>
      </Container>
    </footer>
  )
}
