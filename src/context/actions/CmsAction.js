import axios from 'axios';

export const cmsAction = (data, value) => {
    return {
        type: `SET_CMS_INPUT`,
        data,
        value
    }
}

const url = 'http://localhost:5000/input/'

// category
export const categoryAction = async (form) => {
    axios.post(url + 'category_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })

}

// review
export const reviewAction = async (form) => {
    axios.post(url + 'review_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}
// plant
export const plantAction = async (form) => {
    axios.post(url + 'plant_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}
// plant breeding
export const plantBreedingAction = async (form) => {
    axios.post(url + 'plant_breeding_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// price list
export const priceListAction = async (form) => {
    axios.post(url + 'price_list_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// stock
export const stockAction = async (form) => {
    axios.post(url + 'stock_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// article
export const articlePost = async (form) => {
    axios.post(url + 'article_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}


// order item
export const orderItemAction = async (form) => {
    axios.post(url + 'order_item_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// order
export const orderAction = async (form) => {
    axios.post(url + 'order_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// user
export const userAction = async (form) => {
    axios.post(url + 'user_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// contact
export const contactAction = async (form) => {
    axios.post(url + 'contact_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// gender
export const genderAction = async (form) => {
    axios.post(url + 'gender_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// city
export const cityAction = async (form) => {
    axios.post(url + 'city_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// shipping charges
export const shippingChargesAction = async (form) => {
    axios.post(url + 'shipping_charges_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// weight
export const weightAction = async (form) => {
    axios.post(url + 'weight_input', form)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}
