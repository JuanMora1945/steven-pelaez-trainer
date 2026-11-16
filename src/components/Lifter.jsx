import { squatPose } from '../lib/squatPose'

// A sports-pictogram athlete doing a back squat, seen from the side.
const pt = (p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`
const lerp = (a, b, t) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t })

export default function Lifter({ depth = 0, className = '' }) {
  const { ankle, knee, hip, shoulder, bar, head, elbow, hand } = squatPose(depth)
  const shortsEnd = lerp(hip, knee, 0.45)

  return (
    <svg className={`lifter ${className}`} viewBox="0 0 200 250" aria-hidden="true" focusable="false">
      <ellipse className="lifter__shadow" cx="100" cy="236" rx="56" ry="5" />
      {/* the barbell seen end-on: one plate behind the athlete's neck, drawn first */}
      <circle className="lifter__plate" cx={bar.x} cy={bar.y} r="21" />
      <circle className="lifter__plate-ring" cx={bar.x} cy={bar.y} r="10" />
      <circle className="lifter__sleeve" cx={bar.x} cy={bar.y} r="4.5" />
      <path className="lifter__foot" d={`M${ankle.x - 5} 232 H${ankle.x + 20}`} />
      <path className="lifter__limb lifter__limb--leg" d={`M${pt(ankle)} L${pt(knee)} L${pt(hip)}`} />
      <path className="lifter__shorts" d={`M${pt(hip)} L${pt(shortsEnd)}`} />
      <path className="lifter__limb lifter__limb--torso" d={`M${pt(hip)} L${pt(shoulder)}`} />
      <circle className="lifter__skin" cx={head.x} cy={head.y} r="12" />
      <path className="lifter__limb lifter__limb--arm" d={`M${pt(shoulder)} L${pt(elbow)} L${pt(hand)}`} />
    </svg>
  )
}
