import React, { useContext, useEffect, useState } from 'react';
import { Container, LinksContainer, Logo, Nav } from './Navbar.elemen';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';
import { Link, useHistory } from 'react-router-dom';
import { ContextStore } from '../../../context/store/ContextStore';
import { userLogout } from '../../../context/actions/userLoginAction';

const NavbarLandingPage = () => {
  const { tableArticleState, userLoginState, userLoginDispatch } =
    useContext(ContextStore);

  const history = useHistory();

  // [{...}] -> userInfoState[0] -> fullname.split(' ') -> ['Fajar', 'Riadi'] -> index 0
  // const greet = userInfoState[0]?.fullname.split(' ')[0];

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

        <LinksContainer login={userLoginState} profile={profile}>
          <li>
            {userLoginState ? (
              <Link to='/cart'>
                <FaShoppingCart className='cart' />
              </Link>
            ) : (
              <Link to='/login'>
                <FaShoppingCart className='cart' />
              </Link>
            )}
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
            {userLoginState ? (
              <>
                <button onClick={() => setProfile(!profile)}>
                  <img
                    src={
                      !userLoginState.picture
                        ? process.env.PUBLIC_URL +
                          `/images/user_image/default.png`
                        : process.env.PUBLIC_URL +
                          `/images/user_image/${userLoginState.picture}`
                    }
                    alt={userLoginState.fullname}
                  />
                  <p>Halo, {userLoginState.fullname.split(' ')[0]}</p>
                </button>

                {/* Profile Hover */}
                <div>
                  <div>
                    <img
                      src={
                        !userLoginState.picture
                          ? process.env.PUBLIC_URL +
                            `/images/user_image/default.png`
                          : process.env.PUBLIC_URL +
                            `/images/user_image/${userLoginState.picture}`
                      }
                      alt={userLoginState.fullname}
                    />

                    <div>
                      <h5>{userLoginState.fullname}</h5>
                      <span>{userLoginState.email}</span>
                    </div>
                  </div>

                  <ul>
                    <li>
                      <Link to='/profile'>Profil</Link>
                    </li>
                    <li>
                      <Link to={`/${userLoginState.pk_user_id}/transaction`}>
                        Daftar Transaksi
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        userLoginDispatch(userLogout());
                        window.location.reload();
                      }}
                    >
                      Keluar
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Button
                  text='Masuk'
                  bgColor={colors.white}
                  onClick={() => history.push('/login')}
                />
                <Button
                  primary
                  text='Daftar'
                  bgColor={colors.lightGreenTransparent}
                  onClick={() => history.push('/register')}
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
