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

    function createBoardTile( space, rowIndex, spaceIndex ) {
        const boardContainer = document.querySelector(".board-container");

        const boardTile = document.createElement('div');

        boardTile.classList.add("space");

        boardTile.textContent = space;

        boardTile.addEventListener("click", () => {
            boardTile.textContent = "x";
            gameBoard.board[rowIndex][spaceIndex] = "x";
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

    
    return {
        createPlayers,
        createBoard,
    }

})();

game.createPlayers();
game.createBoard();

console.log(gameBoard.board);