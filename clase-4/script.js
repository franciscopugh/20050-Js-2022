/*
function saludar() {
    console.log("Me despido de ustedes!")
}

saludar()
saludar()
saludar()
saludar()*/

//let numero1 = parseFloat(prompt("Ingrese un numero")) // 50
//let numero2 = parseFloat(prompt("Ingrese otro numero")) //60
/*
function suma(numero1,numero2) {
    return numero1 + numero2
}

let sumaNumeros = suma(5,10)
sumaNumeros = suma(10,20)
console.log(sumaNumeros)
console.log(console.log(5 + 20))


const IVA = 1.21

function calcularIVA(producto) {
    //const IVA = 1.30 Esto no se hace
    return producto * IVA
}

console.log(IVA)

console.log(calcularIVA(100))

function suma(num1,num2) {
    return num1 + num2
}

function resta(num1,num2) {
    return num1 - num2
}

function multiplicacion(num1,num2) {
    return num1 * num2
}

function division(num1,num2) {
    return num1 / num2
}


const suma = function (num1,num2) {return num1 + num2}
const resta = function (num1,num2) {return num1 - num2}
const multiplicacion = function (num1,num2) {return num1 * num2}
const division = function (num1,num2) {return num1 / num2}
*/

const suma = (num1,num2) => num1 + num2
const resta = (num1,num2) => num1 - num2 
const multiplicacion = (num1,num2)  => num1 * num2
const division = (num1,num2) => num1 / num2

function calculadora(numero1, numero2, operacion) {
    /*switch(operacion) {
        case "+": 
            console.log(suma(numero1, numero2))
            break
        case "-":
            console.log(resta(numero1, numero2))
            break
        case "*":
            console.log(multiplicacion(numero1,numero2))
            break
        case "/":
            console.log(division(numero1, numero2))
            break
        default:
            console.log("Operacion no valida")
            break
    } */
    if(operacion == "+") {
        console.log(suma(numero1, numero2))
    } else if(operacion == "-") {
        console.log(resta(numero1, numero2))
    } else if(operacion == "*") {
        console.log(multiplicacion(numero1,numero2))
    } else if(operacion == "/") {
        console.log(division(numero1, numero2))
    } else {
        console.log("Operacion no valida")
    }

}

let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese otro numero"))
let operacion = prompt("Ingrese una operacion")

calculadora(numero1,numero2,operacion)