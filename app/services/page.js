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
    title: 'Visa Processing',
    icon: undefined,
    short: 'Expert visa processing and support for all destinations.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          We assist with visa applications for all countries: document preparation, submission, follow-up and collection.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we ensure your visa paperwork is accurate and follow up until the visa is ready to collect.
        </p>
      </>
    ),
  },
  {
    id: 'air-tickets',
    title: 'Air Tickets',
    icon: undefined,
    short: 'Flight booking and itinerary planning for all destinations.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          We offer flight search, booking and itinerary management to match your travel plans and budget.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we compare options, secure tickets and provide confirmations and post-booking support.
        </p>
      </>
    ),
  },
  {
    id: 'travel-insurance',
    title: 'Travel Insurance',
    icon: undefined,
    short: 'Travel insurance options to protect you while abroad.',
    details: (
      <>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          We arrange travel insurance policies covering medical emergencies, trip cancellation and baggage protection.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          How we help: we recommend appropriate coverage and handle policy purchase and document delivery.
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

  // selection state for the stacked services UI (left column stack -> right content)
  const [selectedService, setSelectedService] = useState(services[0].id)
  const [isFading, setIsFading] = useState(false)
  const stackRef = useRef(null)
  const contentWrapperRef = useRef(null)

  function handleSelectService(id) {
    if (id === selectedService) return
    // fade out current content, swap, then fade in
    setIsFading(true)
    window.setTimeout(() => {
      setSelectedService(id)
      setIsFading(false)
    }, 220)
  }

  // Match the right content wrapper height to the combined height of the left stack on desktop
  useEffect(() => {
    if (typeof window === 'undefined') return
    function applyHeights() {
      const stack = stackRef.current
      const wrapper = contentWrapperRef.current
      if (!stack || !wrapper) return
      // only apply on desktop widths
      if (window.innerWidth < 768) {
        wrapper.style.height = ''
        return
      }
      const rect = stack.getBoundingClientRect()
      // set wrapper height to match stack height (include margins via offsetHeight)
      wrapper.style.height = `${stack.offsetHeight}px`
    }
    // apply initially and on resize
    applyHeights()
    window.addEventListener('resize', applyHeights)
    // also re-apply when selectedService changes in case heights shift
    return () => window.removeEventListener('resize', applyHeights)
  }, [selectedService])

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero with parallax and overlay effects */}
      <section className="relative h-[85vh] overflow-hidden">
        <div
          ref={imgRef}
          aria-hidden
          className="hero-img absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-700 hero-loading"
          style={{ backgroundImage: "url('/south_block.jpg')" }}
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
        
        {/* Animated patterns overlay */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <Reveal animation="fade-up">
              <span className="inline-block text-blue-400 font-semibold text-lg mb-4 tracking-wider">WELCOME TO VTA GLOBAL</span>
            </Reveal>
            
            <Reveal animation="fade-up" delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Our Services
              </h1>
            </Reveal>
            
            <Reveal animation="fade-up" delay={200}>
              <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-blue-50 leading-relaxed">
                Clear, fast and reliable document and travel services — book by phone or email. 
                Expert handling of MEA attestation, apostille, embassy legalization and more.
              </p>
            </Reveal>
            
            <Reveal animation="fade-up" delay={300}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <a 
                  href="#mea-attestation" 
                  className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Services
                </a>
                <a 
                  href="tel:+919911928612" 
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
                >
                  Contact Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        
        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Bento Box Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Document Authentication - Large Card */}
          <Reveal animation="fade-up" className="md:col-span-6">
            <div className="glass h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900/20">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Document Authentication</h3>
              <p className="text-base text-blue-900 dark:text-blue-100 mb-6">Expert handling of MEA attestation, apostille, and embassy legalization for all document types.</p>
              <ul className="mt-auto space-y-4 text-blue-800 dark:text-blue-200">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                  MEA Attestation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                  Apostille Services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                  Embassy Legalization
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Global Coverage - Equal Size */}
          <Reveal animation="fade-up" delay={100} className="md:col-span-6">
            <div className="glass h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900/20">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Global Coverage</h3>
              <p className="text-base text-blue-900 dark:text-blue-100">Services for Hague Convention countries and non-member states worldwide.</p>
              <div className="mt-auto pt-6">
                <span className="inline-flex items-center text-blue-600 dark:text-blue-400">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Travel Solutions */}
          <Reveal animation="fade-up" delay={150} className="md:col-span-4">
            <div className="glass h-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400">Travel Solutions</h3>
              <p className="text-sm text-blue-900 dark:text-blue-100">Complete travel booking services including flights, hotels, and transfers.</p>
            </div>
          </Reveal>

          {/* Visa Assistance */}
          <Reveal animation="fade-up" delay={200} className="md:col-span-4">
            <div className="glass h-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900/20 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 shadow-lg">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400">Visa Assistance</h3>
              <p className="text-sm text-blue-900 dark:text-blue-100">Expert visa processing and support for all destinations.</p>
            </div>
          </Reveal>

          {/* Support Channel */}
          <Reveal animation="fade-up" delay={250} className="md:col-span-4">
            <div className="glass h-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-400">24/7 Support</h3>
              <p className="text-sm text-blue-900 dark:text-blue-100">Always here to assist you with dedicated support.</p>
            </div>
          </Reveal>
        </div>        <Reveal>
          <section className="glass p-8 rounded-2xl shadow-lg border mb-12 transform transition-all duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Minister of External Affairs — Guidance</h2>
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                The Ministry of External Affairs requires state-level authentication before MEA attestation or apostille. Each state has
                designated authorities for different document types (e.g., Home/General Administration for personal certificates, Education
                Department for educational certificates, and Chambers of Commerce for commercial documents).
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                If you are unsure which authority applies, call or email us — our team will guide you through the exact steps for your document.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Stacked services (left column of square boxes) with right-side detail panel */}
        <Reveal>
          <div className="services-layout glass p-4 rounded-2xl">
            {/* Left: stacked square boxes */}
            <div className="service-stack md:pr-4">
              {services.map((s, idx) => {
                const active = selectedService === s.id
                return (
                  <button
                    key={s.id}
                    id={`tab-${s.id}`}
                    aria-controls={`panel-${s.id}`}
                    aria-pressed={active}
                    onClick={() => handleSelectService(s.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleSelectService(s.id)
                      }
                    }}
                    className={`service-box ${active ? 'service-box--active scale-on-hover' : 'scale-on-hover'}`}
                    title={s.title}
                  >
                    <span className="service-box-label">{s.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Right: content panel */}
            <div className="flex-1">
              <div
                id={`panel-${selectedService}`}
                role="region"
                aria-labelledby={`tab-${selectedService}`}
                className={`service-content glass p-6 rounded-2xl shadow-lg ${isFading ? 'fade-out' : 'fade-in'}`}
              >
                {/* content for the currently selected service */}
                {(() => {
                  const cur = services.find((x) => x.id === selectedService) || services[0]
                  return (
                    <div className="flex flex-col">
                      <div className="flex items-start gap-4">
                          {/* Heading shown only in the left square to avoid repetition; right panel shows short description + details */}
                          <div className="flex-1">
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">{cur.short}</p>
                          </div>
                        </div>
                      <div className="mt-6 prose prose-blue dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                        {cur.details}
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Reveal animation="fade-right">
            <section className="glass h-full p-8 rounded-2xl shadow-lg border transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900/20">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">Booking & Pricing</h3>
              <div className="space-y-4">
                <p className="text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
                  For detailed pricing and assistance, please reach out to our team:
                </p>
                <div className="flex flex-col space-y-4 mt-auto">
                  <a 
                    className="flex items-center space-x-3 text-lg text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:-translate-x-1" 
                    href="mailto:info@vtaglobal.in"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@vtaglobal.in</span>
                  </a>
                  <a 
                    className="flex items-center space-x-3 text-lg text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:-translate-x-1" 
                    href="tel:+919911928612"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+91 99119 28612</span>
                  </a>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal animation="fade-left">
            <section className="glass h-full p-8 rounded-2xl shadow-lg border transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900/20 flex flex-col">
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">Need Help?</h3>
                <p className="text-lg leading-relaxed mb-8 text-blue-900 dark:text-blue-100">
                  Our expert team is ready to guide you through document requirements and procedures. Get personalized assistance today.
                </p>
                <div className="flex flex-wrap gap-4 mt-auto">
                  <a 
                    href="tel:+919911928612" 
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get a Quote
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:info@vtaglobal.in" 
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-white border-2 border-blue-600 text-blue-700 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-blue-50"
                  >
                    Email Us
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
