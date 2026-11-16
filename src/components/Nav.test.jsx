import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Nav } from './Sections'

describe('Nav mobile menu', () => {
  it('has a menu button that starts closed', () => {
    render(<Nav />)
    const toggle = screen.getByRole('button', { name: /abrir menú/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'menu-principal')
  })

  it('opens and closes with the button', async () => {
    const user = userEvent.setup()
    const { container } = render(<Nav />)
    await user.click(screen.getByRole('button', { name: /abrir menú/i }))
    const close = screen.getByRole('button', { name: /cerrar menú/i })
    expect(close).toHaveAttribute('aria-expanded', 'true')
    expect(container.querySelector('.nav')).toHaveClass('is-open')
    await user.click(close)
    expect(screen.getByRole('button', { name: /abrir menú/i })).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes when a link is chosen or Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<Nav />)
    await user.click(screen.getByRole('button', { name: /abrir menú/i }))
    await user.click(screen.getByRole('link', { name: 'Planes' }))
    expect(screen.getByRole('button', { name: /abrir menú/i })).toHaveAttribute('aria-expanded', 'false')
    await user.click(screen.getByRole('button', { name: /abrir menú/i }))
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: /abrir menú/i })).toHaveAttribute('aria-expanded', 'false')
  })

  it('lists every section, including clients', () => {
    render(<Nav />)
    for (const name of ['Planes', 'Proceso', 'Clientes', 'Sobre mí', 'Preguntas']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })
})
