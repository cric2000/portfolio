import { ArrowUpRight } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

export function ClipRag() {
  return (
    <article id="clip-rag" className="buddy-section fun-text-entry" aria-labelledby="cliprag-heading" data-reveal>
      <div className="buddy-copy">
        <p className="buddy-eyebrow">ClipRAG</p>
        <h3 id="cliprag-heading">Where did I copy that?</h3>
        <p className="buddy-intro">A spare-time experiment for my Linux desktop. ClipRAG keeps copied commands, snippets, and links in one place, so I can search, pin, and reuse them later. Everything stays on the device.</p>
        <a className="buddy-source" href={portfolioConfig.clipRag.url} target="_blank" rel="noopener noreferrer">
          Take a closer look <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
