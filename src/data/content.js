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
    clip: 'coach-bench',
    text: 'Hablamos de tu objetivo, tu historial y tus horarios. Tomamos medidas y fotos de inicio para comparar después.',
  },
  {
    name: 'Tu plan',
    clip: 'steven-pulldown',
    text: 'Armo tu rutina según tus días, tu nivel y el gimnasio donde entrenas. Nada de copiar la rutina de otro.',
  },
  {
    name: 'Entrenar',
    clip: 'steven-shoulder',
    text: 'En persona corrijo tu técnica en cada serie. Online recibes el video de cada ejercicio y me mandas los tuyos.',
  },
  {
    name: 'Seguimiento',
    clip: 'steven-row',
    text: 'Cada semana revisamos cargas, sensaciones y alimentación por WhatsApp. Si algo no funciona, lo cambiamos.',
  },
  {
    name: 'Resultados',
    clip: 'steven-squat',
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

// Hero image changer: frames of Steven training, taken from his Instagram reels.
export const heroSlides = {
  interval: 3200,
  images: [
    { src: '/img/hero/steven-squat.jpg', label: 'Sentadilla con barra', alt: 'Steven Pelaez haciendo sentadilla con barra' },
    { src: '/img/hero/steven-shoulder.jpg', label: 'Press de hombro', alt: 'Steven Pelaez en la máquina de press de hombro' },
    { src: '/img/hero/coach-bench.jpg', label: 'Asistiendo un press de banca', alt: 'Steven Pelaez asistiendo a un alumno en press de banca' },
    { src: '/img/hero/steven-row.jpg', label: 'Remo con mancuerna', alt: 'Steven Pelaez haciendo remo con mancuerna en banco inclinado' },
    { src: '/img/hero/steven-pulldown.jpg', label: 'Jalón al pecho', alt: 'Steven Pelaez en la máquina de jalón' },
    { src: '/img/steven-smile.jpg', label: 'Smart Fit Unicentro', alt: 'Steven Pelaez sonriendo con su uniforme de entrenador' },
  ],
}

// Short clips from Steven's reels (muted, 6 s, 540 px wide).
export const clientClips = [
  { src: '/video/client-deadlift.mp4', poster: '/video/client-deadlift.jpg', label: 'Peso muerto' },
  { src: '/video/client-pullup.mp4', poster: '/video/client-pullup.jpg', label: 'Dominadas' },
  { src: '/video/coach-glute.mp4', poster: '/video/coach-glute.jpg', label: 'Día de glúteo' },
  { src: '/video/coach-clients.mp4', poster: '/video/coach-clients.jpg', label: 'Tren inferior en máquina' },
]
