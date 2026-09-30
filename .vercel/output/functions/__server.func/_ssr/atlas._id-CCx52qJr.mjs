import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, Y as notFound, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as epitheliumOf, a as LAYER_LABEL, c as ORGANS, g as connectiveOf, h as classificationOf, l as SHAPE_LABEL, o as MAG_HINT, p as TISSUE_LABEL, s as MAG_LABEL, u as SPECIAL_LABEL } from "./slides-data-J3aoUADv.mjs";
import { c as ArrowRight, l as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as cn, n as Route } from "./router-DzFtP8hj.mjs";
import { t as Badge } from "./badge-rEhNYcOG.mjs";
import { t as Button } from "./button-CrBMA0eG.mjs";
import { t as ScopeView } from "./scope-view-Xg7waMFE.mjs";
import { n as useProgress } from "./progress-BO_eQAYX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atlas._id-CCx52qJr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrganPage() {
	const { id } = Route.useParams();
	const organ = ORGANS.find((o) => o.id === id);
	if (!organ) throw notFound();
	const epi = epitheliumOf(organ);
	const con = connectiveOf(organ);
	const [mag, setMag] = (0, import_react.useState)(organ.slides[0].mag);
	const markSeen = useProgress((s) => s.markSeen);
	const slide = organ.slides.find((s) => s.mag === mag) ?? organ.slides[0];
	const shownMag = slide.mag;
	const idx = ORGANS.findIndex((o) => o.id === organ.id);
	const prev = ORGANS[(idx - 1 + ORGANS.length) % ORGANS.length];
	const next = ORGANS[(idx + 1) % ORGANS.length];
	(0, import_react.useEffect)(() => {
		const first = organ.slides[0].mag;
		if (!organ.slides.some((s) => s.mag === mag)) {
			setMag(first);
			return;
		}
		markSeen(organ.id, mag);
	}, [
		organ,
		mag,
		markSeen
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/atlas",
					className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Atlas"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-faint",
					children: organ.latin
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeView, {
							src: slide.src,
							alt: `${organ.name} ${MAG_LABEL[shownMag]}`,
							mag: shownMag
						}),
						organ.slides.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mt-10 flex max-w-md justify-center gap-2",
							children: organ.slides.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMag(s.mag),
								className: cn("min-h-11 rounded-full px-4 text-sm transition-colors duration-150", shownMag === s.mag ? "bg-primary text-primary-fg" : "bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg"),
								children: MAG_LABEL[s.mag]
							}, s.mag))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-center text-sm text-muted",
							children: slide.lookFor
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-center text-xs text-faint",
							children: MAG_HINT[shownMag]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
								children: organ.system
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-4xl font-medium tracking-tight",
								children: organ.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: TISSUE_LABEL[organ.tissue] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: classificationOf(organ) })]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: organ.architecture
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: organ.function
						}),
						epi ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-lg bg-elevated p-4 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
									children: "Clasificación del epitelio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-3 grid grid-cols-2 gap-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-faint",
											children: "Capas"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: LAYER_LABEL[epi.layers] })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-faint",
											children: "Forma apical"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: SHAPE_LABEL[epi.shape] })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-faint",
												children: "Especializaciones"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: epi.special.length ? epi.special.map((s) => SPECIAL_LABEL[s]).join(" · ") : "Ninguna llamativa" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: epi.summary
								})
							]
						}) : null,
						con ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-lg bg-elevated p-4 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
									children: "Clasificación del conectivo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-medium",
									children: con.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: con.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1.5",
									children: con.howToSee.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm leading-relaxed text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary/70" }), h]
									}, h))
								})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-medium",
							children: "Cómo reconocerlo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: organ.clues.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm leading-relaxed text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary/70" }), c]
							}, c))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-medium",
							children: "No confundir con"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: organ.pitfalls.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm leading-relaxed text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-bad/80" }), c]
							}, c))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/practicar",
								search: { organ: organ.id },
								children: ["Practicar esta lámina", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center justify-between border-t border-border pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/atlas/$id",
					params: { id: prev.id },
					className: "min-h-11 text-sm text-muted hover:text-fg",
					children: ["← ", prev.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/atlas/$id",
					params: { id: next.id },
					className: "min-h-11 text-sm text-muted hover:text-fg",
					children: [next.name, " →"]
				})]
			})
		]
	});
}
//#endregion
export { OrganPage as component };
