import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Lifter from './Lifter'
import { lifterPose } from '../lib/lifterPose'

describe('lifterPose', () => {
  it('holds the bar at the shoulders at the start and overhead at the end', () => {
    const start = lifterPose(0)
    const end = lifterPose(1)
    expect(end.barY).toBeLessThan(start.barY - 40)
  })

  it('keeps both arm segments the same length in every pose', () => {
    for (const p of [0, 0.25, 0.5, 0.75, 1]) {
      const { left } = lifterPose(p)
      const upper = Math.hypot(left.elbow.x - left.shoulder.x, left.elbow.y - left.shoulder.y)
      const fore = Math.hypot(left.hand.x - left.elbow.x, left.hand.y - left.elbow.y)
      expect(upper).toBeCloseTo(fore, 1)
    }
  })
})

describe('Lifter', () => {
  it('draws the bar at the height of the given progress', () => {
    const { container } = render(<Lifter progress={1} />)
    const bar = container.querySelector('.lifter__bar')
    expect(Number(bar.getAttribute('y1'))).toBeCloseTo(lifterPose(1).barY, 1)
  })
})
