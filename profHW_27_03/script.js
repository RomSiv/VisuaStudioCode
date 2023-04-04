// ДЗ (массив users)

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

// 1. Сформировать новый массив, в который попадут только возраст пользователей => [28, 18, 32, 14, 54]

 const ageArray = users.map(el => el.age)
 console.log(ageArray);

 const ageArrayD = users.map(({age}) => age)
 console.log(ageArrayD);

// 2. Сформировать новый массив, в который попадет информация о каждом пользователе в формате 'Name: <firstname>, Age: <age>'

const InfoArray = users.map(el =>`Name: ${el.firstname}, Age: ${el.age}`)
console.log(InfoArray)

const InfoArrayD = users.map(({firstname, age}) =>`Name: ${firstname}, Age: ${age}`)
console.log(InfoArrayD)

// 3. Сформировать новый массив, в который попадут только те пользователи, чье имя начинается на I

const name_I_array = users.filter(el => el.firstname[0] === 'I')
console.log(name_I_array);

const name_I_arrayD = users.filter(({firstname}) => firstname[0] === 'I')
console.log(name_I_arrayD);

// ***
// 1. Сформировать новый массив, в который попадет информация о каждом совершеннолетнем пользователе в формате 'Name: <firstname>, Age: <age>'

const adultPerconArr = users.filter(el => el.age >=18).map(el => `Name: ${el.firstname}, Age: ${el.age}`)
console.log(adultPerconArr)

const adultPerconArrD = users.filter(({age}) => age >=18).map(({firstname, age}) => `Name: ${firstname}, Age: ${age}`)
console.log(adultPerconArrD)

// 2. Сформировать новый массив, в который попадут только активные и совершеннолетние пользователи

const activeAdultArr = users.filter(el => el.active === true && el.age >= 18)
console.log(activeAdultArr);

const activeAdultArrD = users.filter(({active, age}) => active === true && age >= 18)
console.log(activeAdultArrD);

// 3. Сформировать новый массив без пользователей, чье имя начинается на букву O

const oNameArr = users.filter(el => el.firstname[0] !== 'O').map(el => el)
console.log(oNameArr);

const oNameArrD = users.filter(({firstname}) => firstname[0] !== 'O').map(el => el)
console.log(oNameArrD);

// 4. Сформировать новый массив, в который попадут только имена активных и совершеннолетних пользователей в нижнем регистре

const activeAdultArrToLC = users.filter(el => el.active === true && el.age >= 18).map(el => el.firstname.toLowerCase())
console.log(activeAdultArrToLC);

const activeAdultArrDToLC_D = users.filter(({active, age}) => active === true && age >= 18).map(({firstname}) => firstname.toLowerCase())
console.log(activeAdultArrDToLC_D);

// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())

const sortArr = users.slice().sort((a, b) => a.age  - b.age)
console.log(users);
console.log(sortArr);


// 2. Найти сумму возрастов всех пользователей (.reduce())

const sumAge = users.reduce((sum, age) => sum + age.age, 0)
const sumAge1 = users.reduce((sum, {age}) => sum + age, 0)

console.log(sumAge);
console.log(sumAge1);
