let isFirstPlayer = true;

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