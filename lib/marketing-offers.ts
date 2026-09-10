/** Approved BL-403 public offers. Existing customers keep their billed price. */
export const CRM_OFFERS = {
  starter: { monthlyUsd: 79, emails: 1500, smsSegments: 0, togoChats: 200 },
  grow: { monthlyUsd: 149, emails: 25000, smsSegments: 2000, togoChats: 200 },
  pro: { monthlyUsd: 349, emails: 75000, smsSegments: 10000, togoChats: 500 },
} as const;
export const CRITTER_TRIAL_DAYS = 7;
export const TRIAL_COPY = 'New CRM businesses start with a 7-day Critter trial — no credit card required.';
export const TTP_INSIGHTS_COPY = 'After the trial, businesses with a qualifying active Time To Pet connection can keep read-only Insights. Sending and automation pause until you choose an eligible paid plan.';
export const formatAllowance = (value: number) => value.toLocaleString('en-US');
