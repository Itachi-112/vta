"use client";
import React from 'react'
import Reveal from '@/components/Reveal'

const features = [
  { title: 'Fast Attestation', desc: 'State & MEA attestation handled end-to-end.' },
  { title: 'Apostille & Legalization', desc: 'Apostille and embassy legalization guidance.' },
  { title: 'Visa Assistance', desc: 'Complete visa processing for most destinations.' },
  { title: 'Travel Planning', desc: 'Flight & insurance options to complete your journey.' },
]

export default function HomeFeatures(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Reveal>
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 text-center">What we do</h3>
      </Reveal>

      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={80 + i*80}>
            <div className="p-4 sm:p-6 glass rounded-lg sm:rounded-xl shadow-sm border hover:shadow-lg transition-all hover:-translate-y-0.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded sm:rounded-md bg-blue-50 flex items-center justify-center text-blue-600 font-semibold text-sm sm:text-base">{f.title.charAt(0)}</div>
              <h4 className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100">{f.title}</h4>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
