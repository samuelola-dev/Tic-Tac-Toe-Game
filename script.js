// Tic Tac Toe Game by samuelola-dev

// Game Mode Prompt
const gameModePrompt = document.querySelector(".game-mode-prompt")
gameModePrompt.showModal();

// Bot Level Prompt
const botLevelPrompt = document.querySelector(".bot-level-prompt")

// Game Modes
const gameMode = {
    pvp: document.createElement('script'),
    bot: document.createElement('script'),
}

function selectMode(mode) {
    if (mode === 'pvp') {
        // Player VS Player
        gameMode.pvp.src = './pvp.js';
        document.body.appendChild(gameMode.pvp);
        displayPlayers("Player 1", "Player 2");

        // closes first prompt
        gameModePrompt.close();
    } else if (mode === 'bot') {
        // Player VS Bot
        gameMode.bot.src = './bot.js';
        document.body.appendChild(gameMode.bot);
        displayPlayers("You", "Bot")
    }

    // If bot game mode was selected
    gameMode.bot.onload = () =>{
        // closes first prompt and opens second prompt
        gameModePrompt.close();
        botLevelPrompt.showModal()
    }
}

// Displaying of Player names on score board
const playerElements = {
    first: document.getElementById('firstPlayer'),
    second: document.getElementById('secondPlayer')
}

function displayPlayers(firstPlayer, secondPlayer) {
    playerElements.first.innerText = firstPlayer;
    playerElements.second.innerText = secondPlayer;
}


// Tic Tac Toe
const cell = [
    0, 1, 2, 
    3, 4, 5, 
    6, 7, 8
];

const symbols = {
    x: `
    <div class="x-symbol">
        <svg viewBox="0 0 120 120" width="65" height="65">
            <g fill="none" stroke="#00ffff" stroke-width="16" stroke-linecap="round" stroke-linejoin="round">
            <path class="line1" d="M30 30 L90 90" />
            <path class="line2" d="M90 30 L30 90" />
      </g>
    </svg>
  </div>
    `,
    o:  `
        <div class="o-symbol">
    <svg viewBox="0 0 120 120" width="65" height="65">
      <circle cx="60" cy="60" r="34" fill="none" stroke="#ff00ff" stroke-width="16" stroke-linecap="round" />
    </svg>
  </div>
    `
}




const gameCell = document.querySelectorAll(".empty");
const displayAnimation = (i, currentPlayer) => {
    currentPlayer === 'x' ? gameCell[i].innerHTML = `${symbols.x}` : gameCell[i].innerHTML = `${symbols.o}`    
}

// let isFirstPlayer = true;



function changePlayer() {
    isFirstPlayer ? currentPlayer = "x" : currentPlayer = "o";
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
        
        default: displayDraw();
        break;
    }

}

function displayDraw(){
    console.log("checking for draws..")
    let numOfX = document.querySelectorAll('.x').length;
    let numOfO = document.querySelectorAll('.o').length;
    if (numOfX === 5 && numOfO === 4 || numOfX === 4 && numOfO=== 5) {
        displayWinner("Draw");
    } 
}

