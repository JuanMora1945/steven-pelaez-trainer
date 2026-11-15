import { useEffect, useRef, useState } from 'react'

const DESKTOP_CLIP = '/video/hero-squat-1080.mp4'
const PHONE_CLIP = '/video/steven-squat.mp4'

// "STEVEN" is cut out of a black layer and Steven's squat video plays through the letters.
// As the visitor scrolls, the letters grow until the video fills the screen and the copy appears.
export default function Hero() {
  const root = useRef(null)
  const video = useRef(null)
  const [src] = useState(() =>
    window.matchMedia('(min-width: 768px)').matches ? DESKTOP_CLIP : PHONE_CLIP,
  )

  useEffect(() => {
    const section = root.current
    if (!section) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      section.style.setProperty('--p', '1')
      return undefined
    }
    Promise.resolve(video.current?.play?.()).catch(() => {})

    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const travel = Math.max(rect.height - window.innerHeight, 1)
        const p = Math.min(Math.max(-rect.top / travel, 0), 1)
        section.style.setProperty('--p', p.toFixed(4))
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <div className="hero__stage">
        <video
          ref={video}
          className="hero__video"
          src={src}
          poster="/video/hero-squat.jpg"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-label="Steven Pelaez haciendo sentadilla con barra"
        />

        <div className="hero__mask" aria-hidden="true">
          <span className="reveal-word">STEVEN</span>
        </div>

        <p className="hero__hint" aria-hidden="true">Desliza</p>

        <div className="hero__copy">
          <p className="hero__name">Steven Pelaez</p>
          <h1 id="hero-title" className="hero__title">
            Entrenador personal
          </h1>
          <p className="hero__lead">
            En Cali, conmigo en Smart Fit Unicentro. Online, desde cualquier ciudad. Técnica, constancia y seguimiento
            real.
          </p>
          <div className="hero__actions">
            <a className="button button--yellow" href="#plan">Arma tu plan</a>
            <a className="button button--ghost" href="#clientas">Ver resultados</a>
          </div>
        </div>
      </div>
    </section>
  )
}
