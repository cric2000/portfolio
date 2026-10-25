import { portfolioConfig } from "@/config/portfolio"

export function Services() {
  return (
    <section id="toolkit" className="profile-section toolkit-section" aria-labelledby="toolkit-heading">
      <div className="section-label"><h2 id="toolkit-heading">Tools I reach for</h2></div>
      <dl className="compact-toolkit">
        {portfolioConfig.toolkit.map((group) => (
          <div key={group.title}><dt>{group.title}</dt><dd>{group.tools.join(" · ")}</dd></div>
        ))}
      </dl>
    </section>
  )
}
