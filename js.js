function gameBoard(){
  // creates the board
  const rows = 3;
  const columns = 3;
  const board = [];
  
  for(let i = 0; i < rows; i++){
    board[i] = [];
      for(j = 0; j < columns; j++){
        board[i].push(0);
      };
  };

  //marks the board and return marked board
  const addMark = function(mark, row, column){
    if (board[row][column] != 0) {
    } else {
      board[row][column] = mark
      return board;
    };
  };

  //used to get the board on new instances
  const getBoard = () => board;

  //prints the board
  const printBoard = () => {
    let printedBoard = gameBoard().getBoard();
    console.log(printedBoard);
  }

  return { getBoard, addMark, printBoard };
};


function createPlayers(player1 = "Player One", player2 = "Player Two"){

  return [
    { name: player1, mark: "X" }, 
    { name: player2, mark: "O" }
  ];
};

function gameControl(){

//create the players and calls the new gameboard instance
const playerArr = createPlayers();
let board = gameBoard();

//switch between players
let activePlayer = playerArr[0];

const playerSwitcher = function() {
  activePlayer = activePlayer === playerArr[0] ? playerArr[1] : playerArr[0];
};

const resetGame = function(){
  board = gameBoard();
  document.getElementById("game-area").style.pointerEvents = "auto";
  // activePlayer = playerArr[0]
  playerSwitcher();
  turnDeclaration();
}

//call for the player of current round
const turnDeclaration = function(){
console.log(`It's ${activePlayer.name}'s turn`);
};

//used to mark the board
const playRound = function(row, column){
let marked = board.addMark(activePlayer.mark, row, column)

//checks for victories
const victoryChecker = function(){
  const treeXInARow = marked.join(" ").includes("X,X,X");
  const treeOInARow = marked.join(" ").includes("O,O,O");
  const hasZero = marked.join("").includes(0);
  const declareTurn = turnDeclaration;

  let gameFinisher = () => {
    playerSwitcher();

    setTimeout(() => {
      let replay = confirm(`${activePlayer.name} wins! Play again?`, 1000);
    if (replay == true) {
          if (activePlayer == playerArr[0]){
            document.getElementById("player-one-score").innerHTML++
          } else {
            document.getElementById("player-two-score").innerHTML++
          }
          resetGame();
          let btns = document.getElementsByClassName("game-btn");
          for (let i = 0; i < btns.length; i++){
            btns[i].innerHTML = "&nbsp"
          };
    } else {
      let gamebtns = document.getElementById("game-area");
      gamebtns.style.pointerEvents = "none";
    }
  }, 0)
  };

  let gameTie = () => {
    console.log(`It's a tie!`);
  };

//checks columns
let col = false;

  for (let i = 0; i < 3; i++){
    if( marked[0][i] != 0 &&
        marked[0][i] == marked[1][i] &&
        marked[1][i] == marked[2][i]) {
        col = true;
        break;
        };
  };

//checks rows
  if (treeOInARow || treeXInARow) {
    gameFinisher();
// checks 1st diagonal 
  } else if ( marked[0][0] != 0 &&
    marked[0][0] == marked[1][1] &&
    marked[1][1] == marked[2][2]){
    gameFinisher();
// checks 2nd diagonal
  } else if ( marked[0][2] != 0 &&
    marked[0][2] == marked[1][1] &&
    marked[1][1] == marked[2][0]) {
    gameFinisher();
  } else if (col == true){
    gameFinisher();
  } else if(hasZero == false) {
    gameTie();
  } else {
    declareTurn();
  };
  
};

//switch players and checks for victories when a legal move is played, returning the marked board
if (marked){
  playerSwitcher();
  victoryChecker();
  return marked
};

};

turnDeclaration();

return { playRound, resetGame }
};

function gameInterface(){

  const playerArr = createPlayers()
  let activePlayer = playerArr[0];

  let playerOneBox = document.getElementById("player-one-name");
  let playerTwoBox = document.getElementById("player-two-name");

  playerOneBox.style.borderBottomColor = "red";
  playerOneBox.style.borderBottomStyle = "solid";

  const playerSwitcher = () => {
    activePlayer = activePlayer === playerArr[0] ? playerArr[1] : playerArr[0];

      if (activePlayer == playerArr[0]) {
      playerOneBox.style.borderBottomColor = "red";
      playerOneBox.style.borderBottomStyle = "solid";
      playerTwoBox.style.border = "none";
    } else {
      playerTwoBox.style.borderBottomColor = "red";
      playerTwoBox.style.borderBottomStyle = "solid";
      playerOneBox.style.border = "none";
    }
  };
  
  let newGame = () => {
    window.location.reload();
  }
  document.getElementById("new-game-btn").addEventListener("click", newGame);

  document.getElementById("container").addEventListener("click", (e) => {
    let target = e.target;

    let btn = () => {
      target.innerHTML = `${activePlayer.mark}`
      playerSwitcher();
    }

    if (target.innerHTML == "X" || target.innerHTML == "O") {    
    } else {
        switch(target.id) {

        case "00": 
        btn();
        playGame.playRound(0,0)
          break;
        
        case "01": 
        btn();
        playGame.playRound(0,1)
          break;
        
        case "02": 
        btn();
        playGame.playRound(0,2)
          break;
        
        case "10": 
        btn();
        playGame.playRound(1,0)
          break;
        
        case "11": 
        btn();
        playGame.playRound(1,1)
          break;
        
        case "12": 
        btn();
        playGame.playRound(1,2)
          break;
        
        case "20": 
        btn();
        playGame.playRound(2,0)
          break;
        
        case "21": 
        btn();
        playGame.playRound(2,1)
          break;
        
        case "22": 
        btn();
        playGame.playRound(2,2)
          break;

        // case "reset-btn": playGame.resetGame();
        //   playerSwitcher();
        //   let btns = document.getElementsByClassName("game-btn");
        //   for (let i = 0; i < btns.length; i++){
        //     btns[i].innerHTML = "&nbsp"
        //   };
        //   break

        case "player-one-name":
          let playerOneName = prompt("Player 1 name:", "player 1");
          if (playerOneName != null) {
            target.innerHTML = playerOneName;
          };
          break;

        case "player-two-name":
          let playerTwoName = prompt("Player 2 name:", "player 2");
          if (playerTwoName != null) {
            target.innerHTML = playerTwoName;
          };
          break;
      };
    };
});
};

(function () {
gameInterface();
playGame = gameControl();
return playGame
})();