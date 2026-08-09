import React, { useState, useEffect, useMemo, useRef } from 'react';
import TurkeyProvincesMap from './TurkeyProvincesMap';
import { MAP_QUESTIONS_DATA } from '../data/mapQuestionsData';
import { GULF_QUESTIONS_DATA } from '../data/gulfQuestionsData';
import { MOUNTAIN_QUESTIONS_DATA } from '../data/mountainsQuestionsData';
import { PLAINS_QUESTIONS_DATA } from '../data/plainsQuestionsData';
import { PLATEAUS_QUESTIONS_DATA } from '../data/plateausQuestionsData';
import { NATIONAL_PARKS_QUESTIONS_DATA } from '../data/nationalParksQuestionsData';
import { sound } from '../utils/sound';
import { renderFormattedText } from '../utils/formatText';
import confetti from 'canvas-confetti';
import {
  CheckCircle2, XCircle, ArrowRight, HelpCircle, MapPin, Waves, Compass, Mountain, Wheat, Layers, Trees,
  RotateCcw, Sparkles, Trophy
} from 'lucide-react';

const TOPIC_TABS = [
  { id: 'goller', label: 'Göller', icon: Waves, color: 'text-blue-400', rawData: MAP_QUESTIONS_DATA },
  { id: 'korfezler', label: 'Körfezler', icon: Compass, color: 'text-indigo-400', rawData: GULF_QUESTIONS_DATA },
  { id: 'daglar', label: 'Dağlar', icon: Mountain, color: 'text-rose-400', rawData: MOUNTAIN_QUESTIONS_DATA },
  { id: 'ovalar', label: 'Ovalar', icon: Wheat, color: 'text-emerald-400', rawData: PLAINS_QUESTIONS_DATA },
  { id: 'platolar', label: 'Platolar', icon: Layers, color: 'text-amber-400', rawData: PLATEAUS_QUESTIONS_DATA },
  { id: 'milli-parklar', label: 'Milli Parklar', icon: Trees, color: 'text-teal-400', rawData: NATIONAL_PARKS_QUESTIONS_DATA },
];

// Helper to shuffle array
function shuffleArray(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// Helper to load or initialize topic quiz state from localStorage / Cookies
function getTopicState(topicId, rawData) {
  const storageKey = `cografya_v3_quiz_state_${topicId}`;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.shuffledIds) && parsed.shuffledIds.length === rawData.length) {
        const idMap = new Map(rawData.map(q => [q.id, q]));
        const restoredQuestions = parsed.shuffledIds.map(id => idMap.get(id)).filter(Boolean);
        if (restoredQuestions.length === rawData.length) {
          const safeIndex = Math.max(0, Math.min(parsed.currentIndex || 0, rawData.length - 1));
          return { questions: restoredQuestions, currentIndex: safeIndex };
        }
      }
    }
  } catch (e) {
    console.warn("Failed to load topic state from storage", e);
  }

  // Fallback / Initial: fresh shuffle
  const freshShuffled = shuffleArray(rawData);
  const freshIds = freshShuffled.map(q => q.id);
  try {
    localStorage.setItem(storageKey, JSON.stringify({ shuffledIds: freshIds, currentIndex: 0 }));
  } catch (e) {}

  return { questions: freshShuffled, currentIndex: 0 };
}

export default function MapQuestionView({ onCorrect, onWrong, globalResetKey }) {
  const [activeTopic, setActiveTopic] = useState(() => {
    return localStorage.getItem('cografya_active_topic') || 'goller';
  });

  const currentTab = useMemo(() => {
    return TOPIC_TABS.find(t => t.id === activeTopic) || TOPIC_TABS[0];
  }, [activeTopic]);

  const [{ questions, currentIndex }, setTopicQuizState] = useState(() => {
    return getTopicState(activeTopic, currentTab.rawData);
  });

  const [clickedPin, setClickedPin] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const mapContainerRef = useRef(null);

  // Re-initialize state when global reset is triggered from main header
  useEffect(() => {
    if (globalResetKey > 0) {
      const defaultTopic = 'goller';
      const tab = TOPIC_TABS[0];
      const freshState = getTopicState(defaultTopic, tab.rawData);
      setActiveTopic(defaultTopic);
      setTopicQuizState(freshState);
      setClickedPin(null);
      setSelectedChoice(null);
      setIsAnswered(false);
      setShowCompletionModal(false);
    }
  }, [globalResetKey]);

  // Save active topic preference to localStorage
  useEffect(() => {
    localStorage.setItem('cografya_active_topic', activeTopic);
  }, [activeTopic]);

  // When switching topic, load that topic's saved state
  const handleTopicChange = (topicId) => {
    const tab = TOPIC_TABS.find(t => t.id === topicId) || TOPIC_TABS[0];
    const newState = getTopicState(topicId, tab.rawData);
    setActiveTopic(topicId);
    setTopicQuizState(newState);
    setClickedPin(null);
    setSelectedChoice(null);
    setIsAnswered(false);
    setShowCompletionModal(false);
  };

  // Helper to persist current state to localStorage
  const saveProgress = (newQuestions, newIndex) => {
    const storageKey = `cografya_v3_quiz_state_${activeTopic}`;
    try {
      const ids = newQuestions.map(q => q.id);
      localStorage.setItem(storageKey, JSON.stringify({ shuffledIds: ids, currentIndex: newIndex }));
    } catch (e) {}
  };

  // Reshuffle current topic pool on completion restart
  const handleResetTopicPool = () => {
    const freshShuffled = shuffleArray(currentTab.rawData);
    setTopicQuizState({ questions: freshShuffled, currentIndex: 0 });
    saveProgress(freshShuffled, 0);
    setClickedPin(null);
    setSelectedChoice(null);
    setIsAnswered(false);
    setShowCompletionModal(false);
  };

  const currentQuestion = questions[currentIndex] || questions[0];
  const isChoiceMode = currentQuestion?.answerMode === 'choices';

  const handlePinClick = (pinLabel, screenOrigin = null) => {
    if (isAnswered || !currentQuestion || isChoiceMode) return;

    setClickedPin(pinLabel);
    setIsAnswered(true);

    const isCorrect = pinLabel === currentQuestion.correctLabel;

    if (isCorrect) {
      sound.playCorrect();
      onCorrect(25);
      try {
        if (screenOrigin && screenOrigin.originX && screenOrigin.originY) {
          confetti({
            particleCount: 65,
            spread: 75,
            origin: { x: screenOrigin.originX, y: screenOrigin.originY }
          });
        } else {
          confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
        }
      } catch (e) { console.warn(e); }
    } else {
      sound.playWrong();
      onWrong();
    }
  };

  const handleChoiceClick = (choiceLabel) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedChoice(choiceLabel);
    setIsAnswered(true);

    const isCorrect = choiceLabel === currentQuestion.correctChoice;

    if (isCorrect) {
      sound.playCorrect();
      onCorrect(25);
      try {
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
      } catch (e) { console.warn(e); }
    } else {
      sound.playWrong();
      onWrong();
    }
  };

  const handleNextQuestion = () => {
    setClickedPin(null);
    setSelectedChoice(null);
    setIsAnswered(false);

    if (currentIndex + 1 >= questions.length) {
      // Completed all questions in topic!
      setShowCompletionModal(true);
      try {
        confetti({ particleCount: 100, spread: 90, origin: { y: 0.5 } });
      } catch (e) {}
    } else {
      const nextIndex = currentIndex + 1;
      setTopicQuizState(prev => ({ ...prev, currentIndex: nextIndex }));
      saveProgress(questions, nextIndex);
    }
  };

  // Build pin states & censor names before answer to prevent spoilers
  const pinsWithState = currentQuestion?.pins.map((pin) => {
    let state = 'default';
    if (!isChoiceMode && isAnswered) {
      if (pin.label === currentQuestion.correctLabel) {
        state = 'correct';
      } else if (pin.label === clickedPin) {
        state = 'wrong';
      } else {
        state = 'dimmed';
      }
    }

    // Censor pin name before user answers ONLY if question is location/name based (isNameSecret: true)
    const isSecret = currentQuestion.isNameSecret === true;
    const topicLabel = activeTopic === 'korfezler' ? 'Körfez' : activeTopic === 'daglar' ? 'Dağ' : activeTopic === 'ovalar' ? 'Ova' : activeTopic === 'platolar' ? 'Plato' : activeTopic === 'milli-parklar' ? 'Milli Park' : 'Nokta';
    const displayName = (!isAnswered && isSecret)
      ? `${topicLabel} ${pin.label} (🔒)`
      : pin.name;

    return { ...pin, name: displayName, state };
  }) || [];

  // Determine detail field based on active topic
  const detailField = activeTopic === 'korfezler' ? 'sea' : 'type';

  return (
    <div className="w-full flex flex-col gap-2.5 sm:gap-4 landscape:gap-2">
      {/* Top Header Controls: Topic Selector Tabs + Progress Counter + Reset Button */}
      <div className="flex items-center justify-between gap-2 w-full topic-tabs flex-wrap">
        <div className="flex items-center gap-1.5">
          {TOPIC_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTopic === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTopicChange(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right side: Progress Counter */}
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/10 text-[11px] font-mono font-medium text-slate-300">
            Soru <strong className="text-indigo-400">{currentIndex + 1}</strong> / {questions.length}
          </span>
        </div>
      </div>

      {/* Question Card */}
      {currentQuestion && (
        <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 shadow-xl backdrop-blur-md flex items-start gap-2.5 question-card">
          <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${currentTab.color}`} />
          <div className="flex-1">
            <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
              {renderFormattedText(currentQuestion.question)}
            </p>
          </div>
        </div>
      )}

      {/* Turkey Map + Floating Explanation Banner Overlay */}
      <div ref={mapContainerRef} className="relative w-full overflow-hidden rounded-2xl">
        <TurkeyProvincesMap
          pins={pinsWithState}
          selectedPinLabel={clickedPin}
          onSelectPin={handlePinClick}
          isAnswered={isAnswered}
          correctLabel={currentQuestion?.correctLabel}
          resetZoomKey={`${activeTopic}-${currentIndex}`}
          staticPins={isChoiceMode}
        />

        {/* Floating Explanation + Next Button Overlay Banner */}
        <div
          className={`absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-4 sm:right-4 z-40 p-2.5 sm:p-4 landscape:p-2 rounded-xl bg-slate-950/95 border border-indigo-500/40 text-sm text-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            isAnswered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex items-start gap-2 flex-1 min-w-0">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 shrink-0 mt-0.5" />
            <p className="leading-snug text-xs sm:text-sm text-slate-200">
              {renderFormattedText(currentQuestion?.explanation)}
            </p>
          </div>
          <button
            onClick={handleNextQuestion}
            className="w-full sm:w-auto px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 transition-all active:scale-95 shadow-lg shadow-indigo-600/40 cursor-pointer"
          >
            <span>Sonraki Soru</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ═══════ CHOICE MODE: Clickable answer buttons ═══════ */}
      {isChoiceMode && currentQuestion?.choices && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {currentQuestion.choices.map((choice) => {
            let style = "bg-slate-800/60 border-white/10 text-slate-300 hover:bg-slate-700/60 hover:border-white/20 cursor-pointer";

            if (isAnswered) {
              if (choice.label === currentQuestion.correctChoice) {
                style = "bg-emerald-500/20 border-emerald-500/50 text-emerald-300";
              } else if (choice.label === selectedChoice) {
                style = "bg-rose-500/20 border-rose-500/50 text-rose-300";
              } else {
                style = "bg-slate-900/60 border-white/5 text-slate-500";
              }
            }

            return (
              <button
                key={choice.label}
                onClick={() => handleChoiceClick(choice.label)}
                disabled={isAnswered}
                className={`flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm transition-all duration-300 text-left ${style} ${isAnswered ? 'cursor-default' : ''}`}
              >
                <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[11px] shrink-0">
                  {choice.label}
                </span>
                <span className="font-medium flex-1">{choice.text}</span>
                {isAnswered && choice.label === currentQuestion.correctChoice && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                )}
                {isAnswered && choice.label === selectedChoice && choice.label !== currentQuestion.correctChoice && (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* ═══════ PIN MODE: Pin Legend (Clickable option cards below map) ═══════ */}
      {!isChoiceMode && currentQuestion && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {pinsWithState.map((pin) => {
            let style = "bg-slate-800/60 border-white/10 text-slate-300 hover:bg-slate-700/70 hover:border-indigo-500/40 cursor-pointer active:scale-95";
            if (isAnswered) {
              if (pin.state === 'correct') {
                style = "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 cursor-default";
              } else if (pin.state === 'wrong') {
                style = "bg-rose-500/20 border-rose-500/50 text-rose-300 cursor-default";
              } else {
                style = "bg-slate-900/60 border-white/5 text-slate-500 cursor-default";
              }
            }

            return (
              <button
                key={pin.label}
                onClick={() => handlePinClick(pin.label)}
                disabled={isAnswered}
                className={`flex flex-col items-center justify-center gap-1 p-2.5 sm:p-3 rounded-xl border text-xs min-h-[48px] sm:min-h-[52px] transition-all duration-200 text-center ${style}`}
              >
                <div className="flex items-center justify-center gap-1.5 w-full min-w-0">
                  <span className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[10px] shrink-0 font-mono">
                    {pin.label}
                  </span>
                  <span className="font-semibold truncate">{pin.name}</span>
                  {isAnswered && pin.state === 'correct' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                  {isAnswered && pin.state === 'wrong' && <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />}
                </div>
                <span className="text-[10px] font-mono text-center transition-all duration-300">
                  {isAnswered ? (pin[detailField] || '\u00A0') : '• • • • •'}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ═══════ TOPIC COMPLETION MODAL OVERLAY ═══════ */}
      {showCompletionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 max-w-sm w-full shadow-2xl flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-amber-400 animate-bounce" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Tebrikler! 🎉
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-indigo-400">{currentTab.label}</strong> kategorisindeki tüm <strong>{questions.length}</strong> soruyu başarıyla tamamladınız!
              </p>
            </div>

            <div className="w-full pt-2 flex flex-col gap-2">
              <button
                onClick={handleResetTopicPool}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/40"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Soru Havuzunu Karıştır ve Başla</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
