"use client";

import React, { useEffect, useState } from 'react';
import Reveal from '@/components/Reveal'

function useCountTo(target, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = null;
    let rafId = null;
    const from = 0;
    const diff = target - from;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(from + diff * progress));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    }

    // Start animation
    rafId = requestAnimationFrame(step);

    // Cleanup to avoid RAF leaks and reset when target changes
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, duration]);

  return value;
}

const Stat = ({ label, value, suffix }) => {
  // Use a deterministic duration to keep animations consistent
  const duration = 1200;
  const count = useCountTo(value, duration);

  // Ensure percent values display as integers followed by %
  const display = suffix === '%' ? `${count}%` : `${count}${suffix || ''}`;

  return (
    <div className="p-4 sm:p-6 glass rounded-lg sm:rounded-xl shadow-md border text-center">
      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">{display}</div>
      <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">{label}</div>
    </div>
  );
};

export default function StatsDashboard() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 text-center">Momentum — Recent Growth</h2>
      </Reveal>

      <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        <Reveal delay={80}><Stat label="Trusted customers" value={1200} suffix="+" /></Reveal>
        <Reveal delay={120}><Stat label="Visas & Attestations processed" value={3820} suffix="+" /></Reveal>
        <Reveal delay={160}><Stat label="On-time delivery" value={95} suffix="%" /></Reveal>
        <Reveal delay={200}><Stat label="Countries assisted" value={78} suffix="+" /></Reveal>
      </div>
    </section>
  )
}
