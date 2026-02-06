# Critter Landing Page

Marketing landing page for Critter - CRM & Marketing Automation for Pet Care Businesses.

## Overview

This is a standalone Next.js application that serves as the marketing landing page at `critter.pet`. It links to two products:

- **Critter Hub CRM** (`hub.critter.pet`) - Marketing & customer management
- **Critter Ops** (`app.critter.pet`) - Scheduling & operations

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Shadcn UI components
- Deployed on Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the landing page.

## Environment Variables

```bash
NEXT_PUBLIC_HUB_URL=https://hub.critter.pet
NEXT_PUBLIC_OPS_URL=https://app.critter.pet
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/pricing` | Pricing page with plan comparison |
| `/togo-ai` | Togo AI assistant feature page |
| `/blog` | Blog index page |
| `/blog/[slug]` | Individual blog articles |

## Deployment

This repo is configured to deploy to Vercel. The `vercel.json` includes redirects for legacy routes:

```json
{
  "redirects": [
    { "source": "/dashboard/:path*", "destination": "https://hub.critter.pet/dashboard/:path*", "permanent": true },
    { "source": "/auth/:path*", "destination": "https://hub.critter.pet/auth/:path*", "permanent": true },
    { "source": "/api/:path*", "destination": "https://hub.critter.pet/api/:path*", "permanent": true }
  ]
}
```

## Product Selector

The navigation includes a product selector dropdown for both "Log In" and "Free Trial" buttons, allowing users to choose between:

- Critter Hub CRM - Marketing & customer management
- Critter Ops - Scheduling & operations

## Related Repos

- [critter-comms-hub](https://github.com/jleib03/critter-comms-hub) - CRM application (hub.critter.pet)
