// Side view of a back squat. `depth` 0 = standing tall, 1 = bottom of the squat.
// Each segment keeps its length; angles grow with depth the way a real squat moves:
// the shins tilt forward, the thighs fold back and the torso leans to keep the bar over the foot.
export const SEGMENTS = { shin: 46, thigh: 46, torso: 62 }

const ANKLE = { x: 92, y: 230 }
const MAX = { shin: 30, thigh: 100, torso: 48 } // degrees at full depth

const rad = (deg) => (deg * Math.PI) / 180
const add = (p, v, k = 1) => ({ x: p.x + v.x * k, y: p.y + v.y * k })

export function squatPose(depth) {
  const d = Math.min(Math.max(depth, 0), 1)
  const shinA = rad(MAX.shin * d)
  const thighA = rad(MAX.thigh * d)
  const torsoA = rad(MAX.torso * d)

  const ankle = ANKLE
  const knee = add(ankle, { x: Math.sin(shinA), y: -Math.cos(shinA) }, SEGMENTS.shin)
  const hip = add(knee, { x: -Math.sin(thighA), y: -Math.cos(thighA) }, SEGMENTS.thigh)
  const up = { x: Math.sin(torsoA), y: -Math.cos(torsoA) } // along the spine
  const back = { x: -Math.cos(torsoA), y: -Math.sin(torsoA) } // towards the athlete's back
  const shoulder = add(hip, up, SEGMENTS.torso)

  // The bar rests on the upper back, just behind the neck.
  const bar = add(add(shoulder, back, 9), up, -1)
  const head = add(add(shoulder, up, 18), back, -4)
  const elbow = add(add(shoulder, up, -12), back, 17)
  const hand = add(add(bar, up, 1), back, -3)

  return { ankle, knee, hip, shoulder, bar, head, elbow, hand }
}
