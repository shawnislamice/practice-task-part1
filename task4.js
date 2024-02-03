function longest_word(message) {
  let word = message.split(" ");
  let length = 0;
  let longestWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > length) {
      length = word[i].length;
      longestWord = word[i];
    }
  }
  return longestWord;
}
const str =
  "I was completed my B.Sc in Engineering in Information and Communication Engineering";
const result = longest_word(str);
console.log(`Longest world in the string is: ${result}`);
