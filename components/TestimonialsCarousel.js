"use client";
import React, { useState, useEffect, useRef } from "react";
import Reveal from '@/components/Reveal'

const testimonials = [
  {
    quote:
      "VTA Global handled my visa and attestation faster than I expected. Friendly team and great communication.",
    name: "Priya K.",
    city: "New Delhi",
  },
  {
    quote:
      "Excellent service — helped me travel for work with zero hassle. Highly recommended.",
    name: "Ahmed R.",
    city: "Mumbai",
  },
  {
    quote:
      "Professional and reliable. They walked me through attestation and my documents were ready on time.",
    name: "Sameer P.",
    city: "Delhi",
  },
  {
    quote:
      "Sumit and Dharmendar are truly experts. My travel plans were smooth and stress-free.",
    name: "Ritika S.",
    city: "Gurgaon",
  },
  {
    quote:
      "I needed urgent visa help and VTA Global delivered. Fast, clear, and supportive.",
    name: "Vikram T.",
    city: "Noida",
  },
  {
    quote:
      "Great experience! The team explained everything and kept me updated throughout.",
    name: "Megha P.",
    city: "Pune",
  },
  {
    quote:
      "VTA Global made my first international trip easy and stress-free. Highly recommend their team!",
    name: "Arjun M.",
    city: "Jaipur",
  },
  {
    quote:
      "The support and guidance I received was outstanding. I will use VTA Global for all future travel needs.",
    name: "Neha G.",
    city: "Chandigarh",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i === total - 1 ? 0 : i + 1));
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, total]);

  function prev() {
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === total - 1 ? 0 : i + 1));
  }

  return (
    <div
      className="glass rounded-lg sm:rounded-xl shadow-md border p-5 sm:p-8 max-w-2xl mx-auto text-center relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[140px] sm:min-h-[120px]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Reveal animation="fade-up">
              <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-200 italic max-w-[36rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-3 sm:mt-4 text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold">
                — {t.name}, {t.city}
              </footer>
            </Reveal>
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4">
        <button
          onClick={prev}
          className="p-2 sm:px-3 sm:py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/60 active:scale-95 transition-all"
          aria-label="Previous testimonial"
        >
          &larr;
        </button>
        <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
          {index + 1} / {total}
        </span>
        <button
          onClick={next}
          className="p-2 sm:px-3 sm:py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/60 active:scale-95 transition-all"
          aria-label="Next testimonial"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
