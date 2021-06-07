// ::: USER INFO REDUCER ::: DUMMY :::

export const userInfoReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_INFO':
      return [...action.payload];

    default:
      return state;
  }
};

// ::: END OF USER INFO REDUCER ::: DUMMY :::

export const tablePlantReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TABLE_PLANT':
      return [...action.payload];

    default:
      return state;
  }
};

export const plantIdReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PLANT_ID':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const userCartReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_CART':
      return [...action.payload];

    case 'ADD_USER_CART':
      return [
        ...state,
        {
          phase_image: action.payload.phase_image,
          plant_name: action.payload.plant_name,
          plant_phase: action.payload.plant_phase,
          price: action.payload.price,
          quantity: action.payload.quantity,
          weight: action.payload.weight,
          fk_plant_id: action.payload.fk_plant_id,
          fk_user_id: action.payload.fk_user_id,
        },
      ];

    case 'DELETE_USER_CART':
      return state.filter((cart) => cart.pk_cart_id !== action.payload);

    case 'INCREMENT_USER_CART':
      return state.map((cart) =>
        cart.pk_cart_id === action.payload.pk_cart_id
          ? { ...cart, quantity: action.payload.quantity + 1 }
          : cart
      );

    case 'DECREMENT_USER_CART':
      return state.map((cart) =>
        cart.pk_cart_id === action.payload.pk_cart_id
          ? {
              ...cart,
              quantity: action.payload.quantity - 1,
            }
          : cart
      );

    case 'CHECKOUT_USER_CART':
      return state.filter((cart) =>
        cart.fk_user_id === action.payload.fk_user_id
          ? {
              ...cart,
              fk_invoice_id: action.payload.fk_invoice_id,
            }
          : cart
      );

    default:
      return state;
  }
};

export const userAddressReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_ADDRESS':
      return [...action.payload];

    default:
      return state;
  }
};

export const bankReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_BANK':
      return [...action.payload];

    default:
      return state;
  }
};

export const invoiceReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INVOICE_ALL':
      return [...action.payload];

    case 'FETCH_INVOICE_DETAIL':
      return [...action.payload];

    case 'CREATE_INVOICE':
      return [
        ...state,
        {
          pk_invoice_id: action.payload.pk_invoice_id,
          no_order: action.payload.no_order,
          created_at: action.payload.created_at,
          status: action.payload.status,
          review_status: action.payload.review_status,
          fk_user_id: action.payload.fk_user_id,
          fk_contact_id: action.payload.fk_contact_id,
          fk_bank_id: action.payload.fk_bank_id,
        },
      ];

    default:
      return state;
  }
};

export const plantReviewReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PLANT_REVIEW':
      return [...action.payload];

    default:
      return state;
  }
};

export const tableArticleReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TABLE_ARTICLE':
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export const articleIdReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_ID':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
