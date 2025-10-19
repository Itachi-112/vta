"use client";

import { TypewriterEffect } from "./ui/typewriter-effect";
import { Button } from "./ui/button";
import Reveal from '@/components/Reveal'

export default function HeroSection() {
  const words = [
    { text: "Your" },
    { text: "Trusted" },
    { text: "Partner" },
    { text: "for" },
    { text: "Visa", className: "text-blue-500 dark:text-blue-500" },
    { text: "&", className: "text-blue-500 dark:text-blue-500" },
    { text: "Travel", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
  <div className="relative h-[90vh] min-h-[400px] w-full">
      {/* Background image (less blur, more immersive) */}
      <div className="absolute inset-0 overflow-hidden">
       
        <div className="" />
      </div>

      {/* Main content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 sm:px-4 text-white">
  <TypewriterEffect words={words} className="text-lg sm:text-2xl md:text-4xl lg:text-5xl" />

        <Reveal delay={60}>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md sm:max-w-2xl text-center">
            Professional visa attestation services and comprehensive travel solutions for your journey abroad
          </p>
        </Reveal>

        <div className="mt-6 sm:mt-8">
          <Reveal animation="fade-up" delay={120}>
            <a
              href="https://wa.me/919911928612"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg text-base sm:text-lg transform transition-transform duration-300 group-hover:rotate-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-4.2-1l-4.7 1 1-4.7A8.38 8.38 0 0 1 3 12.5 8.5 8.5 0 0 1 12 4a8.5 8.5 0 0 1 9 7.5z"></path><path d="M17.5 14.8c-.5-.2-1.3-.6-1.6-.7-.4-.1-.6-.1-.9.2-.3.3-1 .6-1.2.7-.3.1-.6.1-1-.1s-1-1-1.8-2.1c-.6-.9-.6-1.4-.6-1.6s.1-.4.4-.6c.4-.2.7-.4 1-.6.3-.2.4-.4.6-.6.2-.2.1-.5 0-.7-.1-.2-.9-2.1-1.3-2.8-.3-.6-.7-.6-.9-.6-.2 0-.5 0-.8 0-.3 0-.8.1-1.2.6-.4.5-1.3 1.3-1.3 3.1s1.4 3.6 1.6 3.8c.2.2 2.7 4.4 6.5 6 3.8 1.6 3.8 1.1 4.5 1 .7-.1 2.4-.9 2.7-2.3.3-1.4.3-2.6.2-2.9-.1-.3-.4-.5-.9-.7z"/></svg>
              Enquire
            </a>
          </Reveal>
        </div>

        {/* Features */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-4xl mx-auto text-center">
          <Reveal delay={200}>
            <div className="p-2 sm:p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base sm:text-lg">Visa</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Assistance with Visa</p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="p-2 sm:p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base sm:text-lg">Travel</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Customized travel packages</p>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="p-2 sm:p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base sm:text-lg">Attestation</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Fast & reliable document attestation</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}