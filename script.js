const playerFactory = (name, mark) => {
    const sayHello = () => console.log("hello");
    return {name, mark, sayHello};
}

const tin = playerFactory("tin", "x");

tin.sayHello();

const gameBoard = (() => {
    const board = [[1,2,3], 
                   [4,5,6],
                   [7,8,9]];
    return  {
        board
    };
})();

function createBoardElement( space ) {
            const boardContainer = document.querySelector('.board-container');

            const spaceOnBoard = document.createElement('div');

            spaceOnBoard.classList.add('space');
            spaceOnBoard.textContent = space;

            spaceOnBoard.addEventListener("click", () => {
                spaceOnBoard.textContent = "x"
            })

            boardContainer.appendChild(spaceOnBoard);
} 

const game = (() => {
    const start = (board) => board.forEach(row => {
        row.forEach(space => {
            createBoardElement(space);
        })
    });
    const playRound = (playerOne, playerTwo) => {
        console.log(playerOne.name)
        console.log(playerTwo)
    }
    return {
        start,
        playRound,
    };
})();

game.start(gameBoard.board);
game.playRound(tin, "toni");