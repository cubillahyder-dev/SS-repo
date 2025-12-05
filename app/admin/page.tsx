"use client"

import * as React from "react"
import Link from "next/link"
import { Users, CreditCard, AlertTriangle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
            <Link href="/home">
                <Button size="icon" variant="ghost">
                    <ArrowLeft className="h-5 w-5" />
                </Button>
            </Link>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-black rounded-full text-white flex items-center justify-center font-bold text-xs">
                JD
            </div>
            <span className="text-sm font-medium">John Doe (Admin)</span>
        </div>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="rounded-2xl border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
                <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">12,345</div>
                <p className="text-xs text-green-500 font-medium">+180 from last week</p>
            </CardContent>
        </Card>
        <Card className="rounded-2xl border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Subscriptions</CardTitle>
                <CreditCard className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">1,240</div>
                <p className="text-xs text-green-500 font-medium">+5% month over month</p>
            </CardContent>
        </Card>
        <Card className="rounded-2xl border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Pending Reports</CardTitle>
                <AlertTriangle className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-red-500 font-medium">Requires attention</p>
            </CardContent>
        </Card>
      </div>

      {/* Content Area */}
      <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Signups */}
          <Card className="rounded-3xl border-none shadow-sm">
              <CardHeader>
                  <CardTitle>Recent Users</CardTitle>
                  <CardDescription>New athletes joining the platform</CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                                  <div>
                                      <div className="text-sm font-medium">User {i}</div>
                                      <div className="text-xs text-gray-500">user{i}@example.com</div>
                                  </div>
                              </div>
                              <div className="text-xs text-gray-400">2h ago</div>
                          </div>
                      ))}
                  </div>
              </CardContent>
          </Card>

          {/* System Status */}
          <Card className="rounded-3xl border-none shadow-sm">
              <CardHeader>
                  <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Database</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Motion Capture API</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Payment Gateway</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Degraded</span>
                  </div>
              </CardContent>
          </Card>
      </div>
    </div>
  )
}
