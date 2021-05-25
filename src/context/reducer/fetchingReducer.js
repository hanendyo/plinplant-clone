export const tablePlantReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TABLE_PLANT':
      return [...state, ...action.payload];

    default:
      return state;
  }
};
