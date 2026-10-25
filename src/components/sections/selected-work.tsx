import { portfolioConfig } from "@/config/portfolio"

export function SelectedWork() {
  return (
    <section id="work" className="profile-section" aria-labelledby="experience-heading">
      <div className="section-label"><h2 id="experience-heading">Experience</h2><span>SELECT A ROW TO EXPLORE</span></div>
      <div className="experience-list">
        {portfolioConfig.career.map((job) => (
          <details className="experience-row" key={job.company}>
            <summary>
              <span className="experience-years">{job.years}</span>
              <span className="experience-company"><strong>{job.company}</strong><span>{job.role}</span></span>
              <span className="experience-result">{job.result}</span>
              <span className="expand-indicator" aria-hidden="true"><span>+</span></span>
            </summary>
            <div className="experience-detail">
              <div className="detail-meta"><span>{job.period}</span><span>{job.location}</span></div>
              <p>{job.description}</p>
              <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <p className="experience-tools">{job.tools.join(" · ")}</p>
            </div>
          </details>
        ))}
      </div>
      <p className="contribution-note">The results above reflect products and systems I helped build with a team.</p>
    </section>
  )
}
