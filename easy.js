const cell = [
    0, 1, 2, 
    3, 4, 5, 
    6, 7, 8
];

const symbols = {
    x: `
    <div class="x-symbol">
        <svg viewBox="0 0 120 120" width="60" height="60">
            <g fill="none" stroke="#4F837A" stroke-width="17" stroke-linecap="round" stroke-linejoin="round">
            <path class="line1" d="M30 30 L90 90" />
            <path class="line2" d="M90 30 L30 90" />
      </g>
    </svg>
  </div>
    `,
    o:  `
        <div class="o-symbol">
    <svg viewBox="0 0 120 120" width="60" height="60">
      <circle cx="60" cy="60" r="34" fill="none" stroke="#D97C67" stroke-width="17" stroke-linecap="round" />
    </svg>
  </div>
    `
}

let firstPlayer = "x";
let ai = "o";

// Store first player and second player in local storage

const gameCell = document.querySelectorAll(".empty");
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
        setTimeout(()=>{
            alert("Player 1 wins");
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

function enablePlay(){
    const empty = document.querySelectorAll(".empty");
    empty.forEach((cell)=>{
        cell.style = "pointer-events: auto;";
    });
        alert("Bot is thinking...")
}

function disablePlay(){
    const empty = document.querySelectorAll(".empty");
    empty.forEach((cell)=>{
        cell.style = "pointer-events: none;";
    });
}


// Easy Mode
function easyMode(){
    const empty = document.querySelectorAll(".empty");
    const emptyCell = cell.filter((cell)=>{
        return isFinite(cell)
    });

    console.log("Bot is " + currentPlayer)
    console.log(emptyCell);

    // Bot Ignores 
    let randomCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];
    console.log(randomCell + " is choosen");
    console.log(gameCell[randomCell]);

    acceptMove(randomCell)
    botWin();
    pass();
}

// Change function name to a better name
// Better name is bot turn

function pickBot(selectedCell) {
    if (isFinite(selectedCell)) {
        cell[selectedCell] = currentPlayer;
        gameCell[selectedCell].classList.remove("empty");
        gameCell[selectedCell].classList.add(currentPlayer);

        setTimeout(()=> {
            displayAnimation(selectedCell, currentPlayer);
            enablePlay()
        }, 900)

    } else {
        console.log("Ai can't choose again");
    }
}

function acceptMove(randomCell) {
    switch (true) {
        // diagonal block
        case (cell[0] !== ai && cell[4] === firstPlayer && cell[8] === firstPlayer): pickBot(0); break;
        case (cell[0] === firstPlayer && cell[4] !== ai && cell[8] === firstPlayer): pickBot(4); break;
        case (cell[0] === firstPlayer && cell[4] === firstPlayer && cell[8] !== ai): pickBot(8); break;
        
        case (cell[2] !== ai && cell[4] === firstPlayer && cell[6] === firstPlayer): pickBot(2); break;
        case (cell[2] === firstPlayer && cell[4] !== ai && cell[6] === firstPlayer): pickBot(4); break;
        case (cell[2] === firstPlayer && cell[4] === firstPlayer && cell[6] !== ai): pickBot(6); break;
        

        // vertical block 
        case (cell[0] !== ai && cell[3] === firstPlayer && cell[6] === firstPlayer): pickBot(0); break;
        case (cell[0] === firstPlayer && cell[3] !== ai && cell[6] === firstPlayer): pickBot(3); break;
        case (cell[0] === firstPlayer && cell[3] === firstPlayer && cell[6] !== ai): pickBot(6); break;


        case (cell[1] !== ai && cell[4] === firstPlayer && cell[7] === firstPlayer): pickBot(1); break;
        case (cell[1] === firstPlayer && cell[4] !== ai && cell[7] === firstPlayer): pickBot(4); break;
        case (cell[1] === firstPlayer && cell[4] === firstPlayer && cell[7] !== ai): pickBot(7); break;


        case (cell[2] !== ai && cell[5] === firstPlayer && cell[8] === firstPlayer): pickBot(2); break;
        case (cell[2] === firstPlayer && cell[5] !== ai && cell[8] === firstPlayer): pickBot(5); break;
        case (cell[2] === firstPlayer && cell[5] === firstPlayer && cell[8] !== ai): pickBot(8); break;

        // horizontal block
        case (cell[0] !== ai && cell[1] === firstPlayer && cell[2] === firstPlayer): pickBot(0); break;
        case (cell[0] === firstPlayer && cell[1] !== ai && cell[2] === firstPlayer): pickBot(1); break;
        case (cell[0] === firstPlayer && cell[1] === firstPlayer && cell[2] !== ai): pickBot(2); break;

        case (cell[3] !== ai && cell[4] === firstPlayer && cell[5] === firstPlayer): pickBot(3); break;
        case (cell[3] === firstPlayer && cell[4] !== ai && cell[5] === firstPlayer): pickBot(4); break;
        case (cell[3] === firstPlayer && cell[4] === firstPlayer && cell[5] !== ai): pickBot(5); break;


        case (cell[6] !== ai && cell[7] === firstPlayer && cell[8] === firstPlayer): pickBot(6); break;
        case (cell[6] === firstPlayer && cell[7] !== ai && cell[8] === firstPlayer): pickBot(7); break;
        case (cell[6] === firstPlayer && cell[7] === firstPlayer && cell[8] !== ai): pickBot(8); break;

        default:  pickBot(randomCell); break;
    }
}

function botWin(){
    switch (true) {
         case(cell[4] === firstPlayer && cell[8] === firstPlayer): pickBot(0); break;
        case (cell[0] === firstPlayer && cell[8] === firstPlayer): pickBot(4); break;
        case (cell[0] === firstPlayer && cell[4] === firstPlayer): pickBot(8); break;
        
        case (cell[4] === firstPlayer && cell[6] === firstPlayer): pickBot(2); break;
        case (cell[2] === firstPlayer && cell[6] === firstPlayer): pickBot(4); break;
        case (cell[2] === firstPlayer && cell[4] === firstPlayer): pickBot(6); break;
        

        // vertical block 
        case (cell[3] === firstPlayer && cell[6] === firstPlayer): pickBot(0); break;
        case (cell[0] === firstPlayer && cell[6] === firstPlayer): pickBot(3); break;
        case (cell[0] === firstPlayer && cell[3] === firstPlayer): pickBot(6); break;


        case (cell[4] === firstPlayer && cell[7] === firstPlayer): pickBot(1); break;
        case (cell[1] === firstPlayer && cell[7] === firstPlayer): pickBot(4); break;
        case (cell[1] === firstPlayer && cell[4] === firstPlayer): pickBot(7); break;


        case (cell[5] === firstPlayer && cell[8] === firstPlayer): pickBot(2); break;
        case (cell[2] === firstPlayer && cell[8] === firstPlayer): pickBot(5); break;
        case (cell[2] === firstPlayer && cell[5] === firstPlayer): pickBot(8); break;

        // horizontal block
        case (cell[1] === firstPlayer && cell[2] === firstPlayer): pickBot(0); break;
        case (cell[0] === firstPlayer && cell[2] === firstPlayer): pickBot(1); break;
        case (cell[0] === firstPlayer && cell[1] === firstPlayer): pickBot(2); break;

        case (cell[4] === firstPlayer && cell[5] === firstPlayer): pickBot(3); break;
        case (cell[3] === firstPlayer && cell[5] === firstPlayer): pickBot(4); break;
        case (cell[3] === firstPlayer && cell[4] === firstPlayer): pickBot(5); break;


        case (cell[7] === firstPlayer && cell[8] === firstPlayer): pickBot(6); break;
        case (cell[6] === firstPlayer && cell[8] === firstPlayer): pickBot(7); break;
        case (cell[6] === firstPlayer && cell[7] === firstPlayer): pickBot(8); break;
    }
}