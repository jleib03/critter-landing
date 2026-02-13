import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_SES_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY || "",
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, _t } = await request.json();

    // Bot detection: reject submissions faster than 2 seconds after page load
    if (_t) {
      const elapsed = Date.now() - parseInt(_t, 10);
      if (elapsed < 2000) {
        return NextResponse.json({ success: true }); // Silent reject
      }
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const adminEmails = (process.env.CONTACT_ADMIN_EMAILS || "")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    if (adminEmails.length === 0) {
      return NextResponse.json(
        { error: "No admin emails configured" },
        { status: 500 }
      );
    }

    const fromEmail = process.env.SES_FROM_EMAIL || "noreply@critter.pet";

    const command = new SendEmailCommand({
      Source: fromEmail,
      Destination: {
        ToAddresses: adminEmails,
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `[Critter Contact] Message from ${name}`,
        },
        Body: {
          Text: {
            Data: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
          },
          Html: {
            Data: `
              <div style="font-family: sans-serif; max-width: 600px;">
                <h2 style="color: #5C2E2E;">New Contact Form Submission</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; color: #888;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
                  <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                  <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${phone || "N/A"}</td></tr>
                </table>
                <div style="margin-top: 16px; padding: 16px; background: #f9f6f1; border-radius: 8px;">
                  <p style="color: #888; margin: 0 0 8px;">Message</p>
                  <p style="color: #5C2E2E; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            `,
          },
        },
      },
    });

    await ses.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
