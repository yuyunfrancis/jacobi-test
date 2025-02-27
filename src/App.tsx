import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MobileHome from "./pages/home/MobileHome";
import HomePage from "./pages/home/HomePage";

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

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
    <Router>
      {isMobile ? (
        <MobileHome logo="/logo.png" contactInfo={contactInfo} />
      ) : (
        <HomePage />
      )}
    </Router>
  );
};

export default App;
