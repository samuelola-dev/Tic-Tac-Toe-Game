function botChoice() {
    isFirstPlayer = !isFirstPlayer;
    changePlayer();
    disablePlay();
    hardMode();
    isFirstPlayer = !isFirstPlayer;
}

botChoice();

// Hard Mode

function hardMode(){
    botWin()
    pass();
}


// High Wining Chances (100%)
function botCanWin(winCell){
    const win = [true, true, true, true, true]
    const winDecision = win[Math.floor(Math.random() * win.length)]

    if (winDecision) {
        console.log("Bot: can win 'n taken");
        botTurn(winCell);
    } else {
        console.log("Bot: can win 'n ignored");
        botBlock();
    }
}

// High Blocking Chances (100%)
function botCanBlock(blockedCell){
    const block = [true, true, true, true, true];
    const blockDecision = block[Math.floor(Math.random() * block.length)];

    if (blockDecision){
        console.log("Bot: can block 'n taken");
        botTurn(blockedCell);
    } else {
        console.log("Bot: can block 'n ignored");
        botRandom();
    }
}



