// Campaign: Early Bird Discount
// Deadline: May 1, 2026 at 8:00 PM Bangladesh Standard Time (UTC+6)
export const CAMPAIGN_DEADLINE = new Date("2026-05-01T14:00:00.000Z");
export const CAMPAIGN_NAME = "Early Bird Discount";
export const CAMPAIGN_PRICE = 880;
export const REGULAR_PRICE = 1500;

export function isCampaignActive(): boolean {
  return Date.now() < CAMPAIGN_DEADLINE.getTime();
}

/** Server-safe: returns the correct price based on current time. */
export function getActivePrice(): number {
  return isCampaignActive() ? CAMPAIGN_PRICE : REGULAR_PRICE;
}
