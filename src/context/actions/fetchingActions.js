export const getPlants = (data) => ({
  type: 'FETCH_TABLE_PLANT',
  payload: data,
});

export const getPlantById = (data) => ({
  type: 'FETCH_PLANT_ID',
  payload: data,
});
