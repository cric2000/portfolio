import { ArrowUpRight } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

export function Writing() {
  return (
    <section id="writing" className="writing-section" aria-labelledby="writing-heading" data-reveal>
      <h2 id="writing-heading">A brief writing detour</h2>
      <p>I tried sharing a little of what I’d learned, in case it saved another developer some time.</p>
      {portfolioConfig.writing.map((article) => (
        <a className="writing-entry" key={article.url} href={article.url} target="_blank" rel="noopener noreferrer">
          <time dateTime={article.date}>{article.year}</time>
          <span className="writing-entry-copy">
            <strong>{article.title}</strong>
            <span>{article.platform} · {article.readingTime}</span>
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ))}
    </section>
  )
}
