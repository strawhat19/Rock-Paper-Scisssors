console.log(this);

// Global Variables
var win = 0;
var options = ["Rock", "Paper", "Scissors"];
var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

// playGame fucntion
function playGame() {
    // Prompt user for choice of Rock Paper or Scissors (R, P, S)
    var userChoice = prompt("Enter Choice of Rock Paper or Scissors");
    
    if (!userChoice) {
     return;
    }

}