/*-------------------------------- Constants --------------------------------*/
const choices = ['❤️', '🤍', '🧡', '💛', '💚', '💙', '💜', '🤎', '💕', '💖'];
const buttons = document.querySelectorAll('button')
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
// need a function play() here

let time = 60
const runTimer = setInterval(function() {
    time -= 1
    console.log('time left: ', time)
}, 1000)

setTimeout(function() {
    clearInterval(runTimer)
    console.log('Interval cleared. Function will no longer excute.')
}, 30000)
/*----------------------------- Event Listeners -----------------------------*/
// when i click the button it should change the text content from the array above

// buttons.forEach(function(button) {
//     button.addEventListener('click', function(btn){
//         button.style.backgroundColor ='yellow'
//     });
// });


buttons.forEach(function(button) {
    buttons.addEventListener('click', function() {
        button.style.color = 'initial';
    });
});