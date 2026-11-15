import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Clients from './Clients'
import { clientClips } from '../data/content'

describe('Clients', () => {
  it('shows every client clip as a muted, inline video with a poster', () => {
    const { container } = render(<Clients />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/clientas/i)
    const videos = container.querySelectorAll('video')
    expect(videos).toHaveLength(clientClips.length)
    for (const v of videos) {
      expect(v.muted).toBe(true)
      expect(v).toHaveAttribute('playsinline')
      expect(v.getAttribute('poster')).toMatch(/\.jpg$/)
      expect(v.getAttribute('preload')).toBe('none')
    }
  })
})
