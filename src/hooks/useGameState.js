import { useState, useEffect, useCallback } from 'react';
import { LAKES_DATA } from '../data/lakesData';
import { saveGameState, loadGameState, clearGameState } from '../utils/storage';

export function useGameState() {
  const [currentMode, setCurrentMode] = useState('map'); // 'map', 'canvas', 'quiz', 'mnemonic'
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [remainingPool, setRemainingPool] = useState(LAKES_DATA);
  const [toastMessage, setToastMessage] = useState(null);

  // Load saved state on mount
  useEffect(() => {
    const saved = loadGameState();
    if (saved) {
      setScore(saved.score || 0);
      setStreak(saved.streak || 0);
      setCorrectCount(saved.correctCount || 0);
      setWrongCount(saved.wrongCount || 0);
      if (Array.isArray(saved.remainingLakeIds) && saved.remainingLakeIds.length > 0) {
        const filtered = LAKES_DATA.filter(l => saved.remainingLakeIds.includes(l.id));
        setRemainingPool(filtered.length > 0 ? filtered : LAKES_DATA);
      }
    }
  }, []);

  // Auto save on score / metrics change
  const saveState = useCallback((newScore, newStreak, newCorrect, newWrong, newPool) => {
    saveGameState({
      score: newScore,
      streak: newStreak,
      correctCount: newCorrect,
      wrongCount: newWrong,
      remainingLakeIds: (newPool || remainingPool).map(l => l.id)
    });
  }, [remainingPool]);

  const addCorrectAnswer = useCallback((points = 15, lakeIdToRemove = null) => {
    setScore(prevScore => {
      const nextScore = prevScore + points + streak * 2;
      setStreak(prevStreak => {
        const nextStreak = prevStreak + 1;
        setCorrectCount(prevCorrect => {
          const nextCorrect = prevCorrect + 1;
          setRemainingPool(prevPool => {
            let nextPool = prevPool;
            if (lakeIdToRemove) {
              nextPool = prevPool.filter(l => l.id !== lakeIdToRemove);
              if (nextPool.length === 0) nextPool = [...LAKES_DATA];
            }
            saveState(nextScore, nextStreak, nextCorrect, wrongCount, nextPool);
            return nextPool;
          });
          return nextCorrect;
        });
        return nextStreak;
      });
      return nextScore;
    });
  }, [streak, wrongCount, saveState]);

  const addWrongAnswer = useCallback(() => {
    setStreak(0);
    setWrongCount(prev => {
      const nextWrong = prev + 1;
      saveState(score, 0, correctCount, nextWrong, remainingPool);
      return nextWrong;
    });
  }, [score, correctCount, remainingPool, saveState]);

  const resetProgress = useCallback(() => {
    clearGameState();
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setWrongCount(0);
    setRemainingPool([...LAKES_DATA]);
  }, []);

  return {
    currentMode,
    setCurrentMode,
    score,
    streak,
    correctCount,
    wrongCount,
    remainingPool,
    setRemainingPool,
    toastMessage,
    setToastMessage,
    addCorrectAnswer,
    addWrongAnswer,
    resetProgress
  };
}
