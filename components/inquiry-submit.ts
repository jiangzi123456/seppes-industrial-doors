export type InquirySubmitState = "idle" | "submitting" | "success" | "error";

type InquiryResponse = {
  message?: string;
};

export async function submitInquiry(form: HTMLFormElement, source: string) {
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, source }),
  });

  const result = (await response.json().catch(() => ({}))) as InquiryResponse;
  if (!response.ok) {
    throw new Error(result.message || "We could not send your inquiry. Please try again or contact us on WhatsApp.");
  }

  return result;
}
