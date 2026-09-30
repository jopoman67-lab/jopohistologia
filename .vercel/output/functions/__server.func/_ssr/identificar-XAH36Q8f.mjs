import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ORGANS, m as atlasThumb, s as MAG_LABEL, v as getOrgan } from "./slides-data-J3aoUADv.mjs";
import { a as ImagePlus, i as LoaderCircle } from "../_libs/lucide-react.mjs";
import { i as cn } from "./router-DzFtP8hj.mjs";
import { t as Badge } from "./badge-rEhNYcOG.mjs";
import { t as Button } from "./button-CrBMA0eG.mjs";
import { t as ScopeView } from "./scope-view-Xg7waMFE.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/identificar-XAH36Q8f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var identifySlide = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("76df583f0db3ca8faf8e35da2a5f7c278951c5e8d0e9cf5576e42890592d7d3b"));
async function fileToDataUrl(file) {
	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, 768 / Math.max(bitmap.width, bitmap.height));
	const canvas = document.createElement("canvas");
	canvas.width = Math.max(1, Math.round(bitmap.width * scale));
	canvas.height = Math.max(1, Math.round(bitmap.height * scale));
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("canvas");
	ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
	bitmap.close();
	return canvas.toDataURL("image/jpeg", .72);
}
async function urlToDataUrl(url) {
	const blob = await (await fetch(url)).blob();
	return fileToDataUrl(new File([blob], "slide.jpg", { type: blob.type || "image/jpeg" }));
}
function Identificar() {
	const inputRef = (0, import_react.useRef)(null);
	const [preview, setPreview] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [result, setResult] = (0, import_react.useState)(null);
	async function run(dataUrl, hint) {
		setBusy(true);
		setError(null);
		setResult(null);
		setPreview(dataUrl);
		try {
			const out = await identifySlide({ data: {
				image: dataUrl,
				hint
			} });
			if (!out.ok) setError(out.error);
			else setResult(out);
		} catch {
			setError("No se pudo analizar. Prueba otra foto.");
		} finally {
			setBusy(false);
		}
	}
	async function onFile(file) {
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			setError("Sube una foto de la lámina.");
			return;
		}
		await run(await fileToDataUrl(file));
	}
	async function fromAtlas(src, name, mag) {
		await run(await urlToDataUrl(src), `Es una foto de práctica, aumento ${mag}, posible ${name}.`);
	}
	const matched = result?.organId ? getOrgan(result.organId) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.18em] text-faint",
					children: "Identificar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium tracking-tight md:text-4xl",
					children: "Enséñale un campo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-sm leading-relaxed text-muted",
					children: "Sube una foto del microscopio — o elige una de tus láminas — y te dice el órgano, si es epitelio u otro tejido, y el tipo."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "file",
						accept: "image/*",
						capture: "environment",
						className: "sr-only",
						onChange: (e) => void onFile(e.target.files?.[0])
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => inputRef.current?.click(),
						className: cn("flex min-h-44 w-full flex-col items-center justify-center gap-3 rounded-xl bg-surface px-4 py-8 text-center shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"),
						children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: preview,
							alt: "Foto a identificar",
							className: "slide-img max-h-72 w-full rounded-lg object-contain"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-6 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: "Toca para subir o tomar una foto"
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => inputRef.current?.click(),
							disabled: busy,
							variant: preview ? "secondary" : "default",
							children: preview ? "Otra foto" : "Subir foto"
						}), busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Leyendo el campo…"]
						}) : null]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-bad",
						children: error
					}) : null,
					result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "space-y-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-medium",
									children: result.organ
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [result.confidence, "% confianza"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid grid-cols-2 gap-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "Tejido"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "capitalize",
										children: result.tissue
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "Aumento"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: result.magnification })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-faint",
											children: "Epitelio"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: result.epithelium })]
									})
								]
							}),
							result.clues.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1.5",
								children: result.clues.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm leading-relaxed text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary/70" }), c]
								}, c))
							}) : null,
							result.explanation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted",
								children: result.explanation
							}) : null,
							result.differential ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-relaxed text-muted",
								children: ["Diagnóstico diferencial: ", result.differential]
							}) : null,
							matched ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/atlas/$id",
									params: { id: matched.id },
									children: [
										"Abrir ",
										matched.name,
										" en el atlas"
									]
								})
							}) : null
						]
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium",
					children: "O prueba con una lámina tuya"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Elige un campo del atlas para ver cómo lo lee."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4",
					children: ORGANS.map((o) => {
						const s = atlasThumb(o);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: busy,
							onClick: () => void fromAtlas(s.src, o.name, s.mag),
							className: "w-full rounded-xl bg-surface p-2 text-left shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopeView, {
								src: s.thumb,
								alt: o.name,
								size: "sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 truncate text-center text-xs",
								children: [
									o.name,
									" ",
									MAG_LABEL[s.mag]
								]
							})]
						}) }, o.id);
					})
				})
			] })]
		})]
	});
}
//#endregion
export { Identificar as component };
