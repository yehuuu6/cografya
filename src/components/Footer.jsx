import React from 'react';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 text-slate-400 py-5 px-4 sm:px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Left: Brand */}
        <div className="flex items-center gap-2.5">
          <Compass className="w-4 h-4 text-indigo-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-300">
            KPSS Coğrafya Harita Portalı
          </span>
          <span className="text-slate-600 text-xs hidden xs:inline">•</span>
          <span className="text-xs text-slate-500 hidden sm:inline">
            İnteraktif Çalışma & Hafıza Kodlamaları
          </span>
        </div>

        {/* Right: Simple copyright */}
        <div className="text-xs text-slate-500 font-mono">
          &copy; {new Date().getFullYear()} <a className="text-indigo-400 hover:text-indigo-300 cursor-pointer hover:underline" target='_blank' href="http://github.com/yehuuu6">yehuuu6</a>
        </div>
      </div>
    </footer>
  );
}
