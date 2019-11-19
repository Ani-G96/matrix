function printMat(matrix) {

  let res = "";

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      res += matrix[i][j] + '\t';
    }
    res += "\n";
  }
  return res;
}

module.exports = {
  printMat
}