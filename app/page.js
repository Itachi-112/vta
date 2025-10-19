import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import StatsDashboard from '@/components/StatsDashboard'
import HomeFeatures from '@/components/HomeFeatures'
import TestimonialsPreview from '@/components/TestimonialsPreview'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'
import Stagger from '@/components/Stagger'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Hero />
      
      {/* Mission (moved from About) */}
      <section className="mt-12 max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">Our Mission</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="glass p-6 rounded-xl shadow-md border text-slate-700 dark:text-slate-300 mx-4">
            <p className="text-center">
              At VTA Global, our mission is to simplify international travel and document compliance for everyone. We believe in transparency, speed, and a people-first approach. Our team is dedicated to making visa processing, attestation, and travel planning easy, reliable, and stress-free.
            </p>
          </div>
        </Reveal>
      </section>

      {/* What we do */}
      <HomeFeatures />

      {/* Momentum — Recent Growth */}
      <StatsDashboard />

      {/* What our customers say */}
      <TestimonialsPreview />

      {/* Contact & Address (moved from About) */}
      <section className="mt-12 max-w-5xl mx-auto">
        <Reveal>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Contact & Visit Us</h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal animation="fade-up" delay={80}>
            <div className="p-6 glass rounded-xl shadow-md border">
              <p className="text-sm text-slate-600 dark:text-slate-300">Enquiry Email</p>
              <a href="mailto:info@vtaglobal.in" className="block mt-1 text-blue-600 hover:underline">info@vtaglobal.in</a>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Phone</p>
              <a href="tel:+919911928612" className="block mt-1 text-slate-900 dark:text-slate-100 font-semibold">+91 99119 28612</a>
              <a href="tel:+918368032103" className="block mt-1 text-slate-900 dark:text-slate-100 font-semibold">+91 83680 32103</a>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Office Address</p>
              <address className="not-italic mt-1 text-sm text-slate-700 dark:text-slate-300">
                VTA Global Services LLP<br />
                B-204 RG Complex,<br />
                Next to Novotel Hotel<br />
                D.B Gupta Road, Paharganj<br />
                New Delhi - 110055
              </address>

              <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=B-204+RG+Complex+Next+to+Novotel+Hotel+D.B+Gupta+Road+Paharganj+New+Delhi+110055" className="inline-block mt-4 text-sm text-blue-600 hover:underline">Open in Google Maps</a>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={120}>
            <div className="p-6 glass rounded-xl shadow-md border">
              <p className="text-sm text-slate-600 dark:text-slate-300">Office Hours</p>
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex items-center justify-between bg-white/30 dark:bg-white/5 p-3 rounded">
                  <span className="text-sm">Monday - Saturday</span>
                  <span className="text-sm font-semibold">9:30 AM – 6:30 PM</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 dark:bg-white/3 p-3 rounded">
                  <span className="text-sm">Sunday</span>
                  <span className="text-sm font-semibold">Closed</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Services</h4>
                <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                  <li>Visa processing for multiple countries</li>
                  <li>Document attestation & legalization</li>
                  <li>Travel planning & insurance</li>
                </ul>
              </div>

              <div className="mt-6 text-right">
                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">Get in touch</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs (moved from About) */}
      <section className="mt-12 max-w-6xl mx-auto">
        <Reveal>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Frequently Asked Questions</h3>
        </Reveal>
        <Stagger className="mt-6 space-y-4">
          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">How long does attestation take?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Typical attestation ranges from 3-10 business days depending on the document and country requirements.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">Can you help with urgent visas?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Yes — we offer expedited services for many countries. Contact us for availability and pricing.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">What documents are required?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Required documents depend on the visa type and country; we’ll provide a checklist when you reach out.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">Do you provide travel insurance?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Yes, we offer travel insurance options to protect you during your journey.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">Can you help with business visas?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Absolutely! We assist with business, work, and study visas for many countries.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">Is my data safe with VTA Global?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">We take privacy seriously and use secure systems to protect your information.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">Do you offer support for first-time travelers?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Yes, our team provides guidance and tips for those traveling abroad for the first time.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">How do I start my visa application?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Just contact us via email or phone and we’ll walk you through the process step by step.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">Do you help with apostille services?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Yes, we provide apostille and legalization services for documents as required by many countries.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">Can you assist with hotel and flight bookings?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">We can help you with travel logistics including hotel and flight bookings as part of our packages.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">What payment methods do you accept?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">We accept bank transfer, UPI, and most major payment methods for your convenience.</p>
          </details>

          <details className="p-4 glass rounded-lg border">
            <summary className="font-medium text-slate-900 dark:text-slate-100">How do I track my application status?</summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">You can contact us anytime for updates, and we proactively keep you informed throughout the process.</p>
          </details>
        </Stagger>
      </section>

      <CTASection />
    </div>
  );
}

