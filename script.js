const playerFactory = (name , mark) => ({ name , mark })

const gameBoard = (() => {

    const board = [1,2,3,4,5,6,7,8,9];

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

    function logPlayerNames() {
        console.log(playerOne.name);
        console.log(playerTwo.name);
    }

    return {
        createPlayers,
        logPlayerNames
    }

})();

game.createPlayers();
game.logPlayerNames();

console.log(gameBoard.board);