const pool = require("../database/Database");

module.exports = {
  postRegister: (data, callback) => {
    console.log(`CALLBACK NYA: `, callback);
    console.log(`DATA NYA: `, data);
    const sql = `insert into table_user (fullname, email, password)values(?,?,?)`;
    const database = [
      data.fullname,
      data.email,
      data.password,
    ];
    pool.query(sql, database, (err, result, fields) => {
      if (err) {
        console.log(`SERVICE ERROR:`, err.Error);
        return callback(null, err);
      }

      console.log(`DATA EMAIL: `, data.email);
      console.log(`RESULT NYA: `, result);
      console.log(`ERROR NYA: `, err);
      console.log(`FIELDS NYA: `, fields);

      return callback(null, result);
    });
  },
  postLogin: (data, callback) => {
    pool.query(
      `select * from table_user where email=?`,
      [data.email ],
      (err, result) => {
        if (err) {
          console.log(`SERVICE ERROR:`, err.Error);
          return callback(null, err);
        }
        console.log(`SERVICE SUCCESS`);
        return callback(null, result);
      }
    )
  },
  // getLogin: (data, callback)=>{
  //   console.log(`DATA GET LOGIN: `, data);
  // }

};
