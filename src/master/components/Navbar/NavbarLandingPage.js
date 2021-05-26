import React, { useEffect, useState } from 'react';
import { Container, LinksContainer, Logo, Nav } from './Navbar.elemen';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';
import pic from '../../../fajariadi/assets/images/ig.jpg';
import { Link } from 'react-router-dom';

const NavbarLandingPage = () => {
  const login = true;
  const [profile, setProfile] = useState(false);

  // ::: NAVBAR INTERACTION :::
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const scrollNav = () => {
      const navbarHeight = 100;
      window.pageYOffset > navbarHeight ? setShadow(true) : setShadow(false);
    };

    window.addEventListener('scroll', scrollNav);

    return () => {
      window.removeEventListener('scroll', scrollNav);
    };
  }, []);
  // ::: END OF NAVBAR INTERACTION :::

  return (
    <Nav shadow={shadow}>
      <Container shadow={shadow}>
        <Logo>PlinPlant</Logo>

        <LinksContainer login={login} profile={profile}>
          <li>
            <a href='/cart'>
              <FaShoppingCart className='cart' />
            </a>
          </li>
          <li>
            <a href='/article'>Artikel</a>
          </li>
          <li>
            {login ? (
              <div>
                <button onClick={() => setProfile(!profile)}>
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
                    <li>
                      <a href='/profile'>Profil</a>
                    </li>
                    <li>
                      <a href='/transaction'>Daftar Transaksi</a>
                    </li>
                    <li>Keluar</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
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
              </div>
            )}
          </li>
        </LinksContainer>
      </Container>
    </Nav>
  );
};

export default NavbarLandingPage;
