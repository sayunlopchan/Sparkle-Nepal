// Email template for admission form
const createAdmissionEmailTemplate = (
  // Student
  studentName,
  studentDob,
  studentAge,
  studentGender,
  studentAddress,
  foodAllergies,
  healthIssues,
  // Guardian
  guardianName,
  guardianDob,
  guardianAge,
  guardianGender,
  guardianAddress,
  maritalStatus,
  email,
  number,
  emergencyNumber,
  nationality,
  // Courses
  courseEnrollementPeriod,
  reference,

) => {
  return `
<!DOCTYPE html>
<html>

  <head>
    <title>New Admission Notification</title>
    <style>
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

      .email-header {
        background: linear-gradient(135deg, #558bff 0%, #1d4ed8 100%);
        color: white;
        padding: 2rem;
        text-align: center;
      }

      .header-badge {
        background: #4f46e5;
        padding: 8px 20px;
        border-radius: 20px;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 1.5rem;
      }

      .email-body {
        padding: 2rem;
        color: #334155;
      }

      .section-card {
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 1.5rem 0;
      }

      .section-title {
        color: #1e40af;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .data-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      .data-item {
        padding: 0.75rem;
        background: #f8fafc;
        border-radius: 6px;
      }

      .data-label {
        color: #64748b;
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
      }

      .data-value {
        color: #1e293b;
        font-weight: 500;
      }

      .emergency-alert {
        background: #fee2e2;
        border: 1px solid #fca5a5;
      }

      .footer {
        background: linear-gradient(135deg, #558bff 0%, #1d4ed8 100%);
        color: white;
        padding: 2rem;
        text-align: center;
      }

      @media (max-width: 640px) {
        .email-container {
          margin: 1rem;
        }
      }
    </style>
  </head>

  <body>
    <div class="email-container">
      <div class="email-header">
        <div class="header-badge">NEW ADMISSION</div>
        <h1>Admission Application Received</h1>
        <p style="margin-top: 0.5rem;">Reference: ${reference}</p>
      </div>

      <div class="email-body">
        <!-- Student Details -->
        <div class="section-card">
          <div class="section-title">
            📚 Student Information
          </div>
          <div class="data-grid">
            <div class="data-item">
              <div class="data-label">Full Name</div>
              <div class="data-value">${studentName}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Date of Birth</div>
              <div class="data-value">${studentDob}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Age</div>
              <div class="data-value">${studentAge}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Gender</div>
              <div class="data-value">${studentGender}</div>
            </div>
            <div class="data-item" style="grid-column: span 2">
              <div class="data-label">Address</div>
              <div class="data-value">${studentAddress}</div>
            </div>
          </div>
        </div>

        <!-- Guardian Details -->
        <div class="section-card">
          <div class="section-title">
            👨👩 Guardian Details
          </div>
          <div class="data-grid">
            <div class="data-item">
              <div class="data-label">Full Name</div>
              <div class="data-value">${guardianName}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Date of Birth</div>
              <div class="data-value">${guardianDob}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Age</div>
              <div class="data-value">${guardianAge}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Gender</div>
              <div class="data-value">${guardianGender}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Marital Status</div>
              <div class="data-value">${maritalStatus}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Nationality</div>
              <div class="data-value">${nationality}</div>
            </div>
            <div class="data-item" style="grid-column: span 2">
              <div class="data-label">Address</div>
              <div class="data-value">${guardianAddress}</div>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="section-card">
          <div class="section-title">
            📞 Contact Information
          </div>
          <div class="data-grid">
            <div class="data-item">
              <div class="data-label">Email</div>
              <div class="data-value">${email}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Primary Contact</div>
              <div class="data-value">${number}</div>
            </div>
            <div class="data-item emergency-alert">
              <div class="data-label">Emergency Contact</div>
              <div class="data-value">${emergencyNumber}</div>
            </div>
          </div>
        </div>

        <!-- Health Information -->
        <div class="section-card">
          <div class="section-title">
            ⚕️ Health Information
          </div>
          <div class="data-grid">
            <div class="data-item">
              <div class="data-label">Food Allergies</div>
              <div class="data-value">${foodAllergies}</div>
            </div>
            <div class="data-item">
              <div class="data-label">Health Issues</div>
              <div class="data-value">${healthIssues}</div>
            </div>
          </div>
        </div>

        <!-- Enrollment Details -->
        <div class="section-card">
          <div class="section-title">
            🎓 Enrollment Information
          </div>
          <div class="data-grid">
            <div class="data-item" style="background: #dbeafe;">
              <div class="data-label">Selected Course period</div>
              <div class="data-value" style="color: #2563eb;">${courseEnrollementPeriod}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="Sparkle Logo"
          style="width: 120px; margin-bottom: 1rem;">
        <p style="opacity: 0.9;">© 2024 Sparkle Kids Academy</p>
        <p style="margin-top: 0.5rem; opacity: 0.8;">Visit us at <a href="https://sparklenepal.com"
            style="color: #93c5fd; text-decoration: none;">www.sparklenepal.com</a></p>
      </div>
    </div>
  </body>

</html>
`;
};

module.exports = createAdmissionEmailTemplate;



