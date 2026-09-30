import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as epitheliumOf, c as ORGANS, h as classificationOf, n as EPITHELIA, s as MAG_LABEL, v as getOrgan } from "./slides-data-J3aoUADv.mjs";
import { i as cn, r as Route$2 } from "./router-DzFtP8hj.mjs";
import { t as Button } from "./button-CrBMA0eG.mjs";
import { t as ScopeView } from "./scope-view-Xg7waMFE.mjs";
import { n as useProgress } from "./progress-BO_eQAYX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/practicar-BMi-g7fA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function shuffle(arr) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function pickMag(organ, kind) {
	const mags = organ.slides.map((s) => s.mag);
	if (kind === "epitelio") {
		const prefer = mags.filter((m) => m === "40x" || m === "10x");
		return pick(prefer.length ? prefer : mags);
	}
	return pick(mags);
}
function makeQuestion(mode, lockId) {
	const locked = lockId ? getOrgan(lockId) : void 0;
	const epithelial = ORGANS.filter((o) => o.epitheliumId);
	let kind = mode === "mixto" ? pick(["organo", "epitelio"]) : mode;
	if (kind === "epitelio" && locked && !locked.epitheliumId) kind = "organo";
	const organ = locked ?? (kind === "epitelio" ? pick(epithelial) : pick(ORGANS));
	const mag = pickMag(organ, kind);
	const epi = epitheliumOf(organ);
	if (kind === "organo") {
		const others = shuffle(ORGANS.filter((o) => o.id !== organ.id)).slice(0, 3);
		return {
			kind,
			organ,
			mag,
			prompt: "¿Qué órgano es este campo?",
			options: shuffle([organ.name, ...others.map((o) => o.name)]),
			answer: organ.name,
			hint: organ.clues[0] ?? epi?.howToSee[0] ?? ""
		};
	}
	const others = shuffle(EPITHELIA.filter((e) => e.id !== epi.id)).slice(0, 3);
	return {
		kind: "epitelio",
		organ,
		mag,
		prompt: "¿Qué tipo de epitelio ves?",
		options: shuffle([epi.shortName, ...others.map((e) => e.shortName)]),
		answer: epi.shortName,
		hint: epi.howToSee[0] ?? organ.clues[0] ?? ""
	};
}
function Practicar() {
	const search = Route$2.useSearch();
	const [mode, setMode] = (0, import_react.useState)(search.mode ?? "mixto");
	const lockId = search.organ;
	const lock = lockId ? getOrgan(lockId) : void 0;
	const [q, setQ] = (0, import_react.useState)(null);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const recordAnswer = useProgress((s) => s.recordAnswer);
	const quiz = useProgress((s) => s.quiz);
	const resetQuiz = useProgress((s) => s.resetQuiz);
	(0, import_react.useEffect)(() => {
		setQ(makeQuestion(mode, lockId));
		setPicked(null);
	}, [mode, lockId]);
	const resolved = picked !== null;
	const correct = picked === q?.answer;
	function choose(opt) {
		if (!q || picked) return;
		setPicked(opt);
		recordAnswer(q.organ.id, opt === q.answer);
	}
	function next() {
		setPicked(null);
		setQ(makeQuestion(mode, lockId));
	}
	const accuracy = (0, import_react.useMemo)(() => {
		if (!quiz.answered) return 0;
		return Math.round(quiz.correct / quiz.answered * 100);
	}, [quiz]);
	if (!q) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-80" });
	const slide = q.organ.slides.find((s) => s.mag === q.mag) ?? q.organ.slides[0];
	const epi = epitheliumOf(q.organ);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-faint",
						children: "Practicar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-3xl font-medium tracking-tight",
						children: lock ? lock.name : "Campo sin etiqueta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-lg text-sm text-muted",
						children: "Mira el campo y di el órgano o el tipo de epitelio."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "flex gap-6 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-faint",
							children: "Aciertos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "font-mono tabular-nums",
							children: [
								quiz.correct,
								"/",
								quiz.answered || 0
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-faint",
							children: "Racha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-mono tabular-nums",
							children: quiz.streak
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-faint",
							children: "%"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-mono tabular-nums",
							children: accuracy
						})] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [[
					["mixto", "Mixto"],
					["organo", "Órgano"],
					["epitelio", "Epitelio"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMode(id),
					className: cn("h-10 rounded-full px-3.5 text-sm transition-colors duration-150", mode === id ? "bg-primary text-primary-fg" : "bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg"),
					children: label
				}, id)), lock ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/practicar",
					className: "inline-flex h-10 items-center rounded-full px-3.5 text-sm text-muted hover:text-fg",
					children: "Todas las láminas"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeView, {
						src: slide.src,
						alt: "Campo de microscopio sin etiquetar",
						mag: q.mag
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-medium leading-snug",
							children: q.prompt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-faint",
							children: MAG_LABEL[q.mag]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: q.options.map((opt) => {
								const isAnswer = opt === q.answer;
								const isPick = opt === picked;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => choose(opt),
									className: cn("w-full min-h-12 rounded-lg px-4 py-3 text-left text-sm leading-snug transition-colors duration-150", !resolved && "bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]", resolved && isAnswer && "bg-good/20 text-fg", resolved && isPick && !isAnswer && "bg-bad/20 text-fg", resolved && !isAnswer && !isPick && "bg-elevated text-faint"),
									children: opt
								}) }, opt);
							})
						}),
						resolved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: correct ? "Correcto." : "No era esa."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm leading-relaxed text-muted",
									children: [
										q.organ.name,
										epi ? ` · ${epi.shortName}` : ` · ${classificationOf(q.organ)}`,
										". ",
										q.hint
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										onClick: next,
										children: "Siguiente campo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "ghost",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/atlas/$id",
											params: { id: q.organ.id },
											children: "Ver en el atlas"
										})
									})]
								})
							]
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: resetQuiz,
					className: "min-h-11 text-xs text-faint hover:text-muted",
					children: "Reiniciar puntuación"
				})
			})
		]
	});
}
//#endregion
export { Practicar as component };
