import { ArrowUpRight } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

export function DupNest() {
  return (
    <article id="dup-nest" className="buddy-section fun-text-entry" aria-labelledby="dupnest-heading" data-reveal>
      <div className="buddy-copy">
        <p className="buddy-eyebrow">DupNest</p>
        <h3 id="dupnest-heading">A little less clutter.</h3>
        <p className="buddy-intro">A little Linux CLI I built for finding duplicate files, organizing messy folders, and tidying developer caches. A spare-time experiment that made its way onto npm as a public beta.</p>
        <div className="fun-links">
          <a className="buddy-source" href={portfolioConfig.dupNest.url} target="_blank" rel="noopener noreferrer">
            Take a closer look <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a className="buddy-source" href={portfolioConfig.dupNest.packageUrl} target="_blank" rel="noopener noreferrer">
            Get it on npm <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}
