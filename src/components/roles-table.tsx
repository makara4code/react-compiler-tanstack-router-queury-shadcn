import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

const dummyRoles = [
  {
    id: "1",
    name: "Administrator",
    description: "Full access to all features and settings",
    permissions: ["all"],
    status: "active",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-03-20T10:30:00Z",
  },
  {
    id: "2",
    name: "Editor",
    description: "Can create and edit content",
    permissions: ["create", "edit", "view"],
    status: "active",
    created_at: "2024-01-02T00:00:00Z",
    updated_at: "2024-03-19T15:45:00Z",
  },
  {
    id: "3",
    name: "Viewer",
    description: "Can only view content",
    permissions: ["view"],
    status: "active",
    created_at: "2024-01-03T00:00:00Z",
    updated_at: "2024-03-18T09:20:00Z",
  },
  {
    id: "4",
    name: "Guest",
    description: "Limited access to public content",
    permissions: ["view_public"],
    status: "inactive",
    created_at: "2024-01-04T00:00:00Z",
    updated_at: "2024-03-15T14:10:00Z",
  },
];

export function RolesTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Role Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Permissions</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead className="w-[50px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyRoles.map((role) => (
            <TableRow key={role.id}>
              <TableCell className="font-medium">{role.name}</TableCell>
              <TableCell>{role.description}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {role.permissions.map((permission) => (
                    <Badge key={permission} variant="secondary">
                      {permission}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={role.status === "active" ? "default" : "secondary"}
                >
                  {role.status}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(role.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(role.updated_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 