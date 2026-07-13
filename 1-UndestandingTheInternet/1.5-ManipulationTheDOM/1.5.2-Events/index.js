const name = document.querySelector("h2");
const btn = document.querySelector(".btn");
const input = document.querySelector("input")
let newName = ""
console.log(name)

//if you want to update the h2 in real time use the event "input"
input.addEventListener("change", (event) => {
    //name.textContent = event.target.value
    newName = event.target.value;
})

btn.addEventListener("click", () => {
    name.textContent = newName
})