// Generating randomNumber
let randomNumber= Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const startBtn = document.querySelector('.start-btn');

let guessCount = 1;

// Functions

function checkGuess() {
    const userGuess =  Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += ' ' + userGuess;

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!Game Over';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
       lastResult.textContent = 'Wrong';
       lastResult.style.backgroundColor = 'red'
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Your last guess was too low';
            } else if (userGuess > randomNumber) {
                lowOrHi.textContent = 'Your last guess was too high';
            }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
//Event listener
//element.addEventListener('click' , function);
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    startBtn.style.display = 'block';
    startBtn.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas');
    for (const resetPara of resetParas) {
    resetPara.textContent = '';
    }  ;
    
       startBtn.style.display = 'none';
    
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
    
        lastResult.style.backgroundColor = 'inherit';
    
        randomNumber = Math.floor(Math.random()* 100) + 1;
}




// Operators
// Concatenation

// let myName = 'Ama';
// let greet = ' says hello';

// console.log(myName += greet);

// let greeting = myName += greet;

// console.log(greeting);







