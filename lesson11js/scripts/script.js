// const array = [2, -4, -6, 4, -76, 45, -33, 34]
// let sumOfElements = 0

// //  Сумма массивая

// for (let index = 0; index < array.length; index++) {
//    const element = array[index]
//    sumOfElements += element

// }

// console.log(sumOfElements)

//====Найти сумму положительныйх чисел в массиве==================

// const array = [2, -4, -6, 4, -76, 45, -33, 34]
// let sumOfElements = 0

// for (let index = 0; index < array.length; index++) {
//    const element = array[index]
// if(array[index] >=0){
//     sumOfElements += element
//  }
// }

// console.log(sumOfElements)

//====Найти сумму положительных и отрицательных чисел и найти раздницу между ними======

// const array = [2, -4, -6, 3, -76, 45, -33, 34]
// let sumOfElements = 0
// let sumOfMinusElements = 0

// for (let index = 0; index < array.length; index++) {
//    const element = array[index]
//    const minusElements = array[index]

// if(array[index] >=0){
//     sumOfElements += element
//  }if(array[index] < 0){
//     sumOfMinusElements += minusElements
//  }
// }

// let raznica = 0

// if(sumOfElements < sumOfMinusElements) {
//     raznica = sumOfMinusElements - sumOfElements
//  }else{
//     raznica = sumOfElements - sumOfMinusElements}

// console.log(raznica)

//=====Найти сумму четных и не четных чисел и раздницу между ними=======

// const array = [2, 4, 6, 3, 76, 45, 33, 34];
// let sumOfEvenElements = 0;
// let sumOfOddElements = 0;

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  

//   if (array[index] % 2 == 0) {
//     sumOfEvenElements += element;
//   }
//   if (array[index] % 2 != 0) {
//     sumOfOddElements += element;
//   }
// }

// let raznica = 0;

// if (sumOfEvenElements < sumOfOddElements) {
//   raznica = sumOfOddElements - sumOfEvenElements;
// } else {
//   raznica = sumOfEvenElements - sumOfOddElements;
// }

// console.log(`sumOfEvenElements = ${sumOfEvenElements}`)
// console.log(`sumOfOddElements = ${sumOfOddElements}`)
// console.log(`raznica = ${raznica}`);


//======Найти в массиве эелементы, в которых значения ровны индексам==========

// const arr = [1, 34, 52, 4, 9, -5, 6, 59, 52, 9, 20, 12, 65, 13]
// let sum = 0

// for (let index = 0; index < arr.length; index++) 
//     if(arr[index] === index){
//          sum += arr[index]
//     } 


// console.log(sum)



//=======Объекты=====================================================================

// const person = ["John", "Smith", 37, 175]
// console.log(`Name ${person[0]}`)
// console.log(`Second name ${person[1]}`)
// console.log(`Age ${person[2]}`)
// console.log(`Height ${person[3]}`)

// const person = {
//     name: "John",
//     secondName: "Smith",
//     age: 37,
//     height: 175
// }
// console.log(`Name ${person.name}`)                    //Первый вариант обращения к ключу
// console.log(`Second name ${person.secondName}`)
// console.log(`Age ${person['age']}`)                   //Второй вариант обращения к ключу 
// console.log(`Height ${person['height']}`)
// console.log(person)

// person.name = "Vasia"  //Меняем значение
// person.work = "Gardenman"  //Добовляем в объект

// console.log(`Name ${person.name}`)  
// console.log(`Second name ${person.secondName}`)
// console.log(`Age ${person['age']}`) 
// console.log(`Height ${person['height']}`)
// console.log(person)


//=========Создать продукт и вывести его через ключ-пару==================


// const dog = {
//   name: "Harley",
//   rase: "Jack Rassel Terier",
//   color: "Be-color",
//   waige: 10.5,
//   age: 8.5
// }

// console.log(`Name ${dog.name}`)
// console.log(`Rase ${dog.rase}`)
// console.log(`Color ${dog.color}`)
// console.log(`Waige ${dog.waige}`)
// console.log(`Àge ${dog.age}`)

// console.log


// ==========================================================================

// const product = {
//     title: "Notebook",
//     price: 1500,
//     type: "laptop"
// }


// const products = [
// {
//     title: "Notebook",
//     price: 1500,
//     discount: 17
// },
// {
//     title: "PC",
//     price: 1000,
//     discount: 10
// },
// {
//     title: "Blander",
//     price: 150,
//     discount: 15
// }
// ]

//console.log(products)
// let sumPrice = 0
// for (let index = 0; index < products.length; index++) {
    // sumPrice += products[index].price
    // console.log(products[index])             // Выводим мосив целиком
    // console.log(products[index].price)       //Можем вывести любу. строку или элемент таким оброзом
    // console.log(`Prise of ${products[index].title} is ${products[index].price}`) 

//====Вариант 2===============================================

// const {title, price, discount} = products[index]  //========================Деструктуризация====
// console.log(`Standart prise of ${title} is ${price}, discount price is ${price - (price / 100 * discount)}` )
// sumPrice += price
    
// }
// console.log(`Àll price ${sumPrice}`)

const newArrey = []
const products = [
    {
        title: "Notebook",
        price: 1500,
        discount: 17,
        type: "comp"
    },
    {
        title: "PC",
        price: 1000,
        discount: 10,
        type: "sport"
    },
    {
        title: "Blander",
        price: 150,
        discount: 15,
        type: "copm"
    },
    {
        title: "Soks",
        price: 10,
        discount: 10,
        type: "sport"
    }
    ]
for (let index = 0; index <products.length; index++) {
    
    

    const {type} = products[index]
        if(type === "sport"){
            newArrey.push(products[index])
        }
    }
        

        console.log(newArrey)