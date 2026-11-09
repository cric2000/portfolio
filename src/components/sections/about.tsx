export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading" data-reveal>
      <details className="personal-note">
        <summary><h2 id="about-heading">A little more about me</h2> <span aria-hidden="true">+</span></summary>
        <p>I’m based in Chandigarh. I enjoy work that lets me follow a problem across the stack, whether it starts with an interface, an API, or a slow query. Understanding the whole system is usually where the interesting part begins.</p>
      </details>
    </section>
  )
}
