/*let boton1 = document.getElementById('boton1')
let input1 = document.getElementById('input1')
let inputColor = document.getElementById('inputColor')

boton1.addEventListener('click', () => {
    console.log("Diste click con addEventListener")
})

boton1.onclick = () => console.log("Diste click con onclick")

input1.addEventListener('change', () => {
    console.log(input1.value)
})

inputColor.addEventListener('input', () => {
    document.body.style.backgroundColor = inputColor.value
})*/

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

let arrayPersonas = []

let formPersona = document.getElementById('form')
let botonPersonas = document.getElementById('botonPersonas')
let divPersonas = document.getElementById('divPersonas')

formPersona.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = document.getElementById('idNombre').value 
    let apellido = document.getElementById('idApellido').value
    let edad = document.getElementById('idEdad').value  

    const persona = new Persona(nombre, apellido, edad)
    arrayPersonas.push(persona)
    console.log(arrayPersonas)
    formPersona.reset()
})

botonPersonas.addEventListener('dblclick', () => {
    arrayPersonas.forEach((personaEnArray, indice) => {
        divPersonas.innerHTML += `
            <div class="card" id="persona${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Persona N°: ${indice + 1}</h5>
                    <p class="card-text">Nombre: ${personaEnArray.nombre}</p>
                    <p class="card-text">Apellido: ${personaEnArray.apellido}</p>
                    <p class="card-text">Edad : ${personaEnArray.edad}</p>
                    <button class="btn btn-dark">Eliminar Persona</button>
                </div>
            </div> 
        `
    })
})