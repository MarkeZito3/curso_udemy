const loadInitialTemplate = () => {
	const template = `
		<h1>Animales</h1>
		<form id="animal-form">
			<div>
				<label>Nombre</label>
				<input name="name" />
			</div>
			<div>
				<label>Tipo</label>
				<input name="type" />
			</div>
			<button type="submit">Enviar</button>
		</form>
		<ul id="animal-list"></ul>
	`
	const body = document.getElementsByTagName('body')[0]
	body.innerHTML = template
}

const getAnimals = async () => {
	const response = await fetch('/animals', {
		headers: {
			Authorization: localStorage.getItem('jwt'),
		}
	})
	const animals = await response.json()
	const template = animal => `
		<li>
			${animal.name} ${animal.type} <button data-id="${animal._id}">Eliminar</button>
		</li>
	`

	const animalList = document.getElementById('animal-list')
	animalList.innerHTML = animals.map(animal => template(animal)).join('')
	animals.forEach(animal => {
		animalNode = document.querySelector(`[data-id="${animal._id}"]`)
		animalNode.onclick = async e => {
			await fetch(`/animals/${animal._id}`, {
				method: 'DELETE',
				headers: {
                    Authorization: localStorage.getItem('jwt')  // pasamos el JWT por cabecera del localStorage
                },
			})
			animalNode.parentNode.remove()
			alert('Eliminado con éxito')
		}
	})
}

const addFormListener = () => {
	const animalForm = document.getElementById('animal-form')
	animalForm.onsubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData(animalForm)
		const data = Object.fromEntries(formData.entries())
		await fetch('/animals', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('jwt')
			}
		})
		animalForm.reset()
		getAnimals()
	}
}

const checkLogin = () => localStorage.getItem('jwt')

const animalsPage = () =>{
	loadInitialTemplate()
	addFormListener()
	getAnimals()
}

const loadRegisterTemplate = () => {
	const template = `
		<h1>Register</h1>
		<form id="register-form">
			<div>
				<label>Correo</label>
				<input name="email" />
			</div>
			<div>
				<label>Contraseña</label>
				<input name="password" />
			</div>
			<button type="submit">Enviar</button>
		</form>
		<a href="#" id="login">Iniciar Sesión</a>
		<div id="error"></div>
	`

	const body = document.getElementsByTagName('body')[0]
	body.innerHTML = template
}


const gotoLoginListener = () => {
	const gotoLogin = document.getElementById("login");
	gotoLogin.onclick = (e) => {
		e.preventDefault()
		loginPage()
	}
}

const registerPage = () =>{
	loadRegisterTemplate()
	addRegisterListener()
	gotoLoginListener()
}

const loginPage = () =>{
	loadLoginTemplate() // carga un template que es el template de login
	addLoginListener()
	gotoRegisterListener()
}

const loadLoginTemplate = () => {
	const template = `
	<h1>Login</h1>
	<form id="login-form">
	<div>
	<label>Correo</label>
	<input name="email" />
	</div>
	<div>
	<label>Contraseña</label>
	<input name="password" />
	</div>
	<button type="submit">Enviar</button>
	</form>
	<a href="#" id="register">Registrarse</a>
	<div id="error"></div>
	`
	
	const body = document.getElementsByTagName('body')[0]
	body.innerHTML = template
}

const gotoRegisterListener = () => {
	const gotoRegister = document.getElementById("register");
	gotoRegister.onclick = (e) => {
		e.preventDefault()
		registerPage()
	}
}

const authListener = action => () => {
	const form = document.getElementById(`${action}-form`)
	form.onsubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries()) // Con esto transformamos todos los datos del formulario en objetos js :D
		
		const response = await fetch(`/${action}`, {
			method: 'POST',
			body: JSON.stringify(data), 
			headers: { 
				'Content-Type': 'application/json' 
			}, 
		})
		const responseData = await response.text()
		if (response.status >= 300){
			const errorNode = document.getElementById('error');
			errorNode.innerHTML = responseData;
		} else {
			localStorage.setItem('jwt', `Bearer ${responseData}` )
			animalsPage()
		}
	}
}

const addRegisterListener = authListener("register")

const addLoginListener = authListener("login")

window.onload = () => {
	const isLoggedIn = checkLogin() // con esta constante nos fijamos si el usuario esté logueado viendo si dentro del localStorage hay un JWT
	if(isLoggedIn){ 
		animalsPage() // si está logueado entonces ejecuta la página de animales en la variable animalsPage
	} else {
		loginPage()
	}
}
