const isPalindrome = function (x) {
  let str = x.toString().split("").reverse().join("");

  return str == x;
};
