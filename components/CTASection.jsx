"use client";
import React from 'react'
import Reveal from '@/components/Reveal'

export default function CTASection(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Reveal>
        <div className="glass p-5 sm:p-8 rounded-lg sm:rounded-xl shadow-md border text-center">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">Ready to get started?</h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">Call us or send an email and our team will guide you step-by-step.</p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="tel:+919911928612" className="w-full sm:w-auto text-sm sm:text-base inline-block bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors">Call +91 99119 28612</a>
            <a href="mailto:info@vtaglobal.in" className="w-full sm:w-auto text-sm sm:text-base inline-block border border-slate-300 hover:border-slate-400 active:bg-slate-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors">Email Us</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
