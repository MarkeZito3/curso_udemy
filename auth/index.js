const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { expressjwt: jwt } = require("express-jwt");
// const expressJwt = require('express-jwt');
const key_mongo = require('../apis/key.js');
const User = require('./user');

mongoose.connect(key_mongo.key_mongo());
const app = express();
app.use(express.json());
const validateJwt = jwt({ secret: key_mongo.secret_key(), algorithms: ['HS256'] });
const signToken = _id => jsonwebtoken.sign({ _id }, key_mongo.secret_key()); // key_mongo.secret_key() es un string secreto por seguridad

// Register: se get un objeto json (email) se busca el email en la base de datos, if exist "está registrados" else registrar

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

// Login
app.post('/login', async (req, res) => {
    const { body } = req;
    try {
        const user = await User.findOne({ email: body.email });
        if (!user) {
            res.status(403).send('Invalid username or password');
        } else {
            const isMatch = await bcrypt.compare(body.password, user.password);
            if (isMatch) {
                const signed = signToken(user._id);
                res.status(200).send(signed);
            } else {
                res.status(403).send('Invalid username or password');
            }
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// algo para explicar middleware
// validateJwt: valida los tokens y luego next()

const findAndAssignUser = async (req, res, next) => { /* next ejecuta la siguiente función (de izquierda a derecha)*/
    // console.log('lala', req.auth); // lo que nos retorna aca el req.auth es el _id y iat, que el iat significa "issued At" que nos sirve por si queremos caducar los JWT's
    // res.send('ok :D');
    try {
        console.log('auth._id',req.auth._id);
        const user = await User.findById(req.auth._id) // validamos si el usuario exista
        if (!user) {
            return res.status(401).end();
        }
        console.log("todo joya padre :D")
        req.user = user; // se lo asigna a la propiedad de user en el objeto de request
        next();
    } catch (err) {
        console.log("----------------------------------------------------------------")
        next(err); // si el next posee un error en el parámetro no sigue al siguiente middleware, sino a uno especial para los errores
    }
}
// para hacer todo más dinámico se puede colocar los dos middleware (validateJwt and findAndAssignUser) juntos gracias a express
const isAuthenticated = express.Router().use(validateJwt, findAndAssignUser)
// app.get('/lele', validateJwt, findAndAssignUser, (req, res) => {
app.get('/lele', isAuthenticated, (req, res) => {
    // throw new Error("New Error test OwO");
    res.send(req.user); // devuelve el usuario completo 
});

// la manera de manejar los errores es que hagamos el uso de lo siguiente
app.use((err, req, res, next) => {
    console.error("Stack de errores: ", err.stack);
    next(err); //paso el error al otro middleware por si lo requiere.
});
app.use((err, req, res, next) => {
    res.send('Ha ocurrido un error :('); // en esta linea podríamos colocar un HTML para darle más dinamismo al user cuando le aparezca un error :3
});

app.listen(3000, () => { console.log('listening on port 3000') });