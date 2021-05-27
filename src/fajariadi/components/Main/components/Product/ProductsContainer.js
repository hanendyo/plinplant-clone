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
  const { tablePlantState, plantIdState } = useContext(ContextStore);

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
          {reviews.map(({ name, created, text, img, rating }, index) => (
            <Cards
              review
              name={name}
              created={created}
              text={text}
              rating={rating}
              img={img}
              key={index}
            />
          ))}
        </ReviewContainer>
      )}

      {cart && (
        <CartContainer>
          {cartItems.map(({ img, name, phase, price, quantity }, index) => (
            <Cards
              cart
              key={index}
              img={img}
              name={name}
              phase={phase}
              price={price}
              quantity={quantity}
            />
          ))}
        </CartContainer>
      )}

      {checkout && (
        <CheckoutContainer>
          {cartItems.map(({ img, name, phase, price }, index) => (
            <Cards
              checkout
              key={index}
              img={img}
              name={name}
              phase={phase}
              price={price}
            />
          ))}
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
          {invoiceProduct.map(
            ({ name, img, phase, price, quantity, review }, index) => (
              <Cards
                invoice
                key={index}
                name={name}
                img={img}
                phase={phase}
                price={price}
                quantity={quantity}
                reviewed={review}
                status={status}
              />
            )
          )}
        </InvoiceContainer>
      )}

      {article && (
        <ArticlesContainer>
          {articles.map(
            ({ img, title, author, release_date, reading_time }, index) => (
              <Cards
                article
                key={index}
                img={img}
                title={title}
                author={author}
                release_date={release_date}
                reading_time={reading_time}
              />
            )
          )}
        </ArticlesContainer>
      )}

      {profileAddress && (
        <AddressContainer>
          {addresses.map(({ name, phone, city, postal, route }, index) => (
            <Cards
              address
              key={index}
              name={name}
              phone={phone}
              city={city}
              postal={postal}
              route={route}
              selected={selected}
            />
          ))}
        </AddressContainer>
      )}

      {selectAddress && (
        <ModalAddressContainer>
          {addresses.map(({ name, phone, city, postal, route }, index) => (
            <Cards
              selectAddress
              key={index}
              name={name}
              phone={phone}
              city={city}
              postal={postal}
              route={route}
              selected={selected}
            />
          ))}
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
