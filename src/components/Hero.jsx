import { useEffect, useRef } from 'react'
import Plate from './Plate'

function Dumbbell() {
  return (
    <svg viewBox="0 0 120 48" aria-hidden="true">
      <rect x="4" y="10" width="14" height="28" />
      <rect x="20" y="4" width="14" height="40" />
      <rect x="34" y="20" width="52" height="8" />
      <rect x="86" y="4" width="14" height="40" />
      <rect x="102" y="10" width="14" height="28" />
    </svg>
  )
}

function Kettlebell() {
  return (
    <svg viewBox="0 0 80 90" aria-hidden="true">
      <path d="M22 34 V22 a18 18 0 0 1 36 0 V34 h-10 V22 a8 8 0 0 0 -16 0 V34 z" />
      <circle cx="40" cy="60" r="28" />
    </svg>
  )
}

function Phone() {
  return (
    <svg viewBox="0 0 56 96" aria-hidden="true">
      <rect x="2" y="2" width="52" height="92" rx="8" />
      <rect x="9" y="12" width="38" height="66" className="cut" />
      <path d="M17 40 l8 8 l14 -18" className="tick" />
    </svg>
  )
}

function Stopwatch() {
  return (
    <svg viewBox="0 0 80 90" aria-hidden="true">
      <rect x="32" y="2" width="16" height="10" />
      <circle cx="40" cy="52" r="34" />
      <path d="M40 52 V30" className="hand" />
    </svg>
  )
}

export default function Hero() {
  const stage = useRef(null)

  // Scroll-linked spin: the plates turn a little further as the page scrolls.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches || !stage.current) return undefined
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        stage.current?.style.setProperty('--scroll-turn', `${window.scrollY * 0.12}deg`)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__stage" ref={stage} aria-hidden="true">
        <div className="hero__plate hero__plate--mint">
          <div className="hero__spin">
            <Plate id="p1" label="PRESENCIAL · SMART FIT UNICENTRO · CALI · " />
          </div>
        </div>
        <div className="hero__plate hero__plate--orange">
          <div className="hero__spin">
            <Plate id="p2" label="ONLINE · DESDE DONDE ESTÉS · ONLINE · " />
          </div>
        </div>
        <div className="orbit">
          <span className="orbit__item orbit__item--a"><Dumbbell /></span>
          <span className="orbit__item orbit__item--b"><Kettlebell /></span>
          <span className="orbit__item orbit__item--c"><Phone /></span>
          <span className="orbit__item orbit__item--d"><Stopwatch /></span>
        </div>
      </div>

      <div className="hero__copy">
        <h1 id="hero-title" className="hero__title">
          Entrena con
          <br />
          Steven Pelaez
        </h1>
        <p className="hero__lead">
          Entrenador personal en Smart Fit Unicentro, Cali, y asesorías online para entrenar desde cualquier ciudad.
        </p>
        <div className="hero__actions">
          <a className="button button--mint" href="#plan">Arma tu plan</a>
          <a className="hero__link" href="#planes">Ver planes</a>
        </div>
      </div>
    </section>
  )
}
