import React from 'react';
import {
  Container,
  Left,
  Right,
  Box,
  BoxGroup,
  StyledHeader,
} from './Header.component';
import image1 from '../../images/basil.jpg';
import { FaSeedling, FaClock, FaPagelines } from 'react-icons/fa';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div>
          <Left>
            <img src={image1} alt='basil' />
          </Left>

          <Right>
            <h1>Basil</h1>
            <h5>Asal Tanaman</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>

            <h5>Kualitas</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel
            </p>

            <h5>Kegunaan</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim
            </p>
          </Right>
        </div>

        <BoxGroup>
          <Box>
            <div>
              <FaSeedling size={80} />
            </div>
            <p>WAKTU TUMBUH</p>
            <h4>5-21 HARI</h4>
          </Box>

          <Box>
            <div>
              <FaClock size={80} />
            </div>
            <p>DEWASA DALAM</p>
            <h4>68 HARI</h4>
          </Box>

          <Box>
            <div>
              <FaPagelines size={80} />
            </div>
            <p>TIPE PERTUMBUHAN</p>
            <h4>MERAMBAT</h4>
          </Box>
        </BoxGroup>
      </Container>
    </StyledHeader>
  );
};

export default Header;
