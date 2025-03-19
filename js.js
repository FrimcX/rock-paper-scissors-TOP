/*getComputerChoice() function will randomly return one of the following strings values: "rock", "paper" or "scissors"*/

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random()*100);
    if (choiceNum <= 32) {
        return "rock";
    } else if (choiceNum <= 66) {
        return "paper";
    } else if (choiceNum <= 99) {
        return "scissors";
    }
}

/*getHumanChoice() will be the function that takes the user choice and returns it */
function getHumanChoice(string) {
    let humanChoice = string.toLowerCase(); //humanChoice but case insensitive
    return humanChoice;
}



function playGame() {
    //variables to save the score 
    let humanScore = 0; 
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log("Human: " + humanChoice + " | Computer: " + computerChoice); //checking choices

        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("It' a tie!");
            } else if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock...");
                computerScore += 1;
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors...");
                humanScore += 1;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock...");
                humanScore += 1;
            } else if (computerChoice == "paper") {
                console.log("It' a tie!");
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper...");
                computerScore += 1;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors...");
                computerScore += 1;
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper...");
                humanScore += 1;
            } else if (computerChoice == "scissors") {
                console.log("It' a tie!");
            }
        }
    }

    console.group("<-- Game 1 -->");
    playRound(getHumanChoice(prompt("rock, paper or scissors?")), getComputerChoice());
    console.log("Human: " + humanScore + " | Computer: " + computerScore);
    console.groupEnd();
    console.log("\n");


    console.group("<-- Game 2 -->");
    playRound(getHumanChoice(prompt("rock, paper or scissors?")), getComputerChoice());
    console.log("Human: " + humanScore + " | Computer: " + computerScore);
    console.groupEnd();
    console.log("\n");

    console.group("<-- Game 3 -->");
    playRound(getHumanChoice(prompt("rock, paper or scissors?")), getComputerChoice());
    console.log("Human: " + humanScore + " | Computer: " + computerScore);
    console.groupEnd();
    console.log("\n");

    console.group("<-- Game 4 -->");
    playRound(getHumanChoice(prompt("rock, paper or scissors?")), getComputerChoice());
    console.log("Human: " + humanScore + " | Computer: " + computerScore);
    console.groupEnd();
    console.log("\n");

    console.group("<-- Game 5 -->");
    playRound(getHumanChoice(prompt("rock, paper or scissors?")), getComputerChoice());
    console.log("Human: " + humanScore + " | Computer: " + computerScore);
    console.groupEnd();
    console.log("\n");
}

playGame();