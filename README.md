# StatStrike

StatStrike is a Combat Sports Fitness SAAS web application designed for boxing and Muay Thai enthusiasts. It features a clean, minimal UI and includes social features, workout tracking, and subscription tiers.

## Project Structure

This project is built with **Next.js 15 (App Router)** and **Tailwind CSS**.

### Detailed File Structure

```
.
├── app/                        # Main application routes (App Router)
│   ├── layout.tsx              # Root layout (Sidebar, BottomNav, Fonts)
│   ├── page.tsx                # Landing Page
│   ├── globals.css             # Global styles & Tailwind directives
│   │
│   ├── home/                   # Social Feed Tab
│   │   └── page.tsx            # Feed UI with posts & leaderboard
│   │
│   ├── workout/                # Workout Tab
│   │   ├── page.tsx            # Main Workout Dashboard
│   │   ├── player/             # Interactive Workout Player
│   │   │   └── page.tsx
│   │   └── motion-capture/     # Motion Capture Prototype (Mock)
│   │       └── page.tsx
│   │
│   ├── profile/                # User Profile Tab
│   │   └── page.tsx            # Stats, Badges, Progress Photos
│   │
│   ├── subscription/           # Monetization
│   │   └── page.tsx            # Pricing Tiers (Basic, Standard, Pro)
│   │
│   ├── tools/                  # Extra Utilities
│   │   └── page.tsx            # Calorie Calculator
│   │
│   ├── login/                  # Authentication
│   │   └── page.tsx
│   ├── signup/                 # Authentication
│   │   └── page.tsx
│   ├── forgot-password/        # Authentication
│   │   └── page.tsx
│   └── onboarding/             # User Onboarding Flow
│       └── page.tsx
│
├── components/                 # Reusable UI Components
│   ├── ui/                     # Base UI Elements (Shadcn-like)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   │
│   ├── bottom-nav.tsx          # Mobile Navigation Bar
│   └── sidebar.tsx             # Desktop Sidebar Navigation
│
├── lib/                        # Utilities
│   └── utils.ts                # CSS class merging helper (cn)
│
├── public/                     # Static Assets
│
├── tailwind.config.js          # Tailwind CSS Configuration
├── postcss.config.js           # PostCSS Configuration
├── package.json                # Project Dependencies
└── README.md                   # Project Documentation
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

*   **Framework:** Next.js 15
*   **Styling:** Tailwind CSS 3.4
*   **Language:** TypeScript
*   **Icons:** Lucide React
