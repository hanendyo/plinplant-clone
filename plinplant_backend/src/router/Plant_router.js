const {
  plant_input,
  review_input,
  plant_breeding_input,
  price_list_input,
  stock_input,
  order_item_input,
  order_input,
  user_input,
  gender_input,
  city_input,
  shipping_charges_input,
  weight_input,
  article_input,
  article_get_all_datas,
  article_delete,
  article_update,
  category_input,
  category_get_all_datas,
  category_delete,
  category_update,
  city_get_all_datas,
  city_delete,
  city_update,
  contact_input,
  contact_get_all_datas,
  contact_delete,
  contact_update,
  gender_get_all_datas,
  gender_delete,
  gender_update,
  order_get_all_datas,
  order_delete,
  order_update,
  order_item_get_all_datas,
  order_item_delete,
  order_item_update,
  plant_get_all_datas,
  plant_delete,
  plant_update,
  plant_breeding_get_all_datas,
  plant_breeding_delete,
  plant_breeding_update,
  price_list_get_all_datas,
  price_list_delete,
  price_list_update,
  review_get_all_datas,
  review_delete,
  review_update,
  shipping_charges_get_all_datas,
  shipping_charges_delete,
  shipping_charges_update,
  stock_get_all_datas,
  stock_delete,
  stock_update,
  user_get_all_datas,
  user_delete,
  user_update,
  weight_get_all_datas,
  weight_delete,
  weight_update,
  
} = require("../controller/Plant_controller");
const router = require("express").Router();
const upload = require("../..");


// POST
router.post("/article_input", upload.single('article_image_upload'), article_input);
router.post("/plant_input",upload.single('plant_image_upload'), plant_input);
router.post("/category_input",upload.none(), category_input);
router.post("/review_input", review_input);
router.post("/plant_breeding_input",
upload.fields(
  [{
  name: 'seed_image_upload', maxCount: 1
  },
  {
    name: 'tuber_image_upload', maxCount: 1
  },
  {
    name: 'young_image_upload', maxCount: 1
  },
  {
    name: 'mature_image_upload', maxCount: 1
  },]
),plant_breeding_input);
router.post("/price_list_input", price_list_input);
router.post("/stock_input", stock_input);
router.post("/order_item_input", upload.none(),order_item_input);
router.post("/order_input",upload.none(), order_input);
router.post("/user_input", upload.single('picture_upload'),user_input);
router.post("/contact_input", contact_input);
router.post("/gender_input", upload.none(),gender_input);
router.post("/city_input",upload.none(), city_input);
router.post("/shipping_charges_input", shipping_charges_input);
router.post("/weight_input", weight_input);

// GET
router.get("/article_get_all_datas", article_get_all_datas);
router.get("/category_get_all_datas", category_get_all_datas);
router.get("/city_get_all_datas", city_get_all_datas);
router.get("/contact_get_all_datas", contact_get_all_datas);
router.get("/gender_get_all_datas", gender_get_all_datas);
router.get("/order_get_all_datas", order_get_all_datas);
router.get("/order_item_get_all_datas", order_item_get_all_datas);
router.get("/plant_get_all_datas", plant_get_all_datas);
router.get("/plant_breeding_get_all_datas", plant_breeding_get_all_datas);
router.get("/price_list_get_all_datas", price_list_get_all_datas);
router.get("/review_get_all_datas", review_get_all_datas);
router.get("/shipping_charges_get_all_datas", shipping_charges_get_all_datas);
router.get("/stock_get_all_datas", stock_get_all_datas);
router.get("/user_get_all_datas", user_get_all_datas);
router.get("/weight_get_all_datas", weight_get_all_datas);



// DELETE
router.delete("/article_delete/:id", article_delete);
router.delete("/category_delete/:id", category_delete);
router.delete("/city_delete/:id", city_delete);
router.delete("/contact_delete/:id", contact_delete);
router.delete("/gender_delete/:id", gender_delete);
router.delete("/order_delete/:id", order_delete);
router.delete("/order_item_delete/:id",order_item_delete);
router.delete("/plant_delete/:id", plant_delete);
router.delete("/plant_breeding_delete/:id", plant_breeding_delete);
router.delete("/price_list_delete/:id", price_list_delete);
router.delete("/review_delete/:id", review_delete);
router.delete("/shipping_charges_delete/:id", shipping_charges_delete);
router.delete("/stock_delete/:id", stock_delete);
router.delete("/user_delete/:id", user_delete);
router.delete("/weight_delete/:id", weight_delete);

// UPDATE
router.put("/article_update", upload.single('article_image_upload'),article_update);
router.put("/category_update", category_update);
router.put("/city_update", city_update);
router.put("/contact_update", contact_update);
router.put("/gender_update", gender_update);
router.put("/order_update", order_update);
router.put("/order_item_update", order_item_update);
router.put("/plant_update",upload.single('plant_image_upload'), plant_update);
router.put("/plant_breeding_update", upload.fields(
  [{
  name: 'seed_image_upload', maxCount: 1
  },
  {
    name: 'tuber_image_upload', maxCount: 1
  },
  {
    name: 'young_image_upload', maxCount: 1
  },
  {
    name: 'mature_image_upload', maxCount: 1
  },]
), plant_breeding_update);
router.put("/price_list_update", price_list_update);
router.put("/review_update", review_update);
router.put("/shipping_charges_update", shipping_charges_update);
router.put("/stock_update", stock_update);
router.put("/user_update", user_update);
router.put("/weight_update", weight_update);

module.exports = router;
