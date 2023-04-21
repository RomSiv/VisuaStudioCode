const input_login = document.querySelector('.login')
const input_passrord = document.querySelector('.password')

const trueLogin = 'r.sivets85@gmail.com'
const truePassword = 'FanatNokia23'

document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        if(input_login.value === trueLogin && input_passrord.value === truePassword){
            console.log('Вошли');
            window.location.href = 'http://127.0.0.1:5500/practice_11/enterPage.html';
        }else{
            console.log('Не вошли');
        }
    }
  });
