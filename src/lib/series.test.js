import { describe, expect, it } from 'vitest'
import { SERIES, seriesAt } from './series'

const { repMs, reps, doneMs, restMs } = SERIES

describe('seriesAt', () => {
  it('starts on rep 1', () => {
    expect(seriesAt(0)).toMatchObject({ phase: 'reps', rep: 1 })
  })

  it('counts one rep per beat and fills the ring', () => {
    const s = seriesAt(repMs * 7 + 10)
    expect(s).toMatchObject({ phase: 'reps', rep: 8 })
    expect(s.progress).toBeCloseTo(8 / 12, 5)
  })

  it('announces the finished set after rep 12', () => {
    expect(seriesAt(repMs * reps + 10)).toMatchObject({ phase: 'done', rep: 12, progress: 1 })
  })

  it('counts the rest down from 3 and then starts again', () => {
    const restStart = repMs * reps + doneMs
    expect(seriesAt(restStart + 10)).toMatchObject({ phase: 'rest', countdown: 3 })
    expect(seriesAt(restStart + restMs - 10)).toMatchObject({ phase: 'rest', countdown: 1 })
    expect(seriesAt(restStart + restMs + 10)).toMatchObject({ phase: 'reps', rep: 1 })
  })
})
