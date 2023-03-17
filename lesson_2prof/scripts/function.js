// Function diclaration - обявление функции через function

function multNum(num) {
    return num * 10
}  
console.log(multNum(5)); //50
console.log(multNum(34)); //340
console.log(multNum()); //NaN


// Arrow function (стрелочная функция)

const multNum_arrow = (num) => num * 10

console.log(multNum_arrow(6));
console.log(multNum_arrow(35));
console.log(multNum_arrow());


// 1. Написать функцию, которая принимает в качестве аргумента 2 числа, а возвращает их сумму

function sumNumbers (numA, numB) {
    return numA + numB
}
console.log(sumNumbers(11, 74))
console.log(sumNumbers(111, 7))

const sumNumbers2 = (numC, numD) => numC + numD
console.log(sumNumbers2(11, 74))
console.log(sumNumbers(111, 7))
