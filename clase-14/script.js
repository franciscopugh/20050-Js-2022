/*setTimeout(() => {
    console.log("Hola, buen dia")
}, 3000)

setTimeout(() => {
    console.log("Adios, buen dia")
}, 3000)

setTimeout(() => {
    console.log("No me molestes")
}, 3000)


setInterval(() => {
    console.log("Hola")
}, 1500)*/


const nuevaPromesa = (valor) => {
    return new Promise((resolve, rejected) => {
        if(valor == true) {
            resolve("Promesa aceptada")
        } else {
            rejected("Promesa rechazada")
        }
    })
}

console.log(nuevaPromesa(false))
