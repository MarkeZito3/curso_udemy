// Spread operator (2 - 41)
function spreedOperator(){

// acá vamos a ver que hay una forma de asignar los mismos contenidos de un objeto sin asignarlos tradicionalmente
// ya que si se hace eso, ambos comparten el mismo lugar en la memoria y no son onbjetos completamente independientes.
// EJ:

const a = {b:1}; /* con {} se hacen los objetos */
const b = a;

// a === b da como return true
console.log(a === b);

// si imprimo los contenidos objengo esto:
// a = {b:1}
// y por consiguiente
// b = {b:1}

console.log(a);
console.log(b);

// pero si cambio al objeto b también se cambia en a, ya que al poner asignación estoy diciendo que comparta todo, incluyendo el espacio en memoria.
// por lo que si modifico b (que no es el objeto original) también se cambia en a.
// si imprimo los contenidos objengo esto:

// a = {b:1, c:2}
// b = {b:1, c:2}

b.c = 2;
console.log(a);
console.log(b);

// para que las constantes sean independientes sin que compartan memoria se hace de la siguiente manera:

const diferente = { ...a } /* crea un objeto {}, y a ese objeto le asignas todas las propiedades del objeto "a"*/

// y para saber que estos son diferentes en memoria y solo en contenido podemos ver al imprimirlos y compararlos.

console.log("igual en contenido: ",a)
console.log("igual en memoria: ",diferente)
}

// Promesas (44 - )

// una promesa es un valor que se va a resolver en el futuro

// debemos saber que hay una constante global que se llama "Promise" esta nos permite resolver de manera asíncrona valores
Promise.resolve(2)
// este nos va a devolver la API de promesa
// pero primero se ejecutará lo que pongamos en un .then()
// En este caso haré lo siguiente

Promise.resolve(2)
.then(valor => valor + 1)
.then(valor => console.log("Promise resolve: ",valor))
.then(valor => console.log("Promise.resolve: ",valor))


// A diferencia de .then() la nueva función .catch() va a resivir un mensaje de errror (e)

Promise.reject(123)
    .then(variable => console.log(variable)).catch(e => console.error("error: ", e))


// de la manera anterior era una forma para hacerla de manera síncrona, sin embargo si no se quiere hacer de esa manera existe un nuevo método pea ello

new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000)
})
.then(x => console.log(x))
.catch(e => console.error(e));