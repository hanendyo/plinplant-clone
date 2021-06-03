import React, { useContext, useEffect, useState } from 'react';
import { Container, LinksContainer, Logo, Nav } from './Navbar.elemen';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';
import { Link } from 'react-router-dom';
import { ContextStore } from '../../../context/store/ContextStore';

const NavbarLandingPage = () => {
  const { tableArticleState, userInfoState } = useContext(ContextStore);
  const login = userInfoState.length !== 0;

  // [{...}] -> userInfoState[0] -> fullname.split(' ') -> ['Fajar', 'Riadi'] -> index 0
  const greet = userInfoState[0]?.fullname.split(' ')[0];

  const [profile, setProfile] = useState(false);

  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    // ::: NAVBAR INTERACTION :::
    const scrollNav = () => {
      const navbarHeight = 100;
      window.pageYOffset > navbarHeight ? setShadow(true) : setShadow(false);
    };

    window.addEventListener('scroll', scrollNav);

    return () => {
      window.removeEventListener('scroll', scrollNav);
    };
    // ::: END OF NAVBAR INTERACTION :::
  }, []);

  const slug = (title) => title?.toLowerCase().split(' ').join('-');

  return (
    <Nav shadow={shadow}>
      <Container shadow={shadow}>
        <Logo>PlinPlant</Logo>

        <LinksContainer login={login} profile={profile}>
          <li>
            <Link to='/cart'>
              <FaShoppingCart className='cart' />
            </Link>
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
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/images/user_image/${userInfoState[0]?.picture}`
                    }
                    alt={userInfoState[0]?.fullname}
                  />
                  <p>Halo, {greet}</p>
                </button>

                {/* Profile Hover */}
                <div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/user_image/${userInfoState[0]?.picture}`
                      }
                      alt={userInfoState[0]?.fullname}
                    />

                    <div>
                      <h5>{userInfoState[0]?.fullname}</h5>
                      <span>{userInfoState[0]?.email}</span>
                    </div>
                  </div>

                  <ul>
                    <li>
                      <Link to='/profile'>Profil</Link>
                    </li>
                    <li>
                      <Link to='/transaction'>Daftar Transaksi</Link>
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

export default NavbarLandingPage;
