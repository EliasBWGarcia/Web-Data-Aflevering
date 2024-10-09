const buttonElement = document.querySelector(".btn.check");
const inputElement = document.querySelector(".guess");
const currentScore = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");
const numberDisplayElement = document.querySelector(".number");
const messageElement = document.querySelector(".message")
const historyElement = document.querySelector(".guess-history")
const buttonAgainElement = document.querySelector(".btn.again")


let score = 0;
let highScoreValue = 0
let myNumber = Math.floor(Math.random() * 20) + 1;
let guessHistory = [];

buttonElement.addEventListener("click", function () {
    // lav først inputtet om til nummer datatypen, så det kan bruges i nedenstående kode.
    const userGuess = Number(inputElement.value);

    // lav function til hints.
    let hints = function () {
        if ((Math.abs(myNumber - userGuess)) <= 5) {
            // Hvis forskellen mellem gættet og det rigtige tal er 5 eller mindre.
            if (userGuess > myNumber) {
                messageElement.textContent = "Almost there! Your guess is slightly too high";
            } else {
                messageElement.textContent = "Almost there! Your guess is slightly too low";
            }}
        // Hvis forskellen mellem gættet og det rigtige nummer er større end 5, skal denne kode udføres.
        else if (userGuess > myNumber) {
            messageElement.textContent = "Wrong! Your guess is way too high";
        } else if (userGuess < myNumber) {
            messageElement.textContent = "Wrong! Your guess is way too low";
        }
        messageElement.style.color = "red";
    };

    // Lav en "history" over tidligere gæt
    guessHistory.push(userGuess);
    historyElement.textContent = guessHistory.join(", ");

    // tjek om inputtet er valid
    if (userGuess > 20 || userGuess < 1 || isNaN(userGuess)) {
        messageElement.textContent = "Please guess a number from 1-20";
        messageElement.style.color = "red"
        inputElement.value = "";
        return;
    }

    // hvis svaret er korrekt, skal der gives et point og en evt opdatering af highscore. Der skal også være konfetti.

    if (userGuess === myNumber) {
        score += 1;
        currentScore.textContent = score;
        messageElement.textContent = "Correct!!! You earned a new point!";
        messageElement.style.color = "green"
        setTimeout(function () {
                numberDisplayElement.textContent = "?";
            }
            , 1200);

        setTimeout(function () {
                myNumber = Math.floor(Math.random() * 20) + 1;
                console.log(myNumber) // Til debugging/test i konsollen.
            }
            , 1201)

        if (score > highScoreValue) {
            highScoreValue += 1;
            highScoreElement.textContent = highScoreValue;
            messageElement.textContent += ` AND a New high score: ${highScoreValue}`;
            messageElement.style.color = "green";
        }

        confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6}
        }); // konfetti inspireret fra ChatGPT

        // Vis det korrekte nummer
        numberDisplayElement.textContent = myNumber;


    } else {
        // Tjek om gættet er forkert og i så fald, fratræk et point og giv et hint (kun hvis score er større end 0)
        if (score > 0) {
            score -= 1;
            currentScore.textContent = score;
            hints()
        } else {
            hints()
        }
    }
    // Clear inputtet til næste spil
    inputElement.value = "";

});

/* Hvis knappen "again" bliver aktiveret, skal følgende nulstilles:
score, highscore, inputvalue, guesshistory og numberdisplay. Der genereres også et nyt nummer. */

buttonAgainElement.addEventListener("click", function () {
        // Nulstil values
        score = 0;
        highScoreValue = 0
        inputElement.value = "";
        guessHistory = [];
        // Nulstil DOM
        messageElement.textContent = "Start guessing"
        messageElement.style.color = ""
        currentScore.textContent = score;
        highScoreElement.textContent = highScoreValue
        numberDisplayElement.textContent = "?";
        historyElement.textContent = "";
        // Lav et nyt random nummer
        myNumber = Math.floor(Math.random() * 20) + 1;
        console.log(myNumber) // til debugging og test
    }
)

console.log(myNumber) // Til debugging og test