//! 1. Написать функцию, которая принимает в качестве аргумента номер страницы, отправляет запрос по ссылке https://reqres.in/api/users?page={page_num} и выводит в консоль массив с пользователеями
//! 2. Написать функцию, которая из полученых даных отрисует карточки(фото+имя) и добавить их в контейнерю
//! 3. Добавить кнопки и настроить переключение страницы. По умолчанию при перезагрузке сьраницы прогружается первая страница.

const container = document.querySelector(".container");
// const left_btn = document.querySelector(".left_btn");
// const right_btn = document.querySelector(".right_btn");
const [left_btn, right_btn] = document.querySelectorAll('.btn button')

const getUsers = (page) => {
  fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res) => res.json())
    .then((json) => render(json.data));
};

const render = (users_arr) => {
  container.innerText = "";
  users_arr.forEach(({ avatar, first_name, last_name }) => {
    const card = document.createElement("div");
    const nameElem = document.createElement("p");
    const avatarElem = document.createElement("img");

    nameElem.innerText = `Name: ${first_name} ${last_name}`;
    avatarElem.src = avatar;
    avatarElem.alt = `${first_name} ${last_name}`;

    card.append(avatarElem, nameElem);
    container.append(card);
  });
};

getUsers(1);

left_btn.addEventListener("click", () =>  getUsers(1));
right_btn.addEventListener("click", () =>  getUsers(2));
