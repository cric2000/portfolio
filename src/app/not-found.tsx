import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="profile-sheet">
        <main id="main-content" className="missing-page">
          <p className="missing-code">404 / NOT FOUND</p>
          <h1>A page out of place.</h1>
          <p>The page you’re looking for isn’t here.</p>
          <Link href="/">Back to the portfolio ↗</Link>
        </main>
        <Footer />
      </div>
    </>
  )
}
