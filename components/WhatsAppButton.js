"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const WhatsAppButton = () => {
  const phone = "+919911928612"; // primary number
  const waLink = `https://wa.me/${phone.replace(/\D/g, '')}`;
  const [hidden, setHidden] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer || !('IntersectionObserver' in window)) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // hide the button when the footer intersects the viewport
          setHidden(entry.isIntersecting);
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`fixed left-4 bottom-6 z-50 transition-opacity duration-300 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <Link href={waLink} aria-label="Chat with us on WhatsApp" target="_blank" rel="noopener noreferrer">
        <button
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-lg flex items-center justify-center text-white transition-all transform hover:-translate-y-1 active:scale-95"
          title="Chat with us on WhatsApp"
          style={{
            boxShadow: '0 8px 24px rgba(16,185,129,0.15)',
            // a small pulse effect using animation shorthand as fallback if Tailwind pulse isn't available
            animation: 'whatsapp-pulse 2.6s ease-in-out infinite',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="sm:w-[22px] sm:h-[22px]">
            <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.373 0 .054 4.998.002 11.5a11.95 11.95 0 0 0 3.48 8.52L0 24l4.08-3.16A11.95 11.95 0 0 0 12 24c6.627 0 11.998-4.998 12-11.5 0-1.96-.44-3.82-1.48-5.02z" fill="#fff" opacity="0.06"/>
            <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.373 0 .054 4.998.002 11.5a11.95 11.95 0 0 0 3.48 8.52L0 24l4.08-3.16A11.95 11.95 0 0 0 12 24c6.627 0 11.998-4.998 12-11.5 0-1.96-.44-3.82-1.48-5.02z" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="none"/>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149s-.768.967-.941 1.166c-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.148-.672-1.624-.922-2.225-.242-.585-.487-.506-.672-.516l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 3.01 1.297 3.01.864 3.556.811.546-.052 1.758-.718 2.006-1.412.248-.695.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347z" fill="#fff"/>
          </svg>
        </button>
      </Link>

      <style jsx>{`
        @keyframes whatsapp-pulse {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-4px) scale(1.04); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
