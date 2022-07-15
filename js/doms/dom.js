// DOM
// ¿Qué es el DOM?
// el DOM es todo el árbol HTML que vamos a tener en una página web una vez esta esté construida.

// este contiene una interfaz de programación estandar donde nosotros podemos ver, cambiar, eliminar o agregar elementos HTML dentro del sitio web

// con window.onload lo que hace esesperar a que el sitio web esté completamente cargado para ejecutar el js
window.onload = () => { 
    console.log("Intro a dom desde dom.js");
    const parrafo = document.getElementById("text"); 
    console.log("parrafo: " + parrafo.innerText); // con innerText lee el parrafo con la id seleccionada
    parrafo.innerText = "texto actualizado";
    // con el innerHTML puedo cambiar el texto o leerlo, pero también me deja ponerle características HTML
    const cambio = document.getElementById("cambio");
    cambio.innerHTML = "<h1>Esto es un cambio pero con características HTML</h1>"; 
}