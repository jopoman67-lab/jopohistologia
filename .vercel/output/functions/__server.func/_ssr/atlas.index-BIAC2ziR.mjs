import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ORGANS, d as SYSTEMS, f as TISSUE_FILTERS, h as classificationOf, m as atlasThumb, n as EPITHELIA, p as TISSUE_LABEL, t as CONNECTIVES } from "./slides-data-J3aoUADv.mjs";
import { i as cn } from "./router-DzFtP8hj.mjs";
import { t as Badge } from "./badge-rEhNYcOG.mjs";
import { t as ScopeView } from "./scope-view-Xg7waMFE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atlas.index-BIAC2ziR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Atlas() {
	const [system, setSystem] = (0, import_react.useState)("todos");
	const [tissue, setTissue] = (0, import_react.useState)("todos");
	const list = ORGANS.filter((o) => {
		if (system !== "todos" && o.systemId !== system) return false;
		if (tissue !== "todos" && o.tissue !== tissue) return false;
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-faint",
						children: "Atlas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-medium tracking-tight md:text-4xl",
						children: "Órgano, y si es epitelio u otro tejido."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-sm leading-relaxed text-muted",
						children: "Doce láminas de tu práctica: epitelios, conectivo denso, adiposo, gelatina de Wharton y pared vascular. Abre un campo y lee las pistas."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-faint",
					children: "Tejido"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: TISSUE_FILTERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: tissue === t.id,
						onClick: () => setTissue(t.id),
						children: t.name
					}, t.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-faint",
					children: "Sistema"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: system === "todos",
						onClick: () => setSystem("todos"),
						children: "Todos"
					}), SYSTEMS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: system === s.id,
						onClick: () => setSystem(s.id),
						children: s.name
					}, s.id))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((o) => {
					const thumb = atlasThumb(o);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/atlas/$id",
						params: { id: o.id },
						className: "flex h-full gap-4 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeView, {
							src: thumb.thumb,
							alt: o.name,
							size: "sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 py-1 pr-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-faint",
									children: o.system
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-medium leading-tight",
									children: o.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-snug text-muted",
									children: classificationOf(o)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: TISSUE_LABEL[o.tissue] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
										o.slides.length,
										" ",
										o.slides.length === 1 ? "campo" : "campos"
									] })]
								})
							]
						})]
					}) }, o.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-medium",
					children: "Tipos en esta práctica"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 divide-y divide-border",
					children: [EPITHELIA.map((e) => {
						const organs = ORGANS.filter((o) => o.epitheliumId === e.id);
						if (!organs.length) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: e.shortName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-faint",
								children: organs.map((o) => o.name).join(", ")
							})]
						}, e.id);
					}), CONNECTIVES.map((c) => {
						const organs = ORGANS.filter((o) => o.connectiveId === c.id);
						if (!organs.length) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: c.shortName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-faint",
								children: organs.map((o) => o.name).join(", ")
							})]
						}, c.id);
					})]
				})]
			})
		]
	});
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 rounded-full px-3.5 text-sm transition-colors duration-150", active ? "bg-primary text-primary-fg" : "bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg"),
		children
	});
}
//#endregion
export { Atlas as component };
