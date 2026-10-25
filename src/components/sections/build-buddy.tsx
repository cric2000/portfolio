"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, RotateCw } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

const characters = ["Kappa", "Tanuki", "Tengu", "Kurama", "Chopper"] as const
const moods = [
  { status: "passing", label: "All passing", feeling: "happy", description: "a passing build" },
  { status: "failing", label: "Something broke", feeling: "stressed", description: "a failing build" },
  { status: "running", label: "Still building", feeling: "focused", description: "a build in progress" },
] as const

// Original SVG output from BuildBuddy. Artwork attribution is in public/buildbuddy/LICENSE.txt.
export function BuildBuddy() {
  const [moodIndex, setMoodIndex] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(0)
  const character = characters[characterIndex]
  const mood = moods[moodIndex]
  const assetPath = `/buildbuddy/${character.toLowerCase()}-${mood.status}`

  return (
    <section id="build-buddy" className="buddy-section" aria-labelledby="buddy-heading">
      <div className="buddy-copy">
        <p className="buddy-eyebrow">A little thing I built · BuildBuddy</p>
        <h2 id="buddy-heading">Even my builds have feelings.</h2>
        <p className="buddy-intro">I built BuildBuddy to give passing tests, broken builds, and everything in between a little personality. Try changing its mood.</p>
        <div className="buddy-controls" role="group" aria-label="Try a build status">
          {moods.map((item, index) => (
            <button
              type="button"
              key={item.status}
              aria-pressed={moodIndex === index}
              onClick={() => setMoodIndex(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <a className="buddy-source" href={portfolioConfig.buildBuddy.url} target="_blank" rel="noopener noreferrer">
          View on GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <figure className="buddy-preview">
        <div className="buddy-art">
          {(["light", "dark"] as const).map((theme) => (
            <Image
              key={theme}
              className={`buddy-art-${theme}`}
              src={`${assetPath}-${theme}.svg`}
              width={224}
              height={224}
              alt={`${character} looks ${mood.feeling} during ${mood.description}.`}
              unoptimized
            />
          ))}
        </div>
        <figcaption aria-live="polite" aria-atomic="true">{character} · {mood.feeling}</figcaption>
        <button type="button" className="buddy-next" onClick={() => setCharacterIndex((index) => (index + 1) % characters.length)}>
          Meet another buddy <RotateCw size={12} aria-hidden="true" />
        </button>
      </figure>
    </section>
  )
}
