let isFirstPlayer = true;
let currentPlayer = "x";
// let gameCell = document.querySelectorAll('.empty')

for (let i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener('click', ()=>{
        
        if (gameCell[i].classList.contains("empty")) {
            changePlayer();
            cell[i] = currentPlayer;   
            displayAnimation(i, currentPlayer);
            gameCell[i].classList.remove("empty");
            gameCell[i].classList.add(currentPlayer);
            pass();
            botChoice();
        }
        console.log(gameCell);
        console.log(cell);
        
    });   
}


// Turn enable and disable play into conditions for cleaner codes
function enablePlay(){
    const empty = document.querySelectorAll(".empty");
    empty.forEach((cell)=>{
        cell.style = "pointer-events: auto;";
    });
}

function disablePlay(){
    const empty = document.querySelectorAll(".empty");
    empty.forEach((cell)=>{
        cell.style = "pointer-events: none;";
    });
}



// Bot generates a random cell
let randomCell = "";
function botRandom() {
    const emptyCell = cell.filter((cell)=>{
        return isFinite(cell)
    });

    console.log(emptyCell);

    randomCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];
    console.log(randomCell + " is choosen");
    botTurn(randomCell);
}

// Bot picks selected cell
function botTurn(selectedCell) {
    // adds selected cell
    if (isFinite(selectedCell) && gameCell[selectedCell].classList.contains('empty')) {
        cell[selectedCell] = currentPlayer;
        gameCell[selectedCell].classList.remove("empty");
        gameCell[selectedCell].classList.add(currentPlayer);

        setTimeout(()=> {
            displayAnimation(selectedCell, currentPlayer);
            enablePlay()
        }, 900)
    } 
}

