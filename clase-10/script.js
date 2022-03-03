/*
localStorage.setItem('Despedida', "Adios")
localStorage.setItem('Saludo', ["Adios", "Hola", {nombre: "Fran"}])

localStorage.setItem('Uno', 1)

//localStorage.removeItem('Uno')

for(let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i)
    console.log(localStorage.getItem(clave))
}

//localStorage.clear()

const objPersona = {nombre: "Francisco", apellido: "Pugh"}
let personas = [objPersona]

//const personasArray = JSON.stringify(personas)

localStorage.setItem('persona', JSON.stringify(personas))*/

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    hablar() {
        console.log("Habla")
    }
}

let personas = []

if(localStorage.getItem('Personas')) {
    personas = JSON.parse(localStorage.getItem('Personas'))
} else {
    localStorage.setItem('Personas', JSON.stringify(personas))
}


let form = document.getElementById('formUser')
let boton = document.getElementById('botonUsers')
let div = document.getElementById('divUsers')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = document.getElementById('name').value 
    let apellido = document.getElementById('apellido').value 
    let edad = document.getElementById('edad').value

    const persona = new Persona(nombre, apellido, edad)
    personas.push(persona)

    localStorage.setItem('Personas', JSON.stringify(personas))
    form.reset()
})

boton.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('Personas'))
    div.innerHTML = ""

    arrayStorage.forEach((personaEnArray, indice) => {
        personaEnArray.hablar()
        div.innerHTML += `
            <div class="card" id="persona${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${personaEnArray.nombre}</h5>
                    <p class="card-text">${personaEnArray.apellido}</p>
                    <p class="card-text">${personaEnArray.edad}</p>
                </div>
            </div>
        `
    }) 
})

