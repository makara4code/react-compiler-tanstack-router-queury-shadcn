import { Home, Users, Settings, FileText, BarChart } from "lucide-react";
import { NavMain } from "./NavMain";

export function Sidebar() {
  const navigationItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "User Management",
      url: "/users",
      icon: Users,
      items: [
        { title: "All Users", url: "/users" },
        { title: "Roles", url: "/users/roles" },
        { title: "Permissions", url: "/users/permissions" },
      ],
    },
    {
      title: "Content",
      url: "/content",
      icon: FileText,
      items: [
        { title: "Pages", url: "/content/pages" },
        { title: "Posts", url: "/content/posts" },
        { title: "Media", url: "/content/media" },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <h1 className="text-lg font-semibold">Snail Studio</h1>
      </div>
      <div className="flex-1 overflow-auto p-2">
        <NavMain items={navigationItems} />
      </div>
    </div>
  );
} 