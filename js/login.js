const input = document.querySelector('.login-inp')
const button = document.querySelector('.login-but')
const form = document.querySelector('.login')

//Validar o nome do usuário
const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
        return
    }

    button.setAttribute('disabled', '')
}

const ativarSubmit = (event) => {
    event.preventDefault()

    localStorage.setItem('player', input.value)
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput) // Colando o evento de validação no login-ino
form.addEventListener('submit', ativarSubmit)