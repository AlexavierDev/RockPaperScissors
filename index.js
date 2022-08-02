
let pointsPlayer = ''
let pointsComputer = ''
const buttons = document.querySelectorAll('input')
const divResult = document.querySelector('.divResult')
const paragrafo = document.createElement('p')
let result = ''
let resultFinal = ''


//FUNCTION ADD LISTENER EVENT IN EACH BUTTON
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.value)
    })
})


//FUNCTON TO CACTH STRING RANDOM FOR OPTION COMPUTER 
function computerPlay() {
    let option = ['pedra', 'papel', 'tesoura']
    let optionCheck = option[Math.floor(Math.random() * option.length)]

    return optionCheck
}

//FUNCTION FOR DISABLED BUTTTONS
function disabledBbtns() {
    buttons.forEach((btn) => {
        btn.disabled = true
    })
}



//FUNCTION THAT RUN GAME

function playGame(optionPlayer) {
    let optionComputer = computerPlay()

    if ((optionPlayer == 'pedra' && optionComputer == 'tesoura') ||
        (optionPlayer == 'tesoura' && optionComputer == 'papel') ||
        (optionPlayer == 'papel' && optionComputer == 'pedra')) {
        pointsPlayer++
        result = ('Você Ganhou! ' + optionPlayer + ' VS ' + optionComputer
            + "<br><br>Seus Pontos: " + pointsPlayer + "<br> Pontos Computador: " + pointsComputer)
        if (pointsPlayer == 5) {
            resultFinal = "PARABENS!!! você GANHOU essa rodada <br> <br> Recarregue a pagina para jogar novamente!"
            result =resultFinal
            disabledBbtns()
        }
    } else if (optionComputer == optionPlayer) {

        result = ("***** EMPATE ***** <br> <br> " + optionPlayer + " VS " + " " + optionComputer +
            "<br><br>Seus Pontos: " + pointsPlayer + "<br> Pontos Computador: " + pointsComputer)

    } else {
        pointsComputer++
        result = ('Você Perdeu! ' + optionPlayer + ' VS ' + optionComputer
            + "<br><br>Seus Pontos: " + pointsPlayer + "<br> Pontos Computador: " + pointsComputer)
        if (pointsComputer == 5) {
            resultFinal = "INFELIZMENTE você PERDEU essa rodada <br> <br> Recarregue a pagina para jogar novamente!"
            result = resultFinal
            disabledBbtns()

        }
    }
    //ADD LET RESULT IN DOM
    divResult.appendChild(paragrafo)
    paragrafo.innerHTML = result
}









