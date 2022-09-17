'use strict';
const gridContainer = document.querySelector('.grid-container');

function makeGrid(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  const totalCells = rows * cols;
  for (let cell = 0; cell < totalCells; cell++) {
    let emptyCell = document.createElement('div');
    emptyCell.innerText = cell + 1;
    gridContainer.appendChild(emptyCell).className = 'grid-item';
  }
}
// makeGrid (rows, columns)
makeGrid(16, 16);
