console.log("Hello World!");

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

console.log(getComputerChoice());