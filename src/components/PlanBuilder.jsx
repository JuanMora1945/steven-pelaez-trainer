import { useState } from 'react'
import { dayOptions, goals, modes } from '../data/content'
import { buildPlanMessage, buildWhatsAppLink, recommendPlan } from '../lib/whatsapp'

function ChoiceGroup({ legend, name, options, value, onChange }) {
  return (
    <fieldset className="choice-group">
      <legend>{legend}</legend>
      <div className="choice-row">
        {options.map((opt) => (
          <label key={opt.id} className="choice">
            <input
              type="radio"
              name={name}
              value={opt.id}
              checked={value === opt.id}
              onChange={() => onChange(opt.id)}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function PlanBuilder() {
  const [mode, setMode] = useState('presencial')
  const [goal, setGoal] = useState('grasa')
  const [days, setDays] = useState(3)

  const plan = recommendPlan({ mode, goal, days })
  const message = buildPlanMessage({ mode, goal, days })
  const link = buildWhatsAppLink(message)
  const place = modes.find((m) => m.id === mode)?.place

  return (
    <section id="plan" className="chapter chapter--grey builder" aria-labelledby="plan-title">
      <div className="grid">
        <div className="builder__form reveal">
          <h2 id="plan-title" className="head">Arma tu plan</h2>
          <p className="lead">Elige cómo, para qué y cuántos días. El mensaje para Steven se escribe solo.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <ChoiceGroup legend="Modalidad" name="mode" options={modes} value={mode} onChange={setMode} />
            <ChoiceGroup legend="Objetivo" name="goal" options={goals} value={goal} onChange={setGoal} />
            <ChoiceGroup
              legend="Días por semana"
              name="days"
              options={dayOptions.map((d) => ({ id: d, label: String(d) }))}
              value={days}
              onChange={setDays}
            />
          </form>
        </div>

        <div className="builder__result reveal" aria-live="polite">
          <h3 className="builder__plan">{plan.name}</h3>
          <p className="builder__place">{place}</p>
          <p className="builder__count">
            <strong>{plan.sessionsPerMonth}</strong> entrenamientos al mes
          </p>
          <blockquote className="builder__message">{message}</blockquote>
          <a className="button button--ink" href={link} target="_blank" rel="noopener noreferrer">
            Enviar a Steven por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
