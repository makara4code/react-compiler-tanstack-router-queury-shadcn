import { createFileRoute } from "@tanstack/react-router";

import useAuth from "@/hooks/useAuth";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});

function Dashboard() {
  const { user: currentUser } = useAuth();

  return <>Hi, {currentUser?.full_name || currentUser?.email} 👋🏼</>;
}
