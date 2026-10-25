import { portfolioConfig } from "@/config/portfolio"

export function Hero() {
  return (
    <section id="top" className="profile-intro" aria-labelledby="profile-title">
      <div className="name-line">
        <h1 id="profile-title">Full-Stack Software Engineer</h1>
      </div>
      <div className="profile-meta">
        <p className="profile-role"><span className="role-dot" aria-hidden="true" /> 3+ years</p>
        <span className="location-label">{portfolioConfig.personal.location} <span aria-hidden="true">↗</span></span>
      </div>
      <div className="personal-intro">
        <p>Hi, I’m Anmol. I build web apps, mobile experiences, and the systems behind them.</p>
        <p>I like understanding how all the pieces fit together — and making complicated things feel simple. My work has taken me through healthcare, consumer products, and SaaS.</p>
      </div>
    </section>
  )
}
