// Campaign: Grand Opening Discount
// Window: April 26, 2026 8:00 PM → April 27, 2026 12:00 AM Bangladesh Standard Time (UTC+6)
export const CAMPAIGN_START = new Date("2026-04-26T14:00:00.000Z"); // 8PM BST
export const CAMPAIGN_END   = new Date("2026-04-26T18:00:00.000Z"); // 12AM BST (midnight)
export const CAMPAIGN_NAME  = "Grand Opening Discount";
export const CAMPAIGN_PRICE = 790;
export const REGULAR_PRICE  = 850;

export function isCampaignActive(): boolean {
  const now = Date.now();
  return now >= CAMPAIGN_START.getTime() && now < CAMPAIGN_END.getTime();
}

/** Server-safe: returns the correct price based on current time. */
export function getActivePrice(): number {
  return isCampaignActive() ? CAMPAIGN_PRICE : REGULAR_PRICE;
}
