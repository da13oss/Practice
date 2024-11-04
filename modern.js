///es6
let helloVar = "hello"

const helloWorld = (a) => {
    console.log(helloVar + a)
}

helloWorld("world!")

const donDuck = {
    first_name: "Donald",
    last_name: "Duck",
    age: 80,
}
const { first_name, last_name, age } = donDuck

console.log(first_name, last_name, age)