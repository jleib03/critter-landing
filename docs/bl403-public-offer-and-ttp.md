# BL-403 public offer alignment and BL-392 TTP onboarding entry

Source baseline: website `origin/main` at `5e1d7a2`. Work branch: `codex/bl-403-ttp-website`.
Human owner: Jacob. Agent owner: interactive lane. Implementation follows the explicitly approved website scope recorded by the parent Hub task; no website deployment or production merge is approved by this note.

## Public contract

- `lib/marketing-offers.ts` holds approved new monthly USD offers: Starter $79, 1,500 base emails, owner-only access, no SMS, and Grow's other features; Grow $149/25,000 base emails/2,000 SMS segments; Pro $349/75,000 base emails/10,000 segments. Starter and Grow have 200 paid Togo chats; Pro has 500. Trial copy does not reuse the paid chat allowance. Existing billed prices are not changed by this website.
- New CRM businesses start with the same 7-day Critter trial, without a credit card. A pricing selection remains a signup preference, not a different trial or an immediate checkout.
- A qualifying active Time To Pet connection can retain read-only Insights after trial expiry. Sending and automation require an eligible paid plan. No free-forever CRM, instant import, guaranteed growth, or automatic draft-activation claim is made.
- `/ttp` explains connection, a high-level introduction during loading, and the personal snapshot/journey/draft review afterward. Illustrations are labeled; they contain no invented outcome metrics.
- `getHubLinks('ttp')` supplies `/auth/signup?source=ttp&callbackUrl=%2Fdashboard%2Fhome%3Fsource%3Dttp` for trial entry and the corresponding `/auth/signin` URL for existing users. The fixed direct `/dashboard/home?source=ttp` destination remains available through `.start`. Header/footer trial links on `/ttp` use `.signup`. Generic routes retain their existing context-free signup/sign-in links. The Hub's auth continuation is a separately tested companion change, not implemented here.
- Release sequencing: deploy the tested companion Hub TTP-auth continuation before or together with the public `/ttp` acquisition rollout. Website links alone cannot guarantee that an older Hub verification flow retains the source and callback.
- FAQ visible answers and FAQPage structured data share `lib/marketing-faqs.ts`; pricing search/social metadata and AggregateOffer use the approved offer source. `/ttp` has canonical metadata, navigation/footer/integration links, and a sitemap entry.

## Copy and product boundaries

Updated pricing, FAQ, product pages, Togo copy, illustrative previews, and future ad exports to remove retired Starter restrictions, unlimited/instant/trained-on-data implications, unlabeled sample statistics, and a free-plan impression. SMS is described in segments, with paid-plan, registration, and consent requirements. Existing exported ad files and externally configured campaigns were not modified.

Critter Ops remains separate. Its page directs scheduling/operations visitors to the existing Ops URL and clearly limits this site's CRM pricing/trial to Hub. No Ops price, support entitlement, or legal policy is changed. Privacy and terms source files are untouched. The existing eight-hour onboarding-support promise and white-glove support copy are preserved, not independently verified.

Open legal-content dependency: the privacy policy itself says customer information is never shared and export is available at any time, while its AI section describes Anthropic processing. The FAQ no longer repeats those blanket promises; it points to the policy and support for data-access questions. The underlying policy contradiction still needs a human legal/privacy review and is not silently rewritten in this offer update. The existing 30-day refund promise also remains unchanged.

## Local verification

- Red-first actual React render: baseline failed because Starter rendered $49. `npm test` now executes the real page/component modules using the repository's TypeScript compiler and React server renderer. Only Next Image/Link and stylesheet boundaries are replaced; no tenant/API/model calls. Final result: 91 checks passing (offer, comparison capabilities, FAQ/schema parity, fixed callbacks, generic isolation, sitemap/metadata, Ops separation, all 18 ad variants, and seven actual product pages).
- `npm run build`: production compile, lint/typecheck, and all 28 static-page generation steps pass. `/ttp` is prerendered. Output: `/private/tmp/bl403-website-build.log`. Only the existing outdated Browserslist database warning remains; dependencies were not upgraded.
- `npm run test:browser`: 47 checks passed against the actual built Next site at `http://127.0.0.1:3197`, with widths 1440, 768, and 390. Tests cover responsive overflow, actual trial and pricing-button navigation, desktop/mobile login URLs, keyboard FAQ interaction, metadata, loaded/contrasting footer brand asset, and browser runtime errors. All remote requests are blocked or fulfilled locally. The partner logo uses a synthetic stand-in in captures; its live remote asset availability is not asserted.
- Visual regression found and fixed: the existing file named `critter-logo-white.png` actually contains the orange logo and disappeared against the orange footer. The footer now uses the known Critter logo with a deterministic white CSS treatment, without the old reactive image/srcSet fallback. No image file was changed.
- Screenshots: `/private/tmp/bl403-website-browser/{ttp,pricing,faqs}-{1440,768,390}.png`. The source uses existing Critter assets and the same Time To Pet logo URL already used by Hub. No generated bitmap or dependency was added.
- Browser tooling uses an existing Playwright installation via `CRITTER_TEST_TOOLS` (directory containing the module); it is not a new production dependency. `CRITTER_TEST_ORIGIN` must be loopback. Tests do not submit a real signup, inspect billing configuration, contact providers, or prove deployed Hub onboarding end to end.

No database, auth mechanism, Stripe configuration, billing records, production permissions, deployed website, or remote branch was modified by this website lane. Parent owns final independent review, commit, and any requested publication.
