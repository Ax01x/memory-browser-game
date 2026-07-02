/*-------------------------------- Constants --------------------------------*/
const board = document.querySelector('.board')
const scoreDisplay = document.querySelector('.score')
const livesDisplay = document.querySelector('.lives')
const message = document.querySelector('.message')
const emojis = ['❤️', '🤍', '💛', '💙', '💜', '💖'];

// const startBtn = document.querySelector('#startbtn')
/*-------------------------------- Variables --------------------------------*/

let values = ['❤️', '🤍', '💛', '💙', '💜', '💖', '❤️', '🤍', '💛', '💙', '💜', '💖']
values.sort(() => Math.random() - 0.5) // value is the deck of 12 cards and while sort() usually arranges things in order, here its set to randomizing the array so the decks are shuffled each time.
let flipped = []
let matched = []
let score = 0 // starts at 0pts
let lives = 5 // max 5 tries
let isChecking = false // u can click cards

/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Functions --------------------------------*/
function updateScoreDisplay(){
    scoreDisplay.textContent = `Score: ${score}`
}

function updateLivesDisplay() {
    livesDisplay.textContent = `Lives: ${lives}`
}
// these two functions rewrite the score and lives displayed on the screen to the current status so instead of changing the score when the score changes the update score display does it automatically instead of using scoreDisplay.textContent
/*-------- Event Listeners --------*/
for (let i = 0; i < values.length; i++) {   // the loop runs once for each one of the values so each time it:
    const card = document.createElement('div') //makes a blank box
    card.classList.add('card') 
    card.textContent = '♡' // the heart symbol will appear when the card is faced down
    board.appendChild(card)
    card.addEventListener('click', () => {
        if (isChecking) return
        if (matched.includes(card)) return
        if (flipped.includes(card)) return
        if (lives <= 0) return
        card.textContent = values[i]
        flipped.push(card)
        if (flipped.length === 2) { 
            isChecking = true
            const firstCard = flipped[0]
            const secondCard = flipped [1]
            if (firstCard.textContent === secondCard.textContent) {
                score += 5 // increases the score when 2 cards match and it automatically updates the score thanks to updatescoredisplay 
                updateScoreDisplay() //automatically changes the score
                matched.push(firstCard, secondCard) // when two pairs are matched you cannot click them again
                flipped = []
                isChecking = false // false meaning u can click the button while true means u cannot click 
                if (matched.length === values.length) { 
                    message.textContent = 'Congrats! You won!' // this checks if all 12 pairs have been matched to show the win msg
                }

            } else { // incase of mismatch
                lives--; //removes one life
                updateLivesDisplay()
                setTimeout(() => {
                    firstCard.textContent = '♡'
                    secondCard.textContent = '♡'
                    flipped = []
                    isChecking= false
                    if (lives === 0) {
                        message.textContent = 'Nice try!'
                    }

                }, 600)
            }
        }
    })
}

updateScoreDisplay()
updateLivesDisplay()
// these two codes start once when the page first starts