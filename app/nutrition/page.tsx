"use client"

import * as React from "react"
import { ArrowLeft, ChevronRight, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const MEALS = [
    { type: "Breakfast", name: "Oatmeal & Berries", cal: 350, protein: "12g" },
    { type: "Lunch", name: "Chicken & Rice", cal: 550, protein: "45g" },
    { type: "Dinner", name: "Salmon & Asparagus", cal: 480, protein: "38g" },
    { type: "Snack", name: "Greek Yogurt", cal: 120, protein: "15g" },
]

export default function NutritionPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-6">
      <header className="flex items-center gap-4">
        <Link href="/home">
            <Button size="icon" variant="ghost">
                <ArrowLeft className="h-5 w-5" />
            </Button>
        </Link>
        <h1 className="text-2xl font-bold">Nutrition Plan</h1>
      </header>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-2">
          <Card className="bg-green-50 border-green-100 text-center py-4 rounded-2xl">
              <div className="text-xs text-green-600 mb-1">Calories</div>
              <div className="font-bold text-green-900">1,500</div>
              <div className="text-[10px] text-green-600/70">/ 2,400</div>
          </Card>
          <Card className="bg-blue-50 border-blue-100 text-center py-4 rounded-2xl">
              <div className="text-xs text-blue-600 mb-1">Protein</div>
              <div className="font-bold text-blue-900">110g</div>
              <div className="text-[10px] text-blue-600/70">/ 180g</div>
          </Card>
          <Card className="bg-orange-50 border-orange-100 text-center py-4 rounded-2xl">
              <div className="text-xs text-orange-600 mb-1">Carbs</div>
              <div className="font-bold text-orange-900">180g</div>
              <div className="text-[10px] text-orange-600/70">/ 250g</div>
          </Card>
      </div>

      {/* Meal List */}
      <div className="space-y-4">
          <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Today&apos;s Meals</h3>
              <Button size="sm" variant="ghost" className="text-orange-500">
                  <Plus className="h-4 w-4 mr-1" /> Log Food
              </Button>
          </div>

          {MEALS.map((meal) => (
              <Card key={meal.type} className="rounded-2xl border-none shadow-sm">
                  <CardContent className="p-4 flex items-center justify-between">
                      <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">{meal.type}</div>
                          <div className="font-medium">{meal.name}</div>
                          <div className="text-xs text-gray-400">{meal.cal} kcal • {meal.protein} protein</div>
                      </div>
                      <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4 text-gray-300" />
                      </Button>
                  </CardContent>
              </Card>
          ))}
      </div>

      {/* Shopping List Promo */}
      <Card className="bg-black text-white rounded-3xl border-none">
          <CardContent className="p-6 flex items-center justify-between">
              <div>
                  <h3 className="font-bold text-lg">Shopping List</h3>
                  <p className="text-gray-400 text-xs">Generated from your weekly plan</p>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-xl">View</Button>
          </CardContent>
      </Card>
    </div>
  )
}
