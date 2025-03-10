import StaticHeader from "../../components/StaticHeader/StaticHeader";

// img
import sparkle from "../../assets/image/vector/SPARKLE Broucher.png";

// react icon
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoPhonePortrait } from "react-icons/io5";

// animation
import AnimatedComponent from "../../components/Animation/AnimatedComponent";
import AnimatedComponent2 from "../../components/Animation/AnimatedComponent2";

// /////////
import Useable from "../../components/Useable/Useable";

// form
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { sendEmail } from "../../constant/Route";
import { useState } from "react";

const processes = [
  {
    step: 1,
    title: "Inquire",
    description:
      "Contact us for inquiries at admin@sparklenepal.com or +977-9857049590. Expect a reply to learn more about your child.",
  },
  {
    step: 2,
    title: "Meeting Interview",
    description:
      "Upon receiving your inquiries, one of our teachers will schedule a meeting interview with the parent/ guardian.",
  },
  {
    step: 3,
    title: "Pre-evaluation",
    description:
      "To evaluate the student, attend class to observe interaction. Schedule a trial class and on-site assessment.",
  },
  {
    step: 4,
    title: "Enrollment",
    description:
      "Submit a physical or digital copies of the required documents to enroll. You'll receive an email confirming receipt and next steps.",
  },
];



const Form = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const isStepValid = (step) => {
    const fields = stepFields[step];
    return fields.every(field => !formik.errors[field]);
  };

  const stepFields = {
    1: ['studentName', 'studentDob', 'studentAge', 'studentGender', 'studentAddress', 'foodAllergies', 'healthIssues'],
    2: ['guardianName', 'guardianDob', 'guardianAge', 'guardianGender', 'number', 'emergencyNumber', 'guardianAddress', 'maritalStatus', 'email', 'nationality'],
    3: ['courseEnrollementDuration', 'reference']
  };

  // navigation handlers
  const handleNext = async () => {
    const errors = await formik.validateForm();
    const currentFields = stepFields[currentStep];
    const hasErrors = currentFields.some(field => errors[field]);

    if (!hasErrors) {
      setCurrentStep(currentStep + 1);
    } else {
      const touched = currentFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {});
      formik.setTouched({ ...formik.touched, ...touched });
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };


  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return Math.max(0, age);
  };

  const [isStudentAgeManuallyChanged, setIsStudentAgeManuallyChanged] = useState(false);
  const [isGuardianAgeManuallyChanged, setIsGuardianAgeManuallyChanged] = useState(false);


  const formik = useFormik({

    initialValues: {
      // Student
      studentName: "",
      studentDob: "",
      studentAge: "",
      studentGender: "",
      studentAddress: "",
      foodAllergies: "",
      healthIssues: "",
      // Guardian
      guardianName: "",
      guardianDob: "",
      guardianAge: "",
      guardianGender: "",
      guardianAddress: "",
      maritalStatus: "",
      email: "",
      number: "",
      emergencyNumber: "",
      nationality: "",
      // Courses
      courseEnrollementDuration: "",
      reference: "",
    },
    validationSchema: Yup.object({
      // validation schema 
      studentName: Yup.string().max(20, "Must be 20 characters or less").required("*Student Name Required*"),
      studentDob: Yup.date().required("*Student Date of Birth Required*"),
      studentAge: Yup.number()
        .typeError("Student age must be a number")
        .integer("Student age must be a whole number")
        .min(5, "Student must be at least 5 years old")
        .required("*Student Age Required*"),
      studentGender: Yup.string().required("*Student Gender Required*"),
      studentAddress: Yup.string().required("*Student Address Required*"),
      foodAllergies: Yup.string().required("*Please Type 'none' If Student Have No Food Allergies*"),
      healthIssues: Yup.string().required("*Please Type 'none' If Student Have No Health Issues*"),
      guardianName: Yup.string().max(20, "Must be 20 characters or less").required("*Guardian Name Required*"),
      guardianDob: Yup.date().required("*Guardian Date of Birth Required*"),
      guardianAge: Yup.number()
        .typeError("Guardian age must be a number")
        .integer("Guardian age must be a whole number")
        .min(18, "Guardian must be at least 18 years old or above")
        .required("*Guardian Age Required*"),
      guardianGender: Yup.string().required("*Guardian Gender Required*"),
      guardianAddress: Yup.string().required("*Guardian Address Required*"),
      email: Yup.string().email("Invalid email address").required("*Guardian Email Required*"),
      number: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, "Must be 10 digits").max(10, "Must be 10 digits").required("*Guardian Phone Number Required*"),
      emergencyNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, "Must be 10 digits").max(10, "Must be 10 digits").required("*Emergency Contact Number Required*"),
      maritalStatus: Yup.string().required("*Guardian Marital Status Required*"),
      nationality: Yup.string().required("*Guardian Nationality Required*"),
      courseEnrollementDuration: Yup.string().required("*Course Enrollment Duration Required*"),
      reference: Yup.string().required("*Reference Required*"),
    }),

    onSubmit: async (values, { resetForm }) => {

      try {
        const response = await axios.post(sendEmail, values);

        if (response.status === 200) {
          toast.success("Thank you for submitting! Please visit our office with a photo.");
          resetForm();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        toast.error("Failed to send message. Please try again.");
      }
    },
  });

  return (
    <div className="bg-[#CCE0FF] min-h-screen overflow-hidden">
      <StaticHeader />
      <div className="body-container">
        {/* Banner */}
        <div>
          <Useable
            message={"Your first step"}
            mainText={"Form to fill Your Children Life with "}
            subText={"Creativity and Confidence"}
          />
        </div>

        {/* img */}
        <img
          src={sparkle}
          alt={sparkle}
          className="h-[400px] absolute -left-4 max-lg:hidden"
        />

        {/* admission form */}
        <div className="max-w-2xl mx-auto bg-white p-8 mt-10 mb-20 shadow-lg rounded-lg">
          {/* heading */}
          <h3 className="text-2xl font-bold mb-6 text-center">Admission Form</h3>

          <form
            onSubmit={(e) => {
              e.preventDefault(); // Always prevent default submission
              if (currentStep === 3) {
                formik.handleSubmit(e);
              }
            }}
            method="POST"
          >
            {/* Student Details Section - only shown in step 1 */}
            {currentStep === 1 && (
              <div>
                {/* Student Details Section-Start */}
                <div>
                  <label className="block text-lg font-bold text-gray-700 mb-4">
                    Student Details
                  </label>

                  {/* student name */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="studentName"
                    >
                      Student Name
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("studentName")}
                    />
                    {formik.touched.studentName && formik.errors.studentName ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.studentName}
                      </div>
                    ) : null}
                  </div>


                  {/*STUDENT DOB */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="studentDob"
                    >
                      Date of Birth
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="date"
                      id="studentDob"
                      name="studentDob"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("studentDob")}
                      onChange={(e) => {
                        formik.handleChange(e);
                        if (!isStudentAgeManuallyChanged && e.target.value) {
                          const age = calculateAge(e.target.value);
                          formik.setFieldValue('studentAge', age);
                        }
                      }}
                    />
                    {formik.touched.studentDob && formik.errors.studentDob ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.studentDob}
                      </div>
                    ) : null}
                  </div>

                  {/*STUDENT AGE */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="studentAge"
                    >
                      Age <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="number"
                      id="studentAge"
                      name="studentAge"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("studentAge")}
                      onChange={(e) => {
                        setIsStudentAgeManuallyChanged(true);
                        formik.handleChange(e);
                      }}
                    />
                    {formik.touched.studentAge && formik.errors.studentAge ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.studentAge}
                      </div>
                    ) : null}
                  </div>

                  {/* Gender */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Gender/Sex
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="studentGender"
                          value="male"
                          className="form-radio h-4 w-4 text-blue-600"
                          checked={formik.values.studentGender === "male"}
                          onChange={() =>
                            formik.setFieldValue("studentGender", "male")
                          }
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="studentGender"
                          value="female"
                          className="form-radio h-4 w-4 text-blue-600"
                          checked={formik.values.studentGender === "female"}
                          onChange={() =>
                            formik.setFieldValue("studentGender", "female")
                          }
                        />
                        <span className="ml-2">Female</span>
                      </label>
                    </div>
                    {formik.touched.studentGender && formik.errors.studentGender ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.studentGender}
                      </div>
                    ) : null}
                  </div>

                  {/* Adress */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="studentAddress"
                    >
                      Address
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentAddress"
                      name="studentAddress"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("studentAddress")}
                    />
                    {formik.touched.studentAddress && formik.errors.studentAddress ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.studentAddress}
                      </div>
                    ) : null}
                  </div>

                  {/* food allergies */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="foodAllergies"
                    >
                      Food Allergies
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="foodAllergies"
                      name="foodAllergies"
                      placeholder="Specify any known food allergies or enter 'None' if not applicable"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-[8px] sm:text-xs md:text-base"
                      {...formik.getFieldProps("foodAllergies")}
                    />
                    {formik.touched.foodAllergies && formik.errors.foodAllergies ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.foodAllergies}
                      </div>
                    ) : null}
                  </div>


                  {/* health issues */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="healthIssues"
                    >
                      Health Issues
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="healthIssues"
                      name="healthIssues"
                      placeholder="Specify any known health issues or enter 'None' if not applicable"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-[8px] sm:text-xs md:text-base"
                      {...formik.getFieldProps("healthIssues")}
                    />
                    {formik.touched.healthIssues && formik.errors.healthIssues ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.healthIssues}
                      </div>
                    ) : null}
                  </div>

                </div>
                {/* Student Details Section-END */}
              </div>
            )}

            {/* Guardian Details Section - only shown in step 2 */}
            {currentStep === 2 && (
              <div>
                {/* Guardian Details Section-START */}
                <div>
                  <label className="block text-lg font-bold text-gray-700 mb-4">
                    Guardian Details
                  </label>

                  {/* Guardian name */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="guardianName"
                    >
                      Guardian Name
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="guardianName"
                      name="guardianName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("guardianName")}
                    />
                    {formik.touched.guardianName && formik.errors.guardianName ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.guardianName}
                      </div>
                    ) : null}
                  </div>

                  {/*GUARDIAN DOB */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="guardianDob"
                    >
                      Date of Birth
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="date"
                      id="guardianDob"
                      name="guardianDob"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("guardianDob")}
                      onChange={(e) => {
                        formik.handleChange(e);
                        if (!isGuardianAgeManuallyChanged && e.target.value) {
                          const age = calculateAge(e.target.value);
                          formik.setFieldValue('guardianAge', age);
                        }
                      }}
                    />
                    {formik.touched.guardianDob && formik.errors.guardianDob ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.guardianDob}
                      </div>
                    ) : null}
                  </div>

                  {/*GUARDIAN Age */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="guardianAge"
                    >
                      Age <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="number"
                      id="guardianAge"
                      name="guardianAge"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("guardianAge")}
                      onChange={(e) => {
                        setIsGuardianAgeManuallyChanged(true);
                        formik.handleChange(e);
                      }}
                    />
                    {formik.touched.guardianAge && formik.errors.guardianAge ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.guardianAge}
                      </div>
                    ) : null}
                  </div>

                  {/* Gender*/}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Gender/Sex
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="guardianGender" // Ensure this matches the Formik field name
                          value="male"
                          className="form-radio h-4 w-4 text-blue-600"
                          checked={formik.values.guardianGender === "male"}
                          onChange={() =>
                            formik.setFieldValue("guardianGender", "male")
                          } // Correct field name here
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="guardianGender" // Ensure this matches the Formik field name
                          value="female"
                          className="form-radio h-4 w-4 text-blue-600"
                          checked={formik.values.guardianGender === "female"}
                          onChange={() =>
                            formik.setFieldValue("guardianGender", "female")
                          } // Correct field name here
                        />
                        <span className="ml-2">Female</span>
                      </label>
                    </div>
                    {formik.touched.guardianGender && formik.errors.guardianGender ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.guardianGender}
                      </div>
                    ) : null}
                  </div>

                  {/* Number */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="number"
                    >
                      Contact Number
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("number")}
                    />
                    {formik.touched.number && formik.errors.number ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.number}
                      </div>
                    ) : null}
                  </div>

                  {/* Emergency number */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="emergencyNumber"
                    >
                      Emergency Number
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="tel"
                      id="emergencyNumber"
                      name="emergencyNumber"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("emergencyNumber")}
                    />
                    {formik.touched.emergencyNumber &&
                      formik.errors.emergencyNumber ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.emergencyNumber}
                      </div>
                    ) : null}
                  </div>

                  {/* Adress */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="guardianAddress"
                    >
                      Address
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="guardianAddress"
                      name="guardianAddress"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("guardianAddress")}
                    />
                    {formik.touched.guardianAddress &&
                      formik.errors.guardianAddress ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.guardianAddress}
                      </div>
                    ) : null}
                  </div>

                  {/* marital status */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maritalStatus">
                      Marital Status
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="single"
                          className="form-radio h-4 w-4 text-blue-600"
                          checked={formik.values.maritalStatus === 'single'}
                          onChange={formik.handleChange}
                        />
                        <span className="ml-2">Single</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="married"
                          className="form-radio h-4 w-4 text-blue-600"
                          checked={formik.values.maritalStatus === 'married'}
                          onChange={formik.handleChange}
                        />
                        <span className="ml-2">Married</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="divorced"
                          className="form-radio h-4 w-4 text-blue-600"
                          checked={formik.values.maritalStatus === 'divorced'}
                          onChange={formik.handleChange}
                        />
                        <span className="ml-2">Divorced</span>
                      </label>
                    </div>
                    {formik.touched.maritalStatus && formik.errors.maritalStatus && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.maritalStatus}
                      </div>
                    )}
                  </div>

                  {/* Email Section */}
                  <div>
                    <label className="block text-lg font-bold text-gray-700 mb-4">
                      Email
                    </label>

                    {/* email address */}
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email Address
                        <span className="text-red-500 text-sm mt-1">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>

                    {/* Nationality */}
                    <div className="mb-4">
                      <label
                        htmlFor="nationality"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Nationality
                        <span className="text-red-500 text-sm mt-1">*</span>
                      </label>
                      <input
                        id="nationality"
                        name="nationality"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        value={formik.values.nationality}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        {...formik.getFieldProps("nationality")}
                      />
                      {formik.touched.nationality && formik.errors.nationality ? (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.nationality}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                {/* Guardian Details Section-END */}
              </div>
            )}

            {/* Membership Details Section - only shown in step 3 */}
            {currentStep === 3 && (
              <div>
                {/* Membership Details Section-START */}
                <div>
                  <label className="block text-lg font-bold text-gray-700 mb-4">
                    Membership Details
                  </label>

                  {/* course enrollment Duration*/}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Course Enrollment Duration
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      {...formik.getFieldProps("courseEnrollementDuration")}>
                      <option value="" disabled>
                        Not Selected
                      </option>
                      <option value="3 months">3 Months</option>
                      <option value="1 month">1 Month</option>
                      <option value="8 days">8 Days</option>
                      <option value="4 days">4 Days</option>
                    </select>

                    {formik.touched.courseEnrollementPeriod && formik.errors.courseEnrollementPeriod ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.courseEnrollementPeriod}
                      </div>
                    ) : null}
                  </div>



                  {/* references */}
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="references"
                    >
                      References
                      <span className="text-red-500 text-sm mt-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="references"
                      name="references"
                      placeholder="How did you hear about us? (e.g., Friend, News Article, Employee Referral)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-[8px] sm:text-xs md:text-base"
                      {...formik.getFieldProps("reference")}
                    />
                    {formik.touched.reference && formik.errors.reference ? (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.reference}
                      </div>
                    ) : null}
                  </div>


                </div>
                {/* Membership Details Section-END */}
              </div>
            )}

            {/* Navigation buttons with progress dots */}
            <div className="flex items-center justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Previous
                </button>
              )}

              {/* Progress dots */}
              <div className="flex-grow flex justify-center">
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full transition-colors ${currentStep === step
                        ? isStepValid(step)
                          ? 'bg-green-500 ring-2 ring-blue-500'
                          : 'bg-red-500 ring-2 ring-blue-500'
                        : isStepValid(step)
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                    disabled={formik.isSubmitting}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                )}
              </div>
            </div>

          </form>


        </div >

        {/* processes */}
        < div div className="grid grid-cols-1 lg:grid-cols-2 p-10 space-y-10" >
          <div className="space-y-5 lg:mt-10">
            <AnimatedComponent>
              <h2 className="text-orange-500 font-bold text-xl md:text-2xl lg:text-4xl lg:w-[70%]">
                Admission Process for Incoming Students
              </h2>
            </AnimatedComponent>
            <AnimatedComponent>
              <h3 className="font-semibold text-[15px] lg:text-xl">
                If you prefer immediate answers
              </h3>
            </AnimatedComponent>
            <AnimatedComponent>
              <a
                href="https://maps.app.goo.gl/RrrUfgmmvpDQcETF9"
                className="flex gap-3 cursor-pointer hover:underline underline-offset-2 w-fit"
              >
                <MdLocationPin size={25} />
                Lalitpur-5, Manbhawan
              </a>
            </AnimatedComponent>
            <AnimatedComponent>
              <a
                href="tel:9857049590"
                className="flex gap-3 cursor-pointer hover:underline underline-offset-2 w-fit"
              >
                <BsFillTelephoneForwardFill size={25} />
                01-5409722
              </a>
            </AnimatedComponent>
            <AnimatedComponent>
              <a
                href="tel:9857049590"
                className="flex gap-3 cursor-pointer hover:underline underline-offset-2 w-fit"
              >
                <IoPhonePortrait size={25} />
                9857049590
              </a>
            </AnimatedComponent>
          </div>

          <div>
            <ul className="space-y-10">
              {processes.map((process, index) => (
                <li key={index}>
                  <AnimatedComponent2>
                    <div className="flex items-center gap-4">
                      <div className="size-[50px] rounded-full bg-orange-500 text-center pt-3 text-2xl font-bold text-white">
                        {process.step}
                      </div>
                      <h2 className="text-2xl font-bold text-orange-400">
                        {process.title}
                      </h2>
                    </div>
                    <div className="ml-[65px] mt-5 text-lg">
                      <p>{process.description}</p>
                    </div>
                  </AnimatedComponent2>
                </li>
              ))}
            </ul>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Form;
