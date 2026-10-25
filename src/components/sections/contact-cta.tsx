"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

export function ContactCTA() {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current) }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(portfolioConfig.personal.email)
      setCopied(true)
      if (resetTimer.current) clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 3000)
    } catch {
      window.location.href = `mailto:${portfolioConfig.personal.email}`
    }
  }

  return (
    <section id="contact" className="compact-contact" aria-labelledby="contact-heading">
      <div>
        <h2 id="contact-heading">Have something in mind?</h2>
        <a className="email-address" href={`mailto:${portfolioConfig.personal.email}`}>{portfolioConfig.personal.email} <ArrowUpRight size={13} /></a>
        <button className="copy-email" type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"}><span role="status">{copied ? "[copied]" : "[copy]"}</span></button>
      </div>
      <div className="social-links">
        <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={12} /></a>
        <a href={portfolioConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={12} /></a>
      </div>
    </section>
  )
}
