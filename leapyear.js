function isLeafYear(year) {
  if (year % 4 === 0) {
    return "The year is a leaf year";
  } else {
    return "The year is not a leaf year";
  }
}
const isleafyear = isLeafYear(2100);
console.log(isleafyear);
//Those year is not divisible by 100, if the year is divisible by 4: then it will be a leap year.
function isLeafYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return "The year is a leaf year";
  } else if (year % 100 === 0 && year % 400 === 0) {
    return "The year is a leap year";
  } else {
    return "The year is not a leaf year";
  }
}
const leapYear = isLeafYear2(2100);

console.log(leapYear);
