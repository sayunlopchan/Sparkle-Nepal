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
import AlertBox from "../../components/alertbox/AlertBox";


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
          setCurrentStep(1);
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
        <AlertBox />
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
              e.preventDefault(); // prevent default submission
              if (currentStep === 3) {
                formik.handleSubmit(e);
              }
            }}
            method="POST"
          >
            {/* Student Details Section - only shown in step 1 */}
            {currentStep === 1 && (
              <div>

              </div>
            )}
            {/* Guardian Details Section - only shown in step 2 */}
            {currentStep === 2 && (
              <div>

              </div>
            )}

            {/* Membership Details Section - only shown in step 3 */}
            {currentStep === 3 && (
              <div>

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
                        : step < currentStep
                          ? isStepValid(step)
                            ? 'bg-green-500'
                            : 'bg-gray-300'
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
