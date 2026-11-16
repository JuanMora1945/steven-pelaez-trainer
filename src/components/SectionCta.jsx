import { buildWhatsAppLink } from '../lib/whatsapp'

// Closing call to action for a section: one line of copy and the WhatsApp button.
export default function SectionCta({ text, message }) {
  return (
    <div className="section-cta reveal">
      <p>{text}</p>
      <a className="button button--yellow" href={buildWhatsAppLink(message)} target="_blank" rel="noopener noreferrer">
        Agenda tu entrenamiento
      </a>
    </div>
  )
}
