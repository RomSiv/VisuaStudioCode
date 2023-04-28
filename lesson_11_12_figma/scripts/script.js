const catygory_flex_block = document.querySelector("#catygory_flex_block");

const catygory_flex_date = [
  {
    id: 1,
    category: "Women's",
    img: "media/women.png",
  },
  {
    id: 2,
    category: "Mans's",
    img: "media/man.png",
  },
  {
    id: 3,
    category: "Kids",
    img: "media/child.png",
  },
];

catygory_flex_date.forEach(({ category, img }) => {
  const cartElem = document.createElement("div");
  const categoryElem = document.createElement("p");
  const imgElem = document.createElement("div");

  categoryElem.innerText = category;
  imgElem.style.backgroundImage = `url('${img}')`;
  cartElem.classList.add("category_card");

  cartElem.append(imgElem, categoryElem);
  catygory_flex_block.append(cartElem);
});

const new_arrivals_block = document.querySelector(".new_arrivals_conteiner");
const new_arrivals_date = [
  {
    id: 1,
    img: "media/im1.png",
    title: "Black and white sport cap",
    price: "18.15",
  },
  {
    id: 2,
    img: "media/im2.png",
    title: "Metal bridge sunglasses",
    price: "89.95",
  },
  {
    id: 3,
    img: "media/im3.png",
    title: "Green baby romper",
    price: "20.40",
  },
  {
    id: 4,
    img: "media/im4.png",
    title: "Mid-rise slim cropped fit jeans",
    price: "40.00",
  },
  {
    id: 5,
    img: "media/im5.png",
    title: "Red dangle earrings",
    price: "29.95",
  },
  {
    id: 6,
    img: "media/im6.png",
    title: "Baby shoes with laces",
    price: "30.60",
  },
];

new_arrivals_date.forEach(({ img, title, price }) => {
  const new_arrivals_date_elem = document.createElement("div");
  const imgEl = document.createElement("div");
  const titleEl = document.createElement("p");
  const priceEl = document.createElement("p");
  const heardEl = document.createElement("p");

  imgEl.style.backgroundImage = `url('${img}')`;
  titleEl.innerText = title;
  priceEl.innerText = `$${price}`;
  imgEl.append(heardEl);

  new_arrivals_date_elem.classList.add("new_arrivals");
  titleEl.classList.add("title_el");
  priceEl.classList.add("price_el");
  heardEl.classList.add("fa-regular");
  heardEl.classList.add("fa-heart");
  heardEl.classList.add("heardElem");

  heardEl.addEventListener("click", () => heardEl.classList.toggle("liked"));

  new_arrivals_date_elem.append(imgEl, titleEl, priceEl);
  new_arrivals_block.append(new_arrivals_date_elem);
});

const grid_baner = document.querySelector("#grid_baner");

const reklama = [
  {
    id: 1,
    img: "media/image.png",
    sub_title: "Summer Collections",
    title: "Sale Up to 70%",
    btn: "Explore new prices",
  },
  {
    id: 2,
    img: "media/image-2.png",
    sub_title: "Deal of the week",
    title: "Stay Warm With Our New Sweaters",
    btn: "Shop now",
  },
  {
    id: 3,
    img: "media/image-3.png",
    sub_title: "New collection",
    title: "Shoes & Bags autumn / winter 2020",
    btn: "See offers",
  },
  {
    id: 4,
    img: "media/image_4.png",
    sub_title: "For All new Email Subscribers",
    title: "Get 5% Off & Free Delivery",
  },
];

reklama.forEach(({ img, title, sub_title, btn }) => {
  const cards = document.createElement("div");
  const sub_titleElem = document.createElement("p");
  const titleElem = document.createElement("h3");
  const btnElem = document.createElement("button");

  sub_titleElem.innerText = sub_title;
  titleElem.innerText = title;
  btn === undefined ? '' : btnElem.innerText = btn

  cards.style.backgroundImage = `url(${img})`;
  cards.classList.add("img_grip");
  cards.append(titleElem, sub_titleElem, btnElem);
  grid_baner.append(cards);
});
