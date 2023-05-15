const container = document.querySelector('.container')

fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(date => console.log(date.posts))
  


//   const arrRend = arr => {
//     arr.forEach(({title, body, tags}) =>{
//         const cardEl = document.createElement('div')
// const titleEl = document.createElement('h1')
// const bodyEl = document.createElement('p')
// const tagsEl = document.createElement('p')

// titleEl.innerText = title;
// bodyEl.innerText = body;
// tagsEl.innerText = `Tags: ${tags}`;

// cardEl.append(titleEl, bodyEl, tagsEl)
// container.append(cardEl)
//  /






