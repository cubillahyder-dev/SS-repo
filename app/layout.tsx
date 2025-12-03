import type { Metadata } from "next";
import "./globals.css";
import { BottomNav } from "@/components/bottom-nav";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "StatStrike - Combat Sports Fitness",
  description: "Transform Your Fitness Journey. One Workout at a Time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gray-50 font-sans`}
      >
        <Sidebar />
        <div className="md:pl-64 min-h-screen pb-16 md:pb-0">
            {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
