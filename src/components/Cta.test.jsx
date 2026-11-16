import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Clients from './Clients'
import HowItWorks from './HowItWorks'
import { Footer } from './Sections'

describe('Section calls to action', () => {
  it('ends the process and clients sections with "Agenda tu entrenamiento" on WhatsApp', () => {
    for (const Section of [HowItWorks, Clients]) {
      const { container, unmount } = render(<Section />)
      const link = within(container).getByRole('link', { name: /agenda tu entrenamiento/i })
      expect(link.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/stevenpelaez_13\?text=/)
      unmount()
    }
  })
})

describe('Footer', () => {
  it('states the site is independent from Smart Fit', () => {
    render(<Footer />)
    expect(screen.getByText(/no es un sitio oficial de smart fit/i)).toBeInTheDocument()
  })
})
