const express = require("express");
const user = require("./user.controller"); /* con  el ./ se indica que estamos llamando a un archivo dentro de la misma carpeta y no dentro de los módulos instalados de node js */
const app = express();
const port = 3000;


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

app.get("/", user.list);
app.post("/", user.create);
app.get("/:id", user.params);
app.put("/:id", user.update);
app.patch("/:id", user.update);
app.delete("/:id", user.destroy);

app.listen(port, () => {
    console.log("arrancando la app :3");
});