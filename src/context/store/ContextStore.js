import React, { createContext, useReducer } from 'react';
import { useThunkReducer } from 'react-hook-thunk-reducer';
import CmsInitial from '../initialState/CmsInitial';
import SignInInitial from '../initialState/SignInInitial';
import SignUpInitial from '../initialState/SignUpInitial';
import {
  modalUploadReducer,
  modalReviewReducer,
  tablePlantReducer,
  plantIdReducer,
  selectedAddressReducer,
} from '../reducer';
import { CmsReducer } from '../reducer/CmsReducer';
import {
  articleIdReducer,
  plantReviewReducer,
  tableArticleReducer,
  userInfoReducer,
  userCartReducer,
  userAddressReducer,
  invoiceReducer,
  bankReducer,
} from '../reducer/fetchingReducer';
import {
  modalPilihAlamatReducer,
  modalTambahAlamatReducer,
} from '../reducer/modalReducers';
import { SignInReducer } from '../reducer/SignInReducer';
import { SignUpReducer } from '../reducer/SignUpReducer';

export const ContextStore = createContext();

export const ContextProvider = ({ children }) => {
  //! AUTH
  // SIGNUP
  const [signUpState, signUpDispatch] = useReducer(
    SignUpReducer,
    SignUpInitial
  );

  // LOGIN
  const [signInState, signInDispatch] = useReducer(
    SignInReducer,
    SignInInitial
  );

  //! CMS
  // ARTICLE
  const [articleState, articleDispatch] = useReducer(
    CmsReducer,
    CmsInitial.article
  );

  // CATEGORY
  const [categoryState, categoryDispatch] = useReducer(
    CmsReducer,
    CmsInitial.category
  );

  // CITY
  const [cityState, cityDispatch] = useReducer(CmsReducer, CmsInitial.city);

  // CONTACT
  const [contactState, contactDispatch] = useReducer(
    CmsReducer,
    CmsInitial.contact
  );

  // GENDER
  const [genderState, genderDispatch] = useReducer(
    CmsReducer,
    CmsInitial.gender
  );

  // ORDER
  const [orderState, orderDispatch] = useReducer(CmsReducer, CmsInitial.order);

  // ORDER ITEM
  const [orderItemState, orderItemDispatch] = useReducer(
    CmsReducer,
    CmsInitial.order_item
  );

  // PLANT
  const [plantState, plantDispatch] = useReducer(CmsReducer, CmsInitial.plant);

  // PLANT BREEDING
  const [plantBreedingState, plantBreedingDispatch] = useReducer(
    CmsReducer,
    CmsInitial.plant_breeding
  );

  // PRICE LIST
  const [priceListState, priceListDispatch] = useReducer(
    CmsReducer,
    CmsInitial.price_list
  );

  // REVIEW
  const [reviewState, reviewDispatch] = useReducer(
    CmsReducer,
    CmsInitial.review
  );

  // SHIPPING CHARGES
  const [shippingChargesState, shippingChargesDispatch] = useReducer(
    CmsReducer,
    CmsInitial.shipping_charges
  );

  // STOCK
  const [stockState, stockDispatch] = useReducer(CmsReducer, CmsInitial.stock);

  // USER
  const [userState, userDispatch] = useReducer(CmsReducer, CmsInitial.user);

  // WEIGHT
  const [weightState, weightDispatch] = useReducer(
    CmsReducer,
    CmsInitial.weight
  );

  // !::: MODAL BOXEX :::
  // ::: MODAL UPLOAD INVOICE :::
  const [modalUploadState, modalUploadDispatch] = useReducer(
    modalUploadReducer,
    false
  );

  // ::: MODAL REVIEW INVOICE :::
  const [modalReviewState, modalReviewDispatch] = useReducer(
    modalReviewReducer,
    false
  );

  // ::: MODAL PILIH ALAMAT :::
  const [modalPilihAlamatState, modalPilihAlamatDispatch] = useReducer(
    modalPilihAlamatReducer,
    false
  );

  // ::: MODAL TAMBAH ALAMAT :::
  const [modalTambahAlamatState, modalTambahAlamatDispatch] = useReducer(
    modalTambahAlamatReducer,
    false
  );

  // !::::::::::::::::::::: FETCHING ::::::::::::::::::::::::
  // ::: FETCH USER INFO ::: DUMMY :::
  const [userInfoState, userInfoDispatch] = useThunkReducer(
    userInfoReducer,
    []
  );

  // ::: FETCH TABLE PLANT :::
  const [tablePlantState, tablePlantDispatch] = useThunkReducer(
    tablePlantReducer,
    []
  );

  // ::: FETCH TABLE PLANT BY ID :::
  const [plantIdState, plantIdDispatch] = useThunkReducer(plantIdReducer, {});

  // ::: FETCH USER CART :::
  const [userCartState, userCartDispatch] = useThunkReducer(
    userCartReducer,
    []
  );

  // ::: FETCH USER ADDRESS :::
  const [userAddressState, userAddressDispatch] = useThunkReducer(
    userAddressReducer,
    []
  );

  // ::: SELECTED USER ADDRESS :::
  const [selectedAddressState, selectedAddressDispatch] = useThunkReducer(
    selectedAddressReducer,
    0
  );

  // ::: FETCH BANK :::
  const [bankState, bankDispatch] = useThunkReducer(bankReducer, []);

  // ::: FETCH INVOICES :::
  const [invoiceState, invoiceDispatch] = useThunkReducer(invoiceReducer, []);

  // ::: FETCH PLANT REVIEW :::
  const [plantReviewState, plantReviewDispatch] = useThunkReducer(
    plantReviewReducer,
    []
  );

  // ::: FETCH TABLE ARTICLE :::
  const [tableArticleState, tableArticleDispatch] = useThunkReducer(
    tableArticleReducer,
    []
  );

  // ::: FETCH TABLE ARTICLE BY ID :::
  const [articleIdState, articleIdDispatch] = useThunkReducer(
    articleIdReducer,
    {}
  );

  return (
    <ContextStore.Provider
      value={{
        // signup
        signUpState,
        signUpDispatch,
        // login
        signInState,
        signInDispatch,
        // article
        articleState,
        articleDispatch,

        // category
        categoryState,
        categoryDispatch,

        // city
        cityState,
        cityDispatch,

        // contact
        contactState,
        contactDispatch,

        // gender
        genderState,
        genderDispatch,

        // order
        orderState,
        orderDispatch,

        // order item
        orderItemState,
        orderItemDispatch,

        // plant
        plantState,
        plantDispatch,

        // plant breeding
        plantBreedingState,
        plantBreedingDispatch,

        // price list
        priceListState,
        priceListDispatch,

        // review
        reviewState,
        reviewDispatch,

        // shipping charges
        shippingChargesState,
        shippingChargesDispatch,

        // stock
        stockState,
        stockDispatch,

        // user
        userState,
        userDispatch,

        // weight
        weightState,
        weightDispatch,

        // ::: MODAL UPLOAD :::
        modalUploadState,
        modalUploadDispatch,

        // ::: MODAL REVIEW :::
        modalReviewState,
        modalReviewDispatch,

        // ::: MODAL PILIH ALAMAT :::
        modalPilihAlamatState,
        modalPilihAlamatDispatch,

        // ::: MODAL TAMBAH ALAMAT :::
        modalTambahAlamatState,
        modalTambahAlamatDispatch,

        // ::: FETCH TABLE PLANT :::
        tablePlantState,
        tablePlantDispatch,

        // ::: FETCH PLANT ID :::
        plantIdState,
        plantIdDispatch,

        // ::: FETCH ARTICLE :::
        tableArticleState,
        tableArticleDispatch,

        // ::: FETCH ARTICLE ID :::
        articleIdState,
        articleIdDispatch,

        // ::: FETCH USER INFO ::: DUMMY :::
        userInfoState,
        userInfoDispatch,

        // ::: FETCH PLANT REVIEW :::
        plantReviewState,
        plantReviewDispatch,

        // ::: FETCH USER CART :::
        userCartState,
        userCartDispatch,

        // ::: FETCH USER ADDRESS :::
        userAddressState,
        userAddressDispatch,

        // ::: SELECTED USER ADDRESS :::
        selectedAddressState,
        selectedAddressDispatch,

        // ::: SELECTED USER ADDRESS :::
        invoiceState,
        invoiceDispatch,

        // ::: BANK :::
        bankState,
        bankDispatch,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
