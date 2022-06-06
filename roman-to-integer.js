const romanToInt = function (s) {
  let sum = 0;
  // Used to reference what each string (romain character) value is
  const dictionary = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  // We need to iterate the string to find each value
  for (let i = 0; i < s.length; i++) {
    // Grab the current letter
    const letter = s[i];
    // Grab the second letter next to current to check if special conditions are there (such as IV, CM etc.)
    const letterSet = s[i] + s[i + 1];
    // We want to check first if a special combo exist
    if (letterSet in dictionary) {
      // If exist, add the value
      sum += dictionary[letterSet];
      // Increment i since we do not want to repeat the character next to.
      // For example: currentRomain =>"I" and Combo => "IV".
      // Whole value is 4. If we don't add i, next iteraction will say we are at "V" now when it has already been added.
      i++;
      continue;
    }

    // Add single romain value if special character not present
    sum += dictionary[letter];
  }
  // Return total sum
  return sum;
};
