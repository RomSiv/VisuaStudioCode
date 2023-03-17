// const div = document.querySelector("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "#000";

// // ============ Чудо-чудное! Моргающтй квадратик))))======================

// div.addEventListener("mouseover", function () {
//   div.style.backgroundColor = "green";
// });

// div.addEventListener("mouseout", function () {
//   div.style.backgroundColor = "black";
// });

//  

//==================== Магия магий! Кубик меняет цвет на рэндомный и возвращает белый! класс! ============

// const div = document.querySelector("div")
// div.style.width = "150px"
// div.style.height = "150px"
// div.style.border = "1px solid black"

// div.addEventListener("mouseover", function(){
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)
//     const rgb = `rgb(${r}, ${g}, ${b})`;
//     div.style.backgroundColor = rgb

// })

// div.addEventListener("mouseout", function(){
//     div.style.backgroundColor = "white"
// })

// Написать цикл, который создаёт 5 дивов с цветами от rgb (128, 128, 0) до rgb (128, 128, 255)

//  const mainDiv = document.querySelector(".main")

//  for (let index = 0; index < 5; index++) {

//     const newDiv = document.createElement("div")
//     newDiv.style.width = "150px"
//     newDiv.style.height = "150px"

//     const b = Math.floor(Math.random() * 256)
//     const rgb = `rgb(128, 128, ${b})`;
//     newDiv.style.backgroundColor = rgb;
//     mainDiv.append(newDiv)

//  }

//=================== FORM = Заполнение формы с сохранинием =========================

// const form = document.querySelector("form")

// form.addEventListener("submit", function(event) {
//     event.preventDefault()
//     console.log("Submitted");

//     const productName = document.querySelector("#productName")
//     const productPrice = document.querySelector("#productPrice")

//     console.log("productName: " + productName.value);
//     console.log("productPrice: " + productPrice.value);
// })

// =============== array == Добавляем в масив переменные с консоли через поля для заполнений ====================

const form = document.querySelector("form")
const arr = []

form.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("Submitted");

    const productName = document.querySelector("#productName")
    const productPrice = document.querySelector("#productPrice")

    console.log("productName: " + productName.value);
    console.log("productPrice: " + productPrice.value);

    const product = {
        name: productName.value,
        price: productPrice.value
    }
    arr.push(product)

    console.log(arr)

    form.reset() // чистит поля для заполнений
})

//========================================================================

// const form = document.querySelector("form")
// const productsDiv = document.querySelector("#products")
// const products = []

// form.addEventListener("submit", function(event) {
//     event.preventDefault()

//     const productName = document.querySelector("#productName")
//     const productPrice = document.querySelector("#productPrice")

//     const product = {
//         name: productName.value,
//         price: productPrice.value
//     }
//     products.push(product)

//     const productCarElem = document.createElement("div")
//     const productTitleElem = document.createElement("h2")
//     const productPriceElen = document.createElement("p")
//     productPriceElen.innerText = productPrice.value
//     productTitleElem.innerText = productName.value
//     productCarElem.append(productTitleElem, productPriceElen)
//     productCarElem.classList.add("card")

//     productsDiv.append(productCarElem)

//     form.reset() // чистит поля для заполнений

// })

// написать функцию, которая получает название продукта и цену продукта и для названия создает h2, для цены создает
// p потом оборачивает их в новый див и возвращает его, название функции createProductCard

//пересмоореть последние 30 минут урока
