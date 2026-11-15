// A weight plate drawn as one SVG: rim, raised ring, label on a circular path, hub.
export default function Plate({ id, label, className = '' }) {
  return (
    <svg className={`plate ${className}`} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <defs>
        <path id={`${id}-ring`} d="M200,200 m-128,0 a128,128 0 1,1 256,0 a128,128 0 1,1 -256,0" />
      </defs>
      <circle cx="200" cy="200" r="198" className="plate__face" />
      <circle cx="200" cy="200" r="176" className="plate__groove" />
      <circle cx="200" cy="200" r="104" className="plate__groove" />
      <text className="plate__label">
        <textPath href={`#${id}-ring`} startOffset="0">
          {label}
        </textPath>
      </text>
      <circle cx="200" cy="200" r="58" className="plate__hub" />
      <circle cx="200" cy="200" r="26" className="plate__hole" />
    </svg>
  )
}
