// array of user input options
let gameChoices = ["rock", "paper", "scissors"];

// computer-generated randomized rock/paper/scissors pick
let randomGeneration = Math.floor(Math.random() * gameChoices.length);

// initial scoreboard
let scoreboard = [0, 0, 0]

// Game start Function
let gameStart = function() {
    // initial rock, paper, scissors prompt
    let userChoice = prompt("Rock, Paper, Scissors!", `"rock", "paper", or "scissors"`);

    if (userChoice === null) {                                          // IF user does not want to play and clicks "cancel"
        alert("Thanks for playing!");                                   // THEN will thank them for playing
        return;                                                         // THEN it will end this function, showing the scoreboard next
    } else {
        if (userChoice.toLowerCase() === "rock") {                      // IF the user types "rock"
            confirm("You chose rock!");                                 // THEN a confirmation message will appear
            alert("I chose " + gameChoices[randomGeneration] + "!");    // THEN it will randomly generate its own game input
            if (gameChoices[randomGeneration] === "paper") {            // IF the randomly generated game input is paper
                alert("You lose!");                                     // THEN it will alert the player that they lost
                scoreboard[1] = scoreboard[1] + 1;                      // THEN the scoreboard will update to reflect this
            } else if (gameChoices[randomGeneration] == "rock") {       // IF the randomly generated game input is rock
                alert("We tied!");                                      // THEN it will alert the player that they tied
                scoreboard[2] = scoreboard[2] + 1;                      // THEN the scoreboard will update to reflect this
            } else {                                                    // IF the randomly generated game input is scissors
                alert("You win!");                                      // THEN it will alert the player that they won
                scoreboard[0] = scoreboard[0] + 1;                      // THEN the scoreboard will update to reflect this
            }
        } else if (userChoice.toLowerCase() === "paper") {              // IF the user types "paper"
            confirm("You chose paper!");                                // THEN a confirmation message will appear
            alert("I chose " + gameChoices[randomGeneration] + "!");    // THEN it will randomly generate its own game input
            if (gameChoices[randomGeneration] === "paper") {            // IF the randomly generated game input is paper
                alert("We tied!");                                      // THEN it will alert the player that they tied
                scoreboard[2] = scoreboard[2] + 1;                      // THEN the scoreboard will update to reflect this
            } else if (gameChoices[randomGeneration] == "rock") {       // IF the randomly generated game input is rock
                alert("You win!");                                      // THEN it will alert the player that they won
                scoreboard[0] = scoreboard[0] + 1;                      // THEN the scoreboard will update to reflect this
            } else {                                                    // IF the randomly generated game input is scissors
                alert("You lose!");                                     // THEN it will alert the player that they lost
                scoreboard[1] = scoreboard[1] + 1;                      // THEN the scoreboard will update to reflect this
            }
        } else if (userChoice.toLowerCase() === "scissors") {           // IF the user types "scissors"
            confirm("You chose scissors!");                             // THEN a confirmation message will appear
            alert("I chose " + gameChoices[randomGeneration] + "!");    // THEN it will randomly generate its own game input
            if (gameChoices[randomGeneration] === "paper") {            // IF the randomly generated game input is paper
                alert("You win!");                                      // THEN it will alert the player that they won
                scoreboard[0] = scoreboard[0] + 1;                      // THEN the scoreboard will update to reflect this
            } else if (gameChoices[randomGeneration] == "rock") {       // IF the randomly generated game input is rock
                alert("You lose!");                                     // THEN it will alert the player that they lost
                scoreboard[1] = scoreboard[1] + 1;                      // THEN the scoreboard will update to reflect this
            } else {                                                    // IF the randomly generated game input is scissors
                alert("We tied!");                                      // THEN it will alert the player that they tied
                scoreboard[2] = scoreboard[2] + 1;                      // THEN the scoreboard will update to reflect this
            }
        } else {                                                        // IF the user inputs anything other than "rock", "paper", or "scissors"
            alert("Choose rock, paper, or scissors!");                  // THEN they will be told to input "rock", "paper", or "scissors"
            gameStart();                                                // THEN the game will restart                            
        }
    }
}

// Show scoreboard Function
let showScoreboard = function () {
    alert("Wins: "+ scoreboard[0] + ", Losses: " + scoreboard[1] + ", Ties: " + scoreboard[2]);
}

// Play again? Function
let playAgain = function () {
    let keepPlaying = confirm("Play again?");                           // The user is asked if they want to play again
    while (keepPlaying === true) {                                      // IF they do
        gameStart();                                                    // THEN the game will start
        showScoreboard();                                               // THEN the scoreboard will be shown
        playAgain();                                                    // THEN they will be asked if they want to play again
    }                                                                   // IF they do not want to play again
    alert("Thanks for playing!");                                       // THEN they will be thanked for playing
}

// Start the game
gameStart();

// Show scoreboard
showScoreboard();

// Play again?
playAgain();