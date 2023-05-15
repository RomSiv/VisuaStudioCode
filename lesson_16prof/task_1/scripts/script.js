//! 1. Написать функцию, принимающую в качестве аргумента id (число), отправляющую fetch-запрос по ссылке https://jsonplaceholder.typicode.com/users/{id} и выводящую полученные данные в консоль

const container = document.querySelector(".container");


let id_num = 1

const getUser = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((json) => render(json));
};

getUser(2);


const render = (json) => {
  const cardElem = document.createElement("div");
  const nameElem = document.createElement("p");
  const phoneElem = document.createElement("p");

  nameElem.innerText = `${json.name}`;
  phoneElem.innerText = `${json.phone}`;

  cardElem.append(nameElem, phoneElem);
  container.append(cardElem);
};

const btn_minus = document.querySelector(".btn_minus")
const btn_plus = document.querySelector('.btn_plus')

btn_minus.addEventListener('click',  () => {
       if(id_num === 1){
        id_num = 11
       }
    getUser(--id_num)
})

btn_plus.addEventListener('click',  () => {
    if(id_num === 10){
        id_num = 0
       }
        getUser(++id_num)
})