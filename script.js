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

const game = (() => {
    const start = (board) => board.forEach(row => {
        row.forEach(space => {
            console.log(space);
        })
    });
    return {
        start,
    };
})();

game.start(gameBoard.board);