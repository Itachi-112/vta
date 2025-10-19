"use client";
import React from 'react'
import Reveal from '@/components/Reveal'

export default function CaseStudy(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Reveal>
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 text-center">Case Study — Rapid Visa Turnaround</h3>
      </Reveal>

      <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <Reveal delay={80}>
          <div className="glass p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md border h-full flex flex-col justify-between">
            <div>
              <h4 className="text-base sm:text-lg font-semibold">Challenge</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">A corporate client needed 200 staff visas processed urgently for a large overseas project with tight deadlines and mixed document types.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md border h-full flex flex-col justify-between">
            <div>
              <h4 className="text-base sm:text-lg font-semibold">Outcome</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">We coordinated state authentication, MEA attestation and embassy legalisation across multiple regions, achieving a 95% on-time delivery and zero compliance rejections.</p>
              <ul className="mt-2 sm:mt-3 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-300 space-y-0.5 sm:space-y-1">
                <li>Turnaround: average 6 days</li>
                <li>Customer satisfaction: 98%</li>
                <li>Zero compliance failures</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
