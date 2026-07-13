function saludar(nombre) {
    return "Hola " + nombre;
};

const user1 = saludar("Jonathan")

//console.log(user1)

const sumar = function(a, b) {
    const total = a + b;
    return total
}


const operacion = sumar(1, 2)
//console.log(operacion)

const restar = (a, b) => {
    return a - b
}
//console.log(restar(5, 2))

const potencia = a => a * a;
console.log(potencia(5))
