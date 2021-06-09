import React, { useContext, useEffect, useState } from 'react';
import { Home, Logo, Nav, LinksContainer, Container } from './Navbar.elemen';
import { FaChevronLeft, FaShoppingCart } from 'react-icons/fa';
import Button from '../additional/Button';
import { colors } from '../../constant/style';
import { ContextStore } from '../../../context/store/ContextStore';
import { Link, useHistory } from 'react-router-dom';
import { userLogout } from '../../../context/actions/userLoginAction';

const Navbar = () => {
  const { tableArticleState, userLoginState, userLoginDispatch } =
    useContext(ContextStore);

  const [profile, setProfile] = useState(false);

  // ::: NAVBAR INTERACTION :::
  const [shadow, setShadow] = useState(false);

  const history = useHistory();

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
        <Home to='/'>
          <FaChevronLeft className='icon' />
          <p>Home</p>
        </Home>

        <Logo className='logo-center'>PlinPlant</Logo>

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

export default Navbar;
