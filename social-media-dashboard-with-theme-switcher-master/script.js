const changeMode = document.querySelector('.change_mode')
const scroll = document.querySelector('.scroll')
const body = document.querySelector('body')
const cardContainer = document.querySelector('.card_container')
const secondCard = document.querySelector('.second_card')
const topBg = document.querySelector('.top_background');

changeMode.addEventListener('click', ()=>{
    changeMode.classList.toggle('open')
    body.classList.toggle('open')
    cardContainer.classList.toggle('open')
    secondCard.classList.toggle('open')
    topBg.classList.toggle('open')
    scroll.classList.toggle('move')
})
