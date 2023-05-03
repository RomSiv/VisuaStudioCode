const container = document.querySelector('.container')

fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(date => render(date))

const render = arr => {
    arr.forEach(({title, albumId, thumbnailUrl}) => {

if([3, 7, 43, 59, 32, 94].includes(albumId)){

const cardElem = document.createElement('div')
const titleElem = document.createElement('p')
const imgElem = document.createElement('img')
const idElem = document.createElement('p')

titleElem.innerText = title;
idElem.innerText = `Album ID: ${albumId}`;
imgElem.src = thumbnailUrl;
imgElem.alt = `${title}`;

imgElem.classList.add("image");


cardElem.append(imgElem, titleElem, idElem)
container.append(cardElem)
}
    })
}