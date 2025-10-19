"use client"
import React, { useRef, useEffect, useState } from 'react'
import Reveal from '@/components/Reveal'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { FileCheck, Globe, FileText, MapPin, Building } from 'lucide-react'

function FallbackIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" className="text-blue-400" />
    </svg>
  )
}

const services = [
  {
    id: 'mea-attestation',
    title: 'MEA Attestation',
    icon: FileCheck,
    short: 'Official authentication by the Ministry of External Affairs after state-level verification.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          MEA Attestation is performed by the Ministry of External Affairs once documents have been authenticated by the relevant state authority.
          This confirms that the document is genuine and that state-level procedures have been followed.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          When needed: used for official purposes abroad — immigration, employment, professional licensing and education recognition.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we pre-check your documents for the correct state authentication, prepare submissions and complete the MEA step on your behalf.
        </p>
      </>
    ),
  },
  {
    id: 'apostille',
    title: 'Apostille (MEA)',
    icon: Globe,
    short: 'Apostille for Hague Convention countries — one-step international recognition.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          An Apostille is a standardized certification accepted in Hague Convention member countries. Personal and educational documents
          (birth/marriage certificates, affidavits, degrees) can be apostilled so they are recognized by multiple countries without
          separate embassy legalization.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Why it matters: apostille saves time and complexity — once a document is apostilled it is broadly accepted in member countries.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we check eligibility, arrange state pre-authentication where required, and process the MEA apostille swiftly.
        </p>
      </>
    ),
  },
  {
    id: 'normal-attestation',
    title: 'Normal Attestation',
    icon: FileText,
    short: 'For countries that do not accept apostilles — a country-specific attestation flow.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Normal attestation is required for countries outside the Hague Convention. The process typically includes state authentication,
          MEA authentication and may require additional embassy legalization depending on the country.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we map the exact authentication chain for the destination country, gather supporting documents and submit on your behalf.
        </p>
      </>
    ),
  },
  {
    id: 'embassy-legalization',
    title: 'Embassy Legalization',
    icon: MapPin,
    short: 'Official embassy/consulate stamps and procedures to legalize documents for specific countries.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Many embassies require additional legalization steps after MEA authentication or apostille. Each embassy has its own
          requirements and submission procedures.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we manage embassy submissions, ensure documents meet embassy rules and follow up until legalization is complete.
        </p>
      </>
    ),
  },
  {
    id: 'translation',
    title: 'Foreign Language Translation',
    icon: undefined,
    short: 'Certified translations to meet embassy or foreign authority requirements.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          We provide certified translation services for major world languages and Indian languages. Some authorities insist on
          translations performed by recognized translators before accepting legalization or visa applications.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we arrange certified translators and include translations in the attestation/legalization workflow to avoid delays.
        </p>
      </>
    ),
  },
  {
    id: 'chamber',
    title: 'Chamber of Commerce (Commercial Documents)',
    icon: Building,
    short: 'Chamber certification for invoices, certificates of origin and company documents.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Commercial documents often require chamber certification before MEA or embassy steps. This is common for trade, shipping
          and corporate paperwork.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we liaise with the appropriate chamber, prepare commercial paperwork and obtain the required certifications.
        </p>
      </>
    ),
  },
  {
    id: 'visa-travel',
    title: 'Visa Processing • Air Tickets • Travel Insurance',
    icon: undefined,
    short: 'End-to-end visa assistance plus ticketing and insurance to complete your travel plans.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          We assist with visa applications for all countries: document preparation, submission, follow-up and collection. We also provide
          air ticketing support and travel insurance options to protect you while you travel.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we ensure your visa paperwork is accurate, recommend the right insurance cover and help book travel when required.
        </p>
      </>
    ),
  },
]

export default function ServicesPage() {
  // Keep hero intentionally glassy/blurred at all times
  const imgRef = useRef(null)
  const [openValue, setOpenValue] = useState(undefined)

  useEffect(() => {
    function onScroll() {
      if (!imgRef.current) return
      const scrolled = window.scrollY
      // subtle parallax: move image slower than scroll; keep scale fixed for glassy effect
      imgRef.current.style.transform = `translateY(${scrolled * 0.12}px) scale(1)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Open accordion item and scroll to it when URL hash changes or on initial load
  useEffect(() => {
    function handleHash() {
      const hash = (window.location.hash || '').replace('#', '')
      if (!hash) return
      // set accordion open value to the id
      setOpenValue(hash)
      // scroll the accordion item into view after small delay to ensure layout
      const el = document.getElementById(hash)
      if (el) {
        // use timeout to allow accordion open animation to start
        setTimeout(() => {
          // focus the trigger inside the accordion item for keyboard users
          const trigger = el.querySelector('[data-slot="accordion-trigger"] button, [data-slot="accordion-trigger"]')
          if (trigger && typeof trigger.focus === 'function') {
            trigger.focus({ preventScroll: true })
          }
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 120)
      }
    }

    // initial check
    if (typeof window !== 'undefined') handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero with MEA office background */}
      <section className="relative h-72 md:h-96 lg:h-[520px] overflow-hidden">
        {/* Use background-image div instead of <img> so we can keep the parallax transform on the element
            while avoiding the Next.js lint warning about plain <img> usage in the app router. */}
        <div
          ref={imgRef}
          aria-hidden
          className="hero-img absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-700 hero-loading"
          style={{ backgroundImage: "url('/south_block.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">Our Services</h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-white/90">Clear, fast and reliable document and travel services — book by phone or email. Expert handling of MEA attestation, apostille, embassy legalization and more.</p>
            </Reveal>
            <div className="mt-6 flex items-center justify-center gap-4">
              {/* Hero CTA intentionally removed to declutter */}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Reveal>
          <section className="glass p-6 rounded-xl shadow-md border mb-8">
            <h2 className="text-2xl font-semibold">Minister of External Affairs — Guidance</h2>
            <p className="mt-3 text-base text-slate-700 dark:text-slate-300">
              The Ministry of External Affairs requires state-level authentication before MEA attestation or apostille. Each state has
              designated authorities for different document types (e.g., Home/General Administration for personal certificates, Education
              Department for educational certificates, and Chambers of Commerce for commercial documents).
            </p>
            <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
              If you are unsure which authority applies, call or email us — our team will guide you through the exact steps for your document.
            </p>
          </section>
        </Reveal>

        {/* Accordion-based services with larger typography */}
        <div className="grid grid-cols-1 gap-6">
          <Accordion type="single" collapsible value={openValue} onValueChange={(v) => setOpenValue(v)} className="space-y-4">
            {services.map((s, idx) => {
              const Icon = s.icon || FallbackIcon
              return (
                <Reveal key={s.id} animation="fade-up" delay={80 + idx * 60}>
                  <AccordionItem value={s.id} id={s.id} className="glass p-4 rounded-2xl shadow-lg border hover:shadow-xl transform hover:-translate-y-1 transition">
                    <AccordionTrigger className="flex items-start gap-4">
                      <div className="flex-none w-14 h-14 rounded-lg bg-gradient-to-br from-blue-50 to-white flex items-center justify-center shadow-sm">
                        <Icon className="service-icon w-7 h-7 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-semibold text-slate-900 dark:text-slate-100">{s.title}</div>
                        <div className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">{s.short}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mt-4 text-base text-slate-700 dark:text-slate-300">{s.details}</div>
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              )
            })}
          </Accordion>
        </div>

        <Reveal delay={80}>
          <section className="mt-8 glass p-6 rounded-xl shadow-md border">
            <h3 className="text-lg font-semibold">Booking & Pricing</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
               For further assistance and quotation please contact us at
              <a className="text-blue-600 hover:underline mx-1" href="mailto:info@vtaglobal.in">info@vtaglobal.in</a> or call
              <a className="text-blue-600 hover:underline mx-1" href="tel:+919911928612">+91 99119 28612</a> to schedule an appointment.
            </p>
          </section>
        </Reveal>

        <Reveal delay={120}>
          <footer className="mt-10 text-center text-sm text-slate-600 dark:text-slate-300">
            <p>Need help preparing documents? Call us and a representative will walk you through the exact requirements.</p>
            <div className="mt-3">
              <a href="tel:+919911928612" aria-label="Get a quote" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg shadow-lg">Get a quote</a>
            </div>
          </footer>
        </Reveal>
      </div>
    </div>
  )
}
