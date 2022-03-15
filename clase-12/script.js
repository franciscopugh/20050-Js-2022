/*i = i + 1
i++

let numero = 30

if(numero == 20) {
    console.log("Numero 20")
} else {
    console.log("Numero no es 20")
}

(numero == 20) ? console.log("Numero 20") : (numero == 30)  ? console.log("Numero es 30") : (console.log("Numero no es ni 20 ni 30"))



console.log(0 ?? "Nullish")
console.log("Nullish" ?? NaN)

NaN ? console.log("V") : console.log("F")


function obtenerDatosStorage() {
    const listado = JSON.parse(localStorage.getItem('Listado'))
    return listado ?? []
}

let array = obtenerDatosStorage()

console.log(array)

const objeto = undefined

console.log(objeto?.nombre || "Propiedad no disponible")*/

const persona1 = {
    nC : "Raul",
    aC : "Perez",
    edad : 35,
    dC: {
        c: "Falsa",
        n: 123
    }
}

const persona2 = {
    nC : "Pablo",
    aC : "Perez",
    edad : 35,
    dC: {
        c: "Falsa",
        n: 123
    }
}

const persona3 = {
    nC : "Fernando",
    aC : "Perez",
    edad : 35,
    dC: {
        c: "Falsa",
        n: 123
    }
}

const persona4 = {
    nC : "Tamara",
    aC : "Perez",
    edad : 35,
    dC: {
        c: "Falsa",
        n: 123
    }
}


/*
let {nC: nombre,aC: apellido, dC: direccion} = persona

console.log(nombre)
console.log(apellido)

let {c: calle, n: numero} = direccion

console.log(`${calle} ${numero}`)
*/
function desestructurarObjeto({nC: nombre,aC: apellido, dC: direccion}) {
    //let {nC: nombre,aC: apellido, dC: direccion} = obj
    let {c: calle, n: numero} = direccion
    console.log(`${nombre}, ${apellido}, ${calle}, ${numero}`)
}




let arrayPersonas = [persona1, persona2,persona3,persona4]
/*
const [,b,,d] = arrayPersonas

//console.log(a)
console.log(b)
//console.log(c)
console.log(d)
//console.log(e)
desestructurarObjeto(b)*/

console.log(...arrayPersonas)

let arrayNumeros = [5,8,5,10,20,50,43]

console.log(Math.max(...arrayNumeros))


function retornarValor(array) {
    console.log(array)
}

retornarValor(...arrayPersonas)


const persona5 = {
    ...persona4,
    dni: 123123,
    estadoCivil: "Soltero"
}

console.log(persona5)


let numeros = [5,10,60,40]

const suma = (...numeros) => {
    return numeros.reduce((acc,n) => acc + n, 0) 
}

console.log(suma(5,10,60,50))