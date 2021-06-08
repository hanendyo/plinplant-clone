import dummy from '../../../fajariadi/assets/images/header-pic-small.jpg';
import {
  ensiklopedia,
  shopping,
  shipping,
  artikel,
} from '../../../fajariadi/assets/illustration';
import pic from '../../../fajariadi/assets/images/ig.jpg';

import seed from '../../../dhika/images/basil-seed.png';
import tuber from '../../../dhika/images/basil-tuber.jpg';
import juvenil from '../../../dhika/images/basil-juvenil.jpg';
import mature from '../../../dhika/images/basil-mature.jpg';
import image from '../../../dhika/Artikel/images/cherrytomatomature.jpg';

export const products = [
  {
    name: 'Jakarta',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Bogor',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Depok',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Tangerang',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Bekasi',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Pondok Cina',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Sudirman',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Kasablangka',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Pondok Indah',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Pondok Gede',
    category: 'hias',
    img: dummy,
  },
  {
    name: 'Jakarta Barat',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Jakarta Selatan',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Jakarta Pusat',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Jakarta Timur',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Jakarta Utara',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Depok Baru',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Depok Lama',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Bandung',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Lautan',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Api',
    category: 'sayur',
    img: dummy,
  },
  {
    name: 'Surabaya',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Suramadu',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Madura',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Kalimantan',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Sulawesi',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Papua',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Aceh',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Yogyakarta',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Medan',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Balikpapan',
    category: 'buah',
    img: dummy,
  },
  {
    name: 'Singapura',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'China',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'Brazil',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'Panama',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'Argentina',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'Juventus',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'Milan',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'Barcelona',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'Madrid',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'Manchester United',
    category: 'rempah',
    img: dummy,
  },
  {
    name: 'Manchester City',
    category: 'rempah',
    img: dummy,
  },
];

export const productsCategory = products
  .map((item) => item.category)
  .filter((item, index, arr) => arr.indexOf(item) === index);

export const valueProps = [
  {
    name: 'Ensiklopedia',
    img: ensiklopedia,
  },
  {
    name: 'Belanja Online',
    img: shopping,
  },
  {
    name: 'Artikel',
    img: artikel,
  },
  {
    name: 'Kurir Pribadi',
    img: shipping,
  },
];

export const reviews = [
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 4,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 5,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 4,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 4,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 5,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 5,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 4,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 5,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 4,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 3,
  },
  {
    name: 'Nama User',
    created: '2 hari yang lalu',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: pic,
    rating: 4,
  },
];

export const plant = {
  seed,
  tuber,
  juvenil,
  mature,
};

export const cartItems = [
  {
    img: seed,
    name: 'Lavender',
    phase: 'Biji',
    price: 'Rp 21.950',
    quantity: 1,
  },
  {
    img: tuber,
    name: 'Lavender',
    phase: 'Bonggol',
    price: 'Rp 21.950',
    quantity: 1,
  },
  {
    img: juvenil,
    name: 'Lavender',
    phase: 'Muda',
    price: 'Rp 21.950',
    quantity: 1,
  },
  {
    img: mature,
    name: 'Lavender',
    phase: 'Dewasa',
    price: 'Rp 21.950',
    quantity: 1,
  },
];

export const transactions = [
  {
    img: seed,
    name: 'Lavender',
    phase: 'Biji',
    price: 'Rp 21.950',
    quantity: 1,
    totalPrice: 'Rp 120.067',
    created: '4 Mei 2021',
    no_order: 'lkjascLKJLKFklhadsl',
    status: 'Menunggu Pembayaran',
  },
  {
    img: seed,
    name: 'Lavender',
    phase: 'Biji',
    price: 'Rp 21.950',
    quantity: 1,
    totalPrice: 'Rp 120.067',
    created: '4 Mei 2021',
    no_order: 'lkjascLKJLKFklhadsl',
    status: 'Verifikasi Pembayaran',
  },
  {
    img: seed,
    name: 'Lavender',
    phase: 'Biji',
    price: 'Rp 21.950',
    quantity: 1,
    totalPrice: 'Rp 120.067',
    created: '4 Mei 2021',
    no_order: 'lkjascLKJLKFklhadsl',
    status: 'Pesanan Diantar',
  },
  {
    img: seed,
    name: 'Lavender',
    phase: 'Biji',
    price: 'Rp 21.950',
    quantity: 1,
    totalPrice: 'Rp 120.067',
    created: '4 Mei 2021',
    no_order: 'lkjascLKJLKFklhadsl',
    status: 'Transaksi Selesai',
  },
];

export const invoiceProduct = [
  {
    img: seed,
    name: 'Lavender',
    phase: 'Biji',
    price: 'Rp 21.950',
    quantity: 1,
    review: false,
  },
  {
    img: tuber,
    name: 'Lavender',
    phase: 'Bonggol',
    price: 'Rp 21.950',
    quantity: 1,
    review: false,
  },
  {
    img: juvenil,
    name: 'Lavender',
    phase: 'Muda',
    price: 'Rp 21.950',
    quantity: 1,
    review: true,
  },
  {
    img: mature,
    name: 'Lavender',
    phase: 'Dewasa',
    price: 'Rp 21.950',
    quantity: 1,
    review: false,
  },
];

export const articles = [
  {
    img: image,
    title: 'Lorem judul ipsum dolor sit',
    author: 'Author',
    release_date: '30 April 2021',
    reading_time: 3,
  },
  {
    img: image,
    title: 'Lorem judul ipsum dolor sit',
    author: 'Author',
    release_date: '30 April 2021',
    reading_time: 3,
  },
  {
    img: image,
    title: 'Lorem judul ipsum dolor sit',
    author: 'Author',
    release_date: '30 April 2021',
    reading_time: 3,
  },
  {
    img: image,
    title: 'Lorem judul ipsum dolor sit',
    author: 'Author',
    release_date: '30 April 2021',
    reading_time: 3,
  },
  {
    img: image,
    title: 'Lorem judul ipsum dolor sit',
    author: 'Author',
    release_date: '30 April 2021',
    reading_time: 3,
  },
];

export const addresses = [
  {
    name: 'Dhika Adhiwijna',
    phone: '085156493800',
    city: 'Jakarta',
    postal: '15222',
    route: 'Jl. Senoparty - Gerbang Putih No. 33',
  },
  {
    name: 'Yudi Irwanto',
    phone: '085156493810',
    city: 'Tangerang',
    postal: '15332',
    route: 'Jl. Alam Sutra - Lt. 17 Nawadata Tower',
  },
  {
    name: 'Hanendyo Indira',
    phone: '085156493844',
    city: 'Bogor',
    postal: '15222',
    route: 'Jl. Cibeureum - Gerbang Hijau Muda No. 21',
  },
  {
    name: 'Fajar Riadi',
    phone: '085156493801',
    city: 'Kab. Tangerang',
    postal: '15213',
    route: 'Jl. Salembaran Kosambi - Depan Bakso Zahra',
  },
];
