// All page copy lives here so it can be updated without touching components.
// Values marked SAMPLE are placeholders to confirm with Steven before publishing.

export const contact = {
  // WhatsApp opens Steven's chat by username (wa.me/<username>, checked 2026-11-15).
  // A phone number in international format, if added later, takes priority.
  phone: '',
  username: 'stevenpelaez_13',
  instagram: 'https://www.instagram.com/stevenpelaez.trainer/',
  instagramHandle: '@stevenpelaez.trainer',
  gym: 'Smart Fit Unicentro',
  street: 'C.C. Unicentro, Cra.\u00a0100\u00a0#5\u2011169', // verify with Steven; non-breaking spaces keep "Cra. 100 #5-169" on one line
  city: 'Cali, Valle del Cauca',
  hours: 'Lunes a sábado, con cita', // SAMPLE
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Smart+Fit+Unicentro+Cali',
}

export const modes = [
  { id: 'presencial', label: 'Presencial', place: 'en Smart Fit Unicentro, Cali' },
  { id: 'online', label: 'Online', place: 'desde donde estés' },
]

export const goals = [
  { id: 'grasa', label: 'Bajar grasa', phrase: 'bajar grasa' },
  { id: 'masa', label: 'Ganar masa', phrase: 'ganar masa muscular' },
  { id: 'fuerza', label: 'Más fuerza', phrase: 'ganar fuerza' },
  { id: 'salud', label: 'Salud y movilidad', phrase: 'mejorar mi salud y movilidad' },
]

export const dayOptions = [3, 4, 5]

export const plans = {
  presencial: {
    id: 'presencial',
    name: 'Entrenamiento presencial',
    messageName: 'entrenamiento presencial en Smart Fit Unicentro',
    who: 'Para quien vive en Cali y quiere a Steven al lado en cada serie.',
    includes:
      'Sesiones uno a uno en Smart Fit Unicentro, valoración inicial, técnica corregida en cada ejercicio, plan de entrenamiento por escrito y pautas de alimentación según tu objetivo. Necesitas tu membresía de Smart Fit activa.',
  },
  online: {
    id: 'online',
    name: 'Asesoría online',
    messageName: 'asesoría online',
    who: 'Para quien entrena en cualquier gimnasio o ciudad y quiere un plan serio.',
    includes:
      'Rutina a tu medida con video de cada ejercicio, pautas de alimentación, revisión semanal por WhatsApp y ajustes del plan cada mes según tu progreso.',
  },
}

export const steps = [
  {
    name: 'Valoración',
    photo: '/img/steven-smile.jpg',
    text: 'Hablamos de tu objetivo, tu historial y tus horarios. Tomamos medidas y fotos de inicio para comparar después.',
  },
  {
    name: 'Tu plan',
    photo: '/img/process/curl.jpg',
    text: 'Armo tu rutina según tus días, tu nivel y el gimnasio donde entrenas. Nada de copiar la rutina de otro.',
  },
  {
    name: 'Entrenar',
    photo: '/img/process/deadlift.jpg',
    text: 'En persona corrijo tu técnica en cada serie. Online recibes el video de cada ejercicio y me mandas los tuyos.',
  },
  {
    name: 'Seguimiento',
    video: '/video/steven-row.mp4',
    poster: '/video/steven-row.jpg',
    text: 'Cada semana revisamos cargas, sensaciones y alimentación por WhatsApp. Si algo no funciona, lo cambiamos.',
  },
  {
    name: 'Resultados',
    photo: '/img/process/squat.jpg',
    text: 'Cada mes comparamos medidas y fotos contra el inicio y subimos el nivel del plan.',
  },
]

export const faqs = [
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende de la modalidad, los días por semana y tu objetivo. Escríbele a Steven por WhatsApp y te da el precio de tu plan.',
  },
  {
    q: '¿Necesito ser afiliado de Smart Fit?',
    a: 'Para el plan presencial sí: entrenamos en la sede Unicentro y necesitas tu membresía activa. La asesoría online sirve en cualquier gimnasio.',
  },
  {
    q: '¿Sirve si nunca he entrenado?',
    a: 'Sí. Empezamos con cargas bajas y aprendes la técnica de cada ejercicio antes de subir el peso.',
  },
  {
    q: '¿Cómo funciona la asesoría online?',
    a: 'Recibes tu rutina con videos, me mandas videos de tus series para corregir la técnica y cada semana revisamos tu progreso por WhatsApp.',
  },
  {
    q: '¿Incluye alimentación?',
    a: 'Incluye pautas de alimentación según tu objetivo. Si tienes una condición médica, trabajamos junto con tu nutricionista o médico.',
  },
  {
    q: '¿Vendes suplementos?',
    a: 'Sí. Te recomiendo solo los que tienen sentido para tu objetivo, y muchos planes funcionan sin ninguno.',
  },
]

// Steven coaching his clients at Smart Fit Unicentro (photos and frames from his Instagram).
export const clientPhotos = [
  { src: '/img/clients/kickback.jpg', label: 'Patada de glúteo', note: 'Steven guía el rango y la postura', alt: 'Steven Pelaez corrigiendo a una clienta en una patada de glúteo sobre banco' },
  { src: '/img/clients/hip-thrust.jpg', label: 'Hip thrust', note: 'Corrección en cada repetición', alt: 'Steven Pelaez acompañando a una clienta en la máquina de hip thrust' },
  { src: '/img/clients/cable.jpg', label: 'Trabajo en polea', note: 'Técnica antes que peso', alt: 'Clienta de Steven entrenando en la polea baja' },
  { src: '/img/clients/deadlift.jpg', label: 'Peso muerto', note: 'Fuerza con buena forma', alt: 'Clienta de Steven terminando un peso muerto con barra' },
  { src: '/img/clients/leg-machine.jpg', label: 'Tren inferior', note: 'Sesiones que se disfrutan', alt: 'Clienta de Steven sonriendo en una máquina de pierna' },
  { src: '/img/clients/pullup.jpg', label: 'Dominadas', note: 'Progreso que se nota', alt: 'Clienta de Steven haciendo dominadas' },
]
