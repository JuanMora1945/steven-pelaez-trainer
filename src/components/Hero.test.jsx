import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('shows a clear h1, Steven\'s photo and the lifting figure, without the rep ring or video', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/entrenador personal/i)
    expect(screen.getByRole('img', { name: /steven pelaez/i })).toHaveAttribute('src', '/img/steven-mirror.jpg')
    expect(container.querySelector('.lifter')).not.toBeNull()
    expect(container.querySelector('.counter')).toBeNull()
    expect(container.querySelector('video')).toBeNull()
  })
})
