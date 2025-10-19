"use client";
import React from 'react'
import Reveal from '@/components/Reveal'
import TestimonialsCarousel from './TestimonialsCarousel'

export default function TestimonialsPreview(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Reveal>
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 text-center">What customers say</h3>
      </Reveal>
      <div className="mt-4 sm:mt-6">
        <Reveal delay={80}>
          <TestimonialsCarousel />
        </Reveal>
      </div>
    </section>
  )
}
