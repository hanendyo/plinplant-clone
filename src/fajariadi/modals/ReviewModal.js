import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalOverlay } from '../../master/components/additional/UploadBox';
import img from '../../dhika/images/basil.jpg';
import { colors } from '../../master/constant/style';
import Rating from '../../master/components/additional/Rating';
import RatingInput from '../../master/components/additional/RatingInput';
import Button from '../../master/components/additional/Button';
import { ContextStore } from '../../context/store/ContextStore';
import { closeModalReview } from '../../context/actions';

const ReviewModal = ({ modal }) => {
  const { modalReviewDispatch } = useContext(ContextStore);

  return (
    <ReviewOverlay modal={modal}>
      <ModalReview>
        <img src={img} alt='' />

        <div>
          <h5>Lavender</h5>
          <span>Bonggol</span>

          <p>Bagaimana kualitas produk ini secara keseluruhan?</p>

          <RatingInput />

          <small>Berikan ulasan untuk produk ini</small>
          <textarea></textarea>

          <div>
            <Button
              primary
              text='Batal'
              bgColor='#2222224d'
              onClick={() => modalReviewDispatch(closeModalReview())}
            />

            <Button primary text='Kirim' bgColor={colors.green} />
          </div>
        </div>
      </ModalReview>
    </ReviewOverlay>
  );
};

const ReviewOverlay = styled(ModalOverlay)`
  /* display: block; */
`;

const ModalReview = styled.div`
  background-color: ${colors.white};
  display: flex;
  align-items: flex-start;
  width: fit-content;
  padding: 20px;
  border-radius: 10px;

  & > img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 20px;
  }

  & > div {
    & > span {
      display: inline-block;
      font-size: 12px;
      background-color: ${colors.lightGreen};
      padding: 3px 7px;
      border-radius: 10px;
      color: ${colors.black};
      margin-bottom: 10px;
    }

    & > p {
      color: ${colors.black};
      margin-bottom: 5px;
    }

    & > small {
      color: ${colors.black};
      display: block;
      margin-top: 10px;
    }

    & > textarea {
      width: 100%;
      height: 100px;
      outline: none;
      background-color: ${colors.white};
      border: 2px solid ${colors.lightGreen};
      border-radius: 10px;
      padding: 10px;
      font-family: inherit;
      resize: vertical;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    & > div:last-of-type {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;

      & > button {
        margin-left: 5px;
      }
    }
  }
`;

export default ReviewModal;
