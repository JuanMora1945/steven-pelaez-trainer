import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Sections'

describe('Pricing', () => {
  it('shows no prices: Steven agrees them on WhatsApp', () => {
    const { container } = render(<Pricing />)
    expect(container.textContent).not.toMatch(/\$\s?\d/)
  })

  it('sends each plan to Steven by WhatsApp username with the plan name', () => {
    render(<Pricing />)
    for (const name of [/asesoría online/i, /entrenamiento presencial/i]) {
      const plan = screen.getByRole('article', { name })
      const link = within(plan).getByRole('link', { name: /cotizar por whatsapp/i })
      const href = decodeURIComponent(link.getAttribute('href'))
      expect(href).toMatch(/^https:\/\/wa\.me\/stevenpelaez_13\?text=/)
      expect(href.toLowerCase()).toContain('precio')
    }
  })
})
