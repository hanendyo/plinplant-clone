import React from "react";
import { Container, FooterLogo } from "./Footer.elemen";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <FooterLogo>PlinPlant</FooterLogo>
          <p style={{ color: "#333" }}>
            Jl. Senoparty, Jakarta <br />
            Indonesia 15045
          </p>
        </div>

        <div style={{ color: "#333" }}>
          <ul>
            <li>About Us</li>
            <li>References</li>
            <li>Developer</li>
          </ul>
        </div>

        <div style={{ color: "#333" }}>
          <ul>
            <li>About Us</li>
            <li>References</li>
            <li>Developer</li>
          </ul>
        </div>

        <div style={{ color: "#333" }}>
          <p>Social Media:</p>

          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
