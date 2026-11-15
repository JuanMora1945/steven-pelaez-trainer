import { useState } from 'react'
import { steps } from '../data/content'

export default function HowItWorks() {
  const [open, setOpen] = useState(0)

  return (
    <section id="proceso" className="process" aria-labelledby="process-title">
      <div className="section-head">
        <h2 id="process-title" className="head reveal">Así trabajamos</h2>
        <p className="section-head__text reveal">
          El mismo método en persona y online. Toca cada etapa para ver qué pasa en ella.
        </p>
      </div>

      <div className="process__strip">
        {steps.map((step, i) => {
          const isOpen = i === open
          return (
            <div key={step.name} className={`stage${isOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                className="stage__tab"
                aria-expanded={isOpen}
                aria-controls={`stage-${i}`}
                onClick={() => setOpen(i)}
              >
                <span className="stage__num" aria-hidden="true">{i + 1}</span>
                <span className="stage__name">{step.name}</span>
              </button>
              <div id={`stage-${i}`} className="stage__body" hidden={!isOpen}>
                <p>{step.text}</p>
              </div>
            </div>
          )
        })}
        <img
          className="process__photo"
          src="/img/steven-incline.jpg"
          alt="Steven Pelaez haciendo remo con mancuerna en un banco inclinado"
          width="900"
          height="1600"
          loading="lazy"
        />
      </div>
    </section>
  )
}
