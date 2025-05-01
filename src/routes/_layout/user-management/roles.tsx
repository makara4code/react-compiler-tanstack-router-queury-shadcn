import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RolesTable } from "@/components/roles-table";

export const Route = createFileRoute("/_layout/user-management/roles")({
  component: RolesPage,
  loader: () => ({ crumb: "Roles Management" }),
});

function RolesPage() {
  return (
    <Card className="p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Roles Management</h1>
        <Button>Add Role</Button>
      </div>

      <div className="flex flex-col gap-4">
        <RolesTable />
      </div>
    </Card>
  );
}
