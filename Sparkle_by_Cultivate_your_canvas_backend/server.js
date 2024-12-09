const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

// imported email templates
const createContactEmailTemplate = require("./template/contactTemplate");
const createAdmissionEmailTemplate = require("./template/admissionTemplate");


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all domains
app.use(cors());

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
    course,
    enrollmentDate,
    startingDate,
    reference,

  } = req.body.values;

  // Create email body with the custom template
  const emailHtml = createAdmissionEmailTemplate(
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
    course,
    enrollmentDate,
    startingDate,
    reference,

  );

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Admission Form",
    html: emailHtml, // Using the custom HTML template here
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Message sent: " + info.response);
  });
});


// POST endpoint to handle conatact message submission
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
    subject: "New Message",
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




app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
