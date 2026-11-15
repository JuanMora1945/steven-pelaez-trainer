import { useEffect } from 'react'
import Faq from './components/Faq'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import PlanBuilder from './components/PlanBuilder'
import { About, Contact, Footer, Intro, Marquee, Nav, Pricing } from './components/Sections'

// Reveals each `.reveal` element once it enters the viewport.
// Content stays visible when the observer is missing or motion is reduced.
function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return undefined
    root.classList.add('motion-ok')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    document.querySelectorAll('.reveal, .shutter').forEach((el, i) => {
      el.style.setProperty('--d', `${(i % 3) * 80}ms`)
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#main">Saltar al contenido</a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Intro />
        <PlanBuilder />
        <Pricing />
        <HowItWorks />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
