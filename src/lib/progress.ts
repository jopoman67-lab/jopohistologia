import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Mag } from "./slides-data";

type QuizStats = {
  answered: number;
  correct: number;
  streak: number;
  bestStreak: number;
  perOrgan: Record<string, { correct: number; wrong: number }>;
};

type ProgressState = {
  seen: Record<string, boolean>;
  quiz: QuizStats;
  markSeen: (organId: string, mag: Mag) => void;
  recordAnswer: (organId: string, ok: boolean) => void;
  resetQuiz: () => void;
};

const emptyQuiz = (): QuizStats => ({
  answered: 0,
  correct: 0,
  streak: 0,
  bestStreak: 0,
  perOrgan: {},
});

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      seen: {},
      quiz: emptyQuiz(),
      markSeen: (organId, mag) =>
        set((s) => ({
          seen: { ...s.seen, [`${organId}:${mag}`]: true },
        })),
      recordAnswer: (organId, ok) =>
        set((s) => {
          const prev = s.quiz.perOrgan[organId] ?? { correct: 0, wrong: 0 };
          const streak = ok ? s.quiz.streak + 1 : 0;
          return {
            quiz: {
              answered: s.quiz.answered + 1,
              correct: s.quiz.correct + (ok ? 1 : 0),
              streak,
              bestStreak: Math.max(s.quiz.bestStreak, streak),
              perOrgan: {
                ...s.quiz.perOrgan,
                [organId]: {
                  correct: prev.correct + (ok ? 1 : 0),
                  wrong: prev.wrong + (ok ? 0 : 1),
                },
              },
            },
          };
        }),
      resetQuiz: () => set({ quiz: emptyQuiz() }),
    }),
    { name: "lamina-progress" },
  ),
);

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
