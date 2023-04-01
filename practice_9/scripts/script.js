const but = document.querySelector("button"); // привязываемся к кнопке
const body = document.querySelector("body");

// but.addEventListener("click", () => {
//     const isRed = body.classList.contains("red");
//   if (isRed) {
//     body.classList.add("blue");
//     body.classList.remove("red");
//   } else {
//     body.classList.add("red");
//     body.classList.remove("blue");
//   }

// }
// )
// but.addEventListener("click", () => console.log(body.style))
// console.log(body.classList.contains('red'));

// but.addEventListener("click", () => {
//   if (body.style.backgroundColor === "red") {
//     body.style.backgroundColor = "blue";
//   }else{
//     body.style.backgroundColor = "red";
//   }
// });


but.addEventListener("click", () => {
body.style.backgroundColor === 'red'
? body.setAttribute('style', 'backgroundColor : blue;') 
: body.setAttribute('style', 'backgroundColor : red;')
})