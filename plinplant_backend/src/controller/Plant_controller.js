const {
  // USER - DUMMY
  getUserInfo,
  // REVIEW PLANT
  reviewGetPlantId,
  // CART USER
  cartGetByUserId,
  // ARTICLE
  articleInputTable,
  articleGetAllDatas,
  articleGetId,
  articleDelete,
  articleUpdate,
  // CATEGORY
  categoryInputTable,
  categoryGetAllDatas,
  categoryDelete,
  categoryUpdate,
  // CITY
  cityInputTable,
  cityGetAllDatas,
  cityDelete,
  cityUpdate,
  // CONTACT
  contactInputTable,
  contactGetAllDatas,
  contactDelete,
  contactUpdate,
  // GENDER
  genderInputTable,
  genderGetAllDatas,
  genderDelete,
  genderUpdate,
  // ORDER
  orderInputTable,
  orderGetAllDatas,
  orderDelete,
  orderUpdate,
  // ORDER ITEM
  orderItemInputTable,
  orderItemGetAllDatas,
  orderItemDelete,
  orderItemUpdate,
  // PLANT
  plantInputTable,
  plantGetAllDatas,
  plantGetId,
  plantDelete,
  plantUpdate,
  // PLANT BREEDING
  plantBreedingInputTable,
  plantBreedingGetAllDatas,
  plantBreedingDelete,
  plantBreedingUpdate,
  // PRICE LIST
  priceListInputTable,
  priceListGetAllDatas,
  priceListDelete,
  priceListUpdate,
  // REVIEW
  reviewInputTable,
  reviewGetAllDatas,
  reviewDelete,
  reviewUpdate,
  // SHIPPING CHARGES
  shippingChargesInputTable,
  shippingChargesGetAllDatas,
  shippingChargesDelete,
  shippingChargesUpdate,
  // STOCK
  stockInputTable,
  stockGetAllDatas,
  stockDelete,
  stockUpdate,
  // USER
  userInputTable,
  userGetAllDatas,
  userDelete,
  userUpdate,
  // WEIGHT
  weightInputTable,
  weightGetAllDatas,
  weightDelete,
  weightUpdate,
} = require('../services/Plant_service');

module.exports = {
  // ::: QUERY TO GET USER INFO ::: DUMMY :::

  getUser: (req, res) => {
    const id = req.params.id;

    getUserInfo(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: 'Database connection error',
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  // ::: END OF QUERY TO GET USER INFO ::: DUMMY :::

  reviewGetByPlant: (req, res) => {
    const id = req.params.id;

    reviewGetPlantId(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: 'Database connection error',
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  cartGetByUser: (req, res) => {
    const id = req.params.id;

    cartGetByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: 'Database connection error',
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  article_input: (req, res) => {
    const body = req.body;
    console.log(`ARTICLE INPUT BODY: `, body);
    console.log(`FILE DOT IMAGE INPUT: `, req.file);

    articleInputTable(body, (err, result) => {
      console.log(`ARTICLE ERR:`, err);
      console.log(`ARTICLE RESULT:`, result);
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      if (result.length === 0) {
        return res.json({
          success: 0,
          message: 'form cannot be empty',
          data: result,
        });
      }
      return res.json({
        status: 1,
        message: 'Input Article Data Success',
        data: result,
      });
    });
  },

  articleGetById: (req, res) => {
    const id = req.params.id;

    articleGetId(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: 'Database connection error',
        });
      }
      if (results.length === 0) {
        return res.json({
          success: 0,
          message: 'Record not found',
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  article_get_all_datas: (req, res) => {
    articleGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  article_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    articleDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'article deleted successfully',
        data: result,
      });
    });
  },

  article_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`ARTICLE CONTROLLER BODY: `, body);
    console.log(`ARTICLE CONTROLLER ID: `, id);
    articleUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'article Updated successfully',
        data: result,
      });
    });
  },

  category_input: (req, res) => {
    const body = req.body;
    console.log(`BODY CATEGORY: `, body);
    categoryInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Category Data Success',
        data: result,
      });
    });
  },

  category_get_all_datas: (req, res) => {
    categoryGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  category_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    categoryDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'category deleted successfully',
        data: result,
      });
    });
  },

  category_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    categoryUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'category Updated successfully',
        data: result,
      });
    });
  },

  city_input: (req, res) => {
    const body = req.body;
    cityInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input City Data Success',
        data: result,
      });
    });
  },

  city_get_all_datas: (req, res) => {
    cityGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  city_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    cityDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'city deleted successfully',
        data: result,
      });
    });
  },

  city_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    // console.log(`REQ CITY: `, req);
    cityUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'city Updated successfully',
        data: result,
      });
    });
  },

  contact_input: (req, res) => {
    const body = req.body;
    contactInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Contact Data Success',
        data: result,
      });
    });
  },

  contact_get_all_datas: (req, res) => {
    contactGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  contact_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    contactDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'contact deleted successfully',
        data: result,
      });
    });
  },

  contact_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    contactUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'contact Updated successfully',
        data: result,
      });
    });
  },

  gender_input: (req, res) => {
    const body = req.body;
    console.log(`BE BODY: `, body);
    // console.log(`BE ID: `, id);
    genderInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Gender Data Success',
        data: result,
      });
    });
  },

  gender_get_all_datas: (req, res) => {
    genderGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  gender_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    genderDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'gender deleted successfully',
        data: result,
      });
    });
  },

  gender_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    genderUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'gender Updated successfully',
        data: result,
      });
    });
  },

  order_input: (req, res) => {
    const body = req.body;
    orderInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Order Data Success',
        data: result,
      });
    });
  },

  order_get_all_datas: (req, res) => {
    orderGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  order_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    orderDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'order deleted successfully',
        data: result,
      });
    });
  },

  order_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    orderUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'order Updated successfully',
        data: result,
      });
    });
  },

  order_item_input: (req, res) => {
    const body = req.body;
    orderItemInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Order Item Data Success',
        data: result,
      });
    });
  },

  order_item_get_all_datas: (req, res) => {
    orderItemGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  order_item_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    orderItemDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'order item deleted successfully',
        data: result,
      });
    });
  },

  order_item_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    orderItemUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'order item Updated successfully',
        data: result,
      });
    });
  },

  plant_input: (req, res) => {
    const body = req.body;
    const image = req.file;
    console.log(`BODY PLANT: `, body);
    plantInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Plant Data Success',
        data: result,
      });
    });
  },

  plant_get_all_datas: (req, res) => {
    plantGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  plantGetById: (req, res) => {
    const id = req.params.id;

    plantGetId(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: 'Database connection error',
        });
      }
      if (results.length === 0) {
        return res.json({
          success: 0,
          message: 'Record not found',
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  plant_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    plantDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'plant deleted successfully',
        data: result,
      });
    });
  },

  plant_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    plantUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'plant Updated successfully',
        data: result,
      });
    });
  },

  plant_breeding_input: (req, res) => {
    const body = req.body;
    plantBreedingInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: ' Input Plant Breeding Data Success',
        data: result,
      });
    });
  },

  plant_breeding_get_all_datas: (req, res) => {
    plantBreedingGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  plant_breeding_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    plantBreedingDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Plant Breeding deleted successfully',
        data: result,
      });
    });
  },

  plant_breeding_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    plantBreedingUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Plant Breeding Updated successfully',
        data: result,
      });
    });
  },

  price_list_input: (req, res) => {
    const body = req.body;
    priceListInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Price List Data Success',
        data: result,
      });
    });
  },

  price_list_get_all_datas: (req, res) => {
    priceListGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  price_list_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    priceListDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Price List deleted successfully',
        data: result,
      });
    });
  },

  price_list_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    priceListUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Price List Updated successfully',
        data: result,
      });
    });
  },

  review_input: (req, res) => {
    const body = req.body;
    reviewInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Review Data Success',
        data: result,
      });
    });
  },

  review_get_all_datas: (req, res) => {
    reviewGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  review_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    reviewDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Review deleted successfully',
        data: result,
      });
    });
  },

  review_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    reviewUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Review Updated successfully',
        data: result,
      });
    });
  },

  shipping_charges_input: (req, res) => {
    const body = req.body;
    shippingChargesInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Shipping Charges Data Success',
        data: result,
      });
    });
  },

  shipping_charges_get_all_datas: (req, res) => {
    shippingChargesGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  shipping_charges_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    shippingChargesDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Shipping Charges deleted successfully',
        data: result,
      });
    });
  },

  shipping_charges_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    shippingChargesUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Shipping Charges Updated successfully',
        data: result,
      });
    });
  },

  stock_input: (req, res) => {
    const body = req.body;
    stockInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Stock Data Success',
        data: result,
      });
    });
  },

  stock_get_all_datas: (req, res) => {
    stockGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  stock_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    stockDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Stock deleted successfully',
        data: result,
      });
    });
  },

  stock_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    stockUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Stock Updated successfully',
        data: result,
      });
    });
  },

  user_input: (req, res) => {
    const body = req.body;
    userInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input User Data Success',
        data: result,
      });
    });
  },

  user_get_all_datas: (req, res) => {
    userGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  user_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    userDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'User deleted successfully',
        data: result,
      });
    });
  },

  user_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    userUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'User Updated successfully',
        data: result,
      });
    });
  },

  weight_input: (req, res) => {
    const body = req.body;
    weightInputTable(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Database connection error!',
        });
      }
      return res.json({
        status: 1,
        message: 'Input Weight Data Success',
        data: result,
      });
    });
  },

  weight_get_all_datas: (req, res) => {
    weightGetAllDatas((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  weight_delete: (req, res) => {
    const id = req.params.id;
    console.log(`ID: `, id);
    weightDelete(id, (err, result) => {
      console.log(`DELETE RESULT: `, result);
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Weight deleted successfully',
        data: result,
      });
    });
  },

  weight_update: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(`BE BODY: `, body);
    console.log(`BE ID: `, id);
    weightUpdate(body, (err, result) => {
      if (err) {
        console.log(`ERROR!: `, err);
        return;
      }
      return res.json({
        success: 1,
        message: 'Weight Updated successfully',
        data: result,
      });
    });
  },
};
