import { clientPhotos } from '../data/content'
import SectionCta from './SectionCta'

// Bento grid: tiles of different sizes; the caption rises over the photo on hover or focus.
export default function Clients() {
  return (
    <section id="clientes" className="clients" aria-labelledby="clients-title">
      <div className="section-head">
        <h2 id="clients-title" className="head reveal">Clientes en acción</h2>
        <p className="section-head__text reveal">
          Así se ve una sesión con Steven en Smart Fit Unicentro: corrección en cada repetición y cargas que suben semana a
          semana.
        </p>
      </div>
      <ul className="bento">
        {clientPhotos.map((photo, i) => (
          <li key={photo.src} className={`bento__tile bento__tile--${i + 1} reveal`} tabIndex={0}>
            <img src={photo.src} alt={photo.alt} width="720" height="960" loading="lazy" />
            <div className="bento__caption">
              <span className="bento__label">{photo.label}</span>
              <span className="bento__note">{photo.note}</span>
            </div>
          </li>
        ))}
      </ul>
      <SectionCta
        text="¿Quieres entrenar así? Steven te arma el plan según tu objetivo."
        message="Hola Steven, vi tu página y quiero entrenar contigo."
      />
    </section>
  )
}
