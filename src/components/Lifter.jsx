import { lifterPose } from '../lib/lifterPose'

// A line-art athlete doing an overhead press, drawn from lifterPose().
const line = (a, b) => `M${a.x.toFixed(1)} ${a.y.toFixed(1)}L${b.x.toFixed(1)} ${b.y.toFixed(1)}`

export default function Lifter({ progress = 0, className = '' }) {
  const { barY, left, right, headY } = lifterPose(progress)
  const arm = (a) => `${line(a.shoulder, a.elbow)}${line(a.elbow, a.hand)}`

  return (
    <svg className={`lifter ${className}`} viewBox="0 0 200 250" aria-hidden="true" focusable="false">
      <ellipse className="lifter__shadow" cx="100" cy="238" rx="58" ry="6" />
      {/* legs: thighs and calves as thick rounded strokes */}
      <path className="lifter__limb lifter__limb--leg" d="M89 146 L84 190 L83 228 M111 146 L116 190 L117 228" />
      <path className="lifter__foot" d="M74 232 H92 M108 232 H126" />
      {/* shorts */}
      <path className="lifter__shorts" d="M78 134 H122 L126 168 H104 L100 152 L96 168 H74 Z" />
      {/* V-shaped torso */}
      <path className="lifter__torso" d="M74 72 Q100 64 126 72 L118 136 H82 Z" />
      {/* neck and head */}
      <rect className="lifter__torso" x="94" y="58" width="12" height="14" rx="4" />
      <circle className="lifter__torso" cx="100" cy={headY} r="12.5" />
      {/* arms */}
      <path className="lifter__limb lifter__limb--arm" d={`${arm(left)} ${arm(right)}`} />
      {/* barbell, in front of the face as in a real press */}
      <line className="lifter__bar" x1="20" y1={barY} x2="180" y2={barY} />
      <rect className="lifter__plate" x="20" y={barY - 20} width="11" height="40" rx="2" />
      <rect className="lifter__plate lifter__plate--small" x="33" y={barY - 14} width="6" height="28" rx="2" />
      <rect className="lifter__plate" x="169" y={barY - 20} width="11" height="40" rx="2" />
      <rect className="lifter__plate lifter__plate--small" x="161" y={barY - 14} width="6" height="28" rx="2" />
    </svg>
  )
}
