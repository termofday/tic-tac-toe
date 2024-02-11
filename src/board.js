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

    clickHandler(e, player) {
        //console.log(e.target.id)
        e.target.textContent = "D"
        switch(e.target.id) {
            case '0':
               this.placeMark(0, 0, "D")
               this.displayBoard()
               
            break;
            case '1':
                this.placeMark(0, 1, "D")
                this.displayBoard()
            break;
            case '2':
                this.placeMark(0, 2, "D")
                this.displayBoard()
            break;
            case '3':
                this.placeMark(1, 0, "D")
                this.displayBoard()
            break;
            case '4':
                this.placeMark(1, 1, "D")
                this.displayBoard()
            break;
            case '5':
                this.placeMark(1, 2, "D")
                this.displayBoard()
            break;
            case '6':
                this.placeMark(2, 0, "D")
                this.displayBoard()
            break;
            case '7':
                this.placeMark(2, 1, "D")
                this.displayBoard()
            break;
            case '8':
                this.placeMark(2, 2, "D")
                this.displayBoard()
            break;
            default:
                console.error("Error in clickHandler() ...");
            break;
        }
        
     }
 
     getField() {
        const field = document.getElementById('app');
        field.classList.add('field')
 
        let newHaW = field.offsetWidth / 4;
 
        let id = 0;

         for (let i = 0; i <= 8; i++) {

            let ele = document.createElement('div');
             
             ele.style.width = `${newHaW}px`;
             ele.style.height = `${newHaW}px`;
 
             ele.classList.add('inner');
 
             ele.textContent = "X";
             
             ele.id = id;
             id++;
 
             ele.addEventListener('click', this.clickHandler.bind(this));
 
             field.appendChild(ele);
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
            return false;
        }
    }

    checkWinner() {
        
    // zeile

    for (let i = 0; i < 3; i++) {
        if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2] && this.board[i][0] !== null) {
            return this.board[i][0]
        }
    }

    // spalten

    for (let i = 0; i < 3; i++) {
        if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i] && this.board[0][i] !== null) {
            return this.board[0][i];
        }
    }

    // diagonale links oben rechts unten

    if (this.board[0][0] === this.board[1][1] && this.board[0][0] == this.board[2][2] && this.board !== null) {
        return this.board[0][0];
    }

        // diagonale oben rechts unten links

        if (this.board[0][2] === this.board[1][1] && this.board[2][0] == this.board[0][2] && this.board !== null) {
            return this.board[0][0];
        }
    
    }
}

export {Board};