// Begin Scripts
console.log("Welcome to a simple game of Rock Paper Scissors vs Computer.");
console.log("Click the button to begin the process.");

// Global Variables
var finalColumn = document.querySelector('[data-finalColumn]');
var userNameCont = document.getElementById("userName");
var userChoiceCont = document.getElementById("userChoice");
var userScoreCont = document.getElementById("userScore");

var SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
]

// Prompt user for name
function getUserName() {

    var userName = prompt("Enter your User Name", "User");

    userNameCont.innerHTML = userName;

    userNameCont.classList.toggle("slideLeftAnimation");
    userNameCont.classList.toggle("userBG");
    userChoiceCont.classList.toggle("userBG");
    userScoreCont.classList.toggle("userBG");

    playGame();
}

// Global Variables
var win = 0;
var options = ["R", "P", "S"];
var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

// Testing Console Log // Comment it out when not using
// console.log(index);

// playGame fucntion
function playGame() {

    var bannerCont = document.getElementById("bannerContent");

    bannerCont.innerHTML = '<h1>Make Selection</h1><button class="gameButton hoverSlide" data-selection="rock" id="rockButton"><i class="fas fa-hand-rock"></i> Rock</button><button class="gameButton hoverSlide" data-selection="paper" id="paperButton"><i class="fas fa-hand-paper"></i> Paper</button><button class="gameButton hoverSlide" data-selection="scissors" id="scissorsButton"><i class="fas fa-hand-scissors"></i> Scissors</button>';

    var selectionButtons = document.querySelectorAll('[data-selection]');

    selectionButtons.forEach(selectionButton => {
    // Grabbing all the Selection Buttons
        selectionButton.addEventListener('click', e => {
        // Fetching buttons and running code on click and e stands for event
            var selectionName = selectionButton.dataset.selection;
            var selection = SELECTIONS.find(selection => selection.name === selectionName);
            makeSelection(selection);
        })
        addResults();
    })

    function makeSelection(selection) {
        var computerSelection = randomSelection();
        var youWin = isWinner(selection, computerSelection);
        var computerWin = isWinner(computerSelection, selection);
        console.log("Your selection is " + selection.name);
        console.log("Computer selection is " + computerSelection.name);
    }

// Global Variables

  function addResults() {

    var rockButton = document.getElementById("rockButton");
    var paperButton = document.getElementById("paperButton");
    var scissorsButton = document.getElementById("scissorsButton");

    // if (rockButton.addEventListener('click')) {
    //     userChoiceCont.innerText = selection.name;
    // } else if (paperButton.addEventListener('click')) {
    //     userChoiceCont.innerText = selection.name;
    // } else if (scissorsButton.addEventListener('click')) {
    //     userChoiceCont.innerText = selection.name;
    // }
    
  }

    function isWinner(selection, computerSelection) {

        if (selection.beats === computerSelection.name) {
            console.log("You Win");
            return selection.beats === computerSelection.name;
        } else if (selection.beats != computerSelection.name) {
            console.log("Computer Wins");
            return selection.beats != computerSelection.name;
        }

        
    }

    function randomSelection() {
        var randomIndex = Math.floor(Math.random() * SELECTIONS.length);
        return SELECTIONS[randomIndex];
    }

    // console.log(index);
    if (!userChoice) {
     return;
    }

}