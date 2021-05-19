import React from "react";
import sm from "../../assets/images/header-pic-small.jpg";
import lg from "../../assets/images/header-pic-large.jpg";
import { Container, HeaderTag, ScrollBtn, Typography } from "./Header.elemen";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  // : : : HANDLESCROLL : : :
  const handleScroll = () => {
    // -- by element --
    // const element = document.getElementById("content");
    // element.scrollIntoView({ behavior: "smooth", block: "start" });

    // -- by pixel --
    window.scroll({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <HeaderTag>
      <Container>
        <img src={sm} alt="header-pic-small" />

        <img src={lg} alt="header-pic-large" />

        <Typography>
          <h1>Menanam tanaman menjadi lebih mudah</h1>

          <p>
            PlinPlant membantu Anda menemukan tanaman terbaik untuk ruang Anda,
            mengirimkannya ke pintu Anda dan membantu Anda merawatnya.
          </p>

          <ScrollBtn onClick={handleScroll}>
            <div>
              <FaChevronDown className="icon" />
            </div>

            <p>Scroll ke bawah</p>
          </ScrollBtn>
        </Typography>
      </Container>
    </HeaderTag>
  );
};

export default Header;
