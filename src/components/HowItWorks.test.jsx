import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import HowItWorks from './HowItWorks'

describe('HowItWorks', () => {
  it('opens the first stage by default and another one on click', async () => {
    const user = userEvent.setup()
    render(<HowItWorks />)
    const tabs = screen.getAllByRole('button', { expanded: false })
    expect(screen.getAllByRole('button', { expanded: true })).toHaveLength(1)

    await user.click(tabs[0])
    expect(tabs[0]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('button', { expanded: true })).toHaveLength(1)
  })

  it('shows a photo in the open stage instead of a video', () => {
    const { container } = render(<HowItWorks />)
    expect(container.querySelector('video')).toBeNull()
    expect(container.querySelector('.stage.is-open img')).not.toBeNull()
  })
})
