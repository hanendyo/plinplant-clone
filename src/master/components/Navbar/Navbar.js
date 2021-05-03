import React from 'react';
import { Home, Logo, Nav, LinksContainer, Container } from './Navbar.elemen';
import { FaChevronLeft, FaShoppingCart } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Home>
          <FaChevronLeft className='icon' /> Home
        </Home>

        <Logo className='logo-center'>PlinPlant</Logo>

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

export default Navbar;
