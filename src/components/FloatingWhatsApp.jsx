import { buildWhatsAppLink } from '../lib/whatsapp'

const link = buildWhatsAppLink('Hola Steven, vi tu página y quiero información para entrenar contigo.')

// Always-visible WhatsApp button in the bottom-right corner.
export default function FloatingWhatsApp() {
  return (
    <a className="wa-float" href={link} target="_blank" rel="noopener noreferrer" aria-label="Escribir a Steven por WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.3-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.6 4.9 2.1.9 2.9 1 3.9.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z" />
      </svg>
    </a>
  )
}
