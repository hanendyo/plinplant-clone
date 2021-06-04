// ::: USER INFO REDUCER ::: DUMMY :::

export const getUser = (data) => ({
  type: 'FETCH_USER_INFO',
  payload: data,
});

// ::: END OF USER INFO REDUCER ::: DUMMY :::

export const getInvoices = (data) => ({
  type: 'FETCH_INVOICE_ALL',
  payload: data,
});

export const getInvoiceDetails = (data) => ({
  type: 'FETCH_INVOICE_DETAIL',
  payload: data,
});

export const getReviews = (data) => ({
  type: 'FETCH_PLANT_REVIEW',
  payload: data,
});

export const getCarts = (data) => ({
  type: 'FETCH_USER_CART',
  payload: data,
});

export const getAddresses = (data) => ({
  type: 'FETCH_USER_ADDRESS',
  payload: data,
});

export const getPlants = (data) => ({
  type: 'FETCH_TABLE_PLANT',
  payload: data,
});

export const getPlantById = (data) => ({
  type: 'FETCH_PLANT_ID',
  payload: data,
});

export const getArticles = (data) => ({
  type: 'FETCH_TABLE_ARTICLE',
  payload: data,
});

export const getArticleById = (data) => ({
  type: 'FETCH_ARTICLE_ID',
  payload: data,
});
