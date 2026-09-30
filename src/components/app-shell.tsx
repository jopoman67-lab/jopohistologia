import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Grid2x2, ScanSearch, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Inicio", icon: BookOpen },
  { to: "/atlas", label: "Atlas", icon: Grid2x2 },
  { to: "/practicar", label: "Practicar", icon: Target },
  { to: "/identificar", label: "Identificar", icon: ScanSearch },
] as const;

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="lab-grid relative min-h-dvh">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_-10%,rgb(255_255_255/0.04),transparent_55%)]" />
      <header className="sticky top-0 z-30 border-b border-border/80 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-lg font-medium tracking-tight">
              Lámina
            </span>
            <span className="hidden text-xs text-faint sm:inline">
              Histología
            </span>
          </Link>
          <Link
            to="/guia"
            className="text-sm text-muted hover:text-fg md:hidden"
          >
            Guía
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const active = isActive(pathname, item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors duration-150",
                    active
                      ? "bg-elevated text-fg"
                      : "text-muted hover:bg-elevated/70 hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/guia"
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors duration-150",
                pathname === "/guia"
                  ? "bg-elevated text-fg"
                  : "text-muted hover:bg-elevated/70 hover:text-fg",
              )}
            >
              Guía
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-6xl px-4 pb-28 pt-6 md:pb-16 md:pt-10">
        {children}
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg/92 backdrop-blur-md md:hidden">
        <ul className="mx-auto grid max-w-lg grid-cols-4 px-2 pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-md text-[11px]",
                    active ? "text-fg" : "text-faint",
                  )}
                >
                  <Icon className="size-5" strokeWidth={active ? 2.2 : 1.8} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
