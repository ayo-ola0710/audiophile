import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error(
    "RESEND_API_KEY environment variable is not set. Please add it to your .env.local file."
  );
}

const resend = new Resend(resendApiKey);

interface OrderEmailData {
  orderId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  shipping: {
    address: string;
    zip: string;
    city: string;
    country: string;
  };
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  totals: {
    subtotal: number;
    shipping: number;
    taxes: number;
    grandTotal: number;
  };
}

export async function POST(request: NextRequest) {
  try {
    const orderData: OrderEmailData = await request.json();

    const { orderId, customer, shipping, items, totals } = orderData;

    const itemsHtml = items
      .map(
        (item) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          <strong>${item.name}</strong><br>
          <span style="color: #666; font-size: 14px;">Quantity: ${
            item.quantity
          }</span>
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
          $${(item.price * item.quantity).toFixed(2)}
        </td>
      </tr>
    `
      )
      .join("");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation - Audiophile</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #D87D4A 0%, #F4A261 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🎧 Audiophile</h1>
          <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Thank you for your order!</p>
        </div>

        <div style="background: white; border: 1px solid #ddd; border-radius: 0 0 10px 10px; padding: 30px;">
          <h2 style="color: #D87D4A; margin-bottom: 20px;">Hello ${
            customer.name
          }!</h2>

          <p style="font-size: 16px; margin-bottom: 20px;">
            Thank you for shopping with Audiophile. Your order has been successfully placed and is being processed.
          </p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #D87D4A;">Order Details</h3>
            <p style="margin: 5px 0;"><strong>Order ID:</strong> #${orderId}</p>
            <p style="margin: 5px 0;"><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>

          <h3 style="color: #D87D4A; margin: 30px 0 15px 0;">Items Ordered</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f8f9fa;">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid #D87D4A; color: #D87D4A;">Product</th>
                <th style="padding: 12px; text-align: right; border-bottom: 2px solid #D87D4A; color: #D87D4A;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Subtotal:</span>
              <span>$${totals.subtotal.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Shipping:</span>
              <span>$${totals.shipping.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Tax (VAT 20%):</span>
              <span>$${totals.taxes.toFixed(2)}</span>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 10px 0;">
            <div style="display: flex; justify-content: space-between; margin: 5px 0; font-weight: bold; font-size: 18px; color: #D87D4A;">
              <span>Grand Total:</span>
              <span>$${totals.grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <h3 style="color: #D87D4A; margin: 30px 0 15px 0;">Shipping Address</h3>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
            <p style="margin: 5px 0;">${customer.name}</p>
            <p style="margin: 5px 0;">${shipping.address}</p>
            <p style="margin: 5px 0;">${shipping.city}, ${shipping.zip}</p>
            <p style="margin: 5px 0;">${shipping.country}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${
              customer.phone
            }</p>
          </div>

          <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D87D4A;">
            <h4 style="margin: 0 0 10px 0; color: #D87D4A;">Need Help?</h4>
            <p style="margin: 5px 0;">📧 Email: support@audiophile.com</p>
            <p style="margin: 5px 0;">📞 Phone: +1 (555) 123-4567</p>
            <p style="margin: 5px 0;">💬 Live Chat: Available 9 AM - 6 PM EST</p>
          </div>

          <p style="text-align: center; color: #666; font-size: 14px; margin-top: 30px;">
            Thank you for choosing Audiophile! We hope you enjoy your new audio equipment.
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">

          <p style="text-align: center; color: #999; font-size: 12px;">
            © 2024 Audiophile. All rights reserved.<br>
            This is an automated email. Please do not reply.
          </p>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Audiophile <onboarding@resend.dev>",
      to: customer.email,
      subject: `Order Confirmation #${orderId} - Audiophile`,
      html: emailHtml,
    });

    if (error) {
      console.error("Failed to send email:", error);
      return NextResponse.json(
        { error: "Failed to send confirmation email" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
