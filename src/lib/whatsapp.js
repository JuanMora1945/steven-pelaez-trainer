import { contact, goals, plans } from '../data/content'

const WEEKS_PER_MONTH = 4

export function recommendPlan({ mode, days }) {
  const plan = plans[mode] ?? plans.presencial
  return { ...plan, sessionsPerMonth: days * WEEKS_PER_MONTH }
}

export function buildPlanMessage({ mode, goal, days }) {
  const plan = recommendPlan({ mode, goal, days })
  const goalPhrase = goals.find((g) => g.id === goal)?.phrase ?? 'empezar a entrenar'
  return (
    `Hola Steven, vi tu página. Me interesa el plan de ${plan.messageName} ` +
    `para ${goalPhrase}, ${days} días por semana. ¿Me cuentas cómo empezamos?`
  )
}

// Prefers the phone number (always works); falls back to the WhatsApp username.
export function buildWhatsAppLink(text, { phone, username } = contact) {
  const digits = (phone ?? '').replace(/\D/g, '')
  const target = digits || username
  return `https://wa.me/${target}?text=${encodeURIComponent(text)}`
}
