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
const left = '37';
const up = '38';
const right = '39';
const down = '40';

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
            newSnake.classList.add(['snake']);
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
    switch (event.keyCode) {
        case left: {
            console.log('left');
            break;
        } 
        case up: {
            console.log('up');
            break;
        }
        case right: {
            console.log('right');
            break;
        }
        case down: {
            console.log('down');
            break;
        }
    }
}
