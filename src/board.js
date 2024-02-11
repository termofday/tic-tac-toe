//import { run, clickHandler } from "../main";

import { Game } from "./game";

class Board {

    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

    }

    displayBoard() {
        for (let row of this.board) {
            console.log(row.join(' | '));
            console.log("------")
        }
    }

    validMark(row, col) {
        return row >= 0 && row < 3 && col >= 0 && col < 3;
    }

    placeMark(row, col, playerMark) {
        if (this.validMark(row, col) && this.board[row][col] === null) {
            this.board[row][col] = playerMark;
            return true;
        } else {
            //return console.log("error");
            Game.clickHandler('')
        }
    }

    checkWinner() {
        
    // zeile

    for (let i = 0; i < 3; i++) {
        if (this.board[i][0] && this.board[i][1] && this.board[i][2] === this.board[i][0] && this.board[i][1] !== null) {
            return this.board[i][0];
        }
    }

    // spalten

    for (let i = 0; i < 3; i++) {
        if (this.board[0][i] && this.board[1][i] && this.board[2][i] === this.board[0][i] && this.board[1][i] !== null) {
            return this.board[0][i];
        }
    }

    // diagonale links oben rechts unten

    if (this.board[0][0] && this.board[1][1] && this.board[0][0] == this.board[2][2] && this.board !== null) {
        return this.board[0][0];
    }

        // diagonale oben rechts unten links

        if (this.board[0][2] && this.board[1][1] && this.board[2][0] == this.board[0][2] && this.board !== null) {
            return this.board[0][0];
        }
    
    }
}

export {Board};