const key_mongo = require("./key.js"); // este archivo no está dispoible por seguridad
const mongoose = require('mongoose');

mongoose.connect(key_mongo.key_mongo());

const User = mongoose.model('User',{
    username: String,
    edad: Number,
});

const crear = async () => { /* async significa que este es asíncrono*/
    const user = new User({ username: "michi", edad: 1 });
    const savedUser = await user.save(); //Esto retorna una promesa UwU, por lo cual se puede ocupar los mismos métodos que una promesa, ej: .then()
    console.log(savedUser)
}

// crear()

const buscarTodos = async () => {
    const users = await User.find();
    console.log(users);
};

// buscarTodos()

const buscar = async () => {
    const user = await User.find({ username: 'pepe' });
    console.log(user);
};

// buscar()

const buscarUno = async () => {
    const user = await User.findOne({ username : "michi" });
    console.log(user);
};

// buscarUno()

const actualizar = async () => {
    const user = await User.findOne({ username : "michi" }); // para poder actualizar un user hay que buscarlo UwU
    console.log(user);
    user.edad = 10; // cambio el valor que antes era 1 a 10
    await user.save();
};

// actualizar()

// hay que validar que el usuario exista antes de eliminar el coso
const eliminar = async () => {
    const user = await User.findOne({ username : "michi" });
    console.log(user);
    if (user){
        await user.remove(); // solo lo vamos a poder llamar siempre y cuando el recurso exista (en este caso, "michi")
    };
};

eliminar()