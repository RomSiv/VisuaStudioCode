
const container = document.querySelector('.container')

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(date => render(date.products))

  const render = arr => {
    arr.forEach(({images, title, price, rating}) => {

if(price >= 500){
const cardElem = document.createElement('div')
const titleElem = document.createElement('p')
const imgElem = document.createElement('img')
const priceElem = document.createElement('p')

titleElem.innerText = title;
priceElem.innerText = `Price: ${price}`;
imgElem.src = images;
imgElem.alt = `${title}`;

cardElem.style.backgroundColor = rating >= 4.5 ? 'lightgreen' : 'lightyellow'


cardElem.append(imgElem, titleElem, priceElem)
container.append(cardElem)
}
    })
}