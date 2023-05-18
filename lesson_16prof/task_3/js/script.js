const container = document.querySelector('.container')


const getUser = id => {
fetch(`https://dummyjson.com/users/${id}`)
.then(res => res.json())
.then(json => render(json))
}

const render = ({firstName, lastName, maidenName, email, address}) => {
const cardElem = document.createElement('div')
const nameElem = document.createElement('p')
const userNameElem = document.createElement('p')
const mailElem = document.createElement('a')
const adresElem = document.createElement('p')

nameElem.innerText = `Name: ${firstName} ${lastName}`
userNameElem.innerText = `Nick name: ${maidenName}`
mailElem.innerHTML = email
mailElem.setAttribute("href", `mailto:${email}`);
adresElem.innerText = address

cardElem.append(nameElem, userNameElem, mailElem, adresElem)
container.append(cardElem)

}

getUser(1)