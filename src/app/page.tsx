import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Credibility } from "@/components/sections/credibility"
import { SelectedWork } from "@/components/sections/selected-work"
import { Services } from "@/components/sections/services"
import { Experience } from "@/components/sections/experience"
import { Process } from "@/components/sections/process"
import { About } from "@/components/sections/about"
import { ContactCTA } from "@/components/sections/contact-cta"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Credibility />
        <SelectedWork />
        <Services />
        <Experience />
        <Process />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
