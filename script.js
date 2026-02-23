let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let userScore = 0;
let computerScore = 0;
let total = 5;

function playRound(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3);

    if (playerChoice === computerChoice) {
        document.getElementById("announce").innerHTML = "It's a tie!";
    } 
    else if (
        (playerChoice === 0 && computerChoice === 1) || 
        (playerChoice === 1 && computerChoice === 2) ||
        (playerChoice === 2 && computerChoice === 0)
    ) {
        document.getElementById("announce").innerHTML = "Computer wins!";
        computerScore++;
        document.querySelectorAll("input")[1].value = computerScore;
    } 
    else {
        document.getElementById("announce").innerHTML = "You win!";
        userScore++;
        document.querySelectorAll("input")[0].value = userScore;
    }

    total--;
    if (total === 0) {
        reset();
    }
}

rock.addEventListener("click", () => playRound(0));
paper.addEventListener("click", () => playRound(1));
scissor.addEventListener("click", () => playRound(2));

function reset() {
    if (userScore > computerScore) {
        document.getElementById("announce").innerHTML = "Final Result: You win!";
    } else if (userScore < computerScore) {
        document.getElementById("announce").innerHTML = "Final Result: Computer wins!";
    } else {
        document.getElementById("announce").innerHTML = "Final Result: It's a tie!";
    }

    userScore = 0;
    computerScore = 0;
    total = 5;

    document.querySelectorAll("input")[0].value = userScore;
    document.querySelectorAll("input")[1].value = computerScore;
}