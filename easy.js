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
    // Bot chooses to block or not block (2 out of 3 times)
    const win = [false, false, true, false]
    const winDecision = win[Math.floor(Math.random() * win.length)]
    botBlock();
    pass();
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
