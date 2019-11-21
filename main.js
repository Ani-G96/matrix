const utils = require('./utils');

let matrix1 = [['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I']];


let matrix2 = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

let matrix3 = [[7, 6, 3],
  [8, 5, 2],
  [9, 4, 1]];

console.log(utils.multiplyMatrixes(matrix2, matrix3));
console.log(utils.printMat(matrix1));