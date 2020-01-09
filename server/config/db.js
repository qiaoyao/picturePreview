import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mcms",
  charset: "utf8"
});

export default (query, params) => {
  return new Promise(resolve => {
    connection.query(query, params, (err, res, fields) => {
      resolve({
        err,
        res,
        fields
      });
    });
  });
};
