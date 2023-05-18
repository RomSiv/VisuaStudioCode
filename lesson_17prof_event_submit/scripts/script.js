const add_user_form = document.querySelector(".add_user_form");
const container = document.querySelector(".container");
const delete_all_btn = document.querySelector('.delete_all_btn') 
let users = [];



add_user_form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { firstname, age } = event.target;

  const user = {
    id: Date.now(),
    firstname: firstname.value,
    age: +age.value,
  };

  users.push(user);

  console.log(users);
render_cards(users)
  event.target.reset();
});

//! event.target - ссылка на форму в которой происходит событие



const render_cards = users => {
  container.innerText = "";
  users.forEach(({ firstname, age, id }) => {
    const cardElem = document.createElement("div");
    const nameElem = document.createElement("p");
    const ageElem = document.createElement("p");
    const cross_icon = document.createElement('span')
    nameElem.innerText = `Name: ${firstname}`;
    ageElem.innerText = `${age} age`;
    cross_icon.innerText = 'X';

    cross_icon.classList.add('cross_icon')

cross_icon.addEventListener('click', () => {
    users = users.filter(el => el.id !== id)
    render_cards(users)
})

    cardElem.append(nameElem, ageElem, cross_icon);
    container.append(cardElem);
  

});
};

delete_all_btn.addEventListener('click', () => {
    users = [];
    render_cards(users)
})