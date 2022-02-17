class Persona {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo;
    } 
}

const persona1 = new Persona("Emiliano", "Grange", 23, 10000)
const persona2 = new Persona("Juan", "Chapur", 18, 8000)
const persona3 = new Persona("Milton", "Salazar", 22, 12000)
const persona4 = new Persona("Matias", "Miro", 24, 15000)

let personas = [persona1,persona2, persona3,persona4]
/*
for(let persona of personas) {
    console.log(persona)
}

personas.forEach((persona) => {
    console.log(persona)
})*/

/*console.log(personas.find((persona) => persona.sueldo >= 8000 && persona.sueldo <= 10000))
console.log(personas.find((persona) => persona.nombre === "Francisco"))
console.log(personas.filter((persona) => persona.edad < 18))
console.log(personas.some(persona => persona.nombre === "Milton"))
console.log(personas.map((persona) => `El sueldo es ${persona.sueldo}`))
console.log(personas.map((persona) => `${persona.nombre} - ${persona.apellido}`))
console.log(personas.map((persona) => persona.sueldo * 1.20)) //persona = ...
*/

//console.log(personas.sort((p1, p2) => p1.sueldo - p2.sueldo)) // 
console.log(Math.cbrt(27)) // 2 * 2 * 2
console.log(parseInt(Math.random() * 100))
const fecha = new Date('07, 03, 2022')
console.log(fecha)