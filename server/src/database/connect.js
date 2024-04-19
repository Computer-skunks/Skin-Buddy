const mysql = require("mysql");

const db = mysql.createConnection({
    host : "graproject.cze848wk2ns9.ap-northeast-2.rds.amazonaws.com",
    user : "jash",
    password: "qkrwjdwo2$",
    database: "GRAProject"
    });

db.connect();

module.exports = db;