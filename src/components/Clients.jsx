import { clientClips } from '../data/content'
import LazyVideo from './LazyVideo'

export default function Clients() {
  return (
    <section id="clientas" className="clients" aria-labelledby="clients-title">
      <div className="section-head">
        <h2 id="clients-title" className="head reveal">Clientas en acción</h2>
        <p className="section-head__text reveal">
          Entrenamientos reales de alumnas de Steven en Smart Fit Unicentro. Técnica cuidada, cargas que suben.
        </p>
      </div>
      <ul className="clients__strip">
        {clientClips.map((clip) => (
          <li key={clip.src} className="clip reveal">
            <LazyVideo src={clip.src} poster={clip.poster} label={`Clienta de Steven: ${clip.label}`} />
            <span className="clip__label">{clip.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
