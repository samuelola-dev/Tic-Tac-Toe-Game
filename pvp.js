let isFirstPlayer = true;
let currentPlayer = "x";


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

function displayWinner(currentPlayer) {
    const status = document.querySelector("#status");
    currentPlayer === "x" ? status.innerText = 'Player 1 wins' : status.innerText = 'Player 2 wins';
    currentPlayer === "Draw" && (status.innerText = "Draw");
    addPlayerScore(currentPlayer);
    
    setTimeout(()=>{
        resultPrompt.showModal();
    }, 700);
}





