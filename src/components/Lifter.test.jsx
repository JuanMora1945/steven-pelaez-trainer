import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Lifter from './Lifter'
import { SEGMENTS, squatPose } from '../lib/squatPose'

const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y)

describe('squatPose', () => {
  it('stands tall at depth 0 and drops the hips at depth 1', () => {
    const top = squatPose(0)
    const bottom = squatPose(1)
    expect(bottom.hip.y).toBeGreaterThan(top.hip.y + 40)
    expect(bottom.bar.y).toBeGreaterThan(top.bar.y + 30)
  })

  it('keeps shin, thigh and torso lengths in every pose', () => {
    for (const d of [0, 0.3, 0.6, 1]) {
      const p = squatPose(d)
      expect(dist(p.ankle, p.knee)).toBeCloseTo(SEGMENTS.shin, 1)
      expect(dist(p.knee, p.hip)).toBeCloseTo(SEGMENTS.thigh, 1)
      expect(dist(p.hip, p.shoulder)).toBeCloseTo(SEGMENTS.torso, 1)
    }
  })

  it('keeps the bar over the foot so the squat looks balanced', () => {
    for (const d of [0, 0.5, 1]) {
      const { bar, ankle } = squatPose(d)
      expect(bar.x).toBeGreaterThan(ankle.x - 12)
      expect(bar.x).toBeLessThan(ankle.x + 30)
    }
  })
})

describe('Lifter', () => {
  it('draws the barbell plate at the bar position for the given depth', () => {
    const { container } = render(<Lifter depth={1} />)
    const plate = container.querySelector('.lifter__plate')
    expect(Number(plate.getAttribute('cy'))).toBeCloseTo(squatPose(1).bar.y, 1)
  })
})
