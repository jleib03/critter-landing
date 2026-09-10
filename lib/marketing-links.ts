export type AcquisitionSource = 'ttp';
export const TTP_DESTINATION = '/dashboard/home?source=ttp';

/** Only a fixed, first-party callback is constructed here; no visitor-supplied redirect. */
export function getHubLinks(source?: AcquisitionSource, baseUrl = process.env.NEXT_PUBLIC_HUB_URL || 'https://hub.critter.pet') {
  const base = baseUrl.replace(/\/+$/, '');
  const context = `source=ttp&callbackUrl=${encodeURIComponent(TTP_DESTINATION)}`;
  return {
    start: source === 'ttp' ? `${base}${TTP_DESTINATION}` : `${base}/auth/signup`,
    signup: `${base}/auth/signup${source === 'ttp' ? `?${context}` : ''}`,
    signin: `${base}/auth/signin${source === 'ttp' ? `?${context}` : ''}`,
  };
}
