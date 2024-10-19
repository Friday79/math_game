//add eventlistener to the dom
document.addEventListener("DOMContentLoaded", function () {
var  buttons = this.getElementsByTagName("button");
 for(var i = 0; i < buttons.length; i++) {
    button[i].addEventListener("click",function() {
         if (this.innerHTML === "roll dice") {
         this.innerHTML=
            "you clicked roll dice!";
          } else {
        
            "you clicked fail";
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
    var userAnswer = (document.getElementById("answer-box").value);

     // Check if the input is empty or not a valid number
     if (userAnswer === "" || isNaN(userAnswer)) {
        alert("Please enter a valid number.");
        // Disable the roll dice functionality
        disableDiceButtons();
        return;
    }

    // Convert userAnswer to a number
    userAnswer = parseInt(userAnswer);

    // Get the dice roll sum from the addition function
    var diceSum = addition();

    // Calculate the result and update win or lose counts
    calculate(userAnswer, diceSum);

    // Clear the answer box for the next round
    answerBox();
}

function addition() {
    // Generate random numbers for two dice (1-6)
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // Return the sum of the two dice
    return dice1 + dice2;
}
 // If guess is correct, increment win count
function calculate(userAnswer, diceSum) {
    if (userAnswer === diceSum) {
        incrementWin();
       calculate.innerHTML= "Correct! The sum is ${diceSum}" ;
    } else {
        // If guess is incorrect, increment lose count
        incrementLose();
        calculate.innerHTML="Incorrect! The sum is ${diceSum}";
    }
}
/**
 * Function to increment the win count.
 * Retrieves the current win count from the DOM and increments it by 1.
 * Updates the win count in the DOM.
 */
function incrementWin() {
    // Get the current win count from the DOM
    var winCount = parseInt(document.getElementById("win-count").innerHTML);
    
    // Increment the win count
    document.getElementById("win-count").innerHTML = ++winCount;
}

function incrementLose() {
    // Get the current lose count from the DOM
    var loseCount = parseInt(document.getElementById("lose-count").innerHTML);
 
    // Increment the lose count
    document.getElementById("lose-count").innerHTML = ++loseCount;
}

function answerBox(){ 
    // Clear the input box
    document.getElementById("answer-box").value = "";
}

/**
 * Function to enable the roll dice button once the user inputs a valid number.
 */
function enableDiceButtons() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === "roll dice") {
            buttons[i].disabled = false; // Enable roll dice button
        }
    }
}

// Optional: Add an event listener to check input validity on keyup
document.getElementById("answer-box").addEventListener("keyup", function() {
    var input = document.getElementById("answer-box").value;
    if (input !== "" && !isNaN(input)) {
        enableDiceButtons(); // Enable buttons if input is valid
    }
});