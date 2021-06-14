import React, { useContext, useEffect, useState } from 'react';
import { Home, Logo, Nav, LinksContainer, Container } from './Navbar.elemen';
import {
  FaChevronLeft,
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';
import { ContextStore } from '../../../context/store/ContextStore';
import { Link, useHistory } from 'react-router-dom';
import { userLogout } from '../../../context/actions/userLoginAction';
import { getCarts } from '../../../context/actions/fetchingActions';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const {
    tableArticleState,
    userLoginState,
    userLoginDispatch,
    userCartDispatch,
    userCartState,
  } = useContext(ContextStore);

  const [profile, setProfile] = useState(false);

  const [shadow, setShadow] = useState(false);

  const history = useHistory();

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
  }, [userCartDispatch, userLoginState]);
  // ::: END OF NAVBAR INTERACTION :::

  // console.log('NAVBAR - CARTTT', totalItems);

  const slug = (title) => title?.toLowerCase().split(' ').join('-');

  const totalItems = userCartState
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  const isIpad = useMediaQuery({ maxWidth: 768 });

  return (
    <Nav shadow={shadow}>
      <Container shadow={shadow}>
        <Home to='/'>
          <FaChevronLeft className='icon' />
          <p>Halaman Utama</p>
        </Home>

        <Logo className='logo-center'>PlinPlant</Logo>

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
                        history.push('/');
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
                      onClick={() => history.push('/register')}
                    />

                    <FaSignInAlt
                      size={20}
                      color={colors.lightGreenTransparent}
                      style={{ marginLeft: 15, marginTop: 5 }}
                      onClick={() => history.push('/login')}
                    />
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
              </>
            )}
          </li>
        </LinksContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
