// Begin Scripts
console.log("Welcome to a simple game of Rock Paper Scissors vs Computer.");
console.log("Click the button to begin the process.");

// Global Variables
var finalColumn = document.querySelector('[data-finalColumn]');
var userNameCont = document.getElementById("userName");
var userChoiceCont = document.getElementById("userChoice");
var userScoreCont = document.getElementById("userScore");
var computerChoiceCont = document.getElementById("computerChoice");
var computerNameCont = document.getElementById("computerName");
var computerScoreCont = document.getElementById("computerScore");

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

    userNameCont.children[0].innerHTML = userName;

    userNameCont.classList.toggle("slideLeftAnimation");
    // userNameCont.classList.toggle("userBG");
    // userChoiceCont.classList.toggle("userBG");
    // userScoreCont.classList.toggle("userBG");

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
    })

    function makeSelection(selection) {
        var computerSelection = randomSelection();
        var youWin = isWinner(selection, computerSelection);
        var computerWin = isWinner(computerSelection, selection);
        userChoiceCont.children[0].textContent = selection.name;
        computerChoiceCont.children[0].textContent = computerSelection.name;
        console.log("Your selection is " + selection.name);
        console.log("Computer selection is " + computerSelection.name);
    }

// Global Variables

    function isWinner(selection, computerSelection) {

        if (selection.name === computerSelection.name) {
            bannerCont.children[0].textContent = "It's a Draw!";
            userChoiceCont.style.background = "var(--aqua)";
            userNameCont.style.background = "var(--aqua)";
            computerChoiceCont.style.background = "var(--aqua)";
            computerNameCont.style.background = "var(--aqua)";
            
        } else if (selection.name === computerSelection.beats) {
            bannerCont.children[0].textContent = "You Win!";
            userChoiceCont.style.background = "#299993";
            userNameCont.style.background = "#299993";
            computerChoiceCont.style.background = "#000";
            computerNameCont.style.background = "#000";
            
        } else if (computerSelection.beats === selection.name) {
            bannerCont.children[0].textContent = "You Win!";
            userChoiceCont.style.background = "#299993";
            userNameCont.style.background = "#299993";
            computerChoiceCont.style.background = "#000";
            computerNameCont.style.background = "#000";
            
        } else if (selection.beats === computerSelection.name) {
            bannerCont.children[0].textContent = "Computer Wins!";
            computerChoiceCont.style.background = "#299993";
            computerNameCont.style.background = "#299993";
            userChoiceCont.style.background = "#000";
            userNameCont.style.background = "#000";
            
        } else {
            bannerCont.children[0].textContent = "Computer Wins!";
            computerChoiceCont.style.background = "#299993";
            computerNameCont.style.background = "#299993";
            userChoiceCont.style.background = "#000";
            userNameCont.style.background = "#000";
            
        }
        return selection.beats === computerSelection.name;
        playGame();
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

// Media Queries
var copyright = document.getElementById("copyright");
var scriptYear = document.getElementById("copyrightYear");

// Function to continually check window
function copyrightMobileFix(copyrightMobile) {
    if (copyrightMobile.matches) {
        copyright.innerHTML = 'Copyright © 2021';
    } else {
        copyright.innerHTML = 'Copyright © 2021 | Design by Rakib Ahmed | <a class="hoverSlide copyrightLink" href="https://piratechs.com/" target="_blank"> Piratechs</a>';
    }
}

// Initializing media query
var copyrightMobile = window.matchMedia("(max-width: 612px)");

// Adding Listener
copyrightMobileFix(copyrightMobile);
copyrightMobile.addListener(copyrightMobileFix);