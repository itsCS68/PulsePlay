
// Basic Snake game structure placeholder
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = [{ x: 200, y: 200 }];
let dx = 20;
let dy = 0;

function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.forEach(part => {
        ctx.fillStyle = "#a64eff";
        ctx.fillRect(part.x, part.y, 20, 20);
    });
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    snake.pop();
}

function gameLoop() {
    moveSnake();
    drawSnake();
}

document.addEventListener("keydown", event => {
    switch(event.key) {
        case "ArrowUp": dx = 0; dy = -20; break;
        case "ArrowDown": dx = 0; dy = 20; break;
        case "ArrowLeft": dx = -20; dy = 0; break;
        case "ArrowRight": dx = 20; dy = 0; break;
    }
});

setInterval(gameLoop, 150);
