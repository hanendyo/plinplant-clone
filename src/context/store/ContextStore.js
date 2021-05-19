import React, { createContext, useReducer } from "react";
import CmsInitial from "../initialState/CmsInitial";
import SignInInitial from "../initialState/SignInInitial";
import SignUpInitial from "../initialState/SignUpInitial";
import { CmsReducer } from "../reducer/CmsReducer";
import { SignInReducer } from "../reducer/SignInReducer";
import { SignUpReducer } from "../reducer/SignUpReducer";

export const ContextStore = createContext();

export const ContextProvider = ({ children }) => {
  //! AUTH
  // SIGNUP
  const [signUpState, signUpDispatch] = useReducer(
    SignUpReducer,
    SignUpInitial
  );
  // LOGIN
  const [loginState, loginDispatch] = useReducer(
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
    CmsReducer, CmsInitial.category
  );
  // CITY
  const [cityState, cityDispatch] = useReducer(
    CmsReducer, CmsInitial.city
  );
  // CONTACT
  const [contactState, contactDispatch] = useReducer(
    CmsReducer, CmsInitial.contact
  );
  // GENDER
  const [genderState, genderDispatch] = useReducer(
    CmsReducer, CmsInitial.gender
  );
  // ORDER
  const [orderState, orderDispatch] = useReducer(
    CmsReducer, CmsInitial.order
  );
  // ORDER ITEM
  const [orderItemState, orderItemDispatch] = useReducer(
    CmsReducer, CmsInitial.order_item
  );
  // PLANT
  const [plantState, plantDispatch] = useReducer(
    CmsReducer, CmsInitial.plant
  );
  // PLANT BREEDING
  const [plantBreedingState, plantBreedingDispatch] = useReducer(
    CmsReducer, CmsInitial.plant_breeding
  );
  // PRICE LIST
  const [priceListState, priceListDispatch] = useReducer(
    CmsReducer, CmsInitial.price_list
  );
  // REVIEW
  const [reviewState, reviewDispatch] = useReducer(
    CmsReducer, CmsInitial.review
  );
  // SHIPPING CHARGES
  const [shippingChargesState, shippingChargesDispatch] = useReducer(
    CmsReducer, CmsInitial.shipping_charges
  );
  // STOCK
   const [stockState, stockDispatch] = useReducer(
    CmsReducer, CmsInitial.stock
  );
  // USER
  const [userState, userDispatch] = useReducer(
    CmsReducer, CmsInitial.user
  );
  // WEIGHT
  const [weightState, weightDispatch] = useReducer(
    CmsReducer, CmsInitial.weight
  );


  return (
    <ContextStore.Provider
      value={{
        // signup
        signUpState,
        signUpDispatch,
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
        weightDispatch
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
