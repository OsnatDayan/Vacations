const express = require('express');
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'vacations'
});
con.connect(function (err) {
    if (err) throw err;
    console.log("SQL Connected!");
});
const runQuery = async (sql, variables, cb) => {
    return con.query(sql, variables, function (err, result) {
        if (err) {
            return cb ? cb(null) : null
        } else
            return cb ? cb(result) : null;
    })
}
module.exports = runQuery;


