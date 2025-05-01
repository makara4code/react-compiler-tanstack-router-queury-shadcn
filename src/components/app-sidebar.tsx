"use client";

import type * as React from "react";
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Map,
  PieChart,
  Settings2,
  Users,
} from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import type { UserPublic } from "@/client";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

// Define menu items with role-based access
const getMenuItems = (isSuperuser: boolean = false) => {
  const baseItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: false,
    },
    {
      title: "User Management",
      url: "/user-management",
      icon: Users,
      isActive: false,
      items: [
        {
          title: "Users",
          url: "/user-management/users",
        },
        {
          title: "Roles",
          url: "/user-management/roles",
        },
      ],
    },
    {
      title: "User Settings",
      url: "/settings",
      icon: Settings2,
      isActive: false,
    },
  ];

  // Add admin menu item for superusers
  if (isSuperuser) {
    baseItems.push({
      title: "Admin",
      url: "/admin",
      icon: Users,
      isActive: false,
      items: [
        {
          title: "System Settings",
          url: "/admin/settings",
        },
        {
          title: "Audit Logs",
          url: "/admin/logs",
        },
      ],
    });
  }

  return baseItems;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"]);
  const isSuperuser = currentUser?.is_superuser || false;

  // Get menu items based on user role
  const menuItems = getMenuItems(isSuperuser);

  // Mark active route
  const currentPath = router.state.location.pathname;
  const itemsWithActiveState = menuItems.map((item) => ({
    ...item,
    isActive:
      currentPath === item.url || currentPath.startsWith(`${item.url}/`),
    items: item.items?.map((subItem) => ({
      ...subItem,
      isActive:
        currentPath === subItem.url ||
        currentPath.startsWith(`${subItem.url}/`),
    })),
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={itemsWithActiveState} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
