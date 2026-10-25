import { ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { portfolioConfig } from "@/config/portfolio"

export function Navbar() {
  return (
    <header className="profile-bar">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="profile-bar-inner">
        <a className="site-signature" href="/#top" aria-label="Anmol Lamba, home">{portfolioConfig.personal.name}</a>
        <div className="bar-actions">
          <a href={`mailto:${portfolioConfig.personal.email}`}>Say hello <ArrowUpRight size={13} /></a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
