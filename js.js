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
  activePlayer = playerArr[0]
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
    const replay = confirm(`${activePlayer.name} wins! Play again?`);
    if (replay) {
      resetGame();
      return;
    }
  };

  let gameTie = () => {
    const replay = confirm(`Game over, it's a tie! Play again?`);
    if (replay) {
      resetGame();
      return;
    }
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
// checks diagonal 1
  } else if ( marked[0][0] != 0 &&
    marked[0][0] == marked[1][1] &&
    marked[1][1] == marked[2][2]){
    gameFinisher();
// checks diagonal 2
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

return { playRound }
};

(function () {
playGame = gameControl();
return playGame
})();