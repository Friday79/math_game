//add eventlistener to the dom
document.addEventListener("DOMContentLoaded", function () {
 let buttons = this.getElementsByTagName("button");
    button.addEventListener("click",runGame).innerHTML =<p>start runGame</p>; 
      
  })

let countdown;
function runGame() {
    // Get the user's guess from the input box
    let userAnswer = parseInt(document.getElementById("answer-box").value);

    // Get the dice roll sum from the addition function
    let diceSum = addition();

    // Calculate the result and update win or lose counts
    calculate(userAnswer, diceSum);

    // Clear the answer box for the next round
    answerBox();
}

function addition() {
    // Generate random numbers for two dice (1-6)
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    // Return the sum of the two dice
    return dice1 + dice2;
}

function calculate(userAnswer, diceSum) {
    if (userAnswer === diceSum) {
        // If guess is correct, increment win count
        incrementWin();
        ("Correct! The sum was " + diceSum);
    } else {
        // If guess is incorrect, increment lose count
        incrementLose();
        ("Incorrect! The sum was " + diceSum);
    }
}

function incrementWin() {
    // Get the current win count from the DOM
    let winCount = parseInt(document.getElementById("win-count").innerHTML);
    
    // Increment the win count
    document.getElementById("win-count").innerHTML = ++winCount;
}

function incrementLose() {
    // Get the current lose count from the DOM
    let loseCount = parseInt(document.getElementById("lose-count").textContent);

    // Increment the lose count
    document.getElementById("lose-count").innerHTML = ++loseCount;
}

function answerBox() {
    // Clear the input box
    document.getElementById("answer-box").value = "";
}
