import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import FloatingWhatsApp from './FloatingWhatsApp'

describe('FloatingWhatsApp', () => {
  it('is a labelled link that opens Steven\'s chat by username', () => {
    render(<FloatingWhatsApp />)
    const link = screen.getByRole('link', { name: /escribir a steven por whatsapp/i })
    expect(link.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/stevenpelaez_13\?text=/)
    expect(link).toHaveAttribute('target', '_blank')
  })
})
