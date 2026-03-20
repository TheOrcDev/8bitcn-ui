import { Webhook } from "@creem_io/nextjs";

export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET ?? "",
  onCheckoutCompleted: async () => {
    // TODO: Persist sponsor claim in DB once sponsor records are modeled.
  },
  onGrantAccess: async () => {
    // Sponsorships are handled by checkout completion for now.
  },
  onRevokeAccess: async () => {
    // TODO: Handle subscription expiration/cancellation in sponsor records.
  },
});
