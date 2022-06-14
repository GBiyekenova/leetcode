triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
//Output: 11
const minimumTotal = function (triangle) {
  //return the smallest number from top to bottom.
  //choose the smallest number in an array
  //compare only numbers with index i and i + 1
  //if number index is > i || > i + 1 => don't compare
  let sum = 0;
  for (let i = 0; i < triangle.length; i++) {
    if (triangle[i].length === 1) {
      sum += triangle[i][0];
    } else {
      for (let y = 0; y < triangle[i].length; y++) {
        if (triangle[i][y] <= triangle[i][y + 1]) {
          sum += triangle[i][y];
          break;
        } else if (triangle[i][y] > triangle[i][y + 1]) {
          sum += triangle[i][y + 1];
          break;
        }
      }
    }
  }
  return sum;
};
