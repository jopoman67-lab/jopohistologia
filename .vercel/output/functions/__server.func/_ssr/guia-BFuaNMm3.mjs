import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as LAYER_LABEL, c as ORGANS, i as FUNDAMENTALS, l as SHAPE_LABEL, m as atlasThumb, n as EPITHELIA, t as CONNECTIVES } from "./slides-data-J3aoUADv.mjs";
import { t as Badge } from "./badge-rEhNYcOG.mjs";
import { t as ScopeView } from "./scope-view-Xg7waMFE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guia-BFuaNMm3.js
var import_jsx_runtime = require_jsx_runtime();
function Guia() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-faint",
						children: "Guía"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-medium tracking-tight md:text-4xl",
						children: "Cómo se clasifica lo que ves."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm leading-relaxed text-muted",
						children: "Primero el tejido fundamental: ¿epitelio, conectivo, muscular o nervioso? Luego el órgano. Si es epitelio: capas, forma apical, especializaciones. Si es conectivo: denso, mucoso o adiposo."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: FUNDAMENTALS.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
						children: FUNDAMENTALS.definition
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: FUNDAMENTALS.four.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-elevated p-4 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs tabular-nums text-faint",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: t.blurb
								})
							]
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
							children: "Epitelial"
						}), FUNDAMENTALS.epithelial.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: line
						}, line))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-2 border-t border-border pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
							children: "Conectivo"
						}), FUNDAMENTALS.connective.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: line
						}, line))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium",
					children: "Tres preguntas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-3 md:grid-cols-3",
					children: [
						{
							n: "1",
							q: "¿Cuántas capas?",
							a: "Simple, estratificado, seudoestratificado o de transición."
						},
						{
							n: "2",
							q: "¿Qué forma tiene la célula apical?",
							a: "Plana, cúbica, cilíndrica o en cúpula (urotelio)."
						},
						{
							n: "3",
							q: "¿Hay especializaciones?",
							a: "Cilios, estereocilios, microvellosidades, caliciformes, queratina."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-faint",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-medium",
								children: s.q
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: s.a
							})
						]
					}, s.n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium",
					children: "Los epitelios de tus láminas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: EPITHELIA.map((e) => {
						const organs = ORGANS.filter((o) => o.epitheliumId === e.id);
						if (!organs.length) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:grid-cols-[7.5rem_1fr] md:p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 md:flex-col",
								children: organs.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/atlas/$id",
									params: { id: o.id },
									className: "block w-24 shrink-0 md:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeView, {
										src: atlasThumb(o).thumb,
										alt: o.name,
										size: "sm"
									})
								}, o.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 pt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-medium leading-snug",
										children: e.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex flex-wrap gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: LAYER_LABEL[e.layers] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: SHAPE_LABEL[e.shape] }),
											organs.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: o.name }, o.id))
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: e.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-1.5",
										children: e.howToSee.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3 text-sm leading-relaxed text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary/70" }), h]
										}, h))
									})
								]
							})]
						}, e.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium",
					children: "Los conectivos de tus láminas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: CONNECTIVES.map((c) => {
						const organs = ORGANS.filter((o) => o.connectiveId === c.id);
						if (!organs.length) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:grid-cols-[7.5rem_1fr] md:p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 md:flex-col",
								children: organs.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/atlas/$id",
									params: { id: o.id },
									className: "block w-24 shrink-0 md:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeView, {
										src: atlasThumb(o).thumb,
										alt: o.name,
										size: "sm"
									})
								}, o.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 pt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-medium leading-snug",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex flex-wrap gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Conectivo" }), organs.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: o.name }, o.id))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: c.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-1.5",
										children: c.howToSee.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3 text-sm leading-relaxed text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary/70" }), h]
										}, h))
									})
								]
							})]
						}, c.id);
					})
				})]
			})
		]
	});
}
//#endregion
export { Guia as component };
