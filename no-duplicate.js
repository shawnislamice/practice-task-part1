//Array has some duplicate elements
const users = [
  "Shawon",
  "Srabon",
  "Siyam",
  "Sopon",
  "Sumi",
  "Shawon",
  "Shawon",
];
function no_duplicate(array) {
  const noDuplicate = [];
  for (let x of array) {
    if (!noDuplicate.includes(x)) {
      noDuplicate.push(x);
    }
  }
  return noDuplicate;
}
const result = no_duplicate(users);
console.log(result);
