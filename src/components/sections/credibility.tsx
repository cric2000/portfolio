import { portfolioConfig } from "@/config/portfolio"

export function Credibility() {
  return (
    <section className="proof-section" aria-label="Experience in numbers">
      <div className="proof-grid content-width">
        <p className="proof-intro">Small details.<br /><strong>Real-world impact.</strong></p>
        {portfolioConfig.metrics.slice(0, 3).map((metric) => <div className="proof-stat" key={metric.value}><strong>{metric.value}<span className="orange">↗</span></strong><span>{metric.label}</span></div>)}
      </div>
    </section>
  )
}
