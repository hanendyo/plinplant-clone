import React, { useContext, useEffect, useState } from 'react';
import { Container, LinksContainer, Logo, Nav } from './Navbar.elemen';
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';
import { Link, useHistory } from 'react-router-dom';
import { ContextStore } from '../../../context/store/ContextStore';
import { userLogout } from '../../../context/actions/userLoginAction';
import { getCarts } from '../../../context/actions/fetchingActions';
import { useMediaQuery } from 'react-responsive';

const NavbarLandingPage = () => {
  const {
    tableArticleState,
    userLoginState,
    userLoginDispatch,
    userCartDispatch,
    userCartState,
  } = useContext(ContextStore);

  const history = useHistory();

  const [profile, setProfile] = useState(false);

  const [shadow, setShadow] = useState(false);

  const totalItems = userCartState
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (userLoginState) userCartDispatch(getCarts(userLoginState));

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
  }, [userCartDispatch, userLoginState]);

  // console.log('NAVBAR LANDING - CARTTT', totalItems);

  const slug = (title) => title?.toLowerCase().split(' ').join('-');

  const isIpad = useMediaQuery({ maxWidth: 768 });

  return (
    <Nav shadow={shadow}>
      <Container shadow={shadow}>
        <Logo>PlinPlant</Logo>

        <LinksContainer login={userLoginState} profile={profile}>
          <li>
            {userLoginState ? (
              <Link to='/cart'>
                <FaShoppingCart className='cart' />
                {totalItems > 0 && (
                  <span>{!isNaN(totalItems) && totalItems}</span>
                )}
              </Link>
            ) : (
              <Link to='/login/landingpage'>
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
                {isIpad ? (
                  <>
                    <FaUserPlus
                      size={20}
                      color={colors.lightGreen}
                      onClick={() => history.push('/register/landingpage')}
                    />

                    <FaSignInAlt
                      size={20}
                      color={colors.lightGreenTransparent}
                      style={{ marginLeft: 15, marginTop: 5 }}
                      onClick={() => history.push('/login/landingpage')}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      text='Masuk'
                      bgColor={colors.white}
                      onClick={() => history.push('/login/landingpage')}
                    />
                    <Button
                      primary
                      text='Daftar'
                      bgColor={colors.lightGreenTransparent}
                      onClick={() => history.push('/register/landingpage')}
                    />
                  </>
                )}
              </>
            )}
          </li>
        </LinksContainer>
      </Container>
    </Nav>
  );
};

export default NavbarLandingPage;
