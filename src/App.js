import React from "react";
import Footer from "./master/components/Footer/Footer";
import Navbar from "./master/components/Navbar/Navbar";
import NavbarLandingPage from "./master/components/Navbar/NavbarLandingPage";
import Ensiklopedia from "./dhika/Ensiklopedia/Ensiklopedia";
import Artikel from "./dhika/Artikel/Artikel";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Ensiklopedia /> */}
      <Artikel />
      <Footer />
    </div>
  );
};

export default App;
