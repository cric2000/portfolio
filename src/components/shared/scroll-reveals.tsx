"use client"

import { useEffect } from "react"

export function ScrollReveals() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (preference.matches || !("IntersectionObserver" in window)) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".profile-sheet [data-reveal]"))
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
        show(entry.target as HTMLElement, Math.min(index * 75, 225))
      })
    }, { threshold: 0.06, rootMargin: "0px 0px -28px 0px" })

    function show(element: HTMLElement, delay = 0, immediate = false) {
      if (element.dataset.revealState === "done") return
      observer.unobserve(element)
      element.style.setProperty("--reveal-delay", `${delay}ms`)
      element.dataset.revealState = immediate ? "done" : "visible"
    }

    // Enhance after hydration: server HTML stays readable without JavaScript.
    elements.forEach((element) => {
      element.dataset.revealState = "pending"
      if (element.getBoundingClientRect().bottom <= 0) show(element, 0, true)
      else observer.observe(element)
    })

    function revealTarget(target: Element) {
      const parent = target.closest<HTMLElement>("[data-reveal]")
      if (parent) show(parent, 0, true)
      target.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => show(element, 0, true))
    }

    function onHashChange() {
      if (!window.location.hash) return
      let id: string
      try { id = decodeURIComponent(window.location.hash.slice(1)) }
      catch { return }
      const target = document.getElementById(id)
      if (target) revealTarget(target)
    }

    function onFocus(event: FocusEvent) {
      if (event.target instanceof Element) revealTarget(event.target)
    }

    function onAnimationEnd(event: AnimationEvent) {
      if (event.animationName !== "section-reveal" || !(event.target instanceof HTMLElement)) return
      event.target.dataset.revealState = "done"
      event.target.style.removeProperty("--reveal-delay")
    }

    function onPreferenceChange() {
      if (!preference.matches) return
      elements.forEach((element) => show(element, 0, true))
      observer.disconnect()
    }

    onHashChange()
    window.addEventListener("hashchange", onHashChange)
    document.addEventListener("focusin", onFocus)
    document.addEventListener("animationend", onAnimationEnd)
    preference.addEventListener("change", onPreferenceChange)

    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", onHashChange)
      document.removeEventListener("focusin", onFocus)
      document.removeEventListener("animationend", onAnimationEnd)
      preference.removeEventListener("change", onPreferenceChange)
      elements.forEach((element) => {
        delete element.dataset.revealState
        element.style.removeProperty("--reveal-delay")
      })
    }
  }, [])

  return null
}
