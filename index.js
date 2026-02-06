let secretnumber = Math.floor(Math.random() * 100) + 1;
let count = 0;
let maxAttempts = 10;
let previousGuesses = [];

const input = document.getElementById("input");
const result = document.getElementById("result");
const previous = document.getElementById("previous");
const guessBtn = document.getElementById("Guesstry");
const resetBtn = document.getElementById("reset");

guessBtn.addEventListener("click", guesstry);
resetBtn.addEventListener("click", resetGame);

function guesstry() {
    let userguess = Number(input.value);

    if (!userguess || userguess < 1 || userguess > 100) {
        result.textContent = "Enter a valid number between 1 and 100.";
        return;
    }

    if (count >= maxAttempts) return;

    count++;
    previousGuesses.push(userguess);
    previous.textContent = "Previous guesses: " + previousGuesses.join(", ");

    if (userguess === secretnumber) {
        result.textContent = "Correct!";
        endGame();
        return;
    }

    if (userguess < secretnumber) {
        result.textContent = "Too low.";
    } else {
        result.textContent = "Too high.";
    }

    if (count === maxAttempts) {
        result.textContent = "Game Over.";
        endGame();
    }

    input.value = "";
}

function endGame() {
    input.disabled = true;
    guessBtn.disabled = true;
    resetBtn.disabled = false;
}

function resetGame() {
    secretnumber = Math.floor(Math.random() * 100) + 1;
    count = 0;
    previousGuesses = [];

    result.textContent = "";
    previous.textContent = "";

    input.value = "";
    input.disabled = false;
    guessBtn.disabled = false;
    resetBtn.disabled = true;
}
