const form = document.querySelector("form");
const input = document.querySelector("#new_item_input");
const list = document.querySelector("#todo_list");
const dateInput = document.querySelector("#new_date_input")
// form.addEventListener("submit", function (event) {
//   // создаём обработчик события
//   event.preventDefault(); // предотвращаем перезаргузку

//   const text = input.value; // создаём переменную и добавляем в неё значение переменной input

//   form.reset(); // чистим форму

//   console.log(text);
// });

//========================================================================

const todoItems = [];

function addItem(event) {
  event.preventDefault();
  let itemDate = dateInput.value
  let text = input.value;
  form.reset();
  text = text.trim(); //Метод trim убирает пробелы в начале и в конце строки

  if (text === "") {
    //таким образом можем сделать проверку на пустое значение
    alert("Error: empty value"); // показывает ошибку при введение неверного формата
    return;
  }



  const todoItem = {
    text: text,
    status: false,
  };

  todoItems.push(todoItem);
  updateList();
}

function itemRemoveHandler() {
  const index = event.target.dataset.index;
  todoItems.splice(index, 1);
}

function toogleStatusHandler(event) {
  const index = event.target.dataset.index; //data-index

  todoItems[index].status = !todoItems[index].status;

  updateList();
}

function updateList() {
  list.innerHTML = "";

  for (let index = 0; index < todoItems.length; index++) {
    const { text, status } = todoItems[index];
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");

    input.setAttribute("type", "checkbox");
    input.setAttribute("id", `ìtem_${index}`);
    input.setAttribute("data-index", index);
    input.checked = status;
    input.addEventListener("change", toogleStatusHandler);
    button.innerText = "Remove";

    label.innerText = text;
    label.setAttribute("for", `ìtem_${index}`);

    if (status) {
      label.style.textDecoration = "line-through";
    }

    button.setAttribute("date-index", index);
    button.setAttribute("data-index", index);
    button.classList.add("remove_item");
    button.addEventListener("click", itemRemoveHandler);
    
    // const index = event.target.dataset.index;
    // todoItems.splice(index, 1); // первый параметр индекс, второй показывает сколько элементов удаляем
li.setAttribute("data-date", date)
    // updateList();

    li.append(input, label, button);

    list.append(li);
  }
}

form.addEventListener("submit", addItem);

// const removeButtons = document.querySelectorAll(".remove_item")
// for (let index = 0; index < array.length; index++) {

// }
