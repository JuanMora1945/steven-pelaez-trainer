import { useEffect, useState } from 'react'
import { heroSlides } from '../data/content'

const PANELS = 3

// Three vertical panels, like reels, each showing a different photo of Steven training.
// They change on a timer, one panel after the other.
function Slides() {
  const [step, setStep] = useState(0)
  const { images, interval } = heroSlides

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return undefined
    const id = setInterval(() => setStep((s) => s + 1), interval)
    return () => clearInterval(id)
  }, [interval])

  return (
    <div className="slides" aria-hidden="true">
      {Array.from({ length: PANELS }, (_, p) => {
        const current = (step + p * 2) % images.length
        return (
          <div key={p} className={`slides__panel slides__panel--${p}`}>
            {images.map((img, i) => (
              <figure key={img.src} className={`slide${i === current ? ' is-active' : ''}`}>
                <img src={img.src} alt="" width="720" height="1280" loading={i < PANELS * 2 ? 'eager' : 'lazy'} />
                <figcaption>{img.label}</figcaption>
              </figure>
            ))}
            <span key={step} className="slides__bar" />
          </div>
        )
      })}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Slides />
      <div className="hero__copy">
        <p className="hero__name">Steven Pelaez</p>
        <h1 id="hero-title" className="hero__title">
          Entrenador personal
        </h1>
        <p className="hero__lead">
          En Cali, conmigo en Smart Fit Unicentro. Online, desde cualquier ciudad. Técnica, constancia y seguimiento real.
        </p>
        <div className="hero__actions">
          <a className="button button--yellow" href="#plan">Arma tu plan</a>
          <a className="button button--ghost" href="#clientas">Ver resultados</a>
        </div>
      </div>
    </section>
  )
}
