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
const leftOffsetProp = 'right';
const rightOffsetProp = 'left';
const upOffsetProp = 'bottom';
const downOffsetProp = 'top';

let currentOffsetProp = rightOffsetProp;
createInterval(snake);

document.addEventListener('keydown', rotateSnake);

function createInterval(element) {
    let offset = -snakeWidth;
    let isAdded = false;
    let interval = setInterval(() => {
        element.style[currentOffsetProp] = offset + 'px';
        removeOppositeOffset(element);
        offset += 5;
        if (windowWidth <= snakeWidth + offset && !isAdded) {
            isAdded = true;
            let newSnake = document.createElement('div');
            newSnake.innerHTML = element.innerHTML;
            newSnake.classList = element.classList;
            newSnake.style[currentOffsetProp] = -snakeWidth + 'px';
            removeOppositeOffset(newSnake);
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
             currentOffsetProp = leftOffsetProp;
            break;
        } 
        case up: {
            for (let i = 0; i < snakes.length; i++) {
                snakes[i].classList.remove(['snake-bottom']);
                snakes[i].classList.remove(['snake-right']);
               snakes[i].classList.add(['snake-top']);  
            }
            currentOffsetProp = upOffsetProp;
            break;
        }
        case right: {
            for (let i = 0; i < snakes.length; i++) {
                snakes[i].classList.remove(['snake-bottom']);
                snakes[i].classList.remove(['snake-top']);
                snakes[i].classList.add(['snake-right']);  
             } 
             currentOffsetProp = rightOffsetProp;
            break;
        }
        case down: {
            for (let i = 0; i < snakes.length; i++) {
                snakes[i].classList.remove(['snake-right']);
                snakes[i].classList.remove(['snake-top']);
                snakes[i].classList.add(['snake-bottom']);  
             }
             currentOffsetProp = downOffsetProp;
            break;
        }
    }
}

function removeOppositeOffset(element) {
    switch (currentOffsetProp) {
        case rightOffsetProp: {
            element.style[leftOffsetProp] = '';
            break;
        }
        case leftOffsetProp: {
            element.style[rightOffsetProp] = '';
            break;
        }
        case upOffsetProp: {
            element.style[downOffsetProp] = '';
            break;
        }
        case downOffsetProp: {
            element.style[upOffsetProp] = '';
            break;
        }
    
        default:
            break;
    }
} 


    