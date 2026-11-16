import { useState } from 'react'
import { faqs } from '../data/content'
import { buildWhatsAppLink } from '../lib/whatsapp'

const otherQuestion = buildWhatsAppLink('Hola Steven, vi tu página y tengo una pregunta: ')

// Accordion: one question open at a time, each answer with a WhatsApp shortcut.
export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="preguntas" className="faq" aria-labelledby="faq-title">
      <div className="faq__intro">
        <h2 id="faq-title" className="head reveal">Preguntas</h2>
        <p className="faq__lead reveal">Lo que más le preguntan a Steven antes de empezar.</p>
        <div className="faq__other reveal">
          <p>¿No está tu pregunta?</p>
          <a className="button button--yellow" href={otherQuestion} target="_blank" rel="noopener noreferrer">
            Escríbele por WhatsApp
          </a>
        </div>
      </div>

      <ul className="faq__list">
        {faqs.map((item, i) => {
          const isOpen = i === open
          const ask = buildWhatsAppLink(`Hola Steven, vi tu página. Tengo una duda: ${item.q}`)
          return (
            <li key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
              <h3 className="faq__q">
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="faq__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq__text">{item.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
              </h3>
              <div id={`faq-a-${i}`} className="faq__a" role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                <p>{item.a}</p>
                <a className="faq__ask" href={ask} target="_blank" rel="noopener noreferrer">
                  Pregúntale a Steven
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
