let grid;
let cols;
let rows;
let resolution = 10;
let isRunning = true;
let button;
let slider;
let speed;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / resolution);
  rows = floor(height / resolution);

  button = createButton('Pause');
  button.mousePressed(togglePause);

  slider = createSlider(1, 60, 30); // min, max, initial value
  slider.style('width', '80px');

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0;  // Initialize to all dead cells
    }
  }
}

function draw() {
  speed = slider.value();
  frameRate(speed);

  background(0);

  // Display grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(255);
        stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }

  if (isRunning) {
    // Compute next generation
    let next = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = grid[i][j];
        let neighbors = countNeighbors(grid, i, j);

        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }

    grid = next;
  }
}

function mousePressed() {
  toggleCell();
}

function mouseDragged() {
  toggleCell();
}

function toggleCell() {
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    let i = floor(mouseX / resolution);
    let j = floor(mouseY / resolution);

    // Make the cell alive
    grid[i][j] = 1;
  }
}

function togglePause() {
  isRunning = !isRunning;
  button.html(isRunning ? 'Pause' : 'Resume');
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}
