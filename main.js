import {Player} from '/src/player.js';
import {Board} from '/src/board.js';
import { Game } from './src/game';


let p1 = new Player("Player 1", "X", 0);
let p2 = new Player("Player 2", "O", 0);

const player_list = [p1, p2];
let actual_player_id = 0;
let actual_player = player_list[actual_player_id];

let board = new Board();

let game = new Game(player_list, actual_player_id);

game.run()

/*
function clickHandler(e) {

  actual_player = player_list[actual_player_id];

try {
  switch(e.target.id) {
      case '0':
         board.placeMark(0, 0, actual_player.mark)
         board.displayBoard()

      break;
      case '1':
        board.placeMark(0, 1, actual_player.mark)
        board.displayBoard()
      break;
      case '2':
        board.placeMark(0, 2, actual_player.mark)
        board.displayBoard()
      break;
      case '3':
        board.placeMark(1, 0, actual_player.mark)
        board.displayBoard()
      break;
      case '4':
        board.placeMark(1, 1, actual_player.mark)
        board.displayBoard()
      break;
      case '5':
        board.placeMark(1, 2, actual_player.mark)
        board.displayBoard()
      break;
      case '6':
        board.placeMark(2, 0, actual_player.mark)
        board.displayBoard()
      break;
      case '7':
        board.placeMark(2, 1, actual_player.mark)
        board.displayBoard()
      break;
      case '8':
        board.placeMark(2, 2, actual_player.mark)
        board.displayBoard()
      break;
      default:
          console.error("Error in clickHandler() ...");
      break;
  }
}
catch {
  console.error('Field is played.')
}
  console.log(board.checkWinner())
  actual_player_id = (actual_player_id + 1) % player_list.length;
}

function run() {
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

       ele.addEventListener('click', clickHandler);

       field.appendChild(ele);
   }

  }

  run();


  export {run, clickHandler}
  */

// test

/*
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

*/