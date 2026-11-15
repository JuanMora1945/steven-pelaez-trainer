import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Faq from './Faq'
import { faqs } from '../data/content'

describe('Faq', () => {
  it('shows every question and its answer without toggles', () => {
    render(<Faq />)
    for (const item of faqs) {
      expect(screen.getByRole('heading', { name: item.q })).toBeInTheDocument()
      expect(screen.getByText(item.a)).toBeVisible()
    }
  })
})
