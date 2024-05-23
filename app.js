let computerScore = 0;
let humanScore = 0;
const main = document.querySelector("main");
const result = document.getElementById("result");
const player = document.getElementById("player");
const computer = document.getElementById("computer");

function getComputerChoice() {
    const characters = ["rock", "paper", "scissors"];
    const computerChoice = characters[Math.floor(Math.random() * characters.length)];

    return computerChoice;
}

function playGame(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice){
        result.textContent = "It's a TIE!!!";
    } else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice == "paper") {
                    result.textContent = "You lose! Paper beats rock.";
                    computerScore++;
                    break;
                } else {
                    result.textContent = "You win! Rock beats scissors.";
                    humanScore++;
                    break;
                }
            case "paper":
                if (computerChoice == "scissors") {
                    result.textContent = "You lose! Scissors beats paper.";
                    computerScore++;
                    break;
                } else {
                    result.textContent = "You win! Paper beats rock.";
                    humanScore++;
                    break;
                }
            case "scissors": 
                if (computerChoice == "rock") {
                    result.textContent = "You lose! Rock beats scissors";
                    computerScore++;
                    break;
                } else {
                    result.textContent = "You win! Scissors beats paper";
                    humanScore++;
                    break;
                }
        }
    }

    player.textContent = `Player: ${humanScore}`;
    computer.textContent = `Computer: ${computerScore}`;

    if(humanScore === 5) {
        result.textContent = "You win!!! Choose again";
        main.appendChild(result);
        computerScore = 0;
        humanScore = 0;
    } else if (computerScore === 5){
        result.textContent = "You loose!!! Choose again";
        main.appendChild(result);
        computerScore = 0;
        humanScore = 0;
    } else {
        main.appendChild(result);
    }
}