let firstPlayer = "x";
let bot = "o";

// Store first player and second player in local storage

let currentPlayer = "x";

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

const displayAnimation = (i, currentPlayer) => {
    currentPlayer === 'x' ? gameCell[i].innerHTML = `${symbols.x}` : gameCell[i].innerHTML = `${symbols.o}`    
}

let isFirstPlayer = true;

function botChoice() {
    isFirstPlayer = !isFirstPlayer;
    changePlayer();
    disablePlay();
    easyMode();
    isFirstPlayer = !isFirstPlayer;
}


function changePlayer() {
    if (isFirstPlayer) {
        currentPlayer = "x";
    } else {
        currentPlayer = "o"
    }
}


function pass(){

    switch (true) {
        // diagonal wins
        case (cell[0] === currentPlayer && cell[4] === currentPlayer && cell[8] === currentPlayer): displayWinner(currentPlayer); break;
        case (cell[2] === currentPlayer && cell[4] === currentPlayer && cell[6] === currentPlayer): displayWinner(currentPlayer); break;
        
        // vertical wins
        case (cell[0] === currentPlayer && cell[3] === currentPlayer && cell[6] === currentPlayer): displayWinner(currentPlayer); break;
        case (cell[1] === currentPlayer && cell[4] === currentPlayer && cell[7] === currentPlayer): displayWinner(currentPlayer); break; 
        case (cell[2] === currentPlayer && cell[5] === currentPlayer && cell[8] === currentPlayer): displayWinner(currentPlayer); break; 
        
        // horizontal wins
        case (cell[0] === currentPlayer && cell[1] === currentPlayer && cell[2] === currentPlayer): displayWinner(currentPlayer); break; 
        case (cell[3] === currentPlayer && cell[4] === currentPlayer && cell[5] === currentPlayer): displayWinner(currentPlayer); break; 
        case (cell[6] === currentPlayer && cell[7] === currentPlayer && cell[8] === currentPlayer): displayWinner(currentPlayer); break; 
    }

    // displayDraw();
}

function displayWinner(currentPlayer) {
    if (currentPlayer === "x") {  
        alert("Player 1 wins");
        setTimeout(()=>{
            location.reload();
        }, 400);
    } else {
        setTimeout(()=>{
            alert("Bot wins");
            location.reload();
        }, 1300);
    }
}

// let isBotPlaying = true;

// Turn enable and disable play into conditions for cleaner codes

function enablePlay(){
    const empty = document.querySelectorAll(".empty");
    empty.forEach((cell)=>{
        cell.style = "pointer-events: auto;";
    });
        // alert("Bot is thinking...")
}

function disablePlay(){
    const empty = document.querySelectorAll(".empty");
    empty.forEach((cell)=>{
        cell.style = "pointer-events: none;";
    });
}




// Easy Mode
function easyMode(){
    // Bot chooses to block or not block (2 out of 3 times)
    const win = [false, false, true, false]
    const winDecision = win[Math.floor(Math.random() * win.length)]
    // botWin()
    botBlock();
    // botRandom()
    pass();
}


// Bot generates a random cell
let randomCell = '';
function botRandom() {
    const emptyCell = cell.filter((cell)=>{
        return isFinite(cell)
    });

    // console.log("Bot is " + currentPlayer)
    console.log(emptyCell);

    randomCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];
    console.log(randomCell + " is choosen");
    botTurn(randomCell);
}

// Bot picks selected cell
function botTurn(selectedCell) {
    // adds selected cell
    if (isFinite(selectedCell)) {
        cell[selectedCell] = currentPlayer;
        gameCell[selectedCell].classList.remove("empty");
        gameCell[selectedCell].classList.add(currentPlayer);

        setTimeout(()=> {
            displayAnimation(selectedCell, currentPlayer);
            enablePlay()
        }, 900)

    } else {
            alert("Draw")
            location.reload();
    }
}


// If can bot block

function botCanBlock(blockedCell){
    const block = [false, true, false];
    const blockDecision = block[Math.floor(Math.random() * block.length)];

    if (blockDecision){
        console.log("Decision True!");
        botTurn(blockedCell);
    } else {
        console.log("Play on, bot can block but didn't meet decision")
        botRandom();
    }
}



function botBlock() {
    console.log("Now working since there is no wins")
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

function botWin(){
    switch (true) {
        case (cell[4] === bot && cell[8] === bot): botTurn(0); break;
        case (cell[0] === bot && cell[8] === bot): botTurn(4); break;
        case (cell[0] === bot && cell[4] === bot): botTurn(8); break;   
        case (cell[4] === bot && cell[6] === bot): botTurn(2); break;
        case (cell[2] === bot && cell[6] === bot): botTurn(4); break;
        case (cell[2] === bot && cell[4] === bot): botTurn(6); break;
        case (cell[3] === bot && cell[6] === bot): botTurn(0); break;
        case (cell[0] === bot && cell[6] === bot): botTurn(3); break;
        case (cell[0] === bot && cell[3] === bot): botTurn(6); break;
        case (cell[4] === bot && cell[7] === bot): botTurn(1); break;
        case (cell[1] === bot && cell[7] === bot): botTurn(4); break;
        case (cell[1] === bot && cell[4] === bot): botTurn(7); break;
        case (cell[5] === bot && cell[8] === bot): botTurn(2); break;
        case (cell[2] === bot && cell[8] === bot): botTurn(5); break;
        case (cell[2] === bot && cell[5] === bot): botTurn(8); break;
        case (cell[1] === bot && cell[2] === bot): botTurn(0); break;
        case (cell[0] === bot && cell[2] === bot): botTurn(1); break;
        case (cell[0] === bot && cell[1] === bot): botTurn(2); break;
        case (cell[4] === bot && cell[5] === bot): botTurn(3); break;
        case (cell[3] === bot && cell[5] === bot): botTurn(4); break;
        case (cell[3] === bot && cell[4] === bot): botTurn(5); break;
        case (cell[7] === bot && cell[8] === bot): botTurn(6); break;
        case (cell[6] === bot && cell[8] === bot): botTurn(7); break;
        case (cell[6] === bot && cell[7] === bot): botTurn(8); break;
        default: botBlock(); break;
    }
}

console.log(sam);