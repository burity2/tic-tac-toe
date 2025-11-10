function gameBoard(){
  // creates the board
  const rows = 3;
  const columns = 3;
  const board = [];
  // for loop for 2d arrays
  for(i = 0; i < rows; i++){
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
  //creates two autonamed players
  return [
    { name: player1, mark: "X" }, 
    { name: player2, mark: "O" }
  ];
};

function GameControl(){

//create the players and calls the new gameboard instance
const playerArr = createPlayers();
const board = gameBoard();

//switch between players
let activePlayer = playerArr[0];

const playerSwitcher = function() {
  activePlayer = activePlayer === playerArr[0] ? playerArr[1] : playerArr[0];
};

//call for the player of current round
const newRound = function(){
console.log(`It's ${activePlayer.name}'s turn`);
}

//used to mark the board
const playRound = function(row, column) {
const marked = board.addMark(activePlayer.mark, row, column)

//checks for vitories
const victoryChecker = function(){
  const treeXInARow = marked.join(" ").includes("X,X,X");
  const treeOInARow = marked.join(" ").includes("O,O,O");
  const tie = marked.join("").includes(0)

  let gameFinisher = () => {
    playerSwitcher();
    console.log(`Game over, ${activePlayer.name} wins!`);
  }

  let gameTie = () => {
    console.log(`Game over, it's a tie!`)
  }

  //checks columns
  for (i = 0; i < 3; i++){
    marked[0][i] != 0 &&
    marked[0][i] == marked[1][i] &&
    marked[1][i] == marked[2][i] ?
    gameFinisher() : false
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
  } else if(marked[0][0] != 0) {
    for (i = 0; i < 3; i++){
    marked[0][i] != 0 &&
    marked[0][i] == marked[1][i] &&
    marked[1][i] == marked[2][i] ?
    gameFinisher() : false
  };
  } else if (tie == false){
    gameTie();
  };
  
};

if (marked){
  playerSwitcher();
  newRound();
  victoryChecker();
  return marked
}

};

newRound();

return { playRound }
};

let test = GameControl();