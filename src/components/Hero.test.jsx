import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Hero from './Hero'
import { SERIES } from '../lib/series'

describe('Hero: rep counter', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('has a clear h1 and a muted inline video of Steven', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/entrenador personal/i)
    const video = container.querySelector('video')
    expect(video.muted).toBe(true)
    expect(video).toHaveAttribute('playsinline')
  })

  it('counts reps up to 12 and then shows the finished set', () => {
    const { container } = render(<Hero />)
    const count = () => container.querySelector('.counter__number').textContent
    expect(count()).toBe('1')
    act(() => vi.advanceTimersByTime(SERIES.repMs * 7 + 50))
    expect(count()).toBe('8')
    act(() => vi.advanceTimersByTime(SERIES.repMs * 5))
    expect(container.querySelector('.counter').textContent).toMatch(/serie completa/i)
  })

  it('restarts the set when the visitor taps the ring', () => {
    const { container } = render(<Hero />)
    act(() => vi.advanceTimersByTime(SERIES.repMs * 5 + 50))
    fireEvent.click(screen.getByRole('button', { name: /reiniciar la serie/i }))
    act(() => vi.advanceTimersByTime(50))
    expect(container.querySelector('.counter__number').textContent).toBe('1')
  })
})
