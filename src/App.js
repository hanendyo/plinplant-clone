import Ensiklopedia from "./dhika/component/Ensiklopedia";
import React from "react";
import Footer from "./master/components/Footer/Footer";
import Navbar from "./master/components/Navbar/Navbar";
import NavbarLandingPage from "./master/components/Navbar/NavbarLandingPage";

const App = () => {
  return (
    <div>
      <NavbarLandingPage />
      <h1>Content</h1>
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
