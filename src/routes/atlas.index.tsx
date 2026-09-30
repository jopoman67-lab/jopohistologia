import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ScopeView } from "@/components/scope-view";
import {
  CONNECTIVES,
  EPITHELIA,
  ORGANS,
  SYSTEMS,
  TISSUE_FILTERS,
  TISSUE_LABEL,
  atlasThumb,
  classificationOf,
  type TissueKind,
} from "@/lib/slides-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/atlas/")({ component: Atlas });

function Atlas() {
  const [system, setSystem] = useState<string>("todos");
  const [tissue, setTissue] = useState<TissueKind | "todos">("todos");
  const list = ORGANS.filter((o) => {
    if (system !== "todos" && o.systemId !== system) return false;
    if (tissue !== "todos" && o.tissue !== tissue) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
          Atlas
        </p>
        <h1 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
          Órgano, y si es epitelio u otro tejido.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          Doce láminas de tu práctica: epitelios, conectivo denso, adiposo,
          gelatina de Wharton y pared vascular. Abre un campo y lee las pistas.
        </p>
      </header>

      <div className="space-y-2">
        <p className="text-xs text-faint">Tejido</p>
        <div className="flex flex-wrap gap-2">
          {TISSUE_FILTERS.map((t) => (
            <FilterChip
              key={t.id}
              active={tissue === t.id}
              onClick={() => setTissue(t.id)}
            >
              {t.name}
            </FilterChip>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-faint">Sistema</p>
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={system === "todos"}
            onClick={() => setSystem("todos")}
          >
            Todos
          </FilterChip>
          {SYSTEMS.map((s) => (
            <FilterChip
              key={s.id}
              active={system === s.id}
              onClick={() => setSystem(s.id)}
            >
              {s.name}
            </FilterChip>
          ))}
        </div>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((o) => {
          const thumb = atlasThumb(o);
          return (
            <li key={o.id}>
              <Link
                to="/atlas/$id"
                params={{ id: o.id }}
                className="flex h-full gap-4 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <ScopeView src={thumb.thumb} alt={o.name} size="sm" />
                <div className="min-w-0 flex-1 py-1 pr-1">
                  <p className="text-xs text-faint">{o.system}</p>
                  <h2 className="font-display text-xl font-medium leading-tight">
                    {o.name}
                  </h2>
                  <p className="mt-2 text-sm leading-snug text-muted">
                    {classificationOf(o)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <Badge>{TISSUE_LABEL[o.tissue]}</Badge>
                    <Badge>
                      {o.slides.length} {o.slides.length === 1 ? "campo" : "campos"}
                    </Badge>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-xl font-medium">
          Tipos en esta práctica
        </h2>
        <ul className="mt-4 divide-y divide-border">
          {EPITHELIA.map((e) => {
            const organs = ORGANS.filter((o) => o.epitheliumId === e.id);
            if (!organs.length) return null;
            return (
              <li
                key={e.id}
                className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3"
              >
                <span className="text-sm">{e.shortName}</span>
                <span className="text-sm text-faint">
                  {organs.map((o) => o.name).join(", ")}
                </span>
              </li>
            );
          })}
          {CONNECTIVES.map((c) => {
            const organs = ORGANS.filter((o) => o.connectiveId === c.id);
            if (!organs.length) return null;
            return (
              <li
                key={c.id}
                className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3"
              >
                <span className="text-sm">{c.shortName}</span>
                <span className="text-sm text-faint">
                  {organs.map((o) => o.name).join(", ")}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 rounded-full px-3.5 text-sm transition-colors duration-150",
        active
          ? "bg-primary text-primary-fg"
          : "bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
