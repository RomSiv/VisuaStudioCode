const form = document.querySelector("form")
const cardsSelection = document.querySelector(".cards-section")

const addCardButton = document.querySelector("#add_card")
const removeCardsButton = document.querySelector("#remove_cards")
const questionInput = document.querySelector("#question")
const answerInput = document.querySelector("#answer")

const flashCards = []
form.addEventListener("submit", function(event){
    event.preventDefault()
})

addCardButton.addEventListener("click", function(){
    const questionText = questionInput.value
    const answerText = answerInput.value
    form.reset

    const fleshcard = {
    qeustion: questionText,
    answer: answerText
    }

    flashCards.push(fleshcard)
})

console.log(flashCards)