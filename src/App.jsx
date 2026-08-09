import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MapQuestionView from './components/MapQuestionView';
import MnemonicModal from './components/MnemonicModal';
import { useGameState } from './hooks/useGameState';
import { Award, Zap, CheckCircle } from 'lucide-react';

export default function App() {
  const {
    score,
    streak,
    correctCount,
    wrongCount,
    addCorrectAnswer,
    addWrongAnswer,
    resetProgress
  } = useGameState();

  const [isMnemonicOpen, setIsMnemonicOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky Header with Integrated Metrics Pill */}
      <Header
        score={score}
        streak={streak}
        correctCount={correctCount}
        wrongCount={wrongCount}
        onOpenMnemonicModal={() => setIsMnemonicOpen(true)}
        onReset={resetProgress}
      />

      {/* Main Workspace Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-2 sm:p-5 landscape:p-2 flex flex-col justify-center gap-2.5 sm:gap-3 landscape:gap-1.5">
        {/* Mobile-Only Metrics Pill (Positioned right between Navbar and Question Panel on small screens) */}
        <div className="sm:hidden flex items-center justify-around bg-slate-900/90 border border-white/10 px-3 py-1.5 rounded-2xl shadow-lg backdrop-blur-md w-full">
          {/* Puan */}
          <div className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">PUAN:</span>
            <span className="text-xs font-bold font-mono text-indigo-300">{score}</span>
          </div>

          <div className="w-[1px] h-3.5 bg-white/10" />

          {/* Seri */}
          <div className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">SERİ:</span>
            <span className="text-xs font-bold font-mono text-amber-400">{streak} 🔥</span>
          </div>

          <div className="w-[1px] h-3.5 bg-white/10" />

          {/* Doğru / Yanlış */}
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-xs font-bold font-mono text-emerald-400">
              {correctCount} <span className="text-slate-500 text-[10px] font-normal">/</span> <span className="text-rose-400">{wrongCount}</span>
            </span>
          </div>
        </div>

        <div className="w-full bg-slate-900/50 border border-white/10 rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 shadow-2xl backdrop-blur-xl flex flex-col items-center relative workspace-card">
          <MapQuestionView
            onCorrect={(points) => addCorrectAnswer(points)}
            onWrong={addWrongAnswer}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mnemonic Story Dictionary Modal */}
      <MnemonicModal
        isOpen={isMnemonicOpen}
        onClose={() => setIsMnemonicOpen(false)}
      />
    </div>
  );
}
