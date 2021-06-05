import axios from 'axios';

// ::: USER INFO REDUCER ::: DUMMY :::
export const getUser = () => async (dispatch) => {
  const res = await axios.get('http://localhost:5000/input/user/1');

  dispatch({ type: 'FETCH_USER_INFO', payload: res.data.data });
};

// ::: END OF USER INFO REDUCER ::: DUMMY :::

export const getInvoices = () => async (dispatch) => {
  const res = await axios.get('http://localhost:5000/input/invoice');

  dispatch({ type: 'FETCH_INVOICE_ALL', payload: res.data.data });
};

export const getInvoiceDetails = () => async (dispatch) => {
  const res = await axios.get(
    'http://localhost:5000/input/invoice/1/1622764848807'
  );
  dispatch({ type: 'FETCH_INVOICE_DETAIL', payload: res.data.data });
};

export const getReviews = (match) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/input/review/${match.params.id}`
  );

  dispatch({ type: 'FETCH_PLANT_REVIEW', payload: res.data.data });
};

export const getCarts = (userInfoState) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/input/cart/${userInfoState[0]?.pk_user_id}`
  );
  dispatch({ type: 'FETCH_USER_CART', payload: res.data.data });
};

export const getAddresses = (userInfoState) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/input/address/${userInfoState[0]?.pk_user_id}`
  );
  dispatch({ type: 'FETCH_USER_ADDRESS', payload: res.data.data });
};

export const getPlants = () => async (dispatch) => {
  const res = await axios.get(
    'http://localhost:5000/input/plant_get_all_datas'
  );

  dispatch({ type: 'FETCH_TABLE_PLANT', payload: res.data.data });
};

export const getPlantById = (match) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/input/plant_get_by_id/${match.params.id}`
  );

  dispatch({ type: 'FETCH_PLANT_ID', payload: res.data.data[0] });
};

export const getArticles = () => async (dispatch) => {
  const res = await axios.get(
    'http://localhost:5000/input/article_get_all_datas'
  );

  dispatch({ type: 'FETCH_TABLE_ARTICLE', payload: res.data.data });
};

export const getArticleById = (match) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/input/article_get_by_id/${match.params.id}`
  );
  dispatch({ type: 'FETCH_ARTICLE_ID', payload: res.data.data[0] });
};
