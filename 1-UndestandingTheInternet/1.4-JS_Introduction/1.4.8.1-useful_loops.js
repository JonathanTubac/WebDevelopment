const users = [
    {
        id: 1,
        nombre: "user1",
        rol: "admin",
        billetera: 250
    },
    {
        id:2,
        nombre: "user2",
        rol: "admin",
        billetera: 150
    },
    {
        id: 3,
        nombre: "user3",
        rol: "usuario",
        billetera: 250
    },
    {
        id: 4,
        nombre: "user4",
        rol: "cliente",
        billetera: 800
    },
    {
        id: 5,
        nombre: "user5",
        rol: "cliente",
        billetera: 150
    }
]

const cliente = users.find(user => user.id === 7) ?? "Usuario no encontrado";

const admins = users.filter(user => user.rol === 'admin');

const no_admins = admins.length ? ("Hay " + admins.length + " admins") : "No hay admins";

const total_billeteras = users.reduce((acumulador, user) => {
    return acumulador + user.billetera;
}, 0);

console.log(total_billeteras)