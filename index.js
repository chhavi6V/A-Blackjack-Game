let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


let player = {              //object
    name :"Chhavi" ,
    chips : 145
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    randomNumber = Math.floor(Math.random()*13 +1)
    if(randomNumber > 10){         //take king,queen and jack as 10
        return 10
    }else if(randomNumber === 11){         //take Ace as 11
        return 1
    }else{
        return randomNumber
    }
    
}

function newCard(){
   // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()   //number btw 2-11
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message="Wohoo! You've got a Blackjack."
        hasBlackJack = true
    } else {
        message="You're out of the game!"
        isAlive = false
    }
    
   messageEl.textContent = message
   sumEl.textContent = "Sum: "+sum
   cardsEl.textContent = "Cards: "

   for(i = 0; i< cards.length; i++){
     cardsEl.textContent += cards[i] + " "
   }

}

