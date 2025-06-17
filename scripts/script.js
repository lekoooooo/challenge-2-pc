
function rockPaperScissors(){
    let player1 = prompt("Player 1, enter rock, paper, or scissors:").toLowerCase();
    let player2 = prompt("Player 2, enter rock, paper, or scissors:").toLowerCase();

    if(player1 === player2){
        return "It's a tie!";
    } else if(player1 === "rock"){
        if(player2 === "scissors"){
            return "Player 1 wins!";
        } else if(player2 === "paper"){
            return "Player 2 wins!";
        }
    } else if(player1 === "scissors"){
        if(player2 === "paper"){
            return "Player 1 wins!";
        } else if(player2 === "rock"){
            return "Player 2 wins!";
        }
    } else if(player1 === "paper"){
        if (player2 === "rock"){
            return "Player 1 wins!";
        } else if(player2 === "scissors"){
            return "Player 2 wins! ";
        }
    } else{
        return "Enter rock, paper, or scissors.";
    }
}

console.log(rockPaperScissors());
