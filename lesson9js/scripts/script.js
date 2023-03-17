console.log("Hello world!");

// prompt - выводит окошко на экран
//let name = prompt("Write your name");
console.log("Hello " + name + ". How are you?");
console.log(`Hello ${name}. How are you?`)

//let, const - назначаем переменные: let - переменная может меняться в дальнейшем коде, const не меняется.
//var - старый вариант назначения переменной, не используем

console.log(5) //числовой тип данных
console.log("5") //строчный пит данных

//проверка на тип переменной
console.log(typeof(name))
console.log(typeof(5))
console.log(typeof name)
console.log(typeof 5)
console.log(typeof "5")


const r =12
const g =34
const b = 14

//конкотенаяция
console.log("rgb(" +r+ ", " + g + ", " + b + ");")
//интерполяция
console.log(`rgb(${r}, ${g}, ${b});`)

const value_1 =12
const value_2 =4

console.log(value_1 + value_2)
console.log(value_1 - value_2)
console.log(value_1 * value_2)
console.log(value_1 / value_2)
console.log(value_1 % value_2)
console.log(value_1 ** value_2) //возведение в степерь

const a = 2
const c = "2"
console.log(String(a))  // "2"
console.log(Number(c))  // 2

//Преобразование числового в строковое значение и наоборот 
console.log(typeof +c)  // 2
console.log(a)
console.log(typeof ("" +a)) // "2"
console.log(c)

console.log("2" + 2) //строчный тип + числовой = "22"
console.log("2" - 2) //строчный тип - числовой = 0

// NaN - Not a Number
console.log(Number("k"))
console.log(typeof NaN)

console.log("b" + "a" + +"c" + "a")

//let old = prompt("How old are u?")
//console.log(`U time is ${old*525600}`)

//let figure = prompt("Enter U figure")
//console.log(`pov U figure ${figure**2}`)

// const num1 = +prompt("Enter U first figure")
// const num2 = +prompt("Enter U second figure")

// console.log(`num1 + num2 = ${+num1 + num2}`)


const x = "2"
const y = 2

// console.log("x = y")
// console.log(x === y)

// if(x == y) {
//     console.log("x = y")
// } else {
//     console.log("x != y")
// }

if(x > y) {
    console.log("x > y")
} else {
    console.log("x <= y")
}