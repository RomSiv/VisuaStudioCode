const add_workers_form = document.querySelector(".add_workers_form");
const workers_container = document.querySelector(".workers_container");

let all_workers = [];

add_workers_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { firstname, lastname, age, avatar, email } = e.target;

  const worker = {
    id: Date.now(),
    firstname: firstname.value,
    lastname: lastname.value,
    age: +age.value,
    avatar: avatar.value,
    email: email.value,
  };

  all_workers.push(worker);
  render_cards(all_workers);
  e.target.reset();
});

const render_cards = (workers) => {
  workers_container.innerText = "";
  workers.forEach(({ id, firstname, lastname, age, avatar, email }) => {
    const cardElem = document.createElement("div");
    const nameElem = document.createElement("p");
    const ageElem = document.createElement("p");
    const avatarElem = document.createElement("img");
    const emailElem = document.createElement("a");

    nameElem.innerText = `Name: ${firstname} ${lastname}`;
    ageElem.innerText = `Age: ${age}`;
    avatarElem.src = avatar;
    avatarElem.alt = `${"firstName"} ${"lastName"}`;
    emailElem.innerHTML = email;
    emailElem.setAttribute("href", `mailto:${email}`);

    cardElem.append(nameElem, ageElem, avatarElem, emailElem);
    workers_container.append(cardElem);
  });
};
