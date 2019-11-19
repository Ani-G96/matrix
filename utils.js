function multiplyMatrixes(matrix1, matrix2){
  let arr1 = matrix1[0];
  let arr2 = [];
  for (let i = 0; i < matrix2.length; i++){
    arr2.push(matrix2[i][0]);
  }
  if(arr1.length === arr2.length){
    let matrix1Row = matrix1.length;
    let matrix1Col = matrix1[0].length;
    let matrix2Col = matrix2[0].length;
    let ans = new Array(matrix1Row);
    for (let k = 0; k < matrix1Row; k++) {
      ans[k] = new Array(matrix2Col); // initialize the current row
      for (let c = 0; c < matrix2Col; c++) {
        ans[k][c] = 0;             // initialize the current cell
        for (let i = 0; i < matrix1Col; i++) {
          ans[k][c] += matrix1[k][i] * matrix2[i][c];
        }
      }
    }
    return ans;
  }else{
    return 'Numbers doesnt much';
  }
}

module.exports = {
  multiplyMatrixes
}; 