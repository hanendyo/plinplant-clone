import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const AlertSign = ({ text, notif, auth, error, warning }) => {
  return (
    <>
      {auth ? (
        <Sign error={error} notif={notif}>
          {error === 'empty' && (
            <p>Form kamu kurang lengkap. Periksa lagi ya!</p>
          )}
          {error === 'email' && (
            <p>Format email yang kamu masukkan salah. Periksa lagi ya!</p>
          )}
          {error === 'password' && (
            <p>Password harus lebih dari 6 karakter ya!</p>
          )}
          {error === 'password_verify' && (
            <p>Konfirmasi password belum sama. Periksa lagi ya!</p>
          )}
          {error === 'invalid' && (
            <p>
              Email yang kamu masukkan sudah terdaftar. Coba email yang lain ya!
            </p>
          )}
          {error === 'register' && (
            <p>Registrasi berhasil! Mengarahkan ke halaman Log in.</p>
          )}

          {error === 'login' && (
            <p>
              Email atau password yang kamu masukkan salah. Periksa lagi ya!
            </p>
          )}
          {error === 'success' && <p>Log in berhasil!</p>}
        </Sign>
      ) : (
        <Alert notif={notif} warning={warning}>
          <p>{text}</p>
        </Alert>
      )}
    </>
  );
};

const Alert = styled.div`
  position: fixed;
  top: ${({ notif }) => (notif ? '100px' : '50px')};

  /* top: 100px; */
  left: 50%;
  /* right: 0; */
  transform: translateX(-50%);
  width: 100%;
  max-width: 700px;
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
  background-color: ${({ warning }) =>
    warning ? colors.yellowTransparent : colors.lightGreen};
  color: ${({ warning }) => (warning ? colors.yellow : colors.green)};
  transition: all 0.3s ease;

  visibility: ${({ notif }) => (notif ? 'visible' : 'hidden')};
  opacity: ${({ notif }) => (notif ? 1 : 0)};

  @media (max-width: 576px) {
    width: 95%;
  }

  z-index: 888;
`;

const Sign = styled(Alert)`
  top: unset;
  bottom: ${({ notif }) => (notif ? '90px' : '50px')};
  background-color: ${({ error, success }) =>
    error === 'register' || error === 'success'
      ? colors.lightGreenTransparent
      : '#ff6b6b90'};
  color: ${({ error, success }) =>
    error === 'register' || error === 'success' ? colors.green : '#ff1f1f'};
`;

export default AlertSign;
