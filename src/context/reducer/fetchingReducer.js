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
