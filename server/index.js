const express = require('express');
const jwt = require('jsonwebtoken');
const authCtrl = require('./controllers/auth.ctrl.js');
const vacationCtrl = require('./controllers/vacation.ctrl.js');
const app = express();
const PORT = 6699;

process.env.jwtsecret = '4d69f8151ad25a43eb459158f03be0e3';
app.use(express.json());

app.use('/', express.static('images'));
app.use('/api/auth', authCtrl);

app.use(function (req, res, next) {
    debugger;
    const token = req.headers.authorization;
    if (!token) return res.status(400).send();
    const [tokenType, jwtToken] = token.split(' ');
    try {
        jwt.verify(jwtToken, process.env.jwtsecret);
    } catch (ex) {
        console.log(ex);
        return res.status(400).send();
    }
    const user = jwt.decode(jwtToken);
    req.body.user = user;
    next();
})

app.use('/api/vacation', vacationCtrl);




app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => console.log(`Server up at port ${PORT}`));