const ThankyouForAdmissionTemplate = (
  studentName,
  studentAge,
  studentGender,
  healthIssues,
  guardianName,
  email,
  number,
  emergencyNumber,
) => {
  return `
<!DOCTYPE html>
<html>

  <head>
    <title>Admission Received - Sparkle Kids Academy</title>
    <style>
      /* Modern CSS Reset */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI', system-ui, sans-serif;
        background-color: #f8fafc;
        line-height: 1.6;
      }

      .email-container {
        max-width: 680px;
        margin: 2rem auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
        overflow: hidden;
      }

      /* Header Section */
      .confirmation-header {
        background: linear-gradient(135deg, #558bff 0%, #1d4ed8 100%);
        color: white;
        padding: 2.5rem;
        text-align: center;
      }

      .confirmation-header h1 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      .confirmation-header img {
        width: 80px;
        margin-bottom: 1.5rem;
      }

      /* Content Section */
      .content-body {
        padding: 2rem;
        color: #334155;
      }

      .highlight-box {
        background: #f0f9ff;
        border-left: 4px solid #38bdf8;
        padding: 1.5rem;
        margin: 2rem 0;
        border-radius: 8px;
      }

      .details-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
      }

      .detail-card {
        padding: 1rem;
        background: #f8fafc;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
      }

      .detail-label {
        color: #64748b;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }

      .detail-value {
        color: #1e293b;
        font-weight: 500;
      }

      .next-steps {
        margin: 2rem 0;
        padding: 1.5rem;
        background: #f0fdf4;
        border-radius: 8px;
        border: 1px solid #bbf7d0;
      }

      /* Footer Section */
      .family-footer {
        background: linear-gradient(135deg, #558bff 0%, #1d4ed8 100%);
        color: white;
        padding: 2rem;
        text-align: center;
      }

      .social-links {
        margin: 1.5rem 0;
      }

      .social-links a {
        margin: 0 10px;
      }

      .mb {
        margin: 0 0 20px 0;
      }


      /* Responsive Design */
      @media (max-width: 640px) {
        .email-container {
          margin: 1rem;
        }

        .details-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>

  <body>
    <div class="email-container">
      <div class="confirmation-header">
        <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="Sparkle Logo">
        <h1>Thank You for Choosing Sparkle Kids Academy!</h1>
        <p>We've received ${studentName}'s admission form</p>
      </div>

      <div class="content-body">
        <div class="highlight-box">
          <h3 style="margin-bottom: 1rem;">✨ What Happens Next?</h3>
          <ul style="list-style: none; padding-left: 1rem;">
            <li style="margin-bottom: 0.5rem;">✓ Admission team review (1-2 business days)</li>
            <li style="margin-bottom: 0.5rem;">✓ Confirmation call from our coordinator</li>
            <li>✓ Welcome package email with next steps</li>
          </ul>
        </div>

        <h3 style="color: #1e40af; margin-bottom: 1.5rem;">Admission Summary</h3>

        <div class="details-grid mb">
          <div class="detail-card">
            <div class="detail-label">Student Information</div>
            <div class="detail-value">${studentName}</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-top: 0.5rem;">
              ${studentAge} years | ${studentGender}
            </div>
          </div>

          <div class="detail-card">
            <div class="detail-label">Primary Contact</div>
            <div class="detail-value">${guardianName}</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-top: 0.5rem;">
              📞 ${number}<br>
              ✉️ ${email}
            </div>
          </div>

          <div class="detail-card" style="grid-column: span 2">
            <div class="detail-label">Important Notes</div>
            <div style="margin-top: 0.5rem;">
              <div style="color: #dc2626; margin-bottom: 0.5rem;">
                🚨 Emergency Contact: ${emergencyNumber}
              </div>
              <div style="color: #64748b;">
                🩺 Health Considerations: ${healthIssues || 'None reported'}
              </div>
            </div>
          </div>
        </div>

        <div class="next-steps mb">
          <h3 style="color: #15803d; margin-bottom: 1rem;">📋 Preparation Checklist</h3>
          <ul style="list-style: none; padding-left: 1rem;">
            <li style="margin-bottom: 0.5rem;">✓ Review welcome email (coming soon)</li>
            <li style="margin-bottom: 0.5rem;">✓ Prepare required documents</li>
            <li>✓ Follow us on social media for updates</li>
          </ul>
        </div>
      </div>

      <div class="family-footer">
        <div class="social-links">
          <a href="https://www.facebook.com/sparkle.cyc" style="color: white;">facebook</a>
          <a href="https://www.instagram.com/sparkle__kids_academy/" style="color: white;">instagram</a>
          <a href="https://wa.me/9857049590" style="color: white;">whatsapp</a>
        </div>

        <p>Need immediate assistance?</p>
        <p>📞 Call us at</p>
        <p>9857049590,01-5409722</p>
        <p>✉️ Email sparkle.cyc@gmail.com</p>

        <p style="margin-top: 1.5rem; font-size: 0.85rem; opacity: 0.8;">
          © 2024 Sparkle Kids Academy
          <!-- •
          <a href="#" style="color: #93c5fd; text-decoration: none;">Privacy Policy</a> •
          <a href="#" style="color: #93c5fd; text-decoration: none;">Unsubscribe</a> -->
        </p>
      </div>
    </div>
  </body>

</html>
  `;
}

module.exports = ThankyouForAdmissionTemplate