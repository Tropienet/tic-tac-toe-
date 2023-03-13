
const playerFactory = (name , mark) => ({ name , mark })

const gameBoard = (() => {

    const board = [[1,2,3],
                   [4,5,6],
                   [7,8,9]];

    return {
        board
    }

})();

const game = (() => {

    let playerOne;
    let playerTwo;

    function createPlayers() {
        const playerOneName = prompt("Please enter player one name");
        const playerTwoName = prompt("please enter player two name"); 

        playerOne = playerFactory(playerOneName, "x");
        playerTwo = playerFactory(playerTwoName, "o");
    } 

    let currentPlayer = playerOne;

    function checkIfBoardTileIsTaken( boardTileContent ) {
        if(boardTileContent==="x"||boardTileContent==="o") {
            alert("Chose a different tile");
            return false;
        }
        return true;
    }

    function updateCurrentPlayer() {

        if(currentPlayer===playerOne) {
            currentPlayer = playerTwo
        } else {
            currentPlayer = playerOne
        }

    }

        const winnerMsg = document.querySelector(".winner-msg");

    function checkForWinner() {
            function alertWinner () {

                winnerMsg.textContent = `The winner is ${currentPlayer.name}`;
            }

            if(gameBoard.board[0][0]===gameBoard.board[0][1]&&gameBoard.board[0][1]===gameBoard.board[0][2]){
                alertWinner()
            }else if(gameBoard.board[1][0]===gameBoard.board[1][1]&&gameBoard.board[1][1]===gameBoard.board[1][2]){
                alertWinner();
            }else if(gameBoard.board[2][0]===gameBoard.board[2][1]&&gameBoard.board[2][1]===gameBoard.board[2][2]){
                alertWinner();
            }else if(gameBoard.board[0][0]===gameBoard.board[1][0]&&gameBoard.board[1][0]===gameBoard.board[2][0]){
                alertWinner();
            }else if(gameBoard.board[0][1]===gameBoard.board[1][1]&&gameBoard.board[1][1]===gameBoard.board[2][1]){
                alertWinner();
            }else if(gameBoard.board[0][2]===gameBoard.board[1][2]&&gameBoard.board[1][2]===gameBoard.board[2][2]){
                alertWinner();
            }else if(gameBoard.board[0][0]===gameBoard.board[1][1]&&gameBoard.board[1][1]===gameBoard.board[2][2]){
                alertWinner();
            }else if(gameBoard.board[0][2]===gameBoard.board[1][1]&&gameBoard.board[1][1]===gameBoard.board[2][0]){
                alertWinner();
            }
    }

    function createBoardTile( space, rowIndex, spaceIndex ) {
        const boardContainer = document.querySelector(".board-container");

        const boardTile = document.createElement('div');

        boardTile.classList.add("space");

        boardTile.textContent = space;

        boardTile.addEventListener("click", () => {
            if(checkIfBoardTileIsTaken(boardTile.textContent)){
                updateCurrentPlayer();
                boardTile.textContent = currentPlayer.mark;
                gameBoard.board[rowIndex][spaceIndex] = currentPlayer.mark;
                checkForWinner();
            }
        })

        boardContainer.appendChild(boardTile)
    }

    function createBoard() {
        gameBoard.board.forEach((row, rowIndex) => {
            row.forEach((space, spaceIndex) => {
                createBoardTile(space, rowIndex, spaceIndex)
            })
        })

    }

    function deleteBoard() {
        const tiles = document.querySelectorAll(".space");

        tiles.forEach((tile) => {
            tile.remove();
        })
    }



    function restartGame() {
        gameBoard.board =  [[1,2,3],
                   [4,5,6],
                   [7,8,9]];

        deleteBoard();
        createBoard();
        createPlayers();

        winnerMsg.textContent = "";
    }

    
    return {
        createPlayers,
        createBoard,
        restartGame,
    }

})();

function createStartButton() {
    const startButton  = document.querySelector(".start-btn");
    const boardContainer = document.querySelector(".board-container");

    boardContainer.style.visibility = "hidden";

    startButton.addEventListener("click", () => {
        game.restartGame();
        boardContainer.style.visibility = "visible"
    })
}

createStartButton()