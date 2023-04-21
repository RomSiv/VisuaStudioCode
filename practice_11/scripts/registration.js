//? 0. Новый js файл для signup страницы подключить где будет логика js для регистрации
//? 1. Найти все инпуты
//! 2. Как проверить email ли введен? - проверить строку на наличие собачки
//? 3. Проверить совпадает ли пароль и проверка пароля - сравнить значения пароля и проверки пароля
//! 4. Проверка длины пароля - не меньше 6
//! 5. Проверка наличия знаков ! или _
//! 6. По результату - если все окей -> прыгаем на гифку, если не окей -> alert(сообщение ошибки)

const input_login = document.querySelector('.login')
const input_passrord = document.querySelector('.password')
const input_check_pass = document.querySelector('.check_pass')

const trueLogin = 'r.sivets85@gmail.com'
const truePassword = 'FanatNokia23'

document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        if(input_login.value === trueLogin && input_passrord.value === truePassword){
            console.log('Вошли');
            window.location.href = 'http://127.0.0.1:5500/practice_11/enterPage.html';
        }else{
            alert('что-то пошло не так :(');
        }
    }
  });