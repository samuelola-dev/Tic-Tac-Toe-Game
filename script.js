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

const gameCell = document.querySelectorAll(".empty");



const displayAnimation = (i, currentPlayer) => {
    currentPlayer === 'x' ? gameCell[i].innerHTML = `${symbols.x}` : gameCell[i].innerHTML = `${symbols.o}`    
}

// let isFirstPlayer = true;

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

}

const dialog = document.querySelector("dialog")
function displayWinner(currentPlayer) {
    const status = document.querySelector("#status");
    if (currentPlayer === "x") {
        status.innerHTML = 'Player 1 wins'
        botCanPlay = !botCanPlay;
    } else {
        status.innerHTML = 'Player 2 wins'
    }
    setTimeout(()=>{
        dialog.showModal()
    }, 700)
}
