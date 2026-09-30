import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./router-DzFtP8hj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scope-view-Xg7waMFE.js
var import_jsx_runtime = require_jsx_runtime();
function ScopeView({ src, alt, mag, className, size = "lg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("relative mx-auto", size === "sm" ? "w-28 h-28" : size === "md" ? "w-full max-w-56 aspect-square" : "w-full max-w-md aspect-square", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eyepiece absolute inset-0 rounded-full p-[11px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "slide-img h-full w-full rounded-full object-cover",
				draggable: false
			})
		}), mag ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "absolute -bottom-1 left-1/2 z-10 -translate-x-1/2 translate-y-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs tabular-nums tracking-wide text-faint",
				children: mag === "4x" ? "4×" : mag === "10x" ? "10×" : "40×"
			})
		}) : null]
	});
}
//#endregion
export { ScopeView as t };
