const books = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      genre: 'Southern Gothic',
      rating: 4.3,
      image: 'https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
    },
    {
      id: 2,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      genre: 'Modernist',
      rating: 4.2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWX1IjZd0kIYQJ_KmIhHfELk4ScKlmIrqtTw&usqp=CAU'
    },
    {
      id: 3,
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel Garcia Marquez',
      year: 1967,
      genre: 'Magical Realism',
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahgNQH0f46mvH0cm65GitzCglxeInTYUa2g&usqp=CAU'
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      genre: 'Romantic',
      rating: 4.4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-kmiVQd9rwmO6OkO1ZeBT9lUfQAaYFOgBw&usqp=CAU'
    }
  ];
  


  //! Задание 1: Отобразить список книг на странице в виде карточек
  //! Сделать так, чтобы при клике на карточку открывалась страница с подробной информацией о книге
  
//? привязываемся к диву
const container_cards = document.querySelector('.container_cards')

//? создаём функцию, которая проходиться по массиву методом forEach и деструктуризируем аргументы.
 books.forEach(({title, author, year, genre, rating, image}) => {

//? создаём переменные, которые в себе содержат создание элемента
const cardElem = document.createElement('div')
const titleElem = document.createElement('p')
const autorElem = document.createElement('p')
const yearElem = document.createElement('p')
const genreElem = document.createElement('p')
const raitingElem = document.createElement('p')
const imgElem = document.createElement('img')

//? заполняем карточку
titleElem.innerText = `Title: ${title}`
autorElem.innerText = `Author: ${author}`
yearElem.innerText = `Year: ${year}`
genreElem.innerText = `Genre: ${genre}`
raitingElem.innerText = `Rating: ${rating}`
imgElem.setAttribute('src', image)
imgElem.setAttribute('alt', `${title}, ${author}`)

cardElem.classList.add('container')

//? Выравниваем картинки
imgElem.style.width = '80%';
imgElem.style.height = 'auto';

//? добавляем элементы в див
cardElem.append(imgElem, titleElem, autorElem, yearElem, genreElem, raitingElem)

//? добавляем див в боди
container_cards.append(cardElem)


 })


  
  // Задание 2: Отобразить список книг в виде таблицы
  // Сделать так, чтобы можно было отсортировать список по году издания или по рейтингу книги
  
  // Задание 3: Отобразить на странице список авторов книг
  // Сделать так, чтобы можно было выбрать автора и отфильтровать список книг по выбранному автору
  
  // Задание 4: Реализовать функционал добавления новой книги в список
  // Сделать так, чтобы при добавлении новой книги она отображалась на странице с остальными книгами
  
  // Задание 5: Реализовать функционал удаления книги из списка
  // Сделать так, чтобы при удалении книги она исчезала из списка на странице