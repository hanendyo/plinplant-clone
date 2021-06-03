export const priceFormat = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
});

export const weightFormat = (weight) => {
  if (weight > 999) return `${weight / 1000} kg`;
  if (weight < 1000) return `${weight} gr`;
};
