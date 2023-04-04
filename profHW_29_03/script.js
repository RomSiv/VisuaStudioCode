// 2. Дан массив с товарами. Для каждого товара создать карточку.
//Стилизовать карточку (title, price). Если товар есть на складе,
// то цвет заднего фона сделать зеленым. А если нет - то серым

const products = [
  {
    id: 1,
    title: 'Apple',
    price: 100,
    in_stock: true,
    photo: 'https://calorizator.ru/sites/default/files/imagecache/product_512/product/apple-1.jpg'
  },
  {
    id: 2,
    title: 'Orange',
    price: 200,
    in_stock: false,
    photo: 'https://i5.walmartimages.ca/images/Enlarge/234/6_r/6000191272346_R.jpg'
  },
  {
    id: 3,
    title: 'Kiwi',
    price: 150,
    in_stock: true,
    photo: 'https://static.libertyprim.com/files/familles/kiwi-large.jpg?1569271790'
  },
  {
    id: 4,
    title: 'Banana',
    price: 300,
    in_stock: false,
    photo: 'https://images.heb.com/is/image/HEBGrocery/000377497'
  },
  {
    id: 5,
    title: 'Pineapple',
    price: 400,
    in_stock: false,
    photo: 'https://img.freepik.com/free-photo/pineapple_144627-22187.jpg?w=2000'
  }
]

const container = document.querySelector(".card");
const imgElem = document.createElement('img')


products.forEach((products) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
<p class='img'> ${products.photo}</p>
<h2 style="font-size: 35px; font-family: monospace; color: red">Title: ${products.title}</h2>
<p class='price' style="font-size: 140%; color: white">price: ${products.price}</p>
<p class='in_stock'>in stock: ${products.in_stock}</p>
<p class='id'>id: ${products.id}</p>
`;

  container.append(card);

  card.style.backgroundColor = products.in_stock ? 'lightgreen' : 'lightgray';

  // if (products.in_stock === true) {
  //   card.style.backgroundColor = "green";
  // } else {
  //   card.style.backgroundColor = "gray";
  // }
});
