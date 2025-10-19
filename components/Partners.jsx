"use client";
import React from 'react'
import Reveal from '@/components/Reveal'

const partners = [
  { name: 'MEA', img: '/vta-logo4.png' },
  { name: 'Chamber', img: '/vercel.svg' },
  { name: 'Airlines', img: '/globe.svg' },
  { name: 'Agents', img: '/file.svg' },
]

export default function Partners(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <Reveal>
        <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 text-center">Partners & Networks</h4>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
        {partners.map((p, i) => (
          <Reveal key={p.name} delay={80 + i*60}>
            <div className="p-4 flex items-center justify-center bg-white/30 dark:bg-white/5 rounded">
              {p.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.img} alt={p.name} className="max-h-8 object-contain" />
              ) : (
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{p.name}</span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
