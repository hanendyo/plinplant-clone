const modalUploadReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL_UPLOAD':
      return !state;

    case 'CLOSE_MODAL_UPLOAD':
      return !state;

    default:
      return state;
  }
};

export default modalUploadReducer;
