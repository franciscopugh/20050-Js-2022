const animal1 = new Animal("Ty", "Tigre de Tasmania", 10, 1, "Amarillo", 4)
const animal2 = new Animal("Ramon", "Canguro", 12, 1, "Marron", 5)

animal1.recibirDaño(animal2.poder)
animal1.aumentarNivel()

animal2.recibirDaño((animal1.poder * 2))
animal2.aumentarNivel()

//animal1.recibirDaño(animal2.poder)