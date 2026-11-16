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

  it('features the three photos of Steven coaching', () => {
    const { container } = render(<Clients />)
    const srcs = [...container.querySelectorAll('.bento img')].map((i) => i.getAttribute('src'))
    for (const src of ['/img/clients/kickback.jpg', '/img/clients/hip-thrust.jpg', '/img/clients/cable.jpg']) {
      expect(srcs).toContain(src)
    }
  })
})
