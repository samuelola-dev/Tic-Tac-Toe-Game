// Tic Tac Toe Bot



// Bot Levels
const gameLevel = {
    easy: document.createElement('script'),
    medium: document.createElement('script'),
    hard: document.createElement('script'),
}


// Player chooses bot level
function startGame(level){
    if (level === 'easy') {
        gameLevel.easy.src = './levels/easy.js'
        document.body.appendChild(gameLevel.easy);
    } else if (level === 'medium') {
        gameLevel.medium.src = './levels/medium.js'
        document.body.appendChild(gameLevel.medium);
    } else {
        gameLevel.hard.src = './levels/hard.js'
        document.body.appendChild(gameLevel.hard);
    }
    setTimeout(()=>{
        botLevelPrompt.close();
    }, 300);
}

// Bot

let firstPlayer = "x";
let isFirstPlayer = true;
let bot = 'o';
let botCanPlay = true;
let currentPlayer = 'x';


// Player
for (let i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener('click', ()=>{
        
        if (gameCell[i].classList.contains("empty")) {
            changePlayer();
            cell[i] = currentPlayer;   
            displayAnimation(i, currentPlayer);
            gameCell[i].classList.remove("empty");
            gameCell[i].classList.add(currentPlayer);
            pass();
            console.log("Now waiting for bot");
            if (botCanPlay) {
                botChoice();
            }
        }
    });   
}

const resultPrompt = document.querySelector(".result-prompt");
let winner = '';

function displayWinner(currentPlayer) {
    const status = document.querySelector("#status");
    currentPlayer === "x" ? status.innerText = 'You win' : status.innerText = 'Bot wins';
    currentPlayer === "Draw" && (status.innerText = "Draw");

    // Saves current player's score
    addPlayerScore(currentPlayer);

    setTimeout(()=>{
        resultPrompt.showModal();
    }, 700);

    // Saves winner
    winner = currentPlayer;

    // Bot: stops playing after declaring winner
    botCanPlay = !botCanPlay;
}

const empty = document.querySelectorAll(".empty");

// Prevents player from playing while bot is thinking

function disablePlay(){
    empty.forEach((cell)=>{
        cell.style = "pointer-events: none;";
    });
}

function enablePlay(){
    empty.forEach((cell)=>{
        cell.style = "pointer-events: auto;";
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





