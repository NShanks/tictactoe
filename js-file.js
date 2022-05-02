function playGame() {
    const playerFactory = (name, marker) => {
        const sayHello = () => console.log(name + ' is ' + marker);
        return {name, marker, sayHello};
    };

    let playerOne = playerFactory(document.getElementById('playerOne').value, 'X');
    let playerTwo = playerFactory(document.getElementById('playerTwo').value, 'O');

    playerOne.sayHello();
    playerTwo.sayHello();

    let board = document.getElementById('display');

    const gameBoard = (() => {//this is now an IIFE
        const boardDiv = document.createElement('boardDiv')
        gameBoardArray = [0,0,0,0,0,0,0,0,0];
        //boardDiv = gameBoardArray;
        console.log(gameBoardArray);
        boardDiv.innerHTML = 'board text thing blah blah blah';
        board.appendChild(boardDiv);
    })();
}