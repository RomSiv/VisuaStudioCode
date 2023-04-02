// 2. Дан массив с товарами. Для каждого товара создать карточку.
//Стилизовать карточку (title, price). Если товар есть на складе,
// то цвет заднего фона сделать зеленым. А если нет - то серым

const products = [
  {
    id: 1,
    title: "Apple",
    price: 100,
    in_stock: true,
  },
  {
    id: 2,
    title: "Orange",
    price: 200,
    in_stock: false,
  },
  {
    id: 3,
    title: "Kiwi",
    price: 150,
    in_stock: true,
  },
  {
    id: 4,
    title: "Banana",
    price: 300,
    in_stock: false,
  },
];

const container = document.querySelector(".card");


products.forEach((products) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
<h2 style="font-size: 35px; font-family: monospace; color: red">Title: ${products.title}</h2>
<p class='price' style="font-size: 140%; color: white">price: ${products.price}</p>
<p class='in_stock'>in stock: ${products.in_stock}</p>
<p class='id'>id: ${products.id}</p>
`;

  container.append(card);
  card.style.border = "5px solid black";
  card.style.padding = "5px";
  card.style.margin = "5px";
  card.style.width = "200px";
  card.style.textAlign = "center";
  card.style.borderRadius = "20px";

  if (products.in_stock === true) {
    card.style.backgroundColor = "green";
  } else {
    card.style.backgroundColor = "gray";
  }
});
