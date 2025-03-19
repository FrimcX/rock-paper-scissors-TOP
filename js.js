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
    let humanChoice = string; 
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceData = humanChoice.toLowerCase(); //humanChoice but case insensitive
    console.log("Human: " + humanChoiceData); //Checking results
    console.log("Computer: " + computerChoice); //Checking results

    if (humanChoiceData == "rock") {
        if (computerChoice == "rock") {
            console.log("It' a tie!");
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock...");
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors...");
        }
    } else if (humanChoiceData == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock...");
        } else if (computerChoice == "paper") {
            console.log("It' a tie!");
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper...");
        }
    } else if (humanChoiceData == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors...");
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper...");
        } else if (computerChoice == "scissors") {
            console.log("It' a tie!");
        }
    }
}

//variables to save the score 
let humanScore = 0; 
let computerScore = 0;

playRound(getHumanChoice(prompt("rock, paper or scissors?")), getComputerChoice());

/*
console.log("Your choice: " + getHumanChoice(prompt("rock, paper or scissors?")));
console.log("The computer chose: " + getComputerChoice());
*/