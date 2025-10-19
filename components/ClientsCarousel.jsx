"use client";
import React, { useEffect, useRef } from 'react'

const clients = ['/vta-logo4.png', '/vercel.svg', '/globe.svg', '/file.svg']

export default function ClientsCarousel(){
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let pos = 0
    const step = 1
    let raf = null
    function loop(){
      pos = (pos + step) % el.scrollWidth
      el.scrollLeft = pos
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="overflow-hidden">
      <div ref={ref} className="flex gap-4 sm:gap-8 items-center whitespace-nowrap py-3 sm:py-4 px-2">
        {clients.concat(clients).map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt={`client-${i}`} className="h-8 sm:h-10 opacity-90 transition-opacity hover:opacity-100" />
        ))}
      </div>
    </div>
  )
}
