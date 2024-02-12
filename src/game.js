import {Board} from '/src/board.js';

class Game {

    constructor(plist, pid) {

        this.actual_player_id = pid;

        this.player_list = plist

        this.actual_player = null

        this.board = new Board();
    }

clickHandler(e) {

   this.actual_player = this.player_list[this.actual_player_id];
  
try {
  switch(e.target.id) {
      case '0':
        console.log(this.board)
        e.target.textContent = this.board[1];
         this.board.placeMark(0, 0, this.actual_player.mark)
         this.board.displayBoard()
      break;
      case '1':
        e.target.textContent = this.actual_player.mark;
        this.board.placeMark(0, 1, this.actual_player.mark)
        this.board.displayBoard()
      break;
      case '2':
        e.target.textContent = this.actual_player.mark;
        this.board.placeMark(0, 2, this.actual_player.mark)
        this.board.displayBoard()
      break;
      case '3':
        e.target.textContent = this.actual_player.mark;
        this.board.placeMark(1, 0, this.actual_player.mark)
        this.board.displayBoard()
      break;
      case '4':
        e.target.textContent = this.actual_player.mark;
        this.board.placeMark(1, 1, this.actual_player.mark)
        this.board.displayBoard()
      break;
      case '5':
        e.target.textContent = this.actual_player.mark;
        this.board.placeMark(1, 2, this.actual_player.mark)
        this.board.displayBoard()
      break;
      case '6':
        e.target.textContent = this.actual_player.mark;
        this.board.placeMark(2, 0, this.actual_player.mark)
        this.board.displayBoard()
      break;
      case '7':
        e.target.textContent = this.actual_player.mark;
        this.board.placeMark(2, 1, this.actual_player.mark)
        this.board.displayBoard()
      break;
      case '8':
        e.target.textContent = this.actual_player.mark;
        this.board.placeMark(2, 2, this.actual_player.mark)
        this.board.displayBoard()
      break;
      default:
          console.error("Error in clickHandler() ...");
      break;
  }
}
catch (e) {
  console.error(e, 'Field is played.')
  return
}
  console.log(this.board.checkWinner())

  this.actual_player_id = (this.actual_player_id + 1) % this.player_list.length;
}


 run() {
  const field = document.getElementById('app');
  field.classList.add('field')

  let newHaW = field.offsetWidth / 4;

  let id = 0;

   for (let i = 0; i <= 8; i++) {

      let ele = document.createElement('div');
       
       ele.style.width = `${newHaW}px`;
       ele.style.height = `${newHaW}px`;

       ele.classList.add('inner');

       ele.textContent = "";
       
       ele.id = id;
       id++;

       ele.addEventListener('click', this.clickHandler.bind(this));

       field.appendChild(ele);
   }

  }

}

export {Game}