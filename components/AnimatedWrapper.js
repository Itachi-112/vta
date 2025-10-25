"use client";

// Re-export the client implementation. Keep this as a client module so other client components
// (like `Navbar`) can import it safely and hooks run client-side.
export { default } from './AnimatedWrapper.client';
