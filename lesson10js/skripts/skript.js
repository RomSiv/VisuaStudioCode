// const value_1 = +prompt("Write first number:")
// const value_2 = +prompt("Write second number:")

// if (value_1 > value_2) {
//     console.log("Value1 is bigger then value2")
// } else if (value_1 < value_2) {
//     console.log("Value2 is bigger then value1")
// } else {
//     console.log("Value is equeal to value2")
// }

// ====================================

// const figure = +prompt("Write u figuge")

// if (figure > 0) {
//     console.log("Figuge > 0")
// } else if (figure < 0) {
//     console.log("Figure < 0")
// } else {
//     console.log("Figure = 0")
// }


// ========================================

// const value = +prompt("u number")

// console.log(isNAN(value))

// console.log("5") false
// console.log("five") true
// console.log(NaN) true


// ===============================================


// const figure = +prompt("Write u figure")

// if (isNaN(figure)) {
//     console.log("Не можно преобразовать в число")
// } else {
//     console.log("Можно преобразовать в число")
// }

// ==================================================


// && = and
// || = or

// console.log(true && false) // fasle
// console.log(true || false) // true 

// const figure = prompt("Write u figure")

// if (figure < 0 || figure > 0) {
//     console.log("не ровно")
// } else {
//     console.log("ровно 0")
// }

// ====================================================

// const year = prompt("Write u year")

// if (year%4 == 0) {
//     console.log("Высокосный")
// } else {
//     console.log("Не высокосный")
// }
// =========================================================


// if (year%4 == 0 || (year % 400 == 0 && year%100 != 0) ){
//     console.log("Высокосный")
// } else {
//     console.log("Не высокосный")
// }


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// console.log(arr)

// arr[4]=500
// console.log(arr)
// console.log(arr[11])

// arr.push(700) //добавляет последний элемент
// console.log(arr.pop()) // берет последний элемент массива и удаляет его
// arr.unshift(111, 131, 355) // доюавляет  элементы в начало массива
// console.log(arr)
// arr.shift() //  берет первый элемент массива и удаляет его
// console.log(arr)
// arr.splice(4) // удаляет выбранный элемент массива

// const arr = []

// const val1 = print

// arr.push(val1, val2, val3)


// const arr5 = [1, 4, 2, 5, 3]
// const arr6 = [arr5[0]**2, arr5[1]**2, arr5[2]**2, arr5[3]**2, arr5[4]**2]
// console.log(arr6)

// const arr = [9, -15, 4, 8, -65, 0, -85, 52]
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] >= 0){
//      console.log(arr[i])
//    }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// for (let i = 0; i < 20; i += 2) {
// //    if (arr[i] %2 == 0){
//     console.log(i)
//    }

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

arr.reverse()
console.log(arr)

for (let i = arr.length -1; i >= 0; i--) {
    console.log(arr[i])
}