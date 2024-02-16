let gameChoices = ["rock", "paper", "scissors"];
let randomGeneration = Math.floor(Math.random() * gameChoices.length);
let scoreboard = [0, 0, 0]

// Game start Function
let gameStart = function() {
    let userChoice = prompt("Rock, Paper, Scissors!", `"rock", "paper", or "scissors"`);

    if (userChoice === null) {
        alert("Thanks for playing!");
        return;
    } else {
        if (userChoice.toLowerCase() === "rock") {
            confirm("You chose rock!");
            alert("I chose " + gameChoices[randomGeneration] + "!");
            if (gameChoices[randomGeneration] === "paper") {
                alert("You lose!");
                scoreboard[1] = scoreboard[1] + 1;
            } else if (gameChoices[randomGeneration] == "rock") {
                alert("We tied!");
                scoreboard[2] = scoreboard[2] + 1;
            } else {
                alert("You win!");
                scoreboard[0] = scoreboard[0] + 1;
            }
        } else if (userChoice.toLowerCase() === "paper") {
            confirm("You chose paper!");
            alert("I chose " + gameChoices[randomGeneration] + "!");
            if (gameChoices[randomGeneration] === "paper") {
                alert("We tied!");
                scoreboard[2] = scoreboard[2] + 1;
            } else if (gameChoices[randomGeneration] == "rock") {
                alert("You win!");
                scoreboard[0] = scoreboard[0] + 1;
            } else {
                alert("You lose!");
                scoreboard[1] = scoreboard[1] + 1;
            }
        } else if (userChoice.toLowerCase() === "scissors") {
            confirm("You chose scissors!");
            alert("I chose " + gameChoices[randomGeneration] + "!");
            if (gameChoices[randomGeneration] === "paper") {
                alert("You win!");
                scoreboard[0] = scoreboard[0] + 1;
            } else if (gameChoices[randomGeneration] == "rock") {
                alert("You lose!");
                scoreboard[1] = scoreboard[1] + 1;
            } else {
                alert("We tied!");
                scoreboard[2] = scoreboard[2] + 1;
            }
        } else {
            alert("Choose rock, paper, or scissors!");
            gameStart();
        }
    }
}

// Show scoreboard Function
let showScoreboard = function () {
    alert("Wins: "+ scoreboard[0] + ", Losses: " + scoreboard[1] + ", Ties: " + scoreboard[2]);
}

// Play again? Function
let playAgain = function () {
    let keepPlaying = confirm("Play again?");
    while (keepPlaying === true) {
        gameStart();
        showScoreboard();
        playAgain();
    } 
    alert("Thanks for playing!");
}

// Start the game
gameStart();

// Show scoreboard
showScoreboard();

// Play again?
playAgain();