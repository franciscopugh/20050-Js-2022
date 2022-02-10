/*
const persona1 = {
    nombre: "Francisco", 
    apellido: "Pugh", 
    edad:45, 
    cuentaBancaria: 45,
    esProfe: true
}

const persona2 = {
    nombre: "Milton",
    apellido: "Salazar",
    edad:22,
    cuentaBancaria: 1000,
    esProfe: false
}

//persona1 = persona2

persona1.cuentaBancaria = 4000
persona2.cuentaBancaria = 5000
console.log(persona1.cuentaBancaria)
console.log(persona2["cuentaBancaria"])
*/
/*
function Persona(nombre, apellido, edad, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
    this.saludar = () => console.log(`Hola, mi nombre es ${this.nombre} estoy saludando!`)
    this.mostrar = () => console.log(this)
}*/

class Persona {
    constructor(nombre, apellido, edad, dni, cuentaBancaria) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.cuentaBancaria = cuentaBancaria
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} estoy saludando!`)
    }

    mostrar() {
        console.log(this)
    }

    deposito(cantDeposito) {                           //600              300                 300
        this.cuentaBancaria += cantDeposito   // this.cuentaBancaria = this.cuentaBancaria + cantDeposito
    }

    retiro(cantRetirar) {
        if(this.cuentaBancaria - cantRetirar >= 0) {
            this.cuentaBancaria -= cantRetirar  // this.cuentaBancaria = this.cuentaBancaria - cantDeposito
        } else {
            console.log("No puede retirar mas dinero del que dispone")
        }
        
    }
}

const persona1 = new Persona(
    prompt("Ingrese un nombre"),
    prompt("Ingrese un apellido"),
    parseInt(prompt("Ingrese una edad")),
    parseInt(prompt("Ingrese un DNI")),
    parseFloat(prompt("Ingrese un saldo en cuenta bancaria"))
)
const persona2 = new Persona("Juan", "Chapur", 14, 32132131, 500)

persona1.saludar()
persona1.mostrar()
persona2.saludar()

console.log(persona1.cuentaBancaria)
persona1.deposito(500)
persona1.deposito(500)
console.log(persona1.cuentaBancaria)
persona1.retiro(1400)
console.log(persona1.cuentaBancaria)