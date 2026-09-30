import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/atlas")({ component: AtlasLayout });

function AtlasLayout() {
  return <Outlet />;
}
