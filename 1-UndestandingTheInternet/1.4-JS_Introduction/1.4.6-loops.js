frutas = ["Apple", "Pineapple", "Lemon", "Watermelon", "Watermelon", "Apple", "Orange", "Banana", "Banana", "Lemon"]
let apples = 0
let pineapples = 0
let lemons = 0
let watermelons = 0
let oranges = 0
let bananas = 0

for (const fruit of frutas) {
    console.log(fruit)
    switch (fruit) {
        case "Apple": apples++; break;
        case "Pineapple": pineapples++; break;
        case "Lemon": lemons++; break;
        case "Watermelon": watermelons++; break;
        case "Orange": oranges++; break;
        case "Banana": bananas++; break;
    }
}

console.log("Apples: " + apples)
console.log("Pineapples: " + pineapples)
console.log("Lemons: " + lemons)
console.log("Watermelons: " + watermelons)
console.log("Oranges: " + oranges)
console.log("Bananas: " + bananas)