// Timing of the hero's demo set: 12 reps, a "set complete" beat, then a 3-second rest.
export const SERIES = {
  reps: 12,
  repMs: 1100,
  doneMs: 2000,
  restMs: 3000,
}

const CYCLE = SERIES.reps * SERIES.repMs + SERIES.doneMs + SERIES.restMs

// Pure function: what the counter shows `ms` milliseconds after the set started.
export function seriesAt(ms) {
  const { reps, repMs, doneMs, restMs } = SERIES
  const t = ((ms % CYCLE) + CYCLE) % CYCLE
  const repsEnd = reps * repMs

  if (t < repsEnd) {
    const rep = Math.floor(t / repMs) + 1
    return { phase: 'reps', rep, progress: rep / reps }
  }
  if (t < repsEnd + doneMs) {
    return { phase: 'done', rep: reps, progress: 1 }
  }
  const left = repsEnd + doneMs + restMs - t
  return { phase: 'rest', rep: reps, progress: 1, countdown: Math.min(3, Math.ceil(left / 1000)) }
}
