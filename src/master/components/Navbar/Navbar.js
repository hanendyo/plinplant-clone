import React, { useState } from 'react';
import { Home, Logo, Nav, LinksContainer, Container } from './Navbar.elemen';
import { FaChevronLeft, FaShoppingCart } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';
import pic from '../../../fajariadi/assets/images/ig.jpg';

const Navbar = () => {
  const [login, setLogin] = useState(false);

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
            {login ? (
              <>
                <button id='profile'>
                  <img src={pic} alt='' />
                  <p>Halo, Fajar</p>
                </button>

                {/* Profile Hover */}
                <div>
                  <div>
                    <img src={pic} alt='' />

                    <div>
                      <h5>Fajar Riadi</h5>
                      <span>fajariadi.js@gmail.com</span>
                    </div>
                  </div>

                  <ul>
                    <li>Profil</li>
                    <li>Daftar Transaksi</li>
                    <li>Keluar</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Button text='Masuk' bgColor={colors.white} />
                <Button
                  primary
                  text='Daftar'
                  bgColor={colors.lightGreenTransparent}
                />
              </>
            )}
          </li>
        </LinksContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
