import { sendMail } from "../services/emailService.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, firstName, lastName, email, phone, location, company, businessType, message } = req.body;

    const fullName = name || `${firstName || ""} ${lastName || ""}`.trim();
    const comp = company || businessType || "Not Provided";

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill in all required fields (Name, Email, Phone, Message)." 
      });
    }

    // In Resend free/testing mode without verified domain, only the account owner email (errorr990551@gmail.com) can receive emails.
    const toEmail = process.env.NOTIFICATION_EMAIL || "errorr990551@gmail.com";
    const ccEmails = process.env.RESEND_FROM ? ["akshat99055@gmail.com"] : undefined;

    // Await email sending to guarantee response accuracy
    await sendMail({
      to: toEmail,
      cc: ccEmails,
      subject: "New Contact Us / Free Audit Enquiry",
      html: `
        <h2>New Contact / Audit Enquiry</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Location:</b> ${location || "Not Provided"}</p>
        <p><b>Business Type / Company:</b> ${comp}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    // Respond to user
    return res.status(200).json({ 
      success: true, 
      message: "Message sent successfully! Our team will get back to you shortly." 
    });

  } catch (err) {
    console.error("Contact form processing error:", err);
    return res.status(500).json({ 
      success: false, 
      message: err.message || "Something went wrong sending your message. Please try again later." 
    });
  }
};
