import { Resend } from "resend";

const recipient = process.env.INQUIRY_TO_EMAIL || "huijia@seppes.com.cn";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] || character);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return Response.json({ message: "The inquiry is too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid inquiry data." }, { status: 400 });
  }

  // Honeypot: silently accept automated submissions without sending email.
  if (clean(body.website, 100)) {
    return Response.json({ message: "Your inquiry has been sent." });
  }

  const source = clean(body.source, 100) || "Website inquiry";
  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 180);
  const country = clean(body.country, 120);
  const phone = clean(body.phone, 100);
  const product = clean(body.product, 160);
  const message = clean(body.message, 4_000);
  const isNewsletter = source === "Blog newsletter";

  if (email && !emailPattern.test(email)) {
    return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (isNewsletter ? !email : (!name || !phone || !message)) {
    return Response.json({ message: isNewsletter ? "Please enter your work email." : "Please complete all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Inquiry email is not configured. RESEND_API_KEY and INQUIRY_FROM_EMAIL are required.");
    return Response.json({ message: "Email delivery is being configured. Please contact us on WhatsApp for now." }, { status: 503 });
  }

  const fields = isNewsletter
    ? [["Work email", email]]
    : [
        ["Full name", name],
        ["Company", company || "Not provided"],
        ["Email", email || "Not provided"],
        ["Country", country || "Not provided"],
        ["Phone / WhatsApp", phone],
        ["Product required", product || "Not specified"],
        ["Project requirements", message],
      ];

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;color:#0b1f33;line-height:1.6;max-width:680px">
      <h1 style="font-size:24px;margin:0 0 20px">${escapeHtml(isNewsletter ? "New newsletter request" : "New website inquiry")}</h1>
      <table style="width:100%;border-collapse:collapse">
        ${fields.map(([label, value]) => `<tr><th style="padding:10px;border:1px solid #d9e0e7;text-align:left;vertical-align:top;width:180px;background:#f1f4f7">${escapeHtml(label)}</th><td style="padding:10px;border:1px solid #d9e0e7;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("")}
      </table>
      <p style="margin-top:18px;color:#66788a;font-size:12px">Source: ${escapeHtml(source)} · Sent from the SEPPES website</p>
    </div>`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [recipient],
    replyTo: email || undefined,
    subject: isNewsletter ? "SEPPES website: newsletter request" : `SEPPES website inquiry: ${product || "Industrial door project"}`,
    text: `${text}\n\nSource: ${source}`,
    html,
  });

  if (error) {
    console.error("Resend inquiry error:", error.name, error.message);
    return Response.json({ message: "We could not send your inquiry. Please try again or contact us on WhatsApp." }, { status: 502 });
  }

  return Response.json({ message: isNewsletter ? "Thank you. Your update request has been sent." : "Thank you. Your inquiry has been sent to our sales team." });
}
