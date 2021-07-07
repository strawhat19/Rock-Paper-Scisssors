console.log(this);
// Test to see all elements with the class name .content
console.log(document.querySelectorAll(".content"));
// Global Variables
var win = 0;
var options = ["R", "P", "S"];
var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

// Testing Console Log // Comment it out when not using
// console.log(index);

// playGame fucntion
function playGame() {
    // Prompt user for choice of Rock Paper or Scissors (R, P, S)
    var userChoice = prompt("Enter Choice of Rock Paper or Scissors", "R, P, or S");
    console.log(index);
    if (!userChoice) {
     return;
    }

}