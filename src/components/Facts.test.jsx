import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Facts } from './Sections'

describe('Facts', () => {
  it('uses plain words instead of unexplained abbreviations', () => {
    render(<Facts />)
    expect(screen.queryByText('ENADE')).toBeNull()
    expect(screen.getByText(/escuela nacional del deporte/i)).toBeInTheDocument()
  })
})
