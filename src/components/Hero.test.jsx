import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Hero from './Hero'
import { heroSlides } from '../data/content'

describe('Hero image changer', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('shows a photo of Steven training in each of the three panels', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/entrenador personal/i)
    const active = container.querySelectorAll('.slides__panel .is-active img')
    expect(active).toHaveLength(3)
    const srcs = [...active].map((img) => img.getAttribute('src'))
    expect(new Set(srcs).size).toBe(3)
  })

  it('changes the photos on its own after a few seconds', () => {
    const { container } = render(<Hero />)
    const first = container.querySelector('.slides__panel .is-active img').getAttribute('src')
    act(() => vi.advanceTimersByTime(heroSlides.interval + 50))
    const next = container.querySelector('.slides__panel .is-active img').getAttribute('src')
    expect(next).not.toBe(first)
  })
})
