//! 1. При клике на кнопку меняется цвет текста на зеленый

const clickBtn = document.querySelector(".click_btn");
const text = document.querySelector(".text");

clickBtn.addEventListener("click", () => (text.style.color = "green"));

//! 2. При клике на кнопку в div.container добавляется параграф

const addParBtn = document.querySelector(".add_par_btn");
const parContainer = document.querySelector(".container ");

addParBtn.addEventListener("click", () => {
  const new_par = document.createElement("p");
  new_par.innerText = "Hello, world";
  parContainer.append(new_par);
});

//! 3. Создать два параграфа. При клике на первый параграф, у второго меняется цвет текста на красный и увеличивается шрифт до 20px. При клике на второй параграф, у первого меняется цвет заднего фона на зеленый и цвет текста на белый

const clickPar_1 = document.querySelector(".par_1");
const clickPar_2 = document.querySelector(".par_2");

clickPar_1.addEventListener("click", () => {
  clickPar_2.style.color = "red";
  clickPar_2.style.fontSize = "20px";
});

clickPar_2.addEventListener("click", () => {
  clickPar_1.style.backgroundColor = "green";
  clickPar_1.style.color = "white";
});

//! 4. При клике на кнопку цвет текста меняется на красный. При повторном клике обратно на черный

const change_color_btn = document.querySelector(".change_color_btn");
const change_color_text = document.querySelector(".change_color_text");

change_color_btn.addEventListener("click", () => {
  change_color_text.style.color === "black"
    ? (change_color_text.style.color = "red")
    : (change_color_text.style.color = "black");
});

//? change_color_btn.addEventListener('click', () => {
//?     change_color_text.style.color = change_color_text.style.color === 'black' ? 'red' : 'black'
//? })

//! 2 способ через .toggle()
//? change_color_btn.addEventListener('click', () => {
//? change_color_text.classList.toggle('color')
//? })

//! 5. При клике на кнопку цвет текста меняется на синий и размер шрифта увеличиваться до 30px. При повторном клике возращать всё, как было

const change_styles_btn = document.querySelector('.change_styles_btn');
const change_styles_text = document.querySelector('.change_styles_text');

//? change_styles_btn.addEventListener('click', () => {
//?   change_styles_text.classList.toggle('styles')
//? });

//! 6. При клике на кнопку содержимое инпута выводится в консоль

const show_btm = document.querySelector(".show_btm");
const show_input = document.querySelector(".show_input");

show_btm.addEventListener("click", () => {
  console.log(show_input.value);
  show_input.value = ""; //! Сбрасывает форму после энтера
});

//! 7. При клике на кнопку содержимое инпута меняется на !!!

const show_btm_2 = document.querySelector(".show_btm_2");
const show_input_2 = document.querySelector(".show_input_2");

show_btm_2.addEventListener("click", () => {
  show_input_2.value = "!!!";
});

//! 8. При клике на кнопку менять содержимое инпута на значения из массива


const symbols = ['...', '###', '$$$', '+++']
let index = 0;

const array_btm = document.querySelector('.array_btm')
const array_value = document.querySelector('.array_value')


array_btm.addEventListener('click', () =>{
  array_value.value = symbols[index++ % symbols.length]
})


//! 9. При клике на кнопку изменять цвет фона на черный. При повторном клике вернуть белый фон

const bgc_btm = document.querySelector('.bgc_btm')
const body = document.body

//? bgc_btm.addEventListener('click', () => bgc_btm.style.backgroundColor = 
//? bgc_btm.style.backgroundColor === 'white' ? 'black' : 'white')

bgc_btm.addEventListener('click', () => body.style.backgroundColor = 
body.style.backgroundColor === 'white' ? 'black' : 'white')