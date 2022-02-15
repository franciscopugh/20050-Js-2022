/*let array1 = []

const array2 = [10,true, 1, "Hola", 4, false, "Chau"]
//array2 = array1

array2[4] = "x"
console.log(array2.length)

array2.push(prompt("x"))
for(let i = 0; i<array2.length; i++) {
    console.log(array2[i]) //array2[0] array2[1] array2[2] array2[3]
}


let nombres1 = ['Fran', 'Lucia', 'Lucia', 'Juan', 'Cristian']
let nombres2 = ['Emily', 'Emma']
/*
let nombres1 = nombres.splice(1,8999)
console.log(nombres1)
console.log(nombres)
console.log(nombres.join("*"))*/
//let nombres3 = nombres1.concat(nombres2)
//let nombres3 = nombres1 + nombres2
//let nombres3 = nombres1.slice(0,3)
//console.log(nombres3)
/*
let nombreAEliminar = prompt("Ingrese un nombre")

let indice = nombres1.findIndex((nombre) => nombre === nombreAEliminar)


if(indice !== -1) {
    nombres1.splice(indice, 1)
    
} else {
    alert("Nombre invalido")
}
console.log(nombres1)

console.log(nombres1.reverse())*/


class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona("Francisco", "Pugh", 40)
const persona2 = new Persona("Juan", "Chapur", 14)
const persona3 = new Persona("Milton", "Salazar", 20)

let personas = [persona1,persona2,persona3]

console.log(personas)

for(let personaEnArray of personas ) {
    console.log(personaEnArray)
}