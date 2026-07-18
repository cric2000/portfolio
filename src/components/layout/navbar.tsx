"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { portfolioConfig } from "@/config/portfolio"
import { cn } from "@/lib/utils"
import { Container } from "@/components/shared/container"
import { ThemeToggle } from "@/components/shared/theme-toggle"

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
]

/**
 * Handles anchor clicks so that clicking the same hash link twice
 * (after scrolling away) still scrolls back to the section.
 * Without this, the browser does nothing because the URL hash hasn't changed.
 */
function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  const hash = href.includes("#") ? "#" + href.split("#")[1] : null
  if (!hash) return

  // If the current URL already has this hash, the browser won't scroll —
  // so we prevent default and do it manually.
  if (window.location.hash === hash) {
    e.preventDefault()
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-base font-medium tracking-tight hover:opacity-80 transition-opacity mr-4"
          >
            {portfolioConfig.personal.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-4 border-l border-border/40 pl-6">
              <ThemeToggle />
              <Link
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "#contact")}
                className={cn(buttonVariants(), "rounded-full px-6")}
              >
                Let&apos;s Connect
              </Link>
            </div>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "-mr-2")}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col border-border/40 bg-background/95 backdrop-blur-xl p-8">
                <nav className="flex flex-col gap-6 mt-12">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-xl font-medium tracking-tight text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-6 mt-6 border-t border-border/40">
                    <Link
                      href="#contact"
                      onClick={(e) => handleAnchorClick(e, "#contact")}
                      className={cn(buttonVariants({ size: "lg" }), "w-full rounded-full")}
                    >
                      Let&apos;s Connect
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </motion.header>
  )
}
