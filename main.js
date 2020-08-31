// let falseCond;
// let trueCond = 1;

// function trueAlert() {
//     alert(true);
// }

// function falseAlert() {
//     alert(false);
// }

// trueCond = prompt();

// if (trueCond) {
//     trueAlert();
// } else {
//     falseAlert();
// }

let snake = document.getElementById('snake');

const windowWidth = document.documentElement.clientWidth;
const windowHeight = document.documentElement.clientHeight;
const snakeWidth = 384;
const left = 'ArrowLeft';
const up = 'ArrowUp';
const right = 'ArrowRight';
const down = 'ArrowDown';

createInterval(snake);

document.addEventListener('keydown', rotateSnake);

function createInterval(element) {
    let offset = -snakeWidth;
    let isAdded = false;
    let interval = setInterval(() => {
        element.style.left = offset + 'px';
        offset += 5;
        if (windowWidth <= snakeWidth + offset && !isAdded) {
            isAdded = true;
            let newSnake = document.createElement('div');
            newSnake.innerHTML = element.innerHTML;
            newSnake.classList = element.classList;
            newSnake.style.left = -snakeWidth + 'px';
            document.body.appendChild(newSnake);
            createInterval(newSnake);
        }
        if (offset >= windowWidth) {
            element.remove();
            clearInterval(interval);
        }
    }, 100)
}

function rotateSnake(event) {
    let snakes = document.getElementsByClassName('snake');
    switch (event.key) {
        case left: {
            for (let i = 0; i < snakes.length; i++) {
                snakes[i].classList.remove(['snake-bottom']);
                snakes[i].classList.remove(['snake-right']);
                snakes[i].classList.remove(['snake-top']);
             }
            break;
        } 
        case up: {
            for (let i = 0; i < snakes.length; i++) {
                snakes[i].classList.remove(['snake-bottom']);
                snakes[i].classList.remove(['snake-right']);
               snakes[i].classList.add(['snake-top']);  
            }
            break;
        }
        case right: {
            for (let i = 0; i < snakes.length; i++) {
                snakes[i].classList.remove(['snake-bottom']);
                snakes[i].classList.remove(['snake-top']);
                snakes[i].classList.add(['snake-right']);  
             }
            break;
        }
        case down: {
            for (let i = 0; i < snakes.length; i++) {
                snakes[i].classList.remove(['snake-right']);
                snakes[i].classList.remove(['snake-top']);
                snakes[i].classList.add(['snake-bottom']);  
             }
            break;
        }
    }
}
