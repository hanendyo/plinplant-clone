import React, { useRef } from 'react';
import avatar from '../../../fajariadi/assets/images/avatar.png';
import styled from 'styled-components';
import Button from './Button';
import { colors } from '../../constant/style';

const UploadBox = ({ invoice, modal, profile }) => {
  const inputFile = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  return (
    <>
      {profile && (
        <ModalBox profile={profile}>
          <img src={avatar} alt='' />

          <input
            type='file'
            id='file'
            ref={inputFile}
            style={{ display: 'none' }}
          />

          <Button
            primary
            summary
            text='Pilih Foto'
            bgColor={colors.green}
            onClick={onButtonClick}
          />

          {invoice && (
            <Button primary summary text='Hapus' bgColor='#2222224d' />
          )}

          <p>Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>

          {invoice && (
            <div>
              <Button primary text='Batal' bgColor='#2222224d' />
              <Button primary text='Kirim' bgColor={colors.green} />
            </div>
          )}
        </ModalBox>
      )}

      {invoice && (
        <ModalOverlay modal={modal}>
          <ModalBox>
            <img src={avatar} alt='' />

            <input
              type='file'
              id='file'
              ref={inputFile}
              style={{ display: 'none' }}
            />

            <Button
              primary
              summary
              text='Pilih Foto'
              bgColor={colors.green}
              onClick={onButtonClick}
            />

            {invoice && (
              <Button primary summary text='Hapus' bgColor='#2222224d' />
            )}

            <p>Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>

            {invoice && (
              <div>
                <Button primary text='Batal' bgColor='#2222224d' />

                <Button primary text='Kirim' bgColor={colors.green} />
              </div>
            )}
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ modal }) => (modal ? 'visible' : 'hidden')};
`;

const ModalBox = styled.div`
  width: 100%;
  max-width: 340px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  background-color: ${colors.white};
  padding: 20px;

  margin-right: ${({ profile }) => (profile ? '30px' : 'unset')};

  & > img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  & > p {
    color: #22222280;
    font-size: 12px;
    margin-top: 10px;
  }

  & > button:first-of-type {
    margin-bottom: 5px;
  }

  & > div {
    text-align: right;
    margin-top: 20px;

    & > button {
      margin-left: 5px;
    }
  }
`;

export default UploadBox;
