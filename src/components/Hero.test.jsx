import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('shows the h1 and Steven cut out from the background', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/entrenador personal/i)
    expect(screen.getByRole('img', { name: /steven pelaez/i })).toHaveAttribute('src', '/img/steven-cutout.webp')
  })

  it('uses a mouse-following light and angled stripes instead of cards, figure or outlined name', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('.badge')).toBeNull()
    expect(container.querySelector('.lifter')).toBeNull()
    expect(container.querySelector('.hero__word')).toBeNull()
    expect(container.querySelector('.hero__glow')).not.toBeNull()
    expect(container.querySelectorAll('.hero__stripe')).toHaveLength(2)
  })

  it('keeps the Instagram link with its logo', () => {
    render(<Hero />)
    const ig = screen.getByRole('link', { name: /instagram/i })
    expect(ig).toHaveAttribute('href', 'https://www.instagram.com/stevenpelaez.trainer/')
    expect(ig.querySelector('svg')).not.toBeNull()
  })

  it('moves Steven and the stripes on touch screens too (no mouse)', async () => {
    const original = window.matchMedia
    window.matchMedia = (q) => ({ matches: q.includes('coarse'), media: q, addEventListener() {}, removeEventListener() {} })
    const { container } = render(<Hero />)
    await new Promise((r) => setTimeout(r, 250))
    const hero = container.querySelector('.hero')
    const mx = Number(hero.style.getPropertyValue('--mx'))
    const my = Number(hero.style.getPropertyValue('--my'))
    window.matchMedia = original
    expect(Math.abs(mx) + Math.abs(my)).toBeGreaterThan(0)
  })
})
