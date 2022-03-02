/*let palabra = "Hola"

for(let i = 0; i < palabra.length; i++) {
    console.log(palabra[i])
    if(palabra[i] == "o") {
        document.body.style.display ="inline block" 
    }
}*/

let formPerrito = document.getElementById('formPerrito')
let botonPerrito = document.getElementById('botonMostrarPerritos')
let divPerritos = document.getElementById('divPerritos')

let arrayPerritos = []

formPerrito.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombreI = document.getElementById('idName').value
    let razaI = document.getElementById('idRaza').value
    let edadI = document.getElementById('idEdad').value

    arrayPerritos.push({nombre: nombreI, raza: razaI, edad: edadI})

    formPerrito.reset()
    console.log(arrayPerritos)
})

botonPerrito.addEventListener('click', () => {
    divPerritos.innerHTML = ""
    arrayPerritos.forEach((perritoEnArray, indice) => {
        divPerritos.innerHTML += `
            <div id="perrito${indice}">
                <p>Nombre: ${perritoEnArray.nombre} </p>
                <p>Raza: ${perritoEnArray.raza} </p>
                <p>Edad: ${perritoEnArray.edad} </p>
            </div>
        `
    })
    array.reduce().filter((a,b) == {a: 5, b:10})
})