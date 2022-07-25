// este archivo serviría para pasar la lógica acá, eso evita que en el otro no se sature demasiado 

const Users = require('./User')

const User = { /* Este módulo se llevará al main (api.js) para una mayor legibilidad y dinamismo */
    params: async (req, res) => {
        const { id } = req.params;
        const user = await Users.findOne({ _id: id })
        res.status(200).send(user);
    }, 
    list: async (req, res) => {
        const users = await Users.find();
        res.status(200).send(users);
    },
    create: async (req, res) => {
        console.log(req.body) /* Esto se va a ver muy seguido en las API rest */
        const user = new Users(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser._id);
    },
    update: async (req, res) => {
        res.status(204).send("actualizando chanchito");
    },
    destroy: async (req, res) => {
        res.status(204).send("eliminando chanchito");
    },
}

module.exports = User; /* esto sirve para poder exportar el módulo User a quien lo invoque UwU */