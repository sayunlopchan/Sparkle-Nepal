// Email template for contact

const createContactEmailTemplate = (email, subject, fullName, message) => {
  return `
  
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
 <style>
        /* General Reset */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f2f2f2;
        }

        .container {
            width: 100%;
            max-width: 700px;
            margin: 40px auto;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Letterhead Styling */
        .letterhead {
            background-color: #4CAF50;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .letterhead h1 {
            margin: 0;
            font-size: 28px;
        }

        /* Content Styling */
        .content {
            padding: 30px;
        }

        .content h2 {
            font-size: 22px;
            color: #333;
            margin-bottom: 15px;
        }

        .content p {
            font-size: 16px;
            color: #555;
            line-height: 1.6;
        }

        .content .info {
            margin-bottom: 20px;
        }

        .content .info p {
            margin: 5px 0;
            font-size: 16px;
        }

        .content .info strong {
            color: #4CAF50;
        }

        /* Message Title Styling */
        .message-title {
            background-color: #f2f2f2;
            padding: 10px;
            margin-bottom: 15px;
            font-weight: bold;
            font-size: 18px;
            color: #333;
            border-left: 4px solid #4CAF50;
        }

        /* Footer Styling */
        .footer {
            background-color: #333;
            color: #ffffff;
            padding: 15px;
            text-align: center;
            font-size: 14px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        .footer a {
            color: #4CAF50;
            text-decoration: none;
            font-weight: bold;
        }

        /* Image Styling */
        .footer img {
            max-width: 150px;
            height: auto;
            margin: 10px 0;
        }

        /* Responsive Styling */
        @media (max-width: 600px) {
            .container {
                width: 90%;
            }

            .letterhead h1 {
                font-size: 24px;
            }

            .content h2 {
                font-size: 20px;
            }
        }

        /* Media Query for screens smaller than 400px */
        @media (max-width: 400px) {
            .letterhead h1 {
                font-size: 18px;
            }

            .content h2 {
                font-size: 16px;
            }

            .p-message {
                font-size: 12px;
            }
        }

    </style>
</head>
<body>
    <div class="container">
        
        <!-- Letterhead -->
        <div class="letterhead">
            <h1>New Message !!!</h1>
        </div>

        <!-- Body Content -->
        <div class="content">
            <h2>Submitted Information:</h2>
            <div class="info">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Full Name:</strong> ${fullName}</p>
              
                <!-- Message Title with Background Color -->
                <div class="message-title">Message:</div>
                <p class="p-message">${message}</p>
            </div>

        </div>

        <!-- Footer -->
        <div class="footer">
                      <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="Sparkle Logo">
            <p>&copy; 2024 Sparkle Kids Academy. All Rights Reserved.</p>
            <p>Visit us at <a href="www.sparklekidsacademy.com">www.sparklekidsacademy.com</a></p>

        </div>
    </div>
</body>
</html>

  
  `;
};

module.exports = createContactEmailTemplate;