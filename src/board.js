import { Game } from "./game";

class Board {

    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

    }

    outputBoard(row, col) {
        return this.board[row][col]
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
           // return console.log("error");
            Game.clickHandler();
        }
    }

    checkWinner() {
        
    // Horizontal überprüfen
    for (let row = 0; row < 3; row++) {
        if (this.board[row][0] === this.board[row][1] && this.board[row][1] === this.board[row][2] && this.board[row][0] !== null) {
            return this.board[row][0];
        }
    }

    // Vertikal überprüfen
    for (let col = 0; col < 3; col++) {
        if (this.board[0][col] === this.board[1][col] && this.board[1][col] === this.board[2][col] && this.board[0][col] !== null) {
            return this.board[0][col];
        }
    }

    // Diagonal (von links oben nach rechts unten) überprüfen
    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0] !== null) {
        return this.board[0][0];
    }

    // Diagonal (von rechts oben nach links unten) überprüfen
    if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2] !== null) {
        return this.board[0][2];
    }

    // Kein Gewinner
    return null;

    }
}

export {Board};