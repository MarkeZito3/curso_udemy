// function iterar(arg1) {
//     for (let i = 0; i < arg1.length; i++) {
//         console.log(arg1[i]);
//     }
// }

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
// const nombres = ["pedro","juan","maría","carlos","michael"];

// iterar(numeros);
// iterar(nombres); 

function suma(a, b){
    return a + b;
}

console.log("la suma es: ",suma(1,2));

// consepto de Callback, esta es una función que se ejecuta al final de una función

function sumar(a, b, cb){
    const result = a + b;
    cb(result)
}

function callback(result){
    console.log("resultado: ",result);
}

// acá no se ejecuta el callback con el paréntesis ya que sino se estaría ejecutando dentro de
// los parámetros y no estaría llamando las propiedades de la misma para ejecutarla después

// a esto se lo llama llamada básica de composición de funciones
sumar(2, 3, callback);

// fat arrow functions: no se declara con la palabra reservada "function" y si es de una sola linea no hace falta poner "return"

const miFatArrowFunction = (a, b) => a + b
const otraFAF = (a, b) => {
    return a + b
}
// console.log(miFatArrowFunction(4,5))
console.log(otraFAF(4,5))

// funciones anónimas: son funciones que no tienen ningún nombre
// por lo general se ocupa en los callbacks

sumar(2, 3, function (result) {
    console.log("soy una función anónima y mi resultado es: ",result)
})