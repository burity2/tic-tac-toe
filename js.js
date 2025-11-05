function gameBoard() {

    const board = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]];

    getBoard = () => board;

    checkGame = () => {
        if(this.board[0].join("") == "XXX"){
                console.log("EUREKA")
        } else {
                console.log("Abudabi");
        }
    };

    addMarker = (row, col) => {
        
        this.board[row][col] = this.type;
        
        return this.board;
    };
};

const player = Object.create(gameBoard);
player.playerType = this.type;

const playerX = Object.create(player);
playerX.type = "X";

const playerO = Object.create(player);
playerO.type = "O";

const updater = Object.create(gameBoard);
updater.checkGame = function(){
    for (i = 0; i < 3; i++){
        board[i].join("")
    }
    

}

