import React, { useState } from "react";

import JacobiButton from "../atom/JacobiButton";
import {
  DropdownInput,
  JacobiInput,
  JacobiTextAreaInput,
  PhoneInput,
} from "../atom/inputs";

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

const ContactForm: React.FC = () => {
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

    // Clear the error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, phoneCountryCode: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields validation
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form after successful submission
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
      setTimeout(() => setIsSuccess(false), 5000); // Reset success message after 5 seconds
    } catch (error) {
      // Handle error
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Thank you! Your message has been sent successfully.
        </div>
      )}

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
          fullWidth
          loading={isLoading}
          disabled={isLoading}
        >
          SUBMIT
        </JacobiButton>
      </div>
    </form>
  );
};

export default ContactForm;
