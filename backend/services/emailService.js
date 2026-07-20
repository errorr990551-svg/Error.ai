import { Resend } from "resend";

export const sendMail = async ({ to, cc, subject, html, attachments = [] }) => {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured in environment variables.");
    }
    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM || "Errorr <onboarding@resend.dev>";

    const response = await resend.emails.send({
      from: fromAddress,
      to: Array.isArray(to) ? to : [to],
      cc: cc
        ? Array.isArray(cc)
          ? cc
          : [cc]
        : undefined,
      subject,
      html,
      attachments: attachments.map((file) => ({
        filename: file.filename,
        content: file.content,
      })),
    });

    if (response.error) {
      console.error("Resend API Error:", response.error);
      throw new Error(response.error.message || "Failed to send email via Resend");
    }

    console.log("Resend success response:", response.data);
    return response.data;
  } catch (error) {
    console.error("RESEND ERROR:", error);
    throw error;
  }
};
