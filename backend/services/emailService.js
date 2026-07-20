import { Resend } from "resend";

export const sendMail = async ({ to, cc, subject, html, attachments = [], apiKey }) => {
  try {
    const key = apiKey || process.env.RESEND_API_KEY || "re_LJHuUnv1_2Uov5UjeMCmcfzu6nSPJGWJ2";
    const resend = new Resend(key);
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
