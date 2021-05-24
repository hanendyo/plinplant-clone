export default {
    category: {
        pk_category_id: '',
        category_name: ''
    },
    review: {
        comment: '',
        rating: ''
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
        fk_plant_id: ''
    },
    price_list: {
        seed_price: '',
        tuber_price: '',
        young_price: '',
        mature_price: '',
        fk_plant_breeding_id: '',
        fk_stock_id: ''
    },
    order_item: {
        quantity: '',
        fk_price_list_id: ''
    },
    stock: {
        seed_stock: '',
        tuber_stock: '',
        young_stock: '',
        mature_stock: ''
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
        article_image: '',
        author: '',
        title: '',
        content: '',
        created_at: ''
    },
    shipping_charges: {
        shipping_price: '',
        fk_city_id: ''
    },
    weight: {
        weight: ''
    }
}