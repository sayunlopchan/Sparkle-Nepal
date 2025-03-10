const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

// imported email templates
const createContactEmailTemplate = require("./template/contactTemplate");
const createAdmissionEmailTemplate = require("./template/admissionTemplate");
const subscribeTemplate = require("./template/subscribeTemplate");
const thankyouForsubscribingTemplate = require("./template/ThankyouForSubscriber");
const ThankyouForAdmissionTemplate = require("./template/ThankyouForAdmission");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
  // origin: "http://localhost:5173"
  origin: "https://sparkle-nepal.vercel.app"
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Check if the required environment variables are present
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error("Missing environment variables: EMAIL_USER or EMAIL_PASS");
}

// Created a transporter to send emails using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST endpoint to handle admission form submission
app.post("/send-email", (req, res) => {
  console.log("Received form data:", req.body);

  // Destructure directly from req.body instead of req.body.values
  const {
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
    courseEnrollementDuration,
    reference,
  } = req.body;  // Changed from req.body.values


  // Create email body for admin notification 
  const adminEmailHtml = createAdmissionEmailTemplate(
    studentName,
    studentDob,
    studentAge,
    studentGender,
    studentAddress,
    foodAllergies,
    healthIssues,
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
    courseEnrollementDuration,
    reference,
  );

  const thankYouEmailHtml = ThankyouForAdmissionTemplate(
    studentName,
    studentAge,
    studentGender,
    healthIssues,
    guardianName,
    email,
    number,
    emergencyNumber,
    reference
  );


  // Mail options for admin notification
  const adminMailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Admission Form Submission",
    html: adminEmailHtml,
  };

  // Mail options for thank-you email to the submitter
  const submitterMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank You for Your Admission Submission!",
    html: thankYouEmailHtml,
  };

  // Send the admin email first
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending admin email: " + error.toString());
    }

    transporter.sendMail(submitterMailOptions, (error, info) => {
      if (error) {
        return res.status(500).send("Error sending thank-you email: " + error.toString());
      }
      res.status(200).send("Admission form submitted and thank-you email sent.");
    });
  });
});

// POST endpoint to handle contact form submission
app.post("/send-message", (req, res) => {
  console.log("Received contact data:", req.body);
  const {
    email,
    subject,
    fullName,
    message,
  } = req.body.values;

  const emailHtml = createContactEmailTemplate(
    email,
    subject,
    fullName,
    message,
  );

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    html: emailHtml,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Message sent: " + info.response);
  });
});

// POST endpoint to handle subscribe newsletter
app.post("/subscribe", (req, res) => {
  console.log("Received subscribed email:", req.body);
  const { email } = req.body;


  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Subscriber",
    html: subscribeTemplate(email),
  };


  const subscriberMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank You for Subscribing!",
    html: thankyouForsubscribingTemplate(email),
  };

  // Send both emails
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending admin notification: " + error.toString());
    }

    transporter.sendMail(subscriberMailOptions, (error, info) => {
      if (error) {
        return res.status(500).send("Error sending thank-you email: " + error.toString());
      }

      res.status(200).send("Subscription successful, thank-you email sent.");
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
