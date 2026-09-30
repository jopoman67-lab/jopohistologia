import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { ScopeView } from "@/components/scope-view";
import {
  CONNECTIVES,
  EPITHELIA,
  FUNDAMENTALS,
  ORGANS,
  LAYER_LABEL,
  SHAPE_LABEL,
  atlasThumb,
} from "@/lib/slides-data";

export const Route = createFileRoute("/guia")({ component: Guia });

function Guia() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
          Guía
        </p>
        <h1 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
          Cómo se clasifica lo que ves.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Primero el tejido fundamental: ¿epitelio, conectivo, muscular o
          nervioso? Luego el órgano. Si es epitelio: capas, forma apical,
          especializaciones. Si es conectivo: denso, mucoso o adiposo.
        </p>
      </header>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7">
        <h2 className="font-display text-2xl font-medium">
          {FUNDAMENTALS.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {FUNDAMENTALS.definition}
        </p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {FUNDAMENTALS.four.map((t, i) => (
            <li
              key={t.id}
              className="rounded-lg bg-elevated p-4 shadow-[var(--shadow-border)]"
            >
              <p className="font-mono text-xs tabular-nums text-faint">
                0{i + 1}
              </p>
              <p className="mt-1 font-medium">{t.name}</p>
              <p className="mt-1 text-sm text-muted">{t.blurb}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
            Epitelial
          </p>
          {FUNDAMENTALS.epithelial.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-muted">
              {line}
            </p>
          ))}
        </div>
        <div className="mt-5 space-y-2 border-t border-border pt-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
            Conectivo
          </p>
          {FUNDAMENTALS.connective.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-muted">
              {line}
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium">Tres preguntas</h2>
        <ol className="grid gap-3 md:grid-cols-3">
          {[
            {
              n: "1",
              q: "¿Cuántas capas?",
              a: "Simple, estratificado, seudoestratificado o de transición.",
            },
            {
              n: "2",
              q: "¿Qué forma tiene la célula apical?",
              a: "Plana, cúbica, cilíndrica o en cúpula (urotelio).",
            },
            {
              n: "3",
              q: "¿Hay especializaciones?",
              a: "Cilios, estereocilios, microvellosidades, caliciformes, queratina.",
            },
          ].map((s) => (
            <li
              key={s.n}
              className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]"
            >
              <p className="font-mono text-xs text-faint">{s.n}</p>
              <p className="mt-2 font-medium">{s.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.a}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium">
          Los epitelios de tus láminas
        </h2>
        <ul className="space-y-4">
          {EPITHELIA.map((e) => {
            const organs = ORGANS.filter((o) => o.epitheliumId === e.id);
            if (!organs.length) return null;
            return (
              <li
                key={e.id}
                className="grid gap-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:grid-cols-[7.5rem_1fr] md:p-5"
              >
                <div className="flex gap-2 md:flex-col">
                  {organs.map((o) => (
                    <Link
                      key={o.id}
                      to="/atlas/$id"
                      params={{ id: o.id }}
                      className="block w-24 shrink-0 md:w-auto"
                    >
                      <ScopeView
                        src={atlasThumb(o).thumb}
                        alt={o.name}
                        size="sm"
                      />
                    </Link>
                  ))}
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="font-display text-xl font-medium leading-snug">
                    {e.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <Badge>{LAYER_LABEL[e.layers]}</Badge>
                    <Badge>{SHAPE_LABEL[e.shape]}</Badge>
                    {organs.map((o) => (
                      <Badge key={o.id}>{o.name}</Badge>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {e.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {e.howToSee.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium">
          Los conectivos de tus láminas
        </h2>
        <ul className="space-y-4">
          {CONNECTIVES.map((c) => {
            const organs = ORGANS.filter((o) => o.connectiveId === c.id);
            if (!organs.length) return null;
            return (
              <li
                key={c.id}
                className="grid gap-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:grid-cols-[7.5rem_1fr] md:p-5"
              >
                <div className="flex gap-2 md:flex-col">
                  {organs.map((o) => (
                    <Link
                      key={o.id}
                      to="/atlas/$id"
                      params={{ id: o.id }}
                      className="block w-24 shrink-0 md:w-auto"
                    >
                      <ScopeView
                        src={atlasThumb(o).thumb}
                        alt={o.name}
                        size="sm"
                      />
                    </Link>
                  ))}
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="font-display text-xl font-medium leading-snug">
                    {c.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <Badge>Conectivo</Badge>
                    {organs.map((o) => (
                      <Badge key={o.id}>{o.name}</Badge>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {c.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {c.howToSee.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
