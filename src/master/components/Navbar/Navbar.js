import React, { useContext, useEffect, useState } from 'react';
import { Home, Logo, Nav, LinksContainer, Container } from './Navbar.elemen';
import { FaChevronLeft, FaShoppingCart } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';
import pic from '../../../fajariadi/assets/images/ig.jpg';
import { ContextStore } from '../../../context/store/ContextStore';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const login = true;
  const [profile, setProfile] = useState(false);

  const { tableArticleState } = useContext(ContextStore);

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

  const slug = (title) => title?.toLowerCase().split(' ').join('-');

  return (
    <Nav shadow={shadow}>
      <Container shadow={shadow}>
        <Home href='/'>
          <FaChevronLeft className='icon' />
          <p>Home</p>
        </Home>

        <Logo className='logo-center'>PlinPlant</Logo>

        <LinksContainer login={login} profile={profile}>
          <li>
            <a href='/cart'>
              <FaShoppingCart className='cart' />
            </a>
          </li>
          <li>
            <Link
              to={`/article/${tableArticleState[0]?.pk_article_id}/${slug(
                tableArticleState[0]?.title
              )}`}
            >
              Artikel
            </Link>
          </li>
          <li>
            {login ? (
              <>
                <button onClick={() => setProfile(!profile)}>
                  <img src={pic} alt='' />
                  <p>Halo, Fajar</p>
                </button>

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
