import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createOrder = mutation({
  args: {
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shipping: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(),
      grandTotal: v.number(),
    }),
    status: v.string(),
    timestamp: v.number(),
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", args);
    return orderId;
  },
});
