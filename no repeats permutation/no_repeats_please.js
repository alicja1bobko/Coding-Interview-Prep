// No Repeats Please
// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function findPerms(str) {
  if (str.length === 0) return "";
  if (str.length === 1) return str;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingCharsPermuted = findPerms(remainingChars);
    for (let j = 0; j < remainingCharsPermuted.length; j++) {
      const permutation = currentChar + remainingCharsPermuted[j];
      result.push(permutation);
    }
  }
  return result;
}

const permAlone = (str) => {
  let withRepeatingLetters = findPerms(str);
  if (withRepeatingLetters.length === 1) return 1;
  let withoutRepeatingLetters = withRepeatingLetters.filter(
    (el) =>
      el
        .split("")
        .map((element, index, array) => {
          if (array[index] === array[index + 1]) return "";
          return element;
        })
        .join("").length === el.length
  ).length;
  return withoutRepeatingLetters;
};

console.log(permAlone("aaa")); //should return 0
console.log(permAlone("abfdefa")); // should return 2640.
