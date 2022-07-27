loadInicialTemplates = () => {
    // se crea una variable templates para guardar el template html dentro de él
    const templates = `
        <h1>Usuarios</h1>
        <form id="user-form">
            <div>
                <label>Nombre</label>
                <input type="text" name="name" placeholder="Nombre" required/>
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" name="lastname" placeholder="Apellido" required/>
            </div>
            <button type="submit">Enviar</button>
        </form>
        <ul id="user-list"></ul>
    `;

    const body = document.getElementsByTagName("body")[0]; // Ir a buscar la etiqueta de body, accdeder al primer elemento
    body.innerHTML = templates; // reemplaza su innerHTML por templates ;3
}

const getUsers = async () => {
    const response = await fetch('/users');
    const users = await response.json(); // json nos permite transformar las respuestas en objetos de js 
    console.log(users);
    const template = user => `
        <li>
            ${user.name} ${user.lastname}
            <button data-id="${user._id}">Eliminar</button>
        </li>
    `

    const userList = document.getElementById('user-list');
    userList.innerHTML = users.map(user => template(user)).join('')
    users.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e =>{
            await fetch(`/users/${user._id}`, {
                method: 'DELETE',
            });
            userNode.parentNode.remove();
            alert("usuario eliminado");
        };
    });
}

const addFormListener = () => {


    const userForm = document.getElementById("user-form"); // agarro el elemento <form> con la id user-form
    userForm.onsubmit = async (e) => { /* la e es de evento, la idea es escuchar un evento y hacer otra cosa cuanto este se active */
        e.preventDefault(); /* Previene que se refresque la página al enviar un formulario */
        const formData = new FormData(userForm); /* te permite saber los datos de un formulario pero solo con la referencia de un formulario HTML */
        const data = Object.fromEntries(formData.entries()); 
        console.log(data);
        await fetch('/users', {
            method : 'POST',
            body: JSON.stringify(data),
            headers: { 
                'Content-Type': 'application/json' 
            }
        });
        userForm.reset(); //borra el contenido de las cajas del formulario
        getUsers()
    }
}




window.onload = () =>{
    loadInicialTemplates(); // cargo el template del formulario
    addFormListener(); // agrego un listener cuando se rellena el formulario y se da a enviar
    getUsers(); // imprime los users en ul en forma de li
}