//add eventlistener to the dom
document.addEventListener("DOMContentLoaded", function () {
  buttons = this.getElementsByTagName("button");
  for(let button of buttons){
    button.addEventListener("click", function(){
      if(this.getAttribute("onclick") === "roll dice"){
        alert("you click roll dice!")
      }else{
        let gametype=this.getAttribute("onclick");
        alert("you clicked ${gametype}!");
      }
    })
}})
let countdown;
function runGame() {
    //timer
    startTimer(1000);
    // Get the user's guess from the input box
    let userAnswer = parseInt(document.getElementById("answer-box").value);

    // Get the dice roll sum from the addition function
    let diceSum = addition();

    // Calculate the result and update win or lose counts
    calculate(userAnswer, diceSum);

    // Clear the answer box for the next round
    answerBox();
}
// Function to start the timer
function startTimer(seconds) {
    let timeLeft = seconds;
    
    countdown = setInterval(function() {
      if (timeLeft <= 0) {
        clearInterval(countdown);
        incrementLose();
        alert("Time's up! You didn't answer in time.");
        runGame(); // Restart the game
      } else {
        console.log(`Time left: ${timeLeft} seconds`); // Display the countdown in the console
        timeLeft--;
      }
    }, 1000);
  }
  
  // Event listener to start the game when the button is clicked
  document.getElementById("start-game-button").addEventListener("click", function() {
    runGame();
  });

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
        alert("Correct! The sum was " + diceSum);
    } else {
        // If guess is incorrect, increment lose count
        incrementLose();
        alert("Incorrect! The sum was " + diceSum);
    }
}

function incrementWin() {
    // Get the current win count from the DOM
    let winCount = parseInt(document.getElementById("win-count").textContent);
    
    // Increment the win count
    document.getElementById("win-count").textContent = ++winCount;
}

function incrementLose() {
    // Get the current lose count from the DOM
    let loseCount = parseInt(document.getElementById("lose-count").textContent);

    // Increment the lose count
    document.getElementById("lose-count").textContent = ++loseCount;
}
// Function to display the current time
function showTime() {
    // Get the current date and time
    let now = new Date();
    
    // Format the time as a string (e.g., "12:34:56 PM")
    let timeString = now.toLocaleTimeString();
    
    // Display the time in an alert box (or you could display it on the page)
    alert("Current Time: " + timeString);
}

// Adding an event listener to the button to show time on click
document.getElementById("time-button").addEventListener("click", showTime);

function answerBox() {
    // Clear the input box
    document.getElementById("answer-box").value = "";
}
