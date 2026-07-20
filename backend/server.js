import { Hono } from "hono";
import { cors } from "hono/cors";
import dotenv from "dotenv";
import { sendMail } from "./services/emailService.js";

dotenv.config();

const app = new Hono();

// CORS middleware for all routes
app.use("*", cors({
  origin: "*",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
}));

// Health check endpoints
app.get("/", (c) => c.json({ status: "OK", service: "error-ai-backend" }));
app.get("/health", (c) => c.json({ status: "OK", timestamp: new Date().toISOString() }));
app.get("/api/health", (c) => c.json({ status: "OK", timestamp: new Date().toISOString() }));

// Contact form endpoint
app.post("/api/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, firstName, lastName, email, phone, location, company, businessType, message } = body;

    const fullName = name || `${firstName || ""} ${lastName || ""}`.trim();
    const comp = company || businessType || "Not Provided";

    if (!fullName || !email || !phone || !message) {
      return c.json({ 
        success: false, 
        message: "Please fill in all required fields (Name, Email, Phone, Message)." 
      }, 400);
    }

    const apiKey = c.env?.RESEND_API_KEY || process.env.RESEND_API_KEY || "re_LJHuUnv1_2Uov5UjeMCmcfzu6nSPJGWJ2";
    const toEmail = c.env?.NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL || "errorr990551@gmail.com";
    const ccEmails = (c.env?.RESEND_FROM || process.env.RESEND_FROM) ? ["akshat99055@gmail.com"] : undefined;

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
      apiKey,
    });

    return c.json({ 
      success: true, 
      message: "Message sent successfully! Our team will get back to you shortly." 
    });

  } catch (err) {
    console.error("Contact API error:", err);
    return c.json({ 
      success: false, 
      message: err.message || "Something went wrong sending your message. Please try again later." 
    }, 500);
  }
});

// Complaint endpoint
app.post("/api/complaint", async (c) => {
  try {
    const body = await c.req.parseBody();
    const apiKey = c.env?.RESEND_API_KEY || process.env.RESEND_API_KEY || "re_LJHuUnv1_2Uov5UjeMCmcfzu6nSPJGWJ2";
    const toEmail = c.env?.NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL || "errorr990551@gmail.com";

    const attachments = [];
    if (body.image && body.image instanceof File) {
      const arrayBuffer = await body.image.arrayBuffer();
      attachments.push({
        filename: body.image.name,
        content: Buffer.from(arrayBuffer),
        contentType: body.image.type,
      });
    }

    await sendMail({
      to: toEmail,
      subject: "New Complaint Form Submitted",
      html: `
        <h2>New Complaint Received</h2>
        <p><b>Customer Name:</b> ${body.customerName || "Not Provided"}</p>
        <p><b>Contact Person:</b> ${body.contactPerson || "Not Provided"}</p>
        <p><b>Email:</b> ${body.email || "Not Provided"}</p>
        <p><b>Phone:</b> ${body.phone || "Not Provided"}</p>
        <hr/>
        <p><b>Flow Meter Model:</b> ${body.flowMeterModel || "Not Provided"}</p>
        <p><b>Serial Number:</b> ${body.serialNumber || "Not Provided"}</p>
        <p><b>Flow Meter Size:</b> ${body.flowMeterSize || "Not Provided"}</p>
        <p><b>Make / Brand:</b> ${body.makeBrand || "Not Provided"}</p>
        <p><b>Warranty Status:</b> ${body.warrantyStatus || "Not Provided"}</p>
        <hr/>
        <p><b>Nature of Complaint:</b> ${body.complaintNature || "Not Provided"}</p>
        <p><b>Frequency of Issue:</b> ${body.frequency || "Not Provided"}</p>
        <p><b>Issue Description:</b><br/>${body.issueDescription || "Not Provided"}</p>
      `,
      attachments,
      apiKey,
    });

    return c.json({ success: true, message: "Complaint submitted successfully!" });
  } catch (err) {
    console.error("Complaint API error:", err);
    return c.json({ success: false, message: err.message || "Failed to submit complaint" }, 500);
  }
});

// Application endpoint
app.post("/api/apply", async (c) => {
  try {
    const body = await c.req.parseBody();
    const apiKey = c.env?.RESEND_API_KEY || process.env.RESEND_API_KEY || "re_LJHuUnv1_2Uov5UjeMCmcfzu6nSPJGWJ2";
    const toEmail = c.env?.NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL || "errorr990551@gmail.com";

    const attachments = [];
    if (body.resume && body.resume instanceof File) {
      const arrayBuffer = await body.resume.arrayBuffer();
      attachments.push({
        filename: body.resume.name,
        content: Buffer.from(arrayBuffer),
        contentType: body.resume.type,
      });
    }

    await sendMail({
      to: toEmail,
      subject: `New Job Application - ${body.role || "General"}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${body.fullName || "Not Provided"}</p>
        <p><b>Email:</b> ${body.email || "Not Provided"}</p>
        <p><b>Mobile:</b> ${body.mobile || "Not Provided"}</p>
        <p><b>Location:</b> ${body.location || "Not Provided"}</p>
        <p><b>Applied For:</b> ${body.role || "Not Provided"}</p>
      `,
      attachments,
      apiKey,
    });

    return c.json({ success: true, message: "Application submitted successfully!" });
  } catch (err) {
    console.error("Application API error:", err);
    return c.json({ success: false, message: err.message || "Failed to submit application" }, 500);
  }
});

export default app;
