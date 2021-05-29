const pool = require("../database/Database");

module.exports = {
  register: (data, callback) => {
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
  login: (data, callback) => {
    pool.query(
      `select * from table_user where fullname=? and password=?`,
      [data.fullname, data.password],
      (err, result) => {
        if (err) {
          console.log(`SERVICE ERROR:`, err.Error);
          return callback(null, err);
        }
        console.log(`SERVICE SUCCESS: `, result);
        return callback(null, result);
      }
    )
  }
};
