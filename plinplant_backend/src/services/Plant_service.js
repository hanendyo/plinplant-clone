const pool = require("../database/Database");

module.exports = {
  // ::: QUERY TO GET USER INFO ::: DUMMY :::

  getUserInfo: (id, callback) => {
    pool.query(
      `Select * from user_info where pk_user_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) return callback(error);

        return callback(null, results); // result[0]
      }
    );
  },

  // ::: END OF QUERY TO GET USER INFO ::: DUMMY :::

  // ::: QUERY TO UPDATE USER INFO ::: DUMMY :::

  updateUsernameID: (body, id, callback) => {
    pool.query(
      `UPDATE table_user SET fullname=? where pk_user_id = ?`,
      [body.fullname, id],
      (error, results, fields) => {
        if (error) return callback(error);

        return callback(null, results); // result[0]
      }
    );
  },
  // :: INVOICE ::
  invoiceGetId: (id, callBack) => {
    pool.query(
      `select * from user_invoice where fk_user_id = ? and pk_invoice_id = ?`,
      [id.id, id.order],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results); // result[0]
      }
    );
  },

  updateBirthdateID: (body, id, callback) => {
    pool.query(
      `UPDATE table_user SET birth_date=? where pk_user_id = ?`,
      [body.birth_date, id],
      (error, results, fields) => {
        if (error) return callback(error);

        return callback(null, results); // result[0]
      }
    );
  },
  updateGenderID: (body, id, callback) => {
    pool.query(
      `UPDATE table_user SET fk_gender_id=? where pk_user_id = ?`,
      [body.fk_gender_id, id],
      (error, results, fields) => {
        if (error) return callback(error);

        return callback(null, results); // result[0]
      }
    );
  },
  updatePhoneNumberID: (body, id, callback) => {
    pool.query(
      `UPDATE table_user SET phone_number=? where pk_user_id = ?`,
      [body.phone_number, id],
      (error, results, fields) => {
        if (error) return callback(error);

        return callback(null, results); // result[0]
      }
    );
  },
  // ::: END OF QUERY TO GET USER INFO ::: DUMMY :::
  invoiceGetAllDatas: (callback) => {
    pool.query(`Select * from user_invoice`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  invoiceCreate: (data, callBack) => {
    pool.query(
      `INSERT INTO table_invoice(pk_invoice_id, no_order, created_at, status, review_status, fk_user_id, fk_contact_id, fk_bank_id) values( ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.pk_invoice_id,
        data.no_order,
        data.created_at,
        data.status,
        data.review_status,
        data.fk_user_id,
        data.fk_contact_id,
        data.fk_bank_id,
      ],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results);
      }
    );
  },

  invoiceDone: (data, callBack) => {
    console.log("PESANAN SELESAI", data);
    pool.query(
      `update table_invoice set status=? where pk_invoice_id=?`,
      [data.status, data.pk_invoice_id],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results);
      }
    );
  },
  // :: END OF INVOICE ::

  reviewGetPlantId: (id, callback) => {
    pool.query(
      `Select * from plant_review where fk_plant_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) return callback(error);

        return callback(null, results); // result[0]
      }
    );
  },

  // :: CART SERVICE :::
  cartGetByUserId: (id, callback) => {
    pool.query(
      `Select * from user_cart where fk_user_id = ? and fk_invoice_id = 0 order by pk_cart_id `,
      [id],
      (error, results, fields) => {
        if (error) return callback(error);

        return callback(null, results); // result[0]
      }
    );
  },

  cartAdd: (data, callBack) => {
    console.log("CART ADD", data);
    pool.query(
      `INSERT INTO table_cart(phase_image, plant_name, plant_phase, price, quantity, weight, fk_plant_id, fk_user_id) values(?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.phase_image,
        data.plant_name,
        data.plant_phase,
        data.price,
        data.quantity,
        data.weight,
        data.fk_plant_id,
        data.fk_user_id,
      ],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results);
      }
    );
  },

  cartDelete: (id, callBack) => {
    pool.query(
      `delete from table_cart where pk_cart_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results); // result[0] juga bisa
      }
    );
  },

  cartUpdate: (data, callBack) => {
    pool.query(
      `update table_cart set quantity = ? where pk_cart_id = ?`,
      [data.quantity, data.pk_cart_id],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results); // result[0] juga bisa
      }
    );
  },

  cartCheckout: (data, callBack) => {
    pool.query(
      `UPDATE table_cart SET fk_invoice_id = ? WHERE fk_user_id = ? AND fk_invoice_id = 0`,
      [data.fk_invoice_id, data.fk_user_id],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results); // result[0] juga bisa
      }
    );
  },
  // :: END OF CART SERVICE :::

  addressGetByUserId: (id, callback) => {
    pool.query(
      `Select * from user_address where fk_user_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) return callback(error);

        return callback(null, results); // result[0]
      }
    );
  },

  // :: BANK ::
  bankGetAll: (callBack) => {
    pool.query(`select * from table_bank`, [], (error, results, fields) => {
      if (error) return callBack(error);

      return callBack(null, results);
    });
  },

  // :: END OF BANK ::

  articleInputTable: (body, callback) => {
    console.log(`bdy: `, body);

    const sql = `insert into table_article (article_image, title, author, created_at, duration, source, url, content) values(?, ?, ?, ?, ?, ?, ?, ?)`;
    const column = [
      body.article_image,
      body.title,
      body.author,
      body.created_at,
      body.duration,
      body.source,
      body.url,
      body.content,
    ];

    console.log(`BODY ARTICLE IMAGE: `, body.article_image);
    console.log(`BODY AUTHOR: `, body.author);

    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  articleGetAllDatas: (callback) => {
    pool.query(`Select * from table_article`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  articleGetId: (id, callback) => {
    pool.query(
      `Select * from table_article where pk_article_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) return callback(error);

        return callback(null, results); // result[0]
      }
    );
  },

  articleDelete: (id, callback) => {
    pool.query(
      `delete from table_article where pk_article_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  articleUpdate: (data, callback) => {
    console.log(`DATA ARTICLE UPDATE: `, data);
    pool.query(
      `update table_article set article_image=?, title=?, author=?, created_at=?, duration=?, source=?, url=?, content=? where pk_article_id=?`,
      [
        data.article_image,
        data.title,
        data.author,
        data.created_at,
        data.duration,
        data.source,
        data.url,
        data.content,
        data.pk_article_id,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR ARTICLE UPDATE: `, error);
          return callback(error);
        }
        console.log(`SUCCESS ARTICLE RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  categoryInputTable: (data, callback) => {
    const sql = `insert into table_category (pk_category_id,category_name)values(?,?)`;
    const column = [data.pk_category_id, data.category_name];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  categoryGetAllDatas: (callback) => {
    pool.query(`Select * from table_category`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  categoryDelete: (id, callback) => {
    pool.query(
      `delete from table_category where pk_category_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  categoryUpdate: (data, callback) => {
    pool.query(
      `update table_category set category_name=? where pk_category_id=?`,
      [data.category_name, data.pk_category_id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  cityInputTable: (data, callback) => {
    const sql = `insert into table_city (city_name) values(?)`;
    const column = [data.city_name];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  cityGetAllDatas: (callback) => {
    pool.query(`Select * from table_city`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  cityDelete: (id, callback) => {
    pool.query(
      `delete from table_city where pk_city_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  cityUpdate: (data, callback) => {
    pool.query(
      `update table_city set city_name=? where pk_city_id=?`,
      [data.city_name, data.pk_city_id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  contactInputTable: (data, callback) => {
    const sql = `insert into table_contact (recipient_name, address, phone_number, fk_city_id) values(?, ?, ?, ?)`;
    const column = [
      data.recipient_name,
      data.address,
      data.phone_number,
      data.fk_city_id,
    ];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  contactGetAllDatas: (callback) => {
    pool.query(`Select * from table_contact`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  contactDelete: (id, callback) => {
    pool.query(
      `delete from table_contact where pk_contact_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  contactUpdate: (data, callback) => {
    pool.query(
      `update table_contact set recipient_name=?, address=?, phone_number=?, fk_city_id=? where pk_contact_id=?`,
      [
        data.recipient_name,
        data.address,
        data.phone_number,
        data.fk_city_id,
        data.pk_contact_id,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  genderInputTable: (data, callback) => {
    const sql = `insert into table_gender (type) values(?)`;
    const column = [data.type];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        console.log(`ERROR: `, error);
        return callback(err);
      }
      return callback(null, result);
    });
  },

  genderGetAllDatas: (callback) => {
    pool.query(`Select * from table_gender`, [], (error, results, fields) => {
      if (error) {
        console.log(`ERROR: `, error);
        return callback(error);
      }
      return callback(null, results);
    });
  },

  genderDelete: (id, callback) => {
    pool.query(
      `delete from table_gender where pk_gender_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  genderUpdate: (data, callback) => {
    console.log(`gender data upadteL: `, data);
    pool.query(
      `update table_gender set type=? where pk_gender_id=?`,
      [data.type, data.pk_gender_id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  orderInputTable: (data, callback) => {
    const sql = `insert into table_order (status, created_at, fk_user_id) values(?, ?, ?)`;
    const column = [data.status, data.created_at, data.fk_user_id];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  orderGetAllDatas: (callback) => {
    pool.query(
      `Select * from table_invoice order by pk_invoice_id desc`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  orderDelete: (id, callback) => {
    pool.query(
      `delete from table_order where pk_order_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  orderUpdate: (data, callback) => {
    pool.query(
      `update table_invoice set status=? where pk_invoice_id=?`,
      [data.status, data.pk_invoice_id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  orderItemInputTable: (data, callback) => {
    const sql = `insert into table_order_item (quantity, fk_price_list_id) values(?,?)`;
    const column = [data.quantity, data.fk_price_list_id];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  orderItemGetAllDatas: (callback) => {
    pool.query(
      `Select * from table_order_item`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  orderItemDelete: (id, callback) => {
    pool.query(
      `delete from table_order_item where pk_order_item_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  orderItemUpdate: (data, callback) => {
    pool.query(
      `update table_order_item set quantity=?, fk_price_list_id=? where pk_order_item_id=?`,
      [data.quantity, data.fk_price_list_id, data.pk_order_item_id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  plantInputTable: (data, callback) => {
    console.log(`SERVICE DATA: `, data);
    const sql = `insert into table_plant (plant_name, plant_image, plant_origin, plant_qualities, plant_use, days_to_sprout, matures_in, growth_type, fk_category_id, fk_review_id)values(?,?,?,?,?,?,?,?,?,?)`;
    const column = [
      data.plant_name,
      data.plant_image,
      data.plant_origin,
      data.plant_qualities,
      data.plant_use,
      data.days_to_sprout,
      data.matures_in,
      data.growth_type,
      data.fk_category_id,
      data.fk_review_id,
    ];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  plantGetAllDatas: (callback) => {
    pool.query(`Select * from plant_data`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  plantGetId: (id, callBack) => {
    pool.query(
      `select * from plant_data where pk_plant_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) return callBack(error);

        return callBack(null, results); // result[0]
      }
    );
  },

  plantDelete: (id, callback) => {
    pool.query(
      `delete from table_plant where pk_plant_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  plantUpdate: (data, callback) => {
    pool.query(
      `update table_plant set plant_name=?, plant_image=?, plant_origin=?, plant_qualities=?, plant_use=?, days_to_sprout=?, matures_in=?, growth_type=?, fk_category_id=?, fk_review_id=? where pk_plant_id=?`,
      [
        data.plant_name,
        data.plant_image,
        data.plant_origin,
        data.plant_qualities,
        data.plant_use,
        data.days_to_sprout,
        data.matures_in,
        data.growth_type,
        data.fk_category_id,
        data.fk_review_id,
        data.pk_plant_id,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  plantBreedingInputTable: (data, callback) => {
    const sql = `insert into table_plant_breeding (seed, tuber, young, mature, seed_image, tuber_image, young_image, mature_image, fk_plant_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const column = [
      data.seed,
      data.tuber,
      data.young,
      data.mature,
      data.seed_image,
      data.tuber_image,
      data.young_image,
      data.mature_image,
      data.fk_plant_id,
    ];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        console.log(err);
        return callback(err);
      }
      return callback(null, result);
    });
  },

  plantBreedingGetAllDatas: (callback) => {
    pool.query(
      `Select * from table_plant_breeding`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  plantBreedingDelete: (id, callback) => {
    pool.query(
      `delete from table_plant_breeding where pk_plant_breeding_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  plantBreedingUpdate: (data, callback) => {
    pool.query(
      `update table_plant_breeding set seed=?, tuber=?, young=?, mature=?, seed_image=?, tuber_image=?, young_image=?, mature_image=?, fk_plant_id=? where pk_plant_breeding_id=?`,
      [
        data.seed,
        data.tuber,
        data.young,
        data.mature,
        data.seed_image,
        data.tuber_image,
        data.young_image,
        data.mature_image,
        data.fk_plant_id,
        data.pk_plant_breeding_id,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  priceListInputTable: (data, callback) => {
    console.log(`DATA PRICELIST SERVICE: `, data);
    pool.query(
      `insert into table_price_list (seed_price, tuber_price, young_price, mature_price, fk_plant_breeding_id, fk_stock_id) values(?, ?, ?, ?, ?, ?)`,
      [
        data.seed_price,
        data.tuber_price,
        data.young_price,
        data.mature_price,
        data.fk_plant_breeding_id,
        data.fk_stock_id,
      ],
      (err, result, fields) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },

  priceListGetAllDatas: (callback) => {
    pool.query(
      `Select * from table_price_list`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  priceListDelete: (id, callback) => {
    pool.query(
      `delete from table_price_list where pk_price_list_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  priceListUpdate: (data, callback) => {
    pool.query(
      `update table_price_list set seed_price=?, tuber_price=?, young_price=?, mature_price=?, fk_plant_breeding_id=?, fk_stock_id=? where pk_price_list_id=?`,
      [
        data.seed_price,
        data.tuber_price,
        data.young_price,
        data.mature_price,
        data.fk_plant_breeding_id,
        data.fk_stock_id,
        data.pk_price_list_id,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  reviewInputTable: (data, callback) => {
    console.log(`DATA REVIEW SERVICE`, data);
    const sql = `insert into table_review (comment, rating, fk_user_id , fk_plant_id) values(?,?,?,?)`;
    const column = [
      data.comment,
      data.rating,
      data.fk_user_id,
      data.fk_plant_id,
    ];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  reviewGetAllDatas: (callback) => {
    pool.query(`Select * from table_review`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  reviewDelete: (id, callback) => {
    pool.query(
      `delete from table_review where pk_review_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  reviewUpdate: (data, callback) => {
    pool.query(
      `update table_review set comment=?, rating=?, fk_user_id=?, fk_plant_id=? where pk_review_id=?`,
      [
        data.comment,
        data.rating,
        data.fk_user_id,
        data.fk_plant_id,
        data.pk_review_id,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  shippingChargesInputTable: (data, callback) => {
    const sql = `insert into table_shipping_charges (shipping_price, fk_city_id) values(?, ?)`;
    const column = [data.shipping_price, data.fk_city_id];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  shippingChargesGetAllDatas: (callback) => {
    pool.query(
      `Select * from table_shipping_charges`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  shippingChargesDelete: (id, callback) => {
    pool.query(
      `delete from table_shipping_charges where pk_shipping_charges_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  shippingChargesUpdate: (data, callback) => {
    pool.query(
      `update table_shipping_charges set shipping_price=?, fk_city_id=? where pk_shipping_charges_id=?`,
      [data.shipping_price, data.fk_city_id, data.pk_shipping_charges_id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  stockInputTable: (data, callback) => {
    const sql = `insert into table_stock (seed_stock, tuber_stock, young_stock, mature_stock) values(?, ?, ?, ?)`;
    const column = [
      data.seed_stock,
      data.tuber_stock,
      data.young_stock,
      data.mature_stock,
    ];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  stockGetAllDatas: (callback) => {
    pool.query(`Select * from table_stock`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  stockDelete: (id, callback) => {
    pool.query(
      `delete from table_stock where pk_stock_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  stockUpdate: (data, callback) => {
    pool.query(
      `update table_stock set seed_stock=?, tuber_stock=?, young_stock=?, mature_stock=? where pk_stock_id=?`,
      [
        data.seed_stock,
        data.tuber_stock,
        data.young_stock,
        data.mature_stock,
        data.pk_stock_id,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  userInputTable: (data, callback) => {
    const sql = `insert into table_user (fullname, email, password, birth_date, picture, fk_contact_id, fk_gender_id) values(?, ?, ?, ?, ?, ?, ?)`;
    const column = [
      data.fullname,
      data.email,
      data.password,
      data.birth_date,
      data.picture,
      data.fk_contact_id,
      data.fk_gender_id,
    ];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  userGetAllDatas: (callback) => {
    pool.query(`Select * from table_user`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  userDelete: (id, callback) => {
    pool.query(
      `delete from table_user where pk_user_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  userUpdate: (data, callback) => {
    pool.query(
      `update table_user set fullname=?, email=?, password=?, birth_date=?, picture=?, fk_contact_id=?, fk_gender_id=? where pk_user_id=?`,
      [
        data.fullname,
        data.email,
        data.password,
        data.birth_date,
        data.picture,
        data.fk_contact_id,
        data.fk_gender_id,
        data.pk_user_id,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  weightInputTable: (data, callback) => {
    const sql = `insert into table_weight (weight) values(?)`;
    const column = [data.weight];
    pool.query(sql, column, (err, result, fields) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  },

  weightGetAllDatas: (callback) => {
    pool.query(`Select * from table_weight`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  weightDelete: (id, callback) => {
    pool.query(
      `delete from table_weight where pk_weight_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },

  weightUpdate: (data, callback) => {
    pool.query(
      `update table_weight set weight=? where pk_weight_id=?`,
      [data.weight, data.pk_weight_id],
      (error, result, fields) => {
        if (error) {
          console.log(`ERROR: `, error);
          return callback(error);
        }
        console.log(`RESULT: `, result);
        return callback(null, result);
      }
    );
  },
};
