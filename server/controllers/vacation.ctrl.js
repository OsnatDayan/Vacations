const express = require('express');
const bl = require('../bl/vacation-bl')
const vacationCtrl = express.Router();

vacationCtrl.post('/add', function (req, res) {
    let role = req.body.user.data.is_admin;
    bl.add(req.body, role, (result) => {
        if (result == 401) {
            console.log(1);
            return res.send(401)
        } console.log(2); return res.send(result)
    })

})
vacationCtrl.get('/', function (req, res) {
    res.send({
        uid: req.body.user.data.id,
        role: req.body.user.data.is_admin
    });
})
vacationCtrl.get('/report', function (req, res) {
    let role = req.body.user.data.is_admin;
    bl.report(role, (result) => {
        if (result == 401) {
            return res.status(401).send('only admin can get report')
        } return res.send(result)
    })
})
vacationCtrl.post('/FOLLOW', function (req, res) {
    debugger;
    let a = {
        role: req.body.user.data.is_admin,
        vid: req.body.vid,
        uid: req.body.user.data.id,
    }
    bl.follow(a, (result) => {
        if (result == 401)
            return res.status(401).send('only user can follow');
        return res.send(result);
    })
})
vacationCtrl.post('/UNFOLLOW', function (req, res) {
    debugger;
    let a = {
        role: req.body.user.data.is_admin,
        vid: req.body.vid,
        uid: req.body.user.data.id,
    }
    bl.unfollow(a, (result) => {
        if (result == 401)
            return res.status(401).send('only user can unfollow');
        return res.send(result);
    })

})
vacationCtrl.put('/update/:id', function (req, res) {
    let role = req.body.user.data.is_admin;
    bl.update(role, req.body, req.params.id, (result) => {
        if (result == 401)
            return res.status(401).send('only admin can update');
        return res.send(result);
    })

})
vacationCtrl.delete('/delete/:id', function (req, res) {
    debugger;
    let role = req.body.user.data.is_admin;
    bl.remove(role, req.params.id, (result) => {
        if (result == 401)
            return res.status(401).send('only admin can delete');
        return res.send(result);
    })

})
vacationCtrl.get('/followedVacations/:uid', function (req, res) {
    debugger;
    bl.getByUser(req.params.uid, (result) => {
        if (result.length == 0) {
            throw err
        } else
            return res.send(result)
    })

})
module.exports = vacationCtrl;


