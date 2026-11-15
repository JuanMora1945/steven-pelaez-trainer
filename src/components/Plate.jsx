// An Olympic iron weight plate: rim, three hand grips, embossed text and a steel sleeve.
export default function Plate({ id = 'plate', className = '' }) {
  const grip = 'M -34 -150 a 34 34 0 0 1 68 0 v 14 a 34 34 0 0 1 -68 0 z'
  return (
    <svg className={`plate ${className}`} viewBox="-250 -250 500 500" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`${id}-face`} cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#3a3b3f" />
          <stop offset="0.55" stopColor="#1e1f22" />
          <stop offset="1" stopColor="#0d0d0f" />
        </radialGradient>
        <radialGradient id={`${id}-steel`} cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#f4f5f7" />
          <stop offset="0.5" stopColor="#a9adb3" />
          <stop offset="1" stopColor="#5d6168" />
        </radialGradient>
        <path id={`${id}-top`} d="M -118 0 a 118 118 0 0 1 236 0" />
        <path id={`${id}-bottom`} d="M -136 0 a 136 136 0 0 0 272 0" />
      </defs>

      {/* rim and face */}
      <circle r="248" fill="#0b0b0c" />
      <circle r="240" fill={`url(#${id}-face)`} />
      <circle r="226" fill="none" stroke="#000" strokeOpacity="0.55" strokeWidth="6" />
      <circle r="214" fill="none" stroke="#ffd400" strokeWidth="10" />

      {/* three hand grips cut through the plate */}
      {[0, 120, 240].map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d={grip} fill="#050506" />
          <path d={grip} fill="none" stroke="#45474c" strokeWidth="3" />
        </g>
      ))}

      {/* raised inner ring with embossed text */}
      <circle r="96" fill="#161618" stroke="#2c2d31" strokeWidth="4" />
      <text className="plate__text plate__text--big">
        <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">20 KG</textPath>
      </text>
      <text className="plate__text">
        <textPath href={`#${id}-bottom`} startOffset="50%" textAnchor="middle">STEVEN PELAEZ</textPath>
      </text>

      {/* steel sleeve */}
      <circle r="62" fill={`url(#${id}-steel)`} />
      <circle r="62" fill="none" stroke="#2a2b2e" strokeWidth="3" />
      <circle r="27" fill="#0b0b0c" />
    </svg>
  )
}
