// function getName() {                    //Объявляем функцию
// const name = prompt("Write u name")
// console.log(name);
// }

// getName()


//=============Запросить у пользователя число. Если число чётное, выводить в консоль Да, если не чётное, Нет
// function getFigure() {
//     const figure = prompt("Enter u number")
//     if(figure % 2 === 0) {
//         console.log("Да")
//     } else {
//         console.log("Нет")
//     }
// }

// getFigure()


//===========================================






//=====================Создать функцию принимающую у пользователя два числа и выводящюю в консоль наибольшее

// function getMax(){
//     const a = prompt("Enter u first figure")
//     const b = prompt("Enter u second figure")

//     if(a>b){
//         console.log(a)
//     }else{
//         console.log(b)
//     }
// }
// getMax()

//=========Создать функцию принимающую  два числа и выводящюю в консоль наибольшее

// function getMax(a, b){


//     if(a>b){
//         console.log(a)
//     }else{
//         console.log(b)
//     }

// }
// getMax(2, 4)
// getMax(11, 4)
// getMax(233, 31)
// getMax(21, 42)
// getMax(55, 444)


//============================ Пример работы локальных т глобальных переменных ===================

// let num = 6 //глобальная

// function power(a, b){

// let result = a**b
// console.log(result)
// let num = 8 //локальная
// console.log(num)
// }

// power(2, 2)
// console.log(num)


//  function power(a, b) {
//         const result = a**b
        
//         console.log("...")
//         return result
//         console.log("...")   // после ретёрн в функции ничего не работает
//     }

//     const result1 = power(4, 3)
//     console.log(result1)


//====== написать поцесс используя функцию power,
// которая находит гипотенузу по длинне двух катетов. Использовать теорему Пифогора.


// function power(a, b){
//     let result = Math.sqrt((a+b)**2)

//     return result
// }

// let result1 = power(4, 7)
// console.log(result1)

//==================================== Другой метод решения =============

//  function power(a, b) {
//         const result = a**b
        
//         return result
//  }

//  let kat1 = power(3, 2)
//  let kat2 = power(4, 2)
//  let gip = power(kat1+kat2, 0.5)

//  console.log(gip)

//================================== Либо ====================

// function power(a, b) {
//     let result = a**b
    
//     return result
// }

// let a = power(3, 2)
// let b = power(4, 2)
// let c = power(a + b, 0.5)
// console.log(c);
// console.log(power(power(3, 2) + power(4, 2), 0.5))


//===================================== Можем присвоить сразу значение ====================

// function power(a, b = 2) {
//     let result = a**b
    
//     return result
// }

// let a = power(3)
// let b = power(4)
// let c = power(a + b, 0.5)
// console.log(c);
// console.log(power(power(3) + power(4), 0.5))

//===== Написать функцию которая получает одно число и возвращает true если число чётное, false если не чётное ======================================================

// function getFigure(a) {
//     let b = 0
//     if(a % 2 === 0) {
//         b =  "true"
//     } else {
//         b = "false"
//     }
// return b   
// }

// const b = getFigure(3)
// console.log(b)

//=========== СП 2 ===========

// function getFigure(a) {

// return a % 2 === 0   
// }

// console.log(getFigure(3))
// console.log(getFigure(4))



//=========== НАписать функци., которая получается в качестве агрумента числа и 
// возвращает массив из чисел от 0 до указанного числа

// function arreyReturn(a) { // function deklaration

//     const newArrey = []

//     for (let index = 0; index < a; index++) {
//         newArrey.push(index)
//          }

//          return newArrey
//         }

//         const newArreReturn = arreyReturn // объект функции можем присвоить переменной(function expression)

//     console.log(arreyReturn(9));
//     console.log(arreyReturn(10));
//     console.log(arreyReturn(96));
//     console.log(arreyReturn(145));

//     console.log(newArreReturn(9));
//     console.log(newArreReturn(10));
//     console.log(newArreReturn(96));
//     console.log(newArreReturn(145));

//=========================================================

// const power = function(a) {  // Можем сразу присвоить переменной функцию
//     return a**2
// }

// console.log(power(4));

//=========================================================

// const obj = {  // присваиваем к ключу объекта фенкцию
//     qwerty: function(a) {
//         console.log(a)
//     }
// }

// obj.qwerty(123)
// obj.qwerty(124)
// obj.qwerty(1223)
// obj.qwerty(12333)

//==================================================

// const obj = {  // пример присвоения консоль.лог переменной
//     qwerty: console.log 
       
// }

// const cout = console.log

// obj.qwerty(123)
// obj.qwerty(124)
// obj.qwerty(1223)
// obj.qwerty(12333)

// cout(524)

//=======Написать фенкцию принимающую 2 числа и добавляющую в массив числа от первого до второго===========================================
const arreyReturn = function(a, b) { 

    
    const newArrey = []

    for (let index = a; index <= b; index++) {
        newArrey.push(index)
         }

         return newArrey
        }

        console.log(arreyReturn(9, 15))


    

    // console.log(arreyReturn(9, 11));
    // console.log(arreyReturn(10, 34));
    // console.log(arreyReturn(96, 150));
    // console.log(arreyReturn(145, 199));

    // console.log(newArreReturn(9));
    // console.log(newArreReturn(10));
    // console.log(newArreReturn(96));
    // console.log(newArreReturn(145));