// este archivo serviría para pasar la lógica acá, eso evita que en el otro no se sature demasiado 

const Users = require('./User')

const User = { /* Este módulo se llevará al main (api.js) para una mayor legibilidad y dinamismo */
    params: async (req, res) => {
        try{
            const { id } = req.params;
            const user = await Users.findOne({ _id: id })
            res.status(200).send(user);
        } catch(err){
            console.log(err);
            res.status(404).send("Esta página no existe");
        }
    }, 
    list: async (req, res) => {
        try{
            const users = await Users.find();
            res.status(200).send(users);
        } catch(err){console.log(err);}

    },
    create: async (req, res) => {
        console.log(req.body) /* Esto se va a ver muy seguido en las API rest */
        const user = new Users(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser._id);
    },
    update: async (req, res) => {
        const { id } = req.params;
        const user = await Users.findOne({ _id: id });
        Object.assign(user, req.body);
        await user.save();
        res.sendStatus(204);
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        const user = await Users.findOne({ _id: id });
        if (user){
            user.remove();
        }
        res.sendStatus(204)
    },
}

module.exports = User; /* esto sirve para poder exportar el módulo User a quien lo invoque UwU */