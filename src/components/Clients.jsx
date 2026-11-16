import { clientPhotos } from '../data/content'

export default function Clients() {
  return (
    <section id="clientes" className="clients" aria-labelledby="clients-title">
      <div className="section-head">
        <h2 id="clients-title" className="head reveal">Clientes en acción</h2>
        <p className="section-head__text reveal">
          Entrenamientos reales de alumnos de Steven en Smart Fit Unicentro. Técnica cuidada, cargas que suben.
        </p>
      </div>
      <ul className="clients__grid">
        {clientPhotos.map((photo) => (
          <li key={photo.src} className="clip reveal">
            <img src={photo.src} alt={photo.alt} width="720" height="960" loading="lazy" />
            <span className="clip__label">{photo.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
