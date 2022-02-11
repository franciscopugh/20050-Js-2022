class Animal {
    constructor(nombre, tipo, salud, nivel, color, poder) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.salud = salud;
        this.nivel = nivel;
        this.color = color;
        this.poder = poder;
    }

    recibirDaño(daño) {
        if(this.salud - daño <= 0) {
            this.salud = 0
            console.log(`${this.nombre} se fue con los angelitos`)
        } else {
            this.salud -= daño
            console.log(`${this.nombre} sigue vivito con ${this.salud} de vida`)
        }
    }

    aumentarNivel() {
        this.nivel++
        this.poder *= this.nivel
        console.log(`${this.nombre} tiene ${this.nivel} de nivel y ${this.poder} de poder`)
    }

    //En Js no son necesarios metodos get y set
}