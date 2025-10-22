let isFirstPlayer = true;
let currentPlayer = "x";

indicateTurn('player1');

for (let i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener('click', ()=>{

        if (gameCell[i].classList.contains("empty")) {
            cell[i] = currentPlayer;   
            displayAnimation(i, currentPlayer);
            gameCell[i].classList.remove("empty");
            gameCell[i].classList.add(currentPlayer);
            isFirstPlayer = !isFirstPlayer;
            pass();
        }
        changePlayer();
    });   
}

const resultPrompt = document.querySelector(".result-prompt");
let winner = '';

function displayWinner(currentPlayer) {
    const status = document.querySelector("#status");
    currentPlayer === "x" ? status.innerText = 'Player 1 wins' : status.innerText = 'Player 2 wins';
    currentPlayer === "Draw" && (status.innerText = "Draw");
    disablePlay();

    // Saves current player's score
    addPlayerScore(currentPlayer);

    setTimeout(()=>{
        resultPrompt.showModal();
    }, 700);

    // Saves winner
    winner = currentPlayer;
}

// Prevent Players from playing
const empty = document.querySelectorAll(".empty");
function disablePlay(){
    empty.forEach((cell)=>{
        cell.style = "pointer-events: none;";
    });
}








