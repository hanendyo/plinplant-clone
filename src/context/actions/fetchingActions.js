import axios from 'axios';

// ::: USER INFO REDUCER ::: DUMMY :::
export const getUser = () => async (dispatch) => {
  const res = await axios.get('http://localhost:5000/input/user/1');

  dispatch({ type: 'FETCH_USER_INFO', payload: res.data.data });
};

// ::: END OF USER INFO REDUCER ::: DUMMY :::

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

// ::: CART ACTION :::
export const addCart = (data, phase) => async (dispatch) => {
  const body = new FormData();

  if (phase === 'Biji') {
    body.append('phase_image', data.seed_image);
    body.append('plant_name', data.plant_name);
    body.append('plant_phase', data.highlight);
    body.append('price', data.seed_price);
    body.append('quantity', data.seedQuantity);
    body.append('weight', data.seed_weight);
    body.append('fk_plant_id', data.pk_plant_id);
    body.append('fk_user_id', data.pk_user_id);
  }

  if (phase === 'Bonggol') {
    body.append('phase_image', data.tuber_image);
    body.append('plant_name', data.plant_name);
    body.append('plant_phase', data.highlight);
    body.append('price', data.tuber_price);
    body.append('quantity', data.tuberQuantity);
    body.append('weight', data.tuber_weight);
    body.append('fk_plant_id', data.pk_plant_id);
    body.append('fk_user_id', data.pk_user_id);
  }

  if (phase === 'Muda') {
    body.append('phase_image', data.young_image);
    body.append('plant_name', data.plant_name);
    body.append('plant_phase', data.highlight);
    body.append('price', data.teen_price);
    body.append('quantity', data.youngQuantity);
    body.append('weight', data.young_weight);
    body.append('fk_plant_id', data.pk_plant_id);
    body.append('fk_user_id', data.pk_user_id);
  }

  if (phase === 'Dewasa') {
    body.append('phase_image', data.mature_image);
    body.append('plant_name', data.plant_name);
    body.append('plant_phase', data.highlight);
    body.append('price', data.mature_price);
    body.append('quantity', data.matureQuantity);
    body.append('weight', data.mature_weight);
    body.append('fk_plant_id', data.pk_plant_id);
    body.append('fk_user_id', data.pk_user_id);
  }

  const res = await axios.post('http://localhost:5000/input/cart', body, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });

  console.log('ADDED TO CART !!!!!', res);

  dispatch({ type: 'ADD_USER_CART', payload: data });
};

export const getCarts = (userInfoState) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/input/cart/user/${userInfoState[0]?.pk_user_id}`
  );
  dispatch({ type: 'FETCH_USER_CART', payload: res.data.data });
};

export const deleteCart = (id) => async (dispatch) => {
  const res = await axios.delete(
    `http://localhost:5000/input/cart/delete/${id}`
  );
  console.log('CART DELETED!!!', res);
  dispatch({ type: 'DELETE_USER_CART', payload: id });
};

export const incrementCart = (data) => async (dispatch) => {
  const res = await axios.put(`http://localhost:5000/input/cart/update`, data);
  console.log('CART INCREMENT!!!', res);
  dispatch({ type: 'INCREMENT_USER_CART', payload: data });
};

export const decrementCart = (data) => async (dispatch) => {
  const res = await axios.put(`http://localhost:5000/input/cart/update`, data);
  console.log('CART DECREMENT!!!', res);
  dispatch({ type: 'DECREMENT_USER_CART', payload: data });
};

export const cartCheckout = (data) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:5000/input/cart/checkout`,
    data
  );

  console.log('CHECKOUT PROSESSSS', res);

  dispatch({ type: 'CHECKOUT_USER_CART', payload: data });
};
// ::: END OF CART ACTION :::

export const getAddresses = (userInfoState) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/input/address/${userInfoState[0]?.pk_user_id}`
  );
  dispatch({ type: 'FETCH_USER_ADDRESS', payload: res.data.data });
};

export const getBanks = () => async (dispatch) => {
  const res = await axios.get('http://localhost:5000/input/bank');
  console.log('REEYYSS', res);

  dispatch({ type: 'FETCH_BANK', payload: res.data.data });
};

export const getInvoices = () => async (dispatch) => {
  const res = await axios.get('http://localhost:5000/input/invoice');

  dispatch({ type: 'FETCH_INVOICE_ALL', payload: res.data.data });
};

export const getInvoiceDetails = (match) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/input/invoice/${match.params.id}/${match.params.order}`
  );

  console.log('NOT ITERABLE', res);
  dispatch({ type: 'FETCH_INVOICE_DETAIL', payload: res.data.data });
};

export const createInvoice = (data) => async (dispatch) => {
  const body = new FormData();

  body.append('pk_invoice_id', data.fk_invoice_id);
  body.append('no_order', data.fk_invoice_id);
  body.append('created_at', data.created_at);
  body.append('status', data.status);
  body.append('review_status', data.review_status);
  body.append('fk_user_id', data.fk_user_id);
  body.append('fk_contact_id', data.fk_contact_id);
  body.append('fk_bank_id', data.fk_bank_id);

  const res = await axios.post('http://localhost:5000/input/invoice', body, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });

  console.log('INVOICE CREATED !!!!!', res);

  dispatch({ type: 'CREATE_INVOICE', payload: data });
};

export const getReviews = (match) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/input/review/${match.params.id}`
  );

  dispatch({ type: 'FETCH_PLANT_REVIEW', payload: res.data.data });
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
