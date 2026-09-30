import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScopeView } from "@/components/scope-view";
import {
  EPITHELIA,
  MAG_LABEL,
  ORGANS,
  classificationOf,
  epitheliumOf,
  getOrgan,
  type Mag,
  type Organ,
} from "@/lib/slides-data";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

type Mode = "mixto" | "organo" | "epitelio";
type Kind = "organo" | "epitelio";

type Question = {
  kind: Kind;
  organ: Organ;
  mag: Mag;
  prompt: string;
  options: string[];
  answer: string;
  hint: string;
};

type Search = { organ?: string; mode?: Mode };

export const Route = createFileRoute("/practicar")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    organ: typeof s.organ === "string" ? s.organ : undefined,
    mode:
      s.mode === "organo" || s.mode === "epitelio" || s.mode === "mixto"
        ? s.mode
        : undefined,
  }),
  component: Practicar,
});

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function pickMag(organ: Organ, kind: Kind): Mag {
  const mags = organ.slides.map((s) => s.mag);
  if (kind === "epitelio") {
    const prefer = mags.filter((m) => m === "40x" || m === "10x");
    return pick(prefer.length ? prefer : mags);
  }
  return pick(mags);
}

function makeQuestion(mode: Mode, lockId?: string): Question {
  const locked = lockId ? getOrgan(lockId) : undefined;
  const epithelial = ORGANS.filter((o) => o.epitheliumId);
  let kind: Kind = mode === "mixto" ? pick(["organo", "epitelio"]) : mode;

  if (kind === "epitelio" && locked && !locked.epitheliumId) {
    kind = "organo";
  }

  const organ =
    locked ?? (kind === "epitelio" ? pick(epithelial) : pick(ORGANS));
  const mag = pickMag(organ, kind);
  const epi = epitheliumOf(organ);

  if (kind === "organo") {
    const others = shuffle(ORGANS.filter((o) => o.id !== organ.id)).slice(0, 3);
    return {
      kind,
      organ,
      mag,
      prompt: "¿Qué órgano es este campo?",
      options: shuffle([organ.name, ...others.map((o) => o.name)]),
      answer: organ.name,
      hint: organ.clues[0] ?? epi?.howToSee[0] ?? "",
    };
  }

  const others = shuffle(EPITHELIA.filter((e) => e.id !== epi!.id)).slice(0, 3);
  return {
    kind: "epitelio",
    organ,
    mag,
    prompt: "¿Qué tipo de epitelio ves?",
    options: shuffle([epi!.shortName, ...others.map((e) => e.shortName)]),
    answer: epi!.shortName,
    hint: epi!.howToSee[0] ?? organ.clues[0] ?? "",
  };
}

function Practicar() {
  const search = Route.useSearch();
  const [mode, setMode] = useState<Mode>(search.mode ?? "mixto");
  const lockId = search.organ;
  const lock = lockId ? getOrgan(lockId) : undefined;
  const [q, setQ] = useState<Question | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const recordAnswer = useProgress((s) => s.recordAnswer);
  const quiz = useProgress((s) => s.quiz);
  const resetQuiz = useProgress((s) => s.resetQuiz);

  useEffect(() => {
    setQ(makeQuestion(mode, lockId));
    setPicked(null);
  }, [mode, lockId]);

  const resolved = picked !== null;
  const correct = picked === q?.answer;

  function choose(opt: string) {
    if (!q || picked) return;
    setPicked(opt);
    recordAnswer(q.organ.id, opt === q.answer);
  }

  function next() {
    setPicked(null);
    setQ(makeQuestion(mode, lockId));
  }

  const accuracy = useMemo(() => {
    if (!quiz.answered) return 0;
    return Math.round((quiz.correct / quiz.answered) * 100);
  }, [quiz]);

  if (!q) {
    return <div className="min-h-80" />;
  }

  const slide = q.organ.slides.find((s) => s.mag === q.mag) ?? q.organ.slides[0]!;
  const epi = epitheliumOf(q.organ);

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
            Practicar
          </p>
          <h1 className="mt-1 font-display text-3xl font-medium tracking-tight">
            {lock ? lock.name : "Campo sin etiqueta"}
          </h1>
          <p className="mt-2 max-w-lg text-sm text-muted">
            Mira el campo y di el órgano o el tipo de epitelio.
          </p>
        </div>
        <dl className="flex gap-6 text-sm">
          <div>
            <dt className="text-faint">Aciertos</dt>
            <dd className="font-mono tabular-nums">
              {quiz.correct}/{quiz.answered || 0}
            </dd>
          </div>
          <div>
            <dt className="text-faint">Racha</dt>
            <dd className="font-mono tabular-nums">{quiz.streak}</dd>
          </div>
          <div>
            <dt className="text-faint">%</dt>
            <dd className="font-mono tabular-nums">{accuracy}</dd>
          </div>
        </dl>
      </header>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["mixto", "Mixto"],
            ["organo", "Órgano"],
            ["epitelio", "Epitelio"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setMode(id)}
            className={cn(
              "h-10 rounded-full px-3.5 text-sm transition-colors duration-150",
              mode === id
                ? "bg-primary text-primary-fg"
                : "bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg",
            )}
          >
            {label}
          </button>
        ))}
        {lock ? (
          <Link
            to="/practicar"
            className="inline-flex h-10 items-center rounded-full px-3.5 text-sm text-muted hover:text-fg"
          >
            Todas las láminas
          </Link>
        ) : null}
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="pb-6">
          <ScopeView
            src={slide.src}
            alt="Campo de microscopio sin etiquetar"
            mag={q.mag}
          />
        </div>

        <div className="space-y-5">
          <p className="font-display text-2xl font-medium leading-snug">
            {q.prompt}
          </p>
          <p className="font-mono text-xs text-faint">{MAG_LABEL[q.mag]}</p>
          <ul className="space-y-2">
            {q.options.map((opt) => {
              const isAnswer = opt === q.answer;
              const isPick = opt === picked;
              return (
                <li key={opt}>
                  <button
                    type="button"
                    onClick={() => choose(opt)}
                    className={cn(
                      "w-full min-h-12 rounded-lg px-4 py-3 text-left text-sm leading-snug transition-colors duration-150",
                      !resolved &&
                        "bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
                      resolved && isAnswer && "bg-good/20 text-fg",
                      resolved && isPick && !isAnswer && "bg-bad/20 text-fg",
                      resolved && !isAnswer && !isPick && "bg-elevated text-faint",
                    )}
                  >
                    {opt}
                  </button>
                </li>
              );
            })}
          </ul>

          {resolved ? (
            <div className="space-y-3 rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
              <p className="text-sm font-medium">
                {correct ? "Correcto." : "No era esa."}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {q.organ.name}
                {epi ? ` · ${epi.shortName}` : ` · ${classificationOf(q.organ)}`}
                . {q.hint}
              </p>
              <div className="flex flex-wrap gap-2">
                <Button onClick={next}>Siguiente campo</Button>
                <Button asChild variant="ghost">
                  <Link to="/atlas/$id" params={{ id: q.organ.id }}>
                    Ver en el atlas
                  </Link>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={resetQuiz}
          className="min-h-11 text-xs text-faint hover:text-muted"
        >
          Reiniciar puntuación
        </button>
      </div>
    </div>
  );
}
