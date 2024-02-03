function odd_avg(numbers) {
  let sum = 0;
  let avg = 0;
  let count = 0;
  let odds = [];
  for (let x of numbers) {
    if (x % 2 !== 0) {
      sum += x;
      count++;
      odds.push(x);
    }

    if (count === 0) {
      return "Math Error can not divide by zero";
    } else {
      avg = sum / count;
    }
  }
  return { avg, odds, sum };
}
const nums = [1,2,3,4];
const result = odd_avg(nums);
console.log(`Your array is: ${nums}`);
console.log(`The odds numbers are: ${result.odds}`);
console.log(`The average of the odd numbers of your array is : ${result.avg}`);
