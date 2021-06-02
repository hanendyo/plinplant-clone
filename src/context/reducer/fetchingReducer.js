// ::: USER INFO REDUCER ::: DUMMY :::

export const userInfoReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_INFO':
      return [...state, ...action.payload];

    default:
      return state;
  }
};

// ::: END OF USER INFO REDUCER ::: DUMMY :::

export const plantReviewReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PLANT_REVIEW':
      return [...action.payload];

    default:
      return state;
  }
};

export const userCartReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_CART':
      return [...action.payload];

    default:
      return state;
  }
};

export const tablePlantReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TABLE_PLANT':
      return [...state, ...action.payload];

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
