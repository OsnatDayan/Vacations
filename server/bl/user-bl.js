const runQuery = require('../DAL.js');

const IsUser = ({ username, password }, cb) => {
    runQuery(
        `SELECT * FROM users WHERE user_name=? AND password=?;`, [username, password], cb);
    
}
const newUser = ({ first_name, last_name, user_name, password },cb) => {
    runQuery('INSERT INTO `users`( `first_name`, `last_name`, `user_name`, `password`) VALUES(?,?,?,?)',
        [first_name, last_name, user_name, password], cb);
}






module.exports = {
    IsUser,
    newUser
}
