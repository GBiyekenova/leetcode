const isValid = function (s) {
  //every 2 consecutive char have to be the same => true
  let valid = {
    "()": "()",
    "[]": "[]",
    "{}": "{}",
  };
  if (s.length % 2 !== 0) {
    return false;
  } else if (
    s[0] + s[1] == valid["()"] ||
    s[0] + s[1] == valid["[]"] ||
    s[0] + s[1] == valid["{}"]
  ) {
    let arrOfStrings = s.match(/.{1,2}/g);
    let bool = true;
    for (let i = 0; i < arrOfStrings.length; i++) {
      if (
        arrOfStrings[i] == valid["()"] ||
        arrOfStrings[i] == valid["[]"] ||
        arrOfStrings[i] == valid["{}"]
      ) {
        bool = true;
      } else {
        bool = false;
      }
    }
    return bool;
  } else if (
    s[0] + s[s.length - 1] == valid["()"] ||
    s[0] + s[s.length - 1] == valid["[]"] ||
    s[0] + s[s.length - 1] == valid["{}"]
  ) {
    return true;
  } else {
    return false;
  }
};
