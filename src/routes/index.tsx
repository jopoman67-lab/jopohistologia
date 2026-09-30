import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ScanSearch, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScopeView } from "@/components/scope-view";
import {
  FIELD_COUNT,
  FUNDAMENTALS,
  ORGANS,
  preferredSlide,
} from "@/lib/slides-data";
import { useHydrated, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const seen = useProgress((s) => s.seen);
  const quiz = useProgress((s) => s.quiz);
  const hydrated = useHydrated();
  const seenCount = hydrated ? Object.keys(seen).length : 0;
  const featured = ORGANS.find((o) => o.id === "traquea") ?? ORGANS[0]!;
  const featuredSlide = preferredSlide(featured, "40x");

  return (
    <div className="stagger-in space-y-12">
      <section className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
            Práctica de tejidos
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Reconoce el órgano y si es epitelio u otro tejido.
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted">
            Tus láminas reales. Epitelios a 4×, 10× y 40×, más tendón, piel
            gruesa, cordón, mama y vena umbilical. Qué órgano es, qué tejido
            fundamental, y de qué tipo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/practicar">
                Practicar
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/atlas">Abrir atlas</Link>
            </Button>
          </div>
          <dl className="grid max-w-md grid-cols-3 gap-3 pt-2 text-sm">
            <div>
              <dt className="text-faint">Láminas</dt>
              <dd className="font-mono tabular-nums text-lg">{ORGANS.length}</dd>
            </div>
            <div>
              <dt className="text-faint">Campos</dt>
              <dd className="font-mono tabular-nums text-lg">{FIELD_COUNT}</dd>
            </div>
            <div>
              <dt className="text-faint">Vistos</dt>
              <dd className="font-mono tabular-nums text-lg">
                {seenCount}
                <span className="text-faint">/{FIELD_COUNT}</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative pb-6">
          <ScopeView
            src={featuredSlide.src}
            alt="Campo de tráquea a 40 aumentos"
            mag="40x"
          />
          <p className="mt-8 text-center text-sm text-muted">
            40× — busca cilios y caliciformes
          </p>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <HomeCard
          to="/atlas"
          icon={BookOpen}
          title="Atlas"
          body="Cada lámina con su aumento, si es epitelio o conectivo, y los rasgos que la delatan."
        />
        <HomeCard
          to="/practicar"
          icon={Target}
          title="Practicar"
          body="Campo sin etiquetas. Identifica el órgano o el tipo de epitelio. Se guarda tu racha."
          meta={
            hydrated && quiz.answered
              ? `${quiz.correct}/${quiz.answered} aciertos`
              : undefined
          }
        />
        <HomeCard
          to="/identificar"
          icon={ScanSearch}
          title="Identificar"
          body="Sube una foto del microscopio y te dice órgano, si es epitelio u otro tejido, y de qué tipo."
        />
      </section>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight">
              {FUNDAMENTALS.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {FUNDAMENTALS.definition}
            </p>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/guia">
              Ver guía
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FUNDAMENTALS.four.map((t) => (
            <li
              key={t.id}
              className="rounded-lg bg-elevated p-4 shadow-[var(--shadow-border)]"
            >
              <p className="text-sm font-medium">{t.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {t.blurb}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-2 border-t border-border pt-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
            Tejido epitelial
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted">
            {FUNDAMENTALS.epithelial.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 space-y-2 border-t border-border pt-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
            Tejido conectivo
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted">
            {FUNDAMENTALS.connective.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-medium tracking-tight">
            Tus láminas
          </h2>
          <Link to="/atlas" className="text-sm text-muted hover:text-fg">
            Ver todas
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ORGANS.map((o) => {
            const thumb = preferredSlide(o);
            return (
              <li key={o.id}>
                <Link
                  to="/atlas/$id"
                  params={{ id: o.id }}
                  className="group block rounded-xl bg-surface p-2 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <ScopeView src={thumb.thumb} alt={o.name} size="md" />
                  <p className="mt-7 truncate text-center text-sm">{o.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

function HomeCard({
  to,
  icon: Icon,
  title,
  body,
  meta,
}: {
  to: "/atlas" | "/practicar" | "/identificar";
  icon: typeof BookOpen;
  title: string;
  body: string;
  meta?: string;
}) {
  return (
    <Link
      to={to}
      className="flex flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
    >
      <Icon className="size-5 text-muted" />
      <h2 className="mt-4 font-display text-xl font-medium">{title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{body}</p>
      {meta ? (
        <p className="mt-3 font-mono text-xs tabular-nums text-faint">{meta}</p>
      ) : null}
    </Link>
  );
}
