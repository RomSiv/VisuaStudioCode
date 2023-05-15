const btn = document.querySelector(".button");
const addBtn = document.querySelector(".add_btn");

// fetch("http://localhost:3000/users")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

btn.addEventListener("click", () => {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((json) => console.log(json));
});

addBtn.addEventListener("click", () => {
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
"Content-Type": "application/json"
        },
        body: JSON.stringify({id: 3, name: "Alex"})
    })
      
  });

