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
        reset();//this allows me to click the Play Game button without it adding another 9 tiles

        for (let i = 0; i<9; i++){
            gameBoard = document.createElement(`tile`);
            gameBoard.id = i;
            //gameBoard.innerHTML = ' '
            show.appendChild(gameBoard);
            gameBoardArray.push(i)
        }

        function reset(){//delete all the gameboard stuff
            while (show.firstChild){
                show.removeChild(show.firstChild)
            }
        }
        
        let xo = 0;
        let turn = 'X';

        //alternate between x and o
        function getTurn() {
            if (xo % 2 != 0) {
                turn = 'O'
            } else {
                turn = 'X'
            }
            return turn;
        }

        function getWin() {
            if (gameBoardArray[0] === 'X' && gameBoardArray[1] === 'X' && gameBoardArray[2] === 'X') {
                alert(playerOne.name + ' wins!')
                reset();
            } else if (gameBoardArray[3] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[5] === 'X'){
                alert(playerOne.name + ' wins!')
                reset();
            } else if (gameBoardArray[6] === 'X' && gameBoardArray[7] === 'X' && gameBoardArray[8] === 'X'){
                alert(playerOne.name + ' wins!')
                reset();
            } else if (gameBoardArray[0] === 'X' && gameBoardArray[3] === 'X' && gameBoardArray[6] === 'X'){
                alert(playerOne.name + ' wins!')
                reset();
            } else if (gameBoardArray[1] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[7] === 'X'){
                alert(playerOne.name + ' wins!')
                reset();
            } else if (gameBoardArray[2] === 'X' && gameBoardArray[5] === 'X' && gameBoardArray[8] === 'X'){
                alert(playerOne.name + ' wins!')
                reset();
            } else if (gameBoardArray[0] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[8] === 'X'){
                alert(playerOne.name + ' wins!')
                reset();
            } else if (gameBoardArray[2] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[6] === 'X'){
                alert(playerOne.name + ' wins!')
                reset();
            }

            if (gameBoardArray[0] === 'O' && gameBoardArray[1] === 'O' && gameBoardArray[2] === 'O') {
                alert(playerTwo.name + ' wins!')
                reset();
            } else if (gameBoardArray[3] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[5] === 'O'){
                alert(playerTwo.name + ' wins!')
                reset();
            } else if (gameBoardArray[6] === 'O' && gameBoardArray[7] === 'O' && gameBoardArray[8] === 'O'){
                alert(playerTwo.name + ' wins!')
                reset();
            } else if (gameBoardArray[0] === 'O' && gameBoardArray[3] === 'O' && gameBoardArray[6] === 'O'){
                alert(playerTwo.name + ' wins!')
                reset();
            } else if (gameBoardArray[1] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[7] === 'O'){
                alert(playerTwo.name + ' wins!')
                reset();
            } else if (gameBoardArray[2] === 'O' && gameBoardArray[5] === 'O' && gameBoardArray[8] === 'O'){
                alert(playerTwo.name + ' wins!')
                reset();
            } else if (gameBoardArray[0] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[8] === 'O'){
                alert(playerTwo.name + ' wins!')
                reset();
            } else if (gameBoardArray[2] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[6] === 'O'){
                alert(playerTwo.name + ' wins!')
                reset();
            }

            if (typeof gameBoardArray[0] != 'number' && typeof gameBoardArray[1] != 'number' && typeof gameBoardArray[2] != 'number' && typeof gameBoardArray[3] != 'number' && typeof gameBoardArray[4] != 'number' && typeof gameBoardArray[5] != 'number' && typeof gameBoardArray[6] != 'number' && typeof gameBoardArray[7] != 'number' && typeof gameBoardArray[8] != 'number'){
                alert('Tie game!!')
                reset();
            }
        }

        //give all tiles a click listener and do something when clicked
        document.querySelectorAll('tile').forEach(tile => {
            tile.addEventListener('click', (e) => {
                let clickedTile = e.target.id;
                if (tile.textContent == ''){//cant click where theres already a tile logic
                    console.log(tile.textContent)
                    gameBoardArray.splice(clickedTile, 1, turn)
                    console.log(gameBoardArray)
                    tile.textContent = turn;
                    xo++;
                } else {
                    alert('You cannot go there!')
                }
                getTurn();
                console.log(turn);
                console.log(xo);
                getWin();
                
            });
        });
    })();
}
//have it place an X when the array changes it to X