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
| `/ttp` | Time To Pet introduction and context-preserving CRM signup |
| `/faqs` | Product, onboarding, and billing FAQs |
| `/features/*` | CRM and product feature pages; Ops is explicitly separate |

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

The navigation's "Log In" dropdown allows users to choose between:

- Critter Hub CRM - Marketing & customer management
- Critter Ops - Scheduling & operations

Trial buttons start a new **Hub CRM** account. On `/ttp`, signup and sign-in retain the fixed Time To Pet onboarding destination. Other routes keep generic CRM signup behavior. The approved public offer facts live in `lib/marketing-offers.ts`; visible FAQs and FAQ structured data share `lib/marketing-faqs.ts`.

## Verification

`npm test` runs actual React-render contract checks without external services. `npm run build` validates the production bundle. With the built site running locally, `npm run test:browser` runs desktop/mobile checks using an existing Playwright installation; set `CRITTER_TEST_TOOLS` to its `node_modules` directory if it is not available locally. It blocks external requests and substitutes a synthetic Hub navigation boundary.

See [BL-403 public offer and TTP evidence](docs/bl403-public-offer-and-ttp.md) for the BL-392 handoff, exact boundaries, and local proof.

## Related Repos

- [critter-comms-hub](https://github.com/jleib03/critter-comms-hub) - CRM application (hub.critter.pet)
