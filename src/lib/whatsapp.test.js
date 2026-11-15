import { describe, expect, it } from 'vitest'
import { buildPlanMessage, buildWhatsAppLink, recommendPlan } from './whatsapp'

describe('recommendPlan', () => {
  it('returns the in-person plan with monthly sessions for the chosen days', () => {
    const plan = recommendPlan({ mode: 'presencial', goal: 'fuerza', days: 4 })
    expect(plan.id).toBe('presencial')
    expect(plan.sessionsPerMonth).toBe(16)
  })

  it('returns the online plan for the online mode', () => {
    const plan = recommendPlan({ mode: 'online', goal: 'grasa', days: 3 })
    expect(plan.id).toBe('online')
    expect(plan.sessionsPerMonth).toBe(12)
  })
})

describe('buildPlanMessage', () => {
  it('names the plan, the goal and the days', () => {
    const text = buildPlanMessage({ mode: 'online', goal: 'masa', days: 5 })
    expect(text).toContain('asesoría online')
    expect(text).toContain('ganar masa muscular')
    expect(text).toContain('5 días por semana')
  })

  it('mentions Smart Fit Unicentro for the in-person plan', () => {
    const text = buildPlanMessage({ mode: 'presencial', goal: 'salud', days: 3 })
    expect(text).toContain('Smart Fit Unicentro')
  })
})

describe('buildWhatsAppLink', () => {
  it('uses the phone number when there is one', () => {
    const url = buildWhatsAppLink('Hola', { phone: '+57 300 123 4567', username: 'x' })
    expect(url).toBe('https://wa.me/573001234567?text=Hola')
  })

  it('falls back to the username and encodes the text', () => {
    const url = buildWhatsAppLink('Hola Steven, ¿cómo?', { phone: '', username: 'stevenpelaez_13' })
    expect(url).toBe(
      'https://wa.me/stevenpelaez_13?text=' + encodeURIComponent('Hola Steven, ¿cómo?'),
    )
  })
})
