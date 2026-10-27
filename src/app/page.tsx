import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { SelectedWork } from "@/components/sections/selected-work"
import { BuildBuddy } from "@/components/sections/build-buddy"
import { ClipRag } from "@/components/sections/clip-rag"
import { Services } from "@/components/sections/services"
import { Writing } from "@/components/sections/writing"
import { About } from "@/components/sections/about"
import { ContactCTA } from "@/components/sections/contact-cta"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="profile-sheet">
        <main id="main-content">
          <Hero />
          <SelectedWork />
          <section id="just-for-fun" className="profile-section fun-section" aria-labelledby="fun-heading">
            <div className="section-label"><h2 id="fun-heading">Just for fun</h2></div>
            <BuildBuddy />
            <ClipRag />
          </section>
          <Services />
          <Writing />
          <About />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
