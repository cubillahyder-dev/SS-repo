import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Join StatStrike and start your journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium">First name</label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input id="password" type="password" />
          </div>
          <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-2xl">
            {/* In a real app, this would submit a form, then redirect. For prototype, we link to onboarding. */}
            <Link href="/onboarding">Sign Up</Link>
          </Button>
        </CardContent>
        <CardFooter>
          <div className="text-center text-sm text-gray-500 w-full">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-600 hover:underline font-medium">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
