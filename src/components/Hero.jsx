import { useEffect, useRef } from 'react'
import { contact } from '../data/content'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.4" cy="6.6" r="1.2" className="fill" />
    </svg>
  )
}

// Hero after the gym-template reference: Steven cut out over his blurred gym.
// A yellow spotlight follows the pointer and the layers shift in depth as it moves;
// on touch screens they drift, follow the scroll and the phone's tilt.
export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const section = root.current
    if (!section) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reduce) return undefined
    const set = (x, y) => {
      section.style.setProperty('--mx', x.toFixed(3))
      section.style.setProperty('--my', y.toFixed(3))
    }

    // Touch screens have no hover: drift on our own, follow the scroll and, where the
    // browser allows it without a prompt (Android), the phone's tilt.
    if (!finePointer) {
      let raf = 0
      let tiltX = 0
      let tiltY = 0
      const onTilt = (e) => {
        if (e.gamma == null || e.beta == null) return
        tiltX = Math.max(-1, Math.min(1, e.gamma / 30)) * 0.35
        tiltY = Math.max(-1, Math.min(1, (e.beta - 45) / 30)) * 0.25
      }
      const tick = (now) => {
        const r = section.getBoundingClientRect()
        if (r.bottom >= 0) {
          const t = now / 1000
          const scroll = Math.min(window.scrollY / Math.max(r.height, 1), 1)
          set(Math.sin(t * 0.6) * 0.3 + tiltX, Math.cos(t * 0.45) * 0.22 + scroll * 0.6 + tiltY)
        }
        raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
      const needsPermission = typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function'
      if (!needsPermission) window.addEventListener('deviceorientation', onTilt)
      return () => {
        cancelAnimationFrame(raf)
        window.removeEventListener('deviceorientation', onTilt)
      }
    }

    let frame = 0
    const onMove = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = section.getBoundingClientRect()
        set((e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5)
      })
    }
    const onLeave = () => set(0, 0)
    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    return () => {
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__copy">
        <p className="hero__name">Steven Pelaez</p>
        <h1 id="hero-title" className="hero__title">
          Entrenador personal <span className="hero__city">en Cali</span>
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

      <div className="hero__stage">
        <div className="hero__glow" aria-hidden="true" />
        <span className="hero__stripe hero__stripe--a" aria-hidden="true" style={{ '--depth': 1.6 }} />
        <span className="hero__stripe hero__stripe--b" aria-hidden="true" style={{ '--depth': 1.1 }} />
        <figure className="hero__figure" style={{ '--depth': 0.5 }}>
          <img
            src="/img/steven-cutout.webp"
            alt="Steven Pelaez sonriendo y mostrando el bíceps"
            width="960"
            height="1100"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  )
}
