// Pose of a line-art athlete doing an overhead press.
// `progress` 0 = bar on the shoulders, 1 = arms locked out.
const SEGMENT = 34 // upper arm and forearm length
const BAR_LOW = 78
const BAR_HIGH = 12
const HAND_X = 38 // distance from the centre line to each hand

// Elbow position for a two-segment arm (equal lengths), bending outward and down.
function solveArm(shoulder, hand, outward) {
  const dx = hand.x - shoulder.x
  const dy = hand.y - shoulder.y
  const reach = Math.min(Math.hypot(dx, dy), SEGMENT * 2 - 0.01)
  const ux = dx / Math.hypot(dx, dy)
  const uy = dy / Math.hypot(dx, dy)
  const along = reach / 2
  const side = Math.sqrt(SEGMENT * SEGMENT - along * along)
  // The two perpendiculars; keep the one pointing outward and down.
  let px = -uy
  let py = ux
  if (px * outward + py < 0) {
    px = -px
    py = -py
  }
  const mid = { x: shoulder.x + ux * along, y: shoulder.y + uy * along }
  const elbow = { x: mid.x + px * side, y: mid.y + py * side }
  const handOnReach = { x: shoulder.x + ux * reach, y: shoulder.y + uy * reach }
  return { shoulder, elbow, hand: handOnReach }
}

const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)

export function lifterPose(progress) {
  const p = ease(Math.min(Math.max(progress, 0), 1))
  const barY = BAR_LOW + (BAR_HIGH - BAR_LOW) * p
  const left = solveArm({ x: 100 - 22, y: 76 }, { x: 100 - HAND_X, y: barY }, -1)
  const right = solveArm({ x: 100 + 22, y: 76 }, { x: 100 + HAND_X, y: barY }, 1)
  // The bar sits on the hands; small dip of the head as the bar passes the face.
  return { barY: left.hand.y, left, right, headY: 52 + Math.sin(p * Math.PI) * 2 }
}
