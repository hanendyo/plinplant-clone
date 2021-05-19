export default {
    category: {
        pk_category_id: '',
        category_name: ''
    },
    review: {
        comment: '',
        rating: 0
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
        fk_review_id: ''
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
        fk_plant_id: 0
    },
    price_list: {
        seed_price: 0,
        tuber_price: 0,
        young_price: 0,
        mature_price: 0,
        fk_plant_breeding_id: 0,
        fk_stock_id: 0
    },
    order_item: {
        quantity: '',
        fk_price_list_id: ''
    },
    stock: {
        seed_stock: 0,
        tuber_stock: 0,
        young_stock: 0,
        mature_stock: 0
    },
    order: {
        status: '',
        created_at: '',
        fk_user_id: ''
    },
    user: {
        fullname: '',
        email: '',
        password: '',
        birth_date: '',
        picture: '',
        fk_login_id: '',
        fk_contact_id: '',
        fk_gender_id: ''
    },
    contact: {
        recipient_name: '',
        address: '',
        phone_number: '',
        fk_city_id: ''
    },
    gender: {
        type: ''
    },
    city: {
        city_name: ''
    },
    article: {
        image: '',
        author: '',
        title: '',
        content: '',
        created_at: ''
    },
    shipping_charges: {
        shipping_price: 0,
        fk_city_id: 0
    },
    weight: {
        weight: 0
    }

}