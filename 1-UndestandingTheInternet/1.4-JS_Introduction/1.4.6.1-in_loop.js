const users = [
    {
        name: "Dilan",
        age: 20,
        gender: "M"
    },
    {
        name: "Richi",
        age: 20,
        gender: "M"
    },
    {
        name: "Morde",
        age: 21,
        gender: "M"
    }
]

users.forEach(user => {
    console.log("Bienvenido " + user.name + " al sistema.")
    console.log("Tu edad es: " + user.age)
    console.log("Tu género es: " + user.gender)
})