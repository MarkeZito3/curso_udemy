// const todos = []; // esto es un arreglo vacio para colocar todos los todo como memoria
const todos = JSON.parse(localStorage.getItem('todos')) || []; // los signos || sirven corte un else 

//recursividad 
const render = () => {
    const todoList = document.getElementById("todo-list") // tomamos el ul que está en el HTML para  poder agregar más listas de todos 
    const todosTemplate = todos.map(t => '<li>' + t + '</li>'); //como parámetro se coloca un elemento que vamos a estar iterando
    console.log(todosTemplate);
    todoList.innerHTML = todosTemplate.join(""); // tomar todos los elementos de un arreglo y juntarlos mediante lo que esté escrito dentro de los paréntesis 
    const todoList_li = document.querySelectorAll("#todo-list li") //esto busca todos los elementos | para usar los ID se ocupa el #
    // Array.from(todoList_li) //Esto es para poder transformar lo de arriba a un array

    todoList_li.forEach((todoList_li, i) => { // esto sirve para iterar, al igual que .map (con la diferencia que .forEach no se puede colocar a una constante)
        todoList_li.addEventListener("click",() => { // este evento detecta cuando el usuario hace click por encima del <li> con la ID que detectó anteriormente
            todoList_li.parentNode.removeChild(todoList_li); //parentNode transforma al elemento que es el padre (esto se hace ya que los nodos padres son los que pueden eliminar a sus hijos)
            todos.splice(i, 1); // con splice se elimina un elemento del array .splice(indice,cantidad_de_elementos)
            actualizaToDo(todos) // llamamos a la función actualizaToDo que actualiza los todos del local storage
            render();
            console.log("Se eliminó:", todoList_li,todos,i);
        })
    })
}

const actualizaToDo = (todos) =>{
    const todoString = JSON.stringify(todos);
    localStorage.setItem('todos', todoString)
}

window.onload = () => { 
    render();
    const form = document.getElementById("todo-form"); // se obtiene la referencia con getElementById
    form.onsubmit = (e) => { // reemplazamos la funcion que tenía en onsubmit
        e.preventDefault(); // previene que la app se refresque
        
        const todo = document.getElementById("todo"); // obtengo la referencia de un elemento con la id "todo" y lo guardo en la constante "todo"
        const todoText = todo.value; // guardo el valor de "todo" en una constante "todoText"
        
        todo.value = ""; // hago que el cuadro de texto esté vacío
        todos.push(todoText); // agrego contenido al arreglo de todos
        console.log(todos);
        actualizaToDo(todos)
        // const todoString = JSON.stringify(todos); 
        // localStorage.setItem("todos", todoString); // almacena el dato en local 
        // hay una mejor manera de hacer lo que está escrito acá abajo, y es con map
        // todoList.innerHTML = ""; // vacío el HTML de todolist 
        // for(let i = 0; i < todos.length; i++) {
        //     todoList.innerHTML += "<li>" + todos[i] + "</li>"; //agrego un <li> para mostrar la la lista
        // };
        
        render()
    }
}