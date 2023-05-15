//! 1. Отправить fetch-запрос по ссылке https://dummyjson.com/products/1
//! 2. Вывести полученные данные в консоль
//! 3. Отрисовать карточку товара (images, title, description, price)
//! 4. Стилизовать карточку товара

const container = document.querySelector('.container')



fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => render(json))


const render = json => {
    const {title, images, description, price} = json;

const cardElem = document.createElement('div')
const imgElem = document.createElement('img')
const titleElem = document.createElement('p')
const descriptionElem = document.createElement('p')
const priceElem = document.createElement('p')

imgElem.src = images[0];
imgElem.alt = `${title}`;
titleElem.innerText = `Title: ${title}`;
descriptionElem.innerText = description;
priceElem.innerText = `Price: $${price}`;

cardElem.append(imgElem, titleElem, descriptionElem, priceElem)
container.append(cardElem)

    }