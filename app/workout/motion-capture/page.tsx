"use client"

import * as React from "react"
import { ArrowLeft, Camera, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MotionCapturePage() {
  // Mock loading state
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col h-screen bg-black text-white relative overflow-hidden">
      {/* Camera Feed Background (Mock) */}
      <div className="absolute inset-0 z-0">
         {/* In a real app, <Webcam /> would be here */}
         <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            {isLoading ? (
                <div className="flex flex-col items-center gap-4">
                    <RefreshCw className="animate-spin text-orange-500 h-8 w-8" />
                    <p className="text-sm font-medium text-gray-400">Initializing MediaPipe...</p>
                </div>
            ) : (
                <div className="relative w-full h-full">
                    {/* Simulated Person */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-50">
                        <svg viewBox="0 0 200 400" className="h-[80%] text-gray-600 fill-current">
                             <circle cx="100" cy="50" r="30" />
                             <rect x="70" y="90" width="60" height="150" rx="20" />
                             <rect x="40" y="100" width="20" height="120" rx="10" />
                             <rect x="140" y="100" width="20" height="120" rx="10" />
                             <rect x="60" y="250" width="25" height="140" rx="10" />
                             <rect x="115" y="250" width="25" height="140" rx="10" />
                        </svg>
                    </div>
                    {/* Simulated Landmarks Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                         <svg viewBox="0 0 200 400" className="h-[80%]">
                             {/* Connecting Lines */}
                             <line x1="100" y1="50" x2="100" y2="90" stroke="white" strokeWidth="2" />
                             <line x1="100" y1="90" x2="70" y2="100" stroke="white" strokeWidth="2" />
                             <line x1="100" y1="90" x2="130" y2="100" stroke="white" strokeWidth="2" />
                             {/* Points */}
                             <circle cx="100" cy="50" r="4" fill="#ff5722" />
                             <circle cx="70" cy="100" r="4" fill="#ff5722" />
                             <circle cx="130" cy="100" r="4" fill="#ff5722" />
                             <circle cx="50" cy="160" r="4" fill="#ff5722" />
                             <circle cx="150" cy="160" r="4" fill="#ff5722" />
                         </svg>
                    </div>

                    {/* Real-time stats overlay */}
                    <div className="absolute top-24 right-4 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 w-40">
                         <div className="text-xs text-gray-400 mb-1">Repetitions</div>
                         <div className="text-3xl font-bold text-white">12</div>
                         <div className="h-1 w-full bg-gray-700 mt-2 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[60%]"></div>
                         </div>
                         <div className="text-xs text-green-400 mt-1 font-medium">Good Form</div>
                    </div>
                </div>
            )}
         </div>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
          {/* Header */}
          <header className="flex items-center justify-between p-4 pointer-events-auto">
            <Link href="/workout">
                <Button size="icon" variant="ghost" className="rounded-full bg-black/20 backdrop-blur text-white hover:bg-black/40">
                    <ArrowLeft className="h-6 w-6" />
                </Button>
            </Link>
            <div className="px-3 py-1 bg-red-500/20 backdrop-blur border border-red-500/50 rounded-full text-xs font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Rec
            </div>
          </header>

          <div className="flex-1" />

          {/* Footer Controls */}
          <footer className="p-8 pb-12 flex items-center justify-center gap-8 pointer-events-auto bg-gradient-to-t from-black via-black/80 to-transparent">
             <Button size="lg" className="rounded-full h-16 px-8 bg-white text-black hover:bg-gray-200">
                Stop Session
             </Button>
          </footer>
      </div>
    </div>
  )
}
