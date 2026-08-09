import React from 'react';
import { Compass, BookOpen, RotateCcw, Award, Zap, CheckCircle } from 'lucide-react';

export default function Header({ score, streak, correctCount, wrongCount, onOpenMnemonicModal, onReset }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2.5 landscape:py-1 flex items-center justify-between gap-2.5 sm:gap-3">
        {/* Brand Section */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative w-9 h-9 rounded-xl bg-slate-900 border border-white/15 flex items-center justify-center text-indigo-400">
              <Compass className="w-5 h-5 text-indigo-300 animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 tracking-tight">
                KPSS Coğrafya
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-extrabold font-mono text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 rounded-md uppercase tracking-wider">
                HAFIZA KODLAMA
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium hidden sm:flex items-center gap-1.5 header-subtitle">
              <span>Harita Üzerinde Yer Şekilleri Soruları</span>
            </span>
          </div>
        </div>

        {/* Navbar Center Metrics (Desktop / Tablet only) */}
        <div className="hidden sm:flex items-center gap-1.5 sm:gap-2.5 bg-slate-900/90 border border-white/10 px-2.5 sm:px-3.5 py-1.5 rounded-2xl shadow-inner backdrop-blur-md">
          {/* Puan */}
          <div className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase hidden xs:inline">PUAN:</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-indigo-300">{score}</span>
          </div>

          <div className="w-[1px] h-3.5 bg-white/10" />

          {/* Seri */}
          <div className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase hidden xs:inline">SERİ:</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-amber-400">{streak} 🔥</span>
          </div>

          <div className="w-[1px] h-3.5 bg-white/10" />

          {/* Doğru / Yanlış */}
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400">
              {correctCount} <span className="text-slate-500 text-[10px] font-normal">/</span> <span className="text-rose-400">{wrongCount}</span>
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            onClick={onOpenMnemonicModal}
            className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-xs font-semibold text-indigo-300 hover:text-indigo-200 flex items-center gap-2 transition-all duration-200 shadow-lg shadow-indigo-500/10 active:scale-95 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Kodlamalar</span>
          </button>

          <button
            onClick={onReset}
            title="Soru ve Puan İlerlemesini Sıfırla"
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-900 hover:bg-rose-500/10 border border-white/10 hover:border-rose-500/30 text-xs font-medium text-slate-400 hover:text-rose-300 flex items-center gap-1.5 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-400" />
            <span className="hidden md:inline">Sıfırla</span>
          </button>
        </div>
      </div>
    </header>
  );
}
