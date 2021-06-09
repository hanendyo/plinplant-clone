export const userLogin = (data) => ({ type: 'USER_LOGIN', payload: data });

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: 'USER_LOGOUT' });
};
