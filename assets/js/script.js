document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName("button");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            if (this.innerHTML === "roll dice") {
                this.innerHTML = "you clicked roll dice!";
            } else {
                this.innerHTML = "you clicked fail";
            }
        });
    }
});

/**
 * Function to run the game logic.
 * It gets the user's guess from the input box and rolls the dice.
 * Then, it compares the user's guess to the dice roll result and calculates wins or losses.
 * Finally, it clears the input box for the next round.
 */
function runGame() {
    // Get the user's guess from the input box
    let userAnswer = document.getElementById("answer-box").value;

    // Check if the input is empty or not a valid number between 2 and 12
    if (userAnswer === "" || isNaN(userAnswer) || userAnswer < 2 || userAnswer > 12) {
        alert("Please enter a valid number between 2 and 12!.");
        // Disable the roll dice functionality
        disableDiceButtons();
        return;
    }

    // Convert userAnswer to a number
    userAnswer = parseInt(userAnswer);

    // Get the dice roll sum from the addition function
    const diceSum = addition();

    // Calculate the result and update win or lose counts
    calculate(userAnswer, diceSum);

    // Clear the answer box for the next round
    answerBox();
}

function addition() {
    // Generate random numbers for two dice (1-6)
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Return the sum of the two dice
    return dice1 + dice2;
}

// If guess is correct, increment win count
function calculate(userAnswer, diceSum) {
    if (userAnswer === diceSum) {
        incrementWin();
        alert("Correct! The sum is " + diceSum);
    } else {
        // If guess is incorrect, increment lose count
        incrementLose();
        alert("Incorrect! The sum is " + diceSum);
    }
}

/**
 * Function to increment the win count.
 * Retrieves the current win count from the DOM and increments it by 1.
 * Updates the win count in the DOM.
 */
function incrementWin() {
    let winCount = parseInt(document.getElementById("win-count").innerHTML);
    
    // Increment the win count
    document.getElementById("win-count").innerHTML = ++winCount;
}

function incrementLose() {
    let loseCount = parseInt(document.getElementById("lose-count").innerHTML);
 
    // Increment the lose count
    document.getElementById("lose-count").innerHTML = ++loseCount;
}

function answerBox() { 
    // Clear the input box
    document.getElementById("answer-box").value = "";
}

/**
 * Function to enable the roll dice button once the user inputs a valid number.
 */
function enableDiceButtons() {
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === "roll dice") {
            buttons[i].disabled = false; // Enable roll dice button
        }
    }
}

/**
 * Function to disable dice roll button.
 */
function disableDiceButtons() {
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === "roll dice") {
            buttons[i].disabled = true;
        }
    }
}

// Add an event listener to check input validity on keyup
document.getElementById("answer-box").addEventListener("keyup", function() {
    const input = document.getElementById("answer-box").value;
    if (input !== "" && !isNaN(input)) {
        enableDiceButtons(); // Enable buttons if input is valid
    }
});
