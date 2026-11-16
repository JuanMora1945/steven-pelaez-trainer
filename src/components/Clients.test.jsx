import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Clients from './Clients'
import { clientPhotos } from '../data/content'

describe('Clients', () => {
  it('is titled "Clientes en acción" and shows photos, not videos', () => {
    const { container } = render(<Clients />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Clientes en acción')
    expect(container.querySelector('video')).toBeNull()
    const imgs = container.querySelectorAll('img')
    expect(imgs).toHaveLength(clientPhotos.length)
    for (const img of imgs) expect(img.getAttribute('alt')).not.toBe('')
  })
})
