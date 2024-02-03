function duplicate_finder(numbers, target) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      count++;
    }
  }
  return count;
}
const nums = [5, 6, 11, 12, 98, 5];
const target = 5;
const result = duplicate_finder(nums, target);
console.log(`Target: ${target} Founded ${result} times`);
