import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Faq from './Faq'
import { faqs } from '../data/content'

describe('Faq accordion', () => {
  it('lists every question as a button and opens only the first one', () => {
    render(<Faq />)
    const buttons = faqs.map((f) => screen.getByRole('button', { name: f.q }))
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    for (const b of buttons.slice(1)) expect(b).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(faqs[0].a)).toBeVisible()
  })

  it('opens the clicked question and closes the previous one', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const second = screen.getByRole('button', { name: faqs[1].q })
    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: faqs[0].q })).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes an open question when it is clicked again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getByRole('button', { name: faqs[0].q })
    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })

  it('offers a WhatsApp link with the question already written', () => {
    render(<Faq />)
    const panel = screen.getByRole('region', { name: faqs[0].q })
    const link = within(panel).getByRole('link', { name: /pregúntale a steven/i })
    const href = decodeURIComponent(link.getAttribute('href'))
    expect(href).toMatch(/^https:\/\/wa\.me\/stevenpelaez_13\?text=/)
    expect(href).toContain(faqs[0].q)
  })

  it('invites visitors whose question is not listed to write on WhatsApp', () => {
    render(<Faq />)
    expect(screen.getByRole('link', { name: /escríbele/i }).getAttribute('href')).toMatch(/wa\.me\/stevenpelaez_13/)
  })
})
