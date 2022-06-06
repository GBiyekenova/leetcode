const longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length == 0) return prefix;

  for (i = 0; i < strs[0].length; i++) {
    const characters = strs[0][i];
    for (j = 1; j < strs.length; j++) {
      if (strs[j][i] !== characters) return prefix;
    }
    prefix += characters;
  }
  return prefix;
};
