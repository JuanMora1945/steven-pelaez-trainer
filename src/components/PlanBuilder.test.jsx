import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import PlanBuilder from './PlanBuilder'

describe('PlanBuilder', () => {
  it('starts with the in-person plan and a WhatsApp link that describes it', () => {
    render(<PlanBuilder />)
    const link = screen.getByRole('link', { name: /enviar a steven/i })
    expect(decodeURIComponent(link.getAttribute('href'))).toContain('Smart Fit Unicentro')
    expect(screen.getByRole('heading', { name: /entrenamiento presencial/i })).toBeInTheDocument()
  })

  it('updates the plan and the message when the visitor changes the choices', async () => {
    const user = userEvent.setup()
    render(<PlanBuilder />)
    await user.click(screen.getByRole('radio', { name: /online/i }))
    await user.click(screen.getByRole('radio', { name: /ganar masa/i }))
    await user.click(screen.getByRole('radio', { name: '5' }))

    expect(screen.getByRole('heading', { name: /asesoría online/i })).toBeInTheDocument()
    const href = decodeURIComponent(screen.getByRole('link', { name: /enviar a steven/i }).getAttribute('href'))
    expect(href).toContain('asesoría online')
    expect(href).toContain('ganar masa muscular')
    expect(href).toContain('5 días por semana')
  })
})
