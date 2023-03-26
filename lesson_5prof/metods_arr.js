// .forEach - выполняет указаную функцию для каждого элемента массива, ничего не возвращает
// .map - выполняет указаную функцию для каждого элемента массива
// .filter - возвращает новый массив, в который попадают те элементы, которые прошли указаную проверку

const numbers = [4, 6, 1, 6, 7, 23, 54, 1];
const numbers_pow2 = numbers.map((el) => el ** 3);

console.log(numbers_pow2);

// 2. Сформировать новый массив, в который попадут все последние цифры => [4, 6, 1, 7, 9, 5, 7, 3, 7]

const numbers1 = [4, 6, 1, 17, 9, 15, 27, 43, 7];
const numbers_forEach = [];

numbers1.forEach((el) => numbers_forEach.push(el % 10));

const numbers_map1 = numbers1.map((el) => el % 10);

console.log(numbers_forEach);
console.log(numbers_map1);

// 3. Сформировать новый массив, в который попадут все элементы из исходного массива. Если длина элемента меньше 6 (<), то добавить к этой строке 1 => ['hello1', 'apple1', 'orange', 'good morning', 'danke1', 'duck1', 'dinosaure']

const strings = [
  "hello",
  "apple",
  "orange",
  "good morning",
  "danke",
  "duck",
  "dinosaure",
];

const strings_forEach = [];
strings.forEach((el) => {
  if (el.length < 6) {
    strings_forEach.push(el + "1");
  } else {
    strings_forEach.push(el);
  }
});

const strings_map = strings.map((el) => (el.length < 6 ? el + "1" : el));

console.log(strings_forEach);
console.log(strings_map);

// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива. Если число четное, то поделить его на 2, а если нечетное - умножить на 2

const numbers_new = [];
numbers1.forEach((el) => numbers_new.push(el % 2 === 0 ? el / 2 : el * 2));

const numbers_map3 = numbers1.map((el) => (el % 2 === 0 ? el / 2 : el * 2));

console.log(numbers_map3);
console.log(numbers_new);

// 5. Дан массив с разными типами данных. Сформировать новый массив - если элемент является числом, то заменить его на строку 'number' => ['number', 'hello', true, 'hi', 'number', 'number', false]

const arr = [3, "hello", true, "hi", 7, 10, false];

const arr_new = arr.map((el) => (typeof el === "number" ? "number" : el));

console.log(arr_new);

// 6. Дан массив с числами. Сформировать новый массив - если число меньше 0, то вернуть в массив 'negative'. А если больше 0 - 'positive' => ['positive', 'negative', 'positive', 'negative', 'negative', 'positive']

const nums = [3, -9, 100, -7, -4, 33];
const negative_arr = nums.map((el) => (el > 0 ? "positive" : "negative"));

console.log(negative_arr);

const filtered_strings = strings.filter(el => el[0].toLowerCase() === 'd');
console.log(filtered_strings)

// 8. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов

const new_arr1 = strings.filter(el => el.length > 7) 
console.log(new_arr1)

// 9. Дан массив строк. Используйте метод map для преобразования каждой строки в новую строку, которая будет содержать ту же строку в верхнем регистре

const toUpperCaseArr = strings.map(el => el.toUpperCase())
console.log(toUpperCaseArr)

// 10. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, в котором каждое число возведено в квадрат.

const new_f = arr => arr.map(el => el ** 2)
console.log(new_f([1, 2, 3 ,4]))
