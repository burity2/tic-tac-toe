function gameBoard(){
  const rows = 3;
  const columns = 3;
  const board = [];

  for(i = 0; i < rows; i++){
    board[i] = [];
      for(j = 0; j < columns; j++){
        board[i].push(0);
      };
  };

  const addMark = function(mark, row, column){
    if (board[row][column] != 0) {
    } else {
      board[row][column] = mark
      return board;
    };
  };

  const getBoard = () => board;

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

function GameControl(){

const playerArr = createPlayers();
const board = gameBoard();

let activePlayer = playerArr[0];

const newRound = function(){
console.log(`It's ${activePlayer.name}'s turn`);
}


const playerSwitcher = function() {
  activePlayer = activePlayer === playerArr[0] ? playerArr[1] : playerArr[0];
};

const playRound = function(row, column) {
const marked = board.addMark(activePlayer.mark, row, column)

const victoryChecker = function(){
  const treeXInARow = marked.join(" ").includes("X,X,X");
  const treeOInARow = marked.join(" ").includes("O,O,O");

  if (treeOInARow || treeXInARow) {
    console.log("Eureka!")
  } else if ((marked[0][0] == marked[1][0] == marked[2][0]) || (marked[0][1] == marked[1][1] == marked[2][1]) || (marked[0][2] == marked[1][2] == marked[2][2]) && marked != 0) {
    console.log("dumb eureka...")
  } else {

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

/* 
//THE REAL DEAL WORK-O-MOJO
function gameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(cell());
        }
    };

    const getBoard = () => board;

const addMark = (row, column, player) => {
    if (board[row][column].getValue() === 0) { 
        board[row][column].marker(player);
        return true; 
    }
    return false;
};

    const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

  return { getBoard, addMark, printBoard }
};

function cell() {
  let value = 0;

  const marker = (player) => {
    value = player;
  };

  const getValue = () => value;

  return { marker, getValue };
};

function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = gameBoard();

  const players = [
    {
      name: playerOneName,
      mark: "X"
    },
    {
      name: playerTwoName,
      mark: "O"
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

const playRound = (row, column) => {
    const marked = board.addMark(row, column, getActivePlayer().mark);
    
    if (marked) {
        switchPlayerTurn();
        printNewRound();
    } else {
    }
};

  printNewRound();

  return {
    playRound,
    getActivePlayer
  };
}

const game = GameController();
 */
