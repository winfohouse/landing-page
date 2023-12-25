let imageContener = document.querySelector("#ProDet > div.display > div > img")
let PhotoDiv = document.querySelector('.PhotoDiv')
let spanContener = document.querySelector("#ProDet > .options")
let spanImg = spanContener.querySelectorAll('span')
let cards = Array.from(document.querySelector('.cards').children)

// Observer
let Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.isIntersecting && entry.target.classList.add('animation')
    })
})

// options images animation
let i = 0
let optionsImagesAnimation = setInterval(() => {
    let span = spanImg[i]
    let img = span.querySelector('img').src
    imageContener.src = img
    spanImg.forEach(span => span.classList.remove('active'))
    span.classList.add('active')
    i < (spanImg.length - 1) ? i++ : i = 0
}, 2500);

// options images cick hendel and remove animetion
spanImg.forEach(span => {
    span.addEventListener('click', () => {
        clearInterval(optionsImagesAnimation);
        let img = span.querySelector('img').src
        imageContener.src = img
        spanImg.forEach(span => span.classList.remove('active'))
        span.classList.add('active')
    })
})

// cards click hendeler
cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(card => card.classList.remove('active'))
        card.classList.add('active')
    })
})

// fix CopyrightDate
let CopyrightDate = document.getElementById('CopyrightDate')
CopyrightDate.innerHTML = new Date().getFullYear()

// set observer wotcher
Observer.observe(PhotoDiv)
cards.forEach(card=> Observer.observe(card))
