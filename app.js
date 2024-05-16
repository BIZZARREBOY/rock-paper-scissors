let computerScore = 0;
let humanScore = 0;
let fiveGames = 0;

function getComputerChoice() {
    const characters = ["rock", "paper", "scissors"];
    const computerChoice = characters[Math.floor(Math.random() * characters.length)];

    return computerChoice;
}

function playGame(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    const main = document.querySelector("main");
    const h2 = document.querySelector("h2");

    if (humanChoice === computerChoice){
        h2.textContent = "It's a TIE!!!";
    } else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice == "paper") {
                    h2.textContent = "You lose! Paper beats rock.";
                    computerScore++;
                    break;
                } else {
                    h2.textContent = "You win! Rock beats scissors.";
                    humanScore++;
                    break;
                }
            case "paper":
                if (computerChoice == "scissors") {
                    h2.textContent = "You lose! Scissors beats paper.";
                    computerScore++;
                    break;
                } else {
                    h2.textContent = "You win! Paper beats rock.";
                    humanScore++;
                    break;
                }
            case "scissors": 
                if (computerChoice == "rock") {
                    h2.textContent = "You lose! Rock beats scissors";
                    computerScore++;
                    break;
                } else {
                    h2.textContent = "You win! Scissors beats paper";
                    humanScore++;
                    break;
                }
        }
    }
    main.appendChild(h2);
}