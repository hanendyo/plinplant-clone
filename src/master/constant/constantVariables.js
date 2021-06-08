export const priceFormat = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
});

export const weightFormat = (weight) => {
  if (weight > 999) return `${weight / 1000} kg`;
  if (weight < 1000) return `${weight} gr`;
};

export const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

const time = new Date();
const date = time.getDate();
const month = time.getMonth();
const year = time.getFullYear();
const hour = time.getHours();
const min = time.getMinutes();

export const review_created = `${date} ${months[month]} ${year}`;

// const created_at = `${date} ${months[month]} ${year}, ${
//   hour < 10 ? `0${hour}` : hour
// }:${min < 10 ? `0${min}` : min} WIB`;
