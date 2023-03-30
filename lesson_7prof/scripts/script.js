const greeting = document.querySelector('.greeting')
const container = document.querySelector('.container')

// console.log(greeting)

// greeting.style.color = 'rgb(139,0,0)';
// greeting.style.fontSize = '30px';
// greeting.style.backgroundColor = 'green';

// const par = document.createElement('p');
// const par2 = document.createElement('p');

// par.innerText = 'Hello, Less';
// par2.innerText = 'Hello, kitty';

// par.style.color = 'pink'
// par.style.fontSize = '80px'
// par2.style.color = 'blue'
// par2.style.fontSize = '50px'

// container.append(par, par2); // Важен порядок добавления элемента

const cart = document.createElement('div')
const par_name = document.createElement('p')
const par_price = document.createElement('p')

container.append(cart)
cart.append(par_name, par_price)

par_name.innerText = 'Title: Avicularia Versicolor'
par_price.innerText = 'Price: 70zl'

cart.style.border = '1px solid black'
cart.style.padding = '10px';
cart.style.width = '200px'
cart.style.textAlign = 'center'
cart.style.borderRadius = '20px'


