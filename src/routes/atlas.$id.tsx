import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScopeView } from "@/components/scope-view";
import {
  LAYER_LABEL,
  MAG_HINT,
  MAG_LABEL,
  ORGANS,
  SHAPE_LABEL,
  SPECIAL_LABEL,
  TISSUE_LABEL,
  classificationOf,
  connectiveOf,
  epitheliumOf,
  type Mag,
} from "@/lib/slides-data";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/atlas/$id")({
  component: OrganPage,
});

function OrganPage() {
  const { id } = Route.useParams();
  const organ = ORGANS.find((o) => o.id === id);
  if (!organ) throw notFound();
  const epi = epitheliumOf(organ);
  const con = connectiveOf(organ);
  const [mag, setMag] = useState<Mag>(organ.slides[0]!.mag);
  const markSeen = useProgress((s) => s.markSeen);
  const slide = organ.slides.find((s) => s.mag === mag) ?? organ.slides[0]!;
  const shownMag = slide.mag;
  const idx = ORGANS.findIndex((o) => o.id === organ.id);
  const prev = ORGANS[(idx - 1 + ORGANS.length) % ORGANS.length]!;
  const next = ORGANS[(idx + 1) % ORGANS.length]!;

  useEffect(() => {
    const first = organ.slides[0]!.mag;
    if (!organ.slides.some((s) => s.mag === mag)) {
      setMag(first);
      return;
    }
    markSeen(organ.id, mag);
  }, [organ, mag, markSeen]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-3">
        <Link
          to="/atlas"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          Atlas
        </Link>
        <p className="text-xs text-faint">{organ.latin}</p>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="pb-8">
          <ScopeView
            src={slide.src}
            alt={`${organ.name} ${MAG_LABEL[shownMag]}`}
            mag={shownMag}
          />
          {organ.slides.length > 1 ? (
            <div className="mx-auto mt-10 flex max-w-md justify-center gap-2">
              {organ.slides.map((s) => (
                <button
                  key={s.mag}
                  type="button"
                  onClick={() => setMag(s.mag)}
                  className={cn(
                    "min-h-11 rounded-full px-4 text-sm transition-colors duration-150",
                    shownMag === s.mag
                      ? "bg-primary text-primary-fg"
                      : "bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg",
                  )}
                >
                  {MAG_LABEL[s.mag]}
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-10" />
          )}
          <p className="mt-4 text-center text-sm text-muted">{slide.lookFor}</p>
          <p className="mt-1 text-center text-xs text-faint">{MAG_HINT[shownMag]}</p>
        </div>

        <div className="space-y-6">
          <header>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
              {organ.system}
            </p>
            <h1 className="mt-1 font-display text-4xl font-medium tracking-tight">
              {organ.name}
            </h1>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>{TISSUE_LABEL[organ.tissue]}</Badge>
              <Badge>{classificationOf(organ)}</Badge>
            </div>
          </header>

          <p className="text-sm leading-relaxed text-muted">{organ.architecture}</p>
          <p className="text-sm leading-relaxed text-muted">{organ.function}</p>

          {epi ? (
            <section className="rounded-lg bg-elevated p-4 shadow-[var(--shadow-border)]">
              <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
                Clasificación del epitelio
              </h2>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-faint">Capas</dt>
                  <dd>{LAYER_LABEL[epi.layers]}</dd>
                </div>
                <div>
                  <dt className="text-faint">Forma apical</dt>
                  <dd>{SHAPE_LABEL[epi.shape]}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-faint">Especializaciones</dt>
                  <dd>
                    {epi.special.length
                      ? epi.special.map((s) => SPECIAL_LABEL[s]).join(" · ")
                      : "Ninguna llamativa"}
                  </dd>
                </div>
              </dl>
              <p className="mt-3 text-sm leading-relaxed text-muted">{epi.summary}</p>
            </section>
          ) : null}

          {con ? (
            <section className="rounded-lg bg-elevated p-4 shadow-[var(--shadow-border)]">
              <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
                Clasificación del conectivo
              </h2>
              <p className="mt-2 font-medium">{con.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{con.summary}</p>
              <ul className="mt-3 space-y-1.5">
                {con.howToSee.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section>
            <h2 className="font-display text-lg font-medium">Cómo reconocerlo</h2>
            <ul className="mt-3 space-y-2">
              {organ.clues.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-medium">No confundir con</h2>
            <ul className="mt-3 space-y-2">
              {organ.pitfalls.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-bad/80" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <Button asChild>
            <Link to="/practicar" search={{ organ: organ.id }}>
              Practicar esta lámina
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <nav className="flex items-center justify-between border-t border-border pt-5">
        <Link
          to="/atlas/$id"
          params={{ id: prev.id }}
          className="min-h-11 text-sm text-muted hover:text-fg"
        >
          ← {prev.name}
        </Link>
        <Link
          to="/atlas/$id"
          params={{ id: next.id }}
          className="min-h-11 text-sm text-muted hover:text-fg"
        >
          {next.name} →
        </Link>
      </nav>
    </div>
  );
}
