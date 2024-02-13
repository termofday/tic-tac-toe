import {Board} from '/src/board.js';

class Game {

    constructor(plist, pid) {

        this.actual_player_id = pid;

        this.player_list = plist;

        this.actual_player = null;

        this.board = new Board();

        this.nextIs = document.getElementById('cmd');
    }

whoNext() {
  setInterval(() => {
    this.nextIs.textContent = `Next Player: ${this.actual_player = this.player_list[this.actual_player_id].mark}`;
  }, 300)
}

next() {
  this.actual_player_id = (this.actual_player_id + 1) % this.player_list.length;
}

clickHandler(e) {

   this.actual_player = this.player_list[this.actual_player_id];
  
try {
  switch(e.target.id) {
      case '0':
         this.board.placeMark(0, 0, this.actual_player.mark)
         this.board.displayBoard();
         e.target.textContent = this.board.outputBoard(0, 0);
      break;
      case '1':
        this.board.placeMark(0, 1, this.actual_player.mark)
        this.board.displayBoard();
        e.target.textContent = this.board.outputBoard(0, 1);
      break;
      case '2':
        this.board.placeMark(0, 2, this.actual_player.mark)
        this.board.displayBoard();
        e.target.textContent = this.board.outputBoard(0, 2);
      break;
      case '3':
        this.board.placeMark(1, 0, this.actual_player.mark)
        this.board.displayBoard();
        e.target.textContent = this.board.outputBoard(1, 0);
      break;
      case '4':
        this.board.placeMark(1, 1, this.actual_player.mark)
        this.board.displayBoard();
        e.target.textContent = this.board.outputBoard(1, 1);
      break;
      case '5':
        this.board.placeMark(1, 2, this.actual_player.mark)
        this.board.displayBoard();
        e.target.textContent = this.board.outputBoard(1, 2);
      break;
      case '6':
        this.board.placeMark(2, 0, this.actual_player.mark)
        this.board.displayBoard();
        e.target.textContent = this.board.outputBoard(2, 0);
      break;
      case '7':
        this.board.placeMark(2, 1, this.actual_player.mark)
        this.board.displayBoard();
        e.target.textContent = this.board.outputBoard(2, 1);
      break;
      case '8':
        this.board.placeMark(2, 2, this.actual_player.mark)
        this.board.displayBoard();
        e.target.textContent = this.board.outputBoard(2, 2);
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
  this.next();
}

 run() {
  this.whoNext();
  const field = document.getElementById('app');
  field.classList.add('field');

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