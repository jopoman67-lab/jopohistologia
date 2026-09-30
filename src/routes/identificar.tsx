import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ImagePlus, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScopeView } from "@/components/scope-view";
import {
  identifySlide,
  type IdentifyResult,
} from "@/lib/identify";
import {
  MAG_LABEL,
  ORGANS,
  atlasThumb,
  getOrgan,
  type Mag,
} from "@/lib/slides-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/identificar")({
  component: Identificar,
});

async function fileToDataUrl(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file);
  const max = 768;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.72);
}

async function urlToDataUrl(url: string): Promise<string> {
  const res = await fetch(url);
  const blob = await res.blob();
  const file = new File([blob], "slide.jpg", { type: blob.type || "image/jpeg" });
  return fileToDataUrl(file);
}

function Identificar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<IdentifyResult | null>(null);

  async function run(dataUrl: string, hint?: string) {
    setBusy(true);
    setError(null);
    setResult(null);
    setPreview(dataUrl);
    try {
      const out = await identifySlide({ data: { image: dataUrl, hint } });
      if (!out.ok) setError(out.error);
      else setResult(out);
    } catch {
      setError("No se pudo analizar. Prueba otra foto.");
    } finally {
      setBusy(false);
    }
  }

  async function onFile(file: File | undefined) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Sube una foto de la lámina.");
      return;
    }
    const url = await fileToDataUrl(file);
    await run(url);
  }

  async function fromAtlas(src: string, name: string, mag: Mag) {
    const url = await urlToDataUrl(src);
    await run(url, `Es una foto de práctica, aumento ${mag}, posible ${name}.`);
  }

  const matched = result?.organId ? getOrgan(result.organId) : undefined;

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
          Identificar
        </p>
        <h1 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
          Enséñale un campo.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          Sube una foto del microscopio — o elige una de tus láminas — y te dice
          el órgano, si es epitelio u otro tejido, y el tipo.
        </p>
      </header>

      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="sr-only"
            onChange={(e) => void onFile(e.target.files?.[0])}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={cn(
              "flex min-h-44 w-full flex-col items-center justify-center gap-3 rounded-xl bg-surface px-4 py-8 text-center shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]",
            )}
          >
            {preview ? (
              <img
                src={preview}
                alt="Foto a identificar"
                className="slide-img max-h-72 w-full rounded-lg object-contain"
              />
            ) : (
              <>
                <ImagePlus className="size-6 text-muted" />
                <span className="text-sm text-muted">
                  Toca para subir o tomar una foto
                </span>
              </>
            )}
          </button>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => inputRef.current?.click()}
              disabled={busy}
              variant={preview ? "secondary" : "default"}
            >
              {preview ? "Otra foto" : "Subir foto"}
            </Button>
            {busy ? (
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <LoaderCircle className="size-4 animate-spin" />
                Leyendo el campo…
              </span>
            ) : null}
          </div>
          {error ? <p className="text-sm text-bad">{error}</p> : null}

          {result ? (
            <article className="space-y-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display text-2xl font-medium">
                  {result.organ}
                </h2>
                <Badge>{result.confidence}% confianza</Badge>
              </div>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-faint">Tejido</dt>
                  <dd className="capitalize">{result.tissue}</dd>
                </div>
                <div>
                  <dt className="text-faint">Aumento</dt>
                  <dd>{result.magnification}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-faint">Epitelio</dt>
                  <dd>{result.epithelium}</dd>
                </div>
              </dl>
              {result.clues.length ? (
                <ul className="space-y-1.5">
                  {result.clues.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                      {c}
                    </li>
                  ))}
                </ul>
              ) : null}
              {result.explanation ? (
                <p className="text-sm leading-relaxed text-muted">
                  {result.explanation}
                </p>
              ) : null}
              {result.differential ? (
                <p className="text-sm leading-relaxed text-muted">
                  Diagnóstico diferencial: {result.differential}
                </p>
              ) : null}
              {matched ? (
                <Button asChild>
                  <Link to="/atlas/$id" params={{ id: matched.id }}>
                    Abrir {matched.name} en el atlas
                  </Link>
                </Button>
              ) : null}
            </article>
          ) : null}
        </div>

        <div>
          <h2 className="font-display text-lg font-medium">
            O prueba con una lámina tuya
          </h2>
          <p className="mt-1 text-sm text-muted">
            Elige un campo del atlas para ver cómo lo lee.
          </p>
          <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {ORGANS.map((o) => {
              const s = atlasThumb(o);
              return (
                <li key={o.id}>
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => void fromAtlas(s.src, o.name, s.mag)}
                    className="w-full rounded-xl bg-surface p-2 text-left shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] disabled:opacity-50"
                  >
                    <ScopeView src={s.thumb} alt={o.name} size="sm" />
                    <p className="mt-6 truncate text-center text-xs">
                      {o.name} {MAG_LABEL[s.mag]}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
