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


// Low Wining Chances (40%)
function botCanWin(winCell){
    const win = [true, false, false, false, true]
    const winDecision = win[Math.floor(Math.random() * win.length)]

    if (winDecision) {
        console.log("Bot: can win 'n taken");
        botTurn(winCell);
    } else {
        console.log("Bot: can win 'n ignored");
        botBlock();
    }
}

// Low Blocking Chances (40%)
function botCanBlock(blockedCell){
    const block = [true, false, false, true, false];
    const blockDecision = block[Math.floor(Math.random() * block.length)];

    if (blockDecision){
        console.log("Bot: can block 'n taken");
        botTurn(blockedCell);
    } else {
        console.log("Bot: can block 'n ignores")
        botRandom();
    }
}



