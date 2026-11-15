import { useEffect, useRef } from 'react'
import Plate from './Plate'

export default function Hero() {
  const root = useRef(null)

  // Scroll-linked spin: the plate turns and the photo drifts as the page scrolls.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches || !root.current) return undefined
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 1200)
        root.current?.style.setProperty('--scroll-turn', `${y * 0.25}deg`)
        root.current?.style.setProperty('--scroll-shift', `${y * 0.12}px`)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <figure className="hero__photo">
        <img
          src="/img/steven-squat.jpg"
          alt="Steven Pelaez haciendo sentadilla con barra en el rack"
          width="900"
          height="1600"
          fetchPriority="high"
        />
      </figure>

      <div className="hero__plate">
        <div className="hero__spin">
          <Plate id="hero-plate" />
        </div>
      </div>

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
          <a className="button button--ghost" href="#planes">Ver planes</a>
        </div>
      </div>
    </section>
  )
}
