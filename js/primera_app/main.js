const todos = []; // esto es un arreglo vacio para colocar todos los todo como memoria

window.onload = () => { 
    const form = document.getElementById("todo-form"); // se obtiene la referencia con getElementById
    form.onsubmit = (e) => { // reemplazamos la funcion que tenía en onsubmit
        e.preventDefault(); // previene que la app se refresque
        
        const todo = document.getElementById("todo"); // obtengo la referencia de un elemento con la id "todo" y lo guardo en la constante "todo"
        const todoText = todo.value; // guardo el valor de "todo" en una constante "todoText"
        
        todo.value = ""; // hago que el cuadro de texto esté vacío
        todos.push(todoText); // agrego contenido al arreglo de todos
        console.log(todos);
        
        const todoList = document.getElementById("todo-list") // tomamos el ul que está en el HTML para  poder agregar más listas de todos 
        todoList.innerHTML = ""; // vacío el HTML de todolist 
        for(let i = 0; i < todos.length; i++) {
            todoList.innerHTML += "<li>" + todos[i] + "</li>"; //agrego un <li> para mostrar la la lista
        };
    };
}