function botChoice() {
    isFirstPlayer = !isFirstPlayer;
    changePlayer();
    disablePlay();
    mediumMode();
    isFirstPlayer = !isFirstPlayer;
}

// Medium Mode

function mediumMode(){
    botWin()
    pass();
}


// Medium Wining Chances (80%)
function botCanWin(winCell){
    const win = [true, true, false, true, true]
    const winDecision = win[Math.floor(Math.random() * win.length)]

     if (winDecision) {
        console.log("Bot: can win 'n taken");
        botTurn(winCell);
    } else {
        console.log("Bot: can win 'n ignored");
        botBlock();
    }
}

// Medium Block Chances (80%)
function botCanBlock(blockedCell){
    const block = [true, true, false, true, true];
    const blockDecision = block[Math.floor(Math.random() * block.length)];

    if (blockDecision){
        console.log("Bot: can block 'n taken");
        botTurn(blockedCell);
    } else {
        console.log("Bot: can block 'n ignored")
        botRandom();
    }
}



