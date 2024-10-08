const buttonElement = document.querySelector(".btn-check");
const inputElement = document.querySelector(".guess");
const currentScore = document.querySelector(".score");
const highScore = document.querySelector(".highScore");
const numberDisplay = document.querySelector(".number");
const message = document.querySelector(".message")
const historyElement = document.querySelector(".guess-history")

let score = 0;
let highScoreValue = 0
let myNumber = Math.floor(Math.random() * 20) + 1;
const guessHistory = [];

buttonElement.addEventListener("click", function () {
    // lav først inputtet om til nummer datatypen, så det kan bruges i nedenstående kode.
    const userGuess = Number(inputElement.value);

    // Lav en "history" over tidligere gæt
    guessHistory.push(userGuess);
    historyElement.textContent = guessHistory.join(", ");

    // tjek om inputtet er valid
    if (userGuess > 20 || userGuess < 0 || !userGuess) {
        message.textContent = "Please guess a number from 0-20";
        return;
    }

    // Tjek om gættet er forkert
    if (userGuess !== myNumber) {
        currentScore.textContent
    }
    inputElement.value="";
    message.textContent = "try again";
})


    // Tjek om gættet er korrekt

    // nulstil efter hvert gæt




/* When clicking the Check! button check if what the user wrote in the input matches the number they have to guess

If it's wrong increase the Score by 1 and clear the input

If it is correct and smaller than Highscore set the new score as the highscore and clear the input. Also show the correct number in the ?

    If the Again button is clicked clear the score and the highscore and start from scratch

If the user writes a number that is not between 1 - 20, then an error message should be shown to the user. Or if the user writes something that is not a number

Create a way to show what numbers have been guessed so far. This is like a history of guesses

Optional - Add confetti when the correct number is guessed

Optional - Play different sounds when the correct or wrong number is guessed

Add a feature you think could be fun! */

