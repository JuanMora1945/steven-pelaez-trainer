import { useEffect, useState } from 'react'
import { contact, credits, plans } from '../data/content'
import { buildWhatsAppLink } from '../lib/whatsapp'

const YEAR = new Date().getFullYear()

const hello = buildWhatsAppLink('Hola Steven, vi tu página y quiero empezar a entrenar contigo.')

export function Nav() {
  return (
    <header className="nav">
      <a className="nav__mark" href="#top">Steven Pelaez</a>
      <nav aria-label="Principal">
        <ul className="nav__links">
          <li><a href="#planes">Planes</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#preguntas">Preguntas</a></li>
        </ul>
      </nav>
      <a className="button button--ink nav__cta" href={hello} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </header>
  )
}

export function Marquee() {
  const words = ['Fuerza', 'Hipertrofia', 'Pérdida de grasa', 'Movilidad', 'Presencial', 'Online']
  const run = (
    <span className="marquee__run">
      {words.map((w) => (
        <span key={w}>{w}</span>
      ))}
    </span>
  )
  return (
    <div className="marquee" aria-label={words.join(', ')} role="img">
      <div className="marquee__track" aria-hidden="true">
        {run}
        {run}
      </div>
    </div>
  )
}

export function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="board">
        <div className="tile tile--a">
          <h2 id="intro-title" className="tile__slogan reveal">
            Aquí no
            <br />
            le bajamos
          </h2>
        </div>
        <div className="tile tile--b">
          <p className="tile__word reveal">1 a 1</p>
        </div>
        <figure className="tile tile--c shutter">
          <img src="/img/dumbbell-rack.jpg" alt="Hilera de mancuernas en un rack de gimnasio" width="1600" height="1070" loading="lazy" />
        </figure>
      </div>
      <div className="intro__text">
        <figure className="intro__photo">
          <img src="/img/cali-skyline.jpg" alt="Vista aérea del centro de Cali con sus edificios y cerros" width="1600" height="841" loading="lazy" />
          <figcaption>Cali, donde entrenamos en persona.</figcaption>
        </figure>
        <p className="intro__body reveal">
          Entrenar con un plan cambia todo. Sin plan, vas al gimnasio, haces lo que ves y a las tres semanas lo dejas. Con un
          entrenador pendiente de tu proceso, cada serie tiene un porqué: la carga, las repeticiones, el descanso y lo que
          comes. Trabajo con personas que empiezan de cero y con quienes llevan años entrenando y se estancaron. En Cali
          entrenamos juntos en Smart Fit Unicentro; si estás en otra ciudad, la asesoría online te da el mismo plan y el mismo
          seguimiento por WhatsApp.
        </p>
      </div>
    </section>
  )
}

function PlanField({ plan, tone }) {
  const link = buildWhatsAppLink(
    `Hola Steven, vi tu página. Quiero saber el precio del plan de ${plan.messageName}.`,
  )
  return (
    <article className={`plan plan--${tone}`} aria-labelledby={`plan-${plan.id}`}>
      <h2 id={`plan-${plan.id}`} className="plan__name reveal">{plan.name}</h2>
      <p className="plan__who reveal">{plan.who}</p>
      <p className="plan__includes reveal">{plan.includes}</p>
      <div className="plan__foot">
        <p className="plan__price">
          A tu medida <span>Steven te da el precio por WhatsApp según tus días y tu objetivo.</span>
        </p>
        <a className="button button--ink" href={link} target="_blank" rel="noopener noreferrer">
          Cotizar por WhatsApp
        </a>
      </div>
    </article>
  )
}

export function Pricing() {
  return (
    <section id="planes" className="pricing" aria-label="Planes">
      <PlanField plan={plans.online} tone="mint" />
      <PlanField plan={plans.presencial} tone="orange" />
    </section>
  )
}

export function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__panel">
        <div className="about__left">
          <h2 id="about-title" className="about__title reveal">Formado para entrenarte bien</h2>
          <figure className="about__photo">
            <img src="/img/plate-rack.jpg" alt="Rack con discos y mancuernas frente a una pared roja" width="1050" height="1400" loading="lazy" />
          </figure>
        </div>
        <div className="about__right">
          <div className="about__block reveal">
            <h3>Formación</h3>
            <p>
              Egresado de la Escuela Nacional del Deporte, en Cali. Entrenador personal de Smart Fit en el equipo de
              entrenadores de la sede Unicentro.
            </p>
          </div>
          <div className="about__block reveal">
            <h3>Cómo entreno</h3>
            <p>
              Técnica primero, carga después. Planes que se ajustan a tu vida y no al revés. Si un suplemento tiene sentido
              para tu objetivo, también te asesoro con eso.
            </p>
          </div>
          <a className="button button--mint" href={hello} target="_blank" rel="noopener noreferrer">
            Escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contacto" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="row">{contact.gym}</h2>
      <a className="row" href={contact.mapUrl} target="_blank" rel="noopener noreferrer">{contact.street}</a>
      <p className="row">{contact.city}</p>
      <p className="row">{contact.hours}</p>
      <a className="row" href={contact.instagram} target="_blank" rel="noopener noreferrer">{contact.instagramHandle}</a>
      <a className="row row--hello" href={hello} target="_blank" rel="noopener noreferrer">
        Hablemos
        <span className="row__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
        </span>
      </a>
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
      <div className="ftile ftile--statement">
        <p>Entrenamiento personal en Cali y asesorías online.</p>
        <p className="ftile__small">© {YEAR} Steven Pelaez</p>
      </div>
      <nav className="ftile ftile--nav" aria-label="Pie de página">
        <ul>
          <li><a href="#plan">Arma tu plan</a></li>
          <li><a href="#planes">Planes</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#preguntas">Preguntas</a></li>
        </ul>
      </nav>
      <div className="ftile ftile--time">
        <p>Cali, Colombia</p>
        <p className="ftile__big"><CaliTime /></p>
      </div>
      <div className="ftile ftile--ig">
        <a href={contact.instagram} target="_blank" rel="noopener noreferrer">{contact.instagramHandle}</a>
      </div>
      <div className="ftile ftile--mark">
        <p className="ftile__wordmark">Steven Pelaez</p>
      </div>
      <a className="ftile ftile--go" href={hello} target="_blank" rel="noopener noreferrer">
        <span>Empieza hoy</span>
        <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 24h30M26 12l12 12-12 12" /></svg>
      </a>
      <div className="ftile ftile--credits">
        <p>
          Fotos:{' '}
          {credits.map((c, i) => (
            <span key={c.file}>
              <a href={c.source}>“{c.title}”</a>
              {c.author ? ` de ${c.author}` : ''}, <a href={c.licenceUrl}>{c.licence}</a>, vía {c.via}
              {i < credits.length - 1 ? '; ' : '. '}
            </span>
          ))}
          Sitio hecho por <a href="https://github.com/JuanMora1945">Juan Mora</a>.
        </p>
      </div>
    </footer>
  )
}
