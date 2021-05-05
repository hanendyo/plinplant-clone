import React from 'react';
import { Container, Copyright, FooterLogo, FooterComp } from './Footer.elemen';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { colors } from '../../constant/style';

const Footer = ({ colored }) => {
  return (
    <FooterComp colored={colored}>
      <Container colored={colored}>
        <div>
          {colored ? (
            <FooterLogo style={{ color: colors.white }}>PlinPlant</FooterLogo>
          ) : (
            <FooterLogo>PlinPlant</FooterLogo>
          )}

          <p>
            Jl. Senoparty, Jakarta <br />
            Indonesia 15045
          </p>
        </div>

        <div>
          <ul>
            <li>About Us</li>
            <li>References</li>
            <li>Developer</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>About Us</li>
            <li>References</li>
            <li>Developer</li>
          </ul>
        </div>

        <div>
          <p style={{ padding: 'unset' }}>Social Media:</p>

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

      <Copyright colored={colored}>&copy; 2021. PlinPlant.</Copyright>
    </FooterComp>
  );
};

export default Footer;
