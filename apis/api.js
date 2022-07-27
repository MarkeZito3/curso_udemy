const express = require("express");
const user = require("./user.controller"); /* con  el ./ se indica que estamos llamando a un archivo dentro de la misma carpeta y no dentro de los módulos instalados de node js */
const app = express();
const port = 3000;
app.use(express.json()); // toma todas las peticiones que vengan en un formato JSON y la transforma en un objeto js y se las asigna a la propiedad de body.
// (para testear) dentro de postman habría que poner Content-Type application/json en Headers
const mongoose = require("mongoose");
const key_mongo = require("./key.js"); // este archivo no está dispoible por seguridad


mongoose.connect(key_mongo.key_mongo());


// esta forma es una forma larga de hacer las llamadas, sin embargo, en la linea 2 se importó el módulo user.controller que sirve como handler, para llevar la lógica allá para que esté menos saturado el código main.


// app.get('/',(req, res) =>{
//     res.status(200).send('Chanchito feliz :D'); // el código 200 significa OK y te envia datos
// });

// app.post('/',(req, res) =>{
//     res.status(201).send("creando chanchito"); /* el código 201 significa OK CREADO y no es necesario que enviemos nada, pero si no vamos a retornar nada, 
//                                                     se ocuparía el código de estado 204 */
// });

// app.get('/:id', (req, res) =>{
//     console.log(req.params)
//     res.status(200).send(req.params);
// })

// app.put('/:id', (req, res) =>{ /* el :id significa que va a ser un dato variable pero que este aparecerá en la ruta */
//     console.log(req.params)
//     res.sendStatus(204); /* con sendStatus estoy aclarando que solamente le voy a devolver el estado */
// })

// app.patch('/:id', (req, res) =>{ /* el :id significa que va a ser un dato variable pero que este aparecerá en la ruta */
//     res.sendStatus(204); /* con sendStatus estoy aclarando que solamente le voy a devolver el estado */
// })

// app.delete('/:id', (req, res) =>{
//     res.sendStatus(204); 
// })


// en esta parte escribiré las cosas pero ocupando el módulo para mayor dinamismo.

app.get("/users", user.list);
app.post("/users", user.create);
app.get("/users/:id", user.params);
app.put("/users/:id", user.update);
app.patch("/users/:id", user.update);
app.delete("/users/:id", user.destroy);

// esta parte sirve para que que no aparezca que no existe el archivo main.js
// ya que si ingresan al pagina.com/main.js, los redirige a la carpeta app y dentro de ella busca el archivo main.js que ingresamos antes
app.use(express.static('app'));

// acá va a estar el home
app.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

// al final de todas las rutas agregaads se agrega lo siguiente:

app.get("*", (req, res) =>{ /* esto significa que tomará todas las rutas que no se encuentra antes que sí misma. */
    res.status(404).send("Esta página no existe");
})

app.listen(port, () => {
    console.log("arrancando la app :3");
}); /* creo que con esto de arriba se abre el server XD, sin esto, no se queda atento al puerto */ 
