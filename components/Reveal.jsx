"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal component
 * Wrap any element with <Reveal animation="fade-up" delay={100} duration={600}>...</Reveal>
 * Props:
 * - animation: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' (defaults to fade-up)
 * - delay: ms to delay the animation
 * - duration: ms duration of animation
 */
const Reveal = ({ children, animation = 'fade-up', delay = 0, duration = 600, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      // If IO not supported, show immediately
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(node);
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal reveal-${animation} ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
