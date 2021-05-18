import React from "react";
import sm from "../../assets/images/header-pic-small.jpg";
import lg from "../../assets/images/header-pic-large.jpg";
import { Container, HeaderTag, ScrollBtn, Typography } from "./Header.elemen";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  // : : : HANDLESCROLL : : :
  const handleScroll = () => {
    window.scroll({
      top: 750,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <HeaderTag>
      <Container>
        <img src={sm} alt="header-pic-small" />

        <img src={lg} alt="header-pic-large" />

        <Typography>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>

          <ScrollBtn onClick={handleScroll}>
            <div>
              <FaChevronDown className="icon" />
            </div>

            <p>Scroll down for more</p>
          </ScrollBtn>
        </Typography>
      </Container>
    </HeaderTag>
  );
};

export default Header;
