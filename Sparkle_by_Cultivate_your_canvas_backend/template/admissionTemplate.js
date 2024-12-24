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
  course,
  reference,

) => {
  return `
  <!DOCTYPE html>
<html>
<head>
    <title>New Admission Form</title>
    <style>
        /* General Reset */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        /* Container */
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            overflow: hidden;
        }

        /* Header */
        .email-header {
            background-color: #4CAF50;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }

        .email-header h1 {
            margin: 0;
            font-size: 28px;
        }

        /* Content */
        .email-body {
            padding: 20px;
        }

        h3 {
            margin-bottom: 10px;
            color: #4CAF50;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        table th, table td {
            text-align: left;
            padding: 8px;
            border-bottom: 1px solid #ddd;
        }

        table th {
            background-color: #f4f4f4;
            color: #333;
        }

        table td {
            color: #555;
        }

        /* Footer */
        .email-footer {
            background-color: #333;
            color: #ffffff;
            text-align: center;
            padding: 10px;
            font-size: 14px;
        }

        .email-footer a {
            color: #4CAF50;
            text-decoration: none;
            font-weight: bold;
        }

        /* Image Styling */
        .email-image {
            display: block;
            margin: 0 auto 20px auto;
            max-width: 100%;
            border-radius: 4px;
        }

        /* Reference and Contact */
        .reference {
            font-weight: bold;
            color: #4CAF50;
        }

        .contact {
            color: #555;
            margin-bottom: 10px;
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

        .footer img {
            max-width: 150px;
            height: auto;
            margin: 10px 0;
        }

        /* Responsive Styling */
        @media (max-width: 600px) {
            .email-container {
                width: 100%;
                padding: 10px;
            }

            .email-header h1 {
                font-size: 24px;
            }

            h3 {
                font-size: 18px;
            }

            table th, table td {
                font-size: 14px;
            }

            .footer img {
                max-width: 120px;
            }
        }

        /* Media Query for very small screens (less than 400px) */
        @media (max-width: 400px) {
            .email-header h1 {
                font-size: 20px;
            }

            h3 {
                font-size: 16px;
            }

            table th, table td {
                font-size: 12px;
            }

            .footer img {
                max-width: 100px;
            }

            .email-body {
                padding: 15px;
            }

            .footer {
                padding: 10px;
            }
        }

    </style>
</head>
<body>
    <!-- Container -->
    <div class="email-container">
        
        <!-- Header -->
        <div class="email-header">
            <h1>New Admission Form</h1>
        </div>
        
        <!-- Body -->
        <div class="email-body">
            
            <h3>Student Details:</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <td>${studentName}</td>
                </tr>
                <tr>
                    <th>DOB</th>
                    <td>${studentDob}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>${studentAge}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>${studentGender}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>${studentAddress}</td>
                </tr>
                <tr>
                    <th>Food Allergies</th>
                    <td>${foodAllergies}</td>
                </tr>
                <tr>
                    <th>Health Issue</th>
                    <td>${healthIssues}</td>
                </tr>
            </table>

            <h3>Guardian Details:</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <td>${guardianName}</td>
                </tr>
                <tr>
                    <th>DOB</th>
                    <td>${guardianDob}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>${guardianAge}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>${guardianGender}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th>Emergency Number</th>
                    <td>${emergencyNumber}</td>
                </tr>
                <tr>
                    <th>Contact Number</th>
                    <td>${number}</td>
                </tr>
                <tr>
                    <th>Marital Status</th>
                    <td>${maritalStatus}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>${guardianAddress}</td>
                </tr>
                <tr>
                    <th>Nationality</th>
                    <td>${nationality}</td>
                </tr>
            </table>

            <h3>Membership Details:</h3>
            <table>
                <tr>
                    <th>Course Enrollment</th>
                    <td>${course}</td>
                </tr>
            </table>

            <p class="reference">Reference: ${reference}</p>

        </div>
        
        <!-- Footer -->
        <div class="footer">
            <img src="https://sparklenepal.com/assets/SPARKLE_LOGO-DhKy7uhc.png" alt="Sparkle Logo">
            <p>&copy; 2024 Sparkle Kids Academy. All Rights Reserved.</p>
            <p>Visit us at <a href="http://www.sparklekidsacademy.com">www.sparklekidsacademy.com</a></p>
        </div>
    </div>
</body>
</html>

`;
};

module.exports = createAdmissionEmailTemplate;



