import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import HowItWorks from './HowItWorks'

describe('HowItWorks', () => {
  it('opens the first stage by default and another one on click', async () => {
    const user = userEvent.setup()
    render(<HowItWorks />)
    const tabs = screen.getAllByRole('button', { expanded: false })
    expect(screen.getAllByRole('button', { expanded: true })).toHaveLength(1)

    await user.click(tabs[0])
    expect(tabs[0]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('button', { expanded: true })).toHaveLength(1)
  })

  it('shows the deadlift photo in "Entrenar" and the row video in "Seguimiento"', async () => {
    const user = userEvent.setup()
    const { container } = render(<HowItWorks />)
    await user.click(screen.getByRole('button', { name: /entrenar/i }))
    expect(container.querySelector('.stage.is-open img').getAttribute('src')).toBe('/img/process/deadlift.webp')
    await user.click(screen.getByRole('button', { name: /seguimiento/i }))
    expect(container.querySelector('.stage.is-open video').getAttribute('src')).toBe('/video/steven-row.mp4')
  })

  it('shows the mirror photo in "Resultados"', async () => {
    const user = userEvent.setup()
    const { container } = render(<HowItWorks />)
    await user.click(screen.getByRole('button', { name: /resultados/i }))
    expect(container.querySelector('.stage.is-open img').getAttribute('src')).toBe('/img/steven-mirror.webp')
  })
})
