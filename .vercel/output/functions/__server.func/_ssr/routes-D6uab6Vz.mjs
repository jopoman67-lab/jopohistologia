import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ORGANS, i as FUNDAMENTALS, r as FIELD_COUNT, y as preferredSlide } from "./slides-data-J3aoUADv.mjs";
import { c as ArrowRight, n as Target, r as ScanSearch, s as BookOpen } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-CrBMA0eG.mjs";
import { t as ScopeView } from "./scope-view-Xg7waMFE.mjs";
import { n as useProgress, t as useHydrated } from "./progress-BO_eQAYX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D6uab6Vz.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const seen = useProgress((s) => s.seen);
	const quiz = useProgress((s) => s.quiz);
	const hydrated = useHydrated();
	const seenCount = hydrated ? Object.keys(seen).length : 0;
	const featured = ORGANS.find((o) => o.id === "traquea") ?? ORGANS[0];
	const featuredSlide = preferredSlide(featured, "40x");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-faint",
							children: "Práctica de tejidos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl",
							children: "Reconoce el órgano y si es epitelio u otro tejido."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-lg text-base leading-relaxed text-muted",
							children: "Tus láminas reales. Epitelios a 4×, 10× y 40×, más tendón, piel gruesa, cordón, mama y vena umbilical. Qué órgano es, qué tejido fundamental, y de qué tipo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/practicar",
									children: ["Practicar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/atlas",
									children: "Abrir atlas"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid max-w-md grid-cols-3 gap-3 pt-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-faint",
									children: "Láminas"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono tabular-nums text-lg",
									children: ORGANS.length
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-faint",
									children: "Campos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono tabular-nums text-lg",
									children: FIELD_COUNT
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-faint",
									children: "Vistos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono tabular-nums text-lg",
									children: [seenCount, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-faint",
										children: ["/", FIELD_COUNT]
									})]
								})] })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeView, {
						src: featuredSlide.src,
						alt: "Campo de tráquea a 40 aumentos",
						mag: "40x"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-center text-sm text-muted",
						children: "40× — busca cilios y caliciformes"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeCard, {
						to: "/atlas",
						icon: BookOpen,
						title: "Atlas",
						body: "Cada lámina con su aumento, si es epitelio o conectivo, y los rasgos que la delatan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeCard, {
						to: "/practicar",
						icon: Target,
						title: "Practicar",
						body: "Campo sin etiquetas. Identifica el órgano o el tipo de epitelio. Se guarda tu racha.",
						meta: hydrated && quiz.answered ? `${quiz.correct}/${quiz.answered} aciertos` : void 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeCard, {
						to: "/identificar",
						icon: ScanSearch,
						title: "Identificar",
						body: "Sube una foto del microscopio y te dice órgano, si es epitelio u otro tejido, y de qué tipo."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-medium tracking-tight",
							children: FUNDAMENTALS.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
							children: FUNDAMENTALS.definition
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/guia",
								children: ["Ver guía", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: FUNDAMENTALS.four.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-elevated p-4 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: t.blurb
							})]
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2 border-t border-border pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
							children: "Tejido epitelial"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 text-sm leading-relaxed text-muted",
							children: FUNDAMENTALS.epithelial.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary/70" }), line]
							}, line))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-2 border-t border-border pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
							children: "Tejido conectivo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 text-sm leading-relaxed text-muted",
							children: FUNDAMENTALS.connective.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary/70" }), line]
							}, line))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium tracking-tight",
					children: "Tus láminas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/atlas",
					className: "text-sm text-muted hover:text-fg",
					children: "Ver todas"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
				children: ORGANS.map((o) => {
					const thumb = preferredSlide(o);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/atlas/$id",
						params: { id: o.id },
						className: "group block rounded-xl bg-surface p-2 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeView, {
							src: thumb.thumb,
							alt: o.name,
							size: "md"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 truncate text-center text-sm",
							children: o.name
						})]
					}) }, o.id);
				})
			})] })
		]
	});
}
function HomeCard({ to, icon: Icon, title, body, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-muted" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-xl font-medium",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
				children: body
			}),
			meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-mono text-xs tabular-nums text-faint",
				children: meta
			}) : null
		]
	});
}
//#endregion
export { Home as component };
