let segments = 10;
let segmentLength = 20;
let snakeX = [];
let snakeY = [];
let colors = ['#ff0000', '#00ff00', '#0000ff']; // Red, Green, Blue

function setup() {
  createCanvas(600, 400);
  // Initialize snake position
  for (let i = 0; i < segments; i++) {
    snakeX[i] = width / 2;
    snakeY[i] = height / 2;
  }
  noStroke();
}

function draw() {
  background(255);

  // Move snake
  for (let i = segments - 1; i > 0; i--) {
    snakeX[i] = snakeX[i - 1];
    snakeY[i] = snakeY[i - 1];
  }
  snakeX[0] = mouseX;
  snakeY[0] = mouseY;

  // Draw snake
  for (let i = 0; i < segments; i++) {
    fill(colors[i % colors.length]);
    ellipse(snakeX[i], snakeY[i], segmentLength, segmentLength);
  }
}
