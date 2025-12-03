"use client"

import * as React from "react"
import Image from "next/image"
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock Data
const POSTS = [
  {
    id: 1,
    user: {
      name: "Alex Silva",
      handle: "@alex_striker",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    content: "Just finished a killer 12-round bag session. Focusing on my jab endurance today. 🥊 #Boxing #Training",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    likes: 124,
    comments: 18,
    time: "2h ago",
  },
  {
    id: 2,
    user: {
      name: "Sarah Chen",
      handle: "@sarah_kicks",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    content: "Morning run + shadow boxing in the park. The fresh air hits different. 🏃‍♀️💨",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    likes: 89,
    comments: 6,
    time: "4h ago",
  },
  {
    id: 3,
    user: {
      name: "Mike Tyson (Fan)",
      handle: "@iron_mike_fan",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
    content: "New heavy bag drill unlocked! Try this combo: Jab - Cross - Hook - Roll - Cross.",
    image: null, // Text only post
    likes: 245,
    comments: 42,
    time: "6h ago",
  },
]

const TRENDING = [
  { id: 1, tag: "#SummerShred", count: "12.5k posts" },
  { id: 2, tag: "#MuayThai", count: "8.2k posts" },
  { id: 3, tag: "#HeavyBag", count: "5.1k posts" },
]

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:flex lg:gap-8">
      {/* Main Feed */}
      <div className="flex-1 space-y-6">
        <h1 className="text-2xl font-bold">Feed</h1>

        {/* Create Post Input (Visual only) */}
        <Card className="rounded-2xl border-none shadow-sm">
           <CardContent className="p-4 flex gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
                  <img src="https://i.pravatar.cc/150?img=12" alt="Me" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Share your workout..."
                    className="w-full bg-transparent border-none outline-none text-sm h-10"
                  />
              </div>
              <Button size="sm" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white">Post</Button>
           </CardContent>
        </Card>

        {POSTS.map((post) => (
          <Card key={post.id} className="rounded-3xl border-none shadow-sm overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 p-4 pb-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
                <img src={post.user.avatar} alt={post.user.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">{post.user.name}</div>
                <div className="text-xs text-gray-500">{post.user.handle} • {post.time}</div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-4 pt-2 space-y-3">
              <p className="text-sm leading-relaxed">{post.content}</p>
              {post.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center gap-6 text-gray-500">
               <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span className="text-xs font-medium">{post.likes}</span>
               </button>
               <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-xs font-medium">{post.comments}</span>
               </button>
               <button className="flex items-center gap-2 hover:text-green-500 transition-colors ml-auto">
                  <Share2 className="h-5 w-5" />
               </button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Sidebar (Trending & Leaderboard) - Hidden on Mobile */}
      <div className="hidden lg:block w-80 space-y-6">
        {/* Trending Section */}
        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Trending</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {TRENDING.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="text-sm font-medium">{item.tag}</div>
                <div className="text-xs text-gray-500">{item.count}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Mini Leaderboard */}
        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Weekly Leaders</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                 <div className="font-bold text-gray-400 w-4">{i}</div>
                 <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}a`} className="h-full w-full" alt="user" />
                 </div>
                 <div className="flex-1 text-sm font-medium">Fighter {i}</div>
                 <div className="text-xs font-bold text-orange-500">{2000 - i*150} XP</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
