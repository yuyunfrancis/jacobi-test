import React from "react";
import { Hero, Navbar } from "../../components";
import MobileHome from "./MobileHome";
import ContactSection from "../../components/ContactSection";

const HomePage: React.FC = () => {
  const contactInfo = {
    email: "contact@jacobirobiotics.com",
    phone: "+1-222-555-2222",
    address: {
      street: "4071 Emery St",
      city: "Emeryville",
      state: "CA",
      zip: "94608",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar logo="/logo.png" />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Hero
            title="Have a project in mind! Book a demo."
            subtitle="Got a project? Drop me a line if you want to work together on something exciting. Or do you need our help? Feel free to contact us."
          />

          <div className="pb-16">
            <div className="hidden lg:block">
              <ContactSection contactInfo={contactInfo} />
            </div>

            <div className="lg:hidden">
              <MobileHome logo="/logo.png" contactInfo={contactInfo} />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-4 text-center text-gray-600">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} Jacobi Robotics. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
