//console.log(1 == 1 && 2 == 3)

//console.log(1 == 1 || 2 == 3)

//console.log(!(1==4))

const number = null

const defaultNumber = number ?? 32

const name = null

const defaultName = name ?? "User"

const user = {
    name: "Jonathan",
    age: 21,
    instruments: {
        guitar: "Hendrix",
        drums: "Yamaha"
    },
    games: {
        cod: {}
    }
}

const userName = user.games?.lol?.champs.sylas.abilities.g?.damage

console.log(userName)