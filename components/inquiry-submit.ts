export type InquirySubmitState = "idle" | "submitting" | "success" | "error";

type InquiryResponse = {
  message?: string;
};

export async function submitInquiry(form: HTMLFormElement, source: string) {
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  if (source !== "Blog newsletter") {
    const email = String(payload.email ?? "").trim();
    const phone = String(payload.phone ?? "").trim();
    if (!email && !phone) {
      throw new Error("Please provide an email address or a phone / WhatsApp number.");
    }
  }

  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, source, page: window.location.pathname }),
  });

  const result = (await response.json().catch(() => ({}))) as InquiryResponse;
  if (!response.ok) {
    throw new Error(result.message || "We could not send your inquiry. Please try again or contact us on WhatsApp.");
  }

  return result;
}
