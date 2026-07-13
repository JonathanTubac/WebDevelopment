const numeros = [1, 2, 4, 1, 2, 3, 4, 6, 7, 8, 9, 10];

//console.log(numeros);

//numeros.push(14)

//console.log(numeros)

//const eliminado = numeros.pop();

//console.log("Elemento eliminado: " + eliminado);

//const posicion = numeros.indexOf(2)

//console.log(posicion)


const existe = numeros.includes(100) ? "Existe" : "No existe"

//console.log(existe);

const frutas = ["pera", "pera", "manzana", "naranja", "manzana"]

const inventario = frutas.reduce((ac, fruta) => {
    ac[fruta] = (ac[fruta] || 0) + 1;
    return ac   
}, {})

console.log(inventario)