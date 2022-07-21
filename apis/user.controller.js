// este archivo serviría para pasar la lógica acá, eso evita que en el otro no se sature demasiado 

const User = { /* Este módulo se llevará al original (index.js) para una mayor legibilidad y dinamismo */
    params: (req, res) => {
        res.status(200).send("esto es un chanchito :3");
    }, 
    list: (req, res) => {
        res.status(200).send("Hola Chanchito OwO");
    },
    create: (req, res) => {
        res.status(201).send("Creando un chanchito");
    },
    update: (req, res) => {
        res.status(204).send("actualizando chanchito");
    },
    destroy: (req, res) => {
        res.status(204).send("eliminando chanchito");
    },
}

module.exports = User; /* esto sirve para poder exportar el módulo User a quien lo invoque UwU */