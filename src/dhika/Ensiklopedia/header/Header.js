import React from "react";
import {
  Section,
  Container,
  Left,
  Right,
  Box,
  BoxGroup,
} from "./Header.component";
import image1 from "../../images/basil.jpg";
import { FaSeedling, FaClock, FaPagelines } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Section>
        <Container>
          <Left>
            <img src={image1} alt="basil" />
          </Left>
          <Right>
            <h1>Basil</h1>
            <p>Asal Tanaman</p>
            <text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </text>
            <br />
            <p>Kualitas</p>
            <text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel
            </text>
            <br />
            <p>Kegunaan</p>
            <text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim
            </text>
            <br />
          </Right>
        </Container>
      </Section>
      <BoxGroup>
        <Box>
          <div>
            <FaSeedling size={80} />
          </div>
          <p>WAKTU TUMBUH</p>
          <text>5-21 HARI</text>
        </Box>
        <Box>
          <div>
            <FaClock size={80} />
          </div>
          <p>DEWASA DALAM</p>
          <text>68 HARI</text>
        </Box>
        <Box>
          <div>
            <FaPagelines size={80} />
          </div>
          <p>TIPE PERTUMBUHAN</p>
          <text>MERAMBAT</text>
        </Box>
      </BoxGroup>
    </header>
  );
};

export default Header;
