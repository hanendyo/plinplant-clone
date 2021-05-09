import React, { useState } from 'react';
import { Home, Logo, Nav, LinksContainer, Container } from './Navbar.elemen';
import { FaChevronLeft, FaShoppingCart } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';
import pic from '../../../fajariadi/assets/images/ig.jpg';

const Navbar = () => {
  const [login, setLogin] = useState(true);

  return (
    <Nav>
      <Container>
        <Home>
          <FaChevronLeft className='icon' /> Home
        </Home>

        <Logo className='logo-center'>PlinPlant</Logo>

        <LinksContainer login={login}>
          <li>
            <FaShoppingCart className='cart' />
          </li>
          <li>Artikel</li>
          <li>
            {login ? (
              <>
                <button>
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
                <Button
                  text='Masuk'
                  bgColor={colors.white}
                  onClick={() => console.log('Masuk')}
                />
                <Button
                  primary
                  text='Daftar'
                  bgColor={colors.lightGreenTransparent}
                  onClick={() => console.log('Daftar')}
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
