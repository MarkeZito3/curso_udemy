const mongoose = require('mongoose');

const Users = mongoose.model('User', {
    name: { type: String, required: true, minLength: 3}, /* se agrega así para que el modelo tenga más funcionalidades*/
    lastname: { type: String, required: true, minLength: 3},
})

module.exports = Users;