const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
const key_mongo = require('../apis/key.js');
const User = require('./user');

mongoose.connect(key_mongo.key_mongo());

const app = express();

app.use(express.json());

// Register: se get un objeto json (email) se busca el email en la base de datos, if exist "está registrados" else registrar

const signToken = _id => jwt.sign({ _id }, key_mongo.secret_key()); // key_mongo.secret_key() es un string secreto por seguridad

app.post('/register', async (req, res) => {
    const { body } = req;
    console.log ( {body} );
    try {
        const isUser = await User.findOne({ email: body.email }); // busca dentro de la base de datos si existe el usuario
        if (isUser) {
            return res.status(403).send('user is already exist');
        }
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(body.password, salt)
        const user = await User.create({ email: body.email, password: hashed, salt});
        const signed = signToken(user._id)
        res.status(201).send(signed);
    } catch (err) {
        console.log (err);
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => { console.log('listening on port 3000') });