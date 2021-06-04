import React, { useContext, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ItemsCarousel from 'react-items-carousel';
import Cards from '../../../../../master/components/additional/Cards';
import {
  addresses,
  articles,
  scroll,
  cartItems,
  invoiceProduct,
  products,
  reviews,
  transactions,
} from '../../../../../master/constant/data/dummy-data';
import { colors } from '../../../../../master/constant/style';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { ContextStore } from '../../../../../context/store/ContextStore';

const ProductsContainer = ({
  category,
  slider,
  scroll,
  cart,
  review,
  checkout,
  transaction,
  invoice,
  status,
  article,
  profileAddress,
  selected,
  search,
  searching,
  selectAddress,
  related,
}) => {
  const {
    tablePlantState,
    tableArticleState,
    plantReviewState,
    userCartState,
    userAddressState,
    invoiceState,
  } = useContext(ContextStore);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;

  const isMediumScreen = useMediaQuery({ minWidth: 1200 });
  const isIpadPro = useMediaQuery({ minWidth: 900 });
  const isIpad = useMediaQuery({ minWidth: 768 });
  const isPhone = useMediaQuery({ maxWidth: 768 });

  const numberOfCards = () => {
    if (isMediumScreen) return 4;
    if (isIpadPro) return 3;
    if (isIpad) return 2;
    if (isPhone) return 1;
  };

  const numberOfCardsRelated = () => {
    if (isMediumScreen) return 5;
    if (isIpadPro) return 4;
    if (isIpad) return 3;
    if (isPhone) return 1;
  };

  const productSearched = tablePlantState.filter((item) =>
    item.plant_name
      .toLowerCase()
      .split('')
      .filter((item) => item.trim())
      .join('')
      .includes(searching)
  );

  return (
    <>
      {slider && (
        <CardContainer>
          <h4>{category}</h4>

          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={numberOfCards()}
            gutter={5}
            leftChevron={<FaChevronLeft />}
            rightChevron={<FaChevronRight />}
            outsideChevron
            chevronWidth={chevronWidth}
            // infiniteLoop
          >
            {tablePlantState
              .filter((item) => category === item.category_name)
              .map(({ plant_name, plant_image, pk_plant_id }) => (
                <Cards
                  slider
                  name={plant_name}
                  img={plant_image}
                  key={pk_plant_id}
                  id={pk_plant_id}
                />
              ))}
          </ItemsCarousel>
        </CardContainer>
      )}

      {related && (
        <CardContainer>
          <h4 style={{ textAlign: 'center' }}>Tanaman Terkait</h4>

          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={numberOfCardsRelated()}
            gutter={5}
            leftChevron={<FaChevronLeft />}
            rightChevron={<FaChevronRight />}
            outsideChevron
            chevronWidth={chevronWidth}
            // infiniteLoop
          >
            {tablePlantState
              .filter((item) => category === item.category_name)
              .map(({ plant_name, plant_image, pk_plant_id }) => (
                <Cards
                  slider
                  name={plant_name}
                  img={plant_image}
                  key={pk_plant_id}
                  id={pk_plant_id}
                />
              ))}
          </ItemsCarousel>
        </CardContainer>
      )}

      {search && (
        <SearchedContainer>
          <h4>Hasil Pencarian: {search}</h4>

          <div>
            {productSearched.map(({ plant_name, plant_image, pk_plant_id }) => (
              <Cards
                search
                name={plant_name}
                img={plant_image}
                key={pk_plant_id}
                id={pk_plant_id}
              />
            ))}
          </div>
        </SearchedContainer>
      )}

      {scroll && (
        <ShopRelated>
          {tablePlantState
            .filter((item) => category === item.category_name)
            .map(({ plant_name, plant_image, pk_plant_id }) => (
              <Cards
                scroll
                name={plant_name}
                img={plant_image}
                key={pk_plant_id}
                id={pk_plant_id}
              />
            ))}
        </ShopRelated>
      )}

      {review && (
        <ReviewContainer>
          {plantReviewState.map(
            ({
              pk_review_id,
              picture,
              fullname,
              rating,
              created_at,
              comment,
            }) => (
              <Cards
                review
                name={fullname}
                created={created_at}
                text={comment}
                rating={rating}
                img={picture}
                key={pk_review_id}
                id={pk_review_id}
              />
            )
          )}
        </ReviewContainer>
      )}

      {cart && (
        <CartContainer>
          {userCartState.map(
            ({
              pk_cart_id,
              phase_image,
              plant_name,
              plant_phase,
              quantity,
              price,
            }) => (
              <Cards
                cart
                id={pk_cart_id}
                key={pk_cart_id}
                img={phase_image}
                name={plant_name}
                phase={plant_phase}
                price={price}
                quantity={quantity}
              />
            )
          )}
        </CartContainer>
      )}

      {checkout && (
        <CheckoutContainer>
          {userCartState.map(
            ({
              pk_cart_id,
              phase_image,
              plant_name,
              plant_phase,
              quantity,
              price,
              weight,
            }) => (
              <Cards
                checkout
                id={pk_cart_id}
                key={pk_cart_id}
                img={phase_image}
                name={plant_name}
                phase={plant_phase}
                price={price}
                quantity={quantity}
                weight={weight}
              />
            )
          )}
        </CheckoutContainer>
      )}

      {transaction && (
        <TransactionContainer>
          {transactions.map(
            (
              {
                img,
                name,
                phase,
                price,
                quantity,
                totalPrice,
                created,
                no_order,
                status,
              },
              index
            ) => (
              <Cards
                transaction
                key={index}
                img={img}
                name={name}
                phase={phase}
                price={price}
                quantity={quantity}
                totalPrice={totalPrice}
                created={created}
                no_order={no_order}
                status={status}
              />
            )
          )}
        </TransactionContainer>
      )}

      {invoice && (
        <InvoiceContainer>
          {invoiceState.map(
            (
              {
                fk_plant_id,
                phase_image,
                plant_name,
                plant_phase,
                quantity,
                price,
                weight,
                review_status,
              },
              index
            ) => (
              <Cards
                invoice
                key={index}
                name={plant_name}
                img={phase_image}
                phase={plant_phase}
                price={price}
                quantity={quantity}
                weight={weight}
                reviewed={review_status}
                status={status}
                plant={fk_plant_id}
              />
            )
          )}
        </InvoiceContainer>
      )}

      {article && (
        <ArticlesContainer>
          {tableArticleState.map(
            (
              {
                pk_article_id,
                article_image,
                title,
                author,
                created_at,
                duration,
                source,
                url,
                content,
              },
              index
            ) => (
              <Cards
                article
                key={pk_article_id}
                id={pk_article_id}
                index={index}
                img={article_image}
                title={title}
                author={author}
                created_at={created_at}
                duration={duration}
                source={source}
                url={url}
                content={content}
              />
            )
          )}
        </ArticlesContainer>
      )}

      {profileAddress && (
        <AddressContainer>
          {userAddressState.map(
            (
              {
                pk_contact_id,
                recipient_name,
                phone_number,
                city_name,
                zipcode,
                address,
              },
              index
            ) => (
              <Cards
                address
                index={index}
                key={pk_contact_id}
                id={pk_contact_id}
                name={recipient_name}
                phone={phone_number}
                city={city_name}
                postal={zipcode}
                route={address}
              />
            )
          )}
        </AddressContainer>
      )}

      {selectAddress && (
        <ModalAddressContainer>
          {userAddressState.map(
            (
              {
                pk_contact_id,
                recipient_name,
                phone_number,
                city_name,
                zipcode,
                address,
              },
              index
            ) => (
              <Cards
                selectAddress
                index={index}
                key={pk_contact_id}
                id={pk_contact_id}
                name={recipient_name}
                phone={phone_number}
                city={city_name}
                postal={zipcode}
                route={address}
              />
            )
          )}
        </ModalAddressContainer>
      )}
    </>
  );
};

const CardContainer = styled.article`
  margin-bottom: 30px;

  & > h4 {
    color: ${colors.white};
    margin-bottom: 10px;
  }
`;

const SearchedContainer = styled.div`
  & > h4 {
    color: ${colors.white};
    margin-bottom: 20px;
    text-align: center;
  }

  & > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const ShopRelated = styled.div`
  width: fit-content;
  border-radius: 10px;
  height: 470px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  /* :: STYLING FOR SCROLL SIGN :: */
  &:hover {
    & ~ p {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }
`;

const ReviewContainer = styled.div`
  /* background-color: red; */
  height: 470px;
  padding: 8px 0 0 8px;
  border-radius: 20px 10px 10px 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  :hover {
    & ~ p {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }
`;

const CartContainer = styled.div`
  border-radius: 10px;
  height: fit-content;
  max-height: 400px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  /* :: STYLING FOR SCROLL SIGN :: */
  &:hover {
    & ~ p {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }
`;

const CheckoutContainer = styled(CartContainer)`
  max-height: 245px;
`;

const TransactionContainer = styled.div`
  /* background-color: red; */
  height: 500px;
  overflow-y: scroll;
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  /* :: STYLING FOR SCROLL SIGN :: */
  &:hover {
    & ~ p {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }
`;

const InvoiceContainer = styled.div`
  margin-left: 10px;
  border-radius: 10px;
  height: 310px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  /* :: STYLING FOR SCROLL SIGN :: */
  &:hover {
    & ~ p {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }

  @media (max-width: 760px) {
    margin-left: unset;
    height: 385px;
  }
`;

const ArticlesContainer = styled.div`
  height: fit-content;
  max-height: 410px;
  border-radius: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  /* :: STYLING FOR SCROLL SIGN :: */
  &:hover {
    & ~ p {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  height: 450px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  /* :: STYLING FOR SCROLL SIGN :: */
  &:hover {
    & ~ p {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }
`;

const ModalAddressContainer = styled(AddressContainer)`
  /* background-color: red; */
  height: 300px;
  margin-top: 10px;

  /* :: STYLING FOR SCROLL SIGN :: */
  &:hover {
    & ~ p {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
      color: ${colors.black};
    }
  }
`;

export default ProductsContainer;
