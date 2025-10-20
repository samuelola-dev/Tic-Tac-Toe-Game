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
        console.log(gameCell);
        console.log(cell);

    });   
}

function displayWinner(currentPlayer) {
    const dialog = document.querySelector("dialog");
    const status = document.querySelector("#status");
    currentPlayer === "x" ? status.innerHTML = 'Player 1 wins' : status.innerHTML = 'Player 2 wins'
    setTimeout(()=>{dialog.showModal()}, 700);
}
