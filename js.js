/*getComputerChoice() function will randomly return one of the following strings values: "rock", "paper" or "scissors"*/

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random()*100);
    if (choiceNum <= 32) {
        return "rock"  + " - " + choiceNum;
    } else if (choiceNum <= 66) {
        return "paper"  + " - " + choiceNum;
    } else if (choiceNum <= 99) {
        return "scissors" + " - " + choiceNum;
    }
}

/*getHumanChoice() will be the function that takes the user choice and returns it */
function getHumanChoice(string) {
    let humanChoice = string; 
    return humanChoice;
}

console.log("Your choice: " + getHumanChoice(prompt("rock, paper or scissors?")));
console.log("The computer chose: " + getComputerChoice());
