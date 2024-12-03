// Email template for contact

const createContactEmailTemplate = (email, subject, fullName, message) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
      <div style="text-align: center;">
  <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="sparkle logo" style="width:200px; height:200px;" />
</div>
  `;
};

module.exports = createContactEmailTemplate;