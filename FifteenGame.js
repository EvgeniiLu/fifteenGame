document.addEventListener('DOMContentLoaded', () => {

    setTimeout(()=> {
        let arr = document.querySelectorAll('.data');
        let randomList = [];
        arr.forEach(value => randomList.push(value));
        for(let i = randomList.length - 1; i > 0; i--) {
            let randome = Math.floor(Math.random() * (i + 1));
            [randomList[i], randomList[randome]] = [randomList[randome], randomList[i]];
        }
        randomList.forEach((value, key) => {
            value.classList.add(`data${key}`);
        });
    }, 0);

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleKeyPress);

    function handleKeyPress(event) {
        if(event.code === 'ArrowDown' || event.target.id === 'down') {
            moveFunc('up');
        } else if (event.code === 'ArrowUp' || event.target.id === 'up'){
            moveFunc('down');
        } else if (event.code === 'ArrowRight' || event.target.id === 'right'){
            moveFunc('left');
        } else if (event.code === 'ArrowLeft' || event.target.id === 'left'){
            moveFunc('right');
        }
    }
    
    function moveFunc(value) {
        let emptySlot = document.querySelector('.data0');
        let x = +emptySlot.id[1];
        let y = +emptySlot.id[3];
        if("down" == value) {
            y++;
            if(y > 3) {
                y = 3;
            }
        } else if("right" == value) {
            x++;
            if(x > 3) {
                x = 3;
            }
        } else if("up" == value) {
            y--;
            if(y < 0) {
                y = 0;
            }
        } else if("left" == value) {
            x--;
            if(x < 0) {
                x = 0;
            }
        } 
        emptySlotPlases(emptySlot,`x${x}y${y}`);
    }

    function emptySlotPlases(emptySlot, value) {
        let newNumSlot = document.getElementById(value);
        if(!newNumSlot.hasAttribute('data0')) {
            emptySlot.classList.remove(`${emptySlot.classList[1]}`);
            emptySlot.classList.add(`${newNumSlot.classList[1]}`);
            newNumSlot.classList.remove(`${newNumSlot.classList[1]}`);
            newNumSlot.classList.add('data0');
        }
    }
});