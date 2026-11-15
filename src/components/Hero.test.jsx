import { act, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

describe('Hero: video inside the letters', () => {
  it('has a clear h1, a muted inline video of Steven and no image changer', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/entrenador personal/i)
    const video = container.querySelector('video')
    expect(video.muted).toBe(true)
    expect(video).toHaveAttribute('playsinline')
    expect(video.getAttribute('poster')).toMatch(/hero-squat\.jpg$/)
    expect(container.querySelector('.slides')).toBeNull()
  })

  it('hides the giant word from screen readers', () => {
    const { container } = render(<Hero />)
    const word = container.querySelector('.reveal-word')
    expect(word).toHaveTextContent('STEVEN')
    expect(word.closest('[aria-hidden="true"]')).not.toBeNull()
  })

  it('opens the letters as the visitor scrolls', () => {
    const { container } = render(<Hero />)
    const hero = container.querySelector('.hero')
    hero.getBoundingClientRect = () => ({ top: -400, height: 1800, bottom: 1400, left: 0, right: 0, width: 0 })
    Object.defineProperty(window, 'innerHeight', { value: 900, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        expect(Number(hero.style.getPropertyValue('--p'))).toBeCloseTo(400 / 900, 2)
        resolve()
      })
    })
  })
})
