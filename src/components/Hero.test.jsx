import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('shows the h1, Steven cut out from the background and the squat figure', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/entrenador personal/i)
    expect(screen.getByRole('img', { name: /steven pelaez/i })).toHaveAttribute('src', '/img/steven-cutout.png')
    expect(container.querySelector('.lifter')).not.toBeNull()
  })

  it('drops the "Desliza y levanta" card and links Instagram with its logo', () => {
    const { container } = render(<Hero />)
    expect(container.textContent).not.toMatch(/desliza/i)
    const ig = screen.getByRole('link', { name: /instagram/i })
    expect(ig).toHaveAttribute('href', 'https://www.instagram.com/stevenpelaez.trainer/')
    expect(ig.querySelector('svg')).not.toBeNull()
  })
})
