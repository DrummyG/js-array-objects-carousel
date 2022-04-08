function crea(){
    const carousel = [
        {
            img: '01',
            città: 'Amsterdam',
            titolo: 'Lorem Ipsium'
        },
        {
            img: '02',
            città: 'Svizzera',
            titolo: 'Vieni qua'
        },
        {
            img: '03',
            città: 'Londra',
            titolo: 'Lorem Ipsium'
        },
        {
            img: '04',
            città: 'Costantinopoli',
            titolo: 'Vieni qua'
        },
        {
            img: '05',
            città: 'Hawaii',
            titolo: 'Lorem Ipsium'
        }
    ]
    const slider = document.getElementById('slider')
    const aside = document.getElementById('aside')
    
    for (i = 0; i < carousel.length; i++) {
        single(carousel[i],slider,aside)
    }
}

function single(item,slide,aside){
    let card = document.createElement('div')
    card.setAttribute('class', 'box')
    if(i == 0){
        card.setAttribute('class', 'box show')   
    }
    card.innerHTML= `
        <img src="img/${item.img}.jpg" alt="">
        <div class="title ${i == 0 ? 'show':''}">
            <p>${item.città}</p>
            <p class="sub">${item.titolo}</p>
        </div>
        `
    let miniCard = document.createElement('div')
    miniCard.setAttribute('class', 'filler')
    if(i == 0){
        miniCard.setAttribute('class', 'filler show')   
    }
    miniCard.innerHTML = `
        <img src="img/${item.img}.jpg" alt="">
        `
    slide.append(card)
    aside.append(miniCard)
}

function remove(filler,city,box){
    filler[counter].classList.remove('show')
    city[counter].classList.remove('show')
    box[counter].classList.remove('show')
}

function add(filler,city,box){
    filler[counter].classList.add('show')
    city[counter].classList.add('show')
    box[counter].classList.add('show')
}

crea()

// costanti per l'evento
const box = document.getElementsByClassName('box')
const filler = document.getElementsByClassName('filler')
const city = document.getElementsByClassName('title')
function slideDown() {
    // rimuovo la classe attivante
    remove(filler,city,box)
    // aumento il contatore
    counter = counter + 1
    // if di controllo
    if (counter == 5) {counter = 0}
    // aggiungo la classe attivante
    add(filler,city,box)
}
let counter = 0
const down = document.querySelector('.fa-angle-down')
down.addEventListener('click', slideDown)
const effetto = setInterval(slideDown, 5000)

const up = document.querySelector('.fa-angle-up')
up.addEventListener('click', function () {
    remove(filler,city,box)
    counter = counter - 1
    if (counter == -1) {counter = 4}
    add(filler,city,box)
})

document.getElementById('button').addEventListener('click', () =>{clearInterval(effetto)})
