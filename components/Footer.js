import React from "react";

export default function Footer() {
  return (
    <footer id="site-footer" className="">
      {/* full-width translucent bar (no top margin) so the animated SVG shows through */}
      <div className="glass w-full py-6 rounded-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-[13px] sm:text-sm text-slate-600 dark:text-slate-300">
          <p className="mb-1.5 sm:mb-2">© {new Date().getFullYear()} VTA Global Services. All rights reserved.</p>
          <p className="text-[11px] sm:text-xs">B-204 RG Complex, Next to Novotel Hotel, D.B Gupta Road, Paharganj, New Delhi - 110055</p>
          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <a href="mailto:info@vtaglobal.in" className="text-blue-600 hover:underline">info@vtaglobal.in</a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="tel:+919911928612" className="text-slate-900 dark:text-slate-100 font-semibold text-[13px] sm:text-sm hover:text-blue-600 transition-colors">+91 99119 28612</a>
              <a href="tel:+918368032103" className="text-slate-900 dark:text-slate-100 font-semibold text-[13px] sm:text-sm hover:text-blue-600 transition-colors">+91 83680 32103</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
