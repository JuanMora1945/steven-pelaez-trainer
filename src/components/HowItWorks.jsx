import { useState } from 'react'
import { steps } from '../data/content'

export default function HowItWorks() {
  const [open, setOpen] = useState(0)

  return (
    <section id="proceso" className="chapter chapter--white process" aria-labelledby="process-title">
      <div className="grid process__intro">
        <h2 id="process-title" className="head reveal">Así trabajamos</h2>
        <p className="process__text reveal">
          El mismo método en persona y online: medir, planear, entrenar, revisar. Toca cada etapa para ver qué pasa en ella.
        </p>
      </div>

      <div className="process__strip">
        {steps.map((step, i) => {
          const isOpen = i === open
          return (
            <div key={step.name} className={`stage stage--${i}${isOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                className="stage__tab"
                aria-expanded={isOpen}
                aria-controls={`stage-${i}`}
                onClick={() => setOpen(i)}
              >
                <span className="stage__name">{step.name}</span>
              </button>
              {isOpen && (
                <img
                  className="stage__photo"
                  src="/img/weights-room.jpg"
                  alt="Sala de pesas con racks, barras y bancos"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
              )}
              <div id={`stage-${i}`} className="stage__body" hidden={!isOpen}>
                <p>{step.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
