"use client"

import * as React from "react"
import { ArrowLeft, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function ToolsPage() {
    const router = useRouter()
    const [weight, setWeight] = React.useState("")
    const [duration, setDuration] = React.useState("")
    const [result, setResult] = React.useState<number | null>(null)

    const calculateCalories = () => {
        const w = parseFloat(weight)
        const t = parseFloat(duration)
        if (w && t) {
            // Rough MET estimate for "Boxing, sparring" is ~9.0
            // Calories = (MET * 3.5 * weight in kg) / 200 * duration in minutes
            const calories = (9.0 * 3.5 * w) / 200 * t
            setResult(Math.round(calories))
        }
    }

    return (
        <div className="max-w-md mx-auto p-4 md:p-6 space-y-6">
            <header className="flex items-center gap-4">
                <Button size="icon" variant="ghost" onClick={() => router.back()}>
                    <ArrowLeft />
                </Button>
                <h1 className="text-xl font-bold">Tools</h1>
            </header>

            <Card className="rounded-3xl border-none shadow-sm">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Calculator className="text-orange-500" />
                        <CardTitle>Calorie Calculator</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Your Weight (kg)</label>
                        <Input type="number" placeholder="70" value={weight} onChange={e => setWeight(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Training Duration (min)</label>
                        <Input type="number" placeholder="60" value={duration} onChange={e => setDuration(e.target.value)} />
                    </div>

                    {result !== null && (
                        <div className="p-4 bg-orange-50 rounded-xl text-center">
                            <div className="text-sm text-gray-500">Estimated Burn</div>
                            <div className="text-3xl font-bold text-orange-600">{result} kcal</div>
                        </div>
                    )}

                    <Button onClick={calculateCalories} className="w-full bg-black text-white rounded-2xl">
                        Calculate
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
