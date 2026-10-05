/**
 * Approved public offers. Existing customers keep their billed price AND, since
 * BL-254 (2026-09-19), the monthly allowances they already had — these numbers are
 * what a NEW purchase gets. Keep them in step with SUBSCRIPTION_LIMITS in the Hub
 * (lib/config/subscription-limits.ts); the Hub is the gate, this is the shop window.
 */
export const CRM_OFFERS = {
  starter: { monthlyUsd: 79, emails: 1000, smsSegments: 0, togoChats: 0 },
  grow: { monthlyUsd: 149, emails: 10000, smsSegments: 1000, togoChats: 100 },
  pro: { monthlyUsd: 349, emails: 35000, smsSegments: 3000, togoChats: 500 },
} as const;
export const GRANDFATHER_COPY = 'Businesses that were already on a paid plan keep the allowances they had, for as long as they stay on that plan.';
/** BL-617: new CRM signups get 14 days (Hub TRIAL_DURATION_DAYS). Every trial-length claim reads from here. */
export const CRITTER_TRIAL_DAYS = 14;
/** "14-day" — for "a 14-day Critter trial". */
export const TRIAL_LENGTH = `${CRITTER_TRIAL_DAYS}-day`;
export const TRIAL_COPY = `New CRM businesses start with a ${TRIAL_LENGTH} Critter trial — no credit card required.`;
/** One label per action (BL-617 R2). Buttons are Title Case; body copy stays sentence case. */
export const SIGNUP_CTA = 'Start Your Free Trial';
export const DEMO_CTA = 'Join a Live Demo';
export const SALES_CTA = 'Talk to Sales';
/** The systems Critter brings data in from. Keep in step with the Hub's connectors. */
export const SUPPORTED_SYSTEMS = ['Time To Pet', 'Precise Pet Care', 'MyTime', 'Scout', 'PetPocketBook', 'Paw Partner'] as const;
export const SUPPORTED_SYSTEMS_SHORT = ['TTP', 'PPC', 'MyTime', 'Scout', 'PetPocketBook', 'Paw Partner'] as const;
const listOf = (items: readonly string[], joiner = 'and') => `${items.slice(0, -1).join(', ')} ${joiner} ${items[items.length - 1]}`;
/** "Time To Pet, Precise Pet Care, MyTime, Scout, PetPocketBook and Paw Partner" */
export const SUPPORTED_SYSTEMS_TEXT = listOf(SUPPORTED_SYSTEMS);
/** "Time To Pet, Precise Pet Care, MyTime, Scout, PetPocketBook or Paw Partner" */
export const SUPPORTED_SYSTEMS_OR_TEXT = listOf(SUPPORTED_SYSTEMS, 'or');
/** Pricing-card line: "TTP, PPC, MyTime, Scout, PetPocketBook, Paw Partner & CSV import" */
export const INTEGRATIONS_LINE = `${SUPPORTED_SYSTEMS_SHORT.join(', ')} & CSV import`;
/** Onboarding offer (BL-395 classes + paid setup). Replaces the retired "8 hours of sessions" promise. */
export const ONBOARDING_COPY = 'Free live classes on Zoom every Monday, Wednesday and Friday, plus paid done-for-you setup if you would rather hand it off.';
export const TTP_INSIGHTS_COPY = 'After the trial, businesses with a qualifying active Time To Pet connection can keep read-only Insights. Sending and automation pause until you choose an eligible paid plan.';
export const formatAllowance = (value: number) => value.toLocaleString('en-US');
