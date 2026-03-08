import { Resend } from "resend";
import { NextResponse } from "next/server";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { insuranceType, name, phone, email, currentProvider, renewalDate, notes } = body;

    if (!insuranceType || !name) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = getResend();

    await resend.emails.send({
      from: "Evergreen Insurance <onboarding@resend.dev>",
      to: ["info@maivenai.com"],
      subject: `New Quote Request: ${insuranceType} — ${name}`,
      text: [
        "New quote request from evergreeninsurance.com",
        "",
        `Type: ${insuranceType}`,
        `Name: ${name}`,
        `Phone: ${phone || "N/A"}`,
        `Email: ${email || "N/A"}`,
        `Current Provider: ${currentProvider || "N/A"}`,
        `Renewal Date: ${renewalDate || "N/A"}`,
        `Notes: ${notes || "None"}`,
        "",
        "---",
        "Sent from the Evergreen Insurance website quote form.",
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
