import { useEffect, useRef, useState } from 'react'
import Lifter from './Lifter'

// Hero inspired by classic gym landing pages: big title on the left, Steven on the right,
// and a line-art athlete that presses the bar overhead as the visitor scrolls.
export default function Hero() {
  const root = useRef(null)
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [progress, setProgress] = useState(() => (reduce ? 1 : 0))

  useEffect(() => {
    const section = root.current
    if (!section || reduce) return undefined

    // One demo rep on load, so visitors see the figure can move.
    let frame = 0
    let demo = true
    const t0 = performance.now()
    const demoStep = (now) => {
      if (!demo) return
      const t = Math.min((now - t0) / 1800, 1)
      setProgress(Math.sin(t * Math.PI) * 0.9)
      if (t < 1) frame = requestAnimationFrame(demoStep)
    }
    frame = requestAnimationFrame(demoStep)

    const onScroll = () => {
      demo = false
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const travel = section.offsetHeight * 0.55 || 1
        setProgress(Math.min(Math.max(window.scrollY / travel, 0), 1))
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
    <section className="hero" ref={root} aria-labelledby="hero-title">
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
          <p className="hero__proof">
            <strong>+5.000</strong> seguidores en Instagram
          </p>
        </div>
      </div>

      <figure className="hero__photo">
        <img
          src="/img/steven-mirror.jpg"
          alt="Steven Pelaez en el gimnasio mostrando su físico"
          width="1012"
          height="1400"
          fetchPriority="high"
        />
      </figure>

      <div className="hero__lifter">
        <Lifter progress={progress} />
        <p className="hero__lifter-text" aria-hidden="true">
          {progress > 0.95 ? '¡Arriba!' : 'Desliza y levanta'}
        </p>
      </div>
    </section>
  )
}
