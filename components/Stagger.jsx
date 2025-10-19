"use client";
import React from 'react'
import Reveal from '@/components/Reveal'

/**
 * Stagger: wraps children and applies incremental Reveal delays
 * props: children (array), baseDelay (ms), step (ms), animation
 */
export default function Stagger({ children, baseDelay = 60, step = 60, animation = 'fade-up', className = '' }){
  const items = React.Children.toArray(children)
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={i} animation={animation} delay={baseDelay + i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
