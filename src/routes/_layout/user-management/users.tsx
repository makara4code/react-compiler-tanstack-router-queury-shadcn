import { createFileRoute } from "@tanstack/react-router";
import { redirect } from "@tanstack/react-router";
import { isLoggedIn } from "@/hooks/useAuth";
import { Card } from "@/components/ui/card";
import { UsersTable } from "@/components/users-table";

export const Route = createFileRoute("/_layout/user-management/users")({
  component: UsersPage,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  loader: () => ({ crumb: "Users Management" }),
});

export default function UsersPage() {
  return (
    <Card className="p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Users Management</h1>
      </div>

      <div className="flex flex-col gap-4">
        <UsersTable />
      </div>
    </Card>
  );
}
