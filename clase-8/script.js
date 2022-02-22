/*let parrafo = document.getElementById('parrafo1')
let parrafos = document.getElementsByClassName('parrafos')
let etiquetasP = document.getElementsByTagName('p')
console.log(parrafo)
console.log(parrafos[0].children[0])
console.log(etiquetasP[0])

parrafo.innerText += "Hola Coders!"
parrafos[0].innerHTML += `<p class="colores" id="parrafox">Hola gente!!!</p>`

let divGeneral = document.createElement('div')

divGeneral.innerHTML = `<p>Buenas buenas </p>`

document.body.appendChild(divGeneral)

document.body.removeChild(divGeneral)*/

class Persona {
    constructor(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona(1, "Milton", "Salazar", 20)
const persona2 = new Persona(2, "Emiliano", "Grange", 21)
const persona3 = new Persona(3, "Juan", "Chapur", 22)
const persona4 = new Persona(4, "Matias", "Miro", 24)

let arrayPersonas = [persona1, persona2, persona3, persona4]

let divPersonas = document.getElementById('divPersonas')

arrayPersonas.forEach(personaEnArray => {
    divPersonas.innerHTML += `
        <div id="persona${personaEnArray.id}"> 
            <h1>${personaEnArray.nombre} ${personaEnArray.apellido} </h1>
            <p>Edad: ${personaEnArray.edad} </p>
        </div>   
    `
})

//persona0 persona1 persona2 persona3