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

    //variables to save the score 
    let humanScore = 0; 
    let computerScore = 0;
    const round = document.querySelector('.round');
    const humanSelectionText = document.querySelector('.human-selection-text');
    const computerSelectionText = document.querySelector('.computer-selection-text');
    const humanScoreText = document.querySelector('.human-score-text');
    const computerScoreText = document.querySelector('.computer-score-text');

    function playRound(e) {
        let computerChoice = getComputerChoice();
        const playerSelection = e.target.id;

        if (playerSelection === '') {
            return;
        }

        humanSelectionText.textContent = playerSelection.toUpperCase() + '!!!';
        computerSelectionText.textContent = computerChoice.toUpperCase() + '!!!';

        const gameHistoryHuman = document.createElement('p');
        gameHistoryHuman.setAttribute('class', 'game-history');
        const gameHistoryComputer = document.createElement('p');
        gameHistoryComputer.setAttribute('class', 'game-history');
        
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
        humanScoreText.textContent = String(humanScore);
        computerScoreText.textContent = String(computerScore);
        gameHistoryHuman.textContent = playerSelection;
        gameHistoryComputer.textContent = computerChoice;
        humanScoreText.parentNode.appendChild(gameHistoryHuman);
        computerScoreText.parentNode.appendChild(gameHistoryComputer);

    if (humanScore === 5) {
        round.textContent = 'The human reached 5 points. The Human won the game!';
        round.setAttribute('class', 'round round-human');
        buttons.removeEventListener('click', playRound);
        buttons.addEventListener('click', () => {
            alert('Reload the page to play again!');
        });
    } else if (computerScore === 5) {
        round.textContent = 'The Computer reached 5 points. The Computer won the game!';
        round.setAttribute('class', 'round round-computer');
        buttons.removeEventListener('click', playRound);
        buttons.addEventListener('click', () => {
            alert('Reload the page to play again!');
        });
    }
    }

const buttons = document.querySelector('.human-selection-buttons');
buttons.addEventListener('click', playRound);
