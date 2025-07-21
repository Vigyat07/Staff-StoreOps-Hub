'use client';

import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import {
  Building2,
  ClipboardList,
  Home,
  Users,
  Store as StoreIcon,
} from "lucide-react"

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { Header } from "@/components/header";
import React, { useEffect } from "react";

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home, roles: ['admin', 'store_manager'] },
  { href: '/dashboard/tasks', label: 'Tasks', icon: ClipboardList, roles: ['admin', 'store_manager'] },
  { href: '/dashboard/employees', label: 'Employees', icon: Users, roles: ['admin'] },
  { href: '/dashboard/stores', label: 'Stores', icon: StoreIcon, roles: ['admin'] },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <p>Loading...</p>
        </div>
    )
  }

  const accessibleNavItems = navItems.filter(item => item.roles.includes(user.role));

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Button variant="ghost" className="h-auto justify-start p-2 text-base font-bold">
            <Building2 className="mr-2 h-6 w-6" />
            <span>Belc Board</span>
          </Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {accessibleNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                      isActive={pathname === item.href}
                      tooltip={{
                        children: item.label,
                      }}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          {/* Can place elements here */}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col">
            <Header />
            <main className="flex-1 p-4 sm:px-6 sm:py-0 gap-4">
              {children}
            </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
