//! 1. Отправить запрос по ссылке https://dummyjson.com/users и получить массив с данными о пользователях
//! 2. Из полученных данных отрисовать карточки пользователей (аватар, имя + фамилия, возраст)
//! 3. Стилизовать карточки + сделать из контейнера грид


const container = document.querySelector('.container')
const button = document.querySelector('.sort')

let users = []

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then(json => render(json.users));

    const render = arr => {
        arr
        .slice()
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
        .forEach(({ image, firstName, lastName, age}) => {

const cardElem = document.createElement('div')
const nameElem = document.createElement('p')
const ageElem = document.createElement('p')
const avatarElem = document.createElement('img')


avatarElem.src = image;
avatarElem.alt = `${'firstName'} ${'lastName'}`;
nameElem.innerText = `Name: ${firstName} ${lastName}`
ageElem.innerText = `Age: ${age}`;


cardElem.classList.add('card')




cardElem.append(avatarElem, nameElem , ageElem)
container.append(cardElem)
  })}