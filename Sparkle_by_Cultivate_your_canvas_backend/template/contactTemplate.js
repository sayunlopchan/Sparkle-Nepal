// Email template for contact

const createContactEmailTemplate = (email, subject, fullName, message) => {
  return `
 <!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
      /* Modern Reset */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI', system-ui, sans-serif;
        background-color: #f8fafc;
      }

      .container {
        max-width: 680px;
        margin: 2rem auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
        overflow: hidden;
      }

      /* Header Section */
      .letterhead {
        background: linear-gradient(135deg, #558bff 0%, #1d4ed8 100%);
        color: white;
        padding: 2rem;
        text-align: center;
        position: relative;
      }

      .letterhead h1 {
        font-size: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }

      /* Content Styling */
      .content {
        padding: 2rem;
        color: #334155;
      }

      .message-card {
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 1.5rem 0;
      }

      .sender-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .info-item {
        padding: 1rem;
        background: #f8fafc;
        border-radius: 6px;
        margin-bottom: 20px;
      }

      .info-label {
        color: #64748b;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
      }

      .info-value {
        color: #1e293b;
        font-weight: 500;
      }

      .message-content {
        border-left: 4px solid #3b82f6;
        padding-left: 1rem;
        margin: 1.5rem 0;
      }

      /* Footer Styling */
      .footer {
        background: linear-gradient(135deg, #558bff 0%, #1d4ed8 100%);
        color: white;
        padding: 2rem;
        text-align: center;
      }

      .footer-logo {
        width: 120px;
        margin-bottom: 1.5rem;
      }


      @media (max-width: 640px) {
        .container {
          margin: 1rem;
        }

        .sender-info {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <!-- Header -->
      <div class="letterhead">
        <h1>
          ✉️ New Contact Message
        </h1>
      </div>

      <!-- Body Content -->
      <div class="content">
        <div class="message-card">
          <div class="sender-info">
            <div class="info-item">
              <div class="info-label">From</div>
              <div class="info-value">${fullName}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Email</div>
              <div class="info-value">${email}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Subject</div>
              <div class="info-value">${subject}</div>
            </div>
          </div>

          <div class="message-content">
            <div class="info-label">Message</div>
            <p style="margin-top: 0.5rem; color: #475569; line-height: 1.6;">${message}</p>
          </div>

        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="Sparkle Logo" class="footer-logo">


        <p style="opacity: 0.8; margin-top: 1rem; font-size: 0.875rem;">
          © 2024 Sparkle Kids Academy<br>
          Lalitpur-5, Manbhawan
        </p>
      </div>
    </div>
  </body>

</html>
  
  `;
};

module.exports = createContactEmailTemplate;