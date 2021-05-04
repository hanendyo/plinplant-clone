import Ensiklopedia from "./dhika/Ensiklopedia";
import React from "react";
import Footer from "./master/components/Footer/Footer";
import Navbar from "./master/components/Navbar/Navbar";
import NavbarLandingPage from "./master/components/Navbar/NavbarLandingPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Ensiklopedia />
      <Footer />
    </div>
  );
};

export default App;
