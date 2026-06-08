const nota = 100

if (nota >= 85) {
    console.log("Estudiante aprobó con nota excelente")
} else if (nota > 61) {
    console.log("Estudiante aprobó")
} else {
    console.log("Estudiante reprobó")
}

const dia = 'Viernes'

switch (dia){
    case 'Lunes': console.log("Es Lunes"); break;
    case 'Martes': console.log('"Es Martes'); break;
    default: console.log("No sé que día es ese");
}


const msg = (nota > 90 && dia === 'Viernes') ? 'Que tengas un excelente finde, aprobaste todo' : "Que tengas un buen día"


let name, last_name, age, gender

name = 'Jonathan'
last_name = 'Tubac'
age = 21
gender = 'M'

if (name && last_name && age && gender) {
    console.log("Datos enviados al servidor")
} else {
    console.log("Porfavor, completa todos los campos")
}