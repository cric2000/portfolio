import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { SelectedWork } from "@/components/sections/selected-work"
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
