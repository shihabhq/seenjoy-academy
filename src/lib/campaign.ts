// Campaign: Grand Opening Discount
// Deadline: April 25, 2026 at 8:00 PM Bangladesh Standard Time (UTC+6)
export const CAMPAIGN_DEADLINE = new Date("2026-04-25T14:00:00.000Z");
export const CAMPAIGN_NAME = "Grand Opening Discount";
export const CAMPAIGN_PRICE = 790;
export const REGULAR_PRICE = 850;

export function isCampaignActive(): boolean {
  return Date.now() < CAMPAIGN_DEADLINE.getTime();
}

/** Server-safe: returns the correct price based on current time. */
export function getActivePrice(): number {
  return isCampaignActive() ? CAMPAIGN_PRICE : REGULAR_PRICE;
}
