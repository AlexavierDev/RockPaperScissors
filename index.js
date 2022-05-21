//VARIABLES COUNTER
let pointsPlayer = 0
let pointsComputer = 0


//FUNCTON TO CACTH STRING RANDOM
function computerPlay() {
    let option = ['pedra', 'papel', 'tesoura']
    let optionCheck = option[Math.floor(Math.random() * option.length)]

    return optionCheck

}

//FUNCTION THAT RUN ONE GAME

function playGame(optionPlayer, optionComputer) {
    //CONDITIONS OF PLAYER

    if (optionPlayer == 'pedra' && optionComputer == 'tesoura') {
        pointsPlayer++
        console.log('O Player Ganhou')
    } else if (optionPlayer == 'tesoura' && optionComputer == 'papel') {
        pointsPlayer++
        console.log('O Player Ganhou')
    } else if (optionPlayer == 'papel' && optionComputer == 'pedra') {
        pointsPlayer++
        console.log('O Player Ganhou')

    //CONDITIONS OF COMPUTADOR

    } else if (optionComputer == 'pedra' && optionPlayer == 'tesoura') {
        pointsComputer++
        console.log('O computador Ganhou')
    } else if (optionComputer == 'tesoura' && optionPlayer == 'papel') {
        pointsComputer++
        console.log('O computador Ganhou')
    } else if (optionComputer == 'papel' && optionPlayer == 'pedra') {
        pointsComputer++
        console.log('O computador Ganhou')
    } else {
        console.log('Empate')
    }

    console.log(`pontos do  PLAYER ${pointsPlayer}\
                 pontos do COMPUTADOR ${pointsComputer}
    `)
}

//FUNCTION THAT RUN FUNCTION PLAYGAME 5 TIMES
function game() {
    for (i = 1; i <= 5; i++) {
        let optionPlayer = prompt('Digite pedra,papel ou tesoura').toLowerCase()
        let optionComputer = computerPlay()
        playGame(optionComputer,optionPlayer)
    }
    //CHECK WHO WIN ROUND 
    if(pointsComputer > pointsPlayer){
        console.log('COMPUTER WINS!!! CONGRATULATIONS')
    }else if(pointsPlayer > pointsComputer){
        console.log('PLAYER WINS!!! CONGRATULATIONS')
    }else{
        console.log('EMPATE :)')
    }
    
}



game()