import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  DropdownInput,
  JacobiInput,
  JacobiTextAreaInput,
  PhoneInput,
} from "./atom/inputs";
import JacobiButton from "./atom/JacobiButton";

interface ContactSectionProps {
  contactInfo: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  };
}

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  workEmail: string;
  country: string;
  phoneCountryCode: string;
  phoneNumber: string;
  projectDescription: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    workEmail: "",
    country: "",
    phoneCountryCode: "+1",
    phoneNumber: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, phoneCountryCode: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        workEmail: "",
        country: "",
        phoneCountryCode: "+1",
        phoneNumber: "",
        projectDescription: "",
      });

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "jp", label: "Japan" },
    { value: "cn", label: "China" },
    { value: "in", label: "India" },
    { value: "br", label: "Brazil" },
  ];

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden rounded-lg shadow-lg">
      <div className="bg-slate-800 text-white p-8 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

        <div className="space-y-6">
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-slate-700 h-10 w-10 rounded-full flex-shrink-0 mr-4">
              <FaEnvelope className="text-white" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 uppercase mb-1">EMAIL US</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-white hover:text-gray-200 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-center bg-slate-700 h-10 w-10 rounded-full flex-shrink-0 mr-4">
              <FaPhone className="text-white" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 uppercase mb-1">
                PHONE NUMBER
              </h3>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-white hover:text-gray-200 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-center bg-slate-700 h-10 w-10 rounded-full flex-shrink-0 mr-4">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 uppercase mb-1">ADDRESS</h3>
              <address className="not-italic text-white">
                {contactInfo.address.street}
                <br />
                {contactInfo.address.city}, {contactInfo.address.state}{" "}
                {contactInfo.address.zip}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm text-gray-300 uppercase mb-4">
            Connect with us:
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-slate-700 hover:bg-slate-600 transition-colors p-2 rounded-full"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="bg-slate-700 hover:bg-slate-600 transition-colors p-2 rounded-full"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="bg-slate-700 hover:bg-slate-600 transition-colors p-2 rounded-full"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="#"
              className="bg-slate-700 hover:bg-slate-600 transition-colors p-2 rounded-full"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 lg:w-2/3">
        {isSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <JacobiInput
              id="firstName"
              name="firstName"
              label="First name"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
              required
            />

            <JacobiInput
              id="lastName"
              name="lastName"
              label="Last name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
              required
            />
          </div>

          <JacobiInput
            id="companyName"
            name="companyName"
            label="Company name"
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleInputChange}
          />

          <JacobiInput
            id="workEmail"
            name="workEmail"
            type="email"
            label="Work email"
            placeholder="Enter your work email"
            value={formData.workEmail}
            onChange={handleInputChange}
            error={errors.workEmail}
            required
          />

          <DropdownInput
            id="country"
            name="country"
            label="Country"
            value={formData.country}
            onChange={handleInputChange}
            options={countryOptions}
            error={errors.country}
            required
          />

          <PhoneInput
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            countryCode={formData.phoneCountryCode}
            onCountryCodeChange={handleCountryCodeChange}
            error={errors.phoneNumber}
            required
          />

          <JacobiTextAreaInput
            id="projectDescription"
            name="projectDescription"
            label="Describe the project you need help with"
            placeholder="Tell us about your project..."
            value={formData.projectDescription}
            onChange={handleInputChange}
            rows={5}
          />

          <div className="mt-6">
            <JacobiButton
              type="submit"
              variant="primary"
              disabled={isLoading}
              loading={isLoading}
            >
              SUBMIT
            </JacobiButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
