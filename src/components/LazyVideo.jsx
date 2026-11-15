import { useEffect, useRef } from 'react'

// A muted looping clip that only downloads and plays while it is on screen.
// With reduced motion it stays on its poster frame.
export default function LazyVideo({ src, poster, label, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return undefined
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Promise.resolve(video.play?.()).catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  )
}
