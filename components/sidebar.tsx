"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Dumbbell, User, LogOut, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: "/home", label: "Home", icon: Home },
    { href: "/workout", label: "Workout", icon: Dumbbell },
    { href: "/profile", label: "Profile", icon: User },
  ]

  // Hide on auth pages
  const hiddenRoutes = ["/", "/login", "/signup", "/forgot-password", "/onboarding"]
  if (hiddenRoutes.includes(pathname)) return null

  return (
    <aside className="hidden md:flex flex-col w-64 border-r h-screen fixed left-0 top-0 bg-white z-50">
      <div className="h-16 flex items-center px-6 border-b">
        <span className="font-bold text-xl tracking-tight">StatStrike</span>
      </div>
      <div className="flex-1 py-6 px-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname.startsWith(link.href)

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                isActive
                  ? "bg-orange-50 text-orange-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Icon size={20} />
              <span>{link.label}</span>
            </Link>
          )
        })}
      </div>
      <div className="p-4 border-t space-y-2">
        <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
            <Settings size={20} />
            <span>Settings</span>
        </Link>
        <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
            <LogOut size={20} />
            <span>Log Out</span>
        </Link>
      </div>
    </aside>
  )
}
