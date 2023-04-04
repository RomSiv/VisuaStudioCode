const logoImg = document.createElement('img')
const wrapper = document.createElement('div')
const input = document.createElement('input')
const par = document.createElement('p')

logoImg.setAttribute('src', 'https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png')
logoImg.setAttribute('alt', 'Logo of Google')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Поиск по имени')
input.setAttribute('class', 'input-search')

wrapper.append(logoImg, input)
document.body.append(wrapper)
wrapper.classList.add('wrapper')

input.addEventListener("click", () => {
    par
})


