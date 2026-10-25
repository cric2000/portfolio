"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <button type="button" className="theme-switch" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
      <Sun className="theme-sun" size={15} strokeWidth={1.5} />
      <Moon className="theme-moon" size={15} strokeWidth={1.5} />
    </button>
  )
}
