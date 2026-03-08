import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: "Name and message are required" },
        { status: 400 }
      );
    }

    if (!email && !phone) {
      return NextResponse.json(
        { success: false, error: "Please provide an email or phone number" },
        { status: 400 }
      );
    }

    const resend = getResend();

    await resend.emails.send({
      from: "Evergreen Insurance <onboarding@resend.dev>",
      to: ["info@maivenai.com"],
      subject: `Contact Form: ${subject} — ${name}`,
      text: [
        "New contact form submission from evergreeninsurance.com",
        "",
        `Name: ${name}`,
        `Email: ${email || "N/A"}`,
        `Phone: ${phone || "N/A"}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
        "",
        "---",
        "Sent from the Evergreen Insurance website contact form.",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to send" },
      { status: 500 }
    );
  }
}
