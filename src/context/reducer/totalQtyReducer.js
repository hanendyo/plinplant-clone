export const getTotalQtyReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TOTAL_QTY':
      return action.payload;

    default:
      return state;
  }
};
