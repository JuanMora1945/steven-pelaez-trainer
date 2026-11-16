import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Clients from './Clients'
import { clientPhotos } from '../data/content'

describe('Clients', () => {
  it('is titled "Clientes en acción" and shows every photo in a bento grid, without videos', () => {
    const { container } = render(<Clients />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Clientes en acción')
    expect(container.querySelector('video')).toBeNull()
    expect(container.querySelector('.bento')).not.toBeNull()
    const imgs = container.querySelectorAll('.bento img')
    expect(imgs).toHaveLength(clientPhotos.length)
    for (const img of imgs) expect(img.getAttribute('alt')).not.toBe('')
  })

  it('features Steven coaching and drops the blurry or rejected photos', () => {
    const { container } = render(<Clients />)
    const srcs = [...container.querySelectorAll('.bento img')].map((i) => i.getAttribute('src'))
    expect(srcs[0]).toBe('/img/clients/hip-thrust.webp')
    expect(srcs).toContain('/img/clients/cable.webp')
    for (const gone of ['kickback', 'leg-machine', 'pullup']) {
      expect(srcs.some((s) => s.includes(gone))).toBe(false)
    }
  })

  it('shows the new Romanian deadlift in place of the squat and keeps the red-shorts deadlift', () => {
    const { container } = render(<Clients />)
    const srcs = [...container.querySelectorAll('.bento img')].map((i) => i.getAttribute('src'))
    expect(srcs).toContain('/img/clients/rdl.webp')
    expect(srcs).toContain('/img/clients/red-deadlift.webp')
    expect(srcs).not.toContain('/img/clients/squat.webp')
    expect(srcs).not.toContain('/img/clients/deadlift.webp')
  })
})
