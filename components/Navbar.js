"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import AnimatedWrapper from '@/components/AnimatedWrapper';

const allServices = [
  { name: 'Document attestation (MEA)', href: '/services' },
  { name: 'Embassy legalization', href: '/services#embassy-attestation' },
  { name: 'Foreign language translation', href: '/services' },
  { name: 'Chamber of commerce', href: '/services' },
  { name: 'Visa processing for all countries', href: '/services' },
  { name: 'Air ticket', href: '/services' },
  { name: 'Travel insurance', href: '/services' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 w-full glass border-b'>
      <div className='container mx-auto flex items-center justify-between py-1 sm:py-1.5 px-2 sm:px-4'>
        {/* Logo with hover effect */}
        <div className='flex items-center'>
          <Link href="/" className="transition-transform hover:scale-105 duration-300">
            <Image
              src="/vta-logo5.PNG"
              alt="VTA-Global"
              width={45}
              height={16}
              className="object-contain w-auto h-auto drop-shadow-sm sm:scale-110"
              priority
            />
          </Link>
        </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            {/* Desktop Navigation - centered */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-8 items-center">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'px-4 py-2 font-medium text-sm text-slate-700 dark:text-gray-200 hover:bg-white/6 hover:text-blue-600 rounded-full transition-colors duration-200'
                        )}
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'px-4 py-2 font-medium text-sm text-slate-700 dark:text-gray-200 hover:bg-white/6 hover:text-blue-600 rounded-full transition-colors duration-200'
                        )}
                      >
                        About Us
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 font-medium text-sm text-slate-700 dark:text-gray-200 hover:bg-white/6 hover:text-blue-600 rounded-full transition-colors duration-200 no-focus-ring">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <AnimatedWrapper className="w-[420px] p-3">
                        <div className="glass p-3 rounded-xl shadow-md border">
                          <ul className="space-y-2">
                            {allServices.map((service) => (
                              <NavigationMenuLink asChild key={service.name}>
                                <Link
                                  href={service.href}
                                  className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-gray-50/90 hover:text-blue-600 dark:hover:bg-gray-800/70"
                                >
                                  <div className="text-sm font-medium leading-none">{service.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </ul>
                        </div>
                      </AnimatedWrapper>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Contact on the right */}
            <div className="hidden lg:flex items-center justify-end ml-4">
              <a
                href="tel:+919911928612"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 shadow-md border border-blue-700/20 rounded-lg transition-all duration-200 scale-on-hover"
                aria-label="Contact Us"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform transition-transform duration-300 group-hover:rotate-12"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Contact Us
      </a>
    </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm dark:bg-gray-950/95 border-b lg:hidden shadow-lg">
                <div className="container mx-auto py-3 sm:py-4 px-4 sm:px-6 space-y-3 sm:space-y-4">
                  <Link href="/" className="block py-1.5 sm:py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 active:translate-x-1 transition-transform">
                    Home
                  </Link>
                  <Link href="/about" className="block py-1.5 sm:py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 active:translate-x-1 transition-transform">
                    About Us
                  </Link>

                  <div className="py-1.5 sm:py-2">
                    <p className="font-medium text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2">Services</p>
                    <div className="ml-3 sm:ml-4 space-y-1.5 sm:space-y-2">
                      {allServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block py-1 text-[13px] sm:text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300 active:translate-x-1 transition-transform"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <a
                    href="tel:+919911928612"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-[13px] sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 rounded-lg transition-all duration-150 scale-on-hover"
                    aria-label="Contact Us"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Contact Us
                  </a>
                </div>
              </div>
            )}
          </div>
      </nav>
  );
}

/* Navbar is exported via the function declaration `export default function Navbar()` above. */