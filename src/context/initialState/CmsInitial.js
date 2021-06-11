export default {
  category: {
    pk_category_id: '',
    category_name: '',
  },
  review: {
    created_at: '',
    comment: '',
    rating: '',
    fk_user_id: '',
    fk_plant_id: '',
  },
  plant: {
    plant_name: '',
    plant_image: '',
    plant_origin: '',
    plant_qualities: '',
    plant_use: '',
    days_to_sprout: '',
    matures_in: '',
    growth_type: '',
    fk_category_id: '',
  },
  plant_breeding: {
    seed: '',
    tuber: '',
    young: '',
    mature: '',
    seed_image: '',
    tuber_image: '',
    young_image: '',
    mature_image: '',
    fk_plant_id: '',
  },
  price_list: {
    seed_price: '',
    tuber_price: '',
    young_price: '',
    mature_price: '',
    fk_stock_id: '',
  },
  order_item: {
    pk_cart_id:'',
    phase_image:'',
    plant_name:'',
    plant_phase:'',
    price:'',	
    quantity:'',
    weight:'',
    fk_plant_id:'',
    fk_user_id:'',
    fk_invoice_id:''
  },
  stock: {
    seed_stock: '',
    tuber_stock: '',
    young_stock: '',
    mature_stock: '',
  },
  order: {
    status: '',
    created_at: '',
    fk_user_id: '',
  },
  user: {
    fullname: '',
    email: '',
    password: '',
    birth_date: '',
    picture: '',
    phone_number: '',
    fk_contact_id: '',
    fk_gender_id: '',
  },
  contact: {
    recipient_name: '',
    address: '',
    phone_number: '',
    zipcode: '',
    fk_city_id: '',
    fk_user_id: '',
  },
  gender: {
    type: '',
  },
  city: {
    city_name: '',
    city_code: ''
  },
  article: {
    article_image: '',
    title: '',
    author: '',
    created_at: '',
    duration: '',
    source: '',
    url: '',
    content: '',
    pk_article_id: '',
  },
  shipping_charges: {
    shipping_price: '',
    fk_city_id: '',
  },
  weight: {
    seed_weight: '',
    tuber_weight: '',
    young_weight: '',
    mature_weight: '',
    fk_plant_breeding_id: '',
    fk_price_list_id: ''
  },
};
