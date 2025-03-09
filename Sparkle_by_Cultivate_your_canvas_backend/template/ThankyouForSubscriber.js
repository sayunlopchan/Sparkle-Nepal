const thankyouForsubscribingTemplate = (email) => {
  return `
  <!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Sparkle Kids Academy!</title>
    <style>
      /* Modern CSS Reset */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        background-color: #f8f9fa;
        line-height: 1.6;
      }

      .container {
        max-width: 680px;
        margin: 2rem auto;
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
      }

      /* Header Section */
      .hero {
        background: linear-gradient(135deg, #6366f1 0%, #2563eb 100%);
        padding: 2.5rem;
        text-align: center;
      }

      .hero img {
        width: 120px;
        margin-bottom: 1.5rem;
      }

      .hero h1 {
        color: white;
        font-size: 2rem;
        margin-bottom: 1rem;
        letter-spacing: -0.5px;
      }

      /* Content Section */
      .content {
        padding: 2.5rem;
        color: #374151;
      }

      .welcome-text {
        font-size: 1.125rem;
        margin-bottom: 2rem;
      }

      .highlight-box {
        background: #f3f4f6;
        padding: 1.5rem;
        border-radius: 12px;
        margin: 2rem 0;
        position: relative;
      }

      .highlight-box:before {
        content: "✓";
        position: absolute;
        left: -10px;
        top: -10px;
        background: #4f46e5;
        color: white;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }

      /* Footer Section */
      .footer {
        background: #f9fafb;
        padding: 2rem;
        text-align: center;
      }

      .social-links {
        margin: 1.5rem 0;
      }

      .social-links a {
        margin: 0 8px;
        text-decoration: none;
      }

      .social-links img {
        width: 24px;
        height: 24px;
        opacity: 0.75;
        transition: opacity 0.2s;
      }

      .social-links img:hover {
        opacity: 1;
      }

      .footer-logo {
        width: 100px;
        margin: 1.5rem 0;
      }

      /* Responsive Design */
      @media (max-width: 640px) {
        .container {
          margin: 1rem;
          border-radius: 12px;
        }

        .hero,
        .content {
          padding: 1.5rem;
        }

        .hero h1 {
          font-size: 1.5rem;
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <!-- Hero Section -->
      <div class="hero">
        <h1>🎉 Welcome Aboard!</h1>
        <p style="color: #e0e7ff; margin-top: 0.5rem;">You've joined the Sparkle Kids Academy family</p>
      </div>

      <!-- Main Content -->
      <div class="content">
        <p class="welcome-text">Hi there,</p>
        <p class="welcome-text">Thank you for subscribing to Sparkle Kids Academy updates! We're excited to share
          educational resources, program updates, and special offers with you.</p>

        <div class="highlight-box">
          <p style="color: #1f2937; font-weight: 500;">Registered email:</p>
          <p style="color: #4f46e5; font-size: 1.25rem; margin-top: 0.5rem;">${email}</p>
        </div>

        <p class="welcome-text">Stay tuned for our next update. In the meantime, check out our learning resources!</p>

        <a href="https://sparklenepal.com"
          style="display: inline-block; background: #4f46e5; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 1rem; font-weight: 500;">
          Visit Our Website
        </a>
      </div>

      <!-- Footer -->
      <div class="footer">
        <div class="social-links">
          <a href="https://www.facebook.com/sparkle.cyc">facebook</a>
          <a href="https://www.instagram.com/sparkle__kids_academy/">instagram</a>
          <a href="https://wa.me/9857049590">whatsapp</a>
        </div>

        <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="Sparkle Logo" class="footer-logo">

        <p style="color: #6b7280; font-size: 0.875rem;">
          © 2024 Sparkle Kids Academy<br>
          Lalitpur-5, Manbhawan<br>
          <!-- <a href="#" style="color: #4f46e5; text-decoration: none;">Unsubscribe</a> |
          <a href="#" style="color: #4f46e5; text-decoration: none;">Privacy Policy</a> -->
        </p>
      </div>
    </div>
  </body>

</html>
  `;
}
module.exports = thankyouForsubscribingTemplate;