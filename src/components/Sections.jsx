import { useEffect, useState } from 'react'
import { contact, plans } from '../data/content'
import { buildWhatsAppLink } from '../lib/whatsapp'

const YEAR = new Date().getFullYear()

const hello = buildWhatsAppLink('Hola Steven, vi tu página y quiero empezar a entrenar contigo.')

export function Nav() {
  return (
    <header className="nav">
      <a className="nav__mark" href="#top">
        Steven Pelaez <span>Trainer</span>
      </a>
      <nav aria-label="Principal">
        <ul className="nav__links">
          <li><a href="#planes">Planes</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#sobre">Sobre mí</a></li>
          <li><a href="#preguntas">Preguntas</a></li>
        </ul>
      </nav>
      <a className="button button--yellow nav__cta" href={hello} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </header>
  )
}

export function Facts() {
  const facts = [
    { big: 'Profesional', text: 'Egresado de la Escuela Nacional del Deporte' },
    { big: 'Smart Fit', text: 'Equipo de entrenadores personales de Unicentro' },
    { big: '1 a 1', text: 'Presencial en Cali u online desde cualquier ciudad' },
  ]
  return (
    <section className="facts" aria-label="Credenciales">
      <ul className="facts__list">
        {facts.map((f) => (
          <li key={f.big} className="reveal">
            <strong>{f.big}</strong>
            <span>{f.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function PlanCard({ plan, photo, alt }) {
  const link = buildWhatsAppLink(
    `Hola Steven, vi tu página. Quiero saber el precio del plan de ${plan.messageName}.`,
  )
  return (
    <article className="plan reveal" aria-labelledby={`plan-${plan.id}`}>
      <img className="plan__photo" src={photo} alt={alt} width="1200" height="1600" loading="lazy" />
      <div className="plan__body">
        <h3 id={`plan-${plan.id}`} className="plan__name">{plan.name}</h3>
        <p className="plan__who">{plan.who}</p>
        <p className="plan__includes">{plan.includes}</p>
        <p className="plan__price">
          Precio a tu medida <span>Steven te lo da por WhatsApp según tus días y tu objetivo.</span>
        </p>
        <a className="button button--yellow" href={link} target="_blank" rel="noopener noreferrer">
          Cotizar por WhatsApp
        </a>
      </div>
    </article>
  )
}

export function Pricing() {
  return (
    <section id="planes" className="pricing" aria-labelledby="pricing-title">
      <div className="section-head">
        <h2 id="pricing-title" className="head reveal">Elige cómo entrenar</h2>
        <p className="section-head__text reveal">
          Dos formas de trabajar con Steven. El mismo método, la misma exigencia.
        </p>
      </div>
      <div className="pricing__grid">
        <PlanCard
          plan={plans.presencial}
          photo="/img/steven-clients.jpg"
          alt="Steven Pelaez con cuatro de sus clientas en Smart Fit Unicentro"
        />
        <PlanCard
          plan={plans.online}
          photo="/img/process/curl.jpg"
          alt="Steven Pelaez haciendo curl de bíceps con mancuernas en el gimnasio"
        />
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-title">
      <figure className="about__portrait reveal">
        <img
          src="/img/steven-portrait.jpg"
          alt="Retrato de Steven Pelaez con camiseta polo frente a una pared con la palabra Strong"
          width="1280"
          height="1600"
          loading="lazy"
        />
      </figure>
      <div className="about__copy">
        <h2 id="about-title" className="head reveal">Sobre Steven</h2>
        <blockquote className="about__quote reveal">«Aquí no le bajamos.»</blockquote>
        <p className="reveal">
          Soy entrenador personal, egresado de la Escuela Nacional del Deporte, y hago parte del equipo de entrenadores
          de Smart Fit Unicentro, en Cali.
        </p>
        <p className="reveal">
          Acompaño tanto a quienes están empezando como a quienes ya entrenan y quieren volver a progresar. Primero
          aseguramos la técnica; después ajustamos el plan a tu ritmo, tus horarios y tu objetivo.
        </p>
      </div>
      <figure className="about__team reveal">
        <img
          src="/img/steven-team.jpg"
          alt="Equipo de entrenadores personales de Smart Fit Unicentro, con Steven Pelaez en el centro"
          width="1600"
          height="1351"
          loading="lazy"
        />
        <figcaption>Equipo PT Smart Fit Unicentro.</figcaption>
      </figure>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contacto" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <h2 id="contact-title" className="contact__title reveal">¿Empezamos?</h2>
        <p className="contact__text reveal">
          Escríbele a Steven por WhatsApp. Te responde con tu plan y tu precio.
        </p>
        <a className="button button--black contact__cta reveal" href={hello} target="_blank" rel="noopener noreferrer">
          Escribir por WhatsApp
        </a>
      </div>
      <dl className="contact__info">
        <div>
          <dt>Presencial</dt>
          <dd>
            <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer">
              {contact.gym}
              <br />
              {contact.street}, {contact.city}
            </a>
          </dd>
        </div>
        <div>
          <dt>Horario</dt>
          <dd>{contact.hours}</dd>
        </div>
        <div>
          <dt>Instagram</dt>
          <dd>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer">{contact.instagramHandle}</a>
          </dd>
        </div>
      </dl>
    </section>
  )
}

function CaliTime() {
  const format = () =>
    new Intl.DateTimeFormat('es-CO', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Bogota' }).format(new Date())
  const [time, setTime] = useState(format)
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30000)
    return () => clearInterval(id)
  }, [])
  return <time>{time}</time>
}

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__mark">Steven Pelaez</p>
      <div className="footer__row">
        <p>
          Entrenamiento personal en Cali y asesorías online. Hora en Cali: <CaliTime />
        </p>
        <nav aria-label="Pie de página">
          <ul className="footer__links">
            <li><a href="#plan">Arma tu plan</a></li>
            <li><a href="#planes">Planes</a></li>
            <li><a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </nav>
      </div>
      <p className="footer__small">
        © {YEAR} Steven Pelaez · Fotos: {contact.instagramHandle} · Sitio hecho por{' '}
        <a href="https://github.com/JuanMora1945">Juan Mora</a>
      </p>
    </footer>
  )
}
