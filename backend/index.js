export default {
  async fetch(request, env, ctx) {
    // ALWAYS handle CORS preflight for all routes
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Handle POST requests for form submissions
    if (request.method === 'POST') {
      try {
        const body = await request.json();
        const rawKey = env.RESEND_API_KEY || 're_KEimBP9Y_JoMwWsWyzzbpB2vGj4JXChcz';
        const apiKey = rawKey ? rawKey.trim().replace(/^["']|["']$/g, '') : '';

        const { firstName, lastName, email, phone, businessType, message, isPopup } = body;
        const recipientEmails = ['errorr990551@gmail.com', 'Info@errorr.in', 'akshat99055@gmail.com', 'vp380123@gmail.com'];
        const subject = isPopup ? 'New Popup Audit Request!' : 'New Free Audit Request!';

        const htmlContent = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #ff5722; border-bottom: 2px solid #ff5722; padding-bottom: 8px;">
              ${subject}
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 140px;">First Name:</td>
                <td style="padding: 8px 0; color: #1a202c;">${firstName || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Last Name:</td>
                <td style="padding: 8px 0; color: #1a202c;">${lastName || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Email:</td>
                <td style="padding: 8px 0; color: #1a202c;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Phone:</td>
                <td style="padding: 8px 0; color: #1a202c;"><a href="tel:${phone}">${phone || 'N/A'}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Business Type:</td>
                <td style="padding: 8px 0; color: #1a202c;">${businessType || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; color: #1a202c; white-space: pre-wrap;">${message || 'N/A'}</td>
              </tr>
            </table>
          </div>
        `;

        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Error.ai Form <onboarding@resend.dev>',
            to: recipientEmails,
            subject: subject,
            html: htmlContent,
          }),
        });

        const resData = await resendRes.json();

        if (!resendRes.ok) {
          return new Response(
            JSON.stringify({ success: false, error: resData.message || resData.name || 'Failed to send email via Resend' }),
            {
              status: resendRes.status,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          );
        }

        return new Response(
          JSON.stringify({ success: true, id: resData.id }),
          {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({ success: false, error: err.message }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }
    }

    return new Response(JSON.stringify({ status: 'ok', service: 'Error.ai Backend API' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
};
