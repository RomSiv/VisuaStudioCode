const container = document.querySelector(".ProjectsContent");
const url = "https://jsonplaceholder.typicode.com/photos";

const imagesPromise = fetch(url)
  .then((res) => res.json())
  .then((data) => data.slice(0, 10).map(({ url }) => url));

imagesPromise.then((images) => {
  images.forEach((image) => {
    const divImage = document.createElement("div");
    divImage.classList.add("ProjectsContent__item");
    divImage.style.backgroundImage = `url(${image})`;
    container.append(divImage);
  });
});