const grid = document.querySelector('.grid')

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

// Para criar o Card
const criarCard = (personagem) => {
    const card = criarElemento('div', 'card')
    const front = criarElemento('div', 'face front')
    const back = criarElemento('div', 'face back')

    front.style.backgroundImage = `url('../imagens/${personagem}.jpg')`

    card.appendChild(front)
    card.appendChild(back)

    return card
}

//Função para criar as cartas
const loadGame = () => {
    const duplicarPersonagens = [...personagens, ...personagens]

    const embaralhar = duplicarPersonagens.sort(() => Math.random() - 0.5)

    embaralhar.forEach((personagem) => {
        const card = criarCard(personagem)
        grid.appendChild(card)
    })
}

loadGame()