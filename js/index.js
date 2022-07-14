console.log("Hola Mundo OwO"); //todo con minúsculas


let variables = "variables"
console.log(variables); 
console.log("--------------");
let booleans_true = true; 
let booleans_false = false; 

console.log(booleans_true);
console.log(booleans_false);

// undefined

let und = undefined;
console.log(und);

console.log("--------------");
// Un objeto es una agrupación de datos (por lo que veo, es lo mismo que un diccionario en python)

const objeto = {};
// los objetos no tienen variables, lso objetos tienen propiedades
const objeto2 = {
    unNumero:12,
    unString:"hola soy un string",
    unaCondicion:false,
};

console.log(objeto,"\n",objeto2);

console.log("--------------");
// array 
// los arrays pueden tener cualquier tipo de datos dentro


const arr = []
const arr2 = [1, 2, "hola", objeto2.unaCondicion]

console.log(arr,"\n",arr2);
//push, lo que hará es agregar un nuevo elemento a nuestro arreglo 
arr2.push(4)
console.log(arr,"\n",arr2);

console.log("--------------");