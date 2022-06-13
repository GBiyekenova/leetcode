var minimumTotal = function(triangle) {
  //return the smallest number from top to bottom.
  //choose the smallest number in an array
  //compare only numbers with index i and i + 1
  //if number index is > i || > i + 1 => don't compare
  let sum = 0;
  let index = 0;
  for (let i = 0; i < triangle.length; i++) {
      console.log("first if")
      if (triangle[i].length == 1) {
          sum += triangle[i][0];
          index = 0;
          console.log("sec if")
          console.log(triangle[i][0])
          console.log(sum)
      } else{
          for (let y = 0; y < triangle[i].length; y++) {
          console.log("third if")
          if (triangle[i][y] < triangle[i][y + 1]) {
              console.log(triangle[i][y]);
              console.log(triangle[i][y + 1]);
              sum += triangle[i][y]
              break;
              console.log(sum + "sum");
          } else if (triangle[i][y] === triangle[i][y + 1]) {
              sum += triangle[i][y];
              break;
              
          } else if (triangle[i][y] > triangle[i][y + 1]) {
              sum += triangle[i][y + 1];
              console.log(sum + "sum");
              break;
          }
      }
          
      }
      
  }
  console.log("sum" + sum);
  return sum;
};