"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Dumbbell, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()

  const links = [
    { href: "/home", label: "Home", icon: Home },
    { href: "/workout", label: "Workout", icon: Dumbbell },
    { href: "/profile", label: "Profile", icon: User },
  ]

  // Hide nav on landing, login, signup, onboarding
  const hiddenRoutes = ["/", "/login", "/signup", "/forgot-password", "/onboarding"]
  if (hiddenRoutes.includes(pathname)) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white h-16 pb-safe z-50 md:hidden">
      <div className="flex h-full items-center justify-around">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname.startsWith(link.href)

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 w-full h-full",
                isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-900"
              )}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
