//! 1. При клике на кнопку менять цвет заднего фона на цвет из массива ['pink', 'green', 'blue']

const colors = ["pink", "green", "blue"];
const change_color = document.querySelector(".change_color");
const body = document.body;
let index = 0;

change_color.addEventListener(
  "click",
  () => (body.style.backgroundColor = colors[index++ % colors.length])
);

//! 2. *При клике на кнопку менять цвет заднего фона на случайный

const random_color = document.querySelector(".random_color");

random_color.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const rgb = `rgb(${r}, ${g}, ${b})`;

  body.style.backgroundColor = rgb;
});
