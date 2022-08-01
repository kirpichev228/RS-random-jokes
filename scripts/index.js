let url = ''
let max = null
const xhr = new XMLHttpRequest();

let philButton = document.querySelector('.philosophers-button')
let chuckButton = document.querySelector('.chuck-button')
let breakingButton = document.querySelector('.breaking-button')
let catButton = document.querySelector('.catButton')
let mainButton = document.querySelector('.central-button')
let photo = document.querySelector('.central-photo')
let paragraph = document.querySelector('.central-phrase')
let author = document.querySelector('.author')
let loading = document.querySelector('.loading')
let audio = document.querySelector('.audio')

function getPhrase () {
    let number = Math.floor(Math.random(max)*max)

    xhr.open('GET', url);
    xhr.responseType = 'json'
    xhr.onload = () => {
        paragraph.textContent = xhr.response[number]['text']
        author.textContent = xhr.response[number]['author']
    }
    xhr.onloadstart = () => {
        loading.classList.add('actived')
        audio.src = "assets/sounds/54209-колокольчики.m4a"
        play()
    }
    xhr.onloadend = () => {
        loading.classList.remove('actived')
        reset()
    }
    xhr.onerror = () => {
        console.log('Что то пошло не так!')
        audio.src = "assets/sounds/11871-rick-roll.mp3"
        play()
    }
    xhr.send();
}

philButton.addEventListener('click', () => {
    chuckButton.classList.remove('active')
    philButton.classList.add('active')
    breakingButton.classList.remove('active')
    catButton.classList.remove('active')
    paragraph.textContent = 'Generate something'
    author.textContent = 'Here --->'

    max = 1642
    url = 'https://type.fit/api/quotes'
    photo.src = 'assets/img/main-philosopher.jpg'
    mainButton.addEventListener('click', getPhrase)
})

chuckButton.addEventListener('click', () => {
    chuckButton.classList.add('active')
    philButton.classList.remove('active')
    breakingButton.classList.remove('active')
    catButton.classList.remove('active')
    paragraph.textContent = 'Generate something'
    author.textContent = 'Here --->'
    max = 574
    url = 'https://api.icndb.com/jokes'
    photo.src = 'assets/img/Chuck-1.jpg'
    mainButton.addEventListener('click', ()=> {
        let number = Math.floor(Math.random(max)*max)

        xhr.open('GET', url);
        xhr.responseType = 'json'
        xhr.onload = () => {
            paragraph.textContent = xhr.response.value[number]['joke']
            author.textContent = 'Chuck Norris'
        }
        xhr.onloadstart = () => {
            loading.classList.add('actived')
            audio.src = "assets/sounds/54209-колокольчики.m4a"
            play()
        }
        xhr.onloadend = () => {
            loading.classList.remove('actived')
            reset()
        }
        xhr.onerror = () => {
            console.log('Что то пошло не так!')
        }
        xhr.send();
    })
})

breakingButton.addEventListener('click', () => {
    chuckButton.classList.remove('active')
    philButton.classList.remove('active')
    breakingButton.classList.add('active')
    catButton.classList.remove('active')
    max = 70
    url = 'https://www.breakingbadapi.com/api/quotes'
    paragraph.textContent = 'Generate something'
    author.textContent = 'Here --->'

    photo.src = 'assets/img/breaking-main.jpg'
    mainButton.addEventListener('click', ()=> {
        let number = Math.floor(Math.random(max)*max)

        xhr.open('GET', url);
        xhr.responseType = 'json'
        xhr.onload = () => {
            paragraph.textContent = xhr.response[number]['quote']
            author.textContent = xhr.response[number]['author']
        }
        xhr.onloadstart = () => {
            loading.classList.add('actived')
            audio.src = "assets/sounds/54209-колокольчики.m4a"
            play()
        }
        xhr.onloadend = () => {
            loading.classList.remove('actived')
            reset()
        }
        xhr.onerror = () => {
            console.log('Что то пошло не так!')
        }
        xhr.send();
    })
})


const xxx = new XMLHttpRequest();
max = 11
let number = Math.floor(Math.random(max)*max+1)
url = 'https://anime-facts-rest-api.herokuapp.com/api/v1/naruto/' + number

xxx.open('GET', url);
xxx.responseType = 'json'
xxx.onload = () => {
    console.log(xxx.response['data']['fact'])
    paragraph.textContent = xxx.response['data']['fact']
    author.textContent = 'Naruto fact number ' + number
}
xxx.onerror = () => {
    console.log('Что то пошло не так!')
}
xxx.send();

catButton.addEventListener('click', () => {
    chuckButton.classList.remove('active')
    philButton.classList.remove('active')
    breakingButton.classList.remove('active')
    catButton.classList.add('active')
    url = 'https://aws.random.cat/meow'
    photo.src = 'assets/img/kitten.png'
    paragraph.textContent = 'Just kittens'
    author.textContent = 'Really cute (Ignore the proportions of the photos, please. Just a technical glitch)'
    mainButton.addEventListener('click', ()=> {
        xhr.open('GET', url);
        xhr.responseType = 'json'
        xhr.onload = () => {
            photo.src = xhr.response['file']
        }
        xhr.onloadstart = () => {
            loading.classList.add('actived')
            audio.src = "assets/sounds/54209-колокольчики.m4a"
            play()
        }
        xhr.onloadend = () => {
            loading.classList.remove('actived')
            reset()
        }
        xhr.onerror = () => {
            console.log('Что то пошло не так!')
        }
        xhr.send();
    })
})

function play () {
    audio.play()
}

function pause () {
    audio.pause()
}

function reset () {
    audio.pause()
    audio.currentTime = 0
}
