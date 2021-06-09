import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModalOverlay } from '../../master/components/additional/UploadBox';
import img from '../../dhika/images/basil.jpg';
import { colors } from '../../master/constant/style';
import Rating from '../../master/components/additional/Rating';
import RatingInput from '../../master/components/additional/RatingInput';
import Button from '../../master/components/additional/Button';
import { ContextStore } from '../../context/store/ContextStore';
import { closeModalReview } from '../../context/actions';
import { review_created } from '../../master/constant/constantVariables';
import axios from 'axios';
import {
  cartUpdateReviewBtn,
  invoiceUpdateReviewBtn,
  reviewPost,
} from '../../context/actions/fetchingActions';

const ReviewModal = ({ fk_invoice_id, plantId, phase, modal }) => {
  const {
    modalReviewDispatch,
    userInfoState,
    plantReviewDispatch,
    plantIdReviewState,
    userCartDispatch,
  } = useContext(ContextStore);

  const [plant, setPlant] = useState({});
  const [checked, setChecked] = useState('star5');
  const [comment, setComment] = useState('');

  const fk_user_id = userInfoState[0]?.pk_user_id;
  const rating = +checked.slice(-1);

  useEffect(() => {
    const getPlantById = async () => {
      const res = await axios.get(
        `http://localhost:5000/input/plant_get_by_id/${plantId}`
      );
      setPlant(res.data.data[0]);
    };

    getPlantById();
  }, [plantId]);

  const { plant_name, seed_image, tuber_image, young_image, mature_image } =
    plant;

  const handlePostReview = () => {
    plantReviewDispatch(
      reviewPost({ review_created, comment, rating, fk_user_id, plantId })
    );

    const pk_cart_id = plantIdReviewState.cartId;
    userCartDispatch(
      cartUpdateReviewBtn({ fk_invoice_id, rating, pk_cart_id })
    );

    modalReviewDispatch(closeModalReview());
    setChecked('star5');
    setComment('');

    window.location.reload();
  };

  console.log('RETING VALUEEEEE', checked);
  console.log('COMENNNN', comment);

  return (
    <ReviewOverlay modal={modal}>
      <ModalReview>
        {phase === 'Biji' && (
          <img
            src={process.env.PUBLIC_URL + `/images/Plant/${seed_image}`}
            alt={plant_name}
          />
        )}
        {phase === 'Bonggol' && (
          <img
            src={process.env.PUBLIC_URL + `/images/Plant/${tuber_image}`}
            alt={plant_name}
          />
        )}
        {phase === 'Muda' && (
          <img
            src={process.env.PUBLIC_URL + `/images/Plant/${young_image}`}
            alt={plant_name}
          />
        )}
        {phase === 'Dewasa' && (
          <img
            src={process.env.PUBLIC_URL + `/images/Plant/${mature_image}`}
            alt={plant_name}
          />
        )}

        <div>
          <h5>{plant_name}</h5>
          <span>{phase}</span>

          <p>Bagaimana kualitas produk ini secara keseluruhan?</p>

          <RatingInput checked={checked} setChecked={setChecked} />

          <small>Berikan ulasan untuk produk ini</small>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <div>
            <Button
              primary
              text='Batal'
              bgColor='#2222224d'
              onClick={() => modalReviewDispatch(closeModalReview())}
            />

            <Button
              primary
              text='Kirim'
              bgColor={colors.green}
              onClick={handlePostReview}
            />
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
    object-fit: cover;
  }

  & > div {
    & > span {
      display: inline-block;
      font-size: 12px;
      background-color: ${colors.lightGreen};
      padding: 3px 7px;
      border-radius: 5px;
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
