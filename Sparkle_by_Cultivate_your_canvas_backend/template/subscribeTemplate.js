// Email template for contact

const subscribeTemplate = (email) => {
  return `
  <!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Subscription Alert - Admin</title>
    <style>
      /* Admin-Specific Styles */
      body {
        font-family: 'Segoe UI', system-ui, sans-serif;
        background-color: #f8f9fc;
        margin: 0;
        padding: 0;
      }

      .admin-container {
        max-width: 800px;
        margin: 20px auto;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
      }

      .admin-header {
        background: #1a237e;
        padding: 1.5rem;
        border-radius: 8px 8px 0 0;
      }


      .alert-badge {
        background: #4caf50;
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.9rem;
        display: inline-block;
        margin-bottom: 1rem;
      }

      .data-card {
        border-left: 4px solid #3f51b5;
        background: #f8f9ff;
        padding: 1.5rem;
        margin: 1.5rem 0;
        border-radius: 0 8px 8px 0;
      }

      .data-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
      }

      .data-table td {
        padding: 12px;
        border-bottom: 1px solid #eee;
      }

      .data-table td:first-child {
        font-weight: 500;
        color: #666;
        width: 30%;
      }

      .quick-actions {
        margin: 2rem 0;
        text-align: center;
      }

      .action-button {
        display: inline-flex;
        align-items: center;
        padding: 10px 20px;
        margin: 0 8px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 500;
        transition: transform 0.2s;
      }

      .action-button.primary {
        background: #3f51b5;
        color: white;
      }

      .action-button.secondary {
        background: #e8eaf6;
        color: #1a237e;
        border: 1px solid #c5cae9;
      }

      .security-note {
        color: #666;
        font-size: 0.9rem;
        padding: 1.5rem;
        border-top: 1px solid #eee;
        background: #fafbff;
      }

      .footer {
        background: #1e293b;
        color: white;
        padding: 2rem;
        text-align: center;
      }

      @media (max-width: 640px) {
        .admin-container {
          margin: 10px;
        }

        .action-button {
          width: 100%;
          margin: 8px 0;
          justify-content: center;
        }
      }
    </style>
  </head>

  <body>
    <div class="admin-container">
      <div style="padding: 2rem">
        <div class="alert-badge">NEW SUBSCRIPTION</div>
        <h2 style="color: #1a237e; margin-bottom: 1.5rem;">Subscription Notification</h2>

        <div class="data-card">
          <table class="data-table">
            <tr>
              <td>Subscriber Email</td>
              <td><strong>${email}</strong></td>
            </tr>
            <tr>
              <td>Subscription Source</td>
              <td>Newsletter</td>
            </tr>
          </table>
        </div>


        <div class="security-note">
          <strong>Security Check:</strong><br>
          • Subscribed through verified channel<br>
          • Email format validated<br>
        </div>
      </div>

      <div style="background: #f5f5f5; padding: 1.5rem; text-align: center; color: #666; font-size: 0.9rem;">
        <p>This is an automated notification.</p>
      </div>
  
    <div class="footer">
        <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="Sparkle Logo"
          style="width: 120px; margin-bottom: 1rem;">
        <p style="opacity: 0.9;">© 2024 Sparkle Kids Academy</p>
        <p style="margin-top: 0.5rem; opacity: 0.8;">Visit us at <a href="http://www.sparklekidsacademy.com"
            style="color: #93c5fd; text-decoration: none;">www.sparklekidsacademy.com</a></p>
      </div>
  </div>
  </body>

</html>
  
  `;
};

module.exports = subscribeTemplate;