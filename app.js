function getComputerChoice() {
    const characters = ["rock", "paper", "scissors"];

    let randomNumber = Math.floor(Math.random() * characters.length);
    let computerChoice = characters[randomNumber];

    return computerChoice;
}

function getHumanChoice() {
    let userChoice = window.prompt("Choose rock, paper, scissors");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        switch(humanChoice) {
            case "rock":
                if (computerChoice == "rock") {
                    console.log("Draw, rock it's equals to rock");
                    break;
                } else if (computerChoice == "paper") {
                    console.log("You loose, paper beats rock!!!");
                    computerScore++;
                    break;
                } else {
                    console.log("You win, rock beats scissors!!!");
                    humanScore++;
                    break;
                }
            case "paper":
                if (computerChoice == "rock") {
                    console.log("You win, paper beats rock!!!");
                    humanScore++;
                    break;
                } else if (computerChoice == "paper") {
                    console.log("Draw, paper it's equals to paper");
                    break;
                } else {
                    console.log("You loose, scissors beats paper!!!");
                    computerScore++;
                    break;
                }
            case "scissors":
                if (computerChoice == "rock") {
                    console.log("You loose, rock beats scissors!!!");
                    computerScore++;
                    break;
                } else if (computerChoice == "paper") {
                    console.log("You win, scissors beats paper!!!");
                    computerScore++;
                    break;
                } else {
                    console.log("Draw, scissors it's equals to scissors!!!");
                    break;
                }
            default: 
                console.log("Invalid option...");
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(computerScore);
    console.log(humanScore);

    if(computerScore > humanScore) {
        console.log("You have lost :(");
    } else if(computerScore === humanScore) {
        console.log("DRAW");
    } else {
        console.log("Congratulations, you win!!!");
    }
}

playGame();