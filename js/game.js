const grid = document.querySelector('.grid')
const player = document.querySelector('.player')
const tempo = document.querySelector('.tempo')
const minuto = document.querySelector('.minuto')

//Arrey com as imagens
const personagens = [
    'biblia',
    'cordeiro',
    'cruz',
    'estrelaDavi',
    'jardim',
    'nascimento',
    'pao',
    'pomba',
    'tabuas',
    'templo',
]

// Função para criar elemento para usar na função de criar criarCard
const criarElemento = (tag, classNome) => {
    const element = document.createElement(tag)
    element.className = classNome
    return element
}

//varias para as duas cartas que serão viradas
let card1 = ''
let card2 = ''

//Função para o fim do jogo
const endGame = () => {
    const cardDesabilit = document.querySelectorAll('.cardDesabilit')

    if (cardDesabilit.length == 20) {
        clearInterval(this.loop2)
        clearInterval(this.loop1) //para a contagem
        alert(`Parabens ${player.innerHTML}! Seu Tempo Foi: ${minutos.innerHTML} : ${tempo.innerHTML}`)
    }
}

//Checar se as Cartas já foram viradas.
const checarCard = () => {
    const personagem1 = card1.getAttribute('data-personagem')
    const personagem2 = card2.getAttribute('data-personagem')

    if (personagem1 === personagem2) {
        setTimeout(() => {   
            card1.firstChild.classList.add('cardDesabilit')
            card2.firstChild.classList.add('cardDesabilit')

            card1 = ''
            card2 = ''

            endGame()
        }, 500)
    } else {
      setTimeout(() => {
        card1.classList.remove('revelarCard')
        card2.classList.remove('revelarCard')

        card1 = ''
        card2 = ''
      }, 1000)
    }
}

//Função para revelar carta
const revelarCard = ({target}) => {
    if (target.parentNode.className.includes('revelarCard')) {
        return
    }

    if (card1 === '') {
        target.parentNode.classList.add('revelarCard')
        card1 = target.parentNode
    } else if (card2 === '') {
        target.parentNode.classList.add('revelarCard')
        card2 = target.parentNode

        checarCard()
    }
    
}

// Para criar o Card
const criarCard = (personagem) => {
    const card = criarElemento('div', 'card')
    const front = criarElemento('div', 'face front')
    const back = criarElemento('div', 'face back')

    front.style.backgroundImage = `url('../imagens/${personagem}.jpg')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revelarCard)

    card.setAttribute('data-personagem', personagem)

    return card
}

//Função para colocar os personagens nas cartas
const loadGame = () => {
    const duplicarPersonagens = [...personagens, ...personagens]

    const embaralhar = duplicarPersonagens.sort(() => Math.random() - 0.5)

    embaralhar.forEach((personagem) => {
        const card = criarCard(personagem)
        grid.appendChild(card)
    })
}

// Função do tempo
const temporizador = () => {
    this.loop1 = setInterval(() => {
        const timer = +tempo.innerHTML
        tempo.innerHTML = timer + 1
        if (timer === 59) {
        tempo.innerHTML = 0
        }
    }, 1000)

    this.loop2 = setInterval(() => {
    const minutos = +minuto.innerHTML
    minuto.innerHTML = minutos + 1
    }, 60000)
} 


window.onload = () => {
    player.innerHTML = localStorage.getItem('player')

    loadGame()

    window.onclick = () => {
        temporizador()
        window.onclick = null
    }
}