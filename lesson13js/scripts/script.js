// DOM = Document Object Model

const pValue = document.querySelector("p"); //Получаем доступ к параграфу(в данном случае) и привязываем его к переменной)
console.log(pValue.innerText);
pValue.innerText = "Hello world!!"; //Меняем/добавляем содержимое в переменную с текстом
console.log(pValue.innerText);

const paragrafs = document.querySelectorAll("p"); //Получаем доступ ко все параграфам и привязываем их к переменной(Получаем коллекцию)
console.log(paragrafs);

for (let index = 0; index < paragrafs.length; index++) {
  console.log(paragrafs[index]);
}
