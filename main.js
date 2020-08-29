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

const snakeWidth = 384;

createInterval(snake);

function createInterval(element) {
    let offset = -snakeWidth;
    return setInterval(() => {
        element.style.left = offset + 'px';
        offset += 5;
        if (windowWidth === snakeWidth + offset) {
            let newSnake = document.createElement('div');
            newSnake.innerHTML = snake.innerHTML;
            newSnake.classList.add(['snake']);
            newSnake.style.left = -snakeWidth;
            document.body.appendChild(newSnake);
            createInterval(newSnake);
        }
    }, 100)
}


