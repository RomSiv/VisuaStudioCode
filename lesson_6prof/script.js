// 2. Написать функцию, которая принимает массив с числами и возвращает новый массив с положительными числами, умноженными на 2


const greetings = ['hello', 'hello, my friend', 'good morning', 'how are you doing?', 'good afternoon'];

const newArr = arr => arr.filter(el => el.length > 6 && el[0].toLowerCase() === 'h')

console.log(newArr(greetings))


// 2. Написать функцию, которая принимает массив с числами и возвращает новый массив с положительными числами, умноженными на 2
const numbers = [3, -8, 9, -1, 80, -33]; // [6, 18, 160]
const newNumArr = arr => arr.filter(el => el > 0).map(el => el * 2)

console.log(newNumArr(numbers))


const doublePositiveNums = arr => {
    const pos_nums = arr.filter(el => el > 0)
    return pos_nums.map(el => el * 2)
  }

  console.log(doublePositiveNums(numbers))


  // ОБЪЕКТЫ

const user = {
    firstname: 'Nelli',
    'first name': 'Nelli',
    lastname: 'Efremyan',
    age: 28,
    active: true,
    address: {
      country: 'Armenia',
      city: 'Yerevan'
    },
    skills: ['JS', 'SQL']
  }

  console.log(user.firstname, user.age)
  console.log(user.lastname)
  console.log(user.address)
  console.log(user.skills)
  console.log(user)

  console.log(user['first name']) // используется есди ключ содержить пробел(в таком случае ключ тоже пишется в кавычках) 

  const key = 'firstname' // либо когда ключ завёрнут в переменную
  console.log(user[key])

  const getValue = (obj, key) => obj[key]

  console.log(getValue(user, 'firstname'))
  console.log(getValue(user, 'age'))
  console.log(getValue(user, 'address'))

  const users = [
    {
      id: 1,
      firstname: 'Anton',
      age: 28,
      active: true
    },
    {
      id: 2,
      firstname: 'Irina',
      age: 18,
      active: true
    },
    {
      id: 3,
      firstname: 'Olga',
      age: 32,
      active: false
    },
    {
      id: 4,
      firstname: 'Danila',
      age: 14,
      active: true
    },
    {
      id: 5,
      firstname: 'Ivan',
      age: 54,
      active: false
    }
  ]

users.forEach(el => console.log(el.firstname));

  const allNames = users.map(el => el.firstname)

  console.log(allNames)

//  Вывести в консоль информацию о каждом пользователе в формате 'Name: <name>, Age: <age>'

  users.forEach(el => console.log(`Name: ${el.firstname}, age: ${el.age}`));

  // Диструктуризация 

  const {firstname, age} = user;

  console.log(firstname);
  console.log(age);
  

  users.forEach(el => {
    const {firstname, age} = el;
    console.log(`Name: ${firstname}, age: ${age}`);
  })


  users.forEach(({firstname, age}) => console.log(`Name: ${firstname}, age: ${age}`))

  // 3. Вывести в консоль все навыки пользователя
// 'JS'
// 'SQL'

user.skills.forEach(el => console.log(el));

// 3. Сформировать новый массив, в который попадут только совершеннолетние пользователи => [{}, {}, {}, {}]


const adult_users = users.filter(el => el.age >= 18)
const adultUsers =  users.filter(({age}) => age >= 18)


console.log(adult_users);
console.log(adultUsers);


// 4. Сформировать новый массив, в который попадут только имена пользователей => ['Anton', 'Irina', 'Olga', 'Danila', 'Ivan']

const allUsersNames = users.map(el => el.firstname)
const allUsersNamesD = users.map(({firstname}) => firstname)

console.log(allUsersNames);
console.log(allUsersNamesD);
  

