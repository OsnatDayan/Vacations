const express = require('express');
const jwt = require('jsonwebtoken');
const authCtrl = express.Router();
const bl = require('../bl/user-bl');
const getNewToken = (data) => {
    let token = jwt.sign({data}, process.env.jwtsecret);
    return token;
}

authCtrl.post('/login', async function (req, res) {
    bl.IsUser(req.body, (result) => {
        if (result.length !== 0) {
            let x = result[0];
            let obj = {
                token: getNewToken(x),
                uid: x.id,
                admin: x.is_admin

            };
            return res.send(obj);
        } else
            return res.status(401).send("invalid username or password");
    })
})


authCtrl.post('/register', async function (req, res) {
    bl.newUser(req.body, (result) => {
        if (!result) {
            return res.status(400).send("username already exists");
        } else
            res.send(result);
    })
})





module.exports = authCtrl;








