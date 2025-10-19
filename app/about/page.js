import React from 'react'
import Link from 'next/link'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Reveal from '@/components/Reveal'
import Stagger from '@/components/Stagger'
import CaseStudy from '@/components/CaseStudy'

export const metadata = {
  title: 'About Us - VTA Global',
  description: 'Learn about VTA Global, our founders, services and how we help people travel the world.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-12 md:py-20 lg:py-24">
  {/* Hero */}
      <section className="max-w-6xl mx-auto text-center">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
            We help people travel the world
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            VTA Global specializes in visa processing and document attestation — trusted, fast, and customer-first services that make international travel simple.
          </p>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Reveal animation="fade-up" delay={160}>
            <a href="tel:+919911928612" aria-label="Get a quote" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-md transition">
              Get a quote
            </a>
          </Reveal>
          <Reveal animation="fade-up" delay={200}>
            <Link href="/services" className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50 transition">
              Our Services
            </Link>
          </Reveal>
        </div>
      </section>

  {/* Founders */}
      <section className="mt-16 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Meet the Founders</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Experienced people-first leaders passionate about travel and compliance.</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal animation="fade-up" delay={120}>
            <article className="p-6 glass rounded-xl shadow-md border">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">S</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Sumit Sharma</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Co-founder — Head of Operations</p>
                </div>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm">Sumit leads operations and ensures every customer&apos;s visa and attestation experience is fast, accurate and stress-free.</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Previously part of the industry for several years, Sumit and the team saw a clear opportunity to build a company that prioritizes transparency and speed — launching VTA Global in July 2025 to deliver people-first visa solutions.</p>
            </article>
          </Reveal>

          <Reveal animation="fade-up" delay={160}>
            <article className="p-6 glass rounded-xl shadow-md border">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">D</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Dharmendar Sharma</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Co-founder — Customer Experience</p>
                </div>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm">Dharmendar focuses on customer relationships and tailored travel solutions so you get personalized attention from start to finish.</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">After working together at another agency, the founders believed they could create a more reliable and human service. They officially launched VTA Global in July 2025 and have since focused on clarity, speed, and empathy for every traveler.</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Case Study */}
      <CaseStudy />

      {/* Testimonials Carousel */}
      <section className="mt-16 max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">What Our Customers Say</h2>
        </Reveal>
        <Reveal delay={80}>
          <TestimonialsCarousel />
        </Reveal>
      </section>

      {/* Footer CTA */}
      <section className="mt-12 max-w-6xl mx-auto text-center">
        <p className="text-sm text-slate-600 dark:text-slate-300">Trusted by over <strong>1,000+</strong> customers — we make travel simple.</p>
      </section>
    </div>
  )
}