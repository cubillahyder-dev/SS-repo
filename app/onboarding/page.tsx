"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Simple multi-step form state
type Step = 1 | 2 | 3 | 4

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = React.useState<Step>(1)

  // Mock state for form data
  const [formData, setFormData] = React.useState({
    goal: "",
    weight: "",
    height: "",
    level: "",
  })

  const handleNext = () => {
    if (step < 4) {
      setStep((prev) => (prev + 1) as Step)
    } else {
      // Finish onboarding
      router.push("/home")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as Step)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-medium">What is your main fitness goal?</h3>
            <div className="grid grid-cols-1 gap-3">
              {["Lose Weight", "Build Muscle", "Learn to Fight", "Improve Endurance"].map((option) => (
                <button
                  key={option}
                  onClick={() => setFormData({ ...formData, goal: option })}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all hover:border-orange-500",
                    formData.goal === option ? "border-orange-500 bg-orange-50 ring-1 ring-orange-500" : "bg-white"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-medium">About You</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Weight (kg)</label>
                <Input
                  type="number"
                  placeholder="70"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Height (cm)</label>
                <Input
                  type="number"
                  placeholder="175"
                  value={formData.height}
                  onChange={(e) => setFormData({...formData, height: e.target.value})}
                />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-medium">What is your experience level?</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: "Beginner", desc: "New to combat sports" },
                { label: "Intermediate", desc: "Have trained for 6+ months" },
                { label: "Advanced", desc: "Competitive fighter or years of experience" }
              ].map((option) => (
                <button
                  key={option.label}
                  onClick={() => setFormData({ ...formData, level: option.label })}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all hover:border-orange-500",
                    formData.level === option.label ? "border-orange-500 bg-orange-50 ring-1 ring-orange-500" : "bg-white"
                  )}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6 text-center animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-xl font-bold">You&apos;re All Set!</h3>
            <p className="text-gray-500">
              We&apos;ve customized your workout plan based on your profile. Get ready to strike.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
             <span className="text-sm font-medium text-orange-500">Step {step} of 4</span>
             {step > 1 && (
               <button onClick={handleBack} className="text-sm text-gray-500 hover:text-black">Back</button>
             )}
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-500 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
          <CardTitle className="pt-4 text-2xl font-bold">Lets get to know you</CardTitle>
          <CardDescription>
            Help us tailor the perfect combat sports experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-[300px]">
          {renderStep()}
        </CardContent>
        <CardFooter>
          <Button onClick={handleNext} className="w-full bg-black text-white hover:bg-gray-800 rounded-2xl">
            {step === 4 ? "Start Training" : "Continue"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
