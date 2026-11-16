import { useEffect, useState } from 'react'
import { contact } from '../data/content'
import Lifter from './Lifter'

const REP_PX = 420 // scroll distance for one full squat (down and up)

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.4" cy="6.6" r="1.2" className="fill" />
    </svg>
  )
}

// Hero after the gym-template reference: big title on the left, Steven cut out on the right,
// and a pictogram athlete that squats with the bar on his back as the visitor scrolls.
export default function Hero() {
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [depth, setDepth] = useState(0)

  useEffect(() => {
    if (reduce) return undefined
    let frame = 0
    let demo = true

    // One demo rep on load so visitors notice the figure moves.
    const t0 = performance.now()
    const demoStep = (now) => {
      if (!demo) return
      const t = Math.min((now - t0) / 1600, 1)
      setDepth(Math.sin(t * Math.PI))
      if (t < 1) frame = requestAnimationFrame(demoStep)
    }
    frame = requestAnimationFrame(demoStep)

    const onScroll = () => {
      demo = false
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setDepth((1 - Math.cos((2 * Math.PI * window.scrollY) / REP_PX)) / 2)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      demo = false
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [reduce])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="hero__name">Steven Pelaez · Cali</p>
        <h1 id="hero-title" className="hero__title">
          Entrenador personal
        </h1>
        <p className="hero__lead">
          Entrena conmigo en Smart Fit Unicentro o recibe tu plan online, desde cualquier ciudad. Técnica, constancia y
          seguimiento real.
        </p>
        <div className="hero__actions">
          <a className="button button--yellow" href="#plan">Arma tu plan</a>
          <a
            className="hero__ig"
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Steven: más de 5.000 seguidores"
          >
            <InstagramIcon />
            <span>
              <strong>+5.000</strong> seguidores
            </span>
          </a>
        </div>
      </div>

      <figure className="hero__figure">
        <img
          src="/img/steven-cutout.png"
          alt="Steven Pelaez, entrenador personal, mostrando su físico"
          width="339"
          height="927"
          fetchPriority="high"
        />
      </figure>

      <div className="hero__lifter">
        <Lifter depth={depth} />
      </div>
    </section>
  )
}
