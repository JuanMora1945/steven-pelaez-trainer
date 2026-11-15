import { useEffect, useRef, useState } from 'react'
import { SERIES, seriesAt } from '../lib/series'

const DESKTOP_CLIP = '/video/hero-squat-1080.mp4'
const PHONE_CLIP = '/video/steven-squat.mp4'
const RADIUS = 92
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

// A training-app style counter: counts Steven's set from 1 to 12, then rests and starts again.
function Counter() {
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const start = useRef(0)
  const [state, setState] = useState(() =>
    reduce ? { phase: 'done', rep: SERIES.reps, progress: 1 } : seriesAt(0),
  )

  useEffect(() => {
    if (reduce) return undefined
    start.current = Date.now()
    const id = setInterval(() => setState(seriesAt(Date.now() - start.current)), 50)
    return () => clearInterval(id)
  }, [reduce])

  const restart = () => {
    start.current = Date.now()
    setState(seriesAt(0))
  }

  const offset = CIRCUMFERENCE * (1 - state.progress)
  const status =
    state.phase === 'done' ? '¡Serie completa!' : state.phase === 'rest' ? `Descanso ${state.countdown}` : 'Repeticiones'

  return (
    <div className={`counter counter--${state.phase}`}>
      <button type="button" className="counter__ring" onClick={restart} aria-label="Reiniciar la serie">
        <svg viewBox="0 0 220 220" aria-hidden="true">
          <circle className="counter__track" cx="110" cy="110" r={RADIUS} />
          <circle
            className="counter__fill"
            cx="110"
            cy="110"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="counter__value" aria-hidden="true">
          <span key={state.rep} className="counter__number">{state.rep}</span>
          <span className="counter__of">/{SERIES.reps}</span>
        </span>
      </button>
      <p className="counter__status" aria-hidden="true">{status}</p>
    </div>
  )
}

export default function Hero() {
  const video = useRef(null)
  const [src] = useState(() =>
    window.matchMedia('(min-width: 768px)').matches ? DESKTOP_CLIP : PHONE_CLIP,
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    Promise.resolve(video.current?.play?.()).catch(() => {})
  }, [])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="hero__name">Steven Pelaez</p>
        <h1 id="hero-title" className="hero__title">
          Entrenador personal
        </h1>
        <p className="hero__lead">
          En Cali, conmigo en Smart Fit Unicentro. Online, desde cualquier ciudad. Técnica, constancia y seguimiento real.
        </p>
        <div className="hero__actions">
          <a className="button button--yellow hero__cta" href="#plan">Arma tu plan</a>
          <a className="button button--ghost" href="#clientas">Ver resultados</a>
        </div>
      </div>

      <div className="hero__media">
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
          aria-label="Steven Pelaez haciendo una serie de sentadilla con barra"
        />
        <Counter />
      </div>
    </section>
  )
}
