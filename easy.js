let firstPlayer = "x";
let bot = "o";
// let currentPlayer = "x";

// Store first player and second player in local storage


function botChoice() {
    isFirstPlayer = !isFirstPlayer;
    changePlayer();
    disablePlay();
    easyMode();
    isFirstPlayer = !isFirstPlayer;
}

// Easy Mode

function easyMode(){
    botWin()
    pass();
}


// Easy Wining Chances
function botCanWin(winCell){
    const win = [false, false, true, false]
    const winDecision = win[Math.floor(Math.random() * win.length)]

    if (winDecision) {
        console.log("Bot can win and Allowed");
        botTurn(winCell);
    } else {
        console.log("Bot can win and Not Allowed");
        botBlock();
    }
}

// Easy Block Chances
function botCanBlock(blockedCell){
    const block = [false, true, false];
    const blockDecision = block[Math.floor(Math.random() * block.length)];

    if (blockDecision){
        console.log("Bot can Block and Allowed");
        botTurn(blockedCell);
    } else {
        console.log("Bot can Block and Not allowed")
        botRandom();
    }
}



