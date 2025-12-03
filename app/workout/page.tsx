"use client"

import * as React from "react"
import { Play, Clock, Flame, ChevronRight, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"

const EXERCISES = [
  { id: 1, name: "Jump Rope", duration: "3 min", type: "Warmup" },
  { id: 2, name: "Shadow Boxing", duration: "3 min", type: "Technique" },
  { id: 3, name: "Heavy Bag", duration: "5 rounds", type: "Power" },
  { id: 4, name: "Core Circuit", duration: "10 min", type: "Conditioning" },
]

export default function WorkoutPage() {
  const [difficulty, setDifficulty] = React.useState("Standard")

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Today&apos;s Training</h1>
          <p className="text-gray-500 text-sm">Focus: Endurance & Speed</p>
        </div>
        <Link href="/workout/player">
            <Button size="icon" className="h-12 w-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
            <Play fill="currentColor" className="ml-1" />
            </Button>
        </Link>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-black text-white border-none rounded-3xl">
          <CardContent className="p-5 flex flex-col justify-between h-32">
             <Flame className="text-orange-500" />
             <div>
                <div className="text-2xl font-bold">450</div>
                <div className="text-xs text-gray-400">Est. Calories</div>
             </div>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 text-orange-900 border-orange-100 rounded-3xl">
          <CardContent className="p-5 flex flex-col justify-between h-32">
             <Clock className="text-orange-500" />
             <div>
                <div className="text-2xl font-bold">45m</div>
                <div className="text-xs text-orange-700/70">Duration</div>
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Difficulty Selector */}
      <div className="flex bg-gray-100 p-1 rounded-2xl">
        {["Easy", "Standard", "Intense"].map((level) => (
          <button
            key={level}
            onClick={() => setDifficulty(level)}
            className={cn(
              "flex-1 py-2 text-sm font-medium rounded-xl transition-all",
              difficulty === level ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-black"
            )}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Plan Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
           <h3 className="font-bold text-lg">Workout Plan</h3>
           <Button variant="ghost" size="sm" className="text-orange-500">Customize</Button>
        </div>

        {EXERCISES.map((exercise, index) => (
          <div key={exercise.id} className="flex items-center p-4 bg-white border rounded-2xl gap-4 hover:border-orange-200 transition-colors cursor-pointer group">
            <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 font-bold group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
               {index + 1}
            </div>
            <div className="flex-1">
               <h4 className="font-semibold">{exercise.name}</h4>
               <p className="text-xs text-gray-500">{exercise.type} • {exercise.duration}</p>
            </div>
            <Button size="icon" variant="ghost">
               <Settings2 className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
        ))}
      </div>

      {/* AI Generator Promo */}
      <Card className="bg-gradient-to-r from-gray-900 to-black text-white border-none rounded-3xl overflow-hidden relative">
         <div className="absolute top-0 right-0 p-4 opacity-10">
            <Settings2 size={100} />
         </div>
         <CardContent className="p-6 relative z-10">
            <h3 className="font-bold text-lg mb-1">AI Workout Generator</h3>
            <p className="text-sm text-gray-400 mb-4">
               Get a personalized session based on your recovery and goals.
            </p>
            <Button size="sm" variant="outline" className="text-black border-white bg-white hover:bg-gray-200 rounded-xl">
               Generate New
            </Button>
         </CardContent>
      </Card>

      {/* Motion Capture Promo */}
       <Card className="bg-orange-500 text-white border-none rounded-3xl overflow-hidden relative">
         <div className="absolute top-0 right-0 p-4 opacity-10">
            <Settings2 size={100} />
         </div>
         <CardContent className="p-6 relative z-10">
            <h3 className="font-bold text-lg mb-1">Motion Capture Mode</h3>
            <p className="text-sm text-white/80 mb-4">
               Use your camera to track your form and count reps automatically.
            </p>
            <Link href="/workout/motion-capture">
                <Button size="sm" className="text-orange-500 bg-white hover:bg-gray-100 border-none rounded-xl">
                Try Beta
                </Button>
            </Link>
         </CardContent>
      </Card>
    </div>
  )
}
