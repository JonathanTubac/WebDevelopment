const persona = {
    nombre: "Jonathan",
    edad: 21,
    genero: 'M',
    saludar: function () {
        return `Hola, soy ${this.nombre}`
    }
}

const { nombre, edad, genero } = persona;

const persona1 = { ...persona, nombre: "Ana", gmail: "javier@gmail.com" };
console.log(persona1);