import React from "react";
import Footer from "./master/components/Footer/Footer";
import Navbar from "./master/components/Navbar/Navbar";
import NavbarLandingPage from "./master/components/Navbar/NavbarLandingPage";
import Ensiklopedia from "./dhika/Ensiklopedia/Ensiklopedia";
import NewsHeader from "./dhika/Artikel/header/ArtikelHeader";
import ModuleAlamat from "./dhika/ModuleAlamat/ModuleAlamat";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Ensiklopedia /> */}
      {/* <NewsHeader /> */}
      <ModuleAlamat />
      <Footer />
    </div>
  );
};

export default App;
