import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-BO_eQAYX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var emptyQuiz = () => ({
	answered: 0,
	correct: 0,
	streak: 0,
	bestStreak: 0,
	perOrgan: {}
});
var useProgress = create()(persist((set) => ({
	seen: {},
	quiz: emptyQuiz(),
	markSeen: (organId, mag) => set((s) => ({ seen: {
		...s.seen,
		[`${organId}:${mag}`]: true
	} })),
	recordAnswer: (organId, ok) => set((s) => {
		const prev = s.quiz.perOrgan[organId] ?? {
			correct: 0,
			wrong: 0
		};
		const streak = ok ? s.quiz.streak + 1 : 0;
		return { quiz: {
			answered: s.quiz.answered + 1,
			correct: s.quiz.correct + (ok ? 1 : 0),
			streak,
			bestStreak: Math.max(s.quiz.bestStreak, streak),
			perOrgan: {
				...s.quiz.perOrgan,
				[organId]: {
					correct: prev.correct + (ok ? 1 : 0),
					wrong: prev.wrong + (ok ? 0 : 1)
				}
			}
		} };
	}),
	resetQuiz: () => set({ quiz: emptyQuiz() })
}), { name: "lamina-progress" }));
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
//#endregion
export { useProgress as n, useHydrated as t };
