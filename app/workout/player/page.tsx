"use client"

import * as React from "react"
import { ArrowLeft, Pause, Play, SkipForward, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function WorkoutPlayer() {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [timeLeft, setTimeLeft] = React.useState(180) // 3 minutes
  const [currentRound, setCurrentRound] = React.useState(1)

  // Simple timer effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <button onClick={() => router.back()} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
           <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-xs font-bold uppercase tracking-wider">
           <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
           Live
        </div>
        <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
           <Timer className="h-5 w-5" />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8">
         <div className="space-y-2">
            <h2 className="text-gray-400 text-lg uppercase tracking-widest font-medium">Round {currentRound} / 12</h2>
            <h1 className="text-4xl font-bold">Shadow Boxing</h1>
         </div>

         {/* Timer Visual */}
         <div className="relative w-64 h-64 flex items-center justify-center">
            {/* SVG Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
               <circle cx="128" cy="128" r="120" stroke="#333" strokeWidth="8" fill="none" />
               <circle
                  cx="128" cy="128" r="120" stroke="#ff5722" strokeWidth="8" fill="none"
                  strokeDasharray="753"
                  strokeDashoffset={753 - (753 * timeLeft) / 180}
                  className="transition-all duration-1000 ease-linear"
                  strokeLinecap="round"
               />
            </svg>
            <div className="text-6xl font-black tabular-nums tracking-tighter">
               {formatTime(timeLeft)}
            </div>
         </div>

         <div className="space-y-1">
            <p className="text-gray-400">Next Exercise</p>
            <h3 className="text-xl font-semibold">Heavy Bag Drill</h3>
         </div>
      </div>

      {/* Controls */}
      <div className="p-8 pb-12 flex items-center justify-center gap-8">
         <Button
            size="lg"
            variant="ghost"
            className="h-16 w-16 rounded-full bg-gray-800 hover:bg-gray-700 text-white border-none"
            onClick={() => setTimeLeft(180)}
         >
            <span className="font-bold text-xs">RESET</span>
         </Button>

         <Button
            size="icon"
            className="h-24 w-24 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/20 scale-100 active:scale-95 transition-transform"
            onClick={() => setIsPlaying(!isPlaying)}
         >
            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-2" />}
         </Button>

         <Button
            size="lg"
            variant="ghost"
            className="h-16 w-16 rounded-full bg-gray-800 hover:bg-gray-700 text-white border-none"
            onClick={() => {
                setCurrentRound(prev => prev + 1)
                setTimeLeft(180)
            }}
         >
            <SkipForward size={24} />
         </Button>
      </div>
    </div>
  )
}
