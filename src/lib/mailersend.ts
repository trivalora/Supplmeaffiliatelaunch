/**
 * MailerSend Integration for Transactional Emails
 *
 * Handles sending transactional emails via MailerSend API
 * Used for: Newsletter confirmations, Waitlist confirmations, etc.
 * @see https://developers.mailersend.com/
 */

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

interface MailerSendError {
  message: string;
  errors?: Record<string, string[]>;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Send an email via MailerSend API
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: SendEmailParams): Promise<EmailResult> {
  const apiKey = process.env.MAILERSEND_API_KEY;
  const fromEmail = process.env.MAILERSEND_FROM_EMAIL || "hello@suppl.me";
  const fromName = process.env.MAILERSEND_FROM_NAME || "Suppl.me";
  const defaultReplyTo = process.env.MAILERSEND_REPLY_TO || fromEmail;

  if (!apiKey) {
    console.error("MAILERSEND_API_KEY is not configured");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const emailPayload: Record<string, unknown> = {
      from: {
        email: fromEmail,
        name: fromName,
      },
      to: [{ email: to }],
      subject,
      html,
      text: text || stripHtml(html),
    };

    // Add reply-to if specified
    if (replyTo || defaultReplyTo) {
      emailPayload.reply_to = { email: replyTo || defaultReplyTo };
    }

    const response = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const error: MailerSendError = await response
        .json()
        .catch(() => ({ message: "Unknown error" }));
      console.error("MailerSend error:", error);
      return { success: false, error: error.message || "Failed to send email" };
    }

    // MailerSend returns 202 Accepted with X-Message-Id header
    const messageId = response.headers.get("X-Message-Id") || undefined;
    return { success: true, messageId };
  } catch (error: unknown) {
    console.error("MailerSend API error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}

/**
 * Send newsletter confirmation email (double opt-in)
 */
export async function sendConfirmationEmail(
  email: string,
  confirmationToken: string
): Promise<{ success: boolean; error?: string }> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";
  const confirmationUrl = `${baseUrl}/api/newsletter/confirm?token=${confirmationToken}`;

  const html = getConfirmationEmailTemplate(confirmationUrl);
  const text = getConfirmationEmailTextVersion(confirmationUrl);

  return sendEmail({
    to: email,
    subject: "Confirm your Suppl.me newsletter subscription",
    html,
    text,
  });
}

/**
 * HTML email template for confirmation
 */
function getConfirmationEmailTemplate(confirmationUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm your subscription</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #162F1C; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                Suppl.me
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #162F1C; font-size: 24px; font-weight: 600;">
                Confirm your subscription
              </h2>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Thanks for signing up for the Suppl.me newsletter! To complete your subscription, please confirm your email address by clicking the button below.
              </p>
              
              <p style="margin: 0 0 30px; color: #333333; font-size: 16px; line-height: 1.6;">
                You'll receive curated news from the world of supplements—no marketing spam, maximum one email per week. We promise.
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 10px 0 30px;">
                    <a href="${confirmationUrl}" 
                       style="display: inline-block; background-color: #162F1C; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 600;">
                      Confirm Subscription
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 15px; color: #666666; font-size: 14px; line-height: 1.5;">
                If the button doesn't work, copy and paste this link into your browser:
              </p>
              <p style="margin: 0 0 20px; word-break: break-all;">
                <a href="${confirmationUrl}" style="color: #162F1C; font-size: 14px;">${confirmationUrl}</a>
              </p>
              
              <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;">
              
              <p style="margin: 0; color: #999999; font-size: 13px; line-height: 1.5;">
                This link will expire in 24 hours. If you didn't sign up for the Suppl.me newsletter, you can safely ignore this email.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 25px 40px; text-align: center;">
              <p style="margin: 0 0 10px; color: #666666; font-size: 13px;">
                © ${new Date().getFullYear()} Suppl.me — Evidence-based supplement information
              </p>
              <p style="margin: 0; color: #999999; font-size: 12px;">
                <a href="https://www.suppl.me/privacy-policy" style="color: #999999;">Privacy Policy</a>
                &nbsp;•&nbsp;
                <a href="https://www.suppl.me" style="color: #999999;">Visit our website</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Plain text version for email clients that don't support HTML
 */
function getConfirmationEmailTextVersion(confirmationUrl: string): string {
  return `
Confirm your Suppl.me newsletter subscription
==============================================

Thanks for signing up for the Suppl.me newsletter!

To complete your subscription, please confirm your email address by clicking the link below:

${confirmationUrl}

You'll receive curated news from the world of supplements—no marketing spam, maximum one email per week. We promise.

This link will expire in 24 hours. If you didn't sign up for the Suppl.me newsletter, you can safely ignore this email.

---
© ${new Date().getFullYear()} Suppl.me — Evidence-based supplement information
https://www.suppl.me
  `.trim();
}

// ============================================
// WAITLIST EMAIL FUNCTIONS
// ============================================

/**
 * Send waitlist confirmation email (double opt-in)
 */
export async function sendWaitlistConfirmationEmail(
  email: string,
  confirmationToken: string,
  name?: string
): Promise<{ success: boolean; error?: string }> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me";
  const confirmationUrl = `${baseUrl}/api/waitlist/confirm?token=${confirmationToken}`;

  const html = getWaitlistConfirmationEmailTemplate(confirmationUrl, name);
  const text = getWaitlistConfirmationEmailTextVersion(confirmationUrl, name);

  return sendEmail({
    to: email,
    subject: "Confirm your spot on the Suppl.me waitlist",
    html,
    text,
  });
}

/**
 * HTML email template for waitlist confirmation
 */
function getWaitlistConfirmationEmailTemplate(
  confirmationUrl: string,
  name?: string
): string {
  const greeting = name ? `Hi ${name},` : "Hi there,";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm your waitlist spot</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #162F1C; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                Suppl.me
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #162F1C; font-size: 24px; font-weight: 600;">
                You're almost on the list! 🎉
              </h2>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                ${greeting}
              </p>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Thanks for your interest in Suppl.me! To secure your spot on our waitlist, please confirm your email address by clicking the button below.
              </p>
              
              <p style="margin: 0 0 30px; color: #333333; font-size: 16px; line-height: 1.6;">
                We'll notify you as soon as we're ready to welcome you—you'll be among the first to know!
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 10px 0 30px;">
                    <a href="${confirmationUrl}" 
                       style="display: inline-block; background-color: #162F1C; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 600;">
                      Confirm My Spot
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 15px; color: #666666; font-size: 14px; line-height: 1.5;">
                If the button doesn't work, copy and paste this link into your browser:
              </p>
              <p style="margin: 0 0 20px; word-break: break-all;">
                <a href="${confirmationUrl}" style="color: #162F1C; font-size: 14px;">${confirmationUrl}</a>
              </p>
              
              <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;">
              
              <p style="margin: 0; color: #999999; font-size: 13px; line-height: 1.5;">
                This link will expire in 24 hours. If you didn't sign up for the Suppl.me waitlist, you can safely ignore this email.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 25px 40px; text-align: center;">
              <p style="margin: 0 0 10px; color: #666666; font-size: 13px;">
                © ${new Date().getFullYear()} Suppl.me — Evidence-based supplement information
              </p>
              <p style="margin: 0; color: #999999; font-size: 12px;">
                <a href="https://www.suppl.me/privacy-policy" style="color: #999999;">Privacy Policy</a>
                &nbsp;•&nbsp;
                <a href="https://www.suppl.me" style="color: #999999;">Visit our website</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Plain text version for waitlist confirmation
 */
function getWaitlistConfirmationEmailTextVersion(
  confirmationUrl: string,
  name?: string
): string {
  const greeting = name ? `Hi ${name},` : "Hi there,";

  return `
You're almost on the list! 🎉
=============================

${greeting}

Thanks for your interest in Suppl.me! To secure your spot on our waitlist, please confirm your email address by clicking the link below:

${confirmationUrl}

We'll notify you as soon as we're ready to welcome you—you'll be among the first to know!

This link will expire in 24 hours. If you didn't sign up for the Suppl.me waitlist, you can safely ignore this email.

---
© ${new Date().getFullYear()} Suppl.me — Evidence-based supplement information
https://www.suppl.me
  `.trim();
}
// ============================================
// REFILL REMINDER EMAIL FUNCTIONS
// ============================================

export interface RefillProductDetails {
  productId: string;
  productName: string;
  productBrand: string;
  productUrl: string;
  servingsPerContainer: number;
  servingsPerDay: number;
  purchaseDate: string;
  estimatedRunoutDate: string;
  reminderDate: string;
}

/**
 * Send refill reminder confirmation email
 * This is sent when a user signs up for a refill reminder
 */
export async function sendRefillConfirmationEmail(
  email: string,
  token: string,
  productDetails: RefillProductDetails
): Promise<EmailResult> {
  const confirmUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me"
  }/refill/confirm?token=${token}`;
  const cancelUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me"
  }/refill/cancel?token=${token}`;

  const subject = `Confirm your refill reminder for ${productDetails.productName}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm Refill Reminder</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #162F1C; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Suppl.me</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #162F1C; font-size: 22px; font-weight: 600;">Confirm Your Refill Reminder</h2>
              
              <p style="margin: 0 0 20px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                You've requested a refill reminder for:
              </p>
              
              <!-- Product Card -->
              <table role="presentation" width="100%" style="background-color: #f8f9fa; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 8px; color: #162F1C; font-size: 18px; font-weight: 600;">${
                      productDetails.productName
                    }</p>
                    <p style="margin: 0 0 12px; color: #718096; font-size: 14px;">by ${
                      productDetails.productBrand
                    }</p>
                    <table role="presentation" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-right: 20px;">
                          <p style="margin: 0; color: #718096; font-size: 12px; text-transform: uppercase;">Servings/Day</p>
                          <p style="margin: 4px 0 0; color: #162F1C; font-size: 16px; font-weight: 500;">${
                            productDetails.servingsPerDay
                          }</p>
                        </td>
                        <td style="padding-right: 20px;">
                          <p style="margin: 0; color: #718096; font-size: 12px; text-transform: uppercase;">Runs Out</p>
                          <p style="margin: 4px 0 0; color: #162F1C; font-size: 16px; font-weight: 500;">${new Date(
                            productDetails.estimatedRunoutDate
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}</p>
                        </td>
                        <td>
                          <p style="margin: 0; color: #718096; font-size: 12px; text-transform: uppercase;">Reminder</p>
                          <p style="margin: 4px 0 0; color: #162F1C; font-size: 16px; font-weight: 500;">${new Date(
                            productDetails.reminderDate
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 24px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                Click the button below to confirm your reminder. We'll email you 7 days before your supply runs out.
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="${confirmUrl}" style="display: inline-block; background-color: #162F1C; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 16px; font-weight: 600;">Confirm Reminder</a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 24px 0 0; color: #a0aec0; font-size: 14px; text-align: center;">
                This link expires in 24 hours.
              </p>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
              
              <p style="margin: 0; color: #a0aec0; font-size: 13px; line-height: 1.5;">
                If you didn't request this reminder, you can safely ignore this email or 
                <a href="${cancelUrl}" style="color: #718096;">cancel it here</a>.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 24px 40px; text-align: center;">
              <p style="margin: 0; color: #a0aec0; font-size: 13px;">
                © ${new Date().getFullYear()} Suppl.me — Evidence-based supplement information
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  return sendEmail({
    to: email,
    subject,
    html,
    text: stripHtml(html),
  });
}

/**
 * Send refill reminder email (the actual reminder)
 * This is sent 7 days before the estimated runout date
 */
export async function sendRefillReminderEmail(
  email: string,
  productDetails: RefillProductDetails,
  unsubscribeToken: string
): Promise<EmailResult> {
  const productUrl = productDetails.productUrl;
  const unsubscribeUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.suppl.me"
  }/refill/cancel?token=${unsubscribeToken}`;

  const subject = `Time to restock: ${productDetails.productName}`;

  const daysUntilEmpty = Math.ceil(
    (new Date(productDetails.estimatedRunoutDate).getTime() - Date.now()) /
      (1000 * 60 * 60 * 24)
  );

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Refill Reminder</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #162F1C; padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Suppl.me</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #162F1C; font-size: 22px; font-weight: 600;">Time to Restock! 📦</h2>
              
              <p style="margin: 0 0 20px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                Your supply of <strong>${
                  productDetails.productName
                }</strong> is running low. Based on your usage, you have approximately <strong>${daysUntilEmpty} days</strong> left.
              </p>
              
              <!-- Product Card -->
              <table role="presentation" width="100%" style="background-color: #f8f9fa; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 8px; color: #162F1C; font-size: 18px; font-weight: 600;">${
                      productDetails.productName
                    }</p>
                    <p style="margin: 0 0 12px; color: #718096; font-size: 14px;">by ${
                      productDetails.productBrand
                    }</p>
                    <p style="margin: 0; color: #718096; font-size: 14px;">
                      📅 Estimated empty: ${new Date(
                        productDetails.estimatedRunoutDate
                      ).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 24px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                Order now to ensure continuous supplementation and avoid running out!
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="${productUrl}" style="display: inline-block; background-color: #162F1C; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 16px; font-weight: 600;">Reorder Now</a>
                  </td>
                </tr>
              </table>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
              
              <p style="margin: 0; color: #a0aec0; font-size: 13px; line-height: 1.5; text-align: center;">
                Don't want reminders for this product anymore?<br>
                <a href="${unsubscribeUrl}" style="color: #718096;">Unsubscribe from this reminder</a>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 24px 40px; text-align: center;">
              <p style="margin: 0; color: #a0aec0; font-size: 13px;">
                © ${new Date().getFullYear()} Suppl.me — Evidence-based supplement information
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  return sendEmail({
    to: email,
    subject,
    html,
    text: stripHtml(html),
  });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Simple HTML to text converter
 */
function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>.*<\/style>/gi, "")
    .replace(/<script[^>]*>.*<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Generate a secure confirmation token
 */
export function generateConfirmationToken(): string {
  // Generate a URL-safe random token
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

/**
 * Get token expiration time (24 hours from now)
 */
export function getTokenExpiration(): Date {
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24);
  return expiresAt;
}
