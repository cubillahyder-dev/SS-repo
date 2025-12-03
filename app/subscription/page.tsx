"use client"

import * as React from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const TIERS = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential tools for casual training",
    features: [
        "Limited workouts",
        "Basic feed & profile",
        "Simple workout timer",
        "Post & follow users"
    ],
    notIncluded: ["Personalized plans", "AI Coach", "Motion Capture"],
    color: "bg-gray-100",
    textColor: "text-black",
    buttonVariant: "outline" as const
  },
  {
    name: "Standard",
    price: "$9.99/mo",
    description: "Level up your fitness journey",
    recommended: true,
    features: [
        "Full workout library",
        "Personalized plans",
        "Streak tracking & Badges",
        "Basic nutrition tools"
    ],
    notIncluded: ["AI Coach", "Motion Capture"],
    color: "bg-white",
    textColor: "text-black",
    buttonVariant: "default" as const
  },
  {
    name: "Pro",
    price: "$19.99/mo",
    description: "The ultimate fighter experience",
    features: [
        "Everything in Standard",
        "AI Workout & Meal Generator",
        "Motion Capture (Beta)",
        "Advanced Analytics",
        "Priority Support"
    ],
    notIncluded: [],
    color: "bg-black",
    textColor: "text-white",
    buttonVariant: "accent" as const
  }
]

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Choose Your Corner</h1>
            <p className="text-gray-500">Select the plan that fits your fighting style.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
                <Card
                    key={tier.name}
                    className={cn(
                        "relative rounded-3xl border-none shadow-lg flex flex-col",
                        tier.color,
                        tier.recommended ? "ring-2 ring-orange-500 scale-105 z-10" : ""
                    )}
                >
                    {tier.recommended && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                    )}
                    <CardHeader className={tier.textColor}>
                        <CardTitle className="text-xl">{tier.name}</CardTitle>
                        <div className="text-3xl font-bold mt-2">{tier.price}</div>
                        <CardDescription className={tier.name === "Pro" ? "text-gray-400" : "text-gray-500"}>
                            {tier.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={cn("flex-1 space-y-4", tier.textColor)}>
                        <ul className="space-y-3">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm">
                                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                            {tier.notIncluded.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm opacity-50">
                                    <X className="h-5 w-5 text-gray-400 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full rounded-2xl"
                            variant={tier.buttonVariant}
                            size="lg"
                        >
                            {tier.price === "Free" ? "Get Started" : "Subscribe"}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
