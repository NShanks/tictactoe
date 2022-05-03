function playGame() {
    const playerFactory = (name, marker) => {
        const sayHello = () => console.log(name + ' is ' + marker);
        return {name, marker, sayHello};
    };

    let playerOne = playerFactory(document.getElementById('playerOne').value, 'X');
    let playerTwo = playerFactory(document.getElementById('playerTwo').value, 'O');

    playerOne.sayHello();
    playerTwo.sayHello();


    const gameBoard = (() => {//this is now an IIFE
        const boardDiv = document.createElement('boardDiv')
        let gameBoardArray = [];
        console.log(gameBoardArray);

        //create the tiles
        let show = document.getElementById('display');
        let gameBoard = document.createElement('tile');
        for (let i = 0; i<9; i++){
            gameBoard = document.createElement(`tile`);
            gameBoard.id = i;
            gameBoard.innerHTML = ' '
            show.appendChild(gameBoard);
            gameBoardArray.push('empty')
        }
        
        // //do something when a tile is clicked
        // function clickTile() {
        //     gameBoardArray.splice(event.target, 1, 'X')
        //     console.log(gameBoardArray)
        //     console.log(event.target);
        // }

        //give all tiles a click listener
        document.querySelectorAll('tile').forEach(tile => {
            tile.addEventListener('click', (e) => {
                //clickTile();
                let clickedTile = e.target.id;
                console.log(clickedTile)
                gameBoardArray.splice(clickedTile, 1, 'X')
                console.log(gameBoardArray)
                //console.log(event.target);
            });
        });
    })();
}
//have it place an X when the array changes it to X