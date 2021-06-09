import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import NavbarLandingPage from "../../master/components/Navbar/NavbarLandingPage";
import Footer from "../../master/components/Footer/Footer";
import Loader from "../components/Loader";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <NavbarLandingPage />
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
};

export default LandingPage;
