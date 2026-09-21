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
export const CRITTER_TRIAL_DAYS = 7;
export const TRIAL_COPY = 'New CRM businesses start with a 7-day Critter trial — no credit card required.';
export const TTP_INSIGHTS_COPY = 'After the trial, businesses with a qualifying active Time To Pet connection can keep read-only Insights. Sending and automation pause until you choose an eligible paid plan.';
export const formatAllowance = (value: number) => value.toLocaleString('en-US');
