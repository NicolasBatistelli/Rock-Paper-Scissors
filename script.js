const rock = 1
const paper = 2
const scissors = 3

function computerChoice (){
    const max = 3
    const randomNumber = Math.floor(Math.random() * max) + 1;
    if (randomNumber === rock){
        return 'rock'
    } else if (randomNumber === paper){
        return 'paper'
    } else if(randomNumber === scissors){
        return 'scissors'
    }
}

function playerChoice(input){
    const value = input.toLowerCase()
    return value
}

function rounds (playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'Emapte'
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'La computadora gana! papel vence a roca'
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'El jugador gana! roca vence a tijeras'
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'El jugador gana! papel vence a roca'
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'La computadora gana! tijeras vence papel'
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'La computadora gana! roca vence tijera'
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'El jugador gana! tijeras vence papel'
    }
}

const jugador = playerChoice('paper')
const computadora = computerChoice()

const resultado = rounds(jugador,computadora)
console.log(resultado)