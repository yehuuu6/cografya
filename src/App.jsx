import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MapQuestionView from './components/MapQuestionView';
import MnemonicModal from './components/MnemonicModal';
import { useGameState } from './hooks/useGameState';
import { Award, Zap, CheckCircle, AlertTriangle, RotateCcw } from 'lucide-react';

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
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [globalResetKey, setGlobalResetKey] = useState(0);

  const handleConfirmGlobalReset = () => {
    // 1. Reset game state metrics (score, streak, correct/wrong)
    resetProgress();

    // 2. Clear topic quiz progress from localStorage
    ['goller', 'korfezler', 'daglar', 'ovalar', 'platolar', 'milli-parklar'].forEach(topic => {
      try {
        localStorage.removeItem(`cografya_quiz_state_${topic}`);
        localStorage.removeItem(`cografya_v2_quiz_state_${topic}`);
        localStorage.removeItem(`cografya_v3_quiz_state_${topic}`);
      } catch (e) {}
    });
    try {
      localStorage.removeItem('cografya_active_topic');
    } catch (e) {}

    // 3. Trigger reset in MapQuestionView
    setGlobalResetKey(prev => prev + 1);

    // 4. Close modal
    setIsResetConfirmOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky Header with Integrated Metrics Pill */}
      <Header
        score={score}
        streak={streak}
        correctCount={correctCount}
        wrongCount={wrongCount}
        onOpenMnemonicModal={() => setIsMnemonicOpen(true)}
        onReset={() => setIsResetConfirmOpen(true)}
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
            globalResetKey={globalResetKey}
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

      {/* Global Reset Confirmation Modal */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-6 max-w-sm w-full shadow-2xl flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-1.5">
                Tüm İlerlemeyi Sıfırla?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Puanınız, istatistikleriniz ve tüm kategorilerdeki soru ilerlemeniz sıfırlanacak, soru havuzu yeniden karıştırılacaktır.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full pt-2">
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-slate-300 font-semibold text-xs transition-all cursor-pointer"
              >
                Vazgeç
              </button>
              <button
                onClick={handleConfirmGlobalReset}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Evet, Sıfırla</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
