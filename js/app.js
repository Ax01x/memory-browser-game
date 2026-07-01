/*-------------------------------- Constants --------------------------------*/
const choices = ['❤️', '🤍', '🧡', '💛', '💚', '💙', '💜', '🤎', '💕', '💖'];
const buttons = document.querySelectorAll('.card')
const startBtn = document.querySelector('#startbtn')
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
startBtn.textContent='Start'

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.style.color === 'initial') {
            button.style.color = 'transparent'
        } else {
            button.style.color = 'initial'
        }
    });
});


// event

function checkformatch (){}