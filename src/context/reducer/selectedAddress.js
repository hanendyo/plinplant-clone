export const selectedAddressReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ADDRESS':
      return (state = action.payload);

    default:
      return state;
  }
};
