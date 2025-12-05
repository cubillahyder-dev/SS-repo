"use client"

import * as React from "react"
import { Settings, ChevronRight, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"

const STATS = [
  { label: "Workout Streak", value: "12 Days", icon: "🔥", color: "text-orange-500" },
  { label: "Calories Burned", value: "12,450", icon: "⚡", color: "text-yellow-500" },
  { label: "Hours Trained", value: "48.5", icon: "⏱️", color: "text-blue-500" },
]

const BADGES = [
  { id: 1, name: "Early Bird", icon: "🌅", unlocked: true },
  { id: 2, name: "Heavy Hitter", icon: "🥊", unlocked: true },
  { id: 3, name: "Marathoner", icon: "🏃", unlocked: false },
  { id: 4, name: "Champion", icon: "👑", unlocked: false },
]

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-6 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-6 w-6" />
        </Button>
      </header>

      {/* Profile Card */}
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 rounded-full bg-gray-200 overflow-hidden border-2 border-orange-500 p-1">
           <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="h-full w-full rounded-full object-cover" />
        </div>
        <div className="flex-1">
           <h2 className="text-xl font-bold">Alex Fighter</h2>
           <p className="text-sm text-gray-500">Standard Plan • Level 5</p>
           {/* XP Bar */}
           <div className="mt-2 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[60%] rounded-full" />
           </div>
           <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>1200 XP</span>
              <span>2000 XP</span>
           </div>
        </div>
      </div>

      {/* Upgrade Banner */}
      <Link href="/subscription">
        <Card className="bg-gradient-to-r from-gray-900 to-black text-white border-none rounded-3xl overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity">
            <CardContent className="p-4 flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-lg text-orange-400">Upgrade to Pro</h3>
                    <p className="text-xs text-gray-400">Unlock AI Coach & Advanced Analytics</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
            </CardContent>
        </Card>
      </Link>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2">
        {STATS.map((stat) => (
          <Card key={stat.label} className="border-none shadow-sm rounded-2xl bg-gray-50">
            <CardContent className="p-3 flex flex-col items-center justify-center text-center h-24">
               <span className="text-2xl mb-1">{stat.icon}</span>
               <div className="font-bold text-sm">{stat.value}</div>
               <div className="text-[10px] text-gray-500 leading-tight">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Photos */}
      <div>
         <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">Progress</h3>
            <Button variant="ghost" size="sm" className="text-orange-500 text-xs">View All</Button>
         </div>
         <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
             {[1, 2, 3].map((i) => (
                 <div key={i} className="h-32 w-24 shrink-0 bg-gray-200 rounded-xl overflow-hidden relative">
                    <img
                        src={`https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80&random=${i}`}
                        className="h-full w-full object-cover"
                        alt="progress"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                        {i}w ago
                    </div>
                 </div>
             ))}
             <div className="h-32 w-24 shrink-0 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
                <Camera className="mb-1 h-5 w-5" />
                <span className="text-[10px]">Add Photo</span>
             </div>
         </div>
      </div>

      {/* Badges */}
      <div>
         <h3 className="font-bold text-lg mb-2">Achievements</h3>
         <div className="grid grid-cols-4 gap-2">
             {BADGES.map((badge) => (
                 <div key={badge.id} className={cn("flex flex-col items-center text-center space-y-1", !badge.unlocked && "opacity-40 grayscale")}>
                    <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center text-3xl shadow-sm border border-gray-100">
                        {badge.icon}
                    </div>
                    <span className="text-[10px] font-medium">{badge.name}</span>
                 </div>
             ))}
         </div>
      </div>
    </div>
  )
}
