import React from 'react';
import { Container, LinksContainer, Logo, Nav } from './Navbar.elemen';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';

const NavbarLandingPage = () => {
  return (
    <Nav>
      <Container>
        <Logo>PlinPlant</Logo>

        <LinksContainer>
          <li>
            <FaShoppingCart className='cart' />
          </li>
          <li>Artikel</li>
          <li>
            <Button text='Masuk' bgColor={colors.white} />
            <Button
              primary
              text='Daftar'
              bgColor={colors.lightGreenTransparent}
            />
          </li>
        </LinksContainer>
      </Container>
    </Nav>
  );
};

export default NavbarLandingPage;
