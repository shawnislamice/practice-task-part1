function vowel_count(message) {
  let count = 0;
  for (let i = 0; i < message.length; i++) {
    if (
      message[i] === "a" ||
      message[i] === "e" ||
      message[i] === "i" ||
      message[i] === "o" ||
      message[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
let str = "My name is Shawon Islam";
const result = vowel_count(str.toLowerCase());
console.log(`Number of vowels in your message is ${result}`);
