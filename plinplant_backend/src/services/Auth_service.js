const pool = require("../database/Database");

module.exports = {
  register: (data, callback) => {
    console.log(`CALLBACK NYA: `, callback);
    console.log(`DATA NYA: `, data);
    const sql = `insert into table_register (fullname, email, password, password_verify)values(?,?,?,?)`;
    const database = [
      data.fullname,
      data.email,
      data.password,
      data.password_verify,
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
};
