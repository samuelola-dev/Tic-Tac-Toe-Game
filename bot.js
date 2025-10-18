let isFirstPlayer = true;
let currentPlayer = "x";
// let gameCell = document.querySelectorAll('.empty')
let botCanPlay = true;

for (let i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener('click', ()=>{
        
        if (gameCell[i].classList.contains("empty")) {
            changePlayer();
            cell[i] = currentPlayer;   
            displayAnimation(i, currentPlayer);
            gameCell[i].classList.remove("empty");
            gameCell[i].classList.add(currentPlayer);
            pass();
            if (botCanPlay) {
                botChoice();
            }

        }
        console.log(gameCell);
    });   
}

function displayWinner(currentPlayer) {
    const dialog = document.querySelector("dialog");
    const status = document.querySelector("#status");
    currentPlayer === "x" ? status.innerHTML = 'Player 1 wins' : status.innerHTML = 'Player 2 wins'

    // Bot: stops playing after declaring winner
    botCanPlay = !botCanPlay;
    setTimeout(()=>{dialog.showModal()}, 700);
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

    randomCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];
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

function botWin(){
     switch (true) {
        // diagonal block
        case (cell[0] !== firstPlayer && cell[4] === bot && cell[8] === bot): botCanWin(0); break;
        case (cell[0] === bot && cell[4] !== firstPlayer && cell[8] === bot): botCanWin(4); break;
        case (cell[0] === bot && cell[4] === bot && cell[8] !== firstPlayer): botCanWin(8); break; 

        case (cell[2] !== firstPlayer && cell[4] === bot && cell[6] === bot): botCanWin(2); break;
        case (cell[2] === bot && cell[4] !== firstPlayer && cell[6] === bot): botCanWin(4); break;
        case (cell[2] === bot && cell[4] === bot && cell[6] !== firstPlayer): botCanWin(6); break;


        case (cell[0] !== firstPlayer && cell[3] === bot && cell[6] === bot): botCanWin(0); break;
        case (cell[0] === bot && cell[3] !== firstPlayer && cell[6] === bot): botCanWin(3); break;
        case (cell[0] === bot && cell[3] === bot && cell[6] !== firstPlayer): botCanWin(6); break;

        case (cell[1] !== firstPlayer && cell[4] === bot && cell[7] === bot): botCanWin(1); break;
        case (cell[1] === bot && cell[4] !== firstPlayer && cell[7] === bot): botCanWin(4); break;
        case (cell[1] === bot && cell[4] === bot && cell[7] !== firstPlayer): botCanWin(7); break;

        case (cell[2] !== firstPlayer && cell[5] === bot && cell[8] === bot): botCanWin(2); break;
        case (cell[2] === bot && cell[5] !== firstPlayer && cell[8] === bot): botCanWin(5); break;
        case (cell[2] === bot&& cell[5] === bot && cell[8] !== firstPlayer): botCanWin(8); break;


        case (cell[0] !== firstPlayer && cell[1] === bot && cell[2] === bot): botCanWin(0); break;
        case (cell[0] === bot && cell[1] !== firstPlayer && cell[2] === bot): botCanWin(1); break;
        case (cell[0] === bot && cell[1] === bot && cell[2] !== firstPlayer): botCanWin(2); break;

        case (cell[3] !== firstPlayer && cell[4] === bot && cell[5] === bot): botCanWin(3); break;
        case (cell[3] === bot && cell[4] !== firstPlayer && cell[5] === bot): botCanWin(4); break;
        case (cell[3] === bot && cell[4] === bot && cell[5] !== firstPlayer): botCanWin(5); break;

        case (cell[6] !== firstPlayer && cell[7] === bot && cell[8] === bot): botCanWin(6); break;
        case (cell[6] === bot && cell[7] !== firstPlayer && cell[8] === bot): botCanWin(7); break;
        case (cell[6] === bot && cell[7] === bot && cell[8] !== firstPlayer): botCanWin(8); break;

        default: botBlock(); break;
    }
}

// If bot can win



function botBlock() {

    switch (true) {
        // diagonal block
        case (cell[0] !== bot && cell[4] === firstPlayer && cell[8] === firstPlayer): botCanBlock(0); break;
        case (cell[0] === firstPlayer && cell[4] !== bot && cell[8] === firstPlayer): botCanBlock(4); break;
        case (cell[0] === firstPlayer && cell[4] === firstPlayer && cell[8] !== bot): botCanBlock(8); break;
        
        case (cell[2] !== bot && cell[4] === firstPlayer && cell[6] === firstPlayer): botCanBlock(2); break;
        case (cell[2] === firstPlayer && cell[4] !== bot && cell[6] === firstPlayer): botCanBlock(4); break;
        case (cell[2] === firstPlayer && cell[4] === firstPlayer && cell[6] !== bot): botCanBlock(6); break;
        

        // vertical block 
        case (cell[0] !== bot && cell[3] === firstPlayer && cell[6] === firstPlayer): botCanBlock(0); break;
        case (cell[0] === firstPlayer && cell[3] !== bot && cell[6] === firstPlayer): botCanBlock(3); break;
        case (cell[0] === firstPlayer && cell[3] === firstPlayer && cell[6] !== bot): botCanBlock(6); break;


        case (cell[1] !== bot && cell[4] === firstPlayer && cell[7] === firstPlayer): botCanBlock(1); break;
        case (cell[1] === firstPlayer && cell[4] !== bot && cell[7] === firstPlayer): botCanBlock(4); break;
        case (cell[1] === firstPlayer && cell[4] === firstPlayer && cell[7] !== bot): botCanBlock(7); break;


        case (cell[2] !== bot && cell[5] === firstPlayer && cell[8] === firstPlayer): botCanBlock(2); break;
        case (cell[2] === firstPlayer && cell[5] !== bot && cell[8] === firstPlayer): botCanBlock(5); break;
        case (cell[2] === firstPlayer && cell[5] === firstPlayer && cell[8] !== bot): botCanBlock(8); break;

        // horizontal block
        case (cell[0] !== bot && cell[1] === firstPlayer && cell[2] === firstPlayer): botCanBlock(0); break;
        case (cell[0] === firstPlayer && cell[1] !== bot && cell[2] === firstPlayer): botCanBlock(1); break;
        case (cell[0] === firstPlayer && cell[1] === firstPlayer && cell[2] !== bot): botCanBlock(2); break;

        case (cell[3] !== bot && cell[4] === firstPlayer && cell[5] === firstPlayer): botCanBlock(3); break;
        case (cell[3] === firstPlayer && cell[4] !== bot && cell[5] === firstPlayer): botCanBlock(4); break;
        case (cell[3] === firstPlayer && cell[4] === firstPlayer && cell[5] !== bot): botCanBlock(5); break;


        case (cell[6] !== bot && cell[7] === firstPlayer && cell[8] === firstPlayer): botCanBlock(6); break;
        case (cell[6] === firstPlayer && cell[7] !== bot && cell[8] === firstPlayer): botCanBlock(7); break;
        case (cell[6] === firstPlayer && cell[7] === firstPlayer && cell[8] !== bot): botCanBlock(8); break;
        default: botRandom(); break;
    }
}





