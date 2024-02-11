class Game {
    
    constructor(player) {
        this.player = player;
    }

    game(player) {

        let player_list = [];
        let active_player = null;
    }

    fieldHandler(player) {

    }

    getField() {
        const field = document.getElementById('app');
        field.classList.add('field')

        let newHaW = field.offsetWidth / 4;

        console.log(newHaW)
        for (let i = 0; i <= 8; i++) {
            let ele = document.createElement('div');
            
            ele.style.width = `${newHaW}px`;
            ele.style.height = `${newHaW}px`;

            ele.classList.add('inner');

            ele.textContent = "X";

            ele.addEventListener('click', this.fieldHandler);

            field.appendChild(ele);
        }
    }
}

export {Game};