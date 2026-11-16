import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './Sections'

describe('About', () => {
  it("shows Steven's portrait and the PT Unicentro team photo", () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /retrato de steven pelaez/i })).toHaveAttribute('src', '/img/steven-portrait.jpg')
    expect(screen.getByRole('img', { name: /equipo de entrenadores/i })).toHaveAttribute('src', '/img/steven-team.jpg')
  })

  it('no longer talks about supplements', () => {
    const { container } = render(<About />)
    expect(container.textContent).not.toMatch(/suplement/i)
  })

  it('shows Steven with two of his clients next to the team photo', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /steven pelaez con dos de sus clientas/i })).toHaveAttribute(
      'src',
      '/img/steven-with-clients.jpg',
    )
  })
})
