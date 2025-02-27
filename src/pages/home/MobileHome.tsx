import React from "react";
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
  JacobiButton,
  JacobiInput,
  JacobiTextAreaInput,
  PhoneInput,
} from "../../components";

interface MobileHomeProps {
  logo: string;
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

const MobileHome: React.FC<MobileHomeProps> = ({ logo, contactInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    companyName: "",
    workEmail: "",
    country: "",
    phoneCountryCode: "+1",
    phoneNumber: "",
    projectDescription: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, phoneCountryCode: e.target.value });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];

  return (
    <div className="lg:hidden">
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <img src={logo} alt="Jacobi Robotics" className="h-8" />
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </header>

      {isMenuOpen && (
        <div className="bg-white shadow-md animate-fadeIn">
          <nav className="p-4 space-y-4">
            <button className="flex justify-between items-center w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Developers
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <button className="flex justify-between items-center w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Solutions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <button className="flex justify-between items-center w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Company
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <a
              href="/blog"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Blog
            </a>
            <a
              href="/demo"
              className="block px-4 py-2 text-center bg-white text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50"
            >
              Request a Demo
            </a>
          </nav>
        </div>
      )}

      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-3">
          Have a project in mind! Book a demo.
        </h1>
        <p className="text-gray-700">
          Got a project? Drop me a line if you want to work together on
          something exciting. Or do you need our help? Feel free to contact us.
        </p>
      </div>

      <div className="bg-slate-800 text-white p-6 mx-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="mr-3 text-gray-300" />
            <div>
              <h3 className="text-xs text-gray-300 uppercase">EMAIL US</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-white">
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <FaPhone className="mr-3 text-gray-300" />
            <div>
              <h3 className="text-xs text-gray-300 uppercase">PHONE NUMBER</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-white">
                {contactInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-3 text-gray-300" />
            <div>
              <h3 className="text-xs text-gray-300 uppercase">ADDRESS</h3>
              <address className="not-italic text-white">
                {contactInfo.address.street}
                <br />
                {contactInfo.address.city}, {contactInfo.address.state}{" "}
                {contactInfo.address.zip}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xs text-gray-300 uppercase mb-2">
            Connect With us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-slate-700 p-2 rounded-full">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-slate-700 p-2 rounded-full">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="bg-slate-700 p-2 rounded-full">
              <FaLinkedinIn className="text-white" />
            </a>
            <a href="#" className="bg-slate-700 p-2 rounded-full">
              <FaInstagram className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-4 mt-6">
        <form className="space-y-4">
          <JacobiInput
            id="firstName-mobile"
            name="firstName"
            label="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />

          <JacobiInput
            id="lastName-mobile"
            name="lastName"
            label="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />

          <JacobiInput
            id="companyName-mobile"
            name="companyName"
            label="Company name"
            value={formData.companyName}
            onChange={handleInputChange}
          />

          <JacobiInput
            id="workEmail-mobile"
            name="workEmail"
            type="email"
            label="Work email"
            value={formData.workEmail}
            onChange={handleInputChange}
            required
          />

          <DropdownInput
            id="country-mobile"
            name="country"
            label="Country"
            value={formData.country}
            onChange={handleInputChange}
            options={countryOptions}
            required
          />

          <PhoneInput
            id="phoneNumber-mobile"
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            countryCode={formData.phoneCountryCode}
            onCountryCodeChange={handleCountryCodeChange}
            required
          />

          <JacobiTextAreaInput
            id="projectDescription-mobile"
            name="projectDescription"
            label="Describe the project you need help with"
            value={formData.projectDescription}
            onChange={handleInputChange}
            rows={4}
          />

          <JacobiButton type="submit" variant="primary" fullWidth>
            SUBMIT
          </JacobiButton>
        </form>
      </div>
    </div>
  );
};

export default MobileHome;
