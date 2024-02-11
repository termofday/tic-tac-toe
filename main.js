import {Player} from '/src/player.js';
import {Board} from '/src/board.js';
import {Game} from '/src/game.js';


let test = new Player("test", "X");

let board = new Board();

let game = new Game();

game.getField();

console.log(test.getName());

//board.displayBoard()

board.placeMark(0, 0, "X")

//board.displayBoard()

board.placeMark(1, 0, "O")

//board.displayBoard()

board.placeMark(0, 1, "O")

//board.displayBoard()

board.placeMark(0, 2, "O")

//board.displayBoard()


board.placeMark(1, 2, "X")

//board.displayBoard()


board.placeMark(2, 2, "X")

//board.displayBoard()

board.placeMark(1, 1, "O")

//board.displayBoard()

board.placeMark(2, 0, "X")

//board.displayBoard()

board.placeMark(2, 1, "O")

board.displayBoard()

console.log(board.checkWinner())