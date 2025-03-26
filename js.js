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

/*
function playGame() {*/
    
    //variables to save the score 
    let humanScore = 0; 
    let computerScore = 0;
    const round = document.querySelector('.round');
    const humanSelectionText = document.querySelector('.human-selection-text');
    const computerSelectionText = document.querySelector('.computer-selection-text');

    function playRound(e) {
        let computerChoice = getComputerChoice();
        const playerSelection = e.target.id;
        humanSelectionText.textContent = playerSelection.toUpperCase() + '!!!';
        computerSelectionText.textContent = computerChoice.toUpperCase() + '!!!';

        if (playerSelection === '') {
            return;
        }
        console.log("Human: " + playerSelection + " | Computer: " + computerChoice); //checking choices
        
        switch (playerSelection) {
            case ('rock'): {
                if (computerChoice == "rock") {
                    round.textContent = "It' a tie!";
                } else if (computerChoice == "paper") {
                    round.textContent = "You lose! Paper beats Rock...";
                    computerScore += 1;
                } else if (computerChoice == "scissors") {
                    round.textContent = "You win! Rock beats Scissors...";
                    humanScore += 1;
                }
                break;
            }
            case ('paper'): {
                if (computerChoice == "rock") {
                    round.textContent = "You win! Paper beats Rock...";
                    humanScore += 1;
                } else if (computerChoice == "paper") {
                    round.textContent = "It' a tie!";
                } else if (computerChoice == "scissors") {
                    round.textContent = "You lose! Scissors beats Paper...";
                    computerScore += 1;
                }
                break;
            }
            case ('scissors'): {
                if (computerChoice == "rock") {
                    round.textContent = "You lose! Rock beats Scissors...";
                    computerScore += 1;
                } else if (computerChoice == "paper") {
                    round.textContent = "You win! Scissors beats Paper...";
                    humanScore += 1;
                } else if (computerChoice == "scissors") {
                    round.textContent = "It' a tie!";
                }
                break;
            }
        }
    }

/*
}

playGame(); */

const buttons = document.querySelector('.human-selection-buttons');
buttons.addEventListener('click', playRound);