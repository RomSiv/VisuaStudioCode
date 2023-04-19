const users = [
  {
    id: 1,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    age: 55,
    progress: 10,
  },
  {
    id: 2,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    age: 73,
    progress: 40,
  },
  {
    id: 3,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    age: 15,
    progress: 25,
  },
  {
    id: 4,
    email: "anna.ivanova@reqres.in",
    first_name: "Anna",
    last_name: "Ivanova",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    age: 18,
    progress: 50,
  },
  {
    id: 5,
    email: "anton.petrov@reqres.in",
    first_name: "Anton",
    last_name: "Petrov",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    age: 12,
    progress: 80,
  },
];

//! Дан массив users.
//! 1. Для каждого объекта асформировтаь карточку пользователя с именем + фамилия и возрастом
//! 2. Стилизовать карточки (border, border-radius, padding). А из контейнера сделать flex-контейнер
//! 3. Добавить каждому пользователю почту и сделать ее кликабельной
//! 4. Добавить каждому пользователю аватар.
//! 5. Стилизовать аватар - сделать размеры 150х150px (без деформации изображения)
//! 6. Если возраст пользователя >= 18 и имя пользователя начинается на букву a/A,
//! то покрасить цвет заднего фона карточки в светло-розовый.
//! Всем остальным сделать цвет заднего фона карточки - светло-голубой
const container = document.querySelector(".container");

users.forEach(({ first_name, last_name, age, email, avatar, progress }) => {
  const cardEl = document.createElement("div");
  const nameEl = document.createElement("p");
  const ageEl = document.createElement("p");
  const emailEl = document.createElement("a");
  const imgEl = document.createElement("img");

  const progressContainer = document.createElement("div");
  const progressLine = document.createElement("div");
  const progressValue = document.createElement("p");

  progressContainer.classList.add("progress_container");
  progressLine.classList.add("progress_line");

  progressValue.innerText = `${progress}%`;
  nameEl.innerText = `Name: ${first_name} ${last_name}`;
  ageEl.innerText = `Age: ${age}`;
  //   imgEl.setAttribute("src", avatar);
  //   imgEl.setAttribute("alt", `${first_name} ${last_name}`);
  //? более краткая запись setAttribute

  imgEl.src = avatar;
  imgEl.alt = `${first_name} ${last_name}`;
  emailEl.innerText = email;
  emailEl.setAttribute("href", `mailto:${email}`);

  cardEl.classList.add("container_cards");
  imgEl.classList.add("image");

  progressContainer.append(progressLine, progressValue);
  cardEl.append(imgEl, nameEl, ageEl, emailEl, progressContainer);
  container.append(cardEl);

  cardEl.style.backgroundColor =
    age >= 18 && first_name[0].toLowerCase() === "a"
      ? (cardEl.style.backgroundColor = "green")
      : (cardEl.style.backgroundColor = "red");
});
